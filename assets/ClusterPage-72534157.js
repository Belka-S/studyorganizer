import{p as D,q as C,t as F,P as v,j as e,u as _,i as O,v as I,r as j,B as G,w as le,x as H,h as B,y as ie,z as W,l as ue,A as de,C as he,D as pe,H as be,M as P,J as fe,K as E,N as me,O as xe,Q as ge,R as je,U as Ce,W as $e,X as ve,Y as ke,Z as ye,_ as Se,$ as Te,a0 as we,a1 as Ie,k as Fe}from"./index-9f9544a8.js";import{v as Le,u as X}from"./index.esm-a7ff186e.js";import{T as Be,r as Ee}from"./index-2f58be7b.js";import{o as J,F as Q,L as z,I as N,C as _e,g as Ae,a as ze,A as De}from"./ClusterAddForm-a138a840.js";const{colors:u,shadows:Ge,indents:Me}=F,U=D`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 15fr 2fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${u.borderLight};
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

  background-color: ${({$active:t})=>t&&u.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${u.border};
    box-shadow: ${Ge.backdrop};
    background-color: ${u.white};
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
    color: ${u.hovered};
  }
`,He=C.button`
  ${V}

  border: none;
  background-color: transparent;
  color: ${u.black};
  font-weight: 500;
`,Pe=C.a`
  ${V}

  color: ${u.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${u.black};
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
    color: ${({$hovered:t})=>t?u.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?u.yellow:u.border};
  }
  &:hover svg {
    stroke: ${u.placeholder};
  }
`,Oe=C.label`
  ${Z}
  opacity: ${({$hovered:t})=>t?1:0};

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${u.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?u.border:"transparent"};
  }
  &:hover svg {
    border-color: ${u.placeholder};
    color: ${({$hovered:t})=>t?u.placeholder:"transparent"};
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
    color: ${u.border};
  }
  &:hover,
  &:hover svg {
    color: ${u.placeholder};
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
`,ee=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});ee.propTypes={group:v.string};const te=({el:t,setIsModal:n})=>{var g,f;const{_id:l,cluster:s,title:d,group:h}=t,a=_(),{user:c}=O(),{clusterGroups:m}=I(),[y,S]=j.useState({value:h,label:h}),{register:x,watch:T,handleSubmit:k,formState:{errors:r}}=X({mode:"onBlur",resolver:J(le),defaultValues:{cluster:s,title:d}}),i=o=>{const $=Ae(o.cluster),A=y.value,R=m.find(q=>q.group===A)._id;a(H({_id:l,...o,group:A,groupId:R,gdriveId:$})),n(!1)},b=m.map(o=>({value:o.group,label:o.group})).sort((o,$)=>o.value.localeCompare($.value)),p=o=>{T("title")?(a(ie({group:o,subjectId:c.subjectId})).unwrap().then(a(W({subjectId:c.subjectId}))),S({value:o,label:o})):B.error("Title is required")};return e.jsxs(Q,{onSubmit:k(i),children:[e.jsxs(z,{children:["Cluster ",e.jsxs("span",{children:[" ",(g=r.cluster)==null?void 0:g.message]}),e.jsx(N,{...x("cluster"),onFocus:o=>o.target.select()})]}),e.jsxs(z,{children:["Title ",e.jsxs("span",{children:[" ",(f=r.title)==null?void 0:f.message]}),e.jsx(N,{...x("title"),onFocus:o=>o.target.select()})]}),e.jsxs(z,{children:["Group",e.jsx(_e,{value:y,options:b,onChange:o=>S(o||""),onCreateOption:p,isClearable:y,$ph:"left"})]}),e.jsx(G,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};te.propTypes={el:v.object,setIsModal:v.func.isRequired};const se=({el:t,sortByDate:n,setSortByDate:l})=>{const s=_(),d=ue(),{user:h}=O(),{activeCluster:a,clusterTrash:c}=I(),{allElements:m}=de(),[y,S]=j.useState(!1),{_id:x,cluster:T,title:k,favorite:r,checked:i,createdAt:b}=t,p=x===(a==null?void 0:a._id),g=w=>{const L=w.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=23?L:L.substring(0,13).concat(`...${L.substring(L.length-6)}`)},f=m.filter(w=>w.cluster===x).length,o=()=>{if(p)return;const{subjectId:w}=h;s(fe({_id:w,activeClusterId:t._id})),s(E(t))},$=()=>{s(H({_id:x,favorite:!r}))},A=()=>{d(`/element/${x}`,{replace:!0})},R=()=>{l(!n),n?B.success("Ascending by Title"):B.success("Ascending by Date")},q=()=>{s(E(t)),S("edit")},ne=()=>s(me(t)),ce=c.find(w=>w._id===x),ae=()=>{s(H({_id:x,checked:!i}))};return e.jsxs(qe,{id:p?"active-cluster":null,$active:p,onClick:o,children:[e.jsxs(Ne,{$hovered:r,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:r,onChange:$}),e.jsx(Be,{size:"20px"})]}),e.jsx(He,{onClick:A,children:k}),e.jsx(Pe,{href:T,target:"_blank",rel:"noopener noreferrer",children:g(T)}),e.jsx(We,{children:f>0&&f}),e.jsx(Xe,{onClick:q,children:e.jsx(he,{size:"15px"})}),e.jsx(Ke,{$hovered:ce,onClick:ne,children:e.jsx(pe,{size:"16px"})}),e.jsxs(Oe,{$hovered:i,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:i,onChange:ae}),e.jsx(be,{size:"15px"})]}),e.jsx(Ye,{onClick:R,children:ze(b)}),y&&e.jsx(P,{onClick:()=>S(!1),children:e.jsx(te,{el:t,setIsModal:S})})]})};se.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Je}=F,Qe=C.ol`
  width: 100%;

  padding-bottom: ${Je.xl};
  counter-reset: section 0;
`,Ue=()=>{const t=_(),{user:n}=O(),{allClusters:l,clusterGroups:s,activeCluster:d}=I(),{clusterTrash:h,clusterFilter:a,clusterSelect:c}=I(),[m,y]=j.useState(!1);if(j.useEffect(()=>{!n.subject||!n.subjectId||(t(E(null)),t(xe({subject:n.subject})).unwrap().then(r=>{t(W({subjectId:n.subjectId}));const{clusters:i}=r.result;t(ge()).unwrap().then(b=>{var f;const p=(f=b.result)==null?void 0:f.subjects.find(({_id:o})=>o===n.subjectId);t(je(p==null?void 0:p.clusterSelect));const g=i.find(({_id:o})=>o===(p==null?void 0:p.activeClusterId));g&&t(E(g))})}))},[t,n.subject,n.subjectId]),j.useEffect(()=>{const r=document.getElementById("active-cluster");r&&Ce(r)},[d]),!c)return;const x=(()=>{const r=h.map(b=>b._id),i=l.filter(b=>r.includes(b._id));return c.includes("trash")?i:l})().filter(({group:r,title:i,favorite:b,checked:p})=>{const g=r.toLowerCase().includes(a)||i.toLowerCase().includes(a),f=()=>c.some($=>["favorite","unfavorite"].includes($))?c.includes("favorite")?g&&b===!0:g&&b===!1:g;return(()=>c!=null&&c.some($=>["checked","unchecked"].includes($))?c.includes("checked")?f()&&p===!0:f()&&p===!1:f())()}).sort(m?(r,i)=>i.createdAt.localeCompare(r.createdAt):(r,i)=>r.title.localeCompare(i.title)),T=new Set(s.map(r=>r.group));let k=[...T.intersection(new Set(c))];if(k=k[0]?k:[...T],!(l.length===0||s.length===0))return e.jsx(Qe,{children:k.map(r=>e.jsxs(j.Fragment,{children:[e.jsx(ee,{group:r}),x.map(i=>i.group===r&&e.jsx(se,{el:i,sortByDate:m,setSortByDate:y},i._id))]},r))})},re=({setIsModal:t})=>{var a;const n=_(),{register:l,handleSubmit:s,formState:{errors:d}}=X({mode:"onBlur",resolver:J(ve)}),h=c=>{n($e({subject:c.subject})),t(!1)};return e.jsxs(Q,{onSubmit:s(h),children:[e.jsxs(z,{children:["Subject ",e.jsxs("span",{children:[" ",(a=d.subject)==null?void 0:a.message]}),e.jsx(N,{autoComplete:"off",autoFocus:!0,...l("subject")})]}),e.jsx(G,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};re.propTypes={setIsModal:v.func.isRequired};const{button:Ve}=F.shadows,Ze=()=>{const t=_(),{allClusters:n,activeCluster:l,clusterTrash:s}=I(),d=h=>{h==null||h.currentTarget.blur(),B.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(ye(s.map(a=>a._id).join("&"))).then(()=>{const a=s.map(m=>m._id),{_id:c}=l;a.includes(c)&&t(E(null))}).then(()=>{t(Se());const a=[...new Set(n.map(c=>c.groupId))];t(W({_id:a}))})}}})};return e.jsx(G,{onClick:d,$s:"m",$round:!0,$bs:Ve,children:e.jsx(ke,{size:16})})},{button:et}=F.shadows,oe=({setClipboardText:t,setIsModal:n})=>{const l=j.useCallback(async s=>{s==null||s.currentTarget.blur();const d=await Ee();try{await Te.validate({cluster:d}),t(d),n("addCluster")}catch{B.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{n("addSubject")}}})}},[t,n]);return j.useEffect(()=>{const s=d=>{d.key==="+"&&l()};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[l]),e.jsx(G,{onClick:l,$s:"m",$round:!0,$bs:et,children:e.jsx(we,{size:18})})};oe.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:tt,m:Y}=F.indents,st=()=>{const{clusterTrash:t}=I(),[n,l]=j.useState(!1),[s,d]=j.useState(""),[h,a]=j.useState(""),c=t.length>0?" 1fr":"",m="1fr"+c;return e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{$m:`${Y} ${Y}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:m,$cg:tt,children:[c&&e.jsx(Ze,{}),e.jsx(oe,{setClipboardText:d,setIsModal:l})]}),n==="addCluster"&&e.jsx(P,{onClick:()=>l(!1),children:e.jsx(De,{cluster:s,group:h,setGroup:a,setIsModal:l})}),n==="addSubject"&&e.jsx(P,{onClick:()=>l(!1),children:e.jsx(re,{cluster:s,group:h,setGroup:a,setIsModal:l})})]})},{s:K,m:rt}=F.indents,lt=()=>e.jsxs(Fe,{$p:`0 ${rt} ${K} ${K}`,children:[e.jsx(Ue,{}),e.jsx(st,{})]});export{lt as default};
