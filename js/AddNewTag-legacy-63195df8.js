!function(){var e=document.createElement("style");e.innerHTML=".AddNewTag .addTag{background:#fff;border-style:dashed;cursor:pointer}.AddNewTag .middle{height:30px;line-height:28px;font-size:15px}.AddNewTag .smallIpt{width:78px;height:20px}.AddNewTag .middleIpt{width:90px;height:30px}.darkMode .AddNewTag .addTag{background-color:rgba(0,0,0,.5)}@font-size - base: 14px;@text-color - secondary: rgba(0,0,0,.45);@border-radius - base: 2px;@border-color - base: #d9d9d9;@box-shadow - base: 0 2px 8px rgba(0,0,0,.15);\n",document.head.appendChild(e),System.register(["./vendors-legacy-963dc5fa.js"],(function(e){"use strict";var a,t,l,n,u,d,s,o,r,g,i,p,c,h,f,b,v,y,m,x,I;return{setters:[function(e){a=e._,t=e.bD,l=e.q,n=e.r,u=e.w,d=e.o,s=e.a,o=e.W,r=e.ae,g=e.D,i=e.B,p=e.H,c=e.y,h=e.x,f=e.bF,b=e.C,v=e.z,y=e.an,m=e.bG,x=e.au,I=e.aA}],execute:function(){const T={class:"AddNewTag"};e("default",a({props:{max:{type:Number,default:()=>5},type:{type:String,default:()=>""},defaultAdded:{type:Array,default:()=>[]},size:{type:String,default:()=>"small"}},components:{PlusOutlined:t},setup({max:e,type:a,defaultAdded:t},{emit:u}){l((()=>{d.value.length>=e&&(g.value=!1)}));const d=n(t),s=n(!1),o=n(null),r=n(""),g=n(!0);return{tagInputVisible:s,tagInputValue:r,handleInputChange:e=>{r.value=e.target.value},handleTagInputConfirm:()=>{const t=r.value;let l=d.value;t&&!l.includes(t)&&(l=[...l,t]),d.value=l,d.value.length>=e&&(g.value=!1),s.value=!1,r.value="",u("success",l,a)},showTagInput:()=>{s.value=!0,y((()=>{o.value.focus()}))},tagInputDomRef:o,tagAddVisible:g,tags:d,onCloseTag:t=>{d.value=m(d.value,t),d.value.length<e&&(g.value=!0),u("success",d.value,a)}}}},[["render",function(e,a,t,l,n,y){const m=x,C=I,w=u("PlusOutlined");return d(),s("span",T,[(d(!0),s(o,null,r(l.tags,(e=>(d(),g(m,{closable:"",onClose:a=>l.onCloseTag(e),key:e,class:h(t.size)},{default:i((()=>[p(c(e),1)])),_:2},1032,["onClose","class"])))),128)),l.tagInputVisible?(d(),g(C,{key:0,ref:"tagInputDomRef",type:"text",class:h(t.size+"Ipt"),value:l.tagInputValue,onChange:l.handleInputChange,onBlur:l.handleTagInputConfirm,onKeyup:f(l.handleTagInputConfirm,["enter"])},null,8,["class","value","onChange","onBlur","onKeyup"])):b("",!0),!l.tagInputVisible&&l.tagAddVisible?(d(),g(m,{key:1,onClick:l.showTagInput,class:h([t.size,"addTag"])},{default:i((()=>[v(w)])),_:1},8,["onClick","class"])):b("",!0)])}]]))}}}))}();
