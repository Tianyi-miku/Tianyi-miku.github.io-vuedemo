import{_ as e,d as a,w as l,o as t,a as s,z as r,B as o,b4 as i,k as n,b5 as d,b6 as u,b7 as c,b8 as p,L as m,b9 as g,Y as f,u as b,q as h,ap as v,r as y,D as _,C,ba as w,bb as k,n as $,bc as B,H as O,y as R,b as x,bd as I,aA as T,be as S,bf as q,aC as z,bg as A,I as M,bh as U,aD as L,bi as K}from"./vendors-ac8af1c3.js";import{g as j,e as D,u as Z,l as E}from"./index-c789d5de.js";import{l as W,r as F,u as H}from"./helper-79075f27.js";const P=a({components:{MobileOutlined:i,UserOutlined:n,MailOutlined:d,AlipayCircleOutlined:u,TaobaoCircleOutlined:c,WeiboCircleOutlined:p,LockOutlined:m},setup(){const e=g.useForm,{t:a}=f.useI18n(),l=b();h((()=>{j().then((e=>{u.value=e.result.stepCode})).catch((()=>{u.value=0})),u.value=1}));const t=v({time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}),s=v({rememberMe:!1,username:"",password:"",mobile:"",captcha:""}),r=v({rememberMe:[{trigger:"checked"}],username:[{required:!0,message:a("user.username.required")},{validator:(e,a)=>(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(a)?t.loginType=0:t.loginType=1,Promise.resolve()),trigger:"change"}],password:[{required:!0,message:a("user.password.required")},{}],mobile:[{required:!0,pattern:/^1[34578]\d{9}$/,message:a("user.login.mobile.placeholder"),validateTrigger:"change"}],captcha:[{required:!0,message:a("user.verification-code.required"),validateTrigger:"blur"}]}),{validate:o,validateInfos:i}=e(s,r),n=y(!1),d=y("tab1"),u=y(0),c=y(!1);return{formRef:s,rulesRef:r,state:t,customActiveKey:d,isLoginError:n,requiredTwoStepCaptcha:u,stepCaptchaVisible:c,handleTabClick:e=>{d.value=e},handleSubmit:e=>{e.preventDefault(),t.loginBtn=!0;const a="tab1"===d.value?["username","password"]:["mobile","captcha"];o(a).then((async()=>{s.password=D(s.password);const e=await Z(s);if(e){if(403===e.code)return n.value=!0,s.password="",void(t.loginBtn=!1);W(e,l),n.value=!1}else F(e),n.value=!0,s.password="";t.loginBtn=!1})).catch((e=>{t.loginBtn=!1}))},validateInfos:i,getCaptcha:e=>{H(e,o,t,s,null)},stepCaptchaSuccess:e=>{W(e,l)},stepCaptchaCancel:()=>{E().then((()=>{t.loginBtn=!1,c.value=!1}))}}}}),V={class:"main"},Y={class:"user-login-other"};var G=e(P,[["render",function(e,a,i,n,d,u){const c=I,p=l("UserOutlined"),m=T,f=S,b=l("LockOutlined"),h=q,v=z,y=l("MobileOutlined"),j=l("MailOutlined"),D=A,Z=M,E=U,W=L,F=K,H=l("router-link"),P=l("AlipayCircleOutlined"),G=l("TaobaoCircleOutlined"),J=l("WeiboCircleOutlined"),N=g;return t(),s("div",V,[r(N,{id:"formLogin",class:"user-layout-login",onSubmit:e.handleSubmit,model:e.formRef},{default:o((()=>[r(W,{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"},onChange:e.handleTabClick},{default:o((()=>[r(v,{key:"tab1",tab:e.$t("user.login.tab-login-credentials")},{default:o((()=>[e.isLoginError?(t(),_(c,{key:0,type:"error",showIcon:"",style:{"margin-bottom":"24px"},message:e.$t("user.login.message-invalid-credentials")},null,8,["message"])):C("",!0),r(f,w(k(e.validateInfos.username)),{default:o((()=>[r(m,{size:"large",type:"text",placeholder:e.$t("user.login.username.placeholder"),value:e.formRef.username,"onUpdate:value":a[0]||(a[0]=a=>e.formRef.username=a)},{prefix:o((()=>[r(p,{style:$({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16),r(f,w(k(e.validateInfos.password)),{default:o((()=>[r(h,{size:"large",placeholder:e.$t("user.login.password.placeholder"),value:e.formRef.password,"onUpdate:value":a[1]||(a[1]=a=>e.formRef.password=a)},{prefix:o((()=>[r(b,{style:$({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16)])),_:1},8,["tab"]),r(v,{key:"tab2",tab:e.$t("user.login.tab-login-mobile")},{default:o((()=>[r(f,w(k(e.validateInfos.mobile)),{default:o((()=>[r(m,{size:"large",type:"text",placeholder:e.$t("user.login.mobile.placeholder"),value:e.formRef.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formRef.mobile=a)},{default:o((()=>[r(y,{style:$({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16),r(E,{gutter:16},{default:o((()=>[r(D,{class:"gutter-row",span:16},{default:o((()=>[r(f,w(k(e.validateInfos.captcha)),{default:o((()=>[r(m,{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder"),value:e.formRef.captcha,"onUpdate:value":a[3]||(a[3]=a=>e.formRef.captcha=a)},{default:o((()=>[r(j,{style:$({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16)])),_:1}),r(D,{class:"gutter-row",span:8},{default:o((()=>[r(Z,{class:"getCaptcha",tabindex:"-1",disabled:e.state.smsSendBtn,onClick:B(e.getCaptcha,["stop","prevent"])},{default:o((()=>[O(R(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s"),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1},8,["tab"])])),_:1},8,["activeKey","onChange"]),r(f,w(k(e.validateInfos.rememberMe)),{default:o((()=>[r(F,{checked:e.formRef.rememberMe,"onUpdate:checked":a[4]||(a[4]=a=>e.formRef.rememberMe=a),style:{float:"left"}},{default:o((()=>[O(R(e.$t("user.login.remember-me")),1)])),_:1},8,["checked"]),r(H,{to:{name:"recover",params:{user:"aaa"}},class:"forge-password",style:{float:"right"}},{default:o((()=>[O(R(e.$t("user.login.forgot-password")),1)])),_:1})])),_:1},16),r(f,{style:{"margin-top":"24px"}},{default:o((()=>[r(Z,{size:"large",type:"primary",htmlType:"submit",class:"login-button",loading:e.state.loginBtn,disabled:e.state.loginBtn},{default:o((()=>[O(R(e.$t("user.login.login")),1)])),_:1},8,["loading","disabled"])])),_:1}),x("div",Y,[x("span",null,R(e.$t("user.login.sign-in-with")),1),x("a",null,[r(P)]),x("a",null,[r(G)]),x("a",null,[r(J)]),r(H,{class:"register",to:{name:"register"}},{default:o((()=>[O(R(e.$t("user.login.signup")),1)])),_:1})])])),_:1},8,["onSubmit","model"])])}],["__scopeId","data-v-146e7064"]]);export{G as default};
