!function(){var t=document.createElement("style");t.innerHTML="svg[data-v-10df8453]{margin:25px}path[data-v-10df8453]{fill:none;stroke:#76bf8a;stroke-width:3px}\n",document.head.appendChild(t),System.register(["./vendors-legacy-963dc5fa.js"],(function(t){"use strict";var e,a,n,o,r,l,i,s,c,d,p,h,u,f,y,m,v;return{setters:[function(t){e=t._,a=t.d,n=t.q,o=t.bm,r=t.bn,l=t.bo,i=t.bp,s=t.bq,c=t.br,d=t.bs,p=t.bt,h=t.bu,u=t.bv,f=t.bw,y=t.bx,m=t.o,v=t.a}],execute:function(){const b={id:"content"},g=a({__name:"Home",setup:t=>(n((()=>{const t=function(t,{x:e=(t=>t.date),y:a=(t=>t.close),title:n=(t=>t.date+"设置"),defined:m=((t,e)=>e),curve:v=u,marginTop:b=20,marginRight:g=30,marginBottom:x=30,marginLeft:k=40,width:w=1540,height:$=500,xType:j=f,xDomain:L=[0,100],xRange:B=[k,w-g],yType:_=y,yDomain:A=[0,100],yRange:C=[$-x,b],color:D="currentColor",strokeWidth:H=1.5,strokeLinejoin:N="round",strokeLinecap:T="round",yFormat:R,xFormat:q,yLabel:z=""}={}){const E=o(t,e),F=o(t,a),I=o(t,(t=>t)),M=o(t,((t,e)=>e));void 0===m&&(m=(t,e)=>!isNaN(E[e])&&!isNaN(F[e]));const O=o(t,m);void 0===L&&(L=r(E));void 0===A&&(A=[0,l(F)]);const S=j(L,B),W=_(A,C),G=i(S),J=s(W).ticks($/40,R);if(void 0===n);else{const e=o(t,(t=>t)),a=n;n=t=>a(e[t])}const K=c().defined((t=>O[t])).curve(v).x((t=>S(E[t]))).y((t=>W(F[t]))),P=d("svg").attr("width",w).attr("height",$).attr("viewBox",[0,0,w,$]).attr("style","max-width: 100%; height: auto; height: intrinsic;").attr("font-family","sans-serif").attr("font-size",10).style("-webkit-tap-highlight-color","transparent").style("overflow","visible").on("pointerenter pointermove",U).on("pointerleave",V).on("touchstart",(t=>t.preventDefault()));P.append("g").attr("transform",`translate(0,${$-x})`).call(G),P.append("g").attr("transform",`translate(${k},0)`).call(J).call((t=>t.select(".domain").remove())).call((t=>t.selectAll(".tick line").clone().attr("x2",w-k-g).attr("stroke-opacity",.1))).call((t=>t.append("text").attr("x",-k).attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text(z))),P.append("path").attr("fill","none").attr("stroke",D).attr("stroke-width",H).attr("stroke-linejoin",N).attr("stroke-linecap",T).attr("d",K(M));const Q=P.append("g").style("pointer-events","none");function U(t){const e=p(E,S.invert(h(t)[0]));Q.style("display",null),Q.attr("transform",`translate(${S(E[e])},${W(F[e])})`);const a=Q.selectAll("path").data([,]).join("path").attr("fill","white").attr("stroke","black"),o=Q.selectAll("text").data([,]).join("text").call((t=>t.selectAll("tspan").data(`${n(e)}`.split(/\n/)).join("tspan").attr("x",0).attr("y",((t,e)=>1.1*e+"em")).attr("font-weight",((t,e)=>e?null:"bold")).text((t=>t)))),{y:r,width:l,height:i}=o.node().getBBox();o.attr("transform",`translate(${-l/2},${15-r})`),a.attr("d",`M${-l/2-10},5H-5l5,-5l5,5H${l/2+10}v${i+20}h-${l+20}z`),P.property("value",I[e]).dispatch("input",{bubbles:!0})}function V(){Q.style("display","none"),P.node().value=null,P.dispatch("input",{bubbles:!0})}return Object.assign(P.node(),{value:null})}([{date:10,close:93},{date:20,close:92},{date:30,close:98},{date:40,close:99},{date:50,close:99},{date:60,close:99}],{x:t=>t.date,y:t=>t.close,yLabel:"↑ Daily close ($)",width:1540,height:500,color:"steelblue"});document.getElementById("content")?.appendChild(t)})),(t,e)=>(m(),v("div",b)))});t("default",e(g,[["__scopeId","data-v-10df8453"]]))}}}))}();
