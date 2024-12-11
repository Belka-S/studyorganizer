import{n as u,s as c,t as x,L as f,P as s,j as e,G as g,d as m,F as j,u as b,r as F,v as y,Q as C,g as v}from"./index-60547dc0.js";import{M as $}from"./index.esm-0c3ccd7f.js";import{f as k,F as T,a as L,T as V,L as z,E,b as S,c as w,d as M,S as O,e as R}from"./AuthForms.styled-f711608e.js";import{v as B}from"./clusterSchema-28de73bf.js";const{colors:G}=x,l=u`
  margin-left: auto;

  color: ${G.accent};
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  font-size: ${({$fs:t="14px"})=>t};
  font-weight: 400;
`,I=c(f)`
  ${l};
`,J=c.button`
  ${l};

  background-color: transparent;
  border-color: transparent;
`,D=({$fs:t,to:o,children:a})=>e.jsx(I,{$fs:t,to:o,children:a});D.propTypes={$fs:s.string,to:s.string.isRequired,children:s.oneOfType([s.arrayOf(s.node),s.node]).isRequired};function H(t){return g({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}const q=({children:t})=>e.jsx(k,{href:`${m}/auth/google`,children:e.jsxs(j,{$p:"0",$ai:"center",$jc:"space-between",children:[e.jsx(H,{size:"20px"}),t,e.jsx($,{size:"16px"})]})});q.propTypes={children:s.oneOfType([s.string,s.node,s.oneOf(["img","png","svg"])])};const U=({userEmail:t})=>{const o=b(),a=({values:r,errors:n})=>{const i=!Object.values(r)[0]&&"noValue",h=Object.values(n).length?"error":"success";return i||h},d=({errors:r})=>Object.keys(r).length,p=(r,n)=>{o(y(r)).unwrap().catch(i=>i.includes("401")&&C.error("Unauthorized")).then(()=>o(v())),n.resetForm()};return e.jsx(T,{initialValues:{verificationCode:""},validationSchema:B,onSubmit:p,children:({values:r,errors:n})=>e.jsxs(L,{children:[e.jsx(V,{children:e.jsxs("h2",{children:["Verify: ",t]})}),e.jsxs(F.Fragment,{children:[e.jsxs(z,{children:["Code",e.jsx("pre",{children:" "}),e.jsx(E,{name:"verificationCode",component:"span"})]}),e.jsxs(S,{children:[e.jsx(w,{type:"text",name:"verificationCode",$validation:a({values:r,errors:n})}),a({values:r,errors:n})==="error"&&e.jsx(M,{}),a({values:r,errors:n})==="success"&&e.jsx(O,{})]})]}),e.jsx(R,{disabled:d({errors:n}),children:"Submit"})]})})};U.propTypes={userEmail:s.string.isRequired};export{J as B,q as G,D as L,U as V};
