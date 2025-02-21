import{p as D,q as C,t as F,P as v,j as e,u as E,i as O,v as I,r as j,B as G,w as le,x as H,h as B,y as ie,l as ue,z as de,A as pe,C as he,D as be,M as P,H as fe,J as _,K as me,N as xe,O as K,Q as ge,R as je,U as Ce,W as $e,X as ve,Y as ke,Z as ye,_ as Se,$ as we,a0 as Te,a1 as Ie,k as Fe}from"./index-f98a980e.js";import{v as Le,u as X}from"./index.esm-12364a03.js";import{T as Be,r as _e}from"./index-7485da4d.js";import{o as J,F as Q,L as z,I as N,C as Ee,g as Ae,a as ze,A as De}from"./ClusterAddForm-b02b05a7.js";const{colors:d,shadows:Ge,indents:Me}=F,U=D`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 15fr 2fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${d.borderLight};
`,Re=C.li`
  ${U}
  counter-reset: subsection;
  line-height: 2;

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;

    &::before {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      counter-increment: section;
      content: counter(section) '. ';
      text-transform: capitalize;
    }
  }
`,qe=C.li`
  ${U}

  background-color: ${({$active:t})=>t&&d.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${d.border};
    box-shadow: ${Ge.backdrop};
    background-color: ${d.white};
    border-radius: ${Me.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,V=D`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${d.hovered};
  }
`,He=C.button`
  ${V}

  border: none;
  background-color: transparent;
  color: ${d.black};
  font-weight: 500;
`,Pe=C.a`
  ${V}

  color: ${d.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${d.black};
  }
`,Z=D`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Le}
  }
`,Ne=C.label`
  ${Z}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?d.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?d.yellow:d.border};
  }
  &:hover svg {
    stroke: ${d.placeholder};
  }
`,Oe=C.label`
  ${Z}
  opacity: ${({$hovered:t})=>t?1:0};

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${d.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?d.border:"transparent"};
  }
  &:hover svg {
    border-color: ${d.placeholder};
    color: ${({$hovered:t})=>t?d.placeholder:"transparent"};
  }
`,M=D`
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
    color: ${d.border};
  }
  &:hover,
  &:hover svg {
    color: ${d.placeholder};
  }
`,We=C.span`
  ${M}

  justify-self: right;
  font-size: 14px;
`,Ye=C.button`
  ${M}

  font-size: 14px;
`,Ke=C.button`
  ${M}

  opacity: ${({$hovered:t})=>t?1:0};
`,Xe=C.button`
  ${M}

  opacity: 0;
`,ee=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});ee.propTypes={group:v.string};const te=({el:t,setIsModal:n})=>{var h,x;const{_id:c,cluster:s,title:p,group:u}=t,i=E(),{user:a}=O(),{clusterGroups:$}=I(),[y,S]=j.useState({value:u,label:u}),{register:g,watch:w,handleSubmit:k,formState:{errors:r}}=X({mode:"onBlur",resolver:J(le),defaultValues:{cluster:s,title:p}}),l=async o=>{const b=Ae(o.cluster),A=await y.value,R=await $.find(q=>q.group===A)._id;i(H({_id:c,...o,group:A,groupId:R,gdriveId:b})),n(!1)},f=$.map(o=>({value:o.group,label:o.group})).sort((o,b)=>o.value.localeCompare(b.value)),m=o=>{w("title")?(i(ie({group:o,subject:a.subjectId})),S({value:o,label:o})):B.error("Title is required")};return e.jsxs(Q,{onSubmit:k(l),children:[e.jsxs(z,{children:["Cluster ",e.jsxs("span",{children:[" ",(h=r.cluster)==null?void 0:h.message]}),e.jsx(N,{...g("cluster"),onFocus:o=>o.target.select()})]}),e.jsxs(z,{children:["Title ",e.jsxs("span",{children:[" ",(x=r.title)==null?void 0:x.message]}),e.jsx(N,{...g("title"),onFocus:o=>o.target.select()})]}),e.jsxs(z,{children:["Group",e.jsx(Ee,{value:y,options:f,onChange:o=>S(o||""),onCreateOption:m,isClearable:y,$ph:"left"})]}),e.jsx(G,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};te.propTypes={el:v.object,setIsModal:v.func.isRequired};const se=({el:t,sortByDate:n,setSortByDate:c})=>{const s=E(),p=ue(),{user:u}=O(),{activeCluster:i,clusterTrash:a}=I(),{allElements:$}=de(),[y,S]=j.useState(!1),{_id:g,cluster:w,title:k,favorite:r,checked:l,createdAt:f}=t,m=g===(i==null?void 0:i._id),h=T=>{const L=T.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=23?L:L.substring(0,13).concat(`...${L.substring(L.length-6)}`)},x=$.filter(T=>T.cluster===g).length,o=()=>{if(m)return;const{subjectId:T}=u;s(fe({_id:T,activeClusterId:t._id})),s(_(t))},b=()=>{s(H({_id:g,favorite:!r}))},A=()=>{p(`/element/${g}`,{replace:!0})},R=()=>{c(!n),n?B.success("Ascending by Title"):B.success("Ascending by Date")},q=()=>{s(_(t)),S("edit")},ne=()=>s(me(t)),ce=a.find(T=>T._id===g),ae=()=>{s(H({_id:g,checked:!l}))};return e.jsxs(qe,{id:m?"active-cluster":null,$active:m,onClick:o,children:[e.jsxs(Ne,{$hovered:r,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:r,onChange:b}),e.jsx(Be,{size:"20px"})]}),e.jsx(He,{onClick:A,children:k}),e.jsx(Pe,{href:w,target:"_blank",rel:"noopener noreferrer",children:h(w)}),e.jsx(We,{children:x>0&&x}),e.jsx(Xe,{onClick:q,children:e.jsx(pe,{size:"15px"})}),e.jsx(Ke,{$hovered:ce,onClick:ne,children:e.jsx(he,{size:"16px"})}),e.jsxs(Oe,{$hovered:l,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:ae}),e.jsx(be,{size:"15px"})]}),e.jsx(Ye,{onClick:R,children:ze(f)}),y&&e.jsx(P,{onClick:()=>S(!1),children:e.jsx(te,{el:t,setIsModal:S})})]})};se.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Je}=F,Qe=C.ol`
  width: 100%;

  padding-bottom: ${Je.xl};
  counter-reset: section 0;
`,Ue=()=>{const t=E(),{user:n}=O(),{allClusters:c,clusterGroups:s,activeCluster:p}=I(),{clusterTrash:u,clusterFilter:i,clusterSelect:a}=I(),[$,y]=j.useState(!1);if(j.useEffect(()=>{!n.subject||!n.subjectId||(t(_(null)),t(xe({subject:n.subject})).unwrap().then(r=>{const{clusters:l}=r.result,f=[...new Set(l.map(m=>m.groupId))];t(K({_id:f})),t(ge()).unwrap().then(m=>{var o;const h=(o=m.result)==null?void 0:o.subjects.find(({_id:b})=>b===n.subjectId);t(je(h==null?void 0:h.clusterSelect));const x=l.find(({_id:b})=>b===(h==null?void 0:h.activeClusterId));x&&t(_(x))})}))},[t,n]),j.useEffect(()=>{const r=document.getElementById("active-cluster");r&&Ce(r)},[p]),!a)return;const g=(()=>{const r=u.map(f=>f._id),l=c.filter(f=>r.includes(f._id));return a.includes("trash")?l:c})().filter(({group:r,title:l,favorite:f,checked:m})=>{const h=r.toLowerCase().includes(i)||l.toLowerCase().includes(i),x=()=>a.some(b=>["favorite","unfavorite"].includes(b))?a.includes("favorite")?h&&f===!0:h&&f===!1:h;return(()=>a!=null&&a.some(b=>["checked","unchecked"].includes(b))?a.includes("checked")?x()&&m===!0:x()&&m===!1:x())()}).sort($?(r,l)=>l.createdAt.localeCompare(r.createdAt):(r,l)=>r.title.localeCompare(l.title)),w=new Set(s.map(r=>r.group));let k=[...w.intersection(new Set(a))];if(k=k[0]?k:[...w],!(c.length===0||s.length===0))return e.jsx(Qe,{children:k.map(r=>e.jsxs(j.Fragment,{children:[e.jsx(ee,{group:r}),g.map(l=>l.group===r&&e.jsx(se,{el:l,sortByDate:$,setSortByDate:y},l._id))]},r))})},re=({setIsModal:t})=>{var i;const n=E(),{register:c,handleSubmit:s,formState:{errors:p}}=X({mode:"onBlur",resolver:J(ve)}),u=a=>{n($e({subject:a.subject})),t(!1)};return e.jsxs(Q,{onSubmit:s(u),children:[e.jsxs(z,{children:["Subject ",e.jsxs("span",{children:[" ",(i=p.subject)==null?void 0:i.message]}),e.jsx(N,{autoComplete:"off",autoFocus:!0,...c("subject")})]}),e.jsx(G,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};re.propTypes={setIsModal:v.func.isRequired};const{button:Ve}=F.shadows,Ze=()=>{const t=E(),{allClusters:n,activeCluster:c,clusterTrash:s}=I(),p=()=>{B.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(ye(s.map(u=>u._id).join("&"))).then(()=>{const u=s.map(a=>a._id),{_id:i}=c;u.includes(i)&&t(_(null))}).then(()=>{t(Se());const u=[...new Set(n.map(i=>i.groupId))];t(K({_id:u}))})}}})};return e.jsx(G,{onClick:p,$s:"m",$round:!0,$bs:Ve,children:e.jsx(ke,{size:16})})},{button:et}=F.shadows,oe=({setClipboardText:t,setIsModal:n})=>{const c=j.useCallback(async s=>{s==null||s.currentTarget.blur();const p=await _e();try{await we.validate({cluster:p}),t(p),n("addCluster")}catch{B.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{n("addSubject")}}})}},[t,n]);return j.useEffect(()=>{const s=p=>{p.key==="+"&&c()};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[c]),e.jsx(G,{onClick:c,$s:"m",$round:!0,$bs:et,children:e.jsx(Te,{size:18})})};oe.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:tt,m:W}=F.indents,st=()=>{const{clusterTrash:t}=I(),[n,c]=j.useState(!1),[s,p]=j.useState(""),[u,i]=j.useState(""),a=t.length>0?" 1fr":"",$="1fr"+a;return e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{$m:`${W} ${W}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:$,$cg:tt,children:[a&&e.jsx(Ze,{}),e.jsx(oe,{setClipboardText:p,setIsModal:c})]}),n==="addCluster"&&e.jsx(P,{onClick:()=>c(!1),children:e.jsx(De,{cluster:s,group:u,setGroup:i,setIsModal:c})}),n==="addSubject"&&e.jsx(P,{onClick:()=>c(!1),children:e.jsx(re,{cluster:s,group:u,setGroup:i,setIsModal:c})})]})},{s:Y,m:rt}=F.indents,lt=()=>e.jsxs(Fe,{$p:`0 ${rt} ${Y} ${Y}`,children:[e.jsx(Ue,{}),e.jsx(st,{})]});export{lt as default};
