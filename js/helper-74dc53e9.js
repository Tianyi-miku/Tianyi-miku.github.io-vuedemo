import{t as e,s,A as t,P as a,U as i,a as n}from"./index-937fcd79.js";import{bj as o,i as r}from"./vendors-a4d7b1d1.js";const m=(n,r)=>{setTimeout((()=>{o.success({message:"欢迎",description:`${e()}，欢迎回来`})})),n.token&&(s.set(t,n.token,6048e5),s.set(a,Array.isArray(n.permission)?n.permission:n.permission.split(",")),s.set(i,n)),window.location.pathname="/Tianyi-miku.github.io-vuedemo/"},d=e=>{o.error({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})},c=(e,s,t,a,i)=>{e.preventDefault(),s(["mobile"]).then((e=>{t.smsSendBtn=!0;const s=window.setInterval((()=>{t.time--<=0&&(t.time=60,t.smsSendBtn=!1,window.clearInterval(s))}),1e3);r.loading("验证码发送中..",1),n({mobile:a.mobile}).then((e=>{o.success({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((e=>{clearInterval(s),t.time=60,t.smsSendBtn=!1,d(e),i&&(i.value=!1)}))}))};export{m as l,d as r,c as u};