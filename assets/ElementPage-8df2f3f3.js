import{s as $,t as W,P as d,j as n,T as je,u as H,b as K,q,y as U,S as ve,U as _,K as N,w as ee,D as te,V as se,W as O,Q as B,X as Ce,n as F,Y as ne,r as E,Z as we,_ as Se,$ as P,J as ue,a0 as de,a1 as Ee,F as Y,C as Te,a2 as Be,A as We,z as Fe,a3 as Re}from"./index-eadb155c.js";import{T as Le}from"./index.esm-84e505e4.js";import{a as _e}from"./index.esm-f588b641.js";import{v as De,u as ze}from"./index.esm-002a5c35.js";import{S as Ie}from"./index.esm-ea05371a.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],z=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Q}=W,Ve=$.div`
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
`,he=({onClick:r})=>n.jsx(Ve,{onClick:r,children:n.jsx(je,{size:"26px"})});he.propTypes={onClick:d.func};const{background:X,backgroundHoverd:I,white:V,borderLight:M}=W.colors,{button:le}=W.shadows,me=({filtredElements:r,setLiColor:u})=>{const b=H(),{user:x}=K(),{activeCluster:p}=q(),{activeElement:A}=U(),w=e=>{if(!e.length)return;let s="",t=0;const o=e.reduce((a,m)=>(a[m.lang]||(a[m.lang]=0),a[m.lang]+=1,a),{});for(const a in o)o[a]>t&&(t=o[a],s=a);return s},g=r.length?w(r):x.lang,c=({value:e})=>{b(ee({_id:p._id,lang:e})).unwrap().then(s=>b(te(s.result.cluster)))},j=({value:e})=>{b(ee({_id:p._id,rate:e})).unwrap().then(s=>b(te(s.result.cluster)))},v=({value:e})=>{const s=new FormData;s.append("lang",e),b(se(s))},k=({value:e})=>{const s=new FormData;s.append("rate",e),b(se(s))},C=(e,s)=>e.replaceAll(",`",";").replaceAll(" `",`${s} `),h=({text:e,playList:s,divider:t})=>{let o="";for(let a=0;a<s.length;a+=1){let m=s[a][e];m.endsWith(".")||m.endsWith("!")||m.endsWith("?")||m.endsWith('"')?o+=C(m,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`${t}`,e==="caption"?`@±@${s[a].lang}${t}`:`${t}`):s[a].element.startsWith("[")||(e==="caption"&&(m=`${m}@±@${s[a].lang}`),o+=m.replaceAll(".",t)+t)}return o},y=e=>{u(X);const s="$*@",t=r.findIndex(m=>m.element===A),o=r.splice(t===-1?0:t),a=O({setLiColor:u,divider:s,text:h({text:"element",playList:o,divider:s}),lang:p.lang,rate:p.rate});e.target.blur(),a&&B.error(a)},i=e=>{const s="$*@";u(X);const t=r.findIndex(m=>m.element===A),o=r.splice(t===-1?0:t),a=O({setLiColor:u,divider:s,text:h({text:"caption",playList:o,divider:s}),lang:x.lang,rate:x.rate});e.target.blur(),a&&B.error(a)},l=e=>{u(X);let s="";const t="$*@",o=r.findIndex(T=>T.element===A),a=r.splice(o===-1?0:o);for(let T=0;T<a.length;T+=1){const{element:L,caption:J,lang:S}=a[T];L.startsWith("[")||(s+=C(L,"")+`@±@${S}`+J+t)}const m=Ce({setLiColor:u,divider:t,text:s,lang:p.lang,rate:x.rate});e.target.blur(),m&&B.error(m)};return n.jsxs(ve,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(_,{options:D,defaultValue:D.find(e=>e.value===(p==null?void 0:p.lang)),onChange:c,placeholder:"Language...",$ol:I,$b:V,$bh:M}),n.jsx(_,{options:z,defaultValue:z.find(e=>e.value==(p==null?void 0:p.rate)),onChange:j,placeholder:"Rate...",$ol:I,$b:V,$bh:M}),n.jsx(N,{onClick:y,$s:"m",$bs:le,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(he,{onClick:l}),n.jsx(N,{onClick:i,$s:"m",$bs:le,children:(g==null?void 0:g.at(0).toUpperCase())+(g==null?void 0:g.substring(1))}),n.jsx(_,{options:D,defaultValue:D.find(e=>e.value===x.lang),onChange:v,placeholder:"Language...",$ol:I,$b:V,$bh:M}),n.jsx(_,{options:z,defaultValue:z.find(e=>e.value==x.rate),onChange:k,placeholder:"Rate...",$ol:I,$b:V,$bh:M})]})};me.propTypes={filtredElements:d.array,setLiColor:d.func};const{colors:f,shadows:re,indents:oe}=W,Me=F`
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
`,ge=F`
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
  ${ge}

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
  ${ge}
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
`,R=F`
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
  ${R}

  opacity: ${({$hovered:r})=>r?1:0};
`,ae=$.button`
  ${R}

  opacity: 0;
`,{colors:G,indents:fe}=W,$e=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=$.div`
  ${$e}
`,Ke=$.form`
  ${$e}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ce=$.textarea`
  outline: none;
  border: 1px solid ${G.accent};
  border-radius: ${fe.xs};
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
  ${R}
`,Xe=$.button`
  ${R}
`,be=$.button`
  ${R}
`,ie=$.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${fe.xs};
  color: ${G.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,xe=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ye=$.iframe`
  ${xe}

  height: 60px;
  border-radius: 30px;
`,Ze=$.audio`
  ${xe}
`,ke=({el:r,sortByDate:u,setSortByDate:b,setLiColor:x})=>{const{user:p}=K(),{activeCluster:A}=q(),{element:w,caption:g}=r,c="$*@",j=(l,e)=>{let s="";return e?(l.trim().endsWith(".")||l.trim().endsWith("!")||l.trim().endsWith("?")||l.endsWith('"')?s=l.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):s=l.trim()+e,s.includes("[")?s.substring(0,s.indexOf("[")):s):l},v=l=>{const e=O({setLiColor:x,divider:c,text:j(w,c),lang:A.lang,rate:A.rate});l.target.blur(),e&&B.error(e)},k=l=>{const e=O({setLiColor:x,divider:c,text:j(g,c),lang:r.lang,rate:p.rate});l.target.blur(),e&&B.error(e)},C=l=>{b(!u),u?B.success("Below is Recent"):B.success("Above is Recent"),l.stopImmediatePropagation()},h=g.endsWith("mp3"),y=!h&&g.startsWith("http"),i=!h&&!y;return n.jsxs(He,{children:[n.jsx(ie,{onClick:v,children:w}),n.jsx(qe,{onClick:C}),h&&n.jsx(Ze,{controls:!0,src:ne(g)}),y&&n.jsx(Ye,{src:ne(g)}),i&&n.jsx(ie,{onClick:k,children:g})]})};ke.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const Ae=({el:r,article:u,isForm:b,setIsForm:x})=>{const p=H(),{user:A}=K(),{activeCluster:w}=q(),{_id:g,element:c,caption:j}=r,v=b+24,{register:k,watch:C,setValue:h,handleSubmit:y,setFocus:i}=ze({mode:"onBlur",defaultValues:{element:c,caption:j}});E.useEffect(()=>{i("element"),u&&c.trim().startsWith("der")?h("element",u+c.replace("der","").trim()+", "):u&&c.trim().startsWith("die")?h("element",u+c.replace("die","").trim()+", "):u&&c.trim().startsWith("das")?h("element",u+c.replace("das","").trim()+", "):u?h("element",u+c+", "):h("element",u+c)},[u,c,i,h]),E.useEffect(()=>{const s=async t=>{t.key==="+"&&(t.preventDefault(),await e(),y(l)()),t.key==="Enter"&&(t.preventDefault(),y(l)()),t.key==="Escape"&&x(!1)};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[]);const l=s=>{const t=A.lang;let o=s.element.split(/\s+/).join(" ").trim(),a=s.caption.trim();o.endsWith(",")&&(o=o.substring(0,o.length-1)),o.includes("·")&&(o=o.replaceAll(" ·",",").replaceAll("·",",")),a.endsWith(",")&&(a=a.substring(0,a.length-1)),p(P({_id:g,lang:t,element:o,caption:a})).then(p(ue())),x(!1)},e=async()=>{const s=C("element"),t={from:w.lang,to:A.lang},o=await de(s,t);h("caption",o)};return n.jsxs(Ke,{onSubmit:y(l),children:[n.jsx(ce,{...k("element"),style:{height:v}}),n.jsxs(Je,{children:[n.jsx(Qe,{children:n.jsx(we,{size:"16px"})}),n.jsx(Xe,{type:"button",onClick:()=>x(v),children:n.jsx(Se,{size:"16px"})}),n.jsx(be,{type:"button",onClick:e,children:n.jsx(Ie,{size:"16px"})})]}),n.jsx(ce,{...k("caption"),style:{height:v}})]})};Ae.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const ye=({el:r,index:u,length:b,sortByDate:x,setSortByDate:p,translateAll:A,liColor:w,setLiColor:g})=>{const c=H(),{elementTrash:j,activeElement:v}=U(),[k,C]=E.useState(!1),{_id:h,element:y,favorite:i,checked:l}=r,e=j.find(S=>S._id===h),s=y===v,[t,o]=E.useState("");E.useEffect(()=>{const S=document.getElementById("active-element");(()=>{S==null||S.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const a=()=>{c(P({_id:h,favorite:!i}))},m=()=>{c(P({_id:h,checked:!l}))},T=()=>c(Re(r)),L=S=>{if(k)C(!1);else{const Z=S.target.closest("div").clientHeight;C(Z)}},J=()=>{t===""&&o("der "),t==="der "&&o("die "),t==="die "&&o("das "),t==="das "&&o("")};return n.jsxs(Ue,{id:s?"active-element":null,onClick:()=>c(Ee(y)),liColor:w,children:[n.jsxs(Y,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Oe,{$hovered:i,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:i,onChange:a}),n.jsx(Le,{size:"20px"})]}),n.jsxs(Pe,{$hovered:l,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:m}),n.jsx(Te,{size:"15px"})]}),k&&b===u+1&&n.jsx(be,{onClick:A,children:n.jsx(Be,{size:"16px"})})]}),k&&n.jsx(Ae,{el:r,article:t,isForm:k,setIsForm:C}),!k&&n.jsx(ke,{el:r,sortByDate:x,setSortByDate:p,setLiColor:g}),n.jsxs(Y,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ge,{$hovered:e,onClick:T,children:n.jsx(We,{size:"16px"})}),k&&n.jsx(ae,{onClick:J,children:n.jsx(_e,{size:"18px"})}),n.jsx(ae,{onClick:L,children:n.jsx(Fe,{size:"15px"})})]})]})};ye.propTypes={el:d.object,index:d.string,length:d.string,sortByDate:d.bool,setSortByDate:d.func,translateAll:d.func,liColor:d.string,setLiColor:d.func};const Ne=$.ul`
  width: 100%;
  list-style: none;
`,{white:et}=W.colors,tt=()=>{const r=H(),{user:u}=K(),{activeCluster:b}=q(),{allElements:x,elementTrash:p,elementFilter:A}=U(),[w,g]=E.useState(et);let{elementSelect:c}=U();c=c||[];const[j,v]=E.useState(!1);E.useEffect(()=>{r(ue())},[r]);const k=x.filter(i=>i.cluster===(b==null?void 0:b._id)).sort((i,l)=>i.createdAt.localeCompare(l.createdAt)),h=(()=>{const i=p.map(l=>l._id);return c.includes("trash")?k.filter(l=>i.includes(l._id)):k})().filter(({element:i,caption:l,favorite:e,checked:s})=>{const t=i.toLowerCase().replace("·","").includes(A)||i.toLowerCase().includes(A)||l.toLowerCase().includes(A),o=c.includes("favorite")?t&&e===!0:t;return c.some(a=>["checked","unchecked"].includes(a))?c.includes("checked")?o&&s===!0:o&&s===!1:o}).sort(j?(i,l)=>l.createdAt.localeCompare(i.createdAt):(i,l)=>i.createdAt.localeCompare(l.createdAt)),y=async()=>{const i=u.lang;let l=0;await h.forEach(async e=>{if(l>1)return;const{_id:s,element:t}=e;if(!t.startsWith("[")||i!==e.lang){const o={from:b.lang,to:i},a=await de(t,o);r(P({_id:s,lang:i,caption:a})),l=l+1}})};return n.jsxs(Ne,{children:[h.map((i,l,e)=>n.jsx(ye,{el:i,index:l,length:e.length,sortByDate:j,setSortByDate:v,translateAll:y,liColor:w,setLiColor:g},i._id)),n.jsx(me,{filtredElements:h,setLiColor:g})]})},{s:pe,m:st}=W.indents,ct=()=>n.jsx(Y,{$p:`0 ${st} ${pe} ${pe}`,children:n.jsx(tt,{})});export{ct as default};
