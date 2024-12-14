import{s as g,t as T,P as u,j as n,T as Ae,u as P,b as G,q as H,y as V,S as je,U as L,K as Z,w as N,D as ee,V as te,W as M,Q as S,X as ve,n as B,Y as se,r as w,Z as Ce,_ as we,$ as U,a0 as pe,a1 as Ee,F as X,C as Se,a2 as Te,A as Be,z as We,a3 as Fe,J as Le}from"./index-cb6a68ee.js";import{T as Re}from"./index.esm-13348c03.js";import{a as _e}from"./index.esm-c75ccdcb.js";import{v as De,u as ze}from"./index.esm-48b142fc.js";import{S as Ie}from"./index.esm-2e9734b9.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],_=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:J}=T,Ve=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${J.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${J.placeholder};
    /* stroke: ${({$colored:l})=>l&&J.yellow}; */
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
`,ue=({onClick:l})=>n.jsx(Ve,{onClick:l,children:n.jsx(Ae,{size:"26px"})});ue.propTypes={onClick:u.func};const{background:Q,backgroundHoverd:D,white:z,borderLight:I}=T.colors,{button:ne}=T.shadows,de=({filtredElements:l,setLiColor:p})=>{const f=P(),{user:h}=G(),{activeCluster:i}=H(),{activeElement:x}=V(),v=({value:s})=>{f(N({_id:i._id,lang:s})).unwrap().then(e=>f(ee(e.result.cluster)))},k=({value:s})=>{f(N({_id:i._id,rate:s})).unwrap().then(e=>f(ee(e.result.cluster)))},c=({value:s})=>{const e=new FormData;e.append("lang",s),f(te(e))},j=({value:s})=>{const e=new FormData;e.append("rate",s),f(te(e))},A=(s,e)=>s.replaceAll(",`",";").replaceAll(" `",`${e} `),$=({text:s,playList:e,divider:t})=>{let a="";for(let r=0;r<e.length;r+=1){const o=e[r][s];o.endsWith(".")||o.endsWith("!")||o.endsWith("?")||o.endsWith('"')?a+=A(o,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9."):e[r].element.startsWith("[")||(a+=o.replaceAll(".",t)+t)}return a},C=s=>{p(Q);const e=l.findIndex(o=>o.element===x),t=l.splice(e===-1?0:e),a="$*@",r=M({setLiColor:p,divider:a,text:$({text:"element",playList:t,divider:a}),lang:i.lang,rate:i.rate});s.target.blur(),r&&S.error(r)},d=s=>{p(Q);const e=l.findIndex(o=>o.element===x),t=l.splice(e===-1?0:e),a="$*@",r=M({setLiColor:p,divider:a,text:$({text:"caption",playList:t,divider:a}),lang:h.lang,rate:h.rate});s.target.blur(),r&&S.error(r)},y=s=>{p(Q);let e="";const t="$*@",a=l.findIndex(b=>b.element===x),r=l.splice(a===-1?0:a);for(let b=0;b<r.length;b+=1){const{element:F,caption:K,lang:q}=r[b];F.startsWith("[")||(e+=A(F,"")+`@±@${q}`+K+t)}const o=ve({setLiColor:p,divider:t,text:e,lang:i.lang,rate:h.rate});s.target.blur(),o&&S.error(o)};return n.jsxs(je,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[n.jsx(L,{options:R,defaultValue:R.find(s=>s.value===(i==null?void 0:i.lang)),onChange:v,placeholder:"Language...",$ol:D,$b:z,$bh:I}),n.jsx(L,{options:_,defaultValue:_.find(s=>s.value===(i==null?void 0:i.rate)),onChange:k,placeholder:"Rate...",$ol:D,$b:z,$bh:I}),n.jsx(Z,{onClick:C,$s:"m",$bs:ne,children:(i==null?void 0:i.lang.at(0).toUpperCase())+(i==null?void 0:i.lang.substring(1))}),n.jsx(ue,{onClick:y}),n.jsx(Z,{onClick:d,$s:"m",$bs:ne,children:h.lang.at(0).toUpperCase()+h.lang.substring(1)}),n.jsx(L,{options:R,defaultValue:R.find(s=>s.value===h.lang),onChange:c,$ol:D,$b:z,$bh:I}),n.jsx(L,{options:_,defaultValue:_.find(s=>s.value===h.rate),onChange:j,$ol:D,$b:z,$bh:I})]})};de.propTypes={filtredElements:u.array,setLiColor:u.func};const{colors:m,shadows:le,indents:re}=T,Me=B`
  margin-bottom: 7px;
  padding-block: ${re.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${re.xs};
  font-size: 22px;
`,Ue=g.li`
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
`,he=B`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${De}
  }
`,Oe=g.label`
  ${he}

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
  ${he}
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
`,W=B`
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
  ${W}

  opacity: ${({$hovered:l})=>l?1:0};
`,oe=g.button`
  ${W}

  opacity: 0;
`,{colors:O,indents:me}=T,ge=B`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=g.div`
  ${ge}
`,Ke=g.form`
  ${ge}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ae=g.textarea`
  outline: none;
  border: 1px solid ${O.accent};
  border-radius: ${me.xs};
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
    border: 1px solid ${O.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${O.placeholder};
  }
`,Je=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Qe=g.button`
  ${W}
`,Xe=g.button`
  ${W}
`,fe=g.button`
  ${W}
`,ce=g.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${me.xs};
  color: ${O.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,$e=B`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ye=g.iframe`
  ${$e}

  height: 60px;
  border-radius: 30px;
`,Ze=g.audio`
  ${$e}
`,be=({el:l,sortByDate:p,setSortByDate:f,setLiColor:h})=>{const{user:i}=G(),{activeCluster:x}=H(),{element:v,caption:k}=l,c="$*@",j=(e,t)=>{let a="";return t?(e.trim().endsWith(".")||e.trim().endsWith("!")||e.trim().endsWith("?")||e.endsWith('"')?a=e.trim().replaceAll(",`",";").replaceAll(" `",`${t} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9."):a=e.trim()+t,a.includes("[")?a.substring(0,a.indexOf("[")):a):e},A=e=>{const t=M({setLiColor:h,divider:c,text:j(v,c),lang:x.lang,rate:x.rate});e.target.blur(),t&&S.error(t)},$=e=>{const t=M({setLiColor:h,divider:c,text:j(k,c),lang:l.lang,rate:i.rate});e.target.blur(),t&&S.error(t)},C=e=>{f(!p),p?S.success("Below is Recent"):S.success("Above is Recent"),e.stopImmediatePropagation()},d=k.endsWith("mp3"),y=!d&&k.startsWith("http"),s=!d&&!y;return n.jsxs(He,{children:[n.jsx(ce,{onClick:A,children:v}),n.jsx(qe,{onClick:C}),d&&n.jsx(Ze,{controls:!0,src:se(k)}),y&&n.jsx(Ye,{src:se(k)}),s&&n.jsx(ce,{onClick:$,children:k})]})};be.propTypes={el:u.object,sortByDate:u.bool,setSortByDate:u.func,$active:u.bool,$hovered:u.bool,setLiColor:u.func};const xe=({el:l,article:p,isForm:f,setIsForm:h})=>{const i=P(),{user:x}=G(),{activeCluster:v}=H(),{_id:k,element:c,caption:j}=l,A=f+24,{register:$,watch:C,setValue:d,handleSubmit:y,setFocus:s}=ze({mode:"onBlur",defaultValues:{element:c,caption:j}});w.useEffect(()=>{s("element"),p&&c.trim().startsWith("der")?d("element",p+c.replace("der","").trim()+", "):p&&c.trim().startsWith("die")?d("element",p+c.replace("die","").trim()+", "):p&&c.trim().startsWith("das")?d("element",p+c.replace("das","").trim()+", "):p?d("element",p+c+", "):d("element",p+c)},[p,c,s,d]),w.useEffect(()=>{const a=async r=>{r.key==="+"&&(r.preventDefault(),await t(),y(e)()),r.key==="Enter"&&(r.preventDefault(),y(e)()),r.key==="Escape"&&h(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const e=a=>{const r=x.lang;let o=a.element.split(/\s+/).join(" ").trim(),b=a.caption.trim();o.endsWith(",")&&(o=o.substring(0,o.length-1)),o.includes(" ·")&&(o=o.replaceAll(" ·",",")),b.endsWith(",")&&(b=b.substring(0,b.length-1)),i(U({_id:k,lang:r,element:o,caption:b})),h(!1)},t=async()=>{const a=C("element"),r={from:v.lang,to:x.lang},o=await pe(a,r);d("caption",o)};return n.jsxs(Ke,{onSubmit:y(e),children:[n.jsx(ae,{...$("element"),style:{height:A}}),n.jsxs(Je,{children:[n.jsx(Qe,{children:n.jsx(Ce,{size:"16px"})}),n.jsx(Xe,{type:"button",onClick:()=>h(A),children:n.jsx(we,{size:"16px"})}),n.jsx(fe,{type:"button",onClick:t,children:n.jsx(Ie,{size:"16px"})})]}),n.jsx(ae,{...$("caption"),style:{height:A}})]})};xe.propTypes={el:u.object,article:u.string,isForm:u.oneOfType([u.bool,u.number]),setIsForm:u.func};const ke=({el:l,index:p,length:f,sortByDate:h,setSortByDate:i,translateAll:x,liColor:v,setLiColor:k})=>{const c=P(),{elementTrash:j,activeElement:A}=V(),[$,C]=w.useState(!1),{_id:d,element:y,favorite:s,checked:e}=l,t=j.find(E=>E._id===d),a=y===A,[r,o]=w.useState("");w.useEffect(()=>{const E=document.getElementById("active-element");(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const b=()=>{c(U({_id:d,favorite:!s}))},F=()=>{c(U({_id:d,checked:!e}))},K=()=>c(Fe(l)),q=E=>{if($)C(!1);else{const Y=E.target.closest("div").clientHeight;C(Y)}},ye=()=>{r===""&&o("der "),r==="der "&&o("die "),r==="die "&&o("das "),r==="das "&&o("")};return n.jsxs(Ue,{id:a?"active-element":null,onClick:()=>c(Ee(y)),liColor:v,children:[n.jsxs(X,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(Oe,{$hovered:s,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:s,onChange:b}),n.jsx(Re,{size:"20px"})]}),n.jsxs(Pe,{$hovered:e,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:F}),n.jsx(Se,{size:"15px"})]}),$&&f===p+1&&n.jsx(fe,{onClick:x,children:n.jsx(Te,{size:"16px"})})]}),$&&n.jsx(xe,{el:l,article:r,isForm:$,setIsForm:C}),!$&&n.jsx(be,{el:l,sortByDate:h,setSortByDate:i,setLiColor:k}),n.jsxs(X,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ge,{$hovered:t,onClick:K,children:n.jsx(Be,{size:"16px"})}),$&&n.jsx(oe,{onClick:ye,children:n.jsx(_e,{size:"18px"})}),n.jsx(oe,{onClick:q,children:n.jsx(We,{size:"15px"})})]})]})};ke.propTypes={el:u.object,index:u.string,length:u.string,sortByDate:u.bool,setSortByDate:u.func,translateAll:u.func,liColor:u.string,setLiColor:u.func};const Ne=g.ul`
  width: 100%;
  list-style: none;
`,{white:et}=T.colors,tt=()=>{const l=P(),{user:p}=G(),{activeCluster:f}=H(),{allElements:h,elementTrash:i,elementFilter:x}=V(),[v,k]=w.useState(et);let{elementSelect:c}=V();c=c||[];const[j,A]=w.useState(!1);w.useEffect(()=>{l(Le())},[l]);const $=h.filter(s=>s.cluster===(f==null?void 0:f._id)).sort((s,e)=>s.createdAt.localeCompare(e.createdAt)),d=(()=>{const s=i.map(e=>e._id);return c.includes("trash")?$.filter(e=>s.includes(e._id)):$})().filter(({element:s,caption:e,favorite:t,checked:a})=>{const r=s.toLowerCase().replace("·","").includes(x)||s.toLowerCase().includes(x)||e.toLowerCase().includes(x),o=c.includes("favorite")?r&&t===!0:r;return c.some(b=>["checked","unchecked"].includes(b))?c.includes("checked")?o&&a===!0:o&&a===!1:o}).sort(j?(s,e)=>e.createdAt.localeCompare(s.createdAt):(s,e)=>s.createdAt.localeCompare(e.createdAt)),y=async()=>{const s=p.lang;let e=0;await d.forEach(async t=>{if(e>1)return;const{_id:a,element:r}=t;if(!r.startsWith("[")||s!==t.lang){const o={from:f.lang,to:s},b=await pe(r,o);l(U({_id:a,lang:s,caption:b})),e=e+1}})};return n.jsxs(Ne,{children:[d.map((s,e,t)=>n.jsx(ke,{el:s,index:e,length:t.length,sortByDate:j,setSortByDate:A,translateAll:y,liColor:v,setLiColor:k},s._id)),n.jsx(de,{filtredElements:d,setLiColor:k})]})},{s:ie,m:st}=T.indents,ct=()=>n.jsx(X,{$p:`0 ${st} ${ie} ${ie}`,children:n.jsx(tt,{})});export{ct as default};
