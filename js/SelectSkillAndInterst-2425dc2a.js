import{_ as e,w as s,o as l,a,z as t,B as n,be as d}from"./vendors-a4d7b1d1.js";import u from"./AddNewTag-a1e2d997.js";import i from"./index-525c358d.js";import"./Tag-421c683c.js";var o=e({props:["userInfo","size","allSkills","allInterest"],components:{AddNewTag:u,TagsSelect:i},setup:({skills:e,interest:s,allSkills:l,allInterest:a},{emit:t})=>({onAddSuccess:(e,s)=>{t("success",e,s)},onSelectTag:(e,s)=>{t("change",e,s)}})},[["render",function(e,u,i,o,r,c){const f=s("TagsSelect"),g=s("AddNewTag"),z=d;return l(),a("span",null,[t(z,{label:e.$t("account.skills"),required:!1},{default:n((()=>[t(f,{tags:i.allSkills,onChange:o.onSelectTag,defaultValue:i.userInfo.skills,type:"skills",size:i.size},null,8,["tags","onChange","defaultValue","size"]),t(g,{onSuccess:o.onAddSuccess,type:"skills",defaultAdded:i.userInfo.mySkills,size:i.size},null,8,["onSuccess","defaultAdded","size"])])),_:1},8,["label"]),t(z,{label:e.$t("account.interest"),required:!1,size:i.size},{default:n((()=>[t(f,{tags:i.allInterest,defaultValue:i.userInfo.interest,onChange:o.onSelectTag,type:"interest",size:i.size},null,8,["tags","defaultValue","onChange","size"]),t(g,{onSuccess:o.onAddSuccess,type:"interest",defaultAdded:i.userInfo.myInterest,size:i.size},null,8,["onSuccess","defaultAdded","size"])])),_:1},8,["label","size"])])}]]);export{o as default};