import{_ as e,o as t,D as a,B as s,bl as r,z as i,H as o,I as l}from"./vendors-ac8af1c3.js";var n=e({name:"RegisterResult",data:()=>({description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}),computed:{email(){return`你的账户：${this.form&&this.form.email||"xxx"} 注册成功`}},created(){this.form=this.$route.params},methods:{goHomeHandle(){this.$router.push({name:"login"})}}},[["render",function(e,n,m,u,c,d){const f=l,p=r;return t(),a(p,{isSuccess:!0,content:!1,title:d.email,"sub-title":c.description},{extra:s((()=>[i(f,{size:"large",type:"primary"},{default:s((()=>[o("查看邮箱")])),_:1}),i(f,{size:"large",style:{"margin-left":"8px"},onClick:d.goHomeHandle},{default:s((()=>[o("返回首页")])),_:1},8,["onClick"])])),_:1},8,["title","sub-title"])}]]);export{n as default};