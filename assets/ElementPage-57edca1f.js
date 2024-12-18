import{s as g,t as B,P as u,j as n,T as je,u as F,b as K,q,y as U,S as ve,U as z,K as N,w as Y,D as ee,V as te,W as P,Q as T,X as Ce,n as _,Y as se,Z as pe,r as E,_ as we,$ as Se,a0 as G,J as ue,a1 as de,F as Z,C as Ee,a2 as Te,A as Be,z as We,a3 as Fe,a4 as _e}from"./index-26565609.js";import{T as Le}from"./index.esm-0eaa4092.js";import{a as Re}from"./index.esm-bcf92297.js";import{v as ze,u as De}from"./index.esm-a63bcd70.js";import{S as Ie}from"./index.esm-d63d98ef.js";const D=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],I=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:Q}=B,Ve=g.div`
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
`,he=({onClick:l})=>n.jsx(Ve,{onClick:l,children:n.jsx(je,{size:"26px"})});he.propTypes={onClick:u.func};const{background:X,backgroundHoverd:V,white:M,borderLight:O}=B.colors,{button:ne}=B.shadows,me=({filtredElements:l,setLiColor:p})=>{const d=F(),{user:f}=K(),{activeCluster:c}=q(),{activeElement:k}=U(),w=s=>{if(!s.length)return;let t="",e=0;const r=s.reduce((o,i)=>(o[i.lang]||(o[i.lang]=0),o[i.lang]+=1,o),{});for(const o in r)r[o]>e&&(e=r[o],t=o);return t},$=l.length?w(l):f.lang,a=({value:s})=>{d(Y({_id:c._id,lang:s})).unwrap().then(t=>d(ee(t.result.cluster)))},y=({value:s})=>{d(Y({_id:c._id,rate:s})).unwrap().then(t=>d(ee(t.result.cluster)))},A=({value:s})=>{const t=new FormData;t.append("lang",s),d(te(t))},x=({value:s})=>{const t=new FormData;t.append("rate",s),d(te(t))},j=(s,t)=>s.replaceAll(",`",";").replaceAll(" `",`${t} `),h=({text:s,playList:t,divider:e})=>{let r="";for(let o=0;o<t.length;o+=1){let i=t[o][s];i.endsWith(".")||i.endsWith("!")||i.endsWith("?")||i.endsWith('"')?r+=j(i,e).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`${e}`,s==="caption"?`@±@${t[o].lang}${e}`:`${e}`):t[o].element.startsWith("[")||(s==="caption"&&(i=`${i}@±@${t[o].lang}`),r+=i.replaceAll(".",e)+e)}return r},v=s=>{p(X);const t="$*@",e=l.findIndex(i=>i.element===k.element),r=l.splice(e===-1?0:e),o=P({setLiColor:p,divider:t,text:h({text:"element",playList:r,divider:t}),lang:c.lang,rate:c.rate});s.target.blur(),o&&T.error(o)},b=s=>{const t="$*@";p(X);const e=l.findIndex(i=>i.element===k.element),r=l.splice(e===-1?0:e),o=P({setLiColor:p,divider:t,text:h({text:"caption",playList:r,divider:t}),lang:f.lang,rate:f.rate});s.target.blur(),o&&T.error(o)},C=s=>{p(X);let t="";const e="$*@",r=l.findIndex(S=>S.element===k.element),o=l.splice(r===-1?0:r);for(let S=0;S<o.length;S+=1){const{element:R,caption:W,lang:J}=o[S];R.startsWith("[")||(t+=j(R,"")+`@±@${J}`+W+e)}const i=Ce({setLiColor:p,divider:e,text:t,lang:c.lang,rate:f.rate});s.target.blur(),i&&T.error(i)};return n.jsxs(ve,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===(c==null?void 0:c.lang)),onChange:a,placeholder:"Language...",$ol:V,$b:M,$bh:O}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==(c==null?void 0:c.rate)),onChange:y,placeholder:"Rate...",$ol:V,$b:M,$bh:O}),n.jsx(N,{onClick:v,$s:"m",$bs:ne,children:(c==null?void 0:c.lang.at(0).toUpperCase())+(c==null?void 0:c.lang.substring(1))}),n.jsx(he,{onClick:C}),n.jsx(N,{onClick:b,$s:"m",$bs:ne,children:($==null?void 0:$.at(0).toUpperCase())+($==null?void 0:$.substring(1))}),n.jsx(z,{options:D,defaultValue:D.find(s=>s.value===f.lang),onChange:A,placeholder:"Language...",$ol:V,$b:M,$bh:O}),n.jsx(z,{options:I,defaultValue:I.find(s=>s.value==f.rate),onChange:x,placeholder:"Rate...",$ol:V,$b:M,$bh:O})]})};me.propTypes={filtredElements:u.array,setLiColor:u.func};const{colors:m,shadows:le,indents:re}=B,Me=_`
  margin-bottom: 7px;
  padding-block: ${re.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${re.xs};
  font-size: 22px;
`,Oe=g.li`
  ${Me}

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
    ${ze}
  }
`,Ue=g.label`
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
`,Pe=g.label`
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
`,Ge=g.button`
  ${L}

  opacity: ${({$hovered:l})=>l?1:0};
`,oe=g.button`
  ${L}

  opacity: 0;
`,{colors:H,indents:fe}=B,$e=_`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=g.div`
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
`,qe=g.div`
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
`,Je=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Qe=g.button`
  ${L}
`,Xe=g.button`
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
`,Ye=g.iframe`
  ${xe}

  height: 60px;
  border-radius: 30px;
`,Ze=g.audio`
  ${xe}
`,ke=({el:l,sortByDate:p,setSortByDate:d,setLiColor:f})=>{const c=F(),{user:k}=K(),{activeCluster:w}=q(),{element:$,caption:a}=l,y="$*@",A=(t,e)=>{let r="";return e?(t.trim().endsWith(".")||t.trim().endsWith("!")||t.trim().endsWith("?")||t.endsWith('"')?r=t.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):r=t.trim()+e,r.includes("[")?r.substring(0,r.indexOf("[")):r):t},x=t=>{const e=P({setLiColor:f,divider:y,text:A($,y),lang:w.lang,rate:w.rate});t.target.blur(),e&&T.error(e)},j=t=>{const e=P({setLiColor:f,divider:y,text:A(a,y),lang:l.lang,rate:k.rate});t.target.blur(),e&&T.error(e)},h=t=>{d(!p),p?T.success("Below is Recent"):T.success("Above is Recent"),t.stopPropagation()},v=t=>{const{_id:e}=w;c(pe(l)),t.currentTarget.closest("li").id!=="active-element"&&c(Y({_id:e,activeEl:l._id}))},b=a.endsWith("mp3"),C=!b&&a.startsWith("http"),s=!b&&!C;return n.jsxs(He,{onClick:v,children:[n.jsx(ce,{onClick:x,children:$}),n.jsx(qe,{onClick:h}),b&&n.jsx(Ze,{controls:!0,src:se(a)}),C&&n.jsx(Ye,{src:se(a)}),s&&n.jsx(ce,{onClick:j,children:a})]})};ke.propTypes={el:u.object,sortByDate:u.bool,setSortByDate:u.func,$active:u.bool,$hovered:u.bool,setLiColor:u.func};const Ae=({el:l,article:p,isForm:d,setIsForm:f})=>{const c=F(),{user:k}=K(),{activeCluster:w}=q(),{_id:$,element:a,caption:y}=l,A=d+24,{register:x,watch:j,setValue:h,handleSubmit:v,setFocus:b}=De({mode:"onBlur",defaultValues:{element:a,caption:y}});E.useEffect(()=>{b("element"),p&&a.trim().startsWith("der")?h("element",p+a.replace("der","").trim()+", "):p&&a.trim().startsWith("die")?h("element",p+a.replace("die","").trim()+", "):p&&a.trim().startsWith("das")?h("element",p+a.replace("das","").trim()+", "):p?h("element",p+a+", "):h("element",p+a)},[p,a,b,h]),E.useEffect(()=>{const t=async e=>{e.key==="+"&&(e.preventDefault(),await s(),v(C)()),e.key==="Enter"&&(e.preventDefault(),v(C)()),e.key==="Escape"&&f(!1)};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const C=t=>{const e=k.lang;let r=t.element.split(/\s+/).join(" ").trim(),o=t.caption.trim();r.endsWith(",")&&(r=r.substring(0,r.length-1)),r.includes("·")&&(r=r.replaceAll(" ·",",").replaceAll("·",",")),o.endsWith(",")&&(o=o.substring(0,o.length-1)),c(G({_id:$,lang:e,element:r,caption:o})).then(c(ue())),f(!1)},s=async()=>{const t=j("element"),e={from:w.lang,to:k.lang},r=await de(t,e);h("caption",r)};return n.jsxs(Ke,{onSubmit:v(C),children:[n.jsx(ae,{...x("element"),style:{height:A}}),n.jsxs(Je,{children:[n.jsx(Qe,{children:n.jsx(we,{size:"16px"})}),n.jsx(Xe,{type:"button",onClick:()=>f(A),children:n.jsx(Se,{size:"16px"})}),n.jsx(be,{type:"button",onClick:s,children:n.jsx(Ie,{size:"16px"})})]}),n.jsx(ae,{...x("caption"),style:{height:A}})]})};Ae.propTypes={el:u.object,article:u.string,isForm:u.oneOfType([u.bool,u.number]),setIsForm:u.func};const ye=({el:l,index:p,length:d,sortByDate:f,setSortByDate:c,translateAll:k,liColor:w,setLiColor:$})=>{const a=F(),{elementTrash:y,activeElement:A}=U(),[x,j]=E.useState(!1),{_id:h,favorite:v,checked:b}=l,C=y.find(W=>W._id===h),[s,t]=E.useState(""),e=()=>{a(G({_id:h,favorite:!v}))},r=()=>{a(G({_id:h,checked:!b}))},o=()=>a(Fe(l)),i=W=>{if(x)j(!1);else{const J=W.target.closest("div").clientHeight;j(J)}},S=()=>{s===""&&t("der "),s==="der "&&t("die "),s==="die "&&t("das "),s==="das "&&t("")},R=h===(A==null?void 0:A._id);return n.jsxs(Oe,{id:R?"active-element":null,liColor:w,children:[n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Ue,{$hovered:v,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:v,onChange:e}),n.jsx(Le,{size:"20px"})]}),n.jsxs(Pe,{$hovered:b,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:b,onChange:r}),n.jsx(Ee,{size:"15px"})]}),x&&d===p+1&&n.jsx(be,{onClick:k,children:n.jsx(Te,{size:"16px"})})]}),x&&n.jsx(Ae,{el:l,article:s,isForm:x,setIsForm:j}),!x&&n.jsx(ke,{el:l,sortByDate:f,setSortByDate:c,setLiColor:$}),n.jsxs(Z,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ge,{$hovered:C,onClick:o,children:n.jsx(Be,{size:"16px"})}),x&&n.jsx(oe,{onClick:S,children:n.jsx(Re,{size:"18px"})}),n.jsx(oe,{onClick:i,children:n.jsx(We,{size:"15px"})})]})]})};ye.propTypes={el:u.object,index:u.string,length:u.string,sortByDate:u.bool,setSortByDate:u.func,translateAll:u.func,liColor:u.string,setLiColor:u.func};const Ne=g.ul`
  width: 100%;
  list-style: none;
`,{white:et}=B.colors,tt=()=>{const l=F(),{user:p}=K(),{activeCluster:d}=q(),{allElements:f,elementTrash:c,elementFilter:k}=U(),[w,$]=E.useState(et);let{elementSelect:a}=U();a=a||[];const[y,A]=E.useState(!1),[x,j]=E.useState(!0);E.useEffect(()=>{l(ue()).unwrap().then(({result:s})=>{if(!d||!d.activeEl)return;const t=s.elements.find(({_id:e})=>e===d.activeEl);l(pe(t))}).then(()=>{const s=document.getElementById("active-element");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})(),j(!1)})},[]);const h=f.filter(s=>s.cluster===(d==null?void 0:d._id)).sort((s,t)=>s.createdAt.localeCompare(t.createdAt)),b=(()=>{const s=c.map(t=>t._id);return a.includes("trash")?h.filter(t=>s.includes(t._id)):h})().filter(({element:s,caption:t,favorite:e,checked:r})=>{const o=s.toLowerCase().replace("·","").includes(k)||s.toLowerCase().includes(k)||t.toLowerCase().includes(k),i=a.includes("favorite")?o&&e===!0:o;return a.some(S=>["checked","unchecked"].includes(S))?a.includes("checked")?i&&r===!0:i&&r===!1:i}).sort(y?(s,t)=>t.createdAt.localeCompare(s.createdAt):(s,t)=>s.createdAt.localeCompare(t.createdAt)),C=async()=>{const s=p.lang;let t=0;await b.forEach(async e=>{if(t>1)return;const{_id:r,element:o}=e;if(!o.startsWith("[")||s!==e.lang){const i={from:d.lang,to:s},S=await de(o,i);l(G({_id:r,lang:s,caption:S})),t=t+1}})};return n.jsxs(n.Fragment,{children:[n.jsxs(Ne,{children:[b.map((s,t,e)=>n.jsx(ye,{el:s,index:t,length:e.length,sortByDate:y,setSortByDate:A,translateAll:C,liColor:w,setLiColor:$},s._id)),n.jsx(me,{filtredElements:b,setLiColor:$})]}),x&&n.jsx(_e,{})]})},{s:ie,m:st}=B.indents,ct=()=>n.jsx(Z,{$p:`0 ${st} ${ie} ${ie}`,children:n.jsx(tt,{})});export{ct as default};
