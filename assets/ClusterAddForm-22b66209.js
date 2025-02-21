import{aG as Q,r as j,aH as M,aI as D,aJ as Y,aK as E,aL as X,aM as Z,aN as ee,aO as te,aP as ae,P as t,j as b,aQ as re,aR as oe,q as V,p as ne,t as se,u as ie,i as le,v as ue,B as pe,aS as ce,h as de,y as ge,w as fe}from"./index-3a288c89.js";import{g as W,s as ve,a as he,v as be,u as me}from"./index.esm-5cf77a00.js";var Oe=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],F=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,s=String(a).toLowerCase(),n=String(o.getOptionValue(r)).toLowerCase(),u=String(o.getOptionLabel(r)).toLowerCase();return n===s||u===s},G={formatCreateLabel:function(a){return'Create "'.concat(a,'"')},isValidNewOption:function(a,r,o,s){return!(!a||r.some(function(n){return F(a,n,s)})||o.some(function(n){return F(a,n,s)}))},getNewOptionData:function(a,r){return{label:r,value:a,__isNew__:!0}}};function ye(e){var a=e.allowCreateWhileLoading,r=a===void 0?!1:a,o=e.createOptionPosition,s=o===void 0?"last":o,n=e.formatCreateLabel,u=n===void 0?G.formatCreateLabel:n,g=e.isValidNewOption,c=g===void 0?G.isValidNewOption:g,p=e.getNewOptionData,i=p===void 0?G.getNewOptionData:p,v=e.onCreateOption,m=e.options,h=m===void 0?[]:m,O=e.onChange,d=Q(e,Oe),l=d.getOptionValue,y=l===void 0?X:l,C=d.getOptionLabel,$=C===void 0?Z:C,f=d.inputValue,L=d.isLoading,R=d.isMulti,S=d.value,A=d.name,x=j.useMemo(function(){return c(f,M(S),h,{getOptionValue:y,getOptionLabel:$})?i(f,u(f)):void 0},[u,i,$,y,f,c,h,S]),U=j.useMemo(function(){return(r||!L)&&x?s==="first"?[x].concat(D(h)):[].concat(D(h),[x]):h},[r,s,L,x,h]),J=j.useCallback(function(w,P){if(P.action!=="select-option")return O(w,P);var I=Array.isArray(w)?w:[w];if(I[I.length-1]===x){if(v)v(f);else{var T=i(f,f),K={action:"create-option",name:A,option:T};O(Y(R,[].concat(D(M(S)),[T]),T),K)}return}O(w,P)},[i,f,R,A,x,v,O,S]);return E(E({},d),{},{options:U,onChange:J})}var Ce=j.forwardRef(function(e,a){var r=ee(e),o=ye(r);return j.createElement(te,ae({ref:a},o))}),$e=Ce;const Ge=e=>new Date(e).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),xe=e=>{let a=e.replace("https://drive.google.com/","").replace("file/d/","");const r=a.indexOf("/");return a=a.substring(0,r),a};var q=function(e,a,r){if(e&&"reportValidity"in e){var o=W(r,a);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},k=function(e,a){var r=function(s){var n=a.fields[s];n&&n.ref&&"reportValidity"in n.ref?q(n.ref,s,e):n.refs&&n.refs.forEach(function(u){return q(u,s,e)})};for(var o in a.fields)r(o)},we=function(e,a){a.shouldUseNativeValidation&&k(e,a);var r={};for(var o in e){var s=W(a.fields,o);ve(r,o,Object.assign(e[o]||{},{ref:s&&s.ref}))}return r};function je(e,a,r){return a===void 0&&(a={}),r===void 0&&(r={}),function(o,s,n){try{return Promise.resolve(function(u,g){try{var c=(a.context,Promise.resolve(e[r.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},a,{context:s}))).then(function(p){return n.shouldUseNativeValidation&&k({},n),{values:r.raw?o:p,errors:{}}}))}catch(p){return g(p)}return c&&c.then?c.then(void 0,g):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:we((g=u,c=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(g.inner||[]).reduce(function(p,i){if(p[i.path]||(p[i.path]={message:i.message,type:i.type}),c){var v=p[i.path].types,m=v&&v[i.type];p[i.path]=he(i.path,c,p,i.type,m?[].concat(m,i.message):i.message)}return p},{})),n)};var g,c}))}catch(u){return Promise.reject(u)}}}const H=({styles:e,$obh:a,$sobh:r,$br:o,$ol:s,$b:n,$bh:u,$bf:g,$o:c,$oh:p,$ob:i,$ph:v,name:m,value:h={value:"HTML",label:"Chocolate"},defaultValue:O,placeholder:d="Create / Select...",options:l,onChange:y,isClearable:C,onCreateOption:$,isLoading:f,isDisabled:L})=>b.jsx($e,{theme:re({$obh:a,$sobh:r}),styles:{...oe({$br:o,$ol:s,$b:n,$bh:u,$bf:g,$o:c,$oh:p,$ob:i,$obh:a,$ph:v}),...e},name:m,value:h,defaultValue:O,placeholder:d,options:l,onChange:y,isClearable:C,onCreateOption:$,isLoading:f,isDisabled:L});H.propTypes={styles:t.arrayOf(t.object),$obh:t.string,$sobh:t.string,$br:t.string,$ol:t.string,$b:t.string,$bh:t.string,$bf:t.string,$o:t.string,$oh:t.string,$ob:t.string,$ph:t.string,options:t.arrayOf(t.object),name:t.string,value:t.oneOfType([t.arrayOf(t.object),t.object,t.string]),defaultValue:t.oneOfType([t.arrayOf(t.object),t.object]),placeholder:t.string,onChange:t.func,isClearable:t.oneOfType([t.arrayOf(t.string),t.string,t.object]),onCreateOption:t.func,isLoading:t.bool,isDisabled:t.bool};const{colors:N,indents:z,shadows:Le}=se,Se=V.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${z.s};
  background-color: ${N.white};
  box-shadow: ${Le.auth};
`,_=V.label`
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
`,Ne=V.input`
  ${B}
  ${be}
`,Ve=V.input`
  ${B}
`,Pe=({cluster:e,title:a,group:r,setGroup:o,setIsModal:s})=>{var d;const n=ie(),{user:u}=le(),{clusterGroups:g}=ue(),{register:c,watch:p,handleSubmit:i,formState:{errors:v}}=me({mode:"onBlur",resolver:je(fe),defaultValues:{cluster:e,title:a}}),m=l=>{const{value:y}=r,{subject:C}=u,$=xe(l.cluster),f={...l,group:y,subject:C,gdriveId:$};n(ce(f)).unwrap(),s(!1)},h=g.map(l=>({value:l.clusterGroup,label:l.clusterGroup})).sort((l,y)=>l.value.localeCompare(y.value)),O=l=>{p("title")?(n(ge({clusterGroup:l})),o({value:l,label:l})):de.error("Title is required")};return b.jsxs(Se,{onSubmit:i(m),children:[b.jsxs(_,{children:[e.length<=48?e:e.substring(0,30)+`...${e.substring(e.length-15)}`,b.jsx(Ne,{...c("cluster")})]}),b.jsxs(_,{children:["Title ",b.jsxs("span",{children:[" ",(d=v.title)==null?void 0:d.message]}),b.jsx(Ve,{autoFocus:!0,...c("title")})]}),b.jsxs(_,{children:["Group",b.jsx(H,{value:r,options:h,onChange:l=>o(l||""),onCreateOption:O,isClearable:r,$ph:"left"})]}),b.jsx(pe,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Pe.propTypes={cluster:t.string.isRequired,title:t.string,group:t.oneOfType([t.string,t.object]),setGroup:t.func.isRequired,setIsModal:t.func.isRequired};export{Pe as A,H as C,Se as F,Ve as I,_ as L,Ge as a,xe as g,je as o};
