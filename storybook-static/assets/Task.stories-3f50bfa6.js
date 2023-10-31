import{r as p,a as l,b as d,d as i,e as D,n as N,o as k}from"./vue.esm-bundler-fe2a448a.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{a as m}from"./chunk-KKE3V3AL-49257385.js";import"./_commonjsHelpers-87174ba5.js";const g={name:"Task",props:{task:{type:Object,required:!0,default:()=>({id:"",state:"",title:""}),validator:a=>["id","state","title"].every(t=>t in a)}},emits:["archive-task","pin-task"],setup(a,{emit:t}){return a=p(a),{classes:l(()=>({"list-item TASK_INBOX":a.task.state==="TASK_INBOX","list-item TASK_PINNED":a.task.state==="TASK_PINNED","list-item TASK_ARCHIVED":a.task.state==="TASK_ARCHIVED"})),isChecked:l(()=>a.task.state==="TASK_ARCHIVED"),archiveTask(){t("archive-task",a.task.id)},pinTask(){t("pin-task",a.task.id)}}}},K=["for","aria-label"],C=["checked","name","id"],x=["for","aria-label"],y=["value","id"],E=["id","aria-label"],B=i("span",{class:"icon-star"},null,-1),P=[B];function V(a,t,e,s,H,R){return k(),d("div",{class:N(s.classes)},[i("label",{for:"checked"+e.task.id,"aria-label":"archiveTask-"+e.task.id,class:"checkbox"},[i("input",{type:"checkbox",checked:s.isChecked,disabled:"",name:"checked"+e.task.id,id:"archiveTask-"+e.task.id},null,8,C),i("span",{class:"checkbox-custom",onClick:t[0]||(t[0]=(...o)=>s.archiveTask&&s.archiveTask(...o))})],8,K),i("label",{for:"title-"+e.task.id,"aria-label":e.task.title,class:"title"},[i("input",{type:"text",readonly:"",value:e.task.title,id:"title-"+e.task.id,name:"title",placeholder:"Input title"},null,8,y)],8,x),s.isChecked?D("",!0):(k(),d("button",{key:0,class:"pin-button",onClick:t[1]||(t[1]=(...o)=>s.pinTask&&s.pinTask(...o)),id:"pinTask-"+e.task.id,"aria-label":"pinTask-"+e.task.id},P,8,E))],2)}const O=I(g,[["render",V]]);g.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:`{
  id: '',
  state: '',
  title: ''
}`}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/var/www/StoryBook-mindbox/src/components/Task.vue"]};const z={component:O,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{description:"описание тут",label:"123"},myTask:{description:"описание тут"},onArchiveTask:{}},excludeStories:/.*Data$/},F={onPinTask:m("pin-task"),onArchiveTask:m("archive-task")},n={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...n.args.task,state:"TASK_PINNED"}}},c={args:{task:{...n.args.task,state:"TASK_ARCHIVED"}}};var u,T,_;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(_=(T=n.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var h,v,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var A,b,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const G=["actionsData","Default","Pinned","Archived"];export{c as Archived,n as Default,r as Pinned,G as __namedExportsOrder,F as actionsData,z as default};
//# sourceMappingURL=Task.stories-3f50bfa6.js.map
