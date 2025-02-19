import{p as I,q as f,t as T,P as g,j as e,u as G,r as j,v as S,B as A,w as le,x as z,h as B,y as ie,l as ue,i as N,z as de,A as he,C as pe,D as be,M as D,H as M,J as me,K as fe,N as xe,O as je,Q as ge,R as $e,U as Ce,W as ve,X as ye,Y as ke,Z as Se,_ as Te,$ as we,a0 as Fe,a1 as Le,k as Be}from"./index-12dcc9c3.js";import{v as Ge,u as O}from"./index.esm-4f3f70d7.js";import{T as Ee,r as Ie}from"./index-e28df499.js";import{o as W,F as Y,L as E,I as q,C as Ae,g as _e,a as ze,A as De}from"./ClusterAddForm-083a20ae.js";const{colors:l,shadows:Me,indents:qe}=T,K=I`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 15fr 2fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${l.borderLight};
`,Re=f.li`
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
`,He=f.li`
  ${K}

  background-color: ${({$active:t})=>t&&l.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${l.border};
    box-shadow: ${Me.backdrop};
    background-color: ${l.white};
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
    color: ${l.hovered};
  }
`,Pe=f.button`
  ${X}

  border: none;
  background-color: transparent;
  color: ${l.black};
  font-weight: 500;
`,Ne=f.a`
  ${X}

  color: ${l.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${l.black};
  }
`,J=I`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Ge}
  }
`,Oe=f.label`
  ${J}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?l.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?l.yellow:l.border};
  }
  &:hover svg {
    stroke: ${l.placeholder};
  }
`,We=f.label`
  ${J}
  opacity: ${({$hovered:t})=>t?1:0};

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${l.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?l.border:"transparent"};
  }
  &:hover svg {
    border-color: ${l.placeholder};
    color: ${({$hovered:t})=>t?l.placeholder:"transparent"};
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
    color: ${l.border};
  }
  &:hover,
  &:hover svg {
    color: ${l.placeholder};
  }
`,Ye=f.span`
  ${_}

  justify-self: right;
  font-size: 14px;
`,Ke=f.button`
  ${_}

  font-size: 14px;
`,Xe=f.button`
  ${_}

  opacity: ${({$hovered:t})=>t?1:0};
`,Je=f.button`
  ${_}

  opacity: 0;
`,Q=({group:t})=>e.jsx(Re,{children:e.jsx("h2",{children:t})});Q.propTypes={group:g.string};const U=({el:t,setIsModal:i})=>{var $,w;const{_id:c,cluster:o,title:a,group:h}=t,d=G(),[u,v]=j.useState({value:h,label:h}),{clusterGroups:k}=S(),{register:y,watch:x,handleSubmit:s,formState:{errors:n}}=O({mode:"onBlur",resolver:W(le),defaultValues:{cluster:o,title:a}}),p=async r=>{const F=_e(r.cluster);d(z({_id:c,...r,group:u.value,gdriveId:F})),i(!1)},b=k.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,F)=>r.value.localeCompare(F.value)),m=r=>{x("title")?(d(ie({clusterGroup:r})),v({value:r,label:r})):B.error("Title is required")};return e.jsxs(Y,{onSubmit:s(p),children:[e.jsxs(E,{children:["Cluster ",e.jsxs("span",{children:[" ",($=n.cluster)==null?void 0:$.message]}),e.jsx(q,{...y("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(E,{children:["Title ",e.jsxs("span",{children:[" ",(w=n.title)==null?void 0:w.message]}),e.jsx(q,{...y("title"),onFocus:r=>r.target.select()})]}),e.jsxs(E,{children:["Group",e.jsx(Ae,{value:u,options:b,onChange:r=>v(r||""),onCreateOption:m,isClearable:u})]}),e.jsx(A,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};U.propTypes={el:g.object,setIsModal:g.func.isRequired};const V=({el:t,sortByDate:i,setSortByDate:c})=>{const o=G(),a=ue(),{user:h}=N(),{activeCluster:d,clusterTrash:u,clusterSelect:v}=S(),{allElements:k}=de(),[y,x]=j.useState(!1),{_id:s,cluster:n,title:p,favorite:b,checked:m,createdAt:$}=t,w=C=>{const L=C.replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return L.length<=30?L:L.substring(0,13).concat(`...${L.substring(L.length-10)}`)},r=k.filter(C=>C.cluster===s).length,F=()=>{o(M(t))},te=()=>{o(z({_id:s,favorite:!b}))},se=()=>{const{subjectId:C}=h;o(me({_id:C,clusterSelect:v})),a(`/element/${C}`,{replace:!0})},re=()=>{c(!i),i?B.success("Ascending by Title"):B.success("Ascending by Date")},oe=()=>{o(M(t)),x("edit")},ne=()=>o(fe(t)),ce=u.find(C=>C._id===s),ae=()=>{o(z({_id:s,checked:!m}))},R=s===(d==null?void 0:d._id);return e.jsxs(He,{id:R?"active-cluster":null,$active:R,onClick:F,children:[e.jsxs(Oe,{$hovered:b,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:b,onChange:te}),e.jsx(Ee,{size:"20px"})]}),e.jsx(Pe,{onClick:se,children:p}),e.jsx(Ne,{href:n,target:"_blank",rel:"noopener noreferrer",children:w(n)}),e.jsx(Ye,{children:r>0&&r}),e.jsx(Je,{onClick:oe,children:e.jsx(he,{size:"15px"})}),e.jsx(Xe,{$hovered:ce,onClick:ne,children:e.jsx(pe,{size:"16px"})}),e.jsxs(We,{$hovered:m,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:m,onChange:ae}),e.jsx(be,{size:"15px"})]}),e.jsx(Ke,{onClick:re,children:ze($)}),y&&e.jsx(D,{onClick:()=>x(!1),children:e.jsx(U,{el:t,setIsModal:x})})]})};V.propTypes={el:g.object,sortByDate:g.bool,setSortByDate:g.func};const{indents:Qe}=T,Ue=f.ol`
  width: 100%;

  padding-bottom: ${Qe.xl};
  counter-reset: section 0;
`,Ve=()=>{const t=G(),{user:i}=N(),{allClusters:c,clusterTrash:o,clusterFilter:a}=S(),[h,d]=j.useState(!1);j.useEffect(()=>{const{subject:s,subjectId:n}=i;!s||!n||(t(xe({subject:s})),t(je()),t(ge()).unwrap().then(p=>{const b=p.result.subjects.find(({_id:m})=>m===n);t($e(b==null?void 0:b.clusterSelect))}))},[t,i]),j.useEffect(()=>{const s=document.getElementById("active-cluster");s&&Ce(s)},[]);const{clusterSelect:u}=S(),k=(()=>{const s=o.map(p=>p._id),n=c.filter(p=>s.includes(p._id));return u.includes("trash")?n:c})().filter(({group:s,title:n,favorite:p,checked:b})=>{const m=s.toLowerCase().includes(a)||n.toLowerCase().includes(a),$=()=>u.some(r=>["favorite","unfavorite"].includes(r))?u.includes("favorite")?m&&p===!0:m&&p===!1:m;return(()=>u.some(r=>["checked","unchecked"].includes(r))?u.includes("checked")?$()&&b===!0:$()&&b===!1:$())()}).sort(h?(s,n)=>n.createdAt.localeCompare(s.createdAt):(s,n)=>s.title.localeCompare(n.title)),y=Array.from(new Set(k.map(s=>s.group))).sort((s,n)=>s.localeCompare(n));let x=u.filter(s=>y.includes(s));return x=x.length!==0?x:y,e.jsx(Ue,{children:x.map(s=>e.jsxs(j.Fragment,{children:[e.jsx(Q,{group:s}),k.map(n=>n.group===s&&e.jsx(V,{el:n,sortByDate:h,setSortByDate:d},n._id))]},s))})},Z=({setIsModal:t})=>{var d;const i=G(),{register:c,handleSubmit:o,formState:{errors:a}}=O({mode:"onBlur",resolver:W(ye)}),h=u=>{i(ve({clusterSubject:u.subject})),t(!1)};return e.jsxs(Y,{onSubmit:o(h),children:[e.jsxs(E,{children:["Subject ",e.jsxs("span",{children:[" ",(d=a.subject)==null?void 0:d.message]}),e.jsx(q,{autoComplete:"off",autoFocus:!0,...c("subject")})]}),e.jsx(A,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Z.propTypes={setIsModal:g.func.isRequired};const{button:Ze}=T.shadows,et=()=>{const t=G(),{activeCluster:i,clusterTrash:c}=S(),o=()=>{B.error("Are you sure you want to delete the selected Cluster(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{t(Se(c.map(a=>a._id).join("&"))).then(()=>{const a=c.map(d=>d._id),{_id:h}=i;a.includes(h)&&t(M(null))}).then(()=>t(Te()))}}})};return e.jsx(A,{onClick:o,$s:"m",$round:!0,$bs:Ze,children:e.jsx(ke,{size:16})})},{button:tt}=T.shadows,ee=({setClipboardText:t,setIsModal:i})=>{j.useEffect(()=>{const o=a=>{a.key==="+"&&c()};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const c=async o=>{o==null||o.currentTarget.blur();const a=await Ie();try{await Fe.validate({cluster:a}),t(a),i("addCluster")}catch{B.info("Invalid Cluster, or you want to add a new Subject?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:async()=>{i("addSubject")}}})}};return e.jsx(A,{onClick:c,$s:"m",$round:!0,$bs:tt,children:e.jsx(we,{size:18})})};ee.propTypes={setClipboardText:g.func.isRequired,setIsModal:g.func.isRequired};const{s:st,m:H}=T.indents,rt=()=>{const{clusterTrash:t}=S(),[i,c]=j.useState(!1),[o,a]=j.useState(""),[h,d]=j.useState(""),u=t.length>0?" 1fr":"",v="1fr"+u;return e.jsxs(e.Fragment,{children:[e.jsxs(Le,{$m:`${H} ${H}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:v,$cg:st,children:[u&&e.jsx(et,{}),e.jsx(ee,{setClipboardText:a,setIsModal:c})]}),i==="addCluster"&&e.jsx(D,{onClick:()=>c(!1),children:e.jsx(De,{cluster:o,group:h,setGroup:d,setIsModal:c})}),i==="addSubject"&&e.jsx(D,{onClick:()=>c(!1),children:e.jsx(Z,{cluster:o,group:h,setGroup:d,setIsModal:c})})]})},{s:P,m:ot}=T.indents,it=()=>e.jsxs(Be,{$p:`0 ${ot} ${P} ${P}`,children:[e.jsx(Ve,{}),e.jsx(rt,{})]});export{it as default};
