import{aG as Q,r as L,aH as E,aI as _,aJ as Y,aK as F,aL as X,aM as Z,aN as ee,aO as te,aP as ae,P as t,j as h,aQ as re,aR as oe,q as P,p as ne,t as se,u as ie,i as le,v as ue,B as pe,aS as ce,h as de,y as ge,w as fe}from"./index-f98a980e.js";import{g as W,s as be,a as ve,v as he,u as me}from"./index.esm-12364a03.js";var Oe=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],G=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,s=String(a).toLowerCase(),n=String(o.getOptionValue(r)).toLowerCase(),u=String(o.getOptionLabel(r)).toLowerCase();return n===s||u===s},I={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,r,o,s){return!(!a||r.some(function(n){return G(a,n,s)})||o.some(function(n){return G(a,n,s)}))},getNewOptionData:function(a,r){return{label:r,value:a,__isNew__:!0}}};function ye(e){var a=e.allowCreateWhileLoading,r=a===void 0?!1:a,o=e.createOptionPosition,s=o===void 0?"last":o,n=e.formatCreateLabel,u=n===void 0?I.formatCreateLabel:n,d=e.isValidNewOption,c=d===void 0?I.isValidNewOption:d,p=e.getNewOptionData,i=p===void 0?I.getNewOptionData:p,b=e.onCreateOption,m=e.options,v=m===void 0?[]:m,O=e.onChange,g=Q(e,Oe),l=g.getOptionValue,y=l===void 0?X:l,C=g.getOptionLabel,$=C===void 0?Z:C,f=g.inputValue,w=g.isLoading,S=g.isMulti,V=g.value,A=g.name,x=L.useMemo(function(){return c(f,E(V),v,{getOptionValue:y,getOptionLabel:$})?i(f,u(f)):void 0},[u,i,$,y,f,c,v,V]),U=L.useMemo(function(){return(r||!w)&&x?s==="first"?[x].concat(_(v)):[].concat(_(v),[x]):v},[r,s,w,x,v]),J=L.useCallback(function(j,T){if(T.action!=="select-option")return O(j,T);var M=Array.isArray(j)?j:[j];if(M[M.length-1]===x){if(b)b(f);else{var D=i(f,f),K={action:"create-option",name:A,option:D};O(Y(S,[].concat(_(E(V)),[D]),D),K)}return}O(j,T)},[i,f,S,A,x,b,O,V]);return F(F({},g),{},{options:U,onChange:J})}var Ce=L.forwardRef(function(e,a){var r=ee(e),o=ye(r);return L.createElement(te,ae({ref:a},o))}),$e=Ce;const _e=e=>new Date(e).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),xe=e=>{let a=e.replace("https://drive.google.com/","").replace("file/d/","");const r=a.indexOf("/");return a=a.substring(0,r),a};var q=function(e,a,r){if(e&&"reportValidity"in e){var o=W(r,a);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},k=function(e,a){var r=function(s){var n=a.fields[s];n&&n.ref&&"reportValidity"in n.ref?q(n.ref,s,e):n.refs&&n.refs.forEach(function(u){return q(u,s,e)})};for(var o in a.fields)r(o)},we=function(e,a){a.shouldUseNativeValidation&&k(e,a);var r={};for(var o in e){var s=W(a.fields,o);be(r,o,Object.assign(e[o]||{},{ref:s&&s.ref}))}return r};function je(e,a,r){return a===void 0&&(a={}),r===void 0&&(r={}),function(o,s,n){try{return Promise.resolve(function(u,d){try{var c=(a.context,Promise.resolve(e[r.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},a,{context:s}))).then(function(p){return n.shouldUseNativeValidation&&k({},n),{values:r.raw?o:p,errors:{}}}))}catch(p){return d(p)}return c&&c.then?c.then(void 0,d):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:we((d=u,c=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(d.inner||[]).reduce(function(p,i){if(p[i.path]||(p[i.path]={message:i.message,type:i.type}),c){var b=p[i.path].types,m=b&&b[i.type];p[i.path]=ve(i.path,c,p,i.type,m?[].concat(m,i.message):i.message)}return p},{})),n)};var d,c}))}catch(u){return Promise.reject(u)}}}const H=({styles:e,$obh:a,$sobh:r,$br:o,$ol:s,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:i,$ph:b,name:m,value:v={value:"HTML",label:"Chocolate"},defaultValue:O,placeholder:g="Create / Select...",options:l,onChange:y,isClearable:C,onCreateOption:$,isLoading:f,isDisabled:w})=>h.jsx($e,{theme:re({$obh:a,$sobh:r}),styles:{...oe({$br:o,$ol:s,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:i,$obh:a,$ph:b}),...e},name:m,value:v,defaultValue:O,placeholder:g,options:l,onChange:y,isClearable:C,onCreateOption:$,isLoading:f,isDisabled:w});H.propTypes={styles:t.arrayOf(t.object),$obh:t.string,$sobh:t.string,$br:t.string,$ol:t.string,$b:t.string,$bh:t.string,$bf:t.string,$o:t.string,$oh:t.string,$ob:t.string,$ph:t.string,options:t.arrayOf(t.object),name:t.string,value:t.oneOfType([t.arrayOf(t.object),t.object,t.string]),defaultValue:t.oneOfType([t.arrayOf(t.object),t.object]),placeholder:t.string,onChange:t.func,isClearable:t.oneOfType([t.arrayOf(t.string),t.string,t.object]),onCreateOption:t.func,isLoading:t.bool,isDisabled:t.bool};const{colors:N,indents:z,shadows:Le}=se,Se=P.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${z.s};
  background-color: ${N.white};
  box-shadow: ${Le.auth};
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
  border-radius: ${z.xs};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${N.hovered};
  }
`,Ve=P.input`
  ${B}
  ${he}
`,Ne=P.input`
  ${B}
`,Pe=({cluster:e,title:a,group:r,setGroup:o,setIsModal:s})=>{var g;const n=ie(),{user:u}=le(),{clusterGroups:d}=ue(),{register:c,watch:p,handleSubmit:i,formState:{errors:b}}=me({mode:"onBlur",resolver:je(fe),defaultValues:{cluster:e,title:a}}),m=async l=>{const y=xe(l.cluster),C=await C.value,$=await d.find(S=>S.group===C)._id,f=u.subject;n(ce({...l,...{group:C,groupId:$,subject:f,gdriveId:y}})).unwrap(),s(!1)},v=d.map(l=>({value:l.group,label:l.group})).sort((l,y)=>l.value.localeCompare(y.value)),O=l=>{p("title")?(n(ge({group:l,subject:u.subjectId})),o({value:l,label:l})):de.error("Title is required")};return h.jsxs(Se,{onSubmit:i(m),children:[h.jsxs(R,{children:[e.length<=48?e:e.substring(0,30)+`...${e.substring(e.length-15)}`,h.jsx(Ve,{...c("cluster")})]}),h.jsxs(R,{children:["Title ",h.jsxs("span",{children:[" ",(g=b.title)==null?void 0:g.message]}),h.jsx(Ne,{autoFocus:!0,...c("title")})]}),h.jsxs(R,{children:["Group",h.jsx(H,{value:r,options:v,onChange:l=>o(l||""),onCreateOption:O,isClearable:r,$ph:"left"})]}),h.jsx(pe,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Pe.propTypes={cluster:t.string.isRequired,title:t.string,group:t.oneOfType([t.string,t.object]),setGroup:t.func.isRequired,setIsModal:t.func.isRequired};export{Pe as A,H as C,Se as F,Ne as I,R as L,_e as a,xe as g,je as o};
