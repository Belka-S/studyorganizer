import{n as A,s as f,t as w,P as y,j as e,u as G,r as $,q as T,w as z,Q as L,x as se,c as re,y as R,z as oe,A as ne,C as ce,M as O,D as _,E as le,H as ae,I as ie,J as P,K as ue,N as de,O as pe,R as he,F as me}from"./index-87800441.js";import{v as fe,u as xe}from"./index.esm-49d2d604.js";import{T as be,H as ge,r as $e}from"./index.esm-0ed3bdec.js";import{o as Ce,F as je,L as I,I as M,C as ve,B as ye,g as ke,a as Te,A as we}from"./ClusterAddForm-5f4da95d.js";import{t as Se,c as Fe}from"./clusterSchema-a70bfc08.js";const{colors:a,shadows:Le,indents:Ae}=w,N=A`
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
`,Ge=f.li`
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
`,Ee=f.li`
  ${N}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${Le.back};
    background-color: ${a.white};
    border-radius: ${Ae.xxs};
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
`,Be=f.button`
  ${K}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,Ie=f.a`
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
    ${fe}
  }
`,ze=f.label`
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
`,_e=f.label`
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
`,De=f.span`
  ${E}

  justify-self: right;
  font-size: 14px;
`,Me=f.button`
  ${E}

  font-size: 14px;
`,qe=f.button`
  ${E}

  opacity: ${({$hovered:t})=>t?1:0};
`,He=f.button`
  ${E}

  opacity: 0;
`,W=({group:t})=>e.jsx(Ge,{children:e.jsx("h2",{children:t})});W.propTypes={group:y.string};const J=({el:t,setIsModal:d})=>{var c,g;const{_id:i,cluster:l,title:u,group:o}=t,h=G(),[x,k]=$.useState({value:o,label:o}),{clusterGroups:v}=T(),{register:p,watch:C,handleSubmit:s,formState:{errors:n}}=xe({mode:"onBlur",resolver:Ce(Se),defaultValues:{cluster:l,title:u}}),m=async r=>{const S=ke(r.cluster);h(z({_id:i,...r,group:x.value,gdriveId:S})),d(!1)},b=v.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,S)=>r.value.localeCompare(S.value)),j=r=>{C("title")?(h(se({clusterGroup:r})),k({value:r,label:r})):L.error("Title is required")};return e.jsxs(je,{onSubmit:s(m),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=n.cluster)==null?void 0:c.message]}),e.jsx(M,{...p("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(g=n.title)==null?void 0:g.message]}),e.jsx(M,{...p("title"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(ve,{value:x,options:b,onChange:r=>k(r||""),onCreateOption:j,isClearable:x})]}),e.jsx(ye,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};J.propTypes={el:y.object,setIsModal:y.func.isRequired};const Q=({el:t,sortByDate:d,setSortByDate:i})=>{const l=G(),u=re(),{activeCluster:o,clusterTrash:h}=T(),{allElements:x}=R(),[k,v]=$.useState(!1),{_id:p,cluster:C,title:s,favorite:n,checked:m,createdAt:b}=t,j=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},c=x.filter(F=>F.cluster===p).length,g=()=>{l(_(t))},r=()=>{l(z({_id:p,favorite:!n}))},S=()=>{u(`/element/${p}`,{replace:!0})},U=()=>{i(!d),d?L.success("Ascending by Title"):L.success("Ascending by Date")},Y=()=>{l(_(t)),v("edit")},Z=()=>l(le(t)),ee=h.find(F=>F._id===p),te=()=>{l(z({_id:p,checked:!m}))},D=p===(o==null?void 0:o._id);return e.jsxs(Ee,{id:D?"active-cluster":null,$active:D,onClick:g,children:[e.jsxs(ze,{$hovered:n,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:r}),e.jsx(be,{size:"20px"})]}),e.jsx(Be,{onClick:S,children:s}),e.jsx(Ie,{href:C,target:"_blank",rel:"noopener noreferrer",children:j(C)}),e.jsx(De,{children:c>0&&c}),e.jsx(He,{onClick:Y,children:e.jsx(oe,{size:"15px"})}),e.jsx(qe,{$hovered:ee,onClick:Z,children:e.jsx(ne,{size:"16px"})}),e.jsxs(_e,{$hovered:m,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:m,onChange:te}),e.jsx(ce,{size:"15px"})]}),e.jsx(Me,{onClick:U,children:Te(b)}),k&&e.jsx(O,{onClick:()=>v(!1),children:e.jsx(J,{el:t,setIsModal:v})})]})};Q.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func};const{indents:Re}=w,Oe=f.ol`
  width: 100%;

  padding-bottom: ${Re.xl};
  counter-reset: section 0;
`,Pe=()=>{const t=G(),{allElements:d}=R(),{allClusters:i,clusterTrash:l,clusterFilter:u}=T();let{clusterSelect:o}=T();o=o||[];const[h,x]=$.useState(!1);$.useEffect(()=>{t(ae()),t(ie())},[t]),$.useEffect(()=>{const s=document.getElementById("active-cluster");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const v=(()=>{const s=l.map(c=>c._id),n=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return n;const m=[...d].sort((c,g)=>c.createdAt.localeCompare(g.createdAt));let b=[];for(let c=0;c<m.length;c+=1){const g=m[c].cluster;b.includes(g)||b.push(g)}const j=i.filter(c=>b.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:n,favorite:m,checked:b})=>{const j=s.toLowerCase().includes(u)||n.toLowerCase().includes(u),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&m===!0:j&&m===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&b===!0:c()&&b===!1:c())()}).sort(h?(s,n)=>n.createdAt.localeCompare(s.createdAt):(s,n)=>s.title.localeCompare(n.title)),p=Array.from(new Set(v.map(s=>s.group))).sort((s,n)=>s.localeCompare(n));let C=o.filter(s=>p.includes(s));return C=C.length!==0?C:p,e.jsx(Oe,{children:C.map(s=>e.jsxs($.Fragment,{children:[e.jsx(W,{group:s}),v.map(n=>n.group===s&&e.jsx(Q,{el:n,sortByDate:h,setSortByDate:x},n._id))]},s))})},{button:Ne}=w.shadows,Ke=()=>{const t=G(),{activeCluster:d,clusterTrash:i}=T(),l=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(ue(i.map(u=>u._id).join("&"))).then(()=>{const u=i.map(h=>h._id),{_id:o}=d;u.includes(o)&&t(_(null))}).then(()=>t(de()))};return e.jsx(P,{onClick:l,$s:"m",$round:!0,$bs:Ne,children:e.jsx(ge,{size:16})})},{button:Ve}=w.shadows,X=({setClipboardText:t,setIsModal:d})=>{$.useEffect(()=>{const l=u=>{u.key==="+"&&i()};return addEventListener("keydown",l),()=>{removeEventListener("keydown",l)}},[]);const i=async l=>{const u=await $e();try{await Fe.validate({cluster:u}),t(u),d("add")}catch(o){l==null||l.target.blur(),L.error(`Invalid cluster, ${o.message}`)}};return e.jsx(P,{onClick:i,$s:"m",$round:!0,$bs:Ve,children:e.jsx(pe,{size:18})})};X.propTypes={setClipboardText:y.func.isRequired,setIsModal:y.func.isRequired};const{s:et,m:q}=w.indents,We=()=>{const{clusterTrash:t}=T(),[d,i]=$.useState(!1),[l,u]=$.useState(""),[o,h]=$.useState(""),x=t.length>0?" 1fr":"",k="1fr"+x;return e.jsxs(e.Fragment,{children:[e.jsxs(he,{$m:`${q} ${q}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,children:[x&&e.jsx(Ke,{}),e.jsx(X,{setClipboardText:u,setIsModal:i})]}),d&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(we,{cluster:l,group:o,setGroup:h,setIsModal:i})})]})},{s:H,m:Je}=w.indents,tt=()=>e.jsxs(me,{$p:`0 ${Je} ${H} ${H}`,children:[e.jsx(Pe,{}),e.jsx(We,{})]});export{tt as default};
