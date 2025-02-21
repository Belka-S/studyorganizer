import{p as _,q as x,t as F,P as k,j as e,u as I,r as f,v as T,B as z,w as le,x as M,h as B,y as ie,l as ue,i as O,z as de,A as pe,C as he,D as be,M as R,H as me,J as E,K as fe,N as xe,O as W,Q as ge,R as je,U as Ce,W as $e,X as ve,Y as ke,Z as ye,_ as Se,$ as we,a0 as Te,a1 as Fe,k as Ge}from"./index-3a288c89.js";import{v as Le,u as Y}from"./index.esm-5cf77a00.js";import{T as Be,r as Ee}from"./index-51ee6fe1.js";import{o as K,F as X,L as A,I as q,C as Ie,g as Ae,a as _e,A as ze}from"./ClusterAddForm-22b66209.js";const{colors:d,shadows:De,indents:Me}=F,J=_`
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
`,Re=x.li`
  ${J}
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
`,qe=x.li`
  ${J}

  background-color: ${({$active:t})=>t&&d.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${d.border};
    box-shadow: ${De.backdrop};
    background-color: ${d.white};
    border-radius: ${Me.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Q=_`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${d.hovered};
  }
`,He=x.button`
  ${Q}

  border: none;
  background-color: transparent;
  color: ${d.black};
  font-weight: 500;
`,Pe=x.a`
  ${Q}

  color: ${d.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${d.black};
  }
`,U=_`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Le}
  }
`,Ne=x.label`
  ${U}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?d.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?d.yellow:d.border};
  }
  &:hover svg {
    stroke: ${d.placeholder};
  }
`,Oe=x.label`
  ${U}
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
`,D=_`
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
`,We=x.span`
  ${D}

  justify-self: right;
  font-size: 14px;
`,Ye=x.button`
  ${D}

  font-size: 14px;
`,Ke=x.button`
  ${D}

  opacity: ${({$hovered:t})=>t?1:0};
`,Xe=x.button`
  ${D}

  opacity: 0;
`,V=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});V.propTypes={group:k.string};const Z=({el:t,setIsModal:c})=>{var m,h;const{_id:a,cluster:r,title:p,group:u}=t,i=I(),[n,j]=f.useState({value:u,label:u}),{clusterGroups:G}=T(),{register:y,watch:g,handleSubmit:S,formState:{errors:C}}=Y({mode:"onBlur",resolver:K(le),defaultValues:{cluster:r,title:p}}),o=async s=>{const $=Ae(s.cluster);i(M({_id:a,...s,group:n.value,gdriveId:$})),c(!1)},l=G.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,$)=>s.value.localeCompare($.value)),b=s=>{g("title")?(i(ie({clusterGroup:s})),j({value:s,label:s})):B.error("Title is required")};return e.jsxs(X,{onSubmit:S(o),children:[e.jsxs(A,{children:["Cluster ",e.jsxs("span",{children:[" ",(m=C.cluster)==null?void 0:m.message]}),e.jsx(q,{...y("cluster"),onFocus:s=>s.target.select()})]}),e.jsxs(A,{children:["Title ",e.jsxs("span",{children:[" ",(h=C.title)==null?void 0:h.message]}),e.jsx(q,{...y("title"),onFocus:s=>s.target.select()})]}),e.jsxs(A,{children:["Group",e.jsx(Ie,{value:n,options:l,onChange:s=>j(s||""),onCreateOption:b,isClearable:n})]}),e.jsx(z,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Z.propTypes={el:k.object,setIsModal:k.func.isRequired};const ee=({el:t,sortByDate:c,setSortByDate:a})=>{const r=I(),p=ue(),{user:u}=O(),{activeCluster:i,clusterTrash:n}=T(),{allElements:j}=de(),[G,y]=f.useState(!1),{_id:g,cluster:S,title:C,favorite:o,checked:l,createdAt:b}=t,m=w=>{const L=w.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=23?L:L.substring(0,13).concat(`...${L.substring(L.length-6)}`)},h=j.filter(w=>w.cluster===g).length,s=()=>{const{subjectId:w}=u;r(me({_id:w,activeCluster:t._id})),r(E(t))},$=()=>{r(M({_id:g,favorite:!o}))},v=()=>{p(`/element/${g}`,{replace:!0})},re=()=>{a(!c),c?B.success("Ascending by Title"):B.success("Ascending by Date")},oe=()=>{r(E(t)),y("edit")},ne=()=>r(fe(t)),ce=n.find(w=>w._id===g),ae=()=>{r(M({_id:g,checked:!l}))},H=g===(i==null?void 0:i._id);return e.jsxs(qe,{id:H?"active-cluster":null,$active:H,onClick:s,children:[e.jsxs(Ne,{$hovered:o,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:$}),e.jsx(Be,{size:"20px"})]}),e.jsx(He,{onClick:v,children:C}),e.jsx(Pe,{href:S,target:"_blank",rel:"noopener noreferrer",children:m(S)}),e.jsx(We,{children:h>0&&h}),e.jsx(Xe,{onClick:oe,children:e.jsx(pe,{size:"15px"})}),e.jsx(Ke,{$hovered:ce,onClick:ne,children:e.jsx(he,{size:"16px"})}),e.jsxs(Oe,{$hovered:l,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:ae}),e.jsx(be,{size:"15px"})]}),e.jsx(Ye,{onClick:re,children:_e(b)}),G&&e.jsx(R,{onClick:()=>y(!1),children:e.jsx(Z,{el:t,setIsModal:y})})]})};ee.propTypes={el:k.object,sortByDate:k.bool,setSortByDate:k.func};const{indents:Je}=F,Qe=x.ol`
  width: 100%;

  padding-bottom: ${Je.xl};
  counter-reset: section 0;
`,Ue=()=>{const t=I(),{user:c}=O(),{allClusters:a,clusterGroups:r,activeCluster:p}=T(),{clusterTrash:u,clusterFilter:i,clusterSelect:n}=T(),[j,G]=f.useState(!1);if(f.useEffect(()=>{!c.subject||!c.subjectId||(t(E(null)),t(xe({subject:c.subject})).unwrap().then(o=>{const{clusters:l}=o.result,b=[...new Set(l.map(m=>m.group))];t(W({clusterGroup:b})),t(ge()).unwrap().then(m=>{var $;const h=($=m.result)==null?void 0:$.subjects.find(({_id:v})=>v===c.subjectId);t(je(h==null?void 0:h.clusterSelect));const s=l.find(({_id:v})=>v===(h==null?void 0:h.activeCluster));s&&t(E(s))})}))},[t,c]),f.useEffect(()=>{const o=document.getElementById("active-cluster");o&&Ce(o)},[p]),!n)return;const g=(()=>{const o=u.map(b=>b._id),l=a.filter(b=>o.includes(b._id));return n.includes("trash")?l:a})().filter(({group:o,title:l,favorite:b,checked:m})=>{const h=o.toLowerCase().includes(i)||l.toLowerCase().includes(i),s=()=>n.some(v=>["favorite","unfavorite"].includes(v))?n.includes("favorite")?h&&b===!0:h&&b===!1:h;return(()=>n!=null&&n.some(v=>["checked","unchecked"].includes(v))?n.includes("checked")?s()&&m===!0:s()&&m===!1:s())()}).sort(j?(o,l)=>l.createdAt.localeCompare(o.createdAt):(o,l)=>o.title.localeCompare(l.title)),S=new Set(r.map(o=>o.clusterGroup));let C=[...S.intersection(new Set(n))];if(C=C[0]?C:[...S],!(a.length===0||r.length===0))return e.jsx(Qe,{children:C.map(o=>e.jsxs(f.Fragment,{children:[e.jsx(V,{group:o}),g.map(l=>l.group===o&&e.jsx(ee,{el:l,sortByDate:j,setSortByDate:G},l._id))]},o))})},te=({setIsModal:t})=>{var i;const c=I(),{register:a,handleSubmit:r,formState:{errors:p}}=Y({mode:"onBlur",resolver:K(ve)}),u=n=>{c($e({clusterSubject:n.subject})),t(!1)};return e.jsxs(X,{onSubmit:r(u),children:[e.jsxs(A,{children:["Subject ",e.jsxs("span",{children:[" ",(i=p.subject)==null?void 0:i.message]}),e.jsx(q,{autoComplete:"off",autoFocus:!0,...a("subject")})]}),e.jsx(z,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};te.propTypes={setIsModal:k.func.isRequired};const{button:Ve}=F.shadows,Ze=()=>{const t=I(),{allClusters:c,activeCluster:a,clusterTrash:r}=T(),p=()=>{B.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(ye(r.map(u=>u._id).join("&"))).then(()=>{const u=r.map(n=>n._id),{_id:i}=a;u.includes(i)&&t(E(null))}).then(()=>{t(Se());const u=[...new Set(c.map(i=>i.group))];t(W({clusterGroup:u}))})}}})};return e.jsx(z,{onClick:p,$s:"m",$round:!0,$bs:Ve,children:e.jsx(ke,{size:16})})},{button:et}=F.shadows,se=({setClipboardText:t,setIsModal:c})=>{const a=f.useCallback(async r=>{r==null||r.currentTarget.blur();const p=await Ee();try{await we.validate({cluster:p}),t(p),c("addCluster")}catch{B.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{c("addSubject")}}})}},[t,c]);return f.useEffect(()=>{const r=p=>{p.key==="+"&&a()};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[a]),e.jsx(z,{onClick:a,$s:"m",$round:!0,$bs:et,children:e.jsx(Te,{size:18})})};se.propTypes={setClipboardText:k.func.isRequired,setIsModal:k.func.isRequired};const{s:tt,m:P}=F.indents,st=()=>{const{clusterTrash:t}=T(),[c,a]=f.useState(!1),[r,p]=f.useState(""),[u,i]=f.useState(""),n=t.length>0?" 1fr":"",j="1fr"+n;return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{$m:`${P} ${P}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:j,$cg:tt,children:[n&&e.jsx(Ze,{}),e.jsx(se,{setClipboardText:p,setIsModal:a})]}),c==="addCluster"&&e.jsx(R,{onClick:()=>a(!1),children:e.jsx(ze,{cluster:r,group:u,setGroup:i,setIsModal:a})}),c==="addSubject"&&e.jsx(R,{onClick:()=>a(!1),children:e.jsx(te,{cluster:r,group:u,setGroup:i,setIsModal:a})})]})},{s:N,m:rt}=F.indents,lt=()=>e.jsxs(Ge,{$p:`0 ${rt} ${N} ${N}`,children:[e.jsx(Ue,{}),e.jsx(st,{})]});export{lt as default};
