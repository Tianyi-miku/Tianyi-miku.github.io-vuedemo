import{_ as a,o as s,a as t,b as l,y as e,W as n,ae as r,x as i}from"./vendors-a4d7b1d1.js";const o={class:"rank"},c={class:"title"},d={class:"list"},p={class:"name"},u={class:"total"};var f=a({name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null}}},[["render",function(a,f,m,v,y,b){return s(),t("div",o,[l("h4",c,e(m.title),1),l("ul",d,[(s(!0),t(n,null,r(m.list,((a,n)=>(s(),t("li",{key:n},[l("span",{class:i(n<3?"active":null)},e(n+1),3),l("span",p,e(a.name),1),l("span",u,e(a.total),1)])))),128))])])}],["__scopeId","data-v-eb46f01e"]]);export{f as default};