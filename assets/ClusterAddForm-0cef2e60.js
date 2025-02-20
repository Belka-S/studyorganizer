import{aG as Q,r as $,aH as A,aI as T,aJ as Y,aK as E,aL as X,aM as Z,aN as ee,aO as te,aP as re,P as t,j as b,aQ as ae,aR as oe,q as N,p as ne,t as se,u as ie,v as le,B as ue,aS as pe,h as ce,y as de,w as ge}from"./index-a4be4e6d.js";import{g as W,s as fe,a as ve,v as be,u as he}from"./index.esm-0e05704f.js";var me=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],F=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=String(r).toLowerCase(),n=String(o.getOptionValue(a)).toLowerCase(),u=String(o.getOptionLabel(a)).toLowerCase();return n===i||u===i},D={formatCreateLabel:function(r){return'Create "'.concat(r,'"')},isValidNewOption:function(r,a,o,i){return!(!r||a.some(function(n){return F(r,n,i)})||o.some(function(n){return F(r,n,i)}))},getNewOptionData:function(r,a){return{label:a,value:r,__isNew__:!0}}};function Oe(e){var r=e.allowCreateWhileLoading,a=r===void 0?!1:r,o=e.createOptionPosition,i=o===void 0?"last":o,n=e.formatCreateLabel,u=n===void 0?D.formatCreateLabel:n,d=e.isValidNewOption,c=d===void 0?D.isValidNewOption:d,p=e.getNewOptionData,l=p===void 0?D.getNewOptionData:p,g=e.onCreateOption,h=e.options,f=h===void 0?[]:h,m=e.onChange,s=Q(e,me),O=s.getOptionValue,x=O===void 0?X:O,w=s.getOptionLabel,L=w===void 0?Z:w,v=s.inputValue,_=s.isLoading,R=s.isMulti,j=s.value,I=s.name,y=$.useMemo(function(){return c(v,A(j),f,{getOptionValue:x,getOptionLabel:L})?l(v,u(v)):void 0},[u,l,L,x,v,c,f,j]),U=$.useMemo(function(){return(a||!_)&&y?i==="first"?[y].concat(T(f)):[].concat(T(f),[y]):f},[a,i,_,y,f]),J=$.useCallback(function(C,V){if(V.action!=="select-option")return m(C,V);var M=Array.isArray(C)?C:[C];if(M[M.length-1]===y){if(g)g(v);else{var P=l(v,v),K={action:"create-option",name:I,option:P};m(Y(R,[].concat(T(A(j)),[P]),P),K)}return}m(C,V)},[l,v,R,I,y,g,m,j]);return E(E({},s),{},{options:U,onChange:J})}var ye=$.forwardRef(function(e,r){var a=ee(e),o=Oe(a);return $.createElement(te,re({ref:r},o))}),Ce=ye;const De=e=>new Date(e).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),$e=e=>{let r=e.replace("https://drive.google.com/","").replace("file/d/","");const a=r.indexOf("/");return r=r.substring(0,a),r};var q=function(e,r,a){if(e&&"reportValidity"in e){var o=W(a,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},k=function(e,r){var a=function(i){var n=r.fields[i];n&&n.ref&&"reportValidity"in n.ref?q(n.ref,i,e):n.refs&&n.refs.forEach(function(u){return q(u,i,e)})};for(var o in r.fields)a(o)},xe=function(e,r){r.shouldUseNativeValidation&&k(e,r);var a={};for(var o in e){var i=W(r.fields,o);fe(a,o,Object.assign(e[o]||{},{ref:i&&i.ref}))}return a};function we(e,r,a){return r===void 0&&(r={}),a===void 0&&(a={}),function(o,i,n){try{return Promise.resolve(function(u,d){try{var c=(r.context,Promise.resolve(e[a.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:i}))).then(function(p){return n.shouldUseNativeValidation&&k({},n),{values:a.raw?o:p,errors:{}}}))}catch(p){return d(p)}return c&&c.then?c.then(void 0,d):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:xe((d=u,c=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(d.inner||[]).reduce(function(p,l){if(p[l.path]||(p[l.path]={message:l.message,type:l.type}),c){var g=p[l.path].types,h=g&&g[l.type];p[l.path]=ve(l.path,c,p,l.type,h?[].concat(h,l.message):l.message)}return p},{})),n)};var d,c}))}catch(u){return Promise.reject(u)}}}const H=({styles:e,$obh:r,$sobh:a,$br:o,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,name:g,value:h={value:"HTML",label:"Chocolate"},defaultValue:f,placeholder:m="Create / Select...",options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:L,isDisabled:v})=>b.jsx(Ce,{theme:ae({$obh:r,$sobh:a}),styles:{...oe({$br:o,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,$obh:r}),...e},name:g,value:h,defaultValue:f,placeholder:m,options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:L,isDisabled:v});H.propTypes={styles:t.arrayOf(t.object),$obh:t.string,$sobh:t.string,$br:t.string,$ol:t.string,$b:t.string,$bh:t.string,$bf:t.string,$o:t.string,$oh:t.string,$ob:t.string,options:t.arrayOf(t.object),name:t.string,value:t.oneOfType([t.arrayOf(t.object),t.object,t.string]),defaultValue:t.oneOfType([t.arrayOf(t.object),t.object]),placeholder:t.string,onChange:t.func,isClearable:t.oneOfType([t.arrayOf(t.string),t.string,t.object]),onCreateOption:t.func,isLoading:t.bool,isDisabled:t.bool};const{colors:S,indents:z,shadows:Le}=se,je=N.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${z.s};
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
`,B=ne`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${S.border};
  border-radius: ${z.xs};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${S.hovered};
  }
`,Se=N.input`
  ${B}
  ${be}
`,Ne=N.input`
  ${B}
`,Ve=({cluster:e,title:r,group:a,setGroup:o,setIsModal:i})=>{var m;const n=ie(),{clusterGroups:u}=le(),{register:d,watch:c,handleSubmit:p,formState:{errors:l}}=he({mode:"onBlur",resolver:we(ge),defaultValues:{cluster:e,title:r}}),g=s=>{const O=$e(s.cluster);n(pe({...s,group:a.value,gdriveId:O})),i(!1)},h=u.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,O)=>s.value.localeCompare(O.value)),f=s=>{c("title")?(n(de({clusterGroup:s})),o({value:s,label:s})):ce.error("Title is required")};return b.jsxs(je,{onSubmit:p(g),children:[b.jsxs(G,{children:[e.length<=48?e:e.substring(0,30)+`...${e.substring(e.length-15)}`,b.jsx(Se,{...d("cluster")})]}),b.jsxs(G,{children:["Title ",b.jsxs("span",{children:[" ",(m=l.title)==null?void 0:m.message]}),b.jsx(Ne,{autoFocus:!0,...d("title")})]}),b.jsxs(G,{children:["Group",b.jsx(H,{value:a,options:h,onChange:s=>o(s||""),onCreateOption:f,isClearable:a})]}),b.jsx(ue,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Ve.propTypes={cluster:t.string.isRequired,title:t.string,group:t.oneOfType([t.string,t.object]),setGroup:t.func.isRequired,setIsModal:t.func.isRequired};export{Ve as A,H as C,je as F,Ne as I,G as L,De as a,$e as g,we as o};
