import{s as $,t as S,u as L,j as r,T as ge,U as ae,P as h,b as oe,q as H,y as O,S as be,V as R,K as q,w as K,D as M,W as Q,X as P,Q as T,Y as Ae,n as F,Z as X,r as E,_ as xe,$ as ve,a0 as U,a1 as ke,F as G,C as ye,A as we,z as je,a2 as Ce,J as Ee}from"./index-9a505b8d.js";import{T as Se}from"./index.esm-ee397d56.js";import{a as Te}from"./index.esm-4abb1f53.js";import{v as Be,u as Le}from"./index.esm-5bf40e34.js";import{S as Fe}from"./index.esm-1408b721.js";const _=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],z=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:J}=S,We=$.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${J.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${J.placeholder};
    /* stroke: ${({$colored:s})=>s&&J.yellow}; */

    @keyframes refresh-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
    animation: refresh-spin infinite 12s linear;
  }
`,Re=()=>{const s=L(),a=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(b=>b.removeAttribute("style")),s(ae(null))};return r.jsx(We,{onClick:a,children:r.jsx(ge,{size:"26px"})})},{background:Y,backgroundHoverd:D,white:I,borderLight:V}=S.colors,{button:Z}=S.shadows,ce=({filtredElements:s,setLiColor:a})=>{const g=L(),{user:b}=oe(),{activeCluster:c}=H(),{activeElement:u}=O(),A=({value:n})=>{g(K({_id:c._id,lang:n})).unwrap().then(t=>g(M(t.result.cluster)))},x=({value:n})=>{g(K({_id:c._id,rate:n})).unwrap().then(t=>g(M(t.result.cluster)))},i=({value:n})=>{const t=new FormData;t.append("lang",n),g(Q(t))},y=({value:n})=>{const t=new FormData;t.append("rate",n),g(Q(t))},m=n=>{a(Y);let t="";const e="$*@",l=s.findIndex(o=>o.element===u),p=s.splice(l===-1?0:l);for(let o=0;o<p.length;o+=1){const{element:d}=p[o];d.endsWith(".")||d.endsWith("!")||d.endsWith("?")||d.endsWith('"')?t+=d.replaceAll(",`",";").replaceAll(" `",` ${e}`).replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`Ja,${e}`,"Ja,").replaceAll(`Ok,${e}`,"Ok,").replaceAll(`Nein,${e}`,"Nein,").replaceAll(`Schade,${e}`,"Schade,").replaceAll(`gut,${e}`,"gut,").replaceAll(`wichtig,${e}`,"wichtig,").replaceAll(`glaube,${e}`,"glaube,").replaceAll(`denke,${e}`,"denke,").replaceAll(`finde,${e}`,"finde,").replaceAll(`meine,${e}`,"meine,").replaceAll(`schlage vor,${e}`,"schlage vor,").replaceAll(`vermute,${e}`,"vermute,").replaceAll(`nehme an,${e}`,"nehme an,").replaceAll(`sein,${e}`,"sein,").replaceAll(`habe den Eindruck,${e}`,"habe den Eindruck,").replaceAll(`finde ich,${e}`,"finde ich,").replaceAll(`gefällt es,${e}`,"gefällt es,").replaceAll(`sagen,${e}`,"sagen,").replaceAll(`sagt,${e}`,"sagt,").replaceAll(`sagst,${e}`,"sagst,").replaceAll(`schon,${e}`,"schon,").replaceAll(`uper,${e}`,"uper,").replaceAll(`klar,${e}`,"klar,").replaceAll(`uper,${e}`,"uper,").replaceAll(`atürlich,${e}`,"atürlich,").replaceAll(`nicht,${e}`,"nicht,").replaceAll(`wäre es,${e}`,"wäre es,").replaceAll(`ist es,${e}`,"ist es,").replaceAll(`weißt,${e}`,"weißt,").replaceAll(`weißt du,${e}`,"weißt du,").replaceAll(`besser,${e}`,"besser,").replaceAll(`interessant,${e}`,"interessant,").replaceAll(`ist wichtig,${e}`,"ist wichtig,").replaceAll(`,${e} oder?`,", oder?").replaceAll(`,${e} bitte.`,", bitte.").replaceAll(`,${e} danke.`,", danke."):t+=d.replaceAll(".",e)+e}const f=P({setLiColor:a,divider:e,text:t,lang:c.lang,rate:c.rate});n.target.blur(),f&&T.error(f)},w=n=>{a(Y);let t="";const e="$*@",l=s.findIndex(o=>o.element===u),p=s.splice(l===-1?0:l);for(let o=0;o<p.length;o+=1){const{element:d,caption:v,lang:j}=p[o];t+=d+`@±@${j}`+v+e}const f=Ae({setLiColor:a,divider:e,text:t,lang:c.lang,rate:c.rate});n.target.blur(),f&&T.error(f)};return r.jsxs(be,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[r.jsx(R,{options:_,defaultValue:_.find(n=>n.value===(c==null?void 0:c.lang)),onChange:A,placeholder:"Language...",$ol:D,$b:I,$bh:V}),r.jsx(R,{options:z,defaultValue:z.find(n=>n.value==(c==null?void 0:c.rate)),onChange:x,placeholder:"Rate...",$ol:D,$b:I,$bh:V}),r.jsx(q,{onClick:m,$s:"m",$bs:Z,children:"play"}),r.jsx(Re,{}),r.jsx(q,{onClick:w,$s:"m",$bs:Z,children:"all"}),r.jsx(R,{options:_,defaultValue:_.find(n=>n.value===b.lang),onChange:i,$ol:D,$b:I,$bh:V}),r.jsx(R,{options:z,defaultValue:z.find(n=>n.value==b.rate),onChange:y,$ol:D,$b:I,$bh:V})]})};ce.propTypes={filtredElements:h.array,setLiColor:h.func};const{colors:k,shadows:ee,indents:le}=S,_e=F`
  margin-bottom: 7px;
  padding-block: ${le.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${le.xs};
  font-size: 22px;
`,ze=$.li`
  ${_e}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${k.accent};
    box-shadow: ${ee.back};
  }

  &:hover {
    border-color: ${k.border};
    box-shadow: ${ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ie=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Be}
  }
`,De=$.label`
  ${ie}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?k.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?k.yellow:k.border};
  }
  &:hover svg {
    stroke: ${k.placeholder};
  }
`,Ie=$.label`
  ${ie}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${k.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?k.border:"transparent"};
  }
  &:hover svg {
    border-color: ${k.placeholder};
    color: ${({$hovered:s})=>s?k.placeholder:"transparent"};
  }
`,W=F`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${k.black};

  & svg {
    transition: color 250ms;
    color: ${k.border};
  }
  &:hover,
  &:hover svg {
    color: ${k.placeholder};
  }
`,Ve=$.button`
  ${W}

  opacity: ${({$hovered:s})=>s?1:0};
`,te=$.button`
  ${W}

  opacity: 0;
`,{colors:B,indents:de}=S,pe=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Oe=$.div`
  ${pe}
`,He=$.form`
  ${pe}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,re=$.textarea`
  outline: none;
  border: 1px solid ${B.accent};
  border-radius: ${de.xs};
  resize: none;
`,Je=$.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    height: calc(100% - 8px);
    width: 1px;
    border: 1px solid ${B.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${B.placeholder};
  }
`,Pe=$.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ue=$.button`
  ${W}
`,Ge=$.button`
  ${W}
`,Ne=$.button`
  ${W}
`,se=$.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${de.xs};
  color: ${B.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${B.background};
  }
`,ue=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,qe=$.iframe`
  ${ue}

  height: 60px;
  border-radius: 30px;
`,Ke=$.audio`
  ${ue}
`,he=({el:s,sortByDate:a,setSortByDate:g,setLiColor:b})=>{const{activeCluster:c}=H(),{element:u,caption:A}=s,x=t=>{let e="";const l="$*@";u.trim().endsWith(".")||u.trim().endsWith("!")||u.trim().endsWith("?")||u.endsWith('"')?e=u.trim().replaceAll(",`",";").replaceAll(" `",` ${l}`).replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(":",`:${l}`).replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9.").replaceAll(`Ja,${l}`,"Ja,").replaceAll(`Ok,${l}`,"Ok,").replaceAll(`Nein,${l}`,"Nein,").replaceAll(`Schade,${l}`,"Schade,").replaceAll(`gut,${l}`,"gut,").replaceAll(`wichtig,${l}`,"wichtig,").replaceAll(`glaube,${l}`,"glaube,").replaceAll(`denke,${l}`,"denke,").replaceAll(`finde,${l}`,"finde,").replaceAll(`meine,${l}`,"meine,").replaceAll(`schlage vor,${l}`,"schlage vor,").replaceAll(`vermute,${l}`,"vermute,").replaceAll(`nehme an,${l}`,"nehme an,").replaceAll(`sein,${l}`,"sein,").replaceAll(`habe den Eindruck,${l}`,"habe den Eindruck,").replaceAll(`finde ich,${l}`,"finde ich,").replaceAll(`gefällt es,${l}`,"gefällt es,").replaceAll(`schon,${l}`,"schon,").replaceAll(`uper,${l}`,"uper,").replaceAll(`klar,${l}`,"klar,").replaceAll(`uper,${l}`,"uper,").replaceAll(`atürlich,${l}`,"atürlich,").replaceAll(`nicht,${l}`,"nicht,").replaceAll(`wäre es,${l}`,"wäre es,").replaceAll(`ist es,${l}`,"ist es,").replaceAll(`weißt,${l}`,"weißt,").replaceAll(`weißt du,${l}`,"weißt du,").replaceAll(`besser,${l}`,"besser,").replaceAll(`interessant,${l}`,"interessant,").replaceAll(`ist wichtig,${l}`,"ist wichtig,").replaceAll(`,${l} oder?`,", oder?").replaceAll(`,${l} bitte.`,", bitte.").replaceAll(`,${l} danke.`,", danke."):e=u.trim()+l;const p=P({setLiColor:b,divider:l,text:e,lang:c.lang,rate:c.rate});t.target.blur(),p&&T.error(p)},i=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const t=P({setLiColor:b,text:A,lang:s.lang,rate:s.rate});t&&T.error(t)},y=t=>{g(!a),a?T.success("Below is Recent"):T.success("Above is Recent"),t.stopImmediatePropagation()},m=A.endsWith("mp3"),w=!m&&A.startsWith("http"),n=!m&&!w;return r.jsxs(Oe,{children:[r.jsx(se,{onClick:x,children:u}),r.jsx(Je,{onClick:y}),m&&r.jsx(Ke,{controls:!0,src:X(A)}),w&&r.jsx(qe,{src:X(A)}),n&&r.jsx(se,{onClick:i,children:A})]})};he.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,$active:h.bool,$hovered:h.bool,setLiColor:h.func};const $e=({el:s,article:a,isForm:g,setIsForm:b})=>{const c=L(),{user:u}=oe(),{activeCluster:A}=H(),{_id:x,element:i,caption:y}=s,m=g+24,{register:w,watch:n,setValue:t,handleSubmit:e,setFocus:l}=Le({mode:"onBlur",defaultValues:{element:i,caption:y}});E.useEffect(()=>{l("element"),a&&i.trim().startsWith("der")?t("element",a+i.replace("der","").trim()+", "):a&&i.trim().startsWith("die")?t("element",a+i.replace("die","").trim()+", "):a&&i.trim().startsWith("das")?t("element",a+i.replace("das","").trim()+", "):a?t("element",a+i+", "):t("element",a+i)},[a,i,l,t]),E.useEffect(()=>{const o=async d=>{d.key==="+"&&(d.preventDefault(),await f(),e(p)()),d.key==="Enter"&&(d.preventDefault(),e(p)()),d.key==="Escape"&&b(!1)};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const p=o=>{const d=u.lang;let v=o.element.trim(),j=o.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes(" ·")&&(v=v.replaceAll(" ·",",")),j.endsWith(",")&&(j=j.substring(0,j.length-1)),c(U({_id:x,lang:d,element:v,caption:j})),b(!1)},f=async()=>{const o=n("element"),d={from:A.lang,to:u.lang},v=await ke(o,d);t("caption",v)};return r.jsxs(He,{onSubmit:e(p),children:[r.jsx(re,{...w("element"),style:{height:m}}),r.jsxs(Pe,{children:[r.jsx(Ue,{children:r.jsx(xe,{size:"16px"})}),r.jsx(Ge,{type:"button",onClick:()=>b(m),children:r.jsx(ve,{size:"16px"})}),r.jsx(Ne,{type:"button",onClick:f,children:r.jsx(Fe,{size:"16px"})})]}),r.jsx(re,{...w("caption"),style:{height:m}})]})};$e.propTypes={el:h.object,article:h.string,isForm:h.oneOfType([h.bool,h.number]),setIsForm:h.func};const me=({el:s,sortByDate:a,setSortByDate:g,liColor:b,setLiColor:c})=>{const u=L(),{elementTrash:A,activeElement:x}=O(),[i,y]=E.useState(!1),{_id:m,element:w,favorite:n,checked:t}=s,e=A.find(C=>C._id===m),l=w===x,[p,f]=E.useState("");E.useEffect(()=>{const C=document.getElementById("active-element");C?(()=>{C==null||C.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const o=()=>{u(U({_id:m,favorite:!n}))},d=()=>{u(U({_id:m,checked:!t}))},v=()=>u(Ce(s)),j=C=>{if(i)y(!1);else{const N=C.target.closest("div").clientHeight;y(N)}},fe=()=>{p===""&&f("der "),p==="der "&&f("die "),p==="die "&&f("das "),p==="das "&&f("")};return r.jsxs(ze,{id:l?"active-element":null,onClick:()=>u(ae(w)),liColor:b,children:[r.jsxs(G,{$h:"100%",$p:"0",$fd:"column",children:[r.jsxs(De,{$hovered:n,children:[r.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:o}),r.jsx(Se,{size:"20px"})]}),r.jsxs(Ie,{$hovered:t,children:[r.jsx("input",{type:"checkbox",name:"checked",checked:t,onChange:d}),r.jsx(ye,{size:"15px"})]})]}),i&&r.jsx($e,{el:s,article:p,isForm:i,setIsForm:y}),!i&&r.jsx(he,{el:s,sortByDate:a,setSortByDate:g,setLiColor:c}),r.jsxs(G,{$h:"100%",$p:"0",$fd:"column",children:[r.jsx(Ve,{$hovered:e,onClick:v,children:r.jsx(we,{size:"16px"})}),i&&r.jsx(te,{onClick:fe,children:r.jsx(Te,{size:"18px"})}),r.jsx(te,{onClick:j,children:r.jsx(je,{size:"15px"})})]})]})};me.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,liColor:h.string,setLiColor:h.func};const Me=$.ul`
  width: 100%;
  list-style: none;
`,{white:Qe}=S.colors,Xe=()=>{const s=L(),{activeCluster:a}=H(),{allElements:g,elementTrash:b,elementFilter:c}=O(),[u,A]=E.useState(Qe);let{elementSelect:x}=O();x=x||[];const[i,y]=E.useState(!1);E.useEffect(()=>{s(Ee())},[s]);const m=g.filter(t=>t.cluster===(a==null?void 0:a._id)).sort((t,e)=>t.createdAt.localeCompare(e.createdAt)),n=(()=>{const t=b.map(e=>e._id);return x.includes("trash")?m.filter(e=>t.includes(e._id)):m})().filter(({element:t,caption:e,favorite:l,checked:p})=>{const f=t.toLowerCase().replace("·","").includes(c)||t.toLowerCase().includes(c)||e.toLowerCase().includes(c),o=x.includes("favorite")?f&&l===!0:f;return x.some(d=>["checked","unchecked"].includes(d))?x.includes("checked")?o&&p===!0:o&&p===!1:o}).sort(i?(t,e)=>e.createdAt.localeCompare(t.createdAt):(t,e)=>t.createdAt.localeCompare(e.createdAt));return r.jsxs(Me,{children:[n.map(t=>r.jsx(me,{el:t,sortByDate:i,setSortByDate:y,liColor:u,setLiColor:A},t._id)),r.jsx(ce,{filtredElements:n,setLiColor:A})]})},{s:ne,m:Ye}=S.indents,sl=()=>r.jsx(G,{$p:`0 ${Ye} ${ne} ${ne}`,children:r.jsx(Xe,{})});export{sl as default};
