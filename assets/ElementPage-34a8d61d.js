import{s as $,t as S,u as B,j as s,T as be,U as oe,P as h,b as ae,q as P,y as V,S as xe,V as F,K as M,w as J,D as Q,W as X,X as G,Q as T,Y as ge,n as L,Z as Y,r as w,_ as ve,$ as ke,a0 as H,a1 as ye,F as q,C as Ae,A as je,z as Ce,a2 as we,J as Ee}from"./index-5bf927e1.js";import{T as Se}from"./index.esm-a1121b23.js";import{a as Te}from"./index.esm-8a777493.js";import{v as Be,u as Le}from"./index.esm-6bd9a03b.js";import{S as We}from"./index.esm-9df3c1d1.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],_=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=S,Fe=$.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${U.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${U.placeholder};
    /* stroke: ${({$colored:l})=>l&&U.yellow}; */

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
`,Re=()=>{const l=B(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(v=>v.removeAttribute("style")),l(oe(null))};return s.jsx(Fe,{onClick:o,children:s.jsx(be,{size:"26px"})})},{background:Z,backgroundHoverd:z,white:D,borderLight:I}=S.colors,{button:N}=S.shadows,ce=({filtredElements:l,setLiColor:o})=>{const g=B(),{user:v}=ae(),{activeCluster:c}=P(),{activeElement:u}=V(),m=({value:n})=>{g(J({_id:c._id,lang:n})).unwrap().then(t=>g(Q(t.result.cluster)))},k=({value:n})=>{g(J({_id:c._id,rate:n})).unwrap().then(t=>g(Q(t.result.cluster)))},i=({value:n})=>{const t=new FormData;t.append("lang",n),g(X(t))},A=({value:n})=>{const t=new FormData;t.append("rate",n),g(X(t))},b=n=>{o(Z);let t="";const e="$*@",r=l.findIndex(a=>a.element===u),p=l.splice(r===-1?0:r);for(let a=0;a<p.length;a+=1){const{element:d}=p[a];d.endsWith(".")||d.endsWith("!")||d.endsWith("?")||d.endsWith('"')?t+=d.replaceAll(",`",";").replaceAll(" `",` ${e}`).replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`,${e} oder?`,", oder?").replaceAll(`,${e} bitte.`,", bitte.").replaceAll(`,${e} danke.`,", danke."):d.startsWith("[")||(t+=d.replaceAll(".",e)+e)}const x=G({setLiColor:o,divider:e,text:t,lang:c.lang,rate:c.rate});n.target.blur(),x&&T.error(x)},j=n=>{o(Z);let t="";const e="$*@",r=l.findIndex(a=>a.element===u),p=l.splice(r===-1?0:r);for(let a=0;a<p.length;a+=1){const{element:d,caption:y,lang:C}=p[a];t+=d+`@±@${C}`+y+e}const x=ge({setLiColor:o,divider:e,text:t,lang:c.lang,rate:c.rate});n.target.blur(),x&&T.error(x)};return s.jsxs(xe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[s.jsx(F,{options:R,defaultValue:R.find(n=>n.value===(c==null?void 0:c.lang)),onChange:m,placeholder:"Language...",$ol:z,$b:D,$bh:I}),s.jsx(F,{options:_,defaultValue:_.find(n=>n.value==(c==null?void 0:c.rate)),onChange:k,placeholder:"Rate...",$ol:z,$b:D,$bh:I}),s.jsx(M,{onClick:b,$s:"m",$bs:N,children:"play"}),s.jsx(Re,{}),s.jsx(M,{onClick:j,$s:"m",$bs:N,children:"all"}),s.jsx(F,{options:R,defaultValue:R.find(n=>n.value===v.lang),onChange:i,$ol:z,$b:D,$bh:I}),s.jsx(F,{options:_,defaultValue:_.find(n=>n.value==v.rate),onChange:A,$ol:z,$b:D,$bh:I})]})};ce.propTypes={filtredElements:h.array,setLiColor:h.func};const{colors:f,shadows:ee,indents:te}=S,_e=L`
  margin-bottom: 7px;
  padding-block: ${te.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${te.xs};
  font-size: 22px;
`,ze=$.li`
  ${_e}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${f.border};
    background-color: ${f.background};
    box-shadow: ${ee.back};

    &:hover {
      border-color: ${f.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${f.smokeBlack};
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${f.smokeBlack};
    }
  }

  &:hover {
    border-color: ${f.accent};
    box-shadow: ${ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ie=L`
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
    color: ${({$hovered:l})=>l?f.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,Ie=$.label`
  ${ie}
  opacity: ${({$hovered:l})=>l?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${f.border};
    border-radius: 50%;
    color: ${({$hovered:l})=>l?f.border:"transparent"};
  }
  &:hover svg {
    border-color: ${f.placeholder};
    color: ${({$hovered:l})=>l?f.placeholder:"transparent"};
  }
`,W=L`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${f.black};

  & svg {
    transition: color 250ms;
    color: ${f.border};
  }
  &:hover,
  &:hover svg {
    color: ${f.placeholder};
  }
`,Ve=$.button`
  ${W}

  opacity: ${({$hovered:l})=>l?1:0};
`,se=$.button`
  ${W}

  opacity: 0;
`,{colors:O,indents:de}=S,pe=L`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Oe=$.div`
  ${pe}
`,Pe=$.form`
  ${pe}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,le=$.textarea`
  outline: none;
  border: 1px solid ${O.accent};
  border-radius: ${de.xs};
  resize: none;
`,Ue=$.div`
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
    border: 1px solid ${O.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${O.placeholder};
  }
`,Ge=$.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,He=$.button`
  ${W}
`,qe=$.button`
  ${W}
`,Ke=$.button`
  ${W}
`,re=$.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${de.xs};
  color: ${O.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,ue=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Me=$.iframe`
  ${ue}

  height: 60px;
  border-radius: 30px;
`,Je=$.audio`
  ${ue}
`,he=({el:l,sortByDate:o,setSortByDate:g,setLiColor:v})=>{const{activeCluster:c}=P(),{element:u,caption:m}=l,k=t=>{let e="";const r="$*@";u.trim().endsWith(".")||u.trim().endsWith("!")||u.trim().endsWith("?")||u.endsWith('"')?e=u.trim().replaceAll(",`",";").replaceAll(" `",` ${r}`).replaceAll("...",`__${r}`).replaceAll(".",`.${r}`).replaceAll(",",`,${r}`).replaceAll("!",`!${r}`).replaceAll("?",`?${r}`).replaceAll(":",`:${r}`).replaceAll(`0.${r}`,"0.").replaceAll(`1.${r}`,"1.").replaceAll(`2.${r}`,"2.").replaceAll(`3.${r}`,"3.").replaceAll(`4.${r}`,"4.").replaceAll(`5.${r}`,"5.").replaceAll(`6.${r}`,"6.").replaceAll(`7.${r}`,"7.").replaceAll(`8.${r}`,"8.").replaceAll(`9.${r}`,"9.").replaceAll(`,${r} oder?`,", oder?").replaceAll(`,${r} bitte.`,", bitte.").replaceAll(`,${r} danke.`,", danke."):e=u.trim()+r;const p=G({setLiColor:v,divider:r,text:e,lang:c.lang,rate:c.rate});t.target.blur(),p&&T.error(p)},i=()=>{const t=m.includes("(")?m.substring(0,m.indexOf("(")):m,e=G({setLiColor:v,text:t,lang:l.lang,rate:l.rate});e&&T.error(e)},A=t=>{g(!o),o?T.success("Below is Recent"):T.success("Above is Recent"),t.stopImmediatePropagation()},b=m.endsWith("mp3"),j=!b&&m.startsWith("http"),n=!b&&!j;return s.jsxs(Oe,{children:[s.jsx(re,{onClick:k,children:u}),s.jsx(Ue,{onClick:A}),b&&s.jsx(Je,{controls:!0,src:Y(m)}),j&&s.jsx(Me,{src:Y(m)}),n&&s.jsx(re,{onClick:i,children:m})]})};he.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,$active:h.bool,$hovered:h.bool,setLiColor:h.func};const me=({el:l,article:o,isForm:g,setIsForm:v})=>{const c=B(),{user:u}=ae(),{activeCluster:m}=P(),{_id:k,element:i,caption:A}=l,b=g+24,{register:j,watch:n,setValue:t,handleSubmit:e,setFocus:r}=Le({mode:"onBlur",defaultValues:{element:i,caption:A}});w.useEffect(()=>{r("element"),o&&i.trim().startsWith("der")?t("element",o+i.replace("der","").trim()+", "):o&&i.trim().startsWith("die")?t("element",o+i.replace("die","").trim()+", "):o&&i.trim().startsWith("das")?t("element",o+i.replace("das","").trim()+", "):o?t("element",o+i+", "):t("element",o+i)},[o,i,r,t]),w.useEffect(()=>{const a=async d=>{d.key==="+"&&(d.preventDefault(),await x(),e(p)()),d.key==="Enter"&&(d.preventDefault(),e(p)()),d.key==="Escape"&&v(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const p=a=>{const d=u.lang;let y=a.element.trim(),C=a.caption.trim();y.endsWith(",")&&(y=y.substring(0,y.length-1)),y.includes(" ·")&&(y=y.replaceAll(" ·",",")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),c(H({_id:k,lang:d,element:y,caption:C})),v(!1)},x=async()=>{const a=n("element"),d={from:m.lang,to:u.lang},y=await ye(a,d);t("caption",y)};return s.jsxs(Pe,{onSubmit:e(p),children:[s.jsx(le,{...j("element"),style:{height:b}}),s.jsxs(Ge,{children:[s.jsx(He,{children:s.jsx(ve,{size:"16px"})}),s.jsx(qe,{type:"button",onClick:()=>v(b),children:s.jsx(ke,{size:"16px"})}),s.jsx(Ke,{type:"button",onClick:x,children:s.jsx(We,{size:"16px"})})]}),s.jsx(le,{...j("caption"),style:{height:b}})]})};me.propTypes={el:h.object,article:h.string,isForm:h.oneOfType([h.bool,h.number]),setIsForm:h.func};const $e=({el:l,sortByDate:o,setSortByDate:g,liColor:v,setLiColor:c})=>{const u=B(),{elementTrash:m,activeElement:k}=V(),[i,A]=w.useState(!1),{_id:b,element:j,favorite:n,checked:t}=l,e=m.find(E=>E._id===b),r=j===k,[p,x]=w.useState("");w.useEffect(()=>{const E=document.getElementById("active-element");(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const a=()=>{u(H({_id:b,favorite:!n}))},d=()=>{u(H({_id:b,checked:!t}))},y=()=>u(we(l)),C=E=>{if(i)A(!1);else{const K=E.target.closest("div").clientHeight;A(K)}},fe=()=>{p===""&&x("der "),p==="der "&&x("die "),p==="die "&&x("das "),p==="das "&&x("")};return s.jsxs(ze,{id:r?"active-element":null,onClick:()=>u(oe(j)),liColor:v,children:[s.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(De,{$hovered:n,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:a}),s.jsx(Se,{size:"20px"})]}),s.jsxs(Ie,{$hovered:t,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:t,onChange:d}),s.jsx(Ae,{size:"15px"})]})]}),i&&s.jsx(me,{el:l,article:p,isForm:i,setIsForm:A}),!i&&s.jsx(he,{el:l,sortByDate:o,setSortByDate:g,setLiColor:c}),s.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(Ve,{$hovered:e,onClick:y,children:s.jsx(je,{size:"16px"})}),i&&s.jsx(se,{onClick:fe,children:s.jsx(Te,{size:"18px"})}),s.jsx(se,{onClick:C,children:s.jsx(Ce,{size:"15px"})})]})]})};$e.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,liColor:h.string,setLiColor:h.func};const Qe=$.ul`
  width: 100%;
  list-style: none;
`,{white:Xe}=S.colors,Ye=()=>{const l=B(),{activeCluster:o}=P(),{allElements:g,elementTrash:v,elementFilter:c}=V(),[u,m]=w.useState(Xe);let{elementSelect:k}=V();k=k||[];const[i,A]=w.useState(!1);w.useEffect(()=>{l(Ee())},[l]);const b=g.filter(t=>t.cluster===(o==null?void 0:o._id)).sort((t,e)=>t.createdAt.localeCompare(e.createdAt)),n=(()=>{const t=v.map(e=>e._id);return k.includes("trash")?b.filter(e=>t.includes(e._id)):b})().filter(({element:t,caption:e,favorite:r,checked:p})=>{const x=t.toLowerCase().replace("·","").includes(c)||t.toLowerCase().includes(c)||e.toLowerCase().includes(c),a=k.includes("favorite")?x&&r===!0:x;return k.some(d=>["checked","unchecked"].includes(d))?k.includes("checked")?a&&p===!0:a&&p===!1:a}).sort(i?(t,e)=>e.createdAt.localeCompare(t.createdAt):(t,e)=>t.createdAt.localeCompare(e.createdAt));return s.jsxs(Qe,{children:[n.map(t=>s.jsx($e,{el:t,sortByDate:i,setSortByDate:A,liColor:u,setLiColor:m},t._id)),s.jsx(ce,{filtredElements:n,setLiColor:m})]})},{s:ne,m:Ze}=S.indents,rt=()=>s.jsx(q,{$p:`0 ${Ze} ${ne} ${ne}`,children:s.jsx(Ye,{})});export{rt as default};
