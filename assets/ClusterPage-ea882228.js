import{n as G,s as b,t as S,P as y,j as e,u as A,r as $,q as w,w as _,Q as F,x as ee,c as te,y as R,z as se,A as re,C as oe,M as O,D as z,E as ne,H as ce,I as le,J as ae,K as ie,N as H,O as de,R as ue,S as pe,T as he,F as me}from"./index-749861fb.js";import{v as fe,u as be}from"./index.esm-a15d5f47.js";import{T as xe}from"./index.esm-077b5da3.js";import{o as ge,F as $e,L as I,I as M,C as je,B as Ce,g as ve,a as ye,A as ke}from"./ClusterAddForm-cb4219b1.js";import{t as Te,c as we}from"./clusterSchema-1d6dcf15.js";const{colors:a,shadows:Se,indents:Ee}=S,P=G`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 25fr 2fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${a.borderLight};
`,Le=b.li`
  ${P}
  counter-reset: subsection;
  line-height: 2;

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;

    &::before {
      counter-increment: section;
      content: 'Group ' counter(section) ' - ';
      text-transform: capitalize;
    }
  }
`,Fe=b.li`
  ${P}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${Se.back};
    background-color: ${a.white};
    border-radius: ${Ee.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,K=G`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${a.hovered};
  }
`,Ge=b.button`
  ${K}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,Ae=b.a`
  ${K}

  color: ${a.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${a.black};
  }
`,N=G`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${fe}
  }
`,Be=b.label`
  ${N}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?a.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?a.yellow:a.border};
  }
  &:hover svg {
    stroke: ${a.placeholder};
  }
`,Ie=b.label`
  ${N}
  opacity: ${({$hovered:t})=>t?1:0};

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${a.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?a.border:"transparent"};
  }
  &:hover svg {
    border-color: ${a.placeholder};
    color: ${({$hovered:t})=>t?a.placeholder:"transparent"};
  }
`,B=G`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  &,
  & svg {
    transition: color 250ms;
    color: ${a.border};
  }
  &:hover,
  &:hover svg {
    color: ${a.placeholder};
  }
`,_e=b.span`
  ${B}

  justify-self: right;
  font-size: 14px;
`,ze=b.button`
  ${B}

  font-size: 14px;
`,De=b.button`
  ${B}

  opacity: ${({$hovered:t})=>t?1:0};
`,Me=b.button`
  ${B}

  opacity: 0;
`,V=({group:t})=>e.jsx(Le,{children:e.jsx("h2",{children:t})});V.propTypes={group:y.string};const W=({el:t,setIsModal:u})=>{var c,f;const{_id:i,cluster:o,title:d,group:s}=t,h=A(),[m,k]=$.useState({value:s,label:s}),{clusterGroups:C}=w(),{register:p,watch:j,handleSubmit:r,formState:{errors:n}}=be({mode:"onBlur",resolver:ge(Te),defaultValues:{cluster:o,title:d}}),x=async l=>{const E=ve(l.cluster);h(_({_id:i,...l,group:m.value,gdriveId:E})),u(!1)},g=C.map(l=>({value:l.clusterGroup,label:l.clusterGroup})).sort((l,E)=>l.value.localeCompare(E.value)),v=l=>{j("title")?(h(ee({clusterGroup:l})),k({value:l,label:l})):F.error("Title is required")};return e.jsxs($e,{onSubmit:r(x),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=n.cluster)==null?void 0:c.message]}),e.jsx(M,{...p("cluster"),onFocus:l=>l.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(f=n.title)==null?void 0:f.message]}),e.jsx(M,{...p("title"),onFocus:l=>l.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(je,{value:m,options:g,onChange:l=>k(l||""),onCreateOption:v,isClearable:m})]}),e.jsx(Ce,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};W.propTypes={el:y.object,setIsModal:y.func.isRequired};const J=({el:t,sortByDate:u,setSortByDate:i})=>{const o=A(),d=te(),{activeCluster:s,clusterTrash:h}=w(),{allElements:m}=R(),[k,C]=$.useState(!1),{_id:p,cluster:j,title:r,favorite:n,checked:x,createdAt:g}=t,v=T=>{const L=T.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=30?L:L.substring(0,19).concat("...")},c=m.filter(T=>T.cluster===p).length,f=()=>{o(_({_id:p,favorite:!n}))},l=()=>{if(o(z(t)),(t==null?void 0:t._id)===(s==null?void 0:s._id)&&d(`/element/${p}`,{replace:!0}),t.activeEl){const T=m.find(({_id:L})=>L===t.activeEl);o(ne(T))}},E=()=>{i(!u),u?F.success("Ascending by Title"):F.success("Ascending by Date")},U=()=>{o(z(t)),C("edit")},X=()=>o(ce(t)),Y=h.find(T=>T._id===p),Z=()=>{o(_({_id:p,checked:!x}))},D=p===(s==null?void 0:s._id);return e.jsxs(Fe,{id:D?"active-cluster":null,$active:D,children:[e.jsxs(Be,{$hovered:n,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:f}),e.jsx(xe,{size:"20px"})]}),e.jsx(Ge,{onClick:l,children:r}),e.jsx(Ae,{href:j,target:"_blank",rel:"noopener noreferrer",children:v(j)}),e.jsx(_e,{children:c>0&&c}),e.jsx(Me,{onClick:U,children:e.jsx(se,{size:"15px"})}),e.jsx(De,{$hovered:Y,onClick:X,children:e.jsx(re,{size:"16px"})}),e.jsxs(Ie,{$hovered:x,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:x,onChange:Z}),e.jsx(oe,{size:"15px"})]}),e.jsx(ze,{onClick:E,children:ye(g)}),k&&e.jsx(O,{onClick:()=>C(!1),children:e.jsx(W,{el:t,setIsModal:C})})]})};J.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func};const{indents:qe}=S,Re=b.ol`
  width: 100%;

  padding-bottom: ${qe.xl};
  counter-reset: section 0;
`,Oe=()=>{const t=A(),{allElements:u}=R(),{allClusters:i,clusterTrash:o,clusterFilter:d}=w();let{clusterSelect:s}=w();s=s||[];const[h,m]=$.useState(!1);$.useEffect(()=>{t(le()),t(ae()),t(ie())},[t]),$.useEffect(()=>{const r=document.getElementById("active-cluster");(()=>{r==null||r.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const C=(()=>{const r=o.map(c=>c._id),n=i.filter(c=>r.includes(c._id));if(s.includes("trash"))return n;const x=[...u].sort((c,f)=>c.createdAt.localeCompare(f.createdAt));let g=[];for(let c=0;c<x.length;c+=1){const f=x[c].cluster;g.includes(f)||g.push(f)}const v=i.filter(c=>g.includes(c.cluster)).slice(0,29);return s.includes("recent")?v:i})().filter(({group:r,title:n,favorite:x,checked:g})=>{const v=r.toLowerCase().includes(d)||n.toLowerCase().includes(d),c=s.includes("favorite")?v&&x===!0:v;return s.some(f=>["checked","unchecked"].includes(f))?s.includes("checked")?c&&g===!0:c&&g===!1:c}).sort(h?(r,n)=>n.createdAt.localeCompare(r.createdAt):(r,n)=>r.title.localeCompare(n.title)),p=Array.from(new Set(C.map(r=>r.group))).sort((r,n)=>r.localeCompare(n));let j=s.filter(r=>p.includes(r));return j=j.length!==0?j:p,e.jsx(Re,{children:j.map(r=>e.jsxs($.Fragment,{children:[e.jsx(V,{group:r}),C.map(n=>n.group===r&&e.jsx(J,{el:n,sortByDate:h,setSortByDate:m},n._id))]},r))})},{button:He}=S.shadows,Pe=()=>{const t=A(),{activeCluster:u,clusterTrash:i}=w(),o=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(de(i.map(d=>d._id).join("&"))).then(()=>{const d=i.map(h=>h._id),{_id:s}=u;d.includes(s)&&t(z(null))}).then(()=>t(ue()))};return e.jsx(H,{onClick:o,$s:"m",$bs:He,children:"delete"})},{button:Ke}=S.shadows,Q=({setClipboardText:t,setIsModal:u})=>{$.useEffect(()=>{const o=d=>{d.key==="+"&&i()};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const i=async o=>{const d=await pe();try{await we.validate({cluster:d}),t(d),u("add")}catch(s){o==null||o.target.blur(),F.error(`Invalid cluster, ${s.message}`)}};return e.jsx(H,{onClick:i,$s:"m",$bs:Ke,children:"add"})};Q.propTypes={setClipboardText:y.func.isRequired,setIsModal:y.func.isRequired};const{s:Ne,m:Ve}=S.indents,We=()=>{const{clusterTrash:t}=w(),[u,i]=$.useState(!1),[o,d]=$.useState(""),[s,h]=$.useState(""),m=t.length>0?" 1fr":"",k="1fr"+m;return e.jsxs(e.Fragment,{children:[e.jsxs(he,{$m:`${Ne} ${Ve}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,children:[m&&e.jsx(Pe,{}),e.jsx(Q,{setClipboardText:d,setIsModal:i})]}),u&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(ke,{cluster:o,group:s,setGroup:h,setIsModal:i})})]})},{s:q,m:Je}=S.indents,et=()=>e.jsxs(me,{$p:`0 ${Je} ${q} ${q}`,children:[e.jsx(Oe,{}),e.jsx(We,{})]});export{et as default};
