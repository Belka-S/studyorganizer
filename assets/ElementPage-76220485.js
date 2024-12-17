import{s as b,t as B,P as d,j as n,T as Ce,u as K,b as q,q as _,y as O,S as we,U as z,K as te,w as N,D as se,V as ne,W as P,Q as S,X as Ee,n as F,Y as le,r as T,Z as Se,_ as Te,$ as G,J as de,a0 as he,F as ee,C as Be,a1 as We,A as _e,z as Fe,a2 as Re,a3 as me}from"./index-f746d099.js";import{T as Le}from"./index.esm-14bedc7f.js";import{a as ze}from"./index.esm-f86451c2.js";import{v as De,u as Ie}from"./index.esm-eb3d2720.js";import{S as Ve}from"./index.esm-21659106.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Y}=B,Me=b.div`
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
`,ge=({onClick:r})=>n.jsx(Me,{onClick:r,children:n.jsx(Ce,{size:"26px"})});ge.propTypes={onClick:d.func};const{background:Z,backgroundHoverd:V,white:M,borderLight:U}=B.colors,{button:re}=B.shadows,fe=({filtredElements:r,setLiColor:u})=>{const g=K(),{user:x}=q(),{activeCluster:p}=_(),{activeElement:k}=O(),w=e=>{if(!e.length)return;let t="",s=0;const c=e.reduce((a,m)=>(a[m.lang]||(a[m.lang]=0),a[m.lang]+=1,a),{});for(const a in c)c[a]>s&&(s=c[a],t=a);return t},f=r.length?w(r):x.lang,i=({value:e})=>{g(N({_id:p._id,lang:e})).unwrap().then(t=>g(se(t.result.cluster)))},v=({value:e})=>{g(N({_id:p._id,rate:e})).unwrap().then(t=>g(se(t.result.cluster)))},C=({value:e})=>{const t=new FormData;t.append("lang",e),g(ne(t))},j=({value:e})=>{const t=new FormData;t.append("rate",e),g(ne(t))},y=(e,t)=>e.replaceAll(",`",";").replaceAll(" `",`${t} `),h=({text:e,playList:t,divider:s})=>{let c="";for(let a=0;a<t.length;a+=1){let m=t[a][e];m.endsWith(".")||m.endsWith("!")||m.endsWith("?")||m.endsWith('"')?c+=y(m,s).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${s}`).replaceAll(".",`.${s}`).replaceAll(",",`,${s}`).replaceAll("!",`!${s}`).replaceAll("?",`?${s}`).replaceAll(":",`:${s}`).replaceAll(`0.${s}`,"0.").replaceAll(`1.${s}`,"1.").replaceAll(`2.${s}`,"2.").replaceAll(`3.${s}`,"3.").replaceAll(`4.${s}`,"4.").replaceAll(`5.${s}`,"5.").replaceAll(`6.${s}`,"6.").replaceAll(`7.${s}`,"7.").replaceAll(`8.${s}`,"8.").replaceAll(`9.${s}`,"9.").replaceAll(`${s}`,e==="caption"?`@±@${t[a].lang}${s}`:`${s}`):t[a].element.startsWith("[")||(e==="caption"&&(m=`${m}@±@${t[a].lang}`),c+=m.replaceAll(".",s)+s)}return c},A=e=>{u(Z);const t="$*@",s=r.findIndex(m=>m.element===k.element),c=r.splice(s===-1?0:s),a=P({setLiColor:u,divider:t,text:h({text:"element",playList:c,divider:t}),lang:p.lang,rate:p.rate});e.target.blur(),a&&S.error(a)},o=e=>{const t="$*@";u(Z);const s=r.findIndex(m=>m.element===k.element),c=r.splice(s===-1?0:s),a=P({setLiColor:u,divider:t,text:h({text:"caption",playList:c,divider:t}),lang:x.lang,rate:x.rate});e.target.blur(),a&&S.error(a)},l=e=>{u(Z);let t="";const s="$*@",c=r.findIndex(E=>E.element===k.element),a=r.splice(c===-1?0:c);for(let E=0;E<a.length;E+=1){const{element:L,caption:J,lang:Q}=a[E];L.startsWith("[")||(t+=y(L,"")+`@±@${Q}`+J+s)}const m=Ee({setLiColor:u,divider:s,text:t,lang:p.lang,rate:x.rate});e.target.blur(),m&&S.error(m)};return n.jsxs(we,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(z,{options:D,defaultValue:D.find(e=>e.value===(p==null?void 0:p.lang)),onChange:i,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(z,{options:I,defaultValue:I.find(e=>e.value==(p==null?void 0:p.rate)),onChange:v,placeholder:"Rate...",$ol:V,$b:M,$bh:U}),n.jsx(te,{onClick:A,$s:"m",$bs:re,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(ge,{onClick:l}),n.jsx(te,{onClick:o,$s:"m",$bs:re,children:(f==null?void 0:f.at(0).toUpperCase())+(f==null?void 0:f.substring(1))}),n.jsx(z,{options:D,defaultValue:D.find(e=>e.value===x.lang),onChange:C,placeholder:"Language...",$ol:V,$b:M,$bh:U}),n.jsx(z,{options:I,defaultValue:I.find(e=>e.value==x.rate),onChange:j,placeholder:"Rate...",$ol:V,$b:M,$bh:U})]})};fe.propTypes={filtredElements:d.array,setLiColor:d.func};const{colors:$,shadows:oe,indents:ae}=B,Ue=F`
  margin-bottom: 7px;
  padding-block: ${ae.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:r})=>r};
  border-radius: ${ae.xs};
  font-size: 22px;
`,Oe=b.li`
  ${Ue}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${$.border};
    background-color: ${$.background};
    box-shadow: ${oe.back};

    &:hover {
      border-color: ${$.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${$.smokeBlack};
      &:hover {
        color: ${$.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${$.hovered};
    }
  }

  &:hover {
    border-color: ${$.accent};
    box-shadow: ${oe.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,$e=F`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${De}
  }
`,Pe=b.label`
  ${$e}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:r})=>r?$.yellow:"transparent"};
    stroke: ${({$hovered:r})=>r?$.yellow:$.border};
  }
  &:hover svg {
    stroke: ${$.placeholder};
  }
`,Ge=b.label`
  ${$e}
  opacity: ${({$hovered:r})=>r?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${$.border};
    border-radius: 50%;
    color: ${({$hovered:r})=>r?$.border:"transparent"};
  }
  &:hover svg {
    border-color: ${$.placeholder};
    color: ${({$hovered:r})=>r?$.placeholder:"transparent"};
  }
`,R=F`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${$.black};

  & svg {
    transition: color 250ms;
    color: ${$.border};
  }
  &:hover,
  &:hover svg {
    color: ${$.placeholder};
  }
`,He=b.button`
  ${R}

  opacity: ${({$hovered:r})=>r?1:0};
`,ce=b.button`
  ${R}

  opacity: 0;
`,{colors:H,indents:be}=B,xe=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Ke=b.div`
  ${xe}
`,qe=b.form`
  ${xe}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ie=b.textarea`
  outline: none;
  border: 1px solid ${H.accent};
  border-radius: ${be.xs};
  resize: none;
`,Je=b.div`
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
`,Qe=b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Xe=b.button`
  ${R}
`,Ye=b.button`
  ${R}
`,ke=b.button`
  ${R}
`,pe=b.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${be.xs};
  color: ${H.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ae=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ze=b.iframe`
  ${Ae}

  height: 60px;
  border-radius: 30px;
`,Ne=b.audio`
  ${Ae}
`,ye=({el:r,sortByDate:u,setSortByDate:g,setLiColor:x})=>{const{user:p}=q(),{activeCluster:k}=_(),{element:w,caption:f}=r,i="$*@",v=(l,e)=>{let t="";return e?(l.trim().endsWith(".")||l.trim().endsWith("!")||l.trim().endsWith("?")||l.endsWith('"')?t=l.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):t=l.trim()+e,t.includes("[")?t.substring(0,t.indexOf("[")):t):l},C=l=>{const e=P({setLiColor:x,divider:i,text:v(w,i),lang:k.lang,rate:k.rate});l.target.blur(),e&&S.error(e)},j=l=>{const e=P({setLiColor:x,divider:i,text:v(f,i),lang:r.lang,rate:p.rate});l.target.blur(),e&&S.error(e)},y=l=>{g(!u),u?S.success("Below is Recent"):S.success("Above is Recent"),l.stopImmediatePropagation()},h=f.endsWith("mp3"),A=!h&&f.startsWith("http"),o=!h&&!A;return n.jsxs(Ke,{children:[n.jsx(pe,{onClick:C,children:w}),n.jsx(Je,{onClick:y}),h&&n.jsx(Ne,{controls:!0,src:le(f)}),A&&n.jsx(Ze,{src:le(f)}),o&&n.jsx(pe,{onClick:j,children:f})]})};ye.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const je=({el:r,article:u,isForm:g,setIsForm:x})=>{const p=K(),{user:k}=q(),{activeCluster:w}=_(),{_id:f,element:i,caption:v}=r,C=g+24,{register:j,watch:y,setValue:h,handleSubmit:A,setFocus:o}=Ie({mode:"onBlur",defaultValues:{element:i,caption:v}});T.useEffect(()=>{o("element"),u&&i.trim().startsWith("der")?h("element",u+i.replace("der","").trim()+", "):u&&i.trim().startsWith("die")?h("element",u+i.replace("die","").trim()+", "):u&&i.trim().startsWith("das")?h("element",u+i.replace("das","").trim()+", "):u?h("element",u+i+", "):h("element",u+i)},[u,i,o,h]),T.useEffect(()=>{const t=async s=>{s.key==="+"&&(s.preventDefault(),await e(),A(l)()),s.key==="Enter"&&(s.preventDefault(),A(l)()),s.key==="Escape"&&x(!1)};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const l=t=>{const s=k.lang;let c=t.element.split(/\s+/).join(" ").trim(),a=t.caption.trim();c.endsWith(",")&&(c=c.substring(0,c.length-1)),c.includes("·")&&(c=c.replaceAll(" ·",",").replaceAll("·",",")),a.endsWith(",")&&(a=a.substring(0,a.length-1)),p(G({_id:f,lang:s,element:c,caption:a})).then(p(de())),x(!1)},e=async()=>{const t=y("element"),s={from:w.lang,to:k.lang},c=await he(t,s);h("caption",c)};return n.jsxs(qe,{onSubmit:A(l),children:[n.jsx(ie,{...j("element"),style:{height:C}}),n.jsxs(Qe,{children:[n.jsx(Xe,{children:n.jsx(Se,{size:"16px"})}),n.jsx(Ye,{type:"button",onClick:()=>x(C),children:n.jsx(Te,{size:"16px"})}),n.jsx(ke,{type:"button",onClick:e,children:n.jsx(Ve,{size:"16px"})})]}),n.jsx(ie,{...j("caption"),style:{height:C}})]})};je.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const ve=({el:r,index:u,length:g,sortByDate:x,setSortByDate:p,translateAll:k,liColor:w,setLiColor:f})=>{const i=K(),{activeCluster:v}=_(),{elementTrash:C,activeElement:j}=O(),[y,h]=T.useState(!1),{_id:A,favorite:o,checked:l}=r,e=C.find(W=>W._id===A),[t,s]=T.useState(""),c=()=>{i(G({_id:A,favorite:!o}))},a=()=>{i(G({_id:A,checked:!l}))},m=()=>i(Re(r)),E=W=>{if(y)h(!1);else{const X=W.target.closest("div").clientHeight;h(X)}},L=()=>{t===""&&s("der "),t==="der "&&s("die "),t==="die "&&s("das "),t==="das "&&s("")},J=W=>{const{_id:X}=v;i(me(r)),W.currentTarget.id!=="active-element"&&i(N({_id:X,activeEl:r._id}))},Q=A===(j==null?void 0:j._id);return n.jsxs(Oe,{id:Q?"active-element":null,onClick:J,liColor:w,children:[n.jsxs(ee,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Pe,{$hovered:o,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:c}),n.jsx(Le,{size:"20px"})]}),n.jsxs(Ge,{$hovered:l,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:a}),n.jsx(Be,{size:"15px"})]}),y&&g===u+1&&n.jsx(ke,{onClick:k,children:n.jsx(We,{size:"16px"})})]}),y&&n.jsx(je,{el:r,article:t,isForm:y,setIsForm:h}),!y&&n.jsx(ye,{el:r,sortByDate:x,setSortByDate:p,setLiColor:f}),n.jsxs(ee,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(He,{$hovered:e,onClick:m,children:n.jsx(_e,{size:"16px"})}),y&&n.jsx(ce,{onClick:L,children:n.jsx(ze,{size:"18px"})}),n.jsx(ce,{onClick:E,children:n.jsx(Fe,{size:"15px"})})]})]})};ve.propTypes={el:d.object,index:d.string,length:d.string,sortByDate:d.bool,setSortByDate:d.func,translateAll:d.func,liColor:d.string,setLiColor:d.func};const et=b.ul`
  width: 100%;
  list-style: none;
`,{white:tt}=B.colors,st=()=>{const r=K(),{user:u}=q(),{activeCluster:g}=_(),{allElements:x,elementTrash:p,elementFilter:k}=O(),[w,f]=T.useState(tt);let{elementSelect:i}=O();i=i||[];const[v,C]=T.useState(!1);T.useEffect(()=>{r(de()).unwrap().then(({result:o})=>{if(!g||!g.activeEl)return;const l=o.elements.find(({_id:e})=>e===g.activeEl);r(me(l))}).then(()=>{const o=document.getElementById("active-element");(()=>{o==null||o.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const j=x.filter(o=>o.cluster===(g==null?void 0:g._id)).sort((o,l)=>o.createdAt.localeCompare(l.createdAt)),h=(()=>{const o=p.map(l=>l._id);return i.includes("trash")?j.filter(l=>o.includes(l._id)):j})().filter(({element:o,caption:l,favorite:e,checked:t})=>{const s=o.toLowerCase().replace("·","").includes(k)||o.toLowerCase().includes(k)||l.toLowerCase().includes(k),c=i.includes("favorite")?s&&e===!0:s;return i.some(a=>["checked","unchecked"].includes(a))?i.includes("checked")?c&&t===!0:c&&t===!1:c}).sort(v?(o,l)=>l.createdAt.localeCompare(o.createdAt):(o,l)=>o.createdAt.localeCompare(l.createdAt)),A=async()=>{const o=u.lang;let l=0;await h.forEach(async e=>{if(l>1)return;const{_id:t,element:s}=e;if(!s.startsWith("[")||o!==e.lang){const c={from:g.lang,to:o},a=await he(s,c);r(G({_id:t,lang:o,caption:a})),l=l+1}})};return n.jsxs(et,{children:[h.map((o,l,e)=>n.jsx(ve,{el:o,index:l,length:e.length,sortByDate:v,setSortByDate:C,translateAll:A,liColor:w,setLiColor:f},o._id)),n.jsx(fe,{filtredElements:h,setLiColor:f})]})},{s:ue,m:nt}=B.indents,it=()=>n.jsx(ee,{$p:`0 ${nt} ${ue} ${ue}`,children:n.jsx(st,{})});export{it as default};
