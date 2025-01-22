import{n as A,s as b,t as S,P as v,j as e,u as G,r as $,q as T,w as z,Q as L,x as re,c as oe,y as R,z as ne,A as ce,C as le,M as O,D as _,E as ae,H as ie,I as ue,J as de,K as P,N as pe,O as he,R as me,S as fe,F as xe}from"./index-20418ffe.js";import{v as be,u as ge}from"./index.esm-08242c6f.js";import{T as $e,H as Ce,r as je}from"./index.esm-0b862061.js";import{o as ve,F as ke,L as I,I as M,C as ye,B as Te,g as Se,a as we,A as Fe}from"./ClusterAddForm-990a264b.js";import{t as Le,c as Ae}from"./clusterSchema-ac65282b.js";const{colors:a,shadows:Ge,indents:Ee}=S,N=A`
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
`,Ie=b.li`
  ${N}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${Ge.back};
    background-color: ${a.white};
    border-radius: ${Ee.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,K=A`
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
`,_e=b.a`
  ${K}

  color: ${a.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${a.black};
  }
`,V=A`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${be}
  }
`,De=b.label`
  ${V}

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
  ${V}
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
`,E=A`
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
  ${E}

  justify-self: right;
  font-size: 14px;
`,He=b.button`
  ${E}

  font-size: 14px;
`,Re=b.button`
  ${E}

  opacity: ${({$hovered:t})=>t?1:0};
`,Oe=b.button`
  ${E}

  opacity: 0;
`,W=({group:t})=>e.jsx(Be,{children:e.jsx("h2",{children:t})});W.propTypes={group:v.string};const J=({el:t,setIsModal:p})=>{var c,x;const{_id:i,cluster:n,title:u,group:o}=t,m=G(),[g,k]=$.useState({value:o,label:o}),{clusterGroups:y}=T(),{register:C,watch:d,handleSubmit:s,formState:{errors:l}}=ge({mode:"onBlur",resolver:ve(Le),defaultValues:{cluster:n,title:u}}),f=async r=>{const w=Se(r.cluster);m(z({_id:i,...r,group:g.value,gdriveId:w})),p(!1)},h=y.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,w)=>r.value.localeCompare(w.value)),j=r=>{d("title")?(m(re({clusterGroup:r})),k({value:r,label:r})):L.error("Title is required")};return e.jsxs(ke,{onSubmit:s(f),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=l.cluster)==null?void 0:c.message]}),e.jsx(M,{...C("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(x=l.title)==null?void 0:x.message]}),e.jsx(M,{...C("title"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(ye,{value:g,options:h,onChange:r=>k(r||""),onCreateOption:j,isClearable:g})]}),e.jsx(Te,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};J.propTypes={el:v.object,setIsModal:v.func.isRequired};const Q=({el:t,sortByDate:p,setSortByDate:i})=>{const n=G(),u=oe(),{activeCluster:o,clusterTrash:m,clusterSelect:g}=T(),{allElements:k}=R(),[y,C]=$.useState(!1),{_id:d,cluster:s,title:l,favorite:f,checked:h,createdAt:j}=t,c=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},x=k.filter(F=>F.cluster===d).length,r=()=>{n(_(t))},w=()=>{n(z({_id:d,favorite:!f}))},X=()=>{n(ae({clusterSelect:g})),u(`/element/${d}`,{replace:!0})},Y=()=>{i(!p),p?L.success("Ascending by Title"):L.success("Ascending by Date")},Z=()=>{n(_(t)),C("edit")},ee=()=>n(ie(t)),te=m.find(F=>F._id===d),se=()=>{n(z({_id:d,checked:!h}))},D=d===(o==null?void 0:o._id);return e.jsxs(Ie,{id:D?"active-cluster":null,$active:D,onClick:r,children:[e.jsxs(De,{$hovered:f,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:w}),e.jsx($e,{size:"20px"})]}),e.jsx(ze,{onClick:X,children:l}),e.jsx(_e,{href:s,target:"_blank",rel:"noopener noreferrer",children:c(s)}),e.jsx(qe,{children:x>0&&x}),e.jsx(Oe,{onClick:Z,children:e.jsx(ne,{size:"15px"})}),e.jsx(Re,{$hovered:te,onClick:ee,children:e.jsx(ce,{size:"16px"})}),e.jsxs(Me,{$hovered:h,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:h,onChange:se}),e.jsx(le,{size:"15px"})]}),e.jsx(He,{onClick:Y,children:we(j)}),y&&e.jsx(O,{onClick:()=>C(!1),children:e.jsx(J,{el:t,setIsModal:C})})]})};Q.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Pe}=S,Ne=b.ol`
  width: 100%;

  padding-bottom: ${Pe.xl};
  counter-reset: section 0;
`,Ke=()=>{const t=G(),{allElements:p}=R(),{allClusters:i,clusterTrash:n,clusterFilter:u}=T();let{clusterSelect:o}=T();o=o||[];const[m,g]=$.useState(!1);$.useEffect(()=>{t(ue()),t(de())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const y=(()=>{const s=n.map(c=>c._id),l=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return l;const f=[...p].sort((c,x)=>c.createdAt.localeCompare(x.createdAt));let h=[];for(let c=0;c<f.length;c+=1){const x=f[c].cluster;h.includes(x)||h.push(x)}const j=i.filter(c=>h.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:l,favorite:f,checked:h})=>{const j=s.toLowerCase().includes(u)||l.toLowerCase().includes(u),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&f===!0:j&&f===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&h===!0:c()&&h===!1:c())()}).sort(m?(s,l)=>l.createdAt.localeCompare(s.createdAt):(s,l)=>s.title.localeCompare(l.title)),C=Array.from(new Set(y.map(s=>s.group))).sort((s,l)=>s.localeCompare(l));let d=o.filter(s=>C.includes(s));return d=d.length!==0?d:C,e.jsx(Ne,{children:d.map(s=>e.jsxs($.Fragment,{children:[e.jsx(W,{group:s}),y.map(l=>l.group===s&&e.jsx(Q,{el:l,sortByDate:m,setSortByDate:g},l._id))]},s))})},{button:Ve}=S.shadows,We=()=>{const t=G(),{activeCluster:p,clusterTrash:i}=T(),n=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(pe(i.map(u=>u._id).join("&"))).then(()=>{const u=i.map(m=>m._id),{_id:o}=p;u.includes(o)&&t(_(null))}).then(()=>t(he()))};return e.jsx(P,{onClick:n,$s:"m",$round:!0,$bs:Ve,children:e.jsx(Ce,{size:16})})},{button:Je}=S.shadows,U=({setClipboardText:t,setIsModal:p})=>{$.useEffect(()=>{const n=u=>{u.key==="+"&&i()};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const i=async n=>{const u=await je();try{await Ae.validate({cluster:u}),t(u),p("add")}catch(o){n==null||n.target.blur(),L.error(`Invalid cluster, ${o.message}`)}};return e.jsx(P,{onClick:i,$s:"m",$round:!0,$bs:Je,children:e.jsx(me,{size:18})})};U.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:st,m:q}=S.indents,Qe=()=>{const{clusterTrash:t}=T(),[p,i]=$.useState(!1),[n,u]=$.useState(""),[o,m]=$.useState(""),g=t.length>0?" 1fr":"",k="1fr"+g;return e.jsxs(e.Fragment,{children:[e.jsxs(fe,{$m:`${q} ${q}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,children:[g&&e.jsx(We,{}),e.jsx(U,{setClipboardText:u,setIsModal:i})]}),p&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(Fe,{cluster:n,group:o,setGroup:m,setIsModal:i})})]})},{s:H,m:Ue}=S.indents,rt=()=>e.jsxs(xe,{$p:`0 ${Ue} ${H} ${H}`,children:[e.jsx(Ke,{}),e.jsx(Qe,{})]});export{rt as default};
