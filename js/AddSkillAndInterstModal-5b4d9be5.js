import{_ as e,r as s,ap as l,w as n,o as t,D as i,B as a,z as o,H as r,y as c,I as d,aE as m,aF as u}from"./vendors-ac8af1c3.js";import k from"./SelectSkillAndInterst-cde7202d.js";import{b as S,a as f}from"./service-55d9b33a.js";import{c as v}from"./index-c789d5de.js";import"./AddNewTag-4764ce05.js";import"./index-0801ed07.js";import"./Tag-94c1c31b.js";var I=e({components:{SelectSkillAndInterst:k},setup(){const e=s(!1),n=s(!1),t=s([]),i=s([]);let a=l({});const o={},r=s(!1),c=s(!0);return{visible:n,onAddSuccess:(e,s)=>{o["skills"===s?"mySkills":"myInterest"]=e},onSelectTag:(e,s)=>{o[s]=e,"skills"===s&&(c.value=!e.length)},confirmLoading:r,onOk:async()=>{var s,l;e.value=!0;const t={id:a.id,interest:o.interest&&o.interest.join(v),myInterest:o.myInterest&&(null==(s=o.myInterest)?void 0:s.join(v)),mySkills:o.mySkills&&(null==(l=o.mySkills)?void 0:l.join(v)),skills:o.skills.join(v)};c.value=!!t.interest;if(await S(t)){const{createMessage:e}=f();e.success(window.i18n.tc("common.saveSuccess")),n.value=!1}e.value=!1},userInfo:a,loading:e,allSkills:t,allInterest:i,disabledBtn:c}}},[["render",function(e,s,l,k,S,f){const v=d,I=m,g=n("SelectSkillAndInterst"),p=u;return t(),i(p,{title:e.$t("account.selectSkillAndInterst"),visible:k.visible,"confirm-loading":k.confirmLoading,onOk:k.onOk,closable:!1,destroyOnClose:"",keyboard:!1,width:"700px"},{default:a((()=>[o(v,{slot:"footer",onClick:k.onOk,type:"primary",disabled:k.disabledBtn},{default:a((()=>[r(c(e.$t("account.saveAndClose")),1)])),_:1},8,["onClick","disabled"]),o(I,{spinning:k.loading},null,8,["spinning"]),o(g,{onChange:k.onSelectTag,onSuccess:k.onAddSuccess,userInfo:k.userInfo,allSkills:k.allSkills,allInterest:k.allInterest,size:"middle"},null,8,["onChange","onSuccess","userInfo","allSkills","allInterest"])])),_:1},8,["title","visible","confirm-loading","onOk"])}]]);export{I as default};