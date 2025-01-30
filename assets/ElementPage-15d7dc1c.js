import{T as Z,r as S,t as T,P as A,u as B,b as W,q as L,j as t,S as le,U as O,w as ne,D as ae,E as ce,K as H,R as _e,V as Re,Q as _,y as I,W as Be,X as Le,Y as Ie,s as w,Z as We,_ as N,$ as Fe,n as V,a0 as ie,a1 as ge,a2 as De,a3 as ze,a4 as Ve,a5 as Y,a6 as $e,F as se,C as Oe,a7 as Pe,A as Me,z as Ge,a8 as Ue,a9 as Ke}from"./index-af17b26c.js";import{r as qe,H as He,T as Ne}from"./index.esm-bc6c2532.js";import{w as Ye}from"./writeClipboard-216f4205.js";import{v as Qe,u as Xe}from"./index.esm-a23e1ebb.js";import{a as Ze}from"./index.esm-2e4e0b5b.js";const Je=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:et}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},tt={google:"",deepl:et},oe=async(e,{from:d,to:a},m)=>{var c,n;Z.engine=m,Z.key=tt[m];const u=e.replaceAll(" ·",",").replaceAll("·","");let r=await Z(`${u}`,{from:d,to:a});try{if(a.includes("en")&&u.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(u.at(u.length-1)))return r;const $=u.split(u.includes(", ")?", ":/\s+/),x=r.split(", ");return $.length===1?r.toLocaleLowerCase():["der","die","das"].includes($[0].split(" ")[0])?r.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase():a.includes("en")&&((c=$[2])!=null&&c.startsWith("am"))?x[2].startsWith("the")?r:`${x[0]}, ${x[1]}, the ${x[2]}`:($[0].endsWith("n")&&["hat","ist"].includes((n=$[2])==null?void 0:n.split(" ")[0])&&d.includes("de")&&(r=a.includes("en")?"to "+x[0]:x[0]),r)}catch(p){return p.message}},P=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],M=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var re=new Map,G=new WeakMap,ue=0,nt=void 0;function st(e){return e?(G.has(e)||(ue+=1,G.set(e,ue.toString())),G.get(e)):"0"}function rt(e){return Object.keys(e).sort().filter(d=>e[d]!==void 0).map(d=>`${d}_${d==="root"?st(e.root):e[d]}`).toString()}function lt(e){const d=rt(e);let a=re.get(d);if(!a){const m=new Map;let u;const r=new IntersectionObserver(c=>{c.forEach(n=>{var p;const $=n.isIntersecting&&u.some(x=>n.intersectionRatio>=x);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=$),(p=m.get(n.target))==null||p.forEach(x=>{x($,n)})})},e);u=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:d,observer:r,elements:m},re.set(d,a)}return a}function ot(e,d,a={},m=nt){if(typeof window.IntersectionObserver>"u"&&m!==void 0){const p=e.getBoundingClientRect();return d(m,{isIntersecting:m,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:u,observer:r,elements:c}=lt(a),n=c.get(e)||[];return c.has(e)||c.set(e,n),n.push(d),r.observe(e),function(){n.splice(n.indexOf(d),1),n.length===0&&(c.delete(e),r.unobserve(e)),c.size===0&&(r.disconnect(),re.delete(u))}}function at({threshold:e,delay:d,trackVisibility:a,rootMargin:m,root:u,triggerOnce:r,skip:c,initialInView:n,fallbackInView:p,onChange:$}={}){var x;const[k,j]=S.useState(null),v=S.useRef($),[f,l]=S.useState({inView:!!n,entry:void 0});v.current=$,S.useEffect(()=>{if(c||!k)return;let i;return i=ot(k,(o,h)=>{l({inView:o,entry:h}),v.current&&v.current(o,h),h.isIntersecting&&r&&i&&(i(),i=void 0)},{root:u,rootMargin:m,threshold:e,trackVisibility:a,delay:d},p),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,k,u,m,r,c,a,p,d]);const b=(x=f.entry)==null?void 0:x.target,g=S.useRef(void 0);!k&&b&&!r&&!c&&g.current!==b&&(g.current=b,l({inView:!!n,entry:void 0}));const s=[j,f.inView,f.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}const{backgroundHoverd:U,white:K,borderLight:q}=T.colors,be=()=>{const e=B(),{user:d}=W(),{activeCluster:a}=L(),m=({value:n})=>{e(ne({_id:a._id,lang:n})).unwrap().then(p=>e(ae(p.result.cluster)))},u=({value:n})=>{e(ne({_id:a._id,rate:n})).unwrap().then(p=>e(ae(p.result.cluster)))},r=({value:n})=>{const p=new FormData;p.append("lang",n),e(ce(p))},c=({value:n})=>{const p=new FormData;p.append("rate",n),e(ce(p))};return t.jsxs(le,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(O,{options:P,defaultValue:P.find(n=>n.value===(a==null?void 0:a.lang)),onChange:m,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(n=>n.value==(a==null?void 0:a.rate)),onChange:u,placeholder:"Rate...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:P,defaultValue:P.find(n=>n.value===d.lang),onChange:r,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(n=>n.value==d.rate),onChange:c,placeholder:"Rate...",$ol:U,$b:K,$bh:q})]})};be.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:ct}=T.shadows,it=()=>{const e=B(),{user:d}=W(),{activeCluster:a}=L();S.useEffect(()=>{const u=async r=>{r.key==="d"&&r.metaKey&&(r.prevent,await m())};return addEventListener("keydown",u),()=>{removeEventListener("keydown",u)}},[]);const m=async u=>{const r=window.getSelection().toString();r&&await Ye(r);const c=(await qe()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),n={from:a.lang,to:d.lang},p=await oe(c,n,d.engine),{_id:$}=a;try{const x={cluster:$,element:"[]",caption:c},k={cluster:$,element:c,caption:p,favorite:!0,checked:c.split(/\s+/).length<20},j=c.includes("https://")?x:k;e(Re(j)),u.target.blur()}catch(x){u.target.blur(),_.error(`Invalid element, ${x.message}`)}};return t.jsx(H,{onClick:m,$s:"m",$round:!0,$bs:ct,children:t.jsx(_e,{size:18})})},{button:ut}=T.shadows,dt=()=>{const e=B(),{elementTrash:d}=I(),a=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Be(d.map(m=>m._id).join("&"))).unwrap().then(()=>e(Le()))};return t.jsx(H,{onClick:a,$s:"m",$round:!0,$bs:ut,children:t.jsx(He,{size:16})})},{m:pt,s:ht}=T.indents,xe=({className:e})=>{const{pathname:d}=Ie(),{elementTrash:a}=I(),{activeCluster:m}=L(),u=a.length>0?" 1fr":"",r=m?" 1fr":"",c=u+r;if(d.includes("/element"))return t.jsxs(le,{className:e,$m:`${ht} ${pt}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:c,children:[r&&t.jsx(it,{}),u&&t.jsx(dt,{})]})};xe.propTypes={className:A.string};const{colors:J}=T,mt=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${J.yellow};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${J.hovered};
    /* stroke: ${({$colored:e})=>e&&J.yellow}; */
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
`,ve=({onClick:e})=>t.jsx(mt,{onClick:e,children:t.jsx(We,{size:"35px"})});ve.propTypes={onClick:A.func};const{background:ee}=T.colors,{button:de}=T.shadows,{m:ft,s:gt}=T.indents,ye=({className:e,filtredElements:d,setLiColor:a})=>{const{user:m}=W(),{activeCluster:u}=L(),{activeElement:r}=I(),c=v=>{if(!v.length)return;let f="",l=0;const b=v.reduce((g,s)=>(g[s.lang]||(g[s.lang]=0),g[s.lang]+=1,g),{});for(const g in b)b[g]>l&&(l=b[g],f=g);return f},n=d.length?c(d):m.lang,p=(v,f)=>v.replaceAll(", `",`;${f} `).replaceAll(" `",`${f} `).replaceAll(",`",";"),$=({text:v,playList:f,divider:l})=>{let b="";for(let g=0;g<f.length;g+=1){let s=f[g][v];s.endsWith(".")||s.endsWith("!")||s.endsWith("?")||s.endsWith('"')?(b+=p(s,l).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(": ",`:${l} `),u.lang.includes("de")&&(b=b.replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9.")),b=b.replaceAll(`${l}`,v==="caption"?`@±@${f[g].lang}${l}`:`${l}`)):f[g].element.startsWith("[")||(v==="caption"&&(s.includes(" [")&&(s=s.substring(0,s.indexOf(" ["))),s=`${s}@±@${f[g].lang}`),b+=s+l)}return b},x=v=>{a(ee);const f="$*@",l=d.findIndex(s=>s.element===r.element),b=d.splice(l===-1?0:l),g=N({setLiColor:a,divider:f,text:$({text:"element",playList:b,divider:f}),lang:u.lang,rate:u.rate});v.target.blur(),g&&_.error(g)},k=v=>{const f="$*@";a(ee);const l=d.findIndex(s=>s.element===r.element),b=d.splice(l===-1?0:l),g=N({setLiColor:a,divider:f,text:$({text:"caption",playList:b,divider:f}),lang:n,rate:m.rate});v.target.blur(),g&&_.error(g)},j=v=>{a(ee);let f="";const l="$*@",b=d.findIndex(i=>i.element===r.element),g=d.splice(b===-1?0:b);for(let i=0;i<g.length;i+=1){const{element:o,caption:h,lang:y}=g[i];if(!o.startsWith("[")){const C=p(o,""),R=h.includes(" [")?h.substring(0,h.indexOf(" [")):p(h,"");f+=C+`@±@${y}`+R+l}}const s=Fe({setLiColor:a,divider:l,text:f,lang:u.lang,rate:m.rate});v.target.blur(),s&&_.error(s)};return t.jsxs(le,{className:e,$m:`${gt} ${ft}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(H,{onClick:x,$s:"m",$round:!0,$bs:de,children:(u==null?void 0:u.lang.at(0).toUpperCase())+(u==null?void 0:u.lang.substring(1))}),t.jsx(ve,{onClick:j}),t.jsx(H,{onClick:k,$s:"m",$round:!0,$bs:de,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};ye.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:E,shadows:pe,indents:te}=T,$t=V`
  margin-bottom: 7px;
  padding-block: ${te.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${te.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${te.s};
  }
`,bt=w.li`
  ${$t}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${E.border};
    background-color: ${E.background};
    box-shadow: ${pe.back};

    &:hover {
      border-color: ${E.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${E.smokeBlack};
      &:hover {
        color: ${E.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${E.hovered};
    }
  }

  &:hover {
    border-color: ${E.accent};
    box-shadow: ${pe.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Ae=V`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Qe}
  }
`,xt=w.label`
  ${Ae}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?E.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?E.yellow:E.border};
  }
  &:hover svg {
    stroke: ${E.placeholder};
  }
`,vt=w.label`
  ${Ae}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${E.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?E.border:"transparent"};
  }
  &:hover svg {
    border-color: ${E.placeholder};
    color: ${({$hovered:e})=>e?E.placeholder:"transparent"};
  }
`,F=V`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${E.black};

  & svg {
    transition: color 250ms;
    color: ${E.border};
  }
  &:hover,
  &:hover svg {
    color: ${E.placeholder};
  }
`,yt=w.button`
  ${F}

  opacity: ${({$hovered:e})=>e?1:0};
`,At=w.button`
  ${F}

  opacity: 0;
`,{colors:Q,indents:je}=T,ke=V`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,jt=w.div`
  ${ke}
`,kt=w.form`
  ${ke}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,he=w.textarea`
  outline: none;
  border: 1px solid ${Q.accent};
  border-radius: ${je.xs};
  resize: none;
`,wt=w.div`
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
    border: 1px solid ${Q.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${Q.placeholder};
  }
`,Et=w.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ct=w.button`
  ${F}
`,St=w.button`
  ${F}
`,we=w.button`
  ${F}
`,Tt=w.button`
  ${F}
`,me=w.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${je.xs};
  color: ${Q.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ee=V`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,_t=w.iframe`
  ${Ee}

  height: 60px;
  border-radius: 30px;
`,Rt=w.audio`
  ${Ee}
`,Ce=({el:e,sortByDate:d,setSortByDate:a,setLiColor:m})=>{const u=B(),{user:r}=W(),{activeCluster:c}=L(),{element:n,caption:p}=e,$="$*@",x=(s,i)=>{let o="";return i?(s.trim().endsWith(".")||s.trim().endsWith("!")||s.trim().endsWith("?")||s.endsWith('"')?(o=s.trim().replaceAll(", `",`;${i} `).replaceAll(" `",`${i} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${i}`).replaceAll(".",`.${i}`).replaceAll(",",`,${i}`).replaceAll("!",`!${i}`).replaceAll("?",`?${i}`).replaceAll(": ",`:${i} `),c.lang.includes("de")&&(o=o.replaceAll(`0.${i}`,"0.").replaceAll(`1.${i}`,"1.").replaceAll(`2.${i}`,"2.").replaceAll(`3.${i}`,"3.").replaceAll(`4.${i}`,"4.").replaceAll(`5.${i}`,"5.").replaceAll(`6.${i}`,"6.").replaceAll(`7.${i}`,"7.").replaceAll(`8.${i}`,"8.").replaceAll(`9.${i}`,"9."))):o=s.trim()+i,o.includes("[")?o.substring(0,o.indexOf("["))+i:o):s},k=s=>{const i=N({setLiColor:m,divider:$,text:x(n,$),lang:c.lang,rate:c.rate});s.target.blur(),i&&_.error(i)},j=s=>{const i=N({setLiColor:m,divider:$,text:x(p,$),lang:e.lang,rate:r.rate});s.target.blur(),i&&_.error(i)},v=s=>{a(!d),d?_.success("Below is Recent"):_.success("Above is Recent"),s.stopPropagation()},f=s=>{const{_id:i}=c;u(ge(e)),s.currentTarget.closest("li").id!=="active-element"&&u(ne({_id:i,activeEl:e._id}))},l=p.endsWith("mp3"),b=!l&&p.startsWith("http"),g=!l&&!b;return t.jsxs(jt,{onClick:f,children:[t.jsx(me,{onClick:k,children:n}),t.jsx(wt,{onClick:v}),l&&t.jsx(Rt,{controls:!0,src:ie(p)}),b&&t.jsx(_t,{src:ie(p)}),g&&t.jsx(me,{onClick:j,children:p})]})};Ce.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Se=({el:e,isForm:d,setIsForm:a})=>{const m=B(),{user:u}=W(),{activeCluster:r}=L(),[c,n]=S.useState(""),{_id:p,element:$,caption:x}=e,k=d+42,{register:j,watch:v,setValue:f,handleSubmit:l,setFocus:b}=Xe({mode:"onBlur",defaultValues:{element:$,caption:x}});S.useEffect(()=>{b("element"),c&&$.trim().startsWith("der")?f("element",c+$.replace("der","").trim()+", "):c&&$.trim().startsWith("die")?f("element",c+$.replace("die","").trim()+", "):c&&$.trim().startsWith("das")?f("element",c+$.replace("das","").trim()+", "):c?f("element",c+$+", "):f("element",c+$)},[c,$,b,f]),S.useEffect(()=>{const o=async h=>{h.key==="+"&&(h.preventDefault(),await i(),l(g)()),h.key==="Enter"&&(h.preventDefault(),l(g)()),h.key==="Escape"&&a(!1)};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const g=o=>{const h=u.lang;let y=o.element.split(/\s+/).join(" ").trim(),C=o.caption.trim();y.endsWith(",")&&(y=y.substring(0,y.length-1)),y.includes("·")&&(y=y.replaceAll(" ·",",").replaceAll("· ",", ")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),m(Y({_id:p,lang:h,element:y,caption:C})).then(m($e())),a(!1)},s=()=>{c===""&&n("der "),c==="der "&&n("die "),c==="die "&&n("das "),c==="das "&&n("")},i=async()=>{const o=v("element"),h={from:r.lang,to:u.lang},y=await oe(o,h,u.engine);f("caption",y)};return t.jsxs(kt,{onSubmit:l(g),children:[t.jsx(he,{...j("element"),style:{height:k}}),t.jsxs(Et,{children:[t.jsx(St,{type:"button",onClick:()=>a(k),children:t.jsx(De,{size:"16px"})}),t.jsx(Tt,{type:"button",onClick:s,children:t.jsx(Ze,{size:"18px"})}),t.jsx(we,{type:"button",onClick:i,children:t.jsx(ze,{size:"16px"})}),t.jsx(Ct,{children:t.jsx(Ve,{size:"16px"})})]}),t.jsx(he,{...j("caption"),style:{height:k}})]})};Se.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const Te=({el:e,index:d,length:a,sortByDate:m,setSortByDate:u,translateAll:r,liColor:c,setLiColor:n})=>{const p=B(),{elementTrash:$,activeElement:x}=I(),[k,j]=S.useState(!1),{_id:v,favorite:f,checked:l}=e,b=$.find(y=>y._id===v),g=()=>{p(Y({_id:v,favorite:!f}))},s=()=>{p(Y({_id:v,checked:!l}))},i=()=>p(Ue(e)),o=y=>{if(k)j(!1);else{const C=y.target.closest("div").clientHeight;j(C)}},h=v===(x==null?void 0:x._id);return t.jsxs(bt,{id:h?"active-element":null,licolor:c,children:[t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(xt,{$hovered:f,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:g}),t.jsx(Ne,{size:"20px"})]}),t.jsxs(vt,{$hovered:l,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:s}),t.jsx(Oe,{size:"15px"})]}),k&&a===d+1&&t.jsx(we,{onClick:r,children:t.jsx(Pe,{size:"16px"})})]}),k&&t.jsx(Se,{el:e,isForm:k,setIsForm:j}),!k&&t.jsx(Ce,{el:e,sortByDate:m,setSortByDate:u,setLiColor:n}),t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(yt,{$hovered:b,onClick:i,children:t.jsx(Me,{size:"16px"})}),t.jsx(At,{onClick:o,children:t.jsx(Ge,{size:"15px"})})]})]})};Te.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Bt=w.ul`
  width: 100%;
  list-style: none;
`,{white:Lt}=T.colors,It=()=>{const e=B(),{ref:d,inView:a,entry:m}=at({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:u}=W(),{activeCluster:r}=L(),{allElements:c,elementTrash:n,elementFilter:p,isLoading:$}=I(),[x,k]=S.useState(Lt);let{elementSelect:j}=I();j=j||[];const[v,f]=S.useState(!1);S.useEffect(()=>{r&&e($e({cluster:r._id})).unwrap().then(({result:o})=>{if(!r.activeEl)return;const h=o.elements.find(({_id:y})=>y===r.activeEl);e(ge(h))}).then(()=>{const o=document.getElementById("active-element");(()=>{o==null||o.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const l=c.filter(o=>o.cluster===(r==null?void 0:r._id)).sort((o,h)=>o.createdAt.localeCompare(h.createdAt)),g=(()=>{const o=n.map(h=>h._id);return j.includes("trash")?l.filter(h=>o.includes(h._id)):l})().filter(({element:o,caption:h,favorite:y,checked:C})=>{const R=o.toLowerCase().replace("·","").includes(p)||o.toLowerCase().includes(p)||h.toLowerCase().includes(p),D=j.includes("wordlist")?R&&Je(o):R,z=()=>j.some(X=>["favorite","unfavorite"].includes(X))?j.includes("favorite")?D&&y===!0:D&&y===!1:D;return(()=>j.some(X=>["checked","unchecked"].includes(X))?j.includes("checked")?z()&&C===!0:z()&&C===!1:z())()}).sort(v?(o,h)=>h.createdAt.localeCompare(o.createdAt):(o,h)=>o.createdAt.localeCompare(h.createdAt)),s=async()=>{const o=u.lang;let h=0;await g.forEach(async y=>{if(h>1)return;const{_id:C,element:R}=y;if(!R.startsWith("[")||o!==y.lang){const D={from:r.lang,to:o},z=await oe(R,D,u.engine);e(Y({_id:C,lang:o,caption:z})),h=h+1}})},i=window.innerHeight<(m==null?void 0:m.target.getBoundingClientRect().y)+(m==null?void 0:m.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Bt,{children:[g.map((o,h,y)=>t.jsx(Te,{el:o,index:h,length:y.length,sortByDate:v,setSortByDate:f,translateAll:s,liColor:x,setLiColor:k},o._id)),t.jsxs("div",{ref:d,children:[t.jsx(be,{}),t.jsx(xe,{className:!a||!i?"shown":"hidden"}),t.jsx(ye,{className:!a||!i?"shown":"hidden",filtredElements:g,setLiColor:k})]})]}),$&&t.jsx(Ke,{})]})},{s:fe,m:Wt}=T.indents,Mt=()=>t.jsx(se,{$p:`0 ${Wt} ${fe} ${fe}`,children:t.jsx(It,{})});export{Mt as default};
