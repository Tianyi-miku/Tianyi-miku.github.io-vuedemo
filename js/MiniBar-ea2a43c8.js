import{s as a,d as e,q as s,bV as t,_ as r,o as i,a as n,b as d}from"./vendors-ac8af1c3.js";const o=[],l=(new Date).getTime();for(let x=0;x<10;x++)o.push({x:a(new Date(l+864e5*x)).format("YYYY-MM-DD"),y:Math.round(10*(Math.random()+.1))});const c=e({name:"MiniBar",props:["id"],setup(a){s((()=>{new t(a.id,{data:o,xField:"x",yField:"y",yAxis:!1,xAxis:{range:[.038,1],label:null},height:50,color:"#38A0FF"}).render()}))}}),h={class:"antv-chart-mini",style:{"margin-bottom":"-10px"}},m={class:"chart-wrapper",style:{height:46}},p=["id"];var u=r(c,[["render",function(a,e,s,t,r,o){return i(),n("div",h,[d("div",m,[d("div",{id:a.id},null,8,p)])])}]]);export{u as default};
