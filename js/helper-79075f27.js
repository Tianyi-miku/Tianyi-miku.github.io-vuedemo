import{t as s,s as e,A as t,P as a,U as i,a as n}from"./index-c789d5de.js";import{bj as r,i as o}from"./vendors-ac8af1c3.js";const m=(n,o)=>{setTimeout((()=>{r.success({message:"欢迎",description:`${s()}，欢迎回来`})})),n.token&&(e.set(t,n.token,6048e5),e.set(a,Array.isArray(n.permission)?n.permission:n.permission.split(",")),e.set(i,n)),o.push({path:"/"})},c=s=>{r.error({message:"错误",description:((s.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})},d=(s,e,t,a,i)=>{s.preventDefault(),e(["mobile"]).then((s=>{t.smsSendBtn=!0;const e=window.setInterval((()=>{t.time--<=0&&(t.time=60,t.smsSendBtn=!1,window.clearInterval(e))}),1e3);o.loading("验证码发送中..",1),n({mobile:a.mobile}).then((s=>{r.success({message:"提示",description:"验证码获取成功，您的验证码为："+s.result.captcha,duration:8})})).catch((s=>{clearInterval(e),t.time=60,t.smsSendBtn=!1,c(s),i&&(i.value=!1)}))}))};export{m as l,c as r,d as u};
