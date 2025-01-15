import{n as A,s as b,t as w,P as v,j as e,u as G,r as g,q as T,w as z,Q as L,x as re,c as oe,y as R,z as ne,A as ce,C as le,M as O,D as _,E as ae,H as ie,I as ue,J as P,K as de,N as pe,O as he,R as me,F as fe}from"./index-aa17f433.js";import{v as xe,u as be}from"./index.esm-0409750b.js";import{T as ge,H as $e,r as Ce}from"./index.esm-7b978808.js";import{o as je,F as ve,L as I,I as M,C as ye,B as ke,g as Te,a as we,A as Se}from"./ClusterAddForm-2146f57d.js";import{t as Fe,c as Le}from"./clusterSchema-0c8ab328.js";const{colors:a,shadows:Ae,indents:Ge}=w,N=A`
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
`,Ee=b.li`
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
`,Be=b.li`
  ${N}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${Ae.back};
    background-color: ${a.white};
    border-radius: ${Ge.xxs};
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
`,Ie=b.button`
  ${K}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,ze=b.a`
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
    ${xe}
  }
`,_e=b.label`
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
`,De=b.label`
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
`,Me=b.span`
  ${E}

  justify-self: right;
  font-size: 14px;
`,qe=b.button`
  ${E}

  font-size: 14px;
`,He=b.button`
  ${E}

  opacity: ${({$hovered:t})=>t?1:0};
`,Re=b.button`
  ${E}

  opacity: 0;
`,W=({group:t})=>e.jsx(Ee,{children:e.jsx("h2",{children:t})});W.propTypes={group:v.string};const J=({el:t,setIsModal:p})=>{var c,x;const{_id:i,cluster:n,title:u,group:o}=t,m=G(),[$,y]=g.useState({value:o,label:o}),{clusterGroups:k}=T(),{register:C,watch:d,handleSubmit:s,formState:{errors:l}}=be({mode:"onBlur",resolver:je(Fe),defaultValues:{cluster:n,title:u}}),f=async r=>{const S=Te(r.cluster);m(z({_id:i,...r,group:$.value,gdriveId:S})),p(!1)},h=k.map(r=>({value:r.clusterGroup,label:r.clusterGroup})).sort((r,S)=>r.value.localeCompare(S.value)),j=r=>{d("title")?(m(re({clusterGroup:r})),y({value:r,label:r})):L.error("Title is required")};return e.jsxs(ve,{onSubmit:s(f),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(c=l.cluster)==null?void 0:c.message]}),e.jsx(M,{...C("cluster"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(x=l.title)==null?void 0:x.message]}),e.jsx(M,{...C("title"),onFocus:r=>r.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx(ye,{value:$,options:h,onChange:r=>y(r||""),onCreateOption:j,isClearable:$})]}),e.jsx(ke,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};J.propTypes={el:v.object,setIsModal:v.func.isRequired};const Q=({el:t,sortByDate:p,setSortByDate:i})=>{const n=G(),u=oe(),{activeCluster:o,clusterTrash:m,clusterSelect:$}=T(),{allElements:y}=R(),[k,C]=g.useState(!1),{_id:d,cluster:s,title:l,favorite:f,checked:h,createdAt:j}=t,c=F=>{const B=F.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},x=y.filter(F=>F.cluster===d).length,r=()=>{n(_(t))},S=()=>{n(z({_id:d,favorite:!f}))},U=()=>{u(`/element/${d}`,{replace:!0})},Y=()=>{i(!p),p?L.success("Ascending by Title"):L.success("Ascending by Date")},Z=()=>{n(_(t)),C("edit")},ee=()=>n(ae(t)),te=m.find(F=>F._id===d),se=()=>{n(z({_id:d,checked:!h}))},D=d===(o==null?void 0:o._id);return e.jsxs(Be,{id:D?"active-cluster":null,$active:D,onClick:r,children:[e.jsxs(_e,{$hovered:f,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:S}),e.jsx(ge,{size:"20px"})]}),e.jsx(Ie,{onClick:U,children:l}),e.jsx(ze,{href:s,target:"_blank",rel:"noopener noreferrer",children:c(s)}),e.jsx(Me,{children:x>0&&x}),e.jsx(Re,{onClick:Z,children:e.jsx(ne,{size:"15px"})}),e.jsx(He,{$hovered:te,onClick:ee,children:e.jsx(ce,{size:"16px"})}),e.jsxs(De,{$hovered:h,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:h,onChange:se}),e.jsx(le,{size:"15px"})]}),e.jsx(qe,{onClick:Y,children:we(j)}),k&&e.jsx(O,{onClick:()=>C(!1),children:e.jsx(J,{el:t,setIsModal:C})})]})};Q.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Oe}=w,Pe=b.ol`
  width: 100%;

  padding-bottom: ${Oe.xl};
  counter-reset: section 0;
`,Ne=()=>{const t=G(),{allElements:p}=R(),{allClusters:i,clusterTrash:n,clusterFilter:u}=T();let{clusterSelect:o}=T();o=o||[];const[m,$]=g.useState(!1);g.useEffect(()=>{t(ie()),t(ue())},[t]),g.useEffect(()=>{const s=document.getElementById("active-cluster");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const k=(()=>{const s=n.map(c=>c._id),l=i.filter(c=>s.includes(c._id));if(o.includes("trash"))return l;const f=[...p].sort((c,x)=>c.createdAt.localeCompare(x.createdAt));let h=[];for(let c=0;c<f.length;c+=1){const x=f[c].cluster;h.includes(x)||h.push(x)}const j=i.filter(c=>h.includes(c.cluster)).slice(0,29);return o.includes("recent")?j:i})().filter(({group:s,title:l,favorite:f,checked:h})=>{const j=s.toLowerCase().includes(u)||l.toLowerCase().includes(u),c=()=>o.some(r=>["favorite","unfavorite"].includes(r))?o.includes("favorite")?j&&f===!0:j&&f===!1:j;return(()=>o.some(r=>["checked","unchecked"].includes(r))?o.includes("checked")?c()&&h===!0:c()&&h===!1:c())()}).sort(m?(s,l)=>l.createdAt.localeCompare(s.createdAt):(s,l)=>s.title.localeCompare(l.title)),C=Array.from(new Set(k.map(s=>s.group))).sort((s,l)=>s.localeCompare(l));let d=o.filter(s=>C.includes(s));return d=d.length!==0?d:C,e.jsx(Pe,{children:d.map(s=>e.jsxs(g.Fragment,{children:[e.jsx(W,{group:s}),k.map(l=>l.group===s&&e.jsx(Q,{el:l,sortByDate:m,setSortByDate:$},l._id))]},s))})},{button:Ke}=w.shadows,Ve=()=>{const t=G(),{activeCluster:p,clusterTrash:i}=T(),n=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(de(i.map(u=>u._id).join("&"))).then(()=>{const u=i.map(m=>m._id),{_id:o}=p;u.includes(o)&&t(_(null))}).then(()=>t(pe()))};return e.jsx(P,{onClick:n,$s:"m",$round:!0,$bs:Ke,children:e.jsx($e,{size:16})})},{button:We}=w.shadows,X=({setClipboardText:t,setIsModal:p})=>{g.useEffect(()=>{const n=u=>{u.key==="+"&&i()};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const i=async n=>{const u=await Ce();try{await Le.validate({cluster:u}),t(u),p("add")}catch(o){n==null||n.target.blur(),L.error(`Invalid cluster, ${o.message}`)}};return e.jsx(P,{onClick:i,$s:"m",$round:!0,$bs:We,children:e.jsx(he,{size:18})})};X.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:tt,m:q}=w.indents,Je=()=>{const{clusterTrash:t}=T(),[p,i]=g.useState(!1),[n,u]=g.useState(""),[o,m]=g.useState(""),$=t.length>0?" 1fr":"",y="1fr"+$;return e.jsxs(e.Fragment,{children:[e.jsxs(me,{$m:`${q} ${q}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:y,children:[$&&e.jsx(Ve,{}),e.jsx(X,{setClipboardText:u,setIsModal:i})]}),p&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(Se,{cluster:n,group:o,setGroup:m,setIsModal:i})})]})},{s:H,m:Qe}=w.indents,st=()=>e.jsxs(fe,{$p:`0 ${Qe} ${H} ${H}`,children:[e.jsx(Ne,{}),e.jsx(Je,{})]});export{st as default};
