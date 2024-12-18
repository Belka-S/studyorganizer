import{n as A,s as f,t as w,P as y,j as e,u as E,r as $,q as T,w as z,Q as F,x as te,c as se,y as R,z as re,A as oe,C as ne,M as O,D as _,E as ce,H as le,I as ae,J as ie,K as H,N as de,O as ue,R as pe,S as he,F as me}from"./index-26565609.js";import{v as fe,u as be}from"./index.esm-a63bcd70.js";import{T as xe}from"./index.esm-0eaa4092.js";import{o as ge,F as $e,L as I,I as M,C as Ce,B as je,g as ve,a as ye,A as ke}from"./ClusterAddForm-d0a43197.js";import{t as Te,c as we}from"./clusterSchema-20a20d27.js";const{colors:a,shadows:Se,indents:Le}=w,N=A`
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
`,Fe=f.li`
  ${N}
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
`,Ae=f.li`
  ${N}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${Se.back};
    background-color: ${a.white};
    border-radius: ${Le.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,P=A`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${a.hovered};
  }
`,Ee=f.button`
  ${P}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,Ge=f.a`
  ${P}

  color: ${a.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${a.black};
  }
`,K=A`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${fe}
  }
`,Be=f.label`
  ${K}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?a.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?a.yellow:a.border};
  }
  &:hover svg {
    stroke: ${a.placeholder};
  }
`,Ie=f.label`
  ${K}
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
`,G=A`
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
`,ze=f.span`
  ${G}

  justify-self: right;
  font-size: 14px;
`,_e=f.button`
  ${G}

  font-size: 14px;
`,De=f.button`
  ${G}

  opacity: ${({$hovered:t})=>t?1:0};
`,Me=f.button`
  ${G}

  opacity: 0;
`,V=({group:t})=>e.jsx(Fe,{children:e.jsx("h2",{children:t})});V.propTypes={group:y.string};const W=({el:t,setIsModal:u})=>{var n,m;const{_id:i,cluster:c,title:d,group:r}=t,h=E(),[b,k]=$.useState({value:r,label:r}),{clusterGroups:j}=T(),{register:p,watch:C,handleSubmit:s,formState:{errors:o}}=be({mode:"onBlur",resolver:ge(Te),defaultValues:{cluster:c,title:d}}),x=async l=>{const S=ve(l.cluster);h(z({_id:i,...l,group:b.value,gdriveId:S})),u(!1)},g=j.map(l=>({value:l.clusterGroup,label:l.clusterGroup})).sort((l,S)=>l.value.localeCompare(S.value)),v=l=>{C("title")?(h(te({clusterGroup:l})),k({value:l,label:l})):F.error("Title is required")};return e.jsxs($e,{onSubmit:s(x),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(n=o.cluster)==null?void 0:n.message]}),e.jsx(M,{...p("cluster"),onFocus:l=>l.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(m=o.title)==null?void 0:m.message]}),e.jsx(M,{...p("title"),onFocus:l=>l.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(Ce,{value:b,options:g,onChange:l=>k(l||""),onCreateOption:v,isClearable:b})]}),e.jsx(je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};W.propTypes={el:y.object,setIsModal:y.func.isRequired};const J=({el:t,sortByDate:u,setSortByDate:i})=>{const c=E(),d=se(),{activeCluster:r,clusterTrash:h}=T(),{allElements:b}=R(),[k,j]=$.useState(!1),{_id:p,cluster:C,title:s,favorite:o,checked:x,createdAt:g}=t,v=L=>{const B=L.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},n=b.filter(L=>L.cluster===p).length,m=()=>{c(_(t))},l=()=>{c(z({_id:p,favorite:!o}))},S=()=>{d(`/element/${p}`,{replace:!0})},U=()=>{i(!u),u?F.success("Ascending by Title"):F.success("Ascending by Date")},X=()=>{c(_(t)),j("edit")},Y=()=>c(ce(t)),Z=h.find(L=>L._id===p),ee=()=>{c(z({_id:p,checked:!x}))},D=p===(r==null?void 0:r._id);return e.jsxs(Ae,{id:D?"active-cluster":null,$active:D,onClick:m,children:[e.jsxs(Be,{$hovered:o,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:l}),e.jsx(xe,{size:"20px"})]}),e.jsx(Ee,{onClick:S,children:s}),e.jsx(Ge,{href:C,target:"_blank",rel:"noopener noreferrer",children:v(C)}),e.jsx(ze,{children:n>0&&n}),e.jsx(Me,{onClick:X,children:e.jsx(re,{size:"15px"})}),e.jsx(De,{$hovered:Z,onClick:Y,children:e.jsx(oe,{size:"16px"})}),e.jsxs(Ie,{$hovered:x,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:x,onChange:ee}),e.jsx(ne,{size:"15px"})]}),e.jsx(_e,{onClick:U,children:ye(g)}),k&&e.jsx(O,{onClick:()=>j(!1),children:e.jsx(W,{el:t,setIsModal:j})})]})};J.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func};const{indents:qe}=w,Re=f.ol`
  width: 100%;

  padding-bottom: ${qe.xl};
  counter-reset: section 0;
`,Oe=()=>{const t=E(),{allElements:u}=R(),{allClusters:i,clusterTrash:c,clusterFilter:d}=T();let{clusterSelect:r}=T();r=r||[];const[h,b]=$.useState(!1);$.useEffect(()=>{t(le()),t(ae()),t(ie())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const j=(()=>{const s=c.map(n=>n._id),o=i.filter(n=>s.includes(n._id));if(r.includes("trash"))return o;const x=[...u].sort((n,m)=>n.createdAt.localeCompare(m.createdAt));let g=[];for(let n=0;n<x.length;n+=1){const m=x[n].cluster;g.includes(m)||g.push(m)}const v=i.filter(n=>g.includes(n.cluster)).slice(0,29);return r.includes("recent")?v:i})().filter(({group:s,title:o,favorite:x,checked:g})=>{const v=s.toLowerCase().includes(d)||o.toLowerCase().includes(d),n=r.includes("favorite")?v&&x===!0:v;return r.some(m=>["checked","unchecked"].includes(m))?r.includes("checked")?n&&g===!0:n&&g===!1:n}).sort(h?(s,o)=>o.createdAt.localeCompare(s.createdAt):(s,o)=>s.title.localeCompare(o.title)),p=Array.from(new Set(j.map(s=>s.group))).sort((s,o)=>s.localeCompare(o));let C=r.filter(s=>p.includes(s));return C=C.length!==0?C:p,e.jsx(Re,{children:C.map(s=>e.jsxs($.Fragment,{children:[e.jsx(V,{group:s}),j.map(o=>o.group===s&&e.jsx(J,{el:o,sortByDate:h,setSortByDate:b},o._id))]},s))})},{button:He}=w.shadows,Ne=()=>{const t=E(),{activeCluster:u,clusterTrash:i}=T(),c=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(de(i.map(d=>d._id).join("&"))).then(()=>{const d=i.map(h=>h._id),{_id:r}=u;d.includes(r)&&t(_(null))}).then(()=>t(ue()))};return e.jsx(H,{onClick:c,$s:"m",$bs:He,children:"delete"})},{button:Pe}=w.shadows,Q=({setClipboardText:t,setIsModal:u})=>{$.useEffect(()=>{const c=d=>{d.key==="+"&&i()};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[]);const i=async c=>{const d=await pe();try{await we.validate({cluster:d}),t(d),u("add")}catch(r){c==null||c.target.blur(),F.error(`Invalid cluster, ${r.message}`)}};return e.jsx(H,{onClick:i,$s:"m",$bs:Pe,children:"add"})};Q.propTypes={setClipboardText:y.func.isRequired,setIsModal:y.func.isRequired};const{s:Ke,m:Ve}=w.indents,We=()=>{const{clusterTrash:t}=T(),[u,i]=$.useState(!1),[c,d]=$.useState(""),[r,h]=$.useState(""),b=t.length>0?" 1fr":"",k="1fr"+b;return e.jsxs(e.Fragment,{children:[e.jsxs(he,{$m:`${Ke} ${Ve}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,children:[b&&e.jsx(Ne,{}),e.jsx(Q,{setClipboardText:d,setIsModal:i})]}),u&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(ke,{cluster:c,group:r,setGroup:h,setIsModal:i})})]})},{s:q,m:Je}=w.indents,et=()=>e.jsxs(me,{$p:`0 ${Je} ${q} ${q}`,children:[e.jsx(Oe,{}),e.jsx(We,{})]});export{et as default};
