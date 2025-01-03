import{n as A,s as f,t as w,P as y,j as e,u as G,r as $,q as T,w as z,Q as L,x as te,c as se,y as R,z as re,A as oe,C as ne,M as O,D as _,E as ce,H as le,I as ae,J as H,K as ie,N as de,O as ue,R as pe,F as he}from"./index-3c007b97.js";import{v as me,u as fe}from"./index.esm-99511e79.js";import{T as be}from"./index.esm-250339ca.js";import{o as xe,F as ge,L as I,I as M,C as $e,B as Ce,g as je,a as ve,A as ye}from"./ClusterAddForm-fa2af25a.js";import{t as ke,c as Te}from"./clusterSchema-b02d80d9.js";const{colors:a,shadows:we,indents:Se}=w,N=A`
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
`,Le=f.li`
  ${N}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${we.back};
    background-color: ${a.white};
    border-radius: ${Se.xxs};
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
`,Ae=f.button`
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
    ${me}
  }
`,Ee=f.label`
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
`,Be=f.label`
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
`,E=A`
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
`,Ie=f.span`
  ${E}

  justify-self: right;
  font-size: 14px;
`,ze=f.button`
  ${E}

  font-size: 14px;
`,_e=f.button`
  ${E}

  opacity: ${({$hovered:t})=>t?1:0};
`,De=f.button`
  ${E}

  opacity: 0;
`,V=({group:t})=>e.jsx(Fe,{children:e.jsx("h2",{children:t})});V.propTypes={group:y.string};const W=({el:t,setIsModal:u})=>{var c,g;const{_id:i,cluster:l,title:d,group:o}=t,h=G(),[b,k]=$.useState({value:o,label:o}),{clusterGroups:v}=T(),{register:p,watch:C,handleSubmit:s,formState:{errors:n}}=fe({mode:"onBlur",resolver:xe(ke),defaultValues:{cluster:l,title:d}}),m=async r=>{const S=je(r.cluster);h(z({_id:i,...r,group:b.value,gdriveId:S})),u(!1)},x=v.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,S)=>r.value.localeCompare(S.value)),j=r=>{C("title")?(h(te({clusterGroup:r})),k({value:r,label:r})):L.error("Title is required")};return e.jsxs(ge,{onSubmit:s(m),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=n.cluster)==null?void 0:c.message]}),e.jsx(M,{...p("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),e.jsx(M,{...p("title"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx($e,{value:b,options:x,onChange:r=>k(r||""),onCreateOption:j,isClearable:b})]}),e.jsx(Ce,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};W.propTypes={el:y.object,setIsModal:y.func.isRequired};const J=({el:t,sortByDate:u,setSortByDate:i})=>{const l=G(),d=se(),{activeCluster:o,clusterTrash:h}=T(),{allElements:b}=R(),[k,v]=$.useState(!1),{_id:p,cluster:C,title:s,favorite:n,checked:m,createdAt:x}=t,j=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},c=b.filter(F=>F.cluster===p).length,g=()=>{l(_(t))},r=()=>{l(z({_id:p,favorite:!n}))},S=()=>{d(`/element/${p}`,{replace:!0})},U=()=>{i(!u),u?L.success("Ascending by Title"):L.success("Ascending by Date")},X=()=>{l(_(t)),v("edit")},Y=()=>l(ce(t)),Z=h.find(F=>F._id===p),ee=()=>{l(z({_id:p,checked:!m}))},D=p===(o==null?void 0:o._id);return e.jsxs(Le,{id:D?"active-cluster":null,$active:D,onClick:g,children:[e.jsxs(Ee,{$hovered:n,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),e.jsx(be,{size:"20px"})]}),e.jsx(Ae,{onClick:S,children:s}),e.jsx(Ge,{href:C,target:"_blank",rel:"noopener noreferrer",children:j(C)}),e.jsx(Ie,{children:c>0&&c}),e.jsx(De,{onClick:X,children:e.jsx(re,{size:"15px"})}),e.jsx(_e,{$hovered:Z,onClick:Y,children:e.jsx(oe,{size:"16px"})}),e.jsxs(Be,{$hovered:m,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:m,onChange:ee}),e.jsx(ne,{size:"15px"})]}),e.jsx(ze,{onClick:U,children:ve(x)}),k&&e.jsx(O,{onClick:()=>v(!1),children:e.jsx(W,{el:t,setIsModal:v})})]})};J.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func};const{indents:Me}=w,qe=f.ol`
  width: 100%;

  padding-bottom: ${Me.xl};
  counter-reset: section 0;
`,Re=()=>{const t=G(),{allElements:u}=R(),{allClusters:i,clusterTrash:l,clusterFilter:d}=T();let{clusterSelect:o}=T();o=o||[];const[h,b]=$.useState(!1);$.useEffect(()=>{t(le()),t(ae())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const v=(()=>{const s=l.map(c=>c._id),n=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return n;const m=[...u].sort((c,g)=>c.createdAt.localeCompare(g.createdAt));let x=[];for(let c=0;c<m.length;c+=1){const g=m[c].cluster;x.includes(g)||x.push(g)}const j=i.filter(c=>x.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:n,favorite:m,checked:x})=>{const j=s.toLowerCase().includes(d)||n.toLowerCase().includes(d),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&m===!0:j&&m===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&x===!0:c()&&x===!1:c())()}).sort(h?(s,n)=>n.createdAt.localeCompare(s.createdAt):(s,n)=>s.title.localeCompare(n.title)),p=Array.from(new Set(v.map(s=>s.group))).sort((s,n)=>s.localeCompare(n));let C=o.filter(s=>p.includes(s));return C=C.length!==0?C:p,e.jsx(qe,{children:C.map(s=>e.jsxs($.Fragment,{children:[e.jsx(V,{group:s}),v.map(n=>n.group===s&&e.jsx(J,{el:n,sortByDate:h,setSortByDate:b},n._id))]},s))})},{button:Oe}=w.shadows,He=()=>{const t=G(),{activeCluster:u,clusterTrash:i}=T(),l=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(ie(i.map(d=>d._id).join("&"))).then(()=>{const d=i.map(h=>h._id),{_id:o}=u;d.includes(o)&&t(_(null))}).then(()=>t(de()))};return e.jsx(H,{onClick:l,$s:"m",$bs:Oe,children:"delete"})},{button:Ne}=w.shadows,Q=({setClipboardText:t,setIsModal:u})=>{$.useEffect(()=>{const l=d=>{d.key==="+"&&i()};return addEventListener("keydown",l),()=>{removeEventListener("keydown",l)}},[]);const i=async l=>{const d=await ue();try{await Te.validate({cluster:d}),t(d),u("add")}catch(o){l==null||l.target.blur(),L.error(`Invalid cluster, ${o.message}`)}};return e.jsx(H,{onClick:i,$s:"m",$bs:Ne,children:"add"})};Q.propTypes={setClipboardText:y.func.isRequired,setIsModal:y.func.isRequired};const{s:Pe,m:Ke}=w.indents,Ve=()=>{const{clusterTrash:t}=T(),[u,i]=$.useState(!1),[l,d]=$.useState(""),[o,h]=$.useState(""),b=t.length>0?" 1fr":"",k="1fr"+b;return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{$m:`${Pe} ${Ke}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,children:[b&&e.jsx(He,{}),e.jsx(Q,{setClipboardText:d,setIsModal:i})]}),u&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(ye,{cluster:l,group:o,setGroup:h,setIsModal:i})})]})},{s:q,m:We}=w.indents,Ze=()=>e.jsxs(he,{$p:`0 ${We} ${q} ${q}`,children:[e.jsx(Re,{}),e.jsx(Ve,{})]});export{Ze as default};
