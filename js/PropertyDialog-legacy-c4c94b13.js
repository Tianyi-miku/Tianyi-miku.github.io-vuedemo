!function(){var e=document.createElement("style");e.innerHTML=".property-dialog{padding:20px}\n",document.head.appendChild(e),System.register(["./CommonProperty-legacy-6a834ce7.js","./User-legacy-a10a566e.js","./vendors-legacy-275ef23f.js"],(function(e){"use strict";var n,o,t,a,l,r,s;return{setters:[function(e){n=e.default},function(e){o=e.default},function(e){t=e._,a=e.w,l=e.o,r=e.a,s=e.D}],execute:function(){const d={class:"property-dialog"};e("default",t({name:"PropertyDialog",components:{CommonProperty:n,User:o},props:{nodeData:Object,lf:Object},data:()=>({}),methods:{handleClose(){this.$emit("setPropertiesFinish")}}},[["render",function(e,n,o,t,c,i){const f=a("User"),u=a("CommonProperty");return l(),r("div",d,["user"===o.nodeData.type?(l(),s(f,{key:0,nodeData:o.nodeData,lf:o.lf,onOnClose:i.handleClose},null,8,["nodeData","lf","onOnClose"])):(l(),s(u,{key:1,nodeData:o.nodeData,lf:o.lf,onOnClose:i.handleClose},null,8,["nodeData","lf","onOnClose"]))])}]]))}}}))}();