import{n as u,s as c,t as x,L as m,P as e,j as s,d as f,F as j,e as g,u as b,r as y,v as F,Q as $,g as v}from"./index-24e71299.js";import{M as T}from"./index-e83735f8.js";import{f as k,F as L,a as E,T as S,L as O,E as R,b as V,c as w,d as z,S as B,e as C}from"./AuthForms.styled-fbca9939.js";import{v as I}from"./clusterSchema-e95c7e42.js";const{colors:q}=x,l=u`
  margin-left: auto;

  color: ${q.accent};
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  font-size: ${({$fs:o="14px"})=>o};
  font-weight: 400;
`,G=c(m)`
  ${l};
`,H=c.button`
  ${l};

  background-color: transparent;
  border-color: transparent;
`,M=({$fs:o,to:i,children:t})=>s.jsx(G,{$fs:o,to:i,children:t});M.propTypes={$fs:e.string,to:e.string.isRequired,children:e.oneOfType([e.arrayOf(e.node),e.node]).isRequired};const U=({children:o})=>s.jsx(k,{href:`${f}/auth/google`,children:s.jsxs(j,{$p:"0",$ai:"center",$jc:"space-between",children:[s.jsx(g,{size:"20px"}),o,s.jsx(T,{size:"16px"})]})});U.propTypes={children:e.oneOfType([e.string,e.node,e.oneOf(["img","png","svg"])])};const D=({userEmail:o})=>{const i=b(),t=({values:r,errors:n})=>{const a=!Object.values(r)[0]&&"noValue",h=Object.values(n).length?"error":"success";return a||h},d=({errors:r})=>Object.keys(r).length,p=(r,n)=>{i(F(r)).unwrap().catch(a=>a.includes("401")&&$.error("Unauthorized")).then(()=>i(v())),n.resetForm()};return s.jsx(L,{initialValues:{verificationCode:""},validationSchema:I,onSubmit:p,children:({values:r,errors:n})=>s.jsxs(E,{children:[s.jsx(S,{children:s.jsxs("h2",{children:["Verify: ",o]})}),s.jsxs(y.Fragment,{children:[s.jsxs(O,{children:["Code",s.jsx("pre",{children:" "}),s.jsx(R,{name:"verificationCode",component:"span"})]}),s.jsxs(V,{children:[s.jsx(w,{type:"text",name:"verificationCode",$validation:t({values:r,errors:n})}),t({values:r,errors:n})==="error"&&s.jsx(z,{}),t({values:r,errors:n})==="success"&&s.jsx(B,{})]})]}),s.jsx(C,{disabled:d({errors:n}),children:"Submit"})]})})};D.propTypes={userEmail:e.string.isRequired};export{H as B,U as G,M as L,D as V};
