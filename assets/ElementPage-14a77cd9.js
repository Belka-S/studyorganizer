import{s as $,t as B,P as d,j as n,U as Ce,u as K,b as q,q as _,y as O,T as we,V as D,N as te,w as J,D as se,W as ne,X as P,Q as T,Y as Ee,n as F,Z as le,r as E,_ as Se,$ as Te,a0 as G,K as de,a1 as he,F as ee,C as Be,a2 as We,A as _e,z as Fe,a3 as Re,E as Le}from"./index-51b0fb92.js";import{T as De}from"./index.esm-576512dc.js";import{a as ze}from"./index.esm-5bcc6dbf.js";import{v as Ie,u as Ve}from"./index.esm-f7fdefc8.js";import{S as Me}from"./index.esm-da7eb285.js";const z=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Y}=B,Ue=$.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${Y.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${Y.placeholder};
    /* stroke: ${({$colored:r})=>r&&Y.yellow}; */
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
`,me=({onClick:r})=>n.jsx(Ue,{onClick:r,children:n.jsx(Ce,{size:"26px"})});me.propTypes={onClick:d.func};const{background:Z,backgroundHoverd:V,white:M,borderLight:U}=B.colors,{button:re}=B.shadows,ge=({filtredElements:r,setLiColor:u})=>{const b=K(),{user:x}=q(),{activeCluster:p}=_(),{activeElement:k}=O(),w=e=>{if(!e.length)return;let s="",t=0;const a=e.reduce((o,m)=>(o[m.lang]||(o[m.lang]=0),o[m.lang]+=1,o),{});for(const o in a)a[o]>t&&(t=a[o],s=o);return s},g=r.length?w(r):x.lang,i=({value:e})=>{b(J({_id:p._id,lang:e})).unwrap().then(s=>b(se(s.result.cluster)))},j=({value:e})=>{b(J({_id:p._id,rate:e})).unwrap().then(s=>b(se(s.result.cluster)))},v=({value:e})=>{const s=new FormData;s.append("lang",e),b(ne(s))},C=({value:e})=>{const s=new FormData;s.append("rate",e),b(ne(s))},y=(e,s)=>e.replaceAll(",`",";").replaceAll(" `",`${s} `),h=({text:e,playList:s,divider:t})=>{let a="";for(let o=0;o<s.length;o+=1){let m=s[o][e];m.endsWith(".")||m.endsWith("!")||m.endsWith("?")||m.endsWith('"')?a+=y(m,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`${t}`,e==="caption"?`@±@${s[o].lang}${t}`:`${t}`):s[o].element.startsWith("[")||(e==="caption"&&(m=`${m}@±@${s[o].lang}`),a+=m.replaceAll(".",t)+t)}return a},A=e=>{u(Z);const s="$*@",t=r.findIndex(m=>m.element===k),a=r.splice(t===-1?0:t),o=P({setLiColor:u,divider:s,text:h({text:"element",playList:a,divider:s}),lang:p.lang,rate:p.rate});e.target.blur(),o&&T.error(o)},c=e=>{const s="$*@";u(Z);const t=r.findIndex(m=>m.element===k),a=r.splice(t===-1?0:t),o=P({setLiColor:u,divider:s,text:h({text:"caption",playList:a,divider:s}),lang:x.lang,rate:x.rate});e.target.blur(),o&&T.error(o)},l=e=>{u(Z);let s="";const t="$*@",a=r.findIndex(S=>S.element===k),o=r.splice(a===-1?0:a);for(let S=0;S<o.length;S+=1){const{element:L,caption:N,lang:Q}=o[S];L.startsWith("[")||(s+=y(L,"")+`@±@${Q}`+N+t)}const m=Ee({setLiColor:u,divider:t,text:s,lang:p.lang,rate:x.rate});e.target.blur(),m&&T.error(m)};return n.jsxs(we,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(D,{options:z,defaultValue:z.find(e=>e.value===(p==null?void 0:p.lang)),onChange:i,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(D,{options:I,defaultValue:I.find(e=>e.value==(p==null?void 0:p.rate)),onChange:j,placeholder:"Rate...",$ol:V,$b:M,$bh:U}),n.jsx(te,{onClick:A,$s:"m",$bs:re,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(me,{onClick:l}),n.jsx(te,{onClick:c,$s:"m",$bs:re,children:(g==null?void 0:g.at(0).toUpperCase())+(g==null?void 0:g.substring(1))}),n.jsx(D,{options:z,defaultValue:z.find(e=>e.value===x.lang),onChange:v,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(D,{options:I,defaultValue:I.find(e=>e.value==x.rate),onChange:C,placeholder:"Rate...",$ol:V,$b:M,$bh:U})]})};ge.propTypes={filtredElements:d.array,setLiColor:d.func};const{colors:f,shadows:oe,indents:ae}=B,Oe=F`
  margin-bottom: 7px;
  padding-block: ${ae.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:r})=>r};
  border-radius: ${ae.xs};
  font-size: 22px;
`,Pe=$.li`
  ${Oe}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${f.border};
    background-color: ${f.background};
    box-shadow: ${oe.back};

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
    box-shadow: ${oe.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,fe=F`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Ie}
  }
`,Ge=$.label`
  ${fe}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:r})=>r?f.yellow:"transparent"};
    stroke: ${({$hovered:r})=>r?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,He=$.label`
  ${fe}
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
`,Ke=$.button`
  ${R}

  opacity: ${({$hovered:r})=>r?1:0};
`,ce=$.button`
  ${R}

  opacity: 0;
`,{colors:H,indents:$e}=B,be=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,qe=$.div`
  ${be}
`,Ne=$.form`
  ${be}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ie=$.textarea`
  outline: none;
  border: 1px solid ${H.accent};
  border-radius: ${$e.xs};
  resize: none;
`,Qe=$.div`
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
    border: 1px solid ${H.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${H.placeholder};
  }
`,Xe=$.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ye=$.button`
  ${R}
`,Ze=$.button`
  ${R}
`,xe=$.button`
  ${R}
`,pe=$.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${$e.xs};
  color: ${H.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,ke=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Je=$.iframe`
  ${ke}

  height: 60px;
  border-radius: 30px;
`,et=$.audio`
  ${ke}
`,Ae=({el:r,sortByDate:u,setSortByDate:b,setLiColor:x})=>{const{user:p}=q(),{activeCluster:k}=_(),{element:w,caption:g}=r,i="$*@",j=(l,e)=>{let s="";return e?(l.trim().endsWith(".")||l.trim().endsWith("!")||l.trim().endsWith("?")||l.endsWith('"')?s=l.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):s=l.trim()+e,s.includes("[")?s.substring(0,s.indexOf("[")):s):l},v=l=>{const e=P({setLiColor:x,divider:i,text:j(w,i),lang:k.lang,rate:k.rate});l.target.blur(),e&&T.error(e)},C=l=>{const e=P({setLiColor:x,divider:i,text:j(g,i),lang:r.lang,rate:p.rate});l.target.blur(),e&&T.error(e)},y=l=>{b(!u),u?T.success("Below is Recent"):T.success("Above is Recent"),l.stopImmediatePropagation()},h=g.endsWith("mp3"),A=!h&&g.startsWith("http"),c=!h&&!A;return n.jsxs(qe,{children:[n.jsx(pe,{onClick:v,children:w}),n.jsx(Qe,{onClick:y}),h&&n.jsx(et,{controls:!0,src:le(g)}),A&&n.jsx(Je,{src:le(g)}),c&&n.jsx(pe,{onClick:C,children:g})]})};Ae.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const ye=({el:r,article:u,isForm:b,setIsForm:x})=>{const p=K(),{user:k}=q(),{activeCluster:w}=_(),{_id:g,element:i,caption:j}=r,v=b+24,{register:C,watch:y,setValue:h,handleSubmit:A,setFocus:c}=Ve({mode:"onBlur",defaultValues:{element:i,caption:j}});E.useEffect(()=>{c("element"),u&&i.trim().startsWith("der")?h("element",u+i.replace("der","").trim()+", "):u&&i.trim().startsWith("die")?h("element",u+i.replace("die","").trim()+", "):u&&i.trim().startsWith("das")?h("element",u+i.replace("das","").trim()+", "):u?h("element",u+i+", "):h("element",u+i)},[u,i,c,h]),E.useEffect(()=>{const s=async t=>{t.key==="+"&&(t.preventDefault(),await e(),A(l)()),t.key==="Enter"&&(t.preventDefault(),A(l)()),t.key==="Escape"&&x(!1)};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[]);const l=s=>{const t=k.lang;let a=s.element.split(/\s+/).join(" ").trim(),o=s.caption.trim();a.endsWith(",")&&(a=a.substring(0,a.length-1)),a.includes("·")&&(a=a.replaceAll(" ·",",").replaceAll("·",",")),o.endsWith(",")&&(o=o.substring(0,o.length-1)),p(G({_id:g,lang:t,element:a,caption:o})).then(p(de())),x(!1)},e=async()=>{const s=y("element"),t={from:w.lang,to:k.lang},a=await he(s,t);h("caption",a)};return n.jsxs(Ne,{onSubmit:A(l),children:[n.jsx(ie,{...C("element"),style:{height:v}}),n.jsxs(Xe,{children:[n.jsx(Ye,{children:n.jsx(Se,{size:"16px"})}),n.jsx(Ze,{type:"button",onClick:()=>x(v),children:n.jsx(Te,{size:"16px"})}),n.jsx(xe,{type:"button",onClick:e,children:n.jsx(Me,{size:"16px"})})]}),n.jsx(ie,{...C("caption"),style:{height:v}})]})};ye.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const je=({el:r,index:u,length:b,sortByDate:x,setSortByDate:p,translateAll:k,liColor:w,setLiColor:g})=>{const i=K(),{activeCluster:j}=_(),{elementTrash:v,activeElement:C}=O(),[y,h]=E.useState(!1),{_id:A,element:c,favorite:l,checked:e}=r,s=v.find(W=>W._id===A),t=c===C||A===j.activeEl,[a,o]=E.useState(""),m=()=>{i(G({_id:A,favorite:!l}))},S=()=>{i(G({_id:A,checked:!e}))},L=()=>i(Re(r)),N=W=>{if(y)h(!1);else{const X=W.target.closest("div").clientHeight;h(X)}},Q=()=>{a===""&&o("der "),a==="der "&&o("die "),a==="die "&&o("das "),a==="das "&&o("")},ve=W=>{const{_id:X}=j;i(Le(c)),W.currentTarget.id!=="active-element"&&i(J({_id:X,activeEl:r._id}))};return n.jsxs(Pe,{id:t?"active-element":null,onClick:ve,liColor:w,children:[n.jsxs(ee,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Ge,{$hovered:l,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:l,onChange:m}),n.jsx(De,{size:"20px"})]}),n.jsxs(He,{$hovered:e,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:S}),n.jsx(Be,{size:"15px"})]}),y&&b===u+1&&n.jsx(xe,{onClick:k,children:n.jsx(We,{size:"16px"})})]}),y&&n.jsx(ye,{el:r,article:a,isForm:y,setIsForm:h}),!y&&n.jsx(Ae,{el:r,sortByDate:x,setSortByDate:p,setLiColor:g}),n.jsxs(ee,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ke,{$hovered:s,onClick:L,children:n.jsx(_e,{size:"16px"})}),y&&n.jsx(ce,{onClick:Q,children:n.jsx(ze,{size:"18px"})}),n.jsx(ce,{onClick:N,children:n.jsx(Fe,{size:"15px"})})]})]})};je.propTypes={el:d.object,index:d.string,length:d.string,sortByDate:d.bool,setSortByDate:d.func,translateAll:d.func,liColor:d.string,setLiColor:d.func};const tt=$.ul`
  width: 100%;
  list-style: none;
`,{white:st}=B.colors,nt=()=>{const r=K(),{user:u}=q(),{activeCluster:b}=_(),{allElements:x,elementTrash:p,elementFilter:k}=O(),[w,g]=E.useState(st);let{elementSelect:i}=O();i=i||[];const[j,v]=E.useState(!1);E.useEffect(()=>{r(de())},[r]),E.useEffect(()=>{const c=document.getElementById("active-element");(()=>{c==null||c.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const C=x.filter(c=>c.cluster===(b==null?void 0:b._id)).sort((c,l)=>c.createdAt.localeCompare(l.createdAt)),h=(()=>{const c=p.map(l=>l._id);return i.includes("trash")?C.filter(l=>c.includes(l._id)):C})().filter(({element:c,caption:l,favorite:e,checked:s})=>{const t=c.toLowerCase().replace("·","").includes(k)||c.toLowerCase().includes(k)||l.toLowerCase().includes(k),a=i.includes("favorite")?t&&e===!0:t;return i.some(o=>["checked","unchecked"].includes(o))?i.includes("checked")?a&&s===!0:a&&s===!1:a}).sort(j?(c,l)=>l.createdAt.localeCompare(c.createdAt):(c,l)=>c.createdAt.localeCompare(l.createdAt)),A=async()=>{const c=u.lang;let l=0;await h.forEach(async e=>{if(l>1)return;const{_id:s,element:t}=e;if(!t.startsWith("[")||c!==e.lang){const a={from:b.lang,to:c},o=await he(t,a);r(G({_id:s,lang:c,caption:o})),l=l+1}})};return n.jsxs(tt,{children:[h.map((c,l,e)=>n.jsx(je,{el:c,index:l,length:e.length,sortByDate:j,setSortByDate:v,translateAll:A,liColor:w,setLiColor:g},c._id)),n.jsx(ge,{filtredElements:h,setLiColor:g})]})},{s:ue,m:lt}=B.indents,pt=()=>n.jsx(ee,{$p:`0 ${lt} ${ue} ${ue}`,children:n.jsx(nt,{})});export{pt as default};
