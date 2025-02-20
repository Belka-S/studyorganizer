import{p as _,q as f,t as w,P as k,j as e,u as A,r as C,v as T,B as z,w as ie,x as M,h as I,y as ue,l as de,i as W,z as pe,A as he,C as be,D as me,M as q,H as P,J as B,K as fe,N as xe,O as ge,Q as je,R as Ce,U as $e,W as ve,X as ye,Y as ke,Z as Se,_ as Te,$ as we,a0 as Fe,a1 as Ge,k as Le}from"./index-397f1e66.js";import{v as Ie,u as Y}from"./index.esm-f1980f9d.js";import{T as Be,r as Ae}from"./index-453558f6.js";import{o as K,F as X,L as E,I as R,C as Ee,g as _e,a as ze,A as De}from"./ClusterAddForm-89ec854f.js";const{colors:i,shadows:Me,indents:qe}=w,J=_`
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
`,Re=f.li`
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
      counter-increment: section;
      content: 'Group ' counter(section) ' - ';
      text-transform: capitalize;
    }
  }
`,He=f.li`
  ${J}

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
`,Q=_`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${i.hovered};
  }
`,Pe=f.button`
  ${Q}

  border: none;
  background-color: transparent;
  color: ${i.black};
  font-weight: 500;
`,Ne=f.a`
  ${Q}

  color: ${i.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${i.black};
  }
`,U=_`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Ie}
  }
`,Oe=f.label`
  ${U}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?i.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?i.yellow:i.border};
  }
  &:hover svg {
    stroke: ${i.placeholder};
  }
`,We=f.label`
  ${U}
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
    color: ${i.border};
  }
  &:hover,
  &:hover svg {
    color: ${i.placeholder};
  }
`,Ye=f.span`
  ${D}

  justify-self: right;
  font-size: 14px;
`,Ke=f.button`
  ${D}

  font-size: 14px;
`,Xe=f.button`
  ${D}

  opacity: ${({$hovered:t})=>t?1:0};
`,Je=f.button`
  ${D}

  opacity: 0;
`,V=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});V.propTypes={group:k.string};const Z=({el:t,setIsModal:a})=>{var m,h;const{_id:c,cluster:o,title:l,group:p}=t,u=A(),[d,$]=C.useState({value:p,label:p}),{clusterGroups:F}=T(),{register:G,watch:S,handleSubmit:x,formState:{errors:g}}=Y({mode:"onBlur",resolver:K(ie),defaultValues:{cluster:o,title:l}}),r=async s=>{const v=_e(s.cluster);u(M({_id:c,...s,group:d.value,gdriveId:v})),a(!1)},n=F.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,v)=>s.value.localeCompare(v.value)),b=s=>{S("title")?(u(ue({clusterGroup:s})),$({value:s,label:s})):I.error("Title is required")};return e.jsxs(X,{onSubmit:x(r),children:[e.jsxs(E,{children:["Cluster ",e.jsxs("span",{children:[" ",(m=g.cluster)==null?void 0:m.message]}),e.jsx(R,{...G("cluster"),onFocus:s=>s.target.select()})]}),e.jsxs(E,{children:["Title ",e.jsxs("span",{children:[" ",(h=g.title)==null?void 0:h.message]}),e.jsx(R,{...G("title"),onFocus:s=>s.target.select()})]}),e.jsxs(E,{children:["Group",e.jsx(Ee,{value:d,options:n,onChange:s=>$(s||""),onCreateOption:b,isClearable:d})]}),e.jsx(z,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Z.propTypes={el:k.object,setIsModal:k.func.isRequired};const ee=({el:t,sortByDate:a,setSortByDate:c})=>{const o=A(),l=de(),{user:p}=W(),{activeCluster:u,clusterTrash:d,clusterSelect:$}=T(),{allElements:F}=pe(),[G,S]=C.useState(!1),{_id:x,cluster:g,title:r,favorite:n,checked:b,createdAt:m}=t,h=j=>{const L=j.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=23?L:L.substring(0,13).concat(`...${L.substring(L.length-6)}`)},s=F.filter(j=>j.cluster===x).length,v=()=>{const{subjectId:j}=p;o(P({_id:j,activeCluster:t._id})),o(B(t))},y=()=>{o(M({_id:x,favorite:!n}))},re=()=>{const{subjectId:j}=p;o(P({_id:j,clusterSelect:$})),l(`/element/${j}`,{replace:!0})},oe=()=>{c(!a),a?I.success("Ascending by Title"):I.success("Ascending by Date")},ne=()=>{o(B(t)),S("edit")},ce=()=>o(fe(t)),ae=d.find(j=>j._id===x),le=()=>{o(M({_id:x,checked:!b}))},H=x===(u==null?void 0:u._id);return e.jsxs(He,{id:H?"active-cluster":null,$active:H,onClick:v,children:[e.jsxs(Oe,{$hovered:n,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:y}),e.jsx(Be,{size:"20px"})]}),e.jsx(Pe,{onClick:re,children:r}),e.jsx(Ne,{href:g,target:"_blank",rel:"noopener noreferrer",children:h(g)}),e.jsx(Ye,{children:s>0&&s}),e.jsx(Je,{onClick:ne,children:e.jsx(he,{size:"15px"})}),e.jsx(Xe,{$hovered:ae,onClick:ce,children:e.jsx(be,{size:"16px"})}),e.jsxs(We,{$hovered:b,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:b,onChange:le}),e.jsx(me,{size:"15px"})]}),e.jsx(Ke,{onClick:oe,children:ze(m)}),G&&e.jsx(q,{onClick:()=>S(!1),children:e.jsx(Z,{el:t,setIsModal:S})})]})};ee.propTypes={el:k.object,sortByDate:k.bool,setSortByDate:k.func};const{indents:Qe}=w,Ue=f.ol`
  width: 100%;

  padding-bottom: ${Qe.xl};
  counter-reset: section 0;
`,Ve=()=>{const t=A(),{user:a}=W(),{allClusters:c,clusterGroups:o,activeCluster:l}=T(),{clusterTrash:p,clusterFilter:u,clusterSelect:d}=T(),[$,F]=C.useState(!1);C.useEffect(()=>{!a.subject||!a.subjectId||(t(B(null)),t(xe({subject:a.subject})).unwrap().then(r=>{const{clusters:n}=r.result,b=Array.from(new Set(n.map(m=>m.group)));t(ge({clusterGroup:b})),t(je()).unwrap().then(m=>{var v;const h=(v=m.result)==null?void 0:v.subjects.find(({_id:y})=>y===a.subjectId);t(Ce(h==null?void 0:h.clusterSelect));const s=n.find(({_id:y})=>y===(h==null?void 0:h.activeCluster));s&&t(B(s))})}))},[t,a]),C.useEffect(()=>{const r=document.getElementById("active-cluster");r&&$e(r)},[l]);const S=(()=>{const r=p.map(b=>b._id),n=c.filter(b=>r.includes(b._id));return d.includes("trash")?n:c})().filter(({group:r,title:n,favorite:b,checked:m})=>{const h=r.toLowerCase().includes(u)||n.toLowerCase().includes(u),s=()=>d.some(y=>["favorite","unfavorite"].includes(y))?d.includes("favorite")?h&&b===!0:h&&b===!1:h;return(()=>d.some(y=>["checked","unchecked"].includes(y))?d.includes("checked")?s()&&m===!0:s()&&m===!1:s())()}).sort($?(r,n)=>n.createdAt.localeCompare(r.createdAt):(r,n)=>r.title.localeCompare(n.title)),x=Array.from(new Set(S.map(r=>r.group))).sort((r,n)=>r.localeCompare(n));let g=d.filter(r=>x.includes(r));if(g=g.length!==0?g:x,!(c.length===0||o.length===0))return e.jsx(Ue,{children:g.map(r=>e.jsxs(C.Fragment,{children:[e.jsx(V,{group:r}),S.map(n=>n.group===r&&e.jsx(ee,{el:n,sortByDate:$,setSortByDate:F},n._id))]},r))})},te=({setIsModal:t})=>{var u;const a=A(),{register:c,handleSubmit:o,formState:{errors:l}}=Y({mode:"onBlur",resolver:K(ye)}),p=d=>{a(ve({clusterSubject:d.subject})),t(!1)};return e.jsxs(X,{onSubmit:o(p),children:[e.jsxs(E,{children:["Subject ",e.jsxs("span",{children:[" ",(u=l.subject)==null?void 0:u.message]}),e.jsx(R,{autoComplete:"off",autoFocus:!0,...c("subject")})]}),e.jsx(z,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};te.propTypes={setIsModal:k.func.isRequired};const{button:Ze}=w.shadows,et=()=>{const t=A(),{activeCluster:a,clusterTrash:c}=T(),o=()=>{I.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(Se(c.map(l=>l._id).join("&"))).then(()=>{const l=c.map(u=>u._id),{_id:p}=a;l.includes(p)&&t(B(null))}).then(()=>t(Te()))}}})};return e.jsx(z,{onClick:o,$s:"m",$round:!0,$bs:Ze,children:e.jsx(ke,{size:16})})},{button:tt}=w.shadows,se=({setClipboardText:t,setIsModal:a})=>{C.useEffect(()=>{const o=l=>{l.key==="+"&&c()};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const c=async o=>{o==null||o.currentTarget.blur();const l=await Ae();try{await Fe.validate({cluster:l}),t(l),a("addCluster")}catch{I.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{a("addSubject")}}})}};return e.jsx(z,{onClick:c,$s:"m",$round:!0,$bs:tt,children:e.jsx(we,{size:18})})};se.propTypes={setClipboardText:k.func.isRequired,setIsModal:k.func.isRequired};const{s:st,m:N}=w.indents,rt=()=>{const{clusterTrash:t}=T(),[a,c]=C.useState(!1),[o,l]=C.useState(""),[p,u]=C.useState(""),d=t.length>0?" 1fr":"",$="1fr"+d;return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{$m:`${N} ${N}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:$,$cg:st,children:[d&&e.jsx(et,{}),e.jsx(se,{setClipboardText:l,setIsModal:c})]}),a==="addCluster"&&e.jsx(q,{onClick:()=>c(!1),children:e.jsx(De,{cluster:o,group:p,setGroup:u,setIsModal:c})}),a==="addSubject"&&e.jsx(q,{onClick:()=>c(!1),children:e.jsx(te,{cluster:o,group:p,setGroup:u,setIsModal:c})})]})},{s:O,m:ot}=w.indents,it=()=>e.jsxs(Le,{$p:`0 ${ot} ${O} ${O}`,children:[e.jsx(Ve,{}),e.jsx(rt,{})]});export{it as default};
