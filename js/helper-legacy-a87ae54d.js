System.register(["./index-legacy-399b5bff.js","./vendors-legacy-275ef23f.js"],(function(e){"use strict";var s,t,n,i,r,a,o,c;return{setters:[function(e){s=e.t,t=e.s,n=e.A,i=e.P,r=e.U,a=e.a},function(e){o=e.bj,c=e.i}],execute:function(){e("l",((e,a)=>{setTimeout((()=>{o.success({message:"欢迎",description:`${s()}，欢迎回来`})})),e.token&&(t.set(n,e.token,6048e5),t.set(i,Array.isArray(e.permission)?e.permission:e.permission.split(",")),t.set(r,e)),a.push({path:"/"})}));const m=e("r",(e=>{o.error({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})}));e("u",((e,s,t,n,i)=>{e.preventDefault(),s(["mobile"]).then((e=>{t.smsSendBtn=!0;const s=window.setInterval((()=>{t.time--<=0&&(t.time=60,t.smsSendBtn=!1,window.clearInterval(s))}),1e3);c.loading("验证码发送中..",1),a({mobile:n.mobile}).then((e=>{o.success({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((e=>{clearInterval(s),t.time=60,t.smsSendBtn=!1,m(e),i&&(i.value=!1)}))}))}))}}}));