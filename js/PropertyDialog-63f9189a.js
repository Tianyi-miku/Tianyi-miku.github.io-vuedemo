import o from"./CommonProperty-6bb91350.js";import e from"./User-bdc076fb.js";import{_ as a,w as n,o as s,a as t,D as r}from"./vendors-ac8af1c3.js";const l={class:"property-dialog"};var d=a({name:"PropertyDialog",components:{CommonProperty:o,User:e},props:{nodeData:Object,lf:Object},data:()=>({}),methods:{handleClose(){this.$emit("setPropertiesFinish")}}},[["render",function(o,e,a,d,m,p){const f=n("User"),i=n("CommonProperty");return s(),t("div",l,["user"===a.nodeData.type?(s(),r(f,{key:0,nodeData:a.nodeData,lf:a.lf,onOnClose:p.handleClose},null,8,["nodeData","lf","onOnClose"])):(s(),r(i,{key:1,nodeData:a.nodeData,lf:a.lf,onOnClose:p.handleClose},null,8,["nodeData","lf","onOnClose"]))])}]]);export{d as default};
