import{s as $,t as W,P as d,j as n,T as Ae,u as H,b as K,q,y as U,S as je,U as _,K as N,w as ee,D as te,V as se,W as O,Q as B,X as ve,n as F,Y as ne,r as T,Z as Ce,_ as we,$ as P,a0 as ue,a1 as Se,F as Y,C as Ee,a2 as Te,A as Be,z as We,a3 as Fe,J as Le}from"./index-6a684afb.js";import{T as Re}from"./index.esm-2f834752.js";import{a as _e}from"./index.esm-19ec081d.js";import{v as De,u as ze}from"./index.esm-f95e74db.js";import{S as Ie}from"./index.esm-819c8b9d.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],z=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Q}=W,Ve=$.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${Q.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${Q.placeholder};
    /* stroke: ${({$colored:r})=>r&&Q.yellow}; */
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
`,de=({onClick:r})=>n.jsx(Ve,{onClick:r,children:n.jsx(Ae,{size:"26px"})});de.propTypes={onClick:d.func};const{background:X,backgroundHoverd:I,white:V,borderLight:M}=W.colors,{button:le}=W.shadows,he=({filtredElements:r,setLiColor:u})=>{const b=H(),{user:x}=K(),{activeCluster:p}=q(),{activeElement:y}=U(),w=e=>{if(!e.length)return;let s="",t=0;const o=e.reduce((a,g)=>(a[g.lang]||(a[g.lang]=0),a[g.lang]+=1,a),{});for(const a in o)o[a]>t&&(t=o[a],s=a);return s},m=r.length?w(r):x.lang,c=({value:e})=>{b(ee({_id:p._id,lang:e})).unwrap().then(s=>b(te(s.result.cluster)))},j=({value:e})=>{b(ee({_id:p._id,rate:e})).unwrap().then(s=>b(te(s.result.cluster)))},v=({value:e})=>{const s=new FormData;s.append("lang",e),b(se(s))},k=({value:e})=>{const s=new FormData;s.append("rate",e),b(se(s))},C=(e,s)=>e.replaceAll(",`",";").replaceAll(" `",`${s} `),h=({text:e,playList:s,divider:t})=>{let o="";for(let a=0;a<s.length;a+=1){const g=s[a][e];s[a].lang&&(o+=`${s[a].lang}@±@`),g.endsWith(".")||g.endsWith("!")||g.endsWith("?")||g.endsWith('"')?o+=C(g,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9."):s[a].element.startsWith("[")||(o+=g.replaceAll(".",t)+t)}return o},A=e=>{u(X);const s="$*@",t=r.findIndex(g=>g.element===y),o=r.splice(t===-1?0:t),a=O({setLiColor:u,divider:s,text:h({text:"element",playList:o,divider:s}),lang:p.lang,rate:p.rate});e.target.blur(),a&&B.error(a)},i=e=>{const s="$*@";u(X);const t=r.findIndex(g=>g.element===y),o=r.splice(t===-1?0:t),a=O({setLiColor:u,divider:s,text:h({text:"caption",playList:o,divider:s}),lang:x.lang,rate:x.rate});e.target.blur(),a&&B.error(a)},l=e=>{u(X);let s="";const t="$*@",o=r.findIndex(E=>E.element===y),a=r.splice(o===-1?0:o);for(let E=0;E<a.length;E+=1){const{element:R,caption:J,lang:S}=a[E];R.startsWith("[")||(s+=C(R,"")+`@±@${S}`+J+t)}const g=ve({setLiColor:u,divider:t,text:s,lang:p.lang,rate:x.rate});e.target.blur(),g&&B.error(g)};return n.jsxs(je,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(_,{options:D,defaultValue:D.find(e=>e.value===(p==null?void 0:p.lang)),onChange:c,placeholder:"Language...",$ol:I,$b:V,$bh:M}),n.jsx(_,{options:z,defaultValue:z.find(e=>e.value===(p==null?void 0:p.rate)),onChange:j,placeholder:"Rate...",$ol:I,$b:V,$bh:M}),n.jsx(N,{onClick:A,$s:"m",$bs:le,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(de,{onClick:l}),n.jsx(N,{onClick:i,$s:"m",$bs:le,children:(m==null?void 0:m.at(0).toUpperCase())+(m==null?void 0:m.substring(1))}),n.jsx(_,{options:D,defaultValue:D.find(e=>e.value===x.lang),onChange:v,$ol:I,$b:V,$bh:M}),n.jsx(_,{options:z,defaultValue:z.find(e=>e.value===x.rate),onChange:k,$ol:I,$b:V,$bh:M})]})};he.propTypes={filtredElements:d.array,setLiColor:d.func};const{colors:f,shadows:re,indents:oe}=W,Me=F`
  margin-bottom: 7px;
  padding-block: ${oe.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:r})=>r};
  border-radius: ${oe.xs};
  font-size: 22px;
`,Ue=$.li`
  ${Me}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${f.border};
    background-color: ${f.background};
    box-shadow: ${re.back};

    &:hover {
      border-color: ${f.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${f.smokeBlack};
      &:hover {
        color: ${f.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${f.hovered};
    }
  }

  &:hover {
    border-color: ${f.accent};
    box-shadow: ${re.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,me=F`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${De}
  }
`,Oe=$.label`
  ${me}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:r})=>r?f.yellow:"transparent"};
    stroke: ${({$hovered:r})=>r?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,Pe=$.label`
  ${me}
  opacity: ${({$hovered:r})=>r?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${f.border};
    border-radius: 50%;
    color: ${({$hovered:r})=>r?f.border:"transparent"};
  }
  &:hover svg {
    border-color: ${f.placeholder};
    color: ${({$hovered:r})=>r?f.placeholder:"transparent"};
  }
`,L=F`
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
`,Ge=$.button`
  ${L}

  opacity: ${({$hovered:r})=>r?1:0};
`,ae=$.button`
  ${L}

  opacity: 0;
`,{colors:G,indents:ge}=W,fe=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=$.div`
  ${fe}
`,Ke=$.form`
  ${fe}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ce=$.textarea`
  outline: none;
  border: 1px solid ${G.accent};
  border-radius: ${ge.xs};
  resize: none;
`,qe=$.div`
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
    border: 1px solid ${G.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${G.placeholder};
  }
`,Je=$.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Qe=$.button`
  ${L}
`,Xe=$.button`
  ${L}
`,$e=$.button`
  ${L}
`,ie=$.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ge.xs};
  color: ${G.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,be=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ye=$.iframe`
  ${be}

  height: 60px;
  border-radius: 30px;
`,Ze=$.audio`
  ${be}
`,xe=({el:r,sortByDate:u,setSortByDate:b,setLiColor:x})=>{const{user:p}=K(),{activeCluster:y}=q(),{element:w,caption:m}=r,c="$*@",j=(l,e)=>{let s="";return e?(l.trim().endsWith(".")||l.trim().endsWith("!")||l.trim().endsWith("?")||l.endsWith('"')?s=l.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):s=l.trim()+e,s.includes("[")?s.substring(0,s.indexOf("[")):s):l},v=l=>{const e=O({setLiColor:x,divider:c,text:j(w,c),lang:y.lang,rate:y.rate});l.target.blur(),e&&B.error(e)},k=l=>{const e=O({setLiColor:x,divider:c,text:j(m,c),lang:r.lang,rate:p.rate});l.target.blur(),e&&B.error(e)},C=l=>{b(!u),u?B.success("Below is Recent"):B.success("Above is Recent"),l.stopImmediatePropagation()},h=m.endsWith("mp3"),A=!h&&m.startsWith("http"),i=!h&&!A;return n.jsxs(He,{children:[n.jsx(ie,{onClick:v,children:w}),n.jsx(qe,{onClick:C}),h&&n.jsx(Ze,{controls:!0,src:ne(m)}),A&&n.jsx(Ye,{src:ne(m)}),i&&n.jsx(ie,{onClick:k,children:m})]})};xe.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const ke=({el:r,article:u,isForm:b,setIsForm:x})=>{const p=H(),{user:y}=K(),{activeCluster:w}=q(),{_id:m,element:c,caption:j}=r,v=b+24,{register:k,watch:C,setValue:h,handleSubmit:A,setFocus:i}=ze({mode:"onBlur",defaultValues:{element:c,caption:j}});T.useEffect(()=>{i("element"),u&&c.trim().startsWith("der")?h("element",u+c.replace("der","").trim()+", "):u&&c.trim().startsWith("die")?h("element",u+c.replace("die","").trim()+", "):u&&c.trim().startsWith("das")?h("element",u+c.replace("das","").trim()+", "):u?h("element",u+c+", "):h("element",u+c)},[u,c,i,h]),T.useEffect(()=>{const s=async t=>{t.key==="+"&&(t.preventDefault(),await e(),A(l)()),t.key==="Enter"&&(t.preventDefault(),A(l)()),t.key==="Escape"&&x(!1)};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[]);const l=s=>{const t=y.lang;let o=s.element.split(/\s+/).join(" ").trim(),a=s.caption.trim();o.endsWith(",")&&(o=o.substring(0,o.length-1)),o.includes(" ·")&&(o=o.replaceAll(" ·",",")),a.endsWith(",")&&(a=a.substring(0,a.length-1)),p(P({_id:m,lang:t,element:o,caption:a})),x(!1)},e=async()=>{const s=C("element"),t={from:w.lang,to:y.lang},o=await ue(s,t);h("caption",o)};return n.jsxs(Ke,{onSubmit:A(l),children:[n.jsx(ce,{...k("element"),style:{height:v}}),n.jsxs(Je,{children:[n.jsx(Qe,{children:n.jsx(Ce,{size:"16px"})}),n.jsx(Xe,{type:"button",onClick:()=>x(v),children:n.jsx(we,{size:"16px"})}),n.jsx($e,{type:"button",onClick:e,children:n.jsx(Ie,{size:"16px"})})]}),n.jsx(ce,{...k("caption"),style:{height:v}})]})};ke.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const ye=({el:r,index:u,length:b,sortByDate:x,setSortByDate:p,translateAll:y,liColor:w,setLiColor:m})=>{const c=H(),{elementTrash:j,activeElement:v}=U(),[k,C]=T.useState(!1),{_id:h,element:A,favorite:i,checked:l}=r,e=j.find(S=>S._id===h),s=A===v,[t,o]=T.useState("");T.useEffect(()=>{const S=document.getElementById("active-element");(()=>{S==null||S.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const a=()=>{c(P({_id:h,favorite:!i}))},g=()=>{c(P({_id:h,checked:!l}))},E=()=>c(Fe(r)),R=S=>{if(k)C(!1);else{const Z=S.target.closest("div").clientHeight;C(Z)}},J=()=>{t===""&&o("der "),t==="der "&&o("die "),t==="die "&&o("das "),t==="das "&&o("")};return n.jsxs(Ue,{id:s?"active-element":null,onClick:()=>c(Se(A)),liColor:w,children:[n.jsxs(Y,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Oe,{$hovered:i,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:i,onChange:a}),n.jsx(Re,{size:"20px"})]}),n.jsxs(Pe,{$hovered:l,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:g}),n.jsx(Ee,{size:"15px"})]}),k&&b===u+1&&n.jsx($e,{onClick:y,children:n.jsx(Te,{size:"16px"})})]}),k&&n.jsx(ke,{el:r,article:t,isForm:k,setIsForm:C}),!k&&n.jsx(xe,{el:r,sortByDate:x,setSortByDate:p,setLiColor:m}),n.jsxs(Y,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ge,{$hovered:e,onClick:E,children:n.jsx(Be,{size:"16px"})}),k&&n.jsx(ae,{onClick:J,children:n.jsx(_e,{size:"18px"})}),n.jsx(ae,{onClick:R,children:n.jsx(We,{size:"15px"})})]})]})};ye.propTypes={el:d.object,index:d.string,length:d.string,sortByDate:d.bool,setSortByDate:d.func,translateAll:d.func,liColor:d.string,setLiColor:d.func};const Ne=$.ul`
  width: 100%;
  list-style: none;
`,{white:et}=W.colors,tt=()=>{const r=H(),{user:u}=K(),{activeCluster:b}=q(),{allElements:x,elementTrash:p,elementFilter:y}=U(),[w,m]=T.useState(et);let{elementSelect:c}=U();c=c||[];const[j,v]=T.useState(!1);T.useEffect(()=>{r(Le())},[r]);const k=x.filter(i=>i.cluster===(b==null?void 0:b._id)).sort((i,l)=>i.createdAt.localeCompare(l.createdAt)),h=(()=>{const i=p.map(l=>l._id);return c.includes("trash")?k.filter(l=>i.includes(l._id)):k})().filter(({element:i,caption:l,favorite:e,checked:s})=>{const t=i.toLowerCase().replace("·","").includes(y)||i.toLowerCase().includes(y)||l.toLowerCase().includes(y),o=c.includes("favorite")?t&&e===!0:t;return c.some(a=>["checked","unchecked"].includes(a))?c.includes("checked")?o&&s===!0:o&&s===!1:o}).sort(j?(i,l)=>l.createdAt.localeCompare(i.createdAt):(i,l)=>i.createdAt.localeCompare(l.createdAt)),A=async()=>{const i=u.lang;let l=0;await h.forEach(async e=>{if(l>1)return;const{_id:s,element:t}=e;if(!t.startsWith("[")||i!==e.lang){const o={from:b.lang,to:i},a=await ue(t,o);r(P({_id:s,lang:i,caption:a})),l=l+1}})};return n.jsxs(Ne,{children:[h.map((i,l,e)=>n.jsx(ye,{el:i,index:l,length:e.length,sortByDate:j,setSortByDate:v,translateAll:A,liColor:w,setLiColor:m},i._id)),n.jsx(he,{filtredElements:h,setLiColor:m})]})},{s:pe,m:st}=W.indents,ct=()=>n.jsx(Y,{$p:`0 ${st} ${pe} ${pe}`,children:n.jsx(tt,{})});export{ct as default};
