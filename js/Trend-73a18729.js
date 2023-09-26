import{_ as e,bS as t,bT as a,w as r,o as s,a as n,b as d,a5 as l,y as i,D as o,x as p}from"./vendors-a4d7b1d1.js";const u={name:"Trend",components:{CaretUpOutlined:t,CaretDownOutlined:a},props:{term:{type:String,default:"",required:!1},percentage:{type:Number,default:null},type:{type:Boolean,default:!1},target:{type:Number,default:0},value:{type:Number,default:0},fixed:{type:Number,default:0}},data(){return{trend:this.type?"up":"down",rate:this.percentage}},created(){const e=null===this.type?this.value>=this.target:this.type;this.trend=e?"up":"down",this.rate=(null===this.percentage?100*Math.abs(this.value-this.target)/this.target:this.percentage).toFixed(this.fixed)}},c={class:"chart-trend"},h={class:"term",style:{color:"rgba(0,0,0,.65)"}},y={style:{display:"inline-block","margin-left":"8px",color:"rgba(0,0,0,.85)"},class:"rate"};var b=e(u,[["render",function(e,t,a,u,b,f){const g=r("caret-up-outlined"),m=r("caret-down-outlined");return s(),n("div",c,[d("span",h,[l(e.$slots,"term",{},void 0,!0)]),d("span",y,i(b.rate)+"%",1),d("span",{class:p(["trend-icon",b.trend])},["up"===b.trend?(s(),o(g,{key:0})):(s(),o(m,{key:1}))],2)])}],["__scopeId","data-v-7966eb8f"]]);export{b as default};