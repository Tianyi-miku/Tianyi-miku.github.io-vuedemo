import{_ as a,o as t,D as s,B as o,b as l,a5 as d,H as e,y as c,bB as r}from"./vendors-ac8af1c3.js";const n={name:"ChartCard",props:{title:{type:String,default:""},total:{type:[Function,Number,String],required:!1,default:null},loading:{type:Boolean,default:!1}}},i={class:"chart-card-header"},f={class:"meta"},p={class:"chart-card-title"},u={class:"chart-card-action"},v={class:"total"},g={class:"chart-card-content"},h={class:"content-fix"},y={class:"chart-card-footer"},b={class:"field"};var m=a(n,[["render",function(a,n,m,x,$,_){const B=r;return t(),s(B,{loading:m.loading,"body-style":{padding:"20px 24px 8px"},bordered:!1},{default:o((()=>[l("div",i,[l("div",f,[l("span",p,[d(a.$slots,"title",{},(()=>[e(c(m.title),1)]),!0)]),l("span",u,[d(a.$slots,"action",{},void 0,!0)])]),l("div",v,[d(a.$slots,"total",{},(()=>[l("span",null,c("function"==typeof m.total&&m.total()||m.total),1)]),!0)])]),l("div",g,[l("div",h,[d(a.$slots,"default",{},void 0,!0)])]),l("div",y,[l("div",b,[d(a.$slots,"footer",{},void 0,!0)])])])),_:3},8,["loading"])}],["__scopeId","data-v-f339c96a"]]);export{m as default};
