import{s as $,t as B,P as d,j as n,T as je,u as F,b as K,q,y as O,S as ve,U as z,K as N,w as Y,D as ee,V as te,W as P,Q as S,X as Ce,n as _,Y as se,Z as pe,r as T,_ as we,$ as Ee,a0 as G,J as ue,a1 as de,F as Z,C as Se,a2 as Te,A as Be,z as We,a3 as Fe}from"./index-0d367cad.js";import{T as _e}from"./index.esm-fe8d8f81.js";import{a as Re}from"./index.esm-908ea913.js";import{v as Le,u as ze}from"./index.esm-ae8cd0b6.js";import{S as De}from"./index.esm-f11dc646.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Q}=B,Ie=$.div`
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
    /* stroke: ${({$colored:l})=>l&&Q.yellow}; */
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
`,he=({onClick:l})=>n.jsx(Ie,{onClick:l,children:n.jsx(je,{size:"26px"})});he.propTypes={onClick:d.func};const{background:X,backgroundHoverd:V,white:M,borderLight:U}=B.colors,{button:ne}=B.shadows,me=({filtredElements:l,setLiColor:u})=>{const g=F(),{user:b}=K(),{activeCluster:p}=q(),{activeElement:A}=O(),C=s=>{if(!s.length)return;let t="",e=0;const r=s.reduce((a,m)=>(a[m.lang]||(a[m.lang]=0),a[m.lang]+=1,a),{});for(const a in r)r[a]>e&&(e=r[a],t=a);return t},x=l.length?C(l):b.lang,c=({value:s})=>{g(Y({_id:p._id,lang:s})).unwrap().then(t=>g(ee(t.result.cluster)))},j=({value:s})=>{g(Y({_id:p._id,rate:s})).unwrap().then(t=>g(ee(t.result.cluster)))},y=({value:s})=>{const t=new FormData;t.append("lang",s),g(te(t))},k=({value:s})=>{const t=new FormData;t.append("rate",s),g(te(t))},w=(s,t)=>s.replaceAll(",`",";").replaceAll(" `",`${t} `),h=({text:s,playList:t,divider:e})=>{let r="";for(let a=0;a<t.length;a+=1){let m=t[a][s];m.endsWith(".")||m.endsWith("!")||m.endsWith("?")||m.endsWith('"')?r+=w(m,e).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`${e}`,s==="caption"?`@±@${t[a].lang}${e}`:`${e}`):t[a].element.startsWith("[")||(s==="caption"&&(m=`${m}@±@${t[a].lang}`),r+=m.replaceAll(".",e)+e)}return r},v=s=>{u(X);const t="$*@",e=l.findIndex(m=>m.element===A.element),r=l.splice(e===-1?0:e),a=P({setLiColor:u,divider:t,text:h({text:"element",playList:r,divider:t}),lang:p.lang,rate:p.rate});s.target.blur(),a&&S.error(a)},o=s=>{const t="$*@";u(X);const e=l.findIndex(m=>m.element===A.element),r=l.splice(e===-1?0:e),a=P({setLiColor:u,divider:t,text:h({text:"caption",playList:r,divider:t}),lang:b.lang,rate:b.rate});s.target.blur(),a&&S.error(a)},i=s=>{u(X);let t="";const e="$*@",r=l.findIndex(E=>E.element===A.element),a=l.splice(r===-1?0:r);for(let E=0;E<a.length;E+=1){const{element:L,caption:W,lang:J}=a[E];L.startsWith("[")||(t+=w(L,"")+`@±@${J}`+W+e)}const m=Ce({setLiColor:u,divider:e,text:t,lang:p.lang,rate:b.rate});s.target.blur(),m&&S.error(m)};return n.jsxs(ve,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===(p==null?void 0:p.lang)),onChange:c,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==(p==null?void 0:p.rate)),onChange:j,placeholder:"Rate...",$ol:V,$b:M,$bh:U}),n.jsx(N,{onClick:v,$s:"m",$bs:ne,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(he,{onClick:i}),n.jsx(N,{onClick:o,$s:"m",$bs:ne,children:(x==null?void 0:x.at(0).toUpperCase())+(x==null?void 0:x.substring(1))}),n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===b.lang),onChange:y,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==b.rate),onChange:k,placeholder:"Rate...",$ol:V,$b:M,$bh:U})]})};me.propTypes={filtredElements:d.array,setLiColor:d.func};const{colors:f,shadows:le,indents:re}=B,Ve=_`
  margin-bottom: 7px;
  padding-block: ${re.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${re.xs};
  font-size: 22px;
`,Me=$.li`
  ${Ve}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${f.border};
    background-color: ${f.background};
    box-shadow: ${le.back};

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
    box-shadow: ${le.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ge=_`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Le}
  }
`,Ue=$.label`
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
`,Oe=$.label`
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
`,R=_`
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
`,Pe=$.button`
  ${R}

  opacity: ${({$hovered:l})=>l?1:0};
`,oe=$.button`
  ${R}

  opacity: 0;
`,{colors:H,indents:fe}=B,$e=_`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Ge=$.div`
  ${$e}
`,He=$.form`
  ${$e}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ae=$.textarea`
  outline: none;
  border: 1px solid ${H.accent};
  border-radius: ${fe.xs};
  resize: none;
`,Ke=$.div`
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
`,qe=$.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Je=$.button`
  ${R}
`,Qe=$.button`
  ${R}
`,be=$.button`
  ${R}
`,ce=$.button`
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
`,xe=_`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Xe=$.iframe`
  ${xe}

  height: 60px;
  border-radius: 30px;
`,Ye=$.audio`
  ${xe}
`,ke=({el:l,sortByDate:u,setSortByDate:g,setLiColor:b})=>{const p=F(),{user:A}=K(),{activeCluster:C}=q(),{element:x,caption:c}=l,j="$*@",y=(t,e)=>{let r="";return e?(t.trim().endsWith(".")||t.trim().endsWith("!")||t.trim().endsWith("?")||t.endsWith('"')?r=t.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):r=t.trim()+e,r.includes("[")?r.substring(0,r.indexOf("[")):r):t},k=t=>{const e=P({setLiColor:b,divider:j,text:y(x,j),lang:C.lang,rate:C.rate});t.target.blur(),e&&S.error(e)},w=t=>{const e=P({setLiColor:b,divider:j,text:y(c,j),lang:l.lang,rate:A.rate});t.target.blur(),e&&S.error(e)},h=t=>{g(!u),u?S.success("Below is Recent"):S.success("Above is Recent"),t.stopPropagation()},v=t=>{const{_id:e}=C;p(pe(l)),t.currentTarget.closest("li").id!=="active-element"&&p(Y({_id:e,activeEl:l._id}))},o=c.endsWith("mp3"),i=!o&&c.startsWith("http"),s=!o&&!i;return n.jsxs(Ge,{onClick:v,children:[n.jsx(ce,{onClick:k,children:x}),n.jsx(Ke,{onClick:h}),o&&n.jsx(Ye,{controls:!0,src:se(c)}),i&&n.jsx(Xe,{src:se(c)}),s&&n.jsx(ce,{onClick:w,children:c})]})};ke.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const Ae=({el:l,article:u,isForm:g,setIsForm:b})=>{const p=F(),{user:A}=K(),{activeCluster:C}=q(),{_id:x,element:c,caption:j}=l,y=g+24,{register:k,watch:w,setValue:h,handleSubmit:v,setFocus:o}=ze({mode:"onBlur",defaultValues:{element:c,caption:j}});T.useEffect(()=>{o("element"),u&&c.trim().startsWith("der")?h("element",u+c.replace("der","").trim()+", "):u&&c.trim().startsWith("die")?h("element",u+c.replace("die","").trim()+", "):u&&c.trim().startsWith("das")?h("element",u+c.replace("das","").trim()+", "):u?h("element",u+c+", "):h("element",u+c)},[u,c,o,h]),T.useEffect(()=>{const t=async e=>{e.key==="+"&&(e.preventDefault(),await s(),v(i)()),e.key==="Enter"&&(e.preventDefault(),v(i)()),e.key==="Escape"&&b(!1)};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const i=t=>{const e=A.lang;let r=t.element.split(/\s+/).join(" ").trim(),a=t.caption.trim();r.endsWith(",")&&(r=r.substring(0,r.length-1)),r.includes("·")&&(r=r.replaceAll(" ·",",").replaceAll("·",",")),a.endsWith(",")&&(a=a.substring(0,a.length-1)),p(G({_id:x,lang:e,element:r,caption:a})).then(p(ue())),b(!1)},s=async()=>{const t=w("element"),e={from:C.lang,to:A.lang},r=await de(t,e);h("caption",r)};return n.jsxs(He,{onSubmit:v(i),children:[n.jsx(ae,{...k("element"),style:{height:y}}),n.jsxs(qe,{children:[n.jsx(Je,{children:n.jsx(we,{size:"16px"})}),n.jsx(Qe,{type:"button",onClick:()=>b(y),children:n.jsx(Ee,{size:"16px"})}),n.jsx(be,{type:"button",onClick:s,children:n.jsx(De,{size:"16px"})})]}),n.jsx(ae,{...k("caption"),style:{height:y}})]})};Ae.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const ye=({el:l,index:u,length:g,sortByDate:b,setSortByDate:p,translateAll:A,liColor:C,setLiColor:x})=>{const c=F(),{elementTrash:j,activeElement:y}=O(),[k,w]=T.useState(!1),{_id:h,favorite:v,checked:o}=l,i=j.find(W=>W._id===h),[s,t]=T.useState(""),e=()=>{c(G({_id:h,favorite:!v}))},r=()=>{c(G({_id:h,checked:!o}))},a=()=>c(Fe(l)),m=W=>{if(k)w(!1);else{const J=W.target.closest("div").clientHeight;w(J)}},E=()=>{s===""&&t("der "),s==="der "&&t("die "),s==="die "&&t("das "),s==="das "&&t("")},L=h===(y==null?void 0:y._id);return n.jsxs(Me,{id:L?"active-element":null,liColor:C,children:[n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Ue,{$hovered:v,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:v,onChange:e}),n.jsx(_e,{size:"20px"})]}),n.jsxs(Oe,{$hovered:o,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:o,onChange:r}),n.jsx(Se,{size:"15px"})]}),k&&g===u+1&&n.jsx(be,{onClick:A,children:n.jsx(Te,{size:"16px"})})]}),k&&n.jsx(Ae,{el:l,article:s,isForm:k,setIsForm:w}),!k&&n.jsx(ke,{el:l,sortByDate:b,setSortByDate:p,setLiColor:x}),n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Pe,{$hovered:i,onClick:a,children:n.jsx(Be,{size:"16px"})}),k&&n.jsx(oe,{onClick:E,children:n.jsx(Re,{size:"18px"})}),n.jsx(oe,{onClick:m,children:n.jsx(We,{size:"15px"})})]})]})};ye.propTypes={el:d.object,index:d.string,length:d.string,sortByDate:d.bool,setSortByDate:d.func,translateAll:d.func,liColor:d.string,setLiColor:d.func};const Ze=$.ul`
  width: 100%;
  list-style: none;
`,{white:Ne}=B.colors,et=()=>{const l=F(),{user:u}=K(),{activeCluster:g}=q(),{allElements:b,elementTrash:p,elementFilter:A}=O(),[C,x]=T.useState(Ne);let{elementSelect:c}=O();c=c||[];const[j,y]=T.useState(!1);T.useEffect(()=>{l(ue()).unwrap().then(({result:o})=>{if(!g||!g.activeEl)return;const i=o.elements.find(({_id:s})=>s===g.activeEl);l(pe(i))}).then(()=>{const o=document.getElementById("active-element");(()=>{o==null||o.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const k=b.filter(o=>o.cluster===(g==null?void 0:g._id)).sort((o,i)=>o.createdAt.localeCompare(i.createdAt)),h=(()=>{const o=p.map(i=>i._id);return c.includes("trash")?k.filter(i=>o.includes(i._id)):k})().filter(({element:o,caption:i,favorite:s,checked:t})=>{const e=o.toLowerCase().replace("·","").includes(A)||o.toLowerCase().includes(A)||i.toLowerCase().includes(A),r=c.includes("favorite")?e&&s===!0:e;return c.some(a=>["checked","unchecked"].includes(a))?c.includes("checked")?r&&t===!0:r&&t===!1:r}).sort(j?(o,i)=>i.createdAt.localeCompare(o.createdAt):(o,i)=>o.createdAt.localeCompare(i.createdAt)),v=async()=>{const o=u.lang;let i=0;await h.forEach(async s=>{if(i>1)return;const{_id:t,element:e}=s;if(!e.startsWith("[")||o!==s.lang){const r={from:g.lang,to:o},a=await de(e,r);l(G({_id:t,lang:o,caption:a})),i=i+1}})};return n.jsxs(Ze,{children:[h.map((o,i,s)=>n.jsx(ye,{el:o,index:i,length:s.length,sortByDate:j,setSortByDate:y,translateAll:v,liColor:C,setLiColor:x},o._id)),n.jsx(me,{filtredElements:h,setLiColor:x})]})},{s:ie,m:tt}=B.indents,at=()=>n.jsx(Z,{$p:`0 ${tt} ${ie} ${ie}`,children:n.jsx(et,{})});export{at as default};
