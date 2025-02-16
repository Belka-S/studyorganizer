import{aA as Q,r as $,aB as I,aC as T,aD as Y,aE as M,aF as X,aG as Z,aH as ee,aI as te,aJ as re,P as e,j as b,aK as ae,aL as oe,p as N,o as ne,t as se,u as ie,q as le,B as ue,aM as pe,Q as ce,x as de,v as ge}from"./index-ea2c1476.js";import{g as W,s as fe,a as ve,v as be,u as he}from"./index.esm-0f0e3311.js";var me=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],R=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=String(r).toLowerCase(),n=String(o.getOptionValue(a)).toLowerCase(),u=String(o.getOptionLabel(a)).toLowerCase();return n===i||u===i},D={formatCreateLabel:function(r){return'Create "'.concat(r,'"')},isValidNewOption:function(r,a,o,i){return!(!r||a.some(function(n){return R(r,n,i)})||o.some(function(n){return R(r,n,i)}))},getNewOptionData:function(r,a){return{label:a,value:r,__isNew__:!0}}};function Oe(t){var r=t.allowCreateWhileLoading,a=r===void 0?!1:r,o=t.createOptionPosition,i=o===void 0?"last":o,n=t.formatCreateLabel,u=n===void 0?D.formatCreateLabel:n,d=t.isValidNewOption,c=d===void 0?D.isValidNewOption:d,p=t.getNewOptionData,l=p===void 0?D.getNewOptionData:p,g=t.onCreateOption,h=t.options,f=h===void 0?[]:h,m=t.onChange,s=Q(t,me),O=s.getOptionValue,x=O===void 0?X:O,w=s.getOptionLabel,L=w===void 0?Z:w,v=s.inputValue,_=s.isLoading,A=s.isMulti,j=s.value,E=s.name,C=$.useMemo(function(){return c(v,I(j),f,{getOptionValue:x,getOptionLabel:L})?l(v,u(v)):void 0},[u,l,L,x,v,c,f,j]),U=$.useMemo(function(){return(a||!_)&&C?i==="first"?[C].concat(T(f)):[].concat(T(f),[C]):f},[a,i,_,C,f]),J=$.useCallback(function(y,V){if(V.action!=="select-option")return m(y,V);var F=Array.isArray(y)?y:[y];if(F[F.length-1]===C){if(g)g(v);else{var P=l(v,v),K={action:"create-option",name:E,option:P};m(Y(A,[].concat(T(I(j)),[P]),P),K)}return}m(y,V)},[l,v,A,E,C,g,m,j]);return M(M({},s),{},{options:U,onChange:J})}var Ce=$.forwardRef(function(t,r){var a=ee(t),o=Oe(a);return $.createElement(te,re({ref:r},o))}),ye=Ce;const De=t=>new Date(t).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),$e=t=>{let r=t.replace("https://drive.google.com/","").replace("file/d/","");const a=r.indexOf("/");return r=r.substring(0,a),r};var q=function(t,r,a){if(t&&"reportValidity"in t){var o=W(a,r);t.setCustomValidity(o&&o.message||""),t.reportValidity()}},k=function(t,r){var a=function(i){var n=r.fields[i];n&&n.ref&&"reportValidity"in n.ref?q(n.ref,i,t):n.refs&&n.refs.forEach(function(u){return q(u,i,t)})};for(var o in r.fields)a(o)},xe=function(t,r){r.shouldUseNativeValidation&&k(t,r);var a={};for(var o in t){var i=W(r.fields,o);fe(a,o,Object.assign(t[o]||{},{ref:i&&i.ref}))}return a};function we(t,r,a){return r===void 0&&(r={}),a===void 0&&(a={}),function(o,i,n){try{return Promise.resolve(function(u,d){try{var c=(r.context,Promise.resolve(t[a.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:i}))).then(function(p){return n.shouldUseNativeValidation&&k({},n),{values:a.raw?o:p,errors:{}}}))}catch(p){return d(p)}return c&&c.then?c.then(void 0,d):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:xe((d=u,c=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(d.inner||[]).reduce(function(p,l){if(p[l.path]||(p[l.path]={message:l.message,type:l.type}),c){var g=p[l.path].types,h=g&&g[l.type];p[l.path]=ve(l.path,c,p,l.type,h?[].concat(h,l.message):l.message)}return p},{})),n)};var d,c}))}catch(u){return Promise.reject(u)}}}const B=({styles:t,$obh:r,$sobh:a,$br:o,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,name:g,value:h={value:"HTML",label:"Chocolate"},defaultValue:f,placeholder:m="Create / Select...",options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:L,isDisabled:v})=>b.jsx(ye,{theme:ae({$obh:r,$sobh:a}),styles:{...oe({$br:o,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,$obh:r}),...t},name:g,value:h,defaultValue:f,placeholder:m,options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:L,isDisabled:v});B.propTypes={styles:e.arrayOf(e.object),$obh:e.string,$sobh:e.string,$br:e.string,$ol:e.string,$b:e.string,$bh:e.string,$bf:e.string,$o:e.string,$oh:e.string,$ob:e.string,options:e.arrayOf(e.object),name:e.string,value:e.oneOfType([e.arrayOf(e.object),e.object,e.string]),defaultValue:e.oneOfType([e.arrayOf(e.object),e.object]),placeholder:e.string,onChange:e.func,isClearable:e.oneOfType([e.arrayOf(e.string),e.string,e.object]),onCreateOption:e.func,isLoading:e.bool,isDisabled:e.bool};const{colors:S,indents:H,shadows:Le}=se,je=N.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${H.s};
  background-color: ${S.white};
  box-shadow: ${Le.auth};
`,G=N.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${S.error};
  }
`,z=ne`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${S.border};
  border-radius: ${H.xs};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${S.hovered};
  }
`,Se=N.input`
  ${z}
  ${be}
`,Ne=N.input`
  ${z}
`,Ve=({cluster:t,title:r,group:a,setGroup:o,setIsModal:i})=>{var m;const n=ie(),{clusterGroups:u}=le(),{register:d,watch:c,handleSubmit:p,formState:{errors:l}}=he({mode:"onBlur",resolver:we(ge),defaultValues:{cluster:t,title:r}}),g=s=>{const O=$e(s.cluster);n(pe({...s,group:a.value,gdriveId:O})),i(!1)},h=u.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,O)=>s.value.localeCompare(O.value)),f=s=>{c("title")?(n(de({clusterGroup:s})),o({value:s,label:s})):ce.error("Title is required")};return b.jsxs(je,{onSubmit:p(g),children:[b.jsxs(G,{children:[t.length<=45?t:t.substring(0,45)+"...",b.jsx(Se,{...d("cluster")})]}),b.jsxs(G,{children:["Title ",b.jsxs("span",{children:[" ",(m=l.title)==null?void 0:m.message]}),b.jsx(Ne,{autoFocus:!0,...d("title")})]}),b.jsxs(G,{children:["Group",b.jsx(B,{value:a,options:h,onChange:s=>o(s||""),onCreateOption:f,isClearable:a})]}),b.jsx(ue,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Ve.propTypes={cluster:e.string.isRequired,title:e.string,group:e.oneOfType([e.string,e.object]),setGroup:e.func.isRequired,setIsModal:e.func.isRequired};export{Ve as A,B as C,je as F,Ne as I,G as L,De as a,$e as g,we as o};
