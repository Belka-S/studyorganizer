import{aG as Q,r as L,aH as M,aI as D,aJ as Y,aK as E,aL as X,aM as Z,aN as ee,aO as te,aP as ae,P as t,j as v,aQ as re,aR as oe,q as P,p as ne,t as se,u as ie,i as le,v as ue,B as pe,aS as ce,h as de,y as ge,z as fe,w as be}from"./index-daf2e7e6.js";import{g as q,s as he,a as ve,v as me,u as Oe}from"./index.esm-8f052237.js";var ye=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],F=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=String(a).toLowerCase(),o=String(n.getOptionValue(r)).toLowerCase(),l=String(n.getOptionLabel(r)).toLowerCase();return o===s||l===s},_={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,r,n,s){return!(!a||r.some(function(o){return F(a,o,s)})||n.some(function(o){return F(a,o,s)}))},getNewOptionData:function(a,r){return{label:r,value:a,__isNew__:!0}}};function Ce(e){var a=e.allowCreateWhileLoading,r=a===void 0?!1:a,n=e.createOptionPosition,s=n===void 0?"last":n,o=e.formatCreateLabel,l=o===void 0?_.formatCreateLabel:o,d=e.isValidNewOption,c=d===void 0?_.isValidNewOption:d,p=e.getNewOptionData,i=p===void 0?_.getNewOptionData:p,b=e.onCreateOption,m=e.options,h=m===void 0?[]:m,O=e.onChange,g=Q(e,ye),u=g.getOptionValue,y=u===void 0?X:u,C=g.getOptionLabel,$=C===void 0?Z:C,f=g.inputValue,w=g.isLoading,S=g.isMulti,V=g.value,A=g.name,x=L.useMemo(function(){return c(f,M(V),h,{getOptionValue:y,getOptionLabel:$})?i(f,l(f)):void 0},[l,i,$,y,f,c,h,V]),U=L.useMemo(function(){return(r||!w)&&x?s==="first"?[x].concat(D(h)):[].concat(D(h),[x]):h},[r,s,w,x,h]),J=L.useCallback(function(j,T){if(T.action!=="select-option")return O(j,T);var G=Array.isArray(j)?j:[j];if(G[G.length-1]===x){if(b)b(f);else{var I=i(f,f),K={action:"create-option",name:A,option:I};O(Y(S,[].concat(D(M(V)),[I]),I),K)}return}O(j,T)},[i,f,S,A,x,b,O,V]);return E(E({},g),{},{options:U,onChange:J})}var $e=L.forwardRef(function(e,a){var r=ee(e),n=Ce(r);return L.createElement(te,ae({ref:a},n))}),xe=$e;const _e=e=>new Date(e).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),we=e=>{let a=e.replace("https://drive.google.com/","").replace("file/d/","");const r=a.indexOf("/");return a=a.substring(0,r),a};var k=function(e,a,r){if(e&&"reportValidity"in e){var n=q(r,a);e.setCustomValidity(n&&n.message||""),e.reportValidity()}},W=function(e,a){var r=function(s){var o=a.fields[s];o&&o.ref&&"reportValidity"in o.ref?k(o.ref,s,e):o.refs&&o.refs.forEach(function(l){return k(l,s,e)})};for(var n in a.fields)r(n)},je=function(e,a){a.shouldUseNativeValidation&&W(e,a);var r={};for(var n in e){var s=q(a.fields,n);he(r,n,Object.assign(e[n]||{},{ref:s&&s.ref}))}return r};function Le(e,a,r){return a===void 0&&(a={}),r===void 0&&(r={}),function(n,s,o){try{return Promise.resolve(function(l,d){try{var c=(a.context,Promise.resolve(e[r.mode==="sync"?"validateSync":"validate"](n,Object.assign({abortEarly:!1},a,{context:s}))).then(function(p){return o.shouldUseNativeValidation&&W({},o),{values:r.raw?n:p,errors:{}}}))}catch(p){return d(p)}return c&&c.then?c.then(void 0,d):c}(0,function(l){if(!l.inner)throw l;return{values:{},errors:je((d=l,c=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(d.inner||[]).reduce(function(p,i){if(p[i.path]||(p[i.path]={message:i.message,type:i.type}),c){var b=p[i.path].types,m=b&&b[i.type];p[i.path]=ve(i.path,c,p,i.type,m?[].concat(m,i.message):i.message)}return p},{})),o)};var d,c}))}catch(l){return Promise.reject(l)}}}const z=({styles:e,$obh:a,$sobh:r,$br:n,$ol:s,$b:o,$bh:l,$bf:d,$o:c,$oh:p,$ob:i,$ph:b,name:m,value:h={value:"HTML",label:"Chocolate"},defaultValue:O,placeholder:g="Create / Select...",options:u,onChange:y,isClearable:C,onCreateOption:$,isLoading:f,isDisabled:w})=>v.jsx(xe,{theme:re({$obh:a,$sobh:r}),styles:{...oe({$br:n,$ol:s,$b:o,$bh:l,$bf:d,$o:c,$oh:p,$ob:i,$obh:a,$ph:b}),...e},name:m,value:h,defaultValue:O,placeholder:g,options:u,onChange:y,isClearable:C,onCreateOption:$,isLoading:f,isDisabled:w});z.propTypes={styles:t.arrayOf(t.object),$obh:t.string,$sobh:t.string,$br:t.string,$ol:t.string,$b:t.string,$bh:t.string,$bf:t.string,$o:t.string,$oh:t.string,$ob:t.string,$ph:t.string,options:t.arrayOf(t.object),name:t.string,value:t.oneOfType([t.arrayOf(t.object),t.object,t.string]),defaultValue:t.oneOfType([t.arrayOf(t.object),t.object]),placeholder:t.string,onChange:t.func,isClearable:t.oneOfType([t.arrayOf(t.string),t.string,t.object]),onCreateOption:t.func,isLoading:t.bool,isDisabled:t.bool};const{colors:N,indents:H,shadows:Se}=se,Ve=P.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${H.s};
  background-color: ${N.white};
  box-shadow: ${Se.auth};
`,R=P.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${N.error};
  }
`,B=ne`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${N.border};
  border-radius: ${H.xs};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${N.hovered};
  }
`,Ne=P.input`
  ${B}
  ${me}
`,Pe=P.input`
  ${B}
`,Te=({cluster:e,title:a,group:r,setGroup:n,setIsModal:s})=>{var g;const o=ie(),{user:l}=le(),{clusterGroups:d}=ue(),{register:c,watch:p,handleSubmit:i,formState:{errors:b}}=Oe({mode:"onBlur",resolver:Le(be),defaultValues:{cluster:e,title:a}}),m=u=>{const y=we(u.cluster),{value:C}=r,$=d.find(S=>S.group===C)._id,f=l.subject;o(ce({...u,...{group:C,groupId:$,subject:f,gdriveId:y}})).unwrap(),s(!1)},h=d.map(u=>({value:u.group,label:u.group})).sort((u,y)=>u.value.localeCompare(y.value)),O=u=>{p("title")?(o(ge({group:u,subjectId:l.subjectId})).unwrap().then(o(fe({subjectId:l.subjectId}))),n({value:u,label:u})):de.error("Title is required")};return v.jsxs(Ve,{onSubmit:i(m),children:[v.jsxs(R,{children:[e.length<=48?e:e.substring(0,30)+`...${e.substring(e.length-15)}`,v.jsx(Ne,{...c("cluster")})]}),v.jsxs(R,{children:["Title ",v.jsxs("span",{children:[" ",(g=b.title)==null?void 0:g.message]}),v.jsx(Pe,{autoFocus:!0,...c("title")})]}),v.jsxs(R,{children:["Group",v.jsx(z,{value:r,options:h,onChange:u=>n(u||""),onCreateOption:O,isClearable:r,$ph:"left"})]}),v.jsx(pe,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Te.propTypes={cluster:t.string.isRequired,title:t.string,group:t.oneOfType([t.string,t.object]),setGroup:t.func.isRequired,setIsModal:t.func.isRequired};export{Te as A,z as C,Ve as F,Pe as I,R as L,_e as a,we as g,Le as o};
