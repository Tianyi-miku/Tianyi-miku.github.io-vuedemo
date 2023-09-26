import{_ as e,d as s,w as a,o as r,a as l,b as t,y as o,z as d,B as i,b5 as n,Y as u,u as p,b9 as c,ap as g,r as m,c as v,ba as f,bb as h,x as w,H as b,n as C,bc as _,aA as k,be as L,bk as I,bf as y,av as P,ac as $,ad as q,bg as z,I as B,bh as x}from"./vendors-a4d7b1d1.js";import{b as T,i as j}from"./index-ed3c9dcc.js";import{u as U}from"./helper-0c5089de.js";const S={0:"user.password.strength.short",1:"user.password.strength.low",2:"user.password.strength.medium",3:"user.password.strength.strong"},E={0:"error",1:"error",2:"warning",3:"success"},F={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},R=s({name:"Register",components:{MailOutlined:n},setup(){const{t:e}=u.useI18n(),s=p(),a=c.useForm,r=g({email:"",password:"",password2:"",mobile:""}),l=(s,a)=>""===a?Promise.resolve():a.length>=6?(T(a)>=30&&(i.level=1),T(a)>=60&&(i.level=2),T(a)>=80&&(i.level=3),i.passwordLevel=i.level,i.percent=33*i.level,Promise.resolve()):(i.level=0,Promise.reject(new Error(e("user.password.strength.msg")))),t=g({email:[{required:!0,type:"email",message:e("user.email.required")},{validateTrigger:["change","blur"]}],password:[{required:!0,message:e("user.password.required")},{validator:l},{validateTrigger:["change","blur"]}],password2:[{required:!0,message:e("user.password.required")},{validator:l},{validateTrigger:["change","blur"]}],mobile:[{required:!0,message:e("user.phone-number.required"),pattern:/^1[3456789]\d{9}$/},{validator:(e,s)=>Promise.resolve()},{validateTrigger:["change","blur"]}],captcha:[{required:!0,message:"请输入验证码"},{validateTrigger:"blur"}]}),{validate:o,validateInfos:d}=a(r,t),i=g({time:60,level:0,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"}),n=m(!1),f=v((()=>E[i.passwordLevel])),h=v((()=>S[i.passwordLevel])),w=v((()=>F[i.passwordLevel]));return{t:e,state:i,registerBtn:n,validateInfos:d,form:r,passwordLevelClass:f,passwordLevelName:h,passwordLevelColor:w,handlePasswordCheck:(s,a)=>{const l=r.password;return void 0===a?Promise.reject(new Error(e("user.password.required"))):a&&l&&a.trim()!==l.trim()?Promise.reject(new Error(e("user.password.twice.msg"))):Promise.resolve()},handlePasswordInputClick:()=>{j.value?i.passwordLevelChecked=!1:i.passwordLevelChecked=!0},handleSubmit:()=>{o().then((e=>{i.passwordLevelChecked=!1,s.push({name:"registerResult",params:{...r}})}))},getCaptcha:e=>{U(e,o,i,r,n)},rules:t}}}),M={class:"main user-layout-register"},N={slot:"content"},O={style:{width:"240px"}},A={style:{"margin-top":"10px"}};var H=e(R,[["render",function(e,s,n,u,p,g){const m=k,v=L,T=I,j=y,U=P,S=$,E=q,F=a("MailOutlined"),R=z,H=B,V=x,Y=a("router-link"),D=c;return r(),l("div",M,[t("h3",null,[t("span",null,o(e.$t("user.register.register")),1)]),d(D,{id:"formRegister",model:e.form},{default:i((()=>[d(v,f(h(e.validateInfos.email)),{default:i((()=>[d(m,{size:"large",type:"text",placeholder:e.$t("user.register.email.placeholder"),value:e.form.email,"onUpdate:value":s[0]||(s[0]=s=>e.form.email=s)},null,8,["placeholder","value"])])),_:1},16),d(U,{placement:"rightTop",trigger:["focus"],getPopupContainer:e=>e.parentElement,value:e.state.passwordLevelChecked,"onUpdate:value":s[2]||(s[2]=s=>e.state.passwordLevelChecked=s)},{default:i((()=>[t("template",N,[t("div",O,[t("div",{class:w(["user-register",e.passwordLevelClass])},o(e.$t(e.passwordLevelName)),3),d(T,{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor},null,8,["percent","strokeColor"]),t("div",A,[t("span",null,o(e.$t("user.register.password.popover-message")),1)])])]),d(v,f(h(e.validateInfos.password)),{default:i((()=>[d(j,{size:"large",onClick:e.handlePasswordInputClick,placeholder:e.$t("user.register.password.placeholder"),value:e.form.password,"onUpdate:value":s[1]||(s[1]=s=>e.form.password=s)},null,8,["onClick","placeholder","value"])])),_:1},16)])),_:1},8,["getPopupContainer","value"]),d(v,f(h(e.validateInfos.password2)),{default:i((()=>[d(j,{size:"large",placeholder:e.$t("user.register.confirm-password.placeholder"),value:e.form.password2,"onUpdate:value":s[3]||(s[3]=s=>e.form.password2=s)},null,8,["placeholder","value"])])),_:1},16),d(v,f(h(e.validateInfos.mobile)),{default:i((()=>[d(m,{size:"large",placeholder:e.$t("user.login.mobile.placeholder"),value:e.form.mobile,"onUpdate:value":s[4]||(s[4]=s=>e.form.mobile=s)},{default:i((()=>[d(E,{slot:"addonBefore",size:"large",defaultValue:"+86"},{default:i((()=>[d(S,{value:"+86"},{default:i((()=>[b("+86")])),_:1}),d(S,{value:"+87"},{default:i((()=>[b("+87")])),_:1})])),_:1})])),_:1},8,["placeholder","value"])])),_:1},16),d(V,{gutter:16},{default:i((()=>[d(R,{class:"gutter-row",span:16},{default:i((()=>[d(v,f(h(e.validateInfos.captcha)),{default:i((()=>[d(m,{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder"),value:e.form.captcha,"onUpdate:value":s[5]||(s[5]=s=>e.form.captcha=s)},{default:i((()=>[d(F,{style:C({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16)])),_:1}),d(R,{class:"gutter-row",span:8},{default:i((()=>[d(H,{class:"getCaptcha",size:"large",disabled:e.state.smsSendBtn,onClick:_(e.getCaptcha,["stop","prevent"])},{default:i((()=>[b(o(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s"),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),d(v,null,{default:i((()=>[d(H,{size:"large",type:"primary",htmlType:"submit",class:"register-button",loading:e.registerBtn,onClick:_(e.handleSubmit,["stop","prevent"]),disabled:e.registerBtn},{default:i((()=>[b(o(e.$t("user.register.register")),1)])),_:1},8,["loading","onClick","disabled"]),d(Y,{class:"login",to:{name:"login"}},{default:i((()=>[b(o(e.$t("user.register.sign-in")),1)])),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-c9ed9c0c"]]);export{H as default};