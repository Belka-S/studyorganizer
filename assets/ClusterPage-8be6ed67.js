import{n as L,s as b,t as S,P as v,j as e,u as G,r as $,w as T,x as _,y as z,Q as E,z as re,c as oe,A as P,C as ne,D as ce,E as le,M as N,G as D,H as ae,I as ie,J as ue,K as de,N as pe,O as he,R as me,S as fe,T as xe,U as be,F as ge}from"./index-b159f016.js";import{v as $e,u as Ce}from"./index.esm-bb143244.js";import{T as je,r as ve}from"./index-dd494e5f.js";import{o as ye,F as ke,L as I,I as R,C as Te,g as Se,a as we,A as Fe}from"./ClusterAddForm-63d17274.js";import{t as Ee,c as Le}from"./clusterSchema-92bbda10.js";const{colors:a,shadows:Ge,indents:Ae}=S,O=L`
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
`,Be=b.li`
  ${O}
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
`,Ie=b.li`
  ${O}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${Ge.back};
    background-color: ${a.white};
    border-radius: ${Ae.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,K=L`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${a.hovered};
  }
`,ze=b.button`
  ${K}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,De=b.a`
  ${K}

  color: ${a.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${a.black};
  }
`,U=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${$e}
  }
`,_e=b.label`
  ${U}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?a.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?a.yellow:a.border};
  }
  &:hover svg {
    stroke: ${a.placeholder};
  }
`,Me=b.label`
  ${U}
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
`,A=L`
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
`,Re=b.span`
  ${A}

  justify-self: right;
  font-size: 14px;
`,qe=b.button`
  ${A}

  font-size: 14px;
`,He=b.button`
  ${A}

  opacity: ${({$hovered:t})=>t?1:0};
`,Pe=b.button`
  ${A}

  opacity: 0;
`,W=({group:t})=>e.jsx(Be,{children:e.jsx("h2",{children:t})});W.propTypes={group:v.string};const J=({el:t,setIsModal:p})=>{var c,x;const{_id:i,cluster:n,title:u,group:o}=t,m=G(),[g,y]=$.useState({value:o,label:o}),{clusterGroups:k}=T(),{register:C,watch:d,handleSubmit:s,formState:{errors:l}}=Ce({mode:"onBlur",resolver:ye(Ee),defaultValues:{cluster:n,title:u}}),f=async r=>{const w=Se(r.cluster);m(z({_id:i,...r,group:g.value,gdriveId:w})),p(!1)},h=k.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,w)=>r.value.localeCompare(w.value)),j=r=>{d("title")?(m(re({clusterGroup:r})),y({value:r,label:r})):E.error("Title is required")};return e.jsxs(ke,{onSubmit:s(f),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=l.cluster)==null?void 0:c.message]}),e.jsx(R,{...C("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(x=l.title)==null?void 0:x.message]}),e.jsx(R,{...C("title"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(Te,{value:g,options:h,onChange:r=>y(r||""),onCreateOption:j,isClearable:g})]}),e.jsx(_,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};J.propTypes={el:v.object,setIsModal:v.func.isRequired};const Q=({el:t,sortByDate:p,setSortByDate:i})=>{const n=G(),u=oe(),{activeCluster:o,clusterTrash:m,clusterSelect:g}=T(),{allElements:y}=P(),[k,C]=$.useState(!1),{_id:d,cluster:s,title:l,favorite:f,checked:h,createdAt:j}=t,c=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},x=y.filter(F=>F.cluster===d).length,r=()=>{n(D(t))},w=()=>{n(z({_id:d,favorite:!f}))},X=()=>{n(ae({clusterSelect:g})),u(`/element/${d}`,{replace:!0})},Y=()=>{i(!p),p?E.success("Ascending by Title"):E.success("Ascending by Date")},Z=()=>{n(D(t)),C("edit")},ee=()=>n(ie(t)),te=m.find(F=>F._id===d),se=()=>{n(z({_id:d,checked:!h}))},M=d===(o==null?void 0:o._id);return e.jsxs(Ie,{id:M?"active-cluster":null,$active:M,onClick:r,children:[e.jsxs(_e,{$hovered:f,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:w}),e.jsx(je,{size:"20px"})]}),e.jsx(ze,{onClick:X,children:l}),e.jsx(De,{href:s,target:"_blank",rel:"noopener noreferrer",children:c(s)}),e.jsx(Re,{children:x>0&&x}),e.jsx(Pe,{onClick:Z,children:e.jsx(ne,{size:"15px"})}),e.jsx(He,{$hovered:te,onClick:ee,children:e.jsx(ce,{size:"16px"})}),e.jsxs(Me,{$hovered:h,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:h,onChange:se}),e.jsx(le,{size:"15px"})]}),e.jsx(qe,{onClick:Y,children:we(j)}),k&&e.jsx(N,{onClick:()=>C(!1),children:e.jsx(J,{el:t,setIsModal:C})})]})};Q.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Ne}=S,Oe=b.ol`
  width: 100%;

  padding-bottom: ${Ne.xl};
  counter-reset: section 0;
`,Ke=()=>{const t=G(),{allElements:p}=P(),{allClusters:i,clusterTrash:n,clusterFilter:u}=T();let{clusterSelect:o}=T();o=o||[];const[m,g]=$.useState(!1);$.useEffect(()=>{t(ue()),t(de())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");s&&pe(s)},[]);const k=(()=>{const s=n.map(c=>c._id),l=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return l;const f=[...p].sort((c,x)=>c.createdAt.localeCompare(x.createdAt));let h=[];for(let c=0;c<f.length;c+=1){const x=f[c].cluster;h.includes(x)||h.push(x)}const j=i.filter(c=>h.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:l,favorite:f,checked:h})=>{const j=s.toLowerCase().includes(u)||l.toLowerCase().includes(u),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&f===!0:j&&f===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&h===!0:c()&&h===!1:c())()}).sort(m?(s,l)=>l.createdAt.localeCompare(s.createdAt):(s,l)=>s.title.localeCompare(l.title)),C=Array.from(new Set(k.map(s=>s.group))).sort((s,l)=>s.localeCompare(l));let d=o.filter(s=>C.includes(s));return d=d.length!==0?d:C,e.jsx(Oe,{children:d.map(s=>e.jsxs($.Fragment,{children:[e.jsx(W,{group:s}),k.map(l=>l.group===s&&e.jsx(Q,{el:l,sortByDate:m,setSortByDate:g},l._id))]},s))})},{button:Ue}=S.shadows,We=()=>{const t=G(),{activeCluster:p,clusterTrash:i}=T(),n=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(me(i.map(u=>u._id).join("&"))).then(()=>{const u=i.map(m=>m._id),{_id:o}=p;u.includes(o)&&t(D(null))}).then(()=>t(fe()))};return e.jsx(_,{onClick:n,$s:"m",$round:!0,$bs:Ue,children:e.jsx(he,{size:16})})},{button:Je}=S.shadows,V=({setClipboardText:t,setIsModal:p})=>{$.useEffect(()=>{const n=u=>{u.key==="+"&&i()};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const i=async n=>{const u=await ve();try{await Le.validate({cluster:u}),t(u),p("add")}catch(o){n==null||n.currentTarget.blur(),E.error(`Invalid cluster, ${o.message}`)}};return e.jsx(_,{onClick:i,$s:"m",$round:!0,$bs:Je,children:e.jsx(xe,{size:18})})};V.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:Qe,m:q}=S.indents,Ve=()=>{const{clusterTrash:t}=T(),[p,i]=$.useState(!1),[n,u]=$.useState(""),[o,m]=$.useState(""),g=t.length>0?" 1fr":"",y="1fr"+g;return e.jsxs(e.Fragment,{children:[e.jsxs(be,{$m:`${q} ${q}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:y,$cg:Qe,children:[g&&e.jsx(We,{}),e.jsx(V,{setClipboardText:u,setIsModal:i})]}),p&&e.jsx(N,{onClick:()=>i(!1),children:e.jsx(Fe,{cluster:n,group:o,setGroup:m,setIsModal:i})})]})},{s:H,m:Xe}=S.indents,rt=()=>e.jsxs(ge,{$p:`0 ${Xe} ${H} ${H}`,children:[e.jsx(Ke,{}),e.jsx(Ve,{})]});export{rt as default};
