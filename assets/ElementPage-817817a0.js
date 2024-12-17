import{s as $,t as W,P as d,j as n,U as je,u as K,b as q,q as _,y as O,T as ve,V as D,N as ee,w as Z,D as te,W as se,X as P,Q as B,Y as Ce,n as F,Z as ne,r as E,_ as we,$ as Ee,a0 as G,K as ue,a1 as de,F as J,C as Se,a2 as Te,A as Be,z as We,a3 as _e,E as Fe}from"./index-749861fb.js";import{T as Re}from"./index.esm-077b5da3.js";import{a as Le}from"./index.esm-6c65ee8d.js";import{v as De,u as ze}from"./index.esm-a15d5f47.js";import{S as Ie}from"./index.esm-dc126b38.js";const z=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:X}=W,Ve=$.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${X.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${X.placeholder};
    /* stroke: ${({$colored:l})=>l&&X.yellow}; */
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
`,he=({onClick:l})=>n.jsx(Ve,{onClick:l,children:n.jsx(je,{size:"26px"})});he.propTypes={onClick:d.func};const{background:Y,backgroundHoverd:V,white:M,borderLight:U}=W.colors,{button:le}=W.shadows,me=({filtredElements:l,setLiColor:u})=>{const b=K(),{user:x}=q(),{activeCluster:p}=_(),{activeElement:k}=O(),w=e=>{if(!e.length)return;let t="",s=0;const c=e.reduce((o,m)=>(o[m.lang]||(o[m.lang]=0),o[m.lang]+=1,o),{});for(const o in c)c[o]>s&&(s=c[o],t=o);return t},g=l.length?w(l):x.lang,i=({value:e})=>{b(Z({_id:p._id,lang:e})).unwrap().then(t=>b(te(t.result.cluster)))},v=({value:e})=>{b(Z({_id:p._id,rate:e})).unwrap().then(t=>b(te(t.result.cluster)))},C=({value:e})=>{const t=new FormData;t.append("lang",e),b(se(t))},j=({value:e})=>{const t=new FormData;t.append("rate",e),b(se(t))},y=(e,t)=>e.replaceAll(",`",";").replaceAll(" `",`${t} `),h=({text:e,playList:t,divider:s})=>{let c="";for(let o=0;o<t.length;o+=1){let m=t[o][e];m.endsWith(".")||m.endsWith("!")||m.endsWith("?")||m.endsWith('"')?c+=y(m,s).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${s}`).replaceAll(".",`.${s}`).replaceAll(",",`,${s}`).replaceAll("!",`!${s}`).replaceAll("?",`?${s}`).replaceAll(":",`:${s}`).replaceAll(`0.${s}`,"0.").replaceAll(`1.${s}`,"1.").replaceAll(`2.${s}`,"2.").replaceAll(`3.${s}`,"3.").replaceAll(`4.${s}`,"4.").replaceAll(`5.${s}`,"5.").replaceAll(`6.${s}`,"6.").replaceAll(`7.${s}`,"7.").replaceAll(`8.${s}`,"8.").replaceAll(`9.${s}`,"9.").replaceAll(`${s}`,e==="caption"?`@±@${t[o].lang}${s}`:`${s}`):t[o].element.startsWith("[")||(e==="caption"&&(m=`${m}@±@${t[o].lang}`),c+=m.replaceAll(".",s)+s)}return c},A=e=>{u(Y);const t="$*@",s=l.findIndex(m=>m.element===k),c=l.splice(s===-1?0:s),o=P({setLiColor:u,divider:t,text:h({text:"element",playList:c,divider:t}),lang:p.lang,rate:p.rate});e.target.blur(),o&&B.error(o)},a=e=>{const t="$*@";u(Y);const s=l.findIndex(m=>m.element===k),c=l.splice(s===-1?0:s),o=P({setLiColor:u,divider:t,text:h({text:"caption",playList:c,divider:t}),lang:x.lang,rate:x.rate});e.target.blur(),o&&B.error(o)},r=e=>{u(Y);let t="";const s="$*@",c=l.findIndex(S=>S.element===k),o=l.splice(c===-1?0:c);for(let S=0;S<o.length;S+=1){const{element:L,caption:N,lang:T}=o[S];L.startsWith("[")||(t+=y(L,"")+`@±@${T}`+N+s)}const m=Ce({setLiColor:u,divider:s,text:t,lang:p.lang,rate:x.rate});e.target.blur(),m&&B.error(m)};return n.jsxs(ve,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(D,{options:z,defaultValue:z.find(e=>e.value===(p==null?void 0:p.lang)),onChange:i,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(D,{options:I,defaultValue:I.find(e=>e.value==(p==null?void 0:p.rate)),onChange:v,placeholder:"Rate...",$ol:V,$b:M,$bh:U}),n.jsx(ee,{onClick:A,$s:"m",$bs:le,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(he,{onClick:r}),n.jsx(ee,{onClick:a,$s:"m",$bs:le,children:(g==null?void 0:g.at(0).toUpperCase())+(g==null?void 0:g.substring(1))}),n.jsx(D,{options:z,defaultValue:z.find(e=>e.value===x.lang),onChange:C,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(D,{options:I,defaultValue:I.find(e=>e.value==x.rate),onChange:j,placeholder:"Rate...",$ol:V,$b:M,$bh:U})]})};me.propTypes={filtredElements:d.array,setLiColor:d.func};const{colors:f,shadows:re,indents:oe}=W,Me=F`
  margin-bottom: 7px;
  padding-block: ${oe.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
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
    color: ${({$hovered:l})=>l?f.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,Pe=$.label`
  ${ge}
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

  opacity: ${({$hovered:l})=>l?1:0};
`,ae=$.button`
  ${R}

  opacity: 0;
`,{colors:H,indents:fe}=W,$e=F`
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
  border: 1px solid ${H.accent};
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
    border: 1px solid ${H.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${H.placeholder};
  }
`,Ne=$.div`
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
  color: ${H.black};
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
`,ke=({el:l,sortByDate:u,setSortByDate:b,setLiColor:x})=>{const{user:p}=q(),{activeCluster:k}=_(),{element:w,caption:g}=l,i="$*@",v=(r,e)=>{let t="";return e?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?t=r.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):t=r.trim()+e,t.includes("[")?t.substring(0,t.indexOf("[")):t):r},C=r=>{const e=P({setLiColor:x,divider:i,text:v(w,i),lang:k.lang,rate:k.rate});r.target.blur(),e&&B.error(e)},j=r=>{const e=P({setLiColor:x,divider:i,text:v(g,i),lang:l.lang,rate:p.rate});r.target.blur(),e&&B.error(e)},y=r=>{b(!u),u?B.success("Below is Recent"):B.success("Above is Recent"),r.stopImmediatePropagation()},h=g.endsWith("mp3"),A=!h&&g.startsWith("http"),a=!h&&!A;return n.jsxs(He,{children:[n.jsx(ie,{onClick:C,children:w}),n.jsx(qe,{onClick:y}),h&&n.jsx(Ze,{controls:!0,src:ne(g)}),A&&n.jsx(Ye,{src:ne(g)}),a&&n.jsx(ie,{onClick:j,children:g})]})};ke.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const Ae=({el:l,article:u,isForm:b,setIsForm:x})=>{const p=K(),{user:k}=q(),{activeCluster:w}=_(),{_id:g,element:i,caption:v}=l,C=b+24,{register:j,watch:y,setValue:h,handleSubmit:A,setFocus:a}=ze({mode:"onBlur",defaultValues:{element:i,caption:v}});E.useEffect(()=>{a("element"),u&&i.trim().startsWith("der")?h("element",u+i.replace("der","").trim()+", "):u&&i.trim().startsWith("die")?h("element",u+i.replace("die","").trim()+", "):u&&i.trim().startsWith("das")?h("element",u+i.replace("das","").trim()+", "):u?h("element",u+i+", "):h("element",u+i)},[u,i,a,h]),E.useEffect(()=>{const t=async s=>{s.key==="+"&&(s.preventDefault(),await e(),A(r)()),s.key==="Enter"&&(s.preventDefault(),A(r)()),s.key==="Escape"&&x(!1)};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const r=t=>{const s=k.lang;let c=t.element.split(/\s+/).join(" ").trim(),o=t.caption.trim();c.endsWith(",")&&(c=c.substring(0,c.length-1)),c.includes("·")&&(c=c.replaceAll(" ·",",").replaceAll("·",",")),o.endsWith(",")&&(o=o.substring(0,o.length-1)),p(G({_id:g,lang:s,element:c,caption:o})).then(p(ue())),x(!1)},e=async()=>{const t=y("element"),s={from:w.lang,to:k.lang},c=await de(t,s);h("caption",c)};return n.jsxs(Ke,{onSubmit:A(r),children:[n.jsx(ce,{...j("element"),style:{height:C}}),n.jsxs(Ne,{children:[n.jsx(Qe,{children:n.jsx(we,{size:"16px"})}),n.jsx(Xe,{type:"button",onClick:()=>x(C),children:n.jsx(Ee,{size:"16px"})}),n.jsx(be,{type:"button",onClick:e,children:n.jsx(Ie,{size:"16px"})})]}),n.jsx(ce,{...j("caption"),style:{height:C}})]})};Ae.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const ye=({el:l,index:u,length:b,sortByDate:x,setSortByDate:p,translateAll:k,liColor:w,setLiColor:g})=>{const i=K(),{activeCluster:v}=_(),{elementTrash:C,activeElement:j}=O(),[y,h]=E.useState(!1),{_id:A,favorite:a,checked:r}=l,e=C.find(T=>T._id===A),[t,s]=E.useState(""),c=()=>{i(G({_id:A,favorite:!a}))},o=()=>{i(G({_id:A,checked:!r}))},m=()=>i(_e(l)),S=T=>{if(y)h(!1);else{const Q=T.target.closest("div").clientHeight;h(Q)}},L=()=>{t===""&&s("der "),t==="der "&&s("die "),t==="die "&&s("das "),t==="das "&&s("")},N=T=>{const{_id:Q}=v;i(Fe(l)),T.currentTarget.id!=="active-element"&&i(Z({_id:Q,activeEl:l._id}))};return n.jsxs(Ue,{id:A===(j==null?void 0:j._id)?"active-element":null,onClick:N,liColor:w,children:[n.jsxs(J,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Oe,{$hovered:a,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:a,onChange:c}),n.jsx(Re,{size:"20px"})]}),n.jsxs(Pe,{$hovered:r,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:r,onChange:o}),n.jsx(Se,{size:"15px"})]}),y&&b===u+1&&n.jsx(be,{onClick:k,children:n.jsx(Te,{size:"16px"})})]}),y&&n.jsx(Ae,{el:l,article:t,isForm:y,setIsForm:h}),!y&&n.jsx(ke,{el:l,sortByDate:x,setSortByDate:p,setLiColor:g}),n.jsxs(J,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ge,{$hovered:e,onClick:m,children:n.jsx(Be,{size:"16px"})}),y&&n.jsx(ae,{onClick:L,children:n.jsx(Le,{size:"18px"})}),n.jsx(ae,{onClick:S,children:n.jsx(We,{size:"15px"})})]})]})};ye.propTypes={el:d.object,index:d.string,length:d.string,sortByDate:d.bool,setSortByDate:d.func,translateAll:d.func,liColor:d.string,setLiColor:d.func};const Je=$.ul`
  width: 100%;
  list-style: none;
`,{white:et}=W.colors,tt=()=>{const l=K(),{user:u}=q(),{activeCluster:b}=_(),{allElements:x,elementTrash:p,elementFilter:k}=O(),[w,g]=E.useState(et);let{elementSelect:i}=O();i=i||[];const[v,C]=E.useState(!1);E.useEffect(()=>{l(ue())},[l]),E.useEffect(()=>{const a=document.getElementById("active-element");(()=>{a==null||a.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const j=x.filter(a=>a.cluster===(b==null?void 0:b._id)).sort((a,r)=>a.createdAt.localeCompare(r.createdAt)),h=(()=>{const a=p.map(r=>r._id);return i.includes("trash")?j.filter(r=>a.includes(r._id)):j})().filter(({element:a,caption:r,favorite:e,checked:t})=>{const s=a.toLowerCase().replace("·","").includes(k)||a.toLowerCase().includes(k)||r.toLowerCase().includes(k),c=i.includes("favorite")?s&&e===!0:s;return i.some(o=>["checked","unchecked"].includes(o))?i.includes("checked")?c&&t===!0:c&&t===!1:c}).sort(v?(a,r)=>r.createdAt.localeCompare(a.createdAt):(a,r)=>a.createdAt.localeCompare(r.createdAt)),A=async()=>{const a=u.lang;let r=0;await h.forEach(async e=>{if(r>1)return;const{_id:t,element:s}=e;if(!s.startsWith("[")||a!==e.lang){const c={from:b.lang,to:a},o=await de(s,c);l(G({_id:t,lang:a,caption:o})),r=r+1}})};return n.jsxs(Je,{children:[h.map((a,r,e)=>n.jsx(ye,{el:a,index:r,length:e.length,sortByDate:v,setSortByDate:C,translateAll:A,liColor:w,setLiColor:g},a._id)),n.jsx(me,{filtredElements:h,setLiColor:g})]})},{s:pe,m:st}=W.indents,ct=()=>n.jsx(J,{$p:`0 ${st} ${pe} ${pe}`,children:n.jsx(tt,{})});export{ct as default};
