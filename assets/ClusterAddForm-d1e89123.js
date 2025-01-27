import{ak as K,r as x,al as R,am as P,an as X,ao as q,ap as Z,aq as ee,ar as te,as as re,at as oe,P as e,j as f,au as ae,av as ne,aw as se,s as N,n as ie,t as le,u as ue,q as pe,aa as ce,ax as de,E as ge,Q as fe,x as ve}from"./index-511451fc.js";import{g as M,s as be,a as me,v as he,u as Oe}from"./index.esm-fa0b5a6f.js";import{t as ye}from"./clusterSchema-e40dadd3.js";var Ce=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],F=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=String(r).toLowerCase(),a=String(n.getOptionValue(o)).toLowerCase(),l=String(n.getOptionLabel(o)).toLowerCase();return a===s||l===s},D={formatCreateLabel:function(r){return'Create "'.concat(r,'"')},isValidNewOption:function(r,o,n,s){return!(!r||o.some(function(a){return F(r,a,s)})||n.some(function(a){return F(r,a,s)}))},getNewOptionData:function(r,o){return{label:o,value:r,__isNew__:!0}}};function $e(t){var r=t.allowCreateWhileLoading,o=r===void 0?!1:r,n=t.createOptionPosition,s=n===void 0?"last":n,a=t.formatCreateLabel,l=a===void 0?D.formatCreateLabel:a,g=t.isValidNewOption,c=g===void 0?D.isValidNewOption:g,p=t.getNewOptionData,i=p===void 0?D.getNewOptionData:p,v=t.onCreateOption,h=t.options,b=h===void 0?[]:h,O=t.onChange,d=K(t,Ce),u=d.getOptionValue,y=u===void 0?Z:u,w=d.getOptionLabel,j=w===void 0?ee:w,m=d.inputValue,_=d.isLoading,k=d.isMulti,L=d.value,A=d.name,C=x.useMemo(function(){return c(m,R(L),b,{getOptionValue:y,getOptionLabel:j})?i(m,l(m)):void 0},[l,i,j,y,m,c,b,L]),Q=x.useMemo(function(){return(o||!_)&&C?s==="first"?[C].concat(P(b)):[].concat(P(b),[C]):b},[o,s,_,C,b]),Y=x.useCallback(function($,T){if(T.action!=="select-option")return O($,T);var E=Array.isArray($)?$:[$];if(E[E.length-1]===C){if(v)v(m);else{var V=i(m,m),J={action:"create-option",name:A,option:V};O(X(k,[].concat(P(R(L)),[V]),V),J)}return}O($,T)},[i,m,k,A,C,v,O,L]);return q(q({},d),{},{options:Q,onChange:Y})}var xe=x.forwardRef(function(t,r){var o=te(t),n=$e(o);return x.createElement(re,oe({ref:r},n))}),we=xe;const Ae=t=>new Date(t).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),je=t=>{let r=t.replace("https://drive.google.com/","").replace("file/d/","");const o=r.indexOf("/");return r=r.substring(0,o),r};var I=function(t,r,o){if(t&&"reportValidity"in t){var n=M(o,r);t.setCustomValidity(n&&n.message||""),t.reportValidity()}},W=function(t,r){var o=function(s){var a=r.fields[s];a&&a.ref&&"reportValidity"in a.ref?I(a.ref,s,t):a.refs&&a.refs.forEach(function(l){return I(l,s,t)})};for(var n in r.fields)o(n)},Le=function(t,r){r.shouldUseNativeValidation&&W(t,r);var o={};for(var n in t){var s=M(r.fields,n);be(o,n,Object.assign(t[n]||{},{ref:s&&s.ref}))}return o};function Se(t,r,o){return r===void 0&&(r={}),o===void 0&&(o={}),function(n,s,a){try{return Promise.resolve(function(l,g){try{var c=(r.context,Promise.resolve(t[o.mode==="sync"?"validateSync":"validate"](n,Object.assign({abortEarly:!1},r,{context:s}))).then(function(p){return a.shouldUseNativeValidation&&W({},a),{values:o.raw?n:p,errors:{}}}))}catch(p){return g(p)}return c&&c.then?c.then(void 0,g):c}(0,function(l){if(!l.inner)throw l;return{values:{},errors:Le((g=l,c=!a.shouldUseNativeValidation&&a.criteriaMode==="all",(g.inner||[]).reduce(function(p,i){if(p[i.path]||(p[i.path]={message:i.message,type:i.type}),c){var v=p[i.path].types,h=v&&v[i.type];p[i.path]=me(i.path,c,p,i.type,h?[].concat(h,i.message):i.message)}return p},{})),a)};var g,c}))}catch(l){return Promise.reject(l)}}}const B=({$w:t,$h:r,$s:o,onClick:n,type:s="button",disabled:a,children:l})=>f.jsx(ae,{$w:t,$h:r,$s:o,onClick:n,type:s,disabled:a,children:l});B.propTypes={$w:e.string,$h:e.string,$s:e.string,onClick:e.func,type:e.string,disabled:e.oneOfType([e.bool,e.number]),children:e.oneOfType([e.string,e.node,e.oneOf(["img","png","svg"])])};const U=({styles:t,$obh:r,$sobh:o,$br:n,$ol:s,$b:a,$bh:l,$bf:g,$o:c,$oh:p,$ob:i,name:v,value:h={value:"HTML",label:"Chocolate"},defaultValue:b,placeholder:O="Create / Select...",options:d,onChange:u,isClearable:y,onCreateOption:w,isLoading:j,isDisabled:m})=>f.jsx(we,{theme:ne({$obh:r,$sobh:o}),styles:{...se({$br:n,$ol:s,$b:a,$bh:l,$bf:g,$o:c,$oh:p,$ob:i,$obh:r}),...t},name:v,value:h,defaultValue:b,placeholder:O,options:d,onChange:u,isClearable:y,onCreateOption:w,isLoading:j,isDisabled:m});U.propTypes={styles:e.arrayOf(e.object),$obh:e.string,$sobh:e.string,$br:e.string,$ol:e.string,$b:e.string,$bh:e.string,$bf:e.string,$o:e.string,$oh:e.string,$ob:e.string,options:e.arrayOf(e.object),name:e.string,value:e.oneOfType([e.arrayOf(e.object),e.object,e.string]),defaultValue:e.oneOfType([e.arrayOf(e.object),e.object]),placeholder:e.string,onChange:e.func,isClearable:e.oneOfType([e.arrayOf(e.string),e.string,e.object]),onCreateOption:e.func,isLoading:e.bool,isDisabled:e.bool};const{colors:S,indents:z,shadows:Ne}=le,Te=N.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${z.s};
  background-color: ${S.white};
  box-shadow: ${Ne.auth};
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
`,H=ie`
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
`,Ve=N.input`
  ${H}
  ${he}
`,Pe=N.input`
  ${H}
`,De=({cluster:t,title:r,group:o,setGroup:n,setIsModal:s})=>{var d;const a=ue(),{clusterGroups:l}=pe(),{gdriveSelect:g}=ce(),{register:c,watch:p,handleSubmit:i,formState:{errors:v}}=Oe({mode:"onBlur",resolver:Se(ye),defaultValues:{cluster:t,title:r}}),h=u=>{const y=je(u.cluster);a(de({...u,group:o.value,gdriveId:y})),a(ge({gdriveSelect:g})),s(!1)},b=l.map(u=>({value:u.clusterGroup,label:u.clusterGroup})).sort((u,y)=>u.value.localeCompare(y.value)),O=u=>{p("title")?(a(ve({clusterGroup:u})),n({value:u,label:u})):fe.error("Title is required")};return f.jsxs(Te,{onSubmit:i(h),children:[f.jsxs(G,{children:[t.length<=45?t:t.substring(0,45)+"...",f.jsx(Ve,{...c("cluster")})]}),f.jsxs(G,{children:["Title ",f.jsxs("span",{children:[" ",(d=v.title)==null?void 0:d.message]}),f.jsx(Pe,{autoFocus:!0,...c("title")})]}),f.jsxs(G,{children:["Group",f.jsx(U,{value:o,options:b,onChange:u=>n(u||""),onCreateOption:O,isClearable:o})]}),f.jsx(B,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};De.propTypes={cluster:e.string.isRequired,title:e.string,group:e.oneOfType([e.string,e.object]),setGroup:e.func.isRequired,setIsModal:e.func.isRequired};export{De as A,B,U as C,Te as F,Pe as I,G as L,Ae as a,je as g,Se as o};
