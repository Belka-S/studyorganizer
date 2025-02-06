import{ao as J,r as $,ap as E,aq as T,ar as K,as as F,at as X,au as Z,av as ee,aw as te,ax as re,P as e,j as b,ay as ae,az as oe,s as N,n as ne,t as se,u as ie,q as le,w as ue,aA as pe,Q as ce,y as de}from"./index-34be0633.js";import{g as W,s as ge,a as fe,v as ve,u as be}from"./index.esm-ce272671.js";import{t as me}from"./clusterSchema-4c70a786.js";var he=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],I=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=String(r).toLowerCase(),n=String(o.getOptionValue(a)).toLowerCase(),u=String(o.getOptionLabel(a)).toLowerCase();return n===i||u===i},D={formatCreateLabel:function(r){return'Create "'.concat(r,'"')},isValidNewOption:function(r,a,o,i){return!(!r||a.some(function(n){return I(r,n,i)})||o.some(function(n){return I(r,n,i)}))},getNewOptionData:function(r,a){return{label:a,value:r,__isNew__:!0}}};function Oe(t){var r=t.allowCreateWhileLoading,a=r===void 0?!1:r,o=t.createOptionPosition,i=o===void 0?"last":o,n=t.formatCreateLabel,u=n===void 0?D.formatCreateLabel:n,d=t.isValidNewOption,c=d===void 0?D.isValidNewOption:d,p=t.getNewOptionData,l=p===void 0?D.getNewOptionData:p,g=t.onCreateOption,m=t.options,f=m===void 0?[]:m,h=t.onChange,s=J(t,he),O=s.getOptionValue,x=O===void 0?X:O,w=s.getOptionLabel,j=w===void 0?Z:w,v=s.inputValue,G=s.isLoading,A=s.isMulti,L=s.value,R=s.name,y=$.useMemo(function(){return c(v,E(L),f,{getOptionValue:x,getOptionLabel:j})?l(v,u(v)):void 0},[u,l,j,x,v,c,f,L]),B=$.useMemo(function(){return(a||!G)&&y?i==="first"?[y].concat(T(f)):[].concat(T(f),[y]):f},[a,i,G,y,f]),Q=$.useCallback(function(C,V){if(V.action!=="select-option")return h(C,V);var q=Array.isArray(C)?C:[C];if(q[q.length-1]===y){if(g)g(v);else{var P=l(v,v),Y={action:"create-option",name:R,option:P};h(K(A,[].concat(T(E(L)),[P]),P),Y)}return}h(C,V)},[l,v,A,R,y,g,h,L]);return F(F({},s),{},{options:B,onChange:Q})}var ye=$.forwardRef(function(t,r){var a=ee(t),o=Oe(a);return $.createElement(te,re({ref:r},o))}),Ce=ye;const _e=t=>new Date(t).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),$e=t=>{let r=t.replace("https://drive.google.com/","").replace("file/d/","");const a=r.indexOf("/");return r=r.substring(0,a),r};var M=function(t,r,a){if(t&&"reportValidity"in t){var o=W(a,r);t.setCustomValidity(o&&o.message||""),t.reportValidity()}},k=function(t,r){var a=function(i){var n=r.fields[i];n&&n.ref&&"reportValidity"in n.ref?M(n.ref,i,t):n.refs&&n.refs.forEach(function(u){return M(u,i,t)})};for(var o in r.fields)a(o)},xe=function(t,r){r.shouldUseNativeValidation&&k(t,r);var a={};for(var o in t){var i=W(r.fields,o);ge(a,o,Object.assign(t[o]||{},{ref:i&&i.ref}))}return a};function we(t,r,a){return r===void 0&&(r={}),a===void 0&&(a={}),function(o,i,n){try{return Promise.resolve(function(u,d){try{var c=(r.context,Promise.resolve(t[a.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:i}))).then(function(p){return n.shouldUseNativeValidation&&k({},n),{values:a.raw?o:p,errors:{}}}))}catch(p){return d(p)}return c&&c.then?c.then(void 0,d):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:xe((d=u,c=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(d.inner||[]).reduce(function(p,l){if(p[l.path]||(p[l.path]={message:l.message,type:l.type}),c){var g=p[l.path].types,m=g&&g[l.type];p[l.path]=fe(l.path,c,p,l.type,m?[].concat(m,l.message):l.message)}return p},{})),n)};var d,c}))}catch(u){return Promise.reject(u)}}}const z=({styles:t,$obh:r,$sobh:a,$br:o,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,name:g,value:m={value:"HTML",label:"Chocolate"},defaultValue:f,placeholder:h="Create / Select...",options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:j,isDisabled:v})=>b.jsx(Ce,{theme:ae({$obh:r,$sobh:a}),styles:{...oe({$br:o,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,$obh:r}),...t},name:g,value:m,defaultValue:f,placeholder:h,options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:j,isDisabled:v});z.propTypes={styles:e.arrayOf(e.object),$obh:e.string,$sobh:e.string,$br:e.string,$ol:e.string,$b:e.string,$bh:e.string,$bf:e.string,$o:e.string,$oh:e.string,$ob:e.string,options:e.arrayOf(e.object),name:e.string,value:e.oneOfType([e.arrayOf(e.object),e.object,e.string]),defaultValue:e.oneOfType([e.arrayOf(e.object),e.object]),placeholder:e.string,onChange:e.func,isClearable:e.oneOfType([e.arrayOf(e.string),e.string,e.object]),onCreateOption:e.func,isLoading:e.bool,isDisabled:e.bool};const{colors:S,indents:H,shadows:je}=se,Le=N.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${H.s};
  background-color: ${S.white};
  box-shadow: ${je.auth};
`,_=N.label`
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
`,U=ne`
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
  ${U}
  ${ve}
`,Ne=N.input`
  ${U}
`,Ve=({cluster:t,title:r,group:a,setGroup:o,setIsModal:i})=>{var h;const n=ie(),{clusterGroups:u}=le(),{register:d,watch:c,handleSubmit:p,formState:{errors:l}}=be({mode:"onBlur",resolver:we(me),defaultValues:{cluster:t,title:r}}),g=s=>{const O=$e(s.cluster);n(pe({...s,group:a.value,gdriveId:O})),i(!1)},m=u.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,O)=>s.value.localeCompare(O.value)),f=s=>{c("title")?(n(de({clusterGroup:s})),o({value:s,label:s})):ce.error("Title is required")};return b.jsxs(Le,{onSubmit:p(g),children:[b.jsxs(_,{children:[t.length<=45?t:t.substring(0,45)+"...",b.jsx(Se,{...d("cluster")})]}),b.jsxs(_,{children:["Title ",b.jsxs("span",{children:[" ",(h=l.title)==null?void 0:h.message]}),b.jsx(Ne,{autoFocus:!0,...d("title")})]}),b.jsxs(_,{children:["Group",b.jsx(z,{value:a,options:m,onChange:s=>o(s||""),onCreateOption:f,isClearable:a})]}),b.jsx(ue,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Ve.propTypes={cluster:e.string.isRequired,title:e.string,group:e.oneOfType([e.string,e.object]),setGroup:e.func.isRequired,setIsModal:e.func.isRequired};export{Ve as A,z as C,Le as F,Ne as I,_ as L,_e as a,$e as g,we as o};
