import{_ as e,d as t,w as a,o as n,a as o,z as i,B as s,b4 as r,k as l,b5 as d,b6 as c,b7 as m,b8 as p,L as u,b9 as g,Y as h,u as b,q as f,ap as w,r as v,D as I,C as y,ba as C,bb as S,n as _,bc as k,H as B,y as R,b as T,bd as x,aA as A,be as O,bf as $,aC as L,bg as z,I as q,bh as M,aD as V,bi as U}from"./vendors-a4d7b1d1.js";import{g as j,e as P,l as E}from"./index-5b5a7675.js";import{l as F,r as H,u as K}from"./helper-70e60a04.js";var W={id:"4291d7da9005377ec9aec4a71ea837f",name:"admin",username:"Ones@github",password:"",avatar:"/avatar2.jpg",status:1,telephone:"",lastLoginIp:"27.154.74.117",lastLoginTime:1534837621348,creatorId:"admin",createTime:1497160610259,merchantCode:"TLif2btpzg079h15bk",deleted:0,permission:["admin"],token:"12312312",menu:[{name:"dashboard",parentId:0,id:1,meta:{icon:"dashboard",title:"3d仪表盘",show:!0},component:"RouteView",redirect:"/dashboard/workplace"},{name:"workplace",parentId:1,id:7,meta:{title:"工作台",show:!0},component:"Workplace"},{name:"three",parentId:1,id:3,meta:{title:"three",show:!0},component:"Three",path:"/dashboard/three"},{name:"Analysis",parentId:1,id:2,meta:{title:"分析页",show:!0},component:"Analysis",path:"/dashboard/analysis"},{name:"tests",parentId:1,id:8,meta:{title:"测试功能",show:!0},component:"TestWork"},{name:"form",parentId:0,id:10,meta:{icon:"form",title:"Lightningchart"},redirect:"/form/base-form",component:"PageView"},{name:"basic-form",parentId:10,id:6,meta:{title:"瀑布图"},component:"BasicForm"},{name:"step-form",parentId:10,id:5,meta:{title:"分步表单"},component:"StepForm"},{name:"advanced-form",parentId:10,id:4,meta:{title:"高级表单"},component:"AdvanceForm"},{name:"list",parentId:0,id:10010,meta:{icon:"table",title:"工作流",show:!0},redirect:"/list/table-list",component:"PageView"},{name:"table-list",parentId:10010,id:10011,path:"/list/table-list/:pageNo([1-9]\\d*)?",meta:{title:"动态表单",show:!0},component:"TableList"},{name:"basic-list",parentId:10010,id:10012,meta:{title:"流程图",show:!0},component:"StandardList"},{name:"card",parentId:10010,id:10013,meta:{title:"卡片列表",show:!0},component:"CardList"},{name:"search",parentId:10010,id:10014,meta:{title:"搜索列表",show:!0},redirect:"/list/search/article",component:"SearchLayout"},{name:"article",parentId:10014,id:10015,meta:{title:"搜索列表（文章）",show:!0},component:"SearchArticles"},{name:"project",parentId:10014,id:10016,meta:{title:"搜索列表（项目）",show:!0},component:"SearchProjects"},{name:"application",parentId:10014,id:10017,meta:{title:"搜索列表（应用）",show:!0},component:"SearchApplications"},{name:"profile",parentId:0,id:10018,meta:{title:"详情页",icon:"profile",show:!0},redirect:"/profile/basic",component:"RouteView"},{name:"basic",parentId:10018,id:10019,meta:{title:"基础详情页",show:!0},component:"ProfileBasic"},{name:"result",parentId:0,id:10021,meta:{title:"结果页",icon:"check-circle-o",show:!0},redirect:"/result/success",component:"PageView"},{name:"success",parentId:10021,id:10022,meta:{title:"成功",hiddenHeaderContent:!0,show:!0},component:"ResultSuccess"},{name:"fail",parentId:10021,id:10023,meta:{title:"失败",hiddenHeaderContent:!0,show:!0},component:"ResultFail"},{name:"exception",parentId:0,id:10024,meta:{title:"异常页",icon:"warning",show:!0},redirect:"/exception/403",component:"RouteView"},{name:"403",parentId:10024,id:10025,meta:{title:"403",show:!0},component:"Exception403"},{name:"404",parentId:10024,id:10026,meta:{title:"404",show:!0},component:"Exception404"},{name:"500",parentId:10024,id:10027,meta:{title:"500",show:!0},component:"Exception500"},{name:"account",parentId:0,id:10028,meta:{title:"个人页",icon:"user",show:!0},redirect:"/account/center",component:"RouteView"},{name:"center",parentId:10028,id:10029,meta:{title:"个人中心",show:!0},component:"AccountCenter"},{name:"settings",parentId:10028,id:10030,meta:{title:"个人设置",hideHeader:!0,hideChildren:!0,show:!0},redirect:"/account/settings/base",component:"AccountSettings"},{name:"BaseSettings",path:"/account/settings/base",parentId:10030,id:10031,meta:{title:"基本设置",show:!1},component:"BaseSettings"},{name:"SecuritySettings",path:"/account/settings/security",parentId:10030,id:10032,meta:{title:"安全设置",show:!1},component:"SecuritySettings"},{name:"CustomSettings",path:"/account/settings/custom",parentId:10030,id:10033,meta:{title:"个性化设置",show:!1},component:"CustomSettings"},{name:"BindingSettings",path:"/account/settings/binding",parentId:10030,id:10034,meta:{title:"账户绑定",show:!1},component:"BindingSettings"},{name:"NotificationSettings",path:"/account/settings/notification",parentId:10030,id:10034,meta:{title:"新消息通知",show:!1},component:"NotificationSettings"}]};const D=t({components:{MobileOutlined:r,UserOutlined:l,MailOutlined:d,AlipayCircleOutlined:c,TaobaoCircleOutlined:m,WeiboCircleOutlined:p,LockOutlined:u},setup(){const e=g.useForm,{t:t}=h.useI18n();b(),f((()=>{j().then((e=>{d.value=e.result.stepCode})).catch((()=>{d.value=0})),d.value=1}));const a=w({time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}),n=w({rememberMe:!1,username:"",password:"",mobile:"",captcha:""}),o=w({rememberMe:[{trigger:"checked"}],username:[{required:!0,message:t("user.username.required")},{validator:(e,t)=>(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)?a.loginType=0:a.loginType=1,Promise.resolve()),trigger:"change"}],password:[{required:!0,message:t("user.password.required")},{}],mobile:[{required:!0,pattern:/^1[34578]\d{9}$/,message:t("user.login.mobile.placeholder"),validateTrigger:"change"}],captcha:[{required:!0,message:t("user.verification-code.required"),validateTrigger:"blur"}]}),{validate:i,validateInfos:s}=e(n,o),r=v(!1),l=v("tab1"),d=v(0),c=v(!1);return{formRef:n,rulesRef:o,state:a,customActiveKey:l,isLoginError:r,requiredTwoStepCaptcha:d,stepCaptchaVisible:c,handleTabClick:e=>{l.value=e},handleSubmit:e=>{e.preventDefault(),a.loginBtn=!0;const t="tab1"===l.value?["username","password"]:["mobile","captcha"];i(t).then((async()=>{n.password=P(n.password);const e=W;if(e){if(403===e.code)return r.value=!0,n.password="",void(a.loginBtn=!1);F(e),r.value=!1}else H(e),r.value=!0,n.password="";a.loginBtn=!1})).catch((e=>{a.loginBtn=!1}))},validateInfos:s,getCaptcha:e=>{K(e,i,a,n,null)},stepCaptchaSuccess:e=>{F(e)},stepCaptchaCancel:()=>{E().then((()=>{a.loginBtn=!1,c.value=!1}))}}}}),N={class:"main"},Z={class:"user-login-other"};var Y=e(D,[["render",function(e,t,r,l,d,c){const m=x,p=a("UserOutlined"),u=A,h=O,b=a("LockOutlined"),f=$,w=L,v=a("MobileOutlined"),j=a("MailOutlined"),P=z,E=q,F=M,H=V,K=U,W=a("router-link"),D=a("AlipayCircleOutlined"),Y=a("TaobaoCircleOutlined"),G=a("WeiboCircleOutlined"),J=g;return n(),o("div",N,[i(J,{id:"formLogin",class:"user-layout-login",onSubmit:e.handleSubmit,model:e.formRef},{default:s((()=>[i(H,{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"},onChange:e.handleTabClick},{default:s((()=>[i(w,{key:"tab1",tab:e.$t("user.login.tab-login-credentials")},{default:s((()=>[e.isLoginError?(n(),I(m,{key:0,type:"error",showIcon:"",style:{"margin-bottom":"24px"},message:e.$t("user.login.message-invalid-credentials")},null,8,["message"])):y("",!0),i(h,C(S(e.validateInfos.username)),{default:s((()=>[i(u,{size:"large",type:"text",placeholder:e.$t("user.login.username.placeholder"),value:e.formRef.username,"onUpdate:value":t[0]||(t[0]=t=>e.formRef.username=t)},{prefix:s((()=>[i(p,{style:_({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16),i(h,C(S(e.validateInfos.password)),{default:s((()=>[i(f,{size:"large",placeholder:e.$t("user.login.password.placeholder"),value:e.formRef.password,"onUpdate:value":t[1]||(t[1]=t=>e.formRef.password=t)},{prefix:s((()=>[i(b,{style:_({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16)])),_:1},8,["tab"]),i(w,{key:"tab2",tab:e.$t("user.login.tab-login-mobile")},{default:s((()=>[i(h,C(S(e.validateInfos.mobile)),{default:s((()=>[i(u,{size:"large",type:"text",placeholder:e.$t("user.login.mobile.placeholder"),value:e.formRef.mobile,"onUpdate:value":t[2]||(t[2]=t=>e.formRef.mobile=t)},{default:s((()=>[i(v,{style:_({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16),i(F,{gutter:16},{default:s((()=>[i(P,{class:"gutter-row",span:16},{default:s((()=>[i(h,C(S(e.validateInfos.captcha)),{default:s((()=>[i(u,{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder"),value:e.formRef.captcha,"onUpdate:value":t[3]||(t[3]=t=>e.formRef.captcha=t)},{default:s((()=>[i(j,{style:_({color:"rgba(0,0,0,.25)"})},null,8,["style"])])),_:1},8,["placeholder","value"])])),_:1},16)])),_:1}),i(P,{class:"gutter-row",span:8},{default:s((()=>[i(E,{class:"getCaptcha",tabindex:"-1",disabled:e.state.smsSendBtn,onClick:k(e.getCaptcha,["stop","prevent"])},{default:s((()=>[B(R(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s"),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1},8,["tab"])])),_:1},8,["activeKey","onChange"]),i(h,C(S(e.validateInfos.rememberMe)),{default:s((()=>[i(K,{checked:e.formRef.rememberMe,"onUpdate:checked":t[4]||(t[4]=t=>e.formRef.rememberMe=t),style:{float:"left"}},{default:s((()=>[B(R(e.$t("user.login.remember-me")),1)])),_:1},8,["checked"]),i(W,{to:{name:"recover",params:{user:"aaa"}},class:"forge-password",style:{float:"right"}},{default:s((()=>[B(R(e.$t("user.login.forgot-password")),1)])),_:1})])),_:1},16),i(h,{style:{"margin-top":"24px"}},{default:s((()=>[i(E,{size:"large",type:"primary",htmlType:"submit",class:"login-button",loading:e.state.loginBtn,disabled:e.state.loginBtn},{default:s((()=>[B(R(e.$t("user.login.login")),1)])),_:1},8,["loading","disabled"])])),_:1}),T("div",Z,[T("span",null,R(e.$t("user.login.sign-in-with")),1),T("a",null,[i(D)]),T("a",null,[i(Y)]),T("a",null,[i(G)]),i(W,{class:"register",to:{name:"register"}},{default:s((()=>[B(R(e.$t("user.login.signup")),1)])),_:1})])])),_:1},8,["onSubmit","model"])])}],["__scopeId","data-v-20c73cf2"]]);export{Y as default};
