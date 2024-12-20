import{n as A,s as f,t as w,P as k,j as e,u as E,r as $,q as T,w as z,Q as L,x as te,c as se,y as R,z as re,A as oe,C as ne,M as O,D as _,E as ce,H as le,I as ae,J as ie,K as H,N as de,O as ue,R as he,S as pe,F as me}from"./index-3f45e492.js";import{v as fe,u as be}from"./index.esm-114a6cfb.js";import{T as xe}from"./index.esm-339c2db3.js";import{o as ge,F as $e,L as I,I as M,C as Ce,B as je,g as ve,a as ke,A as ye}from"./ClusterAddForm-9fc3cdd5.js";import{t as Te,c as we}from"./clusterSchema-e3ba6dab.js";const{colors:a,shadows:Se,indents:Fe}=w,N=A`
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
`,Le=f.li`
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
    border-radius: ${Fe.xxs};
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
`,V=({group:t})=>e.jsx(Le,{children:e.jsx("h2",{children:t})});V.propTypes={group:k.string};const W=({el:t,setIsModal:u})=>{var c,g;const{_id:i,cluster:l,title:d,group:o}=t,p=E(),[b,y]=$.useState({value:o,label:o}),{clusterGroups:v}=T(),{register:h,watch:C,handleSubmit:s,formState:{errors:n}}=be({mode:"onBlur",resolver:ge(Te),defaultValues:{cluster:l,title:d}}),m=async r=>{const S=ve(r.cluster);p(z({_id:i,...r,group:b.value,gdriveId:S})),u(!1)},x=v.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,S)=>r.value.localeCompare(S.value)),j=r=>{C("title")?(p(te({clusterGroup:r})),y({value:r,label:r})):L.error("Title is required")};return e.jsxs($e,{onSubmit:s(m),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=n.cluster)==null?void 0:c.message]}),e.jsx(M,{...h("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),e.jsx(M,{...h("title"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(Ce,{value:b,options:x,onChange:r=>y(r||""),onCreateOption:j,isClearable:b})]}),e.jsx(je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};W.propTypes={el:k.object,setIsModal:k.func.isRequired};const J=({el:t,sortByDate:u,setSortByDate:i})=>{const l=E(),d=se(),{activeCluster:o,clusterTrash:p}=T(),{allElements:b}=R(),[y,v]=$.useState(!1),{_id:h,cluster:C,title:s,favorite:n,checked:m,createdAt:x}=t,j=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},c=b.filter(F=>F.cluster===h).length,g=()=>{l(_(t))},r=()=>{l(z({_id:h,favorite:!n}))},S=()=>{d(`/element/${h}`,{replace:!0})},U=()=>{i(!u),u?L.success("Ascending by Title"):L.success("Ascending by Date")},X=()=>{l(_(t)),v("edit")},Y=()=>l(ce(t)),Z=p.find(F=>F._id===h),ee=()=>{l(z({_id:h,checked:!m}))},D=h===(o==null?void 0:o._id);return e.jsxs(Ae,{id:D?"active-cluster":null,$active:D,onClick:g,children:[e.jsxs(Be,{$hovered:n,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),e.jsx(xe,{size:"20px"})]}),e.jsx(Ee,{onClick:S,children:s}),e.jsx(Ge,{href:C,target:"_blank",rel:"noopener noreferrer",children:j(C)}),e.jsx(ze,{children:c>0&&c}),e.jsx(Me,{onClick:X,children:e.jsx(re,{size:"15px"})}),e.jsx(De,{$hovered:Z,onClick:Y,children:e.jsx(oe,{size:"16px"})}),e.jsxs(Ie,{$hovered:m,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:m,onChange:ee}),e.jsx(ne,{size:"15px"})]}),e.jsx(_e,{onClick:U,children:ke(x)}),y&&e.jsx(O,{onClick:()=>v(!1),children:e.jsx(W,{el:t,setIsModal:v})})]})};J.propTypes={el:k.object,sortByDate:k.bool,setSortByDate:k.func};const{indents:qe}=w,Re=f.ol`
  width: 100%;

  padding-bottom: ${qe.xl};
  counter-reset: section 0;
`,Oe=()=>{const t=E(),{allElements:u}=R(),{allClusters:i,clusterTrash:l,clusterFilter:d}=T();let{clusterSelect:o}=T();o=o||[];const[p,b]=$.useState(!1);$.useEffect(()=>{t(le()),t(ae()),t(ie())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const v=(()=>{const s=l.map(c=>c._id),n=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return n;const m=[...u].sort((c,g)=>c.createdAt.localeCompare(g.createdAt));let x=[];for(let c=0;c<m.length;c+=1){const g=m[c].cluster;x.includes(g)||x.push(g)}const j=i.filter(c=>x.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:n,favorite:m,checked:x})=>{const j=s.toLowerCase().includes(d)||n.toLowerCase().includes(d),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&m===!0:j&&m===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&x===!0:c()&&x===!1:c())()}).sort(p?(s,n)=>n.createdAt.localeCompare(s.createdAt):(s,n)=>s.title.localeCompare(n.title)),h=Array.from(new Set(v.map(s=>s.group))).sort((s,n)=>s.localeCompare(n));let C=o.filter(s=>h.includes(s));return C=C.length!==0?C:h,e.jsx(Re,{children:C.map(s=>e.jsxs($.Fragment,{children:[e.jsx(V,{group:s}),v.map(n=>n.group===s&&e.jsx(J,{el:n,sortByDate:p,setSortByDate:b},n._id))]},s))})},{button:He}=w.shadows,Ne=()=>{const t=E(),{activeCluster:u,clusterTrash:i}=T(),l=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(de(i.map(d=>d._id).join("&"))).then(()=>{const d=i.map(p=>p._id),{_id:o}=u;d.includes(o)&&t(_(null))}).then(()=>t(ue()))};return e.jsx(H,{onClick:l,$s:"m",$bs:He,children:"delete"})},{button:Pe}=w.shadows,Q=({setClipboardText:t,setIsModal:u})=>{$.useEffect(()=>{const l=d=>{d.key==="+"&&i()};return addEventListener("keydown",l),()=>{removeEventListener("keydown",l)}},[]);const i=async l=>{const d=await he();try{await we.validate({cluster:d}),t(d),u("add")}catch(o){l==null||l.target.blur(),L.error(`Invalid cluster, ${o.message}`)}};return e.jsx(H,{onClick:i,$s:"m",$bs:Pe,children:"add"})};Q.propTypes={setClipboardText:k.func.isRequired,setIsModal:k.func.isRequired};const{s:Ke,m:Ve}=w.indents,We=()=>{const{clusterTrash:t}=T(),[u,i]=$.useState(!1),[l,d]=$.useState(""),[o,p]=$.useState(""),b=t.length>0?" 1fr":"",y="1fr"+b;return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{$m:`${Ke} ${Ve}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:y,children:[b&&e.jsx(Ne,{}),e.jsx(Q,{setClipboardText:d,setIsModal:i})]}),u&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(ye,{cluster:l,group:o,setGroup:p,setIsModal:i})})]})},{s:q,m:Je}=w.indents,et=()=>e.jsxs(me,{$p:`0 ${Je} ${q} ${q}`,children:[e.jsx(Oe,{}),e.jsx(We,{})]});export{et as default};
