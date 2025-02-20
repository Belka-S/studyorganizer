import{p as I,q as x,t as w,P as C,j as e,u as L,r as j,v as T,B as A,w as ae,x as z,h as G,y as ie,l as ue,i as N,z as de,A as pe,C as he,D as be,M as D,H as M,J as me,K as fe,N as xe,O as ge,Q as je,R as $e,U as Ce,W as ve,X as ye,Y as ke,Z as Se,_ as Te,$ as we,a0 as Fe,a1 as Ge,k as Le}from"./index-36135f11.js";import{v as Be,u as O}from"./index.esm-bea51c09.js";import{T as Ee,r as Ie}from"./index-9a9376d3.js";import{o as W,F as Y,L as E,I as q,C as Ae,g as _e,a as ze,A as De}from"./ClusterAddForm-a177310f.js";const{colors:i,shadows:Me,indents:qe}=w,K=I`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 15fr 2fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${i.borderLight};
`,Re=x.li`
  ${K}
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
  ${K}

  background-color: ${({$active:t})=>t&&i.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${i.border};
    box-shadow: ${Me.backdrop};
    background-color: ${i.white};
    border-radius: ${qe.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,X=I`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${i.hovered};
  }
`,Pe=x.button`
  ${X}

  border: none;
  background-color: transparent;
  color: ${i.black};
  font-weight: 500;
`,Ne=x.a`
  ${X}

  color: ${i.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${i.black};
  }
`,J=I`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Be}
  }
`,Oe=x.label`
  ${J}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?i.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?i.yellow:i.border};
  }
  &:hover svg {
    stroke: ${i.placeholder};
  }
`,We=x.label`
  ${J}
  opacity: ${({$hovered:t})=>t?1:0};

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${i.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?i.border:"transparent"};
  }
  &:hover svg {
    border-color: ${i.placeholder};
    color: ${({$hovered:t})=>t?i.placeholder:"transparent"};
  }
`,_=I`
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
    color: ${i.border};
  }
  &:hover,
  &:hover svg {
    color: ${i.placeholder};
  }
`,Ye=x.span`
  ${_}

  justify-self: right;
  font-size: 14px;
`,Ke=x.button`
  ${_}

  font-size: 14px;
`,Xe=x.button`
  ${_}

  opacity: ${({$hovered:t})=>t?1:0};
`,Je=x.button`
  ${_}

  opacity: 0;
`,Q=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});Q.propTypes={group:C.string};const U=({el:t,setIsModal:u})=>{var f,g;const{_id:n,cluster:r,title:a,group:p}=t,c=L(),[b,v]=j.useState({value:p,label:p}),{clusterGroups:B}=T(),{register:S,watch:y,handleSubmit:m,formState:{errors:s}}=O({mode:"onBlur",resolver:W(ae),defaultValues:{cluster:r,title:a}}),l=async o=>{const $=_e(o.cluster);c(z({_id:n,...o,group:b.value,gdriveId:$})),u(!1)},d=B.map(o=>({value:o.clusterGroup,label:o.clusterGroup})).sort((o,$)=>o.value.localeCompare($.value)),h=o=>{y("title")?(c(ie({clusterGroup:o})),v({value:o,label:o})):G.error("Title is required")};return e.jsxs(Y,{onSubmit:m(l),children:[e.jsxs(E,{children:["Cluster ",e.jsxs("span",{children:[" ",(f=s.cluster)==null?void 0:f.message]}),e.jsx(q,{...S("cluster"),onFocus:o=>o.target.select()})]}),e.jsxs(E,{children:["Title ",e.jsxs("span",{children:[" ",(g=s.title)==null?void 0:g.message]}),e.jsx(q,{...S("title"),onFocus:o=>o.target.select()})]}),e.jsxs(E,{children:["Group",e.jsx(Ae,{value:b,options:d,onChange:o=>v(o||""),onCreateOption:h,isClearable:b})]}),e.jsx(A,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};U.propTypes={el:C.object,setIsModal:C.func.isRequired};const V=({el:t,sortByDate:u,setSortByDate:n})=>{const r=L(),a=ue(),{user:p}=N(),{activeCluster:c,clusterTrash:b,clusterSelect:v}=T(),{allElements:B}=de(),[S,y]=j.useState(!1),{_id:m,cluster:s,title:l,favorite:d,checked:h,createdAt:f}=t,g=k=>{const F=k.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return F.length<=23?F:F.substring(0,13).concat(`...${F.substring(F.length-6)}`)},o=B.filter(k=>k.cluster===m).length,$=()=>{r(M(t))},te=()=>{r(z({_id:m,favorite:!d}))},se=()=>{const{subjectId:k}=p;r(me({_id:k,clusterSelect:v})),a(`/element/${k}`,{replace:!0})},re=()=>{n(!u),u?G.success("Ascending by Title"):G.success("Ascending by Date")},oe=()=>{r(M(t)),y("edit")},ne=()=>r(fe(t)),ce=b.find(k=>k._id===m),le=()=>{r(z({_id:m,checked:!h}))},R=m===(c==null?void 0:c._id);return e.jsxs(He,{id:R?"active-cluster":null,$active:R,onClick:$,children:[e.jsxs(Oe,{$hovered:d,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:d,onChange:te}),e.jsx(Ee,{size:"20px"})]}),e.jsx(Pe,{onClick:se,children:l}),e.jsx(Ne,{href:s,target:"_blank",rel:"noopener noreferrer",children:g(s)}),e.jsx(Ye,{children:o>0&&o}),e.jsx(Je,{onClick:oe,children:e.jsx(pe,{size:"15px"})}),e.jsx(Xe,{$hovered:ce,onClick:ne,children:e.jsx(he,{size:"16px"})}),e.jsxs(We,{$hovered:h,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:h,onChange:le}),e.jsx(be,{size:"15px"})]}),e.jsx(Ke,{onClick:re,children:ze(f)}),S&&e.jsx(D,{onClick:()=>y(!1),children:e.jsx(U,{el:t,setIsModal:y})})]})};V.propTypes={el:C.object,sortByDate:C.bool,setSortByDate:C.func};const{indents:Qe}=w,Ue=x.ol`
  width: 100%;

  padding-bottom: ${Qe.xl};
  counter-reset: section 0;
`,Ve=()=>{const t=L(),{user:u}=N(),{allClusters:n,clusterGroups:r}=T(),{clusterTrash:a,clusterFilter:p,clusterSelect:c}=T(),[b,v]=j.useState(!1);j.useEffect(()=>{const{subject:s,subjectId:l}=u;!s||!l||(t(xe({subject:s})).unwrap().then(d=>{const{clusters:h}=d.result,f=Array.from(new Set(h.map(g=>g.group)));t(ge({clusterGroup:f}))}),t(je()).unwrap().then(d=>{const h=d.result.subjects.find(({_id:f})=>f===l);t($e(h==null?void 0:h.clusterSelect))}))},[t,u]),j.useEffect(()=>{const s=document.getElementById("active-cluster");s&&Ce(s)},[]);const S=(()=>{const s=a.map(d=>d._id),l=n.filter(d=>s.includes(d._id));return c.includes("trash")?l:n})().filter(({group:s,title:l,favorite:d,checked:h})=>{const f=s.toLowerCase().includes(p)||l.toLowerCase().includes(p),g=()=>c.some($=>["favorite","unfavorite"].includes($))?c.includes("favorite")?f&&d===!0:f&&d===!1:f;return(()=>c.some($=>["checked","unchecked"].includes($))?c.includes("checked")?g()&&h===!0:g()&&h===!1:g())()}).sort(b?(s,l)=>l.createdAt.localeCompare(s.createdAt):(s,l)=>s.title.localeCompare(l.title)),y=r.map(s=>s.clusterGroup).sort((s,l)=>s.localeCompare(l));let m=c.filter(s=>y.includes(s));if(m=m.length!==0?m:y,!(n.length===0||r.length===0))return e.jsx(Ue,{children:m.map(s=>e.jsxs(j.Fragment,{children:[e.jsx(Q,{group:s}),S.map(l=>l.group===s&&e.jsx(V,{el:l,sortByDate:b,setSortByDate:v},l._id))]},s))})},Z=({setIsModal:t})=>{var c;const u=L(),{register:n,handleSubmit:r,formState:{errors:a}}=O({mode:"onBlur",resolver:W(ye)}),p=b=>{u(ve({clusterSubject:b.subject})),t(!1)};return e.jsxs(Y,{onSubmit:r(p),children:[e.jsxs(E,{children:["Subject ",e.jsxs("span",{children:[" ",(c=a.subject)==null?void 0:c.message]}),e.jsx(q,{autoComplete:"off",autoFocus:!0,...n("subject")})]}),e.jsx(A,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Z.propTypes={setIsModal:C.func.isRequired};const{button:Ze}=w.shadows,et=()=>{const t=L(),{activeCluster:u,clusterTrash:n}=T(),r=()=>{G.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(Se(n.map(a=>a._id).join("&"))).then(()=>{const a=n.map(c=>c._id),{_id:p}=u;a.includes(p)&&t(M(null))}).then(()=>t(Te()))}}})};return e.jsx(A,{onClick:r,$s:"m",$round:!0,$bs:Ze,children:e.jsx(ke,{size:16})})},{button:tt}=w.shadows,ee=({setClipboardText:t,setIsModal:u})=>{j.useEffect(()=>{const r=a=>{a.key==="+"&&n()};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const n=async r=>{r==null||r.currentTarget.blur();const a=await Ie();try{await Fe.validate({cluster:a}),t(a),u("addCluster")}catch{G.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{u("addSubject")}}})}};return e.jsx(A,{onClick:n,$s:"m",$round:!0,$bs:tt,children:e.jsx(we,{size:18})})};ee.propTypes={setClipboardText:C.func.isRequired,setIsModal:C.func.isRequired};const{s:st,m:H}=w.indents,rt=()=>{const{clusterTrash:t}=T(),[u,n]=j.useState(!1),[r,a]=j.useState(""),[p,c]=j.useState(""),b=t.length>0?" 1fr":"",v="1fr"+b;return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{$m:`${H} ${H}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:v,$cg:st,children:[b&&e.jsx(et,{}),e.jsx(ee,{setClipboardText:a,setIsModal:n})]}),u==="addCluster"&&e.jsx(D,{onClick:()=>n(!1),children:e.jsx(De,{cluster:r,group:p,setGroup:c,setIsModal:n})}),u==="addSubject"&&e.jsx(D,{onClick:()=>n(!1),children:e.jsx(Z,{cluster:r,group:p,setGroup:c,setIsModal:n})})]})},{s:P,m:ot}=w.indents,it=()=>e.jsxs(Le,{$p:`0 ${ot} ${P} ${P}`,children:[e.jsx(Ve,{}),e.jsx(rt,{})]});export{it as default};
