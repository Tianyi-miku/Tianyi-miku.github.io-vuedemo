<template>
  <div id="Lightningchart">

  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import audio2ch from "../../../public/mock/audio2ch.json";
// import * as api from './service'
import { lightningChart, LUT, PalettedFill, emptyLine, AxisScrollStrategies, AxisTickStrategies, regularColorSteps, Themes } from '@arction/lcjs'

const historyMs = 27 * 1000
// Sampling rate as samples per second.
const sampleRateHz = 35
const sampleIntervalMs = 1000 / sampleRateHz
onMounted(() => {
  setChart()
})
let dashboard

function setChart() {


  // Create empty dashboard and charts.
  dashboard = lightningChart()
    .Dashboard({
      numberOfColumns: 2,
      numberOfRows: 2,
      theme: Themes.darkGold,
      container: 'Lightningchart'
    })
    .setRowHeight(0, 1)
    .setRowHeight(1, 2)

  // Define value -> color lookup table.
  const theme = dashboard.getTheme()
  const lut = new LUT({
    steps: regularColorSteps(0, 255, theme.examples.spectrogramColorPalette),
    units: 'dB',
    interpolate: true,
  })

  const rowStep = 40
  const intensityValueToDb = (value) => -100 + (value / 255) * (-30 - -100)

  const data = audio2ch
  let channelList = [
    {
      name: 'Channel 1',
      data: data.ch1,
      columnIndex: 0,
    },
    {
      name: 'Channel 2',
      data: data.ch2,
      columnIndex: 1,
    },
  ]

  channelList = channelList.map((channel) => {
    const rows = channel.data[0].length
    const chart2D = dashboard
      .createChartXY({
        columnIndex: channel.columnIndex,
        rowIndex: 0,
      })
      .setTitle(`${channel.name} | 2D audio spectrogram`)
    chart2D
      .getDefaultAxisX()
      .setTickStrategy(AxisTickStrategies.Time)
      .setScrollStrategy(AxisScrollStrategies.progressive)
      .setInterval({ start: -historyMs, end: 0, stopAxisAfter: false })
    chart2D.getDefaultAxisY().setTitle('Frequency (Hz)')

    const chart3D = dashboard
      .createChart3D({
        columnIndex: channel.columnIndex,
        rowIndex: 1,
      })
      .setTitle(`${channel.name} | 3D audio spectrogram`)

    chart3D
      .getDefaultAxisX()
      .setTickStrategy(AxisTickStrategies.Time)
      .setScrollStrategy(AxisScrollStrategies.progressive)
      .setInterval({ start: -historyMs, end: 0, stopAxisAfter: false })
    chart3D
      .getDefaultAxisY()
      .setTitle('Intensity (dB)')
      .setTickStrategy(AxisTickStrategies.Numeric, (ticks) =>
        ticks.setFormattingFunction((y) => intensityValueToDb(y).toFixed(0)),
      )
    chart3D.getDefaultAxisZ().setTitle('Frequency (Hz)')

    const heatmapSeries2D = chart2D
      .addHeatmapScrollingGridSeries({
        scrollDimension: 'columns',
        resolution: rows,
        step: { x: sampleIntervalMs, y: rowStep },
      })
      .setFillStyle(new PalettedFill({ lut }))
      .setWireframeStyle(emptyLine)
      .setDataCleaning({ maxDataPointCount: 10000 })

    const surfaceSeries3D = chart3D
      .addSurfaceScrollingGridSeries({
        scrollDimension: 'columns',
        columns: Math.ceil(historyMs / sampleIntervalMs),
        rows,
        step: { x: sampleIntervalMs, z: rowStep },
      })
      .setFillStyle(new PalettedFill({ lut, lookUpProperty: 'y' }))
      .setWireframeStyle(emptyLine)

    return { ...channel, chart2D, chart3D, heatmapSeries2D, surfaceSeries3D }
  })

  // Setup infinite streaming from static data set.
  let tStart = window.performance.now()
  let pushedDataCount = 0
  const streamData = () => {
    const tNow = window.performance.now()
    // NOTE: This code is for example purposes (streaming stable data rate without destroying browser when switching tabs etc.)
    // In real use cases, data should be pushed in when it comes.
    const shouldBeDataPointsCount = Math.floor((sampleRateHz * (tNow - tStart)) / 1000)
    const newDataPointsCount = Math.min(shouldBeDataPointsCount - pushedDataCount, 100) // Add max 100 samples per frame into a series. This prevents massive performance spikes when switching tabs for long times
    if (newDataPointsCount > 0) {
      channelList.forEach((channel, i) => {
        const newDataPoints = []
        for (let iDp = 0; iDp < newDataPointsCount; iDp++) {
          const iData = (pushedDataCount + iDp) % channel.data.length
          const sample = channel.data[iData]
          // @ts-ignore
          newDataPoints.push(sample)
        }
        // @ts-ignore
        channel.heatmapSeries2D.addIntensityValues(newDataPoints)
        // @ts-ignore
        channel.surfaceSeries3D.addValues({ yValues: newDataPoints })
      })
      pushedDataCount += newDataPointsCount
    }
    requestAnimationFrame(streamData)
  }
  streamData()
}

onBeforeUnmount(() => {
  dashboard.dispose()
})
</script>

<style lang="less" scoped>
#Lightningchart {
  width: 100%;
  height: 100%;
}
</style>
