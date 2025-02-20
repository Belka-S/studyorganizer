import{p as _,q as x,t as w,P as v,j as e,u as E,r as j,v as T,B as z,w as le,x as M,h as B,y as ie,l as ue,i as O,z as de,A as pe,C as he,D as be,M as q,H as me,J as I,K as fe,N as xe,O as ge,Q as je,R as Ce,U as $e,W as ve,X as ye,Y as ke,Z as Se,_ as Te,$ as we,a0 as Fe,a1 as Ge,k as Le}from"./index-17235dba.js";import{v as Be,u as W}from"./index.esm-f6dcaef3.js";import{T as Ie,r as Ee}from"./index-af974b07.js";import{o as Y,F as K,L as A,I as R,C as Ae,g as _e,a as ze,A as De}from"./ClusterAddForm-1a2f1725.js";const{colors:u,shadows:Me,indents:qe}=w,X=_`
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
`,Re=x.li`
  ${X}
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
`,He=x.li`
  ${X}

  background-color: ${({$active:t})=>t&&u.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${u.border};
    box-shadow: ${Me.backdrop};
    background-color: ${u.white};
    border-radius: ${qe.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,J=_`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${u.hovered};
  }
`,Pe=x.button`
  ${J}

  border: none;
  background-color: transparent;
  color: ${u.black};
  font-weight: 500;
`,Ne=x.a`
  ${J}

  color: ${u.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${u.black};
  }
`,Q=_`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Be}
  }
`,Oe=x.label`
  ${Q}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?u.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?u.yellow:u.border};
  }
  &:hover svg {
    stroke: ${u.placeholder};
  }
`,We=x.label`
  ${Q}
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
    color: ${u.border};
  }
  &:hover,
  &:hover svg {
    color: ${u.placeholder};
  }
`,Ye=x.span`
  ${D}

  justify-self: right;
  font-size: 14px;
`,Ke=x.button`
  ${D}

  font-size: 14px;
`,Xe=x.button`
  ${D}

  opacity: ${({$hovered:t})=>t?1:0};
`,Je=x.button`
  ${D}

  opacity: 0;
`,U=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});U.propTypes={group:v.string};const V=({el:t,setIsModal:c})=>{var f,p;const{_id:n,cluster:r,title:i,group:h}=t,d=E(),[a,y]=j.useState({value:h,label:h}),{clusterGroups:F}=T(),{register:G,watch:k,handleSubmit:m,formState:{errors:g}}=W({mode:"onBlur",resolver:Y(le),defaultValues:{cluster:r,title:i}}),o=async s=>{const C=_e(s.cluster);d(M({_id:n,...s,group:a.value,gdriveId:C})),c(!1)},l=F.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,C)=>s.value.localeCompare(C.value)),b=s=>{k("title")?(d(ie({clusterGroup:s})),y({value:s,label:s})):B.error("Title is required")};return e.jsxs(K,{onSubmit:m(o),children:[e.jsxs(A,{children:["Cluster ",e.jsxs("span",{children:[" ",(f=g.cluster)==null?void 0:f.message]}),e.jsx(R,{...G("cluster"),onFocus:s=>s.target.select()})]}),e.jsxs(A,{children:["Title ",e.jsxs("span",{children:[" ",(p=g.title)==null?void 0:p.message]}),e.jsx(R,{...G("title"),onFocus:s=>s.target.select()})]}),e.jsxs(A,{children:["Group",e.jsx(Ae,{value:a,options:l,onChange:s=>y(s||""),onCreateOption:b,isClearable:a})]}),e.jsx(z,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};V.propTypes={el:v.object,setIsModal:v.func.isRequired};const Z=({el:t,sortByDate:c,setSortByDate:n})=>{const r=E(),i=ue(),{user:h}=O(),{activeCluster:d,clusterTrash:a,clusterSelect:y}=T(),{allElements:F}=de(),[G,k]=j.useState(!1),{_id:m,cluster:g,title:o,favorite:l,checked:b,createdAt:f}=t,p=S=>{const L=S.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=23?L:L.substring(0,13).concat(`...${L.substring(L.length-6)}`)},s=F.filter(S=>S.cluster===m).length,C=()=>{const{subjectId:S}=h;r(me({_id:S,activeCluster:t._id})),r(I(t))},$=()=>{r(M({_id:m,favorite:!l}))},se=()=>{i(`/element/${m}`,{replace:!0})},re=()=>{n(!c),c?B.success("Ascending by Title"):B.success("Ascending by Date")},oe=()=>{r(I(t)),k("edit")},ne=()=>r(fe(t)),ce=a.find(S=>S._id===m),ae=()=>{r(M({_id:m,checked:!b}))},H=m===(d==null?void 0:d._id);return e.jsxs(He,{id:H?"active-cluster":null,$active:H,onClick:C,children:[e.jsxs(Oe,{$hovered:l,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:l,onChange:$}),e.jsx(Ie,{size:"20px"})]}),e.jsx(Pe,{onClick:se,children:o}),e.jsx(Ne,{href:g,target:"_blank",rel:"noopener noreferrer",children:p(g)}),e.jsx(Ye,{children:s>0&&s}),e.jsx(Je,{onClick:oe,children:e.jsx(pe,{size:"15px"})}),e.jsx(Xe,{$hovered:ce,onClick:ne,children:e.jsx(he,{size:"16px"})}),e.jsxs(We,{$hovered:b,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:b,onChange:ae}),e.jsx(be,{size:"15px"})]}),e.jsx(Ke,{onClick:re,children:ze(f)}),G&&e.jsx(q,{onClick:()=>k(!1),children:e.jsx(V,{el:t,setIsModal:k})})]})};Z.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Qe}=w,Ue=x.ol`
  width: 100%;

  padding-bottom: ${Qe.xl};
  counter-reset: section 0;
`,Ve=()=>{const t=E(),{user:c}=O(),{allClusters:n,clusterGroups:r,activeCluster:i}=T(),{clusterTrash:h,clusterFilter:d,clusterSelect:a}=T(),[y,F]=j.useState(!1);if(j.useEffect(()=>{!c.subject||!c.subjectId||(t(I(null)),t(xe({subject:c.subject})).unwrap().then(o=>{const{clusters:l}=o.result,b=Array.from(new Set(l.map(f=>f.group)));t(ge({clusterGroup:b})),t(je()).unwrap().then(f=>{var C;const p=(C=f.result)==null?void 0:C.subjects.find(({_id:$})=>$===c.subjectId);t(Ce(p==null?void 0:p.clusterSelect));const s=l.find(({_id:$})=>$===(p==null?void 0:p.activeCluster));s&&t(I(s))})}))},[t,c]),j.useEffect(()=>{const o=document.getElementById("active-cluster");o&&$e(o)},[i]),!a)return;const k=(()=>{const o=h.map(b=>b._id),l=n.filter(b=>o.includes(b._id));return a.includes("trash")?l:n})().filter(({group:o,title:l,favorite:b,checked:f})=>{const p=o.toLowerCase().includes(d)||l.toLowerCase().includes(d),s=()=>a.some($=>["favorite","unfavorite"].includes($))?a.includes("favorite")?p&&b===!0:p&&b===!1:p;return(()=>a!=null&&a.some($=>["checked","unchecked"].includes($))?a.includes("checked")?s()&&f===!0:s()&&f===!1:s())()}).sort(y?(o,l)=>l.createdAt.localeCompare(o.createdAt):(o,l)=>o.title.localeCompare(l.title)),m=new Set(r.map(o=>o.clusterGroup));let g=[...m.intersection(new Set(a))];if(g=g[0]?g:[...m],!(n.length===0||r.length===0))return e.jsx(Ue,{children:g.map(o=>e.jsxs(j.Fragment,{children:[e.jsx(U,{group:o}),k.map(l=>l.group===o&&e.jsx(Z,{el:l,sortByDate:y,setSortByDate:F},l._id))]},o))})},ee=({setIsModal:t})=>{var d;const c=E(),{register:n,handleSubmit:r,formState:{errors:i}}=W({mode:"onBlur",resolver:Y(ye)}),h=a=>{c(ve({clusterSubject:a.subject})),t(!1)};return e.jsxs(K,{onSubmit:r(h),children:[e.jsxs(A,{children:["Subject ",e.jsxs("span",{children:[" ",(d=i.subject)==null?void 0:d.message]}),e.jsx(R,{autoComplete:"off",autoFocus:!0,...n("subject")})]}),e.jsx(z,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};ee.propTypes={setIsModal:v.func.isRequired};const{button:Ze}=w.shadows,et=()=>{const t=E(),{activeCluster:c,clusterTrash:n}=T(),r=()=>{B.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(Se(n.map(i=>i._id).join("&"))).then(()=>{const i=n.map(d=>d._id),{_id:h}=c;i.includes(h)&&t(I(null))}).then(()=>t(Te()))}}})};return e.jsx(z,{onClick:r,$s:"m",$round:!0,$bs:Ze,children:e.jsx(ke,{size:16})})},{button:tt}=w.shadows,te=({setClipboardText:t,setIsModal:c})=>{j.useEffect(()=>{const r=i=>{i.key==="+"&&n()};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const n=async r=>{r==null||r.currentTarget.blur();const i=await Ee();try{await Fe.validate({cluster:i}),t(i),c("addCluster")}catch{B.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{c("addSubject")}}})}};return e.jsx(z,{onClick:n,$s:"m",$round:!0,$bs:tt,children:e.jsx(we,{size:18})})};te.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:st,m:P}=w.indents,rt=()=>{const{clusterTrash:t}=T(),[c,n]=j.useState(!1),[r,i]=j.useState(""),[h,d]=j.useState(""),a=t.length>0?" 1fr":"",y="1fr"+a;return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{$m:`${P} ${P}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:y,$cg:st,children:[a&&e.jsx(et,{}),e.jsx(te,{setClipboardText:i,setIsModal:n})]}),c==="addCluster"&&e.jsx(q,{onClick:()=>n(!1),children:e.jsx(De,{cluster:r,group:h,setGroup:d,setIsModal:n})}),c==="addSubject"&&e.jsx(q,{onClick:()=>n(!1),children:e.jsx(ee,{cluster:r,group:h,setGroup:d,setIsModal:n})})]})},{s:N,m:ot}=w.indents,it=()=>e.jsxs(Le,{$p:`0 ${ot} ${N} ${N}`,children:[e.jsx(Ve,{}),e.jsx(rt,{})]});export{it as default};
