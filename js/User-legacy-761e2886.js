System.register(["./vendors-legacy-963dc5fa.js"],(function(e){"use strict";var l,a,t,o,d,r,m,u,n,f,s,i,c,p,V,b,y,h,_,g;return{setters:[function(e){l=e._,a=e.ci,t=e.cj,o=e.cl,d=e.cm,r=e.cn,m=e.co,u=e.cp,n=e.cq,f=e.cr,s=e.cs,i=e.ct,c=e.cu,p=e.ck,V=e.o,b=e.a,y=e.z,h=e.B,_=e.H,g=e.cd}],execute:function(){e("default",l({name:"",props:{nodeData:Object,lf:Object||String},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.form=Object.assign({},this.$data.form,e))},data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}),methods:{onSubmit(){const e=this.$props.nodeData;e.properties=this.$data.form,this.$props.lf.setProperties(e.id,this.$data.form),this.$emit("onClose")}}},[["render",function(e,l,v,U,$,j){const S=a,k=t,w=o,x=d,C=r,D=m,O=u,q=n,z=f,B=s,H=i,P=c,A=g,E=p;return V(),b("div",null,[y(E,{ref:"form",model:$.form,"label-width":"80px"},{default:h((()=>[y(k,{label:"活动名称"},{default:h((()=>[y(S,{modelValue:$.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>$.form.name=e)},null,8,["modelValue"])])),_:1}),y(k,{label:"活动区域"},{default:h((()=>[y(x,{modelValue:$.form.region,"onUpdate:modelValue":l[1]||(l[1]=e=>$.form.region=e),placeholder:"请选择活动区域"},{default:h((()=>[y(w,{label:"区域一",value:"shanghai"}),y(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),y(k,{label:"活动时间"},{default:h((()=>[y(D,{span:11},{default:h((()=>[y(C,{type:"date",placeholder:"选择日期",modelValue:$.form.date1,"onUpdate:modelValue":l[2]||(l[2]=e=>$.form.date1=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1}),y(D,{class:"line",span:2},{default:h((()=>[_("-")])),_:1}),y(D,{span:11},{default:h((()=>[y(O,{placeholder:"选择时间",modelValue:$.form.date2,"onUpdate:modelValue":l[3]||(l[3]=e=>$.form.date2=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),y(k,{label:"即时配送"},{default:h((()=>[y(q,{modelValue:$.form.delivery,"onUpdate:modelValue":l[4]||(l[4]=e=>$.form.delivery=e)},null,8,["modelValue"])])),_:1}),y(k,{label:"活动性质"},{default:h((()=>[y(B,{modelValue:$.form.type,"onUpdate:modelValue":l[5]||(l[5]=e=>$.form.type=e)},{default:h((()=>[y(z,{label:"美食/餐厅线上活动",name:"type"}),y(z,{label:"地推活动",name:"type"}),y(z,{label:"线下主题活动",name:"type"}),y(z,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),y(k,{label:"特殊资源"},{default:h((()=>[y(P,{modelValue:$.form.resource,"onUpdate:modelValue":l[6]||(l[6]=e=>$.form.resource=e)},{default:h((()=>[y(H,{label:"线上品牌商赞助"}),y(H,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),y(k,{label:"活动形式"},{default:h((()=>[y(S,{type:"textarea",modelValue:$.form.desc,"onUpdate:modelValue":l[7]||(l[7]=e=>$.form.desc=e)},null,8,["modelValue"])])),_:1}),y(k,null,{default:h((()=>[y(A,{type:"primary",onClick:j.onSubmit},{default:h((()=>[_("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}]]))}}}));