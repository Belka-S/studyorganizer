import{s as g,t as R,P as p,j as n,S as Ce,u as W,b as q,q as J,y as U,R as we,T as z,J as N,w as Y,D as ee,U as te,V as P,Q as F,W as Se,n as _,X as se,Y as ue,r as B,Z as Ee,_ as Te,$ as Be,a0 as G,a1 as pe,a2 as de,F as Z,C as Fe,a3 as Re,A as We,z as _e,a4 as Le,a5 as ze}from"./index-19a5e894.js";import{T as De}from"./index.esm-bb98ee2b.js";import{a as Ie}from"./index.esm-4c24ba35.js";import{v as Oe,u as Ve}from"./index.esm-6849416f.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.2,label:"Rate: 0.2"},{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.7,label:"Rate: 0.7"},{value:.8,label:"Rate: 0.8"},{value:.9,label:"Rate: 0.9"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}],{colors:Q}=R,Me=g.div`
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
`,he=({onClick:l})=>n.jsx(Me,{onClick:l,children:n.jsx(Ce,{size:"26px"})});he.propTypes={onClick:p.func};const{background:X,backgroundHoverd:O,white:V,borderLight:M}=R.colors,{button:ne}=R.shadows,me=({filtredElements:l,setLiColor:u})=>{const d=W(),{user:$}=q(),{activeCluster:i}=J(),{activeElement:k}=U(),S=s=>{if(!s.length)return;let e="",t=0;const o=s.reduce((r,a)=>(r[a.lang]||(r[a.lang]=0),r[a.lang]+=1,r),{});for(const r in o)o[r]>t&&(t=o[r],e=r);return e},f=l.length?S(l):$.lang,c=({value:s})=>{d(Y({_id:i._id,lang:s})).unwrap().then(e=>d(ee(e.result.cluster)))},y=({value:s})=>{d(Y({_id:i._id,rate:s})).unwrap().then(e=>d(ee(e.result.cluster)))},A=({value:s})=>{const e=new FormData;e.append("lang",s),d(te(e))},x=({value:s})=>{const e=new FormData;e.append("rate",s),d(te(e))},j=(s,e)=>s.replaceAll(",`",";").replaceAll(" `",`${e} `),h=({text:s,playList:e,divider:t})=>{let o="";for(let r=0;r<e.length;r+=1){let a=e[r][s];a.endsWith(".")||a.endsWith("!")||a.endsWith("?")||a.endsWith('"')?o+=j(a,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`${t}`,s==="caption"?`@±@${e[r].lang}${t}`:`${t}`):e[r].element.startsWith("[")||(s==="caption"&&(a.includes(" [")&&(a=a.substring(0,a.indexOf(" ["))),a=`${a}@±@${e[r].lang}`),o+=a+t)}return o},v=s=>{u(X);const e="$*@",t=l.findIndex(a=>a.element===k.element),o=l.splice(t===-1?0:t),r=P({setLiColor:u,divider:e,text:h({text:"element",playList:o,divider:e}),lang:i.lang,rate:i.rate});s.target.blur(),r&&F.error(r)},b=s=>{const e="$*@";u(X);const t=l.findIndex(a=>a.element===k.element),o=l.splice(t===-1?0:t),r=P({setLiColor:u,divider:e,text:h({text:"caption",playList:o,divider:e}),lang:f,rate:$.rate});s.target.blur(),r&&F.error(r)},C=s=>{u(X);let e="";const t="$*@",o=l.findIndex(w=>w.element===k.element),r=l.splice(o===-1?0:o);for(let w=0;w<r.length;w+=1){const{element:E,caption:T,lang:K}=r[w];if(!E.startsWith("[")){const je=j(E,""),ve=T.includes(" [")?T.substring(0,T.indexOf(" [")):T;e+=je+`@±@${K}`+ve+t}}const a=Se({setLiColor:u,divider:t,text:e,lang:i.lang,rate:$.rate});s.target.blur(),a&&F.error(a)};return n.jsxs(we,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===(i==null?void 0:i.lang)),onChange:c,placeholder:"Language...",$ol:O,$b:V,$bh:M}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==(i==null?void 0:i.rate)),onChange:y,placeholder:"Rate...",$ol:O,$b:V,$bh:M}),n.jsx(N,{onClick:v,$s:"m",$bs:ne,children:(i==null?void 0:i.lang.at(0).toUpperCase())+(i==null?void 0:i.lang.substring(1))}),n.jsx(he,{onClick:C}),n.jsx(N,{onClick:b,$s:"m",$bs:ne,children:(f==null?void 0:f.at(0).toUpperCase())+(f==null?void 0:f.substring(1))}),n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===$.lang),onChange:A,placeholder:"Language...",$ol:O,$b:V,$bh:M}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==$.rate),onChange:x,placeholder:"Rate...",$ol:O,$b:V,$bh:M})]})};me.propTypes={filtredElements:p.array,setLiColor:p.func};const{colors:m,shadows:le,indents:re}=R,Ue=_`
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
    ${Oe}
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
`,ke=({el:l,sortByDate:u,setSortByDate:d,setLiColor:$})=>{const i=W(),{user:k}=q(),{activeCluster:S}=J(),{element:f,caption:c}=l,y="$*@",A=(e,t)=>{let o="";return t?(e.trim().endsWith(".")||e.trim().endsWith("!")||e.trim().endsWith("?")||e.endsWith('"')?o=e.trim().replaceAll(",`",";").replaceAll(" `",`${t} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9."):o=e.trim()+t,o.includes("[")?o.substring(0,o.indexOf("["))+t:o):e},x=e=>{const t=P({setLiColor:$,divider:y,text:A(f,y),lang:S.lang,rate:S.rate});e.target.blur(),t&&F.error(t)},j=e=>{const t=P({setLiColor:$,divider:y,text:A(c,y),lang:l.lang,rate:k.rate});e.target.blur(),t&&F.error(t)},h=e=>{d(!u),u?F.success("Below is Recent"):F.success("Above is Recent"),e.stopPropagation()},v=e=>{const{_id:t}=S;i(ue(l)),e.currentTarget.closest("li").id!=="active-element"&&i(Y({_id:t,activeEl:l._id}))},b=c.endsWith("mp3"),C=!b&&c.startsWith("http"),s=!b&&!C;return n.jsxs(Je,{onClick:v,children:[n.jsx(ce,{onClick:x,children:f}),n.jsx(Qe,{onClick:h}),b&&n.jsx(et,{controls:!0,src:se(c)}),C&&n.jsx(Ne,{src:se(c)}),s&&n.jsx(ce,{onClick:j,children:c})]})};ke.propTypes={el:p.object,sortByDate:p.bool,setSortByDate:p.func,$active:p.bool,$hovered:p.bool,setLiColor:p.func};const Ae=({el:l,article:u,isForm:d,setIsForm:$})=>{const i=W(),{user:k}=q(),{activeCluster:S}=J(),{_id:f,element:c,caption:y}=l,A=d+24,{register:x,watch:j,setValue:h,handleSubmit:v,setFocus:b}=Ve({mode:"onBlur",defaultValues:{element:c,caption:y}});B.useEffect(()=>{b("element"),u&&c.trim().startsWith("der")?h("element",u+c.replace("der","").trim()+", "):u&&c.trim().startsWith("die")?h("element",u+c.replace("die","").trim()+", "):u&&c.trim().startsWith("das")?h("element",u+c.replace("das","").trim()+", "):u?h("element",u+c+", "):h("element",u+c)},[u,c,b,h]),B.useEffect(()=>{const e=async t=>{t.key==="+"&&(t.preventDefault(),await s(),v(C)()),t.key==="Enter"&&(t.preventDefault(),v(C)()),t.key==="Escape"&&$(!1)};return addEventListener("keydown",e),()=>{removeEventListener("keydown",e)}},[]);const C=e=>{const t=k.lang;let o=e.element.split(/\s+/).join(" ").trim(),r=e.caption.trim();o.endsWith(",")&&(o=o.substring(0,o.length-1)),o.includes("·")&&(o=o.replaceAll(" ·",",").replaceAll("· ",", ")),r.endsWith(",")&&(r=r.substring(0,r.length-1)),i(G({_id:f,lang:t,element:o,caption:r})).then(i(pe())),$(!1)},s=async()=>{let e=j("element");const t=[".","!","?"].includes(e.at(e.length-1)),o=!t&&e.split(/\s+/);["der","die","das"].includes(o[0])&&(e=o[1]);const r=!t&&e.split(",");r.length===3&&(e=r[0]+",");const a={from:S.lang,to:k.lang},w=await de(e,a);h("caption",w)};return n.jsxs(Ke,{onSubmit:v(C),children:[n.jsx(ae,{...x("element"),style:{height:A}}),n.jsxs(Xe,{children:[n.jsx(Ye,{children:n.jsx(Ee,{size:"16px"})}),n.jsx(Ze,{type:"button",onClick:()=>$(A),children:n.jsx(Te,{size:"16px"})}),n.jsx(be,{type:"button",onClick:s,children:n.jsx(Be,{size:"16px"})})]}),n.jsx(ae,{...x("caption"),style:{height:A}})]})};Ae.propTypes={el:p.object,article:p.string,isForm:p.oneOfType([p.bool,p.number]),setIsForm:p.func};const ye=({el:l,index:u,length:d,sortByDate:$,setSortByDate:i,translateAll:k,liColor:S,setLiColor:f})=>{const c=W(),{elementTrash:y,activeElement:A}=U(),[x,j]=B.useState(!1),{_id:h,favorite:v,checked:b}=l,C=y.find(T=>T._id===h),[s,e]=B.useState(""),t=()=>{c(G({_id:h,favorite:!v}))},o=()=>{c(G({_id:h,checked:!b}))},r=()=>c(Le(l)),a=T=>{if(x)j(!1);else{const K=T.target.closest("div").clientHeight;j(K)}},w=()=>{s===""&&e("der "),s==="der "&&e("die "),s==="die "&&e("das "),s==="das "&&e("")},E=h===(A==null?void 0:A._id);return n.jsxs(Pe,{id:E?"active-element":null,licolor:S,children:[n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Ge,{$hovered:v,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:v,onChange:t}),n.jsx(De,{size:"20px"})]}),n.jsxs(He,{$hovered:b,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:b,onChange:o}),n.jsx(Fe,{size:"15px"})]}),x&&d===u+1&&n.jsx(be,{onClick:k,children:n.jsx(Re,{size:"16px"})})]}),x&&n.jsx(Ae,{el:l,article:s,isForm:x,setIsForm:j}),!x&&n.jsx(ke,{el:l,sortByDate:$,setSortByDate:i,setLiColor:f}),n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(qe,{$hovered:C,onClick:r,children:n.jsx(We,{size:"16px"})}),x&&n.jsx(oe,{onClick:w,children:n.jsx(Ie,{size:"18px"})}),n.jsx(oe,{onClick:a,children:n.jsx(_e,{size:"15px"})})]})]})};ye.propTypes={el:p.object,index:p.number,length:p.number,sortByDate:p.bool,setSortByDate:p.func,translateAll:p.func,liColor:p.string,setLiColor:p.func};const tt=g.ul`
  width: 100%;
  list-style: none;
`,{white:st}=R.colors,nt=()=>{const l=W(),{user:u}=q(),{activeCluster:d}=J(),{allElements:$,elementTrash:i,elementFilter:k}=U(),[S,f]=B.useState(st);let{elementSelect:c}=U();c=c||[];const[y,A]=B.useState(!1),[x,j]=B.useState(!0);B.useEffect(()=>{d&&l(pe({cluster:d._id})).unwrap().then(({result:s})=>{if(!d.activeEl)return;const e=s.elements.find(({_id:t})=>t===d.activeEl);l(ue(e))}).then(()=>{const s=document.getElementById("active-element");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})(),j(!1)})},[]);const h=$.filter(s=>s.cluster===(d==null?void 0:d._id)).sort((s,e)=>s.createdAt.localeCompare(e.createdAt)),b=(()=>{const s=i.map(e=>e._id);return c.includes("trash")?h.filter(e=>s.includes(e._id)):h})().filter(({element:s,caption:e,favorite:t,checked:o})=>{const r=s.toLowerCase().replace("·","").includes(k)||s.toLowerCase().includes(k)||e.toLowerCase().includes(k),a=()=>c.some(E=>["favorite","unfavorite"].includes(E))?c.includes("favorite")?r&&t===!0:r&&t===!1:r;return(()=>c.some(E=>["checked","unchecked"].includes(E))?c.includes("checked")?a()&&o===!0:a()&&o===!1:a())()}).sort(y?(s,e)=>e.createdAt.localeCompare(s.createdAt):(s,e)=>s.createdAt.localeCompare(e.createdAt)),C=async()=>{const s=u.lang;let e=0;await b.forEach(async t=>{if(e>1)return;const{_id:o,element:r}=t;if(!r.startsWith("[")||s!==t.lang){const a={from:d.lang,to:s},w=await de(r,a);l(G({_id:o,lang:s,caption:w})),e=e+1}})};return n.jsxs(n.Fragment,{children:[n.jsxs(tt,{children:[b.map((s,e,t)=>n.jsx(ye,{el:s,index:e,length:t.length,sortByDate:y,setSortByDate:A,translateAll:C,liColor:S,setLiColor:f},s._id)),n.jsx(me,{filtredElements:b,setLiColor:f})]}),x&&n.jsx(ze,{})]})},{s:ie,m:lt}=R.indents,it=()=>n.jsx(Z,{$p:`0 ${lt} ${ie} ${ie}`,children:n.jsx(nt,{})});export{it as default};
