import{_ as e,ci as a,cj as l,cl as o,cm as d,cn as t,co as m,cp as r,cq as s,cr as u,cs as n,ct as f,cu as p,ck as i,o as c,a as V,z as b,B as h,H as _,cd as y}from"./vendors-a4d7b1d1.js";var v=e({name:"",props:{nodeData:Object,lf:Object||String},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.form=Object.assign({},this.$data.form,e))},data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}),methods:{onSubmit(){const e=this.$props.nodeData;e.properties=this.$data.form,this.$props.lf.setProperties(e.id,this.$data.form),this.$emit("onClose")}}},[["render",function(e,v,U,$,g,j){const k=a,w=l,x=o,C=d,D=t,O=m,S=r,q=s,z=u,B=n,H=f,P=p,A=y,E=i;return c(),V("div",null,[b(E,{ref:"form",model:g.form,"label-width":"80px"},{default:h((()=>[b(w,{label:"活动名称"},{default:h((()=>[b(k,{modelValue:g.form.name,"onUpdate:modelValue":v[0]||(v[0]=e=>g.form.name=e)},null,8,["modelValue"])])),_:1}),b(w,{label:"活动区域"},{default:h((()=>[b(C,{modelValue:g.form.region,"onUpdate:modelValue":v[1]||(v[1]=e=>g.form.region=e),placeholder:"请选择活动区域"},{default:h((()=>[b(x,{label:"区域一",value:"shanghai"}),b(x,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),b(w,{label:"活动时间"},{default:h((()=>[b(O,{span:11},{default:h((()=>[b(D,{type:"date",placeholder:"选择日期",modelValue:g.form.date1,"onUpdate:modelValue":v[2]||(v[2]=e=>g.form.date1=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1}),b(O,{class:"line",span:2},{default:h((()=>[_("-")])),_:1}),b(O,{span:11},{default:h((()=>[b(S,{placeholder:"选择时间",modelValue:g.form.date2,"onUpdate:modelValue":v[3]||(v[3]=e=>g.form.date2=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),b(w,{label:"即时配送"},{default:h((()=>[b(q,{modelValue:g.form.delivery,"onUpdate:modelValue":v[4]||(v[4]=e=>g.form.delivery=e)},null,8,["modelValue"])])),_:1}),b(w,{label:"活动性质"},{default:h((()=>[b(B,{modelValue:g.form.type,"onUpdate:modelValue":v[5]||(v[5]=e=>g.form.type=e)},{default:h((()=>[b(z,{label:"美食/餐厅线上活动",name:"type"}),b(z,{label:"地推活动",name:"type"}),b(z,{label:"线下主题活动",name:"type"}),b(z,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),b(w,{label:"特殊资源"},{default:h((()=>[b(P,{modelValue:g.form.resource,"onUpdate:modelValue":v[6]||(v[6]=e=>g.form.resource=e)},{default:h((()=>[b(H,{label:"线上品牌商赞助"}),b(H,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),b(w,{label:"活动形式"},{default:h((()=>[b(k,{type:"textarea",modelValue:g.form.desc,"onUpdate:modelValue":v[7]||(v[7]=e=>g.form.desc=e)},null,8,["modelValue"])])),_:1}),b(w,null,{default:h((()=>[b(A,{type:"primary",onClick:j.onSubmit},{default:h((()=>[_("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}]]);export{v as default};