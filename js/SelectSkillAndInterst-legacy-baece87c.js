System.register(["./vendors-legacy-963dc5fa.js","./AddNewTag-legacy-63195df8.js","./index-legacy-fec317e1.js","./Tag-legacy-077b06d2.js"],(function(e){"use strict";var s,l,t,n,a,u,d,c,i;return{setters:[function(e){s=e._,l=e.w,t=e.o,n=e.a,a=e.z,u=e.B,d=e.be},function(e){c=e.default},function(e){i=e.default},function(){}],execute:function(){e("default",s({props:["userInfo","size","allSkills","allInterest"],components:{AddNewTag:c,TagsSelect:i},setup:({skills:e,interest:s,allSkills:l,allInterest:t},{emit:n})=>({onAddSuccess:(e,s)=>{n("success",e,s)},onSelectTag:(e,s)=>{n("change",e,s)}})},[["render",function(e,s,c,i,o,r){const f=l("TagsSelect"),g=l("AddNewTag"),z=d;return t(),n("span",null,[a(z,{label:e.$t("account.skills"),required:!1},{default:u((()=>[a(f,{tags:c.allSkills,onChange:i.onSelectTag,defaultValue:c.userInfo.skills,type:"skills",size:c.size},null,8,["tags","onChange","defaultValue","size"]),a(g,{onSuccess:i.onAddSuccess,type:"skills",defaultAdded:c.userInfo.mySkills,size:c.size},null,8,["onSuccess","defaultAdded","size"])])),_:1},8,["label"]),a(z,{label:e.$t("account.interest"),required:!1,size:c.size},{default:u((()=>[a(f,{tags:c.allInterest,defaultValue:c.userInfo.interest,onChange:i.onSelectTag,type:"interest",size:c.size},null,8,["tags","defaultValue","onChange","size"]),a(g,{onSuccess:i.onAddSuccess,type:"interest",defaultAdded:c.userInfo.myInterest,size:c.size},null,8,["onSuccess","defaultAdded","size"])])),_:1},8,["label","size"])])}]]))}}}));
