import{_ as e,d as a,bz as s,cv as t,w as n,o,D as l,B as d,b as r,y as c,z as u,H as i,a as m,W as k,ae as g,au as p,a6 as y,bP as v}from"./vendors-a4d7b1d1.js";const x=[{dataIndex:"name",key:"name",slots:{title:"customTitle",customRender:"name"}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",slots:{customRender:"tags"}},{title:"Action",key:"action",slots:{customRender:"action"}}],w=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],b=a({setup:()=>({data:w,columns:x}),components:{SmileOutlined:s,DownOutlined:t}}),I=r("a",null,"Delete",-1),N={class:"ant-dropdown-link"};var f=e(b,[["render",function(e,a,s,t,x,w){const b=n("smile-outlined"),f=p,L=y,P=n("down-outlined"),h=v;return o(),l(h,{columns:e.columns,"data-source":e.data},{name:d((({text:e})=>[r("a",null,c(e),1)])),customTitle:d((()=>[r("span",null,[u(b),i(" Name ")])])),tags:d((({text:e})=>[r("span",null,[(o(!0),m(k,null,g(e,(e=>(o(),l(f,{key:e,color:"loser"===e?"volcano":e.length>5?"geekblue":"green"},{default:d((()=>[i(c(e.toUpperCase()),1)])),_:2},1032,["color"])))),128))])])),action:d((({record:e})=>[r("span",null,[r("a",null,"Invite 一 "+c(e.name),1),u(L,{type:"vertical"}),I,u(L,{type:"vertical"}),r("a",N,[i(" More actions "),u(P)])])])),_:1},8,["columns","data-source"])}]]);export{f as default};