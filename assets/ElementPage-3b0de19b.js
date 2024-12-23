import{s as g,t as R,P as p,j as n,S as Ce,u as W,b as q,q as J,y as U,R as we,T as z,J as N,w as Y,D as ee,U as te,V as P,Q as F,W as Se,n as _,X as se,Y as ue,r as B,Z as Ee,_ as Te,$ as G,a0 as pe,a1 as de,F as Z,C as Be,a2 as Fe,A as Re,z as We,a3 as _e,a4 as Le}from"./index-c7eca29a.js";import{T as ze}from"./index.esm-5adc6504.js";import{a as De}from"./index.esm-0583fcc0.js";import{v as Ie,u as Oe}from"./index.esm-50a6cb15.js";import{S as Ve}from"./index.esm-9c6c9b87.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.2,label:"Rate: 0.2"},{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.7,label:"Rate: 0.7"},{value:.8,label:"Rate: 0.8"},{value:.9,label:"Rate: 0.9"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}],{colors:Q}=R,Me=g.div`
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
`,he=({onClick:l})=>n.jsx(Me,{onClick:l,children:n.jsx(Ce,{size:"26px"})});he.propTypes={onClick:p.func};const{background:X,backgroundHoverd:O,white:V,borderLight:M}=R.colors,{button:ne}=R.shadows,me=({filtredElements:l,setLiColor:u})=>{const d=W(),{user:$}=q(),{activeCluster:i}=J(),{activeElement:k}=U(),w=s=>{if(!s.length)return;let t="",e=0;const r=s.reduce((o,c)=>(o[c.lang]||(o[c.lang]=0),o[c.lang]+=1,o),{});for(const o in r)r[o]>e&&(e=r[o],t=o);return t},f=l.length?w(l):$.lang,a=({value:s})=>{d(Y({_id:i._id,lang:s})).unwrap().then(t=>d(ee(t.result.cluster)))},y=({value:s})=>{d(Y({_id:i._id,rate:s})).unwrap().then(t=>d(ee(t.result.cluster)))},A=({value:s})=>{const t=new FormData;t.append("lang",s),d(te(t))},x=({value:s})=>{const t=new FormData;t.append("rate",s),d(te(t))},j=(s,t)=>s.replaceAll(",`",";").replaceAll(" `",`${t} `),h=({text:s,playList:t,divider:e})=>{let r="";for(let o=0;o<t.length;o+=1){let c=t[o][s];c.endsWith(".")||c.endsWith("!")||c.endsWith("?")||c.endsWith('"')?r+=j(c,e).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`${e}`,s==="caption"?`@±@${t[o].lang}${e}`:`${e}`):t[o].element.startsWith("[")||(s==="caption"&&(c.includes(" [")&&(c=c.substring(0,c.indexOf(" ["))),c=`${c}@±@${t[o].lang}`),r+=c+e)}return r},v=s=>{u(X);const t="$*@",e=l.findIndex(c=>c.element===k.element),r=l.splice(e===-1?0:e),o=P({setLiColor:u,divider:t,text:h({text:"element",playList:r,divider:t}),lang:i.lang,rate:i.rate});s.target.blur(),o&&F.error(o)},b=s=>{const t="$*@";u(X);const e=l.findIndex(c=>c.element===k.element),r=l.splice(e===-1?0:e),o=P({setLiColor:u,divider:t,text:h({text:"caption",playList:r,divider:t}),lang:f,rate:$.rate});s.target.blur(),o&&F.error(o)},C=s=>{u(X);let t="";const e="$*@",r=l.findIndex(S=>S.element===k.element),o=l.splice(r===-1?0:r);for(let S=0;S<o.length;S+=1){const{element:E,caption:T,lang:K}=o[S];if(!E.startsWith("[")){const je=j(E,""),ve=T.includes(" [")?T.substring(0,T.indexOf(" [")):T;t+=je+`@±@${K}`+ve+e}}const c=Se({setLiColor:u,divider:e,text:t,lang:i.lang,rate:$.rate});s.target.blur(),c&&F.error(c)};return n.jsxs(we,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===(i==null?void 0:i.lang)),onChange:a,placeholder:"Language...",$ol:O,$b:V,$bh:M}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==(i==null?void 0:i.rate)),onChange:y,placeholder:"Rate...",$ol:O,$b:V,$bh:M}),n.jsx(N,{onClick:v,$s:"m",$bs:ne,children:(i==null?void 0:i.lang.at(0).toUpperCase())+(i==null?void 0:i.lang.substring(1))}),n.jsx(he,{onClick:C}),n.jsx(N,{onClick:b,$s:"m",$bs:ne,children:(f==null?void 0:f.at(0).toUpperCase())+(f==null?void 0:f.substring(1))}),n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===$.lang),onChange:A,placeholder:"Language...",$ol:O,$b:V,$bh:M}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==$.rate),onChange:x,placeholder:"Rate...",$ol:O,$b:V,$bh:M})]})};me.propTypes={filtredElements:p.array,setLiColor:p.func};const{colors:m,shadows:le,indents:re}=R,Ue=_`
  margin-bottom: 7px;
  padding-block: ${re.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:l})=>l};
  border-radius: ${re.xs};
  font-size: 22px;
`,Pe=g.li`
  ${Ue}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${m.border};
    background-color: ${m.background};
    box-shadow: ${le.back};

    &:hover {
      border-color: ${m.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${m.smokeBlack};
      &:hover {
        color: ${m.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${m.hovered};
    }
  }

  &:hover {
    border-color: ${m.accent};
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
    ${Ie}
  }
`,Ge=g.label`
  ${ge}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:l})=>l?m.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?m.yellow:m.border};
  }
  &:hover svg {
    stroke: ${m.placeholder};
  }
`,He=g.label`
  ${ge}
  opacity: ${({$hovered:l})=>l?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${m.border};
    border-radius: 50%;
    color: ${({$hovered:l})=>l?m.border:"transparent"};
  }
  &:hover svg {
    border-color: ${m.placeholder};
    color: ${({$hovered:l})=>l?m.placeholder:"transparent"};
  }
`,L=_`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${m.black};

  & svg {
    transition: color 250ms;
    color: ${m.border};
  }
  &:hover,
  &:hover svg {
    color: ${m.placeholder};
  }
`,qe=g.button`
  ${L}

  opacity: ${({$hovered:l})=>l?1:0};
`,oe=g.button`
  ${L}

  opacity: 0;
`,{colors:H,indents:fe}=R,$e=_`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Je=g.div`
  ${$e}
`,Ke=g.form`
  ${$e}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ae=g.textarea`
  outline: none;
  border: 1px solid ${H.accent};
  border-radius: ${fe.xs};
  resize: none;
`,Qe=g.div`
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
`,Xe=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ye=g.button`
  ${L}
`,Ze=g.button`
  ${L}
`,be=g.button`
  ${L}
`,ce=g.button`
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
`,Ne=g.iframe`
  ${xe}

  height: 60px;
  border-radius: 30px;
`,et=g.audio`
  ${xe}
`,ke=({el:l,sortByDate:u,setSortByDate:d,setLiColor:$})=>{const i=W(),{user:k}=q(),{activeCluster:w}=J(),{element:f,caption:a}=l,y="$*@",A=(t,e)=>{let r="";return e?(t.trim().endsWith(".")||t.trim().endsWith("!")||t.trim().endsWith("?")||t.endsWith('"')?r=t.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):r=t.trim()+e,r.includes("[")?r.substring(0,r.indexOf("["))+e:r):t},x=t=>{const e=P({setLiColor:$,divider:y,text:A(f,y),lang:w.lang,rate:w.rate});t.target.blur(),e&&F.error(e)},j=t=>{const e=P({setLiColor:$,divider:y,text:A(a,y),lang:l.lang,rate:k.rate});t.target.blur(),e&&F.error(e)},h=t=>{d(!u),u?F.success("Below is Recent"):F.success("Above is Recent"),t.stopPropagation()},v=t=>{const{_id:e}=w;i(ue(l)),t.currentTarget.closest("li").id!=="active-element"&&i(Y({_id:e,activeEl:l._id}))},b=a.endsWith("mp3"),C=!b&&a.startsWith("http"),s=!b&&!C;return n.jsxs(Je,{onClick:v,children:[n.jsx(ce,{onClick:x,children:f}),n.jsx(Qe,{onClick:h}),b&&n.jsx(et,{controls:!0,src:se(a)}),C&&n.jsx(Ne,{src:se(a)}),s&&n.jsx(ce,{onClick:j,children:a})]})};ke.propTypes={el:p.object,sortByDate:p.bool,setSortByDate:p.func,$active:p.bool,$hovered:p.bool,setLiColor:p.func};const Ae=({el:l,article:u,isForm:d,setIsForm:$})=>{const i=W(),{user:k}=q(),{activeCluster:w}=J(),{_id:f,element:a,caption:y}=l,A=d+24,{register:x,watch:j,setValue:h,handleSubmit:v,setFocus:b}=Oe({mode:"onBlur",defaultValues:{element:a,caption:y}});B.useEffect(()=>{b("element"),u&&a.trim().startsWith("der")?h("element",u+a.replace("der","").trim()+", "):u&&a.trim().startsWith("die")?h("element",u+a.replace("die","").trim()+", "):u&&a.trim().startsWith("das")?h("element",u+a.replace("das","").trim()+", "):u?h("element",u+a+", "):h("element",u+a)},[u,a,b,h]),B.useEffect(()=>{const t=async e=>{e.key==="+"&&(e.preventDefault(),await s(),v(C)()),e.key==="Enter"&&(e.preventDefault(),v(C)()),e.key==="Escape"&&$(!1)};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const C=t=>{const e=k.lang;let r=t.element.split(/\s+/).join(" ").trim(),o=t.caption.trim();r.endsWith(",")&&(r=r.substring(0,r.length-1)),r.includes("·")&&(r=r.replaceAll(" ·",",").replaceAll("· ",", ")),o.endsWith(",")&&(o=o.substring(0,o.length-1)),i(G({_id:f,lang:e,element:r,caption:o})).then(i(pe())),$(!1)},s=async()=>{const t=j("element"),e={from:w.lang,to:k.lang},r=await de(t,e);h("caption",r)};return n.jsxs(Ke,{onSubmit:v(C),children:[n.jsx(ae,{...x("element"),style:{height:A}}),n.jsxs(Xe,{children:[n.jsx(Ye,{children:n.jsx(Ee,{size:"16px"})}),n.jsx(Ze,{type:"button",onClick:()=>$(A),children:n.jsx(Te,{size:"16px"})}),n.jsx(be,{type:"button",onClick:s,children:n.jsx(Ve,{size:"16px"})})]}),n.jsx(ae,{...x("caption"),style:{height:A}})]})};Ae.propTypes={el:p.object,article:p.string,isForm:p.oneOfType([p.bool,p.number]),setIsForm:p.func};const ye=({el:l,index:u,length:d,sortByDate:$,setSortByDate:i,translateAll:k,liColor:w,setLiColor:f})=>{const a=W(),{elementTrash:y,activeElement:A}=U(),[x,j]=B.useState(!1),{_id:h,favorite:v,checked:b}=l,C=y.find(T=>T._id===h),[s,t]=B.useState(""),e=()=>{a(G({_id:h,favorite:!v}))},r=()=>{a(G({_id:h,checked:!b}))},o=()=>a(_e(l)),c=T=>{if(x)j(!1);else{const K=T.target.closest("div").clientHeight;j(K)}},S=()=>{s===""&&t("der "),s==="der "&&t("die "),s==="die "&&t("das "),s==="das "&&t("")},E=h===(A==null?void 0:A._id);return n.jsxs(Pe,{id:E?"active-element":null,licolor:w,children:[n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Ge,{$hovered:v,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:v,onChange:e}),n.jsx(ze,{size:"20px"})]}),n.jsxs(He,{$hovered:b,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:b,onChange:r}),n.jsx(Be,{size:"15px"})]}),x&&d===u+1&&n.jsx(be,{onClick:k,children:n.jsx(Fe,{size:"16px"})})]}),x&&n.jsx(Ae,{el:l,article:s,isForm:x,setIsForm:j}),!x&&n.jsx(ke,{el:l,sortByDate:$,setSortByDate:i,setLiColor:f}),n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(qe,{$hovered:C,onClick:o,children:n.jsx(Re,{size:"16px"})}),x&&n.jsx(oe,{onClick:S,children:n.jsx(De,{size:"18px"})}),n.jsx(oe,{onClick:c,children:n.jsx(We,{size:"15px"})})]})]})};ye.propTypes={el:p.object,index:p.number,length:p.number,sortByDate:p.bool,setSortByDate:p.func,translateAll:p.func,liColor:p.string,setLiColor:p.func};const tt=g.ul`
  width: 100%;
  list-style: none;
`,{white:st}=R.colors,nt=()=>{const l=W(),{user:u}=q(),{activeCluster:d}=J(),{allElements:$,elementTrash:i,elementFilter:k}=U(),[w,f]=B.useState(st);let{elementSelect:a}=U();a=a||[];const[y,A]=B.useState(!1),[x,j]=B.useState(!0);B.useEffect(()=>{d&&l(pe({cluster:d._id})).unwrap().then(({result:s})=>{if(!d.activeEl)return;const t=s.elements.find(({_id:e})=>e===d.activeEl);l(ue(t))}).then(()=>{const s=document.getElementById("active-element");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})(),j(!1)})},[]);const h=$.filter(s=>s.cluster===(d==null?void 0:d._id)).sort((s,t)=>s.createdAt.localeCompare(t.createdAt)),b=(()=>{const s=i.map(t=>t._id);return a.includes("trash")?h.filter(t=>s.includes(t._id)):h})().filter(({element:s,caption:t,favorite:e,checked:r})=>{const o=s.toLowerCase().replace("·","").includes(k)||s.toLowerCase().includes(k)||t.toLowerCase().includes(k),c=()=>a.some(E=>["favorite","unfavorite"].includes(E))?a.includes("favorite")?o&&e===!0:o&&e===!1:o;return(()=>a.some(E=>["checked","unchecked"].includes(E))?a.includes("checked")?c()&&r===!0:c()&&r===!1:c())()}).sort(y?(s,t)=>t.createdAt.localeCompare(s.createdAt):(s,t)=>s.createdAt.localeCompare(t.createdAt)),C=async()=>{const s=u.lang;let t=0;await b.forEach(async e=>{if(t>1)return;const{_id:r,element:o}=e;if(!o.startsWith("[")||s!==e.lang){const c={from:d.lang,to:s},S=await de(o,c);l(G({_id:r,lang:s,caption:S})),t=t+1}})};return n.jsxs(n.Fragment,{children:[n.jsxs(tt,{children:[b.map((s,t,e)=>n.jsx(ye,{el:s,index:t,length:e.length,sortByDate:y,setSortByDate:A,translateAll:C,liColor:w,setLiColor:f},s._id)),n.jsx(me,{filtredElements:b,setLiColor:f})]}),x&&n.jsx(Le,{})]})},{s:ie,m:lt}=R.indents,ut=()=>n.jsx(Z,{$p:`0 ${lt} ${ie} ${ie}`,children:n.jsx(nt,{})});export{ut as default};
