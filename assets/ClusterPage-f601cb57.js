import{o as E,p as b,t as S,P as v,j as e,u as G,r as $,q as T,B as _,v as re,w as D,Q as L,x as oe,k as ne,y as P,z as ce,A as le,C as ae,M as N,D as I,H as ie,J as ue,K as de,N as pe,O as he,R as me,U as fe,W as xe,X as be,Y as ge,Z as $e,i as Ce}from"./index-adf586b6.js";import{v as je,u as ve}from"./index.esm-e795559f.js";import{T as ke,r as ye}from"./index-054dd512.js";import{o as Te,F as Se,L as z,I as q,C as we,g as Fe,a as Le,A as Ee}from"./ClusterAddForm-fc18ed75.js";const{colors:a,shadows:Ge,indents:Ae}=S,O=E`
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
`,ze=b.li`
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
`,W=E`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${a.hovered};
  }
`,De=b.button`
  ${W}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,Ie=b.a`
  ${W}

  color: ${a.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${a.black};
  }
`,K=E`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${je}
  }
`,_e=b.label`
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
`,Me=b.label`
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
`,A=E`
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
`,qe=b.span`
  ${A}

  justify-self: right;
  font-size: 14px;
`,Re=b.button`
  ${A}

  font-size: 14px;
`,He=b.button`
  ${A}

  opacity: ${({$hovered:t})=>t?1:0};
`,Pe=b.button`
  ${A}

  opacity: 0;
`,U=({group:t})=>e.jsx(Be,{children:e.jsx("h2",{children:t})});U.propTypes={group:v.string};const X=({el:t,setIsModal:p})=>{var c,x;const{_id:i,cluster:n,title:u,group:o}=t,m=G(),[g,k]=$.useState({value:o,label:o}),{clusterGroups:y}=T(),{register:C,watch:d,handleSubmit:s,formState:{errors:l}}=ve({mode:"onBlur",resolver:Te(re),defaultValues:{cluster:n,title:u}}),f=async r=>{const w=Fe(r.cluster);m(D({_id:i,...r,group:g.value,gdriveId:w})),p(!1)},h=y.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,w)=>r.value.localeCompare(w.value)),j=r=>{d("title")?(m(oe({clusterGroup:r})),k({value:r,label:r})):L.error("Title is required")};return e.jsxs(Se,{onSubmit:s(f),children:[e.jsxs(z,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=l.cluster)==null?void 0:c.message]}),e.jsx(q,{...C("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(z,{children:["Title ",e.jsxs("span",{children:[" ",(x=l.title)==null?void 0:x.message]}),e.jsx(q,{...C("title"),onFocus:r=>r.target.select()})]}),e.jsxs(z,{children:["Group",e.jsx(we,{value:g,options:h,onChange:r=>k(r||""),onCreateOption:j,isClearable:g})]}),e.jsx(_,{variant:"accent",type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};X.propTypes={el:v.object,setIsModal:v.func.isRequired};const J=({el:t,sortByDate:p,setSortByDate:i})=>{const n=G(),u=ne(),{activeCluster:o,clusterTrash:m,clusterSelect:g}=T(),{allElements:k}=P(),[y,C]=$.useState(!1),{_id:d,cluster:s,title:l,favorite:f,checked:h,createdAt:j}=t,c=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},x=k.filter(F=>F.cluster===d).length,r=()=>{n(I(t))},w=()=>{n(D({_id:d,favorite:!f}))},V=()=>{n(ie({clusterSelect:g})),u(`/element/${d}`,{replace:!0})},Y=()=>{i(!p),p?L.success("Ascending by Title"):L.success("Ascending by Date")},Z=()=>{n(I(t)),C("edit")},ee=()=>n(ue(t)),te=m.find(F=>F._id===d),se=()=>{n(D({_id:d,checked:!h}))},M=d===(o==null?void 0:o._id);return e.jsxs(ze,{id:M?"active-cluster":null,$active:M,onClick:r,children:[e.jsxs(_e,{$hovered:f,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:w}),e.jsx(ke,{size:"20px"})]}),e.jsx(De,{onClick:V,children:l}),e.jsx(Ie,{href:s,target:"_blank",rel:"noopener noreferrer",children:c(s)}),e.jsx(qe,{children:x>0&&x}),e.jsx(Pe,{onClick:Z,children:e.jsx(ce,{size:"15px"})}),e.jsx(He,{$hovered:te,onClick:ee,children:e.jsx(le,{size:"16px"})}),e.jsxs(Me,{$hovered:h,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:h,onChange:se}),e.jsx(ae,{size:"15px"})]}),e.jsx(Re,{onClick:Y,children:Le(j)}),y&&e.jsx(N,{onClick:()=>C(!1),children:e.jsx(X,{el:t,setIsModal:C})})]})};J.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Ne}=S,Oe=b.ol`
  width: 100%;

  padding-bottom: ${Ne.xl};
  counter-reset: section 0;
`,We=()=>{const t=G(),{allElements:p}=P(),{allClusters:i,clusterTrash:n,clusterFilter:u}=T();let{clusterSelect:o}=T();o=o||[];const[m,g]=$.useState(!1);$.useEffect(()=>{t(de()),t(pe())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");s&&he(s)},[]);const y=(()=>{const s=n.map(c=>c._id),l=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return l;const f=[...p].sort((c,x)=>c.createdAt.localeCompare(x.createdAt));let h=[];for(let c=0;c<f.length;c+=1){const x=f[c].cluster;h.includes(x)||h.push(x)}const j=i.filter(c=>h.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:l,favorite:f,checked:h})=>{const j=s.toLowerCase().includes(u)||l.toLowerCase().includes(u),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&f===!0:j&&f===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&h===!0:c()&&h===!1:c())()}).sort(m?(s,l)=>l.createdAt.localeCompare(s.createdAt):(s,l)=>s.title.localeCompare(l.title)),C=Array.from(new Set(y.map(s=>s.group))).sort((s,l)=>s.localeCompare(l));let d=o.filter(s=>C.includes(s));return d=d.length!==0?d:C,e.jsx(Oe,{children:d.map(s=>e.jsxs($.Fragment,{children:[e.jsx(U,{group:s}),y.map(l=>l.group===s&&e.jsx(J,{el:l,sortByDate:m,setSortByDate:g},l._id))]},s))})},{button:Ke}=S.shadows,Ue=()=>{const t=G(),{activeCluster:p,clusterTrash:i}=T(),n=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(fe(i.map(u=>u._id).join("&"))).then(()=>{const u=i.map(m=>m._id),{_id:o}=p;u.includes(o)&&t(I(null))}).then(()=>t(xe()))};return e.jsx(_,{onClick:n,$s:"m",$round:!0,$bs:Ke,children:e.jsx(me,{size:16})})},{button:Xe}=S.shadows,Q=({setClipboardText:t,setIsModal:p})=>{$.useEffect(()=>{const n=u=>{u.key==="+"&&i()};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const i=async n=>{const u=await ye();try{await ge.validate({cluster:u}),t(u),p("add")}catch(o){n==null||n.currentTarget.blur(),L.error(`Invalid cluster, ${o.message}`)}};return e.jsx(_,{onClick:i,$s:"m",$round:!0,$bs:Xe,children:e.jsx(be,{size:18})})};Q.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:Je,m:R}=S.indents,Qe=()=>{const{clusterTrash:t}=T(),[p,i]=$.useState(!1),[n,u]=$.useState(""),[o,m]=$.useState(""),g=t.length>0?" 1fr":"",k="1fr"+g;return e.jsxs(e.Fragment,{children:[e.jsxs($e,{$m:`${R} ${R}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,$cg:Je,children:[g&&e.jsx(Ue,{}),e.jsx(Q,{setClipboardText:u,setIsModal:i})]}),p&&e.jsx(N,{onClick:()=>i(!1),children:e.jsx(Ee,{cluster:n,group:o,setGroup:m,setIsModal:i})})]})},{s:H,m:Ve}=S.indents,st=()=>e.jsxs(Ce,{$p:`0 ${Ve} ${H} ${H}`,children:[e.jsx(We,{}),e.jsx(Qe,{})]});export{st as default};
