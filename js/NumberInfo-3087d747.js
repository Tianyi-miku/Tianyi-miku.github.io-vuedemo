import{_ as t,bS as a,bT as s,w as e,o as n,a as o,b as r,a5 as u,y as l,D as i,x as p}from"./vendors-ac8af1c3.js";const c={style:{color:"rgba(0,0,0,.65)"},class:"subtitle"},d={class:"number-info-value"},b={class:"total"},f={class:"sub-total"},m={class:"txt"};var y=t({name:"NumberInfo",components:{CaretUpOutlined:a,CaretDownOutlined:s},props:{prefixCls:{type:String,default:"ant-pro-number-info"},total:{type:Number,required:!0},subTotal:{type:Number,required:!0},subTitle:{type:[String,Function],default:""},status:{type:String,default:"up"}}},[["render",function(t,a,s,y,v,x){const g=e("caret-up-outlined"),C=e("caret-down-outlined");return n(),o("div",{class:p([s.prefixCls])},[r("span",c,[u(t.$slots,"subtitle",{},void 0,!0)]),r("div",d,[r("span",b,l(s.total),1),r("span",f,[r("span",m,l(s.subTotal),1),"up"===s.status?(n(),i(g,{key:0})):(n(),i(C,{key:1}))])])],2)}],["__scopeId","data-v-604a98ac"]]);export{y as default};
