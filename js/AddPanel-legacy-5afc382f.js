!function(){var d=document.createElement("style");d.innerHTML=".add-node-btn[data-v-0f74433c]{margin-bottom:10px;margin-right:20px}\n",document.head.appendChild(d),System.register(["./vendors-legacy-963dc5fa.js"],(function(d){"use strict";var e,t,a,o,n,i,s,r,l,c,p,y,u;return{setters:[function(d){e=d._,t=d.ce,a=d.cf,o=d.o,n=d.D,i=d.B,s=d.z,r=d.a,l=d.W,c=d.ae,p=d.H,y=d.y,u=d.cd}],execute:function(){d("default",e({name:"AddPanel",props:{nodeData:Object,lf:Object||String},data:()=>({nodeList:[{type:"user",label:"用户"},{type:"push",label:"推送"}]}),methods:{$_addNode(d){const{lf:e,nodeData:t}=this.$props,{id:a,x:o,y:n}=t,i=e.addNode({type:d.type,x:o+150,y:n+150}).id;e.addEdge({sourceNodeId:a,targetNodeId:i}),this.$emit("addNodeFinish")},$_addTempalte(){const{lf:d,nodeData:e}=this.$props,{id:t,x:a,y:o}=e,n=d.addNode({type:"download",x:a,y:o+150}),i=d.addNode({type:"user",x:a+150,y:o+150}),s=d.addNode({type:"push",x:a+150,y:o+300,properties:{}}),r=d.addNode({type:"end",x:a+300,y:o+150}),l=d.addNode({type:"end",x:a+300,y:o+300});d.addEdge({sourceNodeId:t,targetNodeId:n.id}),d.addEdge({sourceNodeId:n.id,targetNodeId:i.id}),d.addEdge({sourceNodeId:i.id,targetNodeId:r.id,endPoint:{x:a+280,y:o+150},text:{value:"Y",x:a+230,y:o+140}}),d.addEdge({sourceNodeId:i.id,targetNodeId:s.id,text:{value:"N",x:a+160,y:o+230}}),d.addEdge({sourceNodeId:s.id,targetNodeId:l.id,endPoint:{x:a+280,y:o+300}}),this.$emit("addNodeFinish")}}},[["render",function(d,e,N,f,g,m){const x=u,I=t,b=a;return o(),n(b,{"tab-position":"left"},{default:i((()=>[s(I,{label:"添加动作"},{default:i((()=>[(o(!0),r(l,null,c(g.nodeList,(d=>(o(),r("div",{key:d.type},[s(x,{class:"add-node-btn",type:"primary",size:"mini",onClick:e=>m.$_addNode(d)},{default:i((()=>[p(y(d.label),1)])),_:2},1032,["onClick"])])))),128))])),_:1}),s(I,{label:"添加组"},{default:i((()=>[s(x,{class:"add-node-btn",type:"primary",size:"mini",onClick:m.$_addTempalte},{default:i((()=>[p("模板")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-0f74433c"]]))}}}))}();
