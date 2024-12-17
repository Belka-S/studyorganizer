import{s as b,t as W,P as h,j as n,T as Ce,u as K,b as q,q as _,y as P,S as we,U as D,K as te,w as N,D as se,V as ne,W as G,Q as T,X as Ee,n as F,Y as le,r as E,Z as Se,_ as Te,$ as O,J as de,a0 as he,F as ee,C as We,a1 as Be,A as _e,z as Fe,a2 as Re,a3 as me}from"./index-686e102d.js";import{T as Le}from"./index.esm-ccf522e2.js";import{a as De}from"./index.esm-d03fb4f2.js";import{v as ze,u as Ie}from"./index.esm-88118536.js";import{S as Me}from"./index.esm-fd81fffc.js";const z=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Y}=W,Ve=b.div`
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
    /* stroke: ${({$colored:l})=>l&&Y.yellow}; */
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
`,ge=({onClick:l})=>n.jsx(Ve,{onClick:l,children:n.jsx(Ce,{size:"26px"})});ge.propTypes={onClick:h.func};const{background:Z,backgroundHoverd:M,white:V,borderLight:U}=W.colors,{button:re}=W.shadows,fe=({filtredElements:l,setLiColor:u})=>{const g=K(),{user:x}=q(),{activeCluster:p}=_(),{activeElement:k}=P(),w=e=>{if(!e.length)return;let t="",s=0;const a=e.reduce((o,m)=>(o[m.lang]||(o[m.lang]=0),o[m.lang]+=1,o),{});for(const o in a)a[o]>s&&(s=a[o],t=o);return t},f=l.length?w(l):x.lang,i=({value:e})=>{g(N({_id:p._id,lang:e})).unwrap().then(t=>g(se(t.result.cluster)))},v=({value:e})=>{g(N({_id:p._id,rate:e})).unwrap().then(t=>g(se(t.result.cluster)))},C=({value:e})=>{const t=new FormData;t.append("lang",e),g(ne(t))},j=({value:e})=>{const t=new FormData;t.append("rate",e),g(ne(t))},y=(e,t)=>e.replaceAll(",`",";").replaceAll(" `",`${t} `),d=({text:e,playList:t,divider:s})=>{let a="";for(let o=0;o<t.length;o+=1){let m=t[o][e];m.endsWith(".")||m.endsWith("!")||m.endsWith("?")||m.endsWith('"')?a+=y(m,s).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${s}`).replaceAll(".",`.${s}`).replaceAll(",",`,${s}`).replaceAll("!",`!${s}`).replaceAll("?",`?${s}`).replaceAll(":",`:${s}`).replaceAll(`0.${s}`,"0.").replaceAll(`1.${s}`,"1.").replaceAll(`2.${s}`,"2.").replaceAll(`3.${s}`,"3.").replaceAll(`4.${s}`,"4.").replaceAll(`5.${s}`,"5.").replaceAll(`6.${s}`,"6.").replaceAll(`7.${s}`,"7.").replaceAll(`8.${s}`,"8.").replaceAll(`9.${s}`,"9.").replaceAll(`${s}`,e==="caption"?`@±@${t[o].lang}${s}`:`${s}`):t[o].element.startsWith("[")||(e==="caption"&&(m=`${m}@±@${t[o].lang}`),a+=m.replaceAll(".",s)+s)}return a},A=e=>{u(Z);const t="$*@",s=l.findIndex(m=>m.element===k),a=l.splice(s===-1?0:s),o=G({setLiColor:u,divider:t,text:d({text:"element",playList:a,divider:t}),lang:p.lang,rate:p.rate});e.target.blur(),o&&T.error(o)},c=e=>{const t="$*@";u(Z);const s=l.findIndex(m=>m.element===k),a=l.splice(s===-1?0:s),o=G({setLiColor:u,divider:t,text:d({text:"caption",playList:a,divider:t}),lang:x.lang,rate:x.rate});e.target.blur(),o&&T.error(o)},r=e=>{u(Z);let t="";const s="$*@",a=l.findIndex(S=>S.element===k),o=l.splice(a===-1?0:a);for(let S=0;S<o.length;S+=1){const{element:L,caption:J,lang:Q}=o[S];L.startsWith("[")||(t+=y(L,"")+`@±@${Q}`+J+s)}const m=Ee({setLiColor:u,divider:s,text:t,lang:p.lang,rate:x.rate});e.target.blur(),m&&T.error(m)};return n.jsxs(we,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(D,{options:z,defaultValue:z.find(e=>e.value===(p==null?void 0:p.lang)),onChange:i,placeholder:"Language...",$ol:M,$b:V,$bh:U}),n.jsx(D,{options:I,defaultValue:I.find(e=>e.value==(p==null?void 0:p.rate)),onChange:v,placeholder:"Rate...",$ol:M,$b:V,$bh:U}),n.jsx(te,{onClick:A,$s:"m",$bs:re,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),n.jsx(ge,{onClick:r}),n.jsx(te,{onClick:c,$s:"m",$bs:re,children:(f==null?void 0:f.at(0).toUpperCase())+(f==null?void 0:f.substring(1))}),n.jsx(D,{options:z,defaultValue:z.find(e=>e.value===x.lang),onChange:C,placeholder:"Language...",$ol:M,$b:V,$bh:U}),n.jsx(D,{options:I,defaultValue:I.find(e=>e.value==x.rate),onChange:j,placeholder:"Rate...",$ol:M,$b:V,$bh:U})]})};fe.propTypes={filtredElements:h.array,setLiColor:h.func};const{colors:$,shadows:oe,indents:ae}=W,Ue=F`
  margin-bottom: 7px;
  padding-block: ${ae.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${ae.xs};
  font-size: 22px;
`,Pe=b.li`
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
    ${ze}
  }
`,Ge=b.label`
  ${$e}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:l})=>l?$.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?$.yellow:$.border};
  }
  &:hover svg {
    stroke: ${$.placeholder};
  }
`,Oe=b.label`
  ${$e}
  opacity: ${({$hovered:l})=>l?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${$.border};
    border-radius: 50%;
    color: ${({$hovered:l})=>l?$.border:"transparent"};
  }
  &:hover svg {
    border-color: ${$.placeholder};
    color: ${({$hovered:l})=>l?$.placeholder:"transparent"};
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

  opacity: ${({$hovered:l})=>l?1:0};
`,ce=b.button`
  ${R}

  opacity: 0;
`,{colors:H,indents:be}=W,xe=F`
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
`,ye=({el:l,sortByDate:u,setSortByDate:g,setLiColor:x})=>{const{user:p}=q(),{activeCluster:k}=_(),{element:w,caption:f}=l,i="$*@",v=(r,e)=>{let t="";return e?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?t=r.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):t=r.trim()+e,t.includes("[")?t.substring(0,t.indexOf("[")):t):r},C=r=>{const e=G({setLiColor:x,divider:i,text:v(w,i),lang:k.lang,rate:k.rate});r.target.blur(),e&&T.error(e)},j=r=>{const e=G({setLiColor:x,divider:i,text:v(f,i),lang:l.lang,rate:p.rate});r.target.blur(),e&&T.error(e)},y=r=>{g(!u),u?T.success("Below is Recent"):T.success("Above is Recent"),r.stopImmediatePropagation()},d=f.endsWith("mp3"),A=!d&&f.startsWith("http"),c=!d&&!A;return n.jsxs(Ke,{children:[n.jsx(pe,{onClick:C,children:w}),n.jsx(Je,{onClick:y}),d&&n.jsx(Ne,{controls:!0,src:le(f)}),A&&n.jsx(Ze,{src:le(f)}),c&&n.jsx(pe,{onClick:j,children:f})]})};ye.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,$active:h.bool,$hovered:h.bool,setLiColor:h.func};const je=({el:l,article:u,isForm:g,setIsForm:x})=>{const p=K(),{user:k}=q(),{activeCluster:w}=_(),{_id:f,element:i,caption:v}=l,C=g+24,{register:j,watch:y,setValue:d,handleSubmit:A,setFocus:c}=Ie({mode:"onBlur",defaultValues:{element:i,caption:v}});E.useEffect(()=>{c("element"),u&&i.trim().startsWith("der")?d("element",u+i.replace("der","").trim()+", "):u&&i.trim().startsWith("die")?d("element",u+i.replace("die","").trim()+", "):u&&i.trim().startsWith("das")?d("element",u+i.replace("das","").trim()+", "):u?d("element",u+i+", "):d("element",u+i)},[u,i,c,d]),E.useEffect(()=>{const t=async s=>{s.key==="+"&&(s.preventDefault(),await e(),A(r)()),s.key==="Enter"&&(s.preventDefault(),A(r)()),s.key==="Escape"&&x(!1)};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const r=t=>{const s=k.lang;let a=t.element.split(/\s+/).join(" ").trim(),o=t.caption.trim();a.endsWith(",")&&(a=a.substring(0,a.length-1)),a.includes("·")&&(a=a.replaceAll(" ·",",").replaceAll("·",",")),o.endsWith(",")&&(o=o.substring(0,o.length-1)),p(O({_id:f,lang:s,element:a,caption:o})).then(p(de())),x(!1)},e=async()=>{const t=y("element"),s={from:w.lang,to:k.lang},a=await he(t,s);d("caption",a)};return n.jsxs(qe,{onSubmit:A(r),children:[n.jsx(ie,{...j("element"),style:{height:C}}),n.jsxs(Qe,{children:[n.jsx(Xe,{children:n.jsx(Se,{size:"16px"})}),n.jsx(Ye,{type:"button",onClick:()=>x(C),children:n.jsx(Te,{size:"16px"})}),n.jsx(ke,{type:"button",onClick:e,children:n.jsx(Me,{size:"16px"})})]}),n.jsx(ie,{...j("caption"),style:{height:C}})]})};je.propTypes={el:h.object,article:h.string,isForm:h.oneOfType([h.bool,h.number]),setIsForm:h.func};const ve=({el:l,index:u,length:g,sortByDate:x,setSortByDate:p,translateAll:k,liColor:w,setLiColor:f})=>{const i=K(),{activeCluster:v}=_(),{elementTrash:C,activeElement:j}=P(),[y,d]=E.useState(!1),{_id:A,favorite:c,checked:r}=l,e=C.find(B=>B._id===A),[t,s]=E.useState(""),a=()=>{i(O({_id:A,favorite:!c}))},o=()=>{i(O({_id:A,checked:!r}))},m=()=>i(Re(l)),S=B=>{if(y)d(!1);else{const X=B.target.closest("div").clientHeight;d(X)}},L=()=>{t===""&&s("der "),t==="der "&&s("die "),t==="die "&&s("das "),t==="das "&&s("")},J=B=>{const{_id:X}=v;i(me(l)),B.currentTarget.id!=="active-element"&&i(N({_id:X,activeEl:l._id}))},Q=A===(j==null?void 0:j._id);return n.jsxs(Pe,{id:Q?"active-element":null,onClick:J,liColor:w,children:[n.jsxs(ee,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Ge,{$hovered:c,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:c,onChange:a}),n.jsx(Le,{size:"20px"})]}),n.jsxs(Oe,{$hovered:r,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:r,onChange:o}),n.jsx(We,{size:"15px"})]}),y&&g===u+1&&n.jsx(ke,{onClick:k,children:n.jsx(Be,{size:"16px"})})]}),y&&n.jsx(je,{el:l,article:t,isForm:y,setIsForm:d}),!y&&n.jsx(ye,{el:l,sortByDate:x,setSortByDate:p,setLiColor:f}),n.jsxs(ee,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(He,{$hovered:e,onClick:m,children:n.jsx(_e,{size:"16px"})}),y&&n.jsx(ce,{onClick:L,children:n.jsx(De,{size:"18px"})}),n.jsx(ce,{onClick:S,children:n.jsx(Fe,{size:"15px"})})]})]})};ve.propTypes={el:h.object,index:h.string,length:h.string,sortByDate:h.bool,setSortByDate:h.func,translateAll:h.func,liColor:h.string,setLiColor:h.func};const et=b.ul`
  width: 100%;
  list-style: none;
`,{white:tt}=W.colors,st=()=>{const l=K(),{user:u}=q(),{activeCluster:g}=_(),{allElements:x,elementTrash:p,elementFilter:k}=P(),[w,f]=E.useState(tt);let{elementSelect:i}=P();i=i||[];const[v,C]=E.useState(!1);E.useEffect(()=>{l(de())},[l]);const j=x.filter(c=>c.cluster===(g==null?void 0:g._id)).sort((c,r)=>c.createdAt.localeCompare(r.createdAt)),d=(()=>{const c=p.map(r=>r._id);return i.includes("trash")?j.filter(r=>c.includes(r._id)):j})().filter(({element:c,caption:r,favorite:e,checked:t})=>{const s=c.toLowerCase().replace("·","").includes(k)||c.toLowerCase().includes(k)||r.toLowerCase().includes(k),a=i.includes("favorite")?s&&e===!0:s;return i.some(o=>["checked","unchecked"].includes(o))?i.includes("checked")?a&&t===!0:a&&t===!1:a}).sort(v?(c,r)=>r.createdAt.localeCompare(c.createdAt):(c,r)=>c.createdAt.localeCompare(r.createdAt)),A=async()=>{const c=u.lang;let r=0;await d.forEach(async e=>{if(r>1)return;const{_id:t,element:s}=e;if(!s.startsWith("[")||c!==e.lang){const a={from:g.lang,to:c},o=await he(s,a);l(O({_id:t,lang:c,caption:o})),r=r+1}})};return E.useEffect(()=>{(async()=>{if(!g||!g.activeEl)return;const c=await d.find(({_id:r})=>r===g.activeEl);l(me(c))})()},[]),n.jsxs(et,{children:[d.map((c,r,e)=>n.jsx(ve,{el:c,index:r,length:e.length,sortByDate:v,setSortByDate:C,translateAll:A,liColor:w,setLiColor:f},c._id)),n.jsx(fe,{filtredElements:d,setLiColor:f})]})},{s:ue,m:nt}=W.indents,it=()=>n.jsx(ee,{$p:`0 ${nt} ${ue} ${ue}`,children:n.jsx(st,{})});export{it as default};
