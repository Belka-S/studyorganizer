import{T as Z,r as S,t as T,P as A,u as B,b as W,q as L,j as t,S as le,U as O,w as ne,D as ae,E as ce,K as H,R as _e,V as Re,Q as _,y as I,W as Be,X as Le,Y as Ie,s as w,Z as We,_ as N,$ as Fe,n as V,a0 as ie,a1 as ge,a2 as De,a3 as ze,a4 as Ve,a5 as Y,a6 as $e,F as se,C as Oe,a7 as Pe,A as Me,z as Ge,a8 as Ue,a9 as Ke}from"./index-5901a0d3.js";import{r as qe,H as He,T as Ne}from"./index.esm-afef1d32.js";import{w as Ye}from"./writeClipboard-dbd77bb1.js";import{v as Qe,u as Xe}from"./index.esm-a2b0454c.js";import{a as Ze}from"./index.esm-666abfb6.js";const Je=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:et}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},tt={google:"",deepl:et},oe=async(e,{from:u,to:o},m)=>{var c,n;Z.engine=m,Z.key=tt[m];const d=e.replaceAll(" ·",",").replaceAll("·","");let r=await Z(`${d}`,{from:u,to:o});try{if(o.includes("en")&&d.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(d.at(d.length-1)))return r;const $=d.split(d.includes(", ")?", ":/\s+/),b=r.split(", ");return $.length===1?r.toLocaleLowerCase():["der","die","das"].includes($[0].split(" ")[0])?r.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase():o.includes("en")&&((c=$[2])!=null&&c.startsWith("am"))?b[2].startsWith("the")?r:`${b[0]}, ${b[1]}, the ${b[2]}`:($[0].endsWith("n")&&["hat","ist"].includes((n=$[2])==null?void 0:n.split(" ")[0])&&u.includes("de")&&(r=o.includes("en")?"to "+b[0]:b[0]),r)}catch(p){return p.message}},P=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],M=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var re=new Map,G=new WeakMap,ue=0,nt=void 0;function st(e){return e?(G.has(e)||(ue+=1,G.set(e,ue.toString())),G.get(e)):"0"}function rt(e){return Object.keys(e).sort().filter(u=>e[u]!==void 0).map(u=>`${u}_${u==="root"?st(e.root):e[u]}`).toString()}function lt(e){const u=rt(e);let o=re.get(u);if(!o){const m=new Map;let d;const r=new IntersectionObserver(c=>{c.forEach(n=>{var p;const $=n.isIntersecting&&d.some(b=>n.intersectionRatio>=b);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=$),(p=m.get(n.target))==null||p.forEach(b=>{b($,n)})})},e);d=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),o={id:u,observer:r,elements:m},re.set(u,o)}return o}function ot(e,u,o={},m=nt){if(typeof window.IntersectionObserver>"u"&&m!==void 0){const p=e.getBoundingClientRect();return u(m,{isIntersecting:m,target:e,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:d,observer:r,elements:c}=lt(o),n=c.get(e)||[];return c.has(e)||c.set(e,n),n.push(u),r.observe(e),function(){n.splice(n.indexOf(u),1),n.length===0&&(c.delete(e),r.unobserve(e)),c.size===0&&(r.disconnect(),re.delete(d))}}function at({threshold:e,delay:u,trackVisibility:o,rootMargin:m,root:d,triggerOnce:r,skip:c,initialInView:n,fallbackInView:p,onChange:$}={}){var b;const[k,j]=S.useState(null),x=S.useRef($),[f,l]=S.useState({inView:!!n,entry:void 0});x.current=$,S.useEffect(()=>{if(c||!k)return;let a;return a=ot(k,(i,h)=>{l({inView:i,entry:h}),x.current&&x.current(i,h),h.isIntersecting&&r&&a&&(a(),a=void 0)},{root:d,rootMargin:m,threshold:e,trackVisibility:o,delay:u},p),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,k,d,m,r,c,o,p,u]);const v=(b=f.entry)==null?void 0:b.target,g=S.useRef(void 0);!k&&v&&!r&&!c&&g.current!==v&&(g.current=v,l({inView:!!n,entry:void 0}));const s=[j,f.inView,f.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}const{backgroundHoverd:U,white:K,borderLight:q}=T.colors,be=()=>{const e=B(),{user:u}=W(),{activeCluster:o}=L(),m=({value:n})=>{e(ne({_id:o._id,lang:n})).unwrap().then(p=>e(ae(p.result.cluster)))},d=({value:n})=>{e(ne({_id:o._id,rate:n})).unwrap().then(p=>e(ae(p.result.cluster)))},r=({value:n})=>{const p=new FormData;p.append("lang",n),e(ce(p))},c=({value:n})=>{const p=new FormData;p.append("rate",n),e(ce(p))};return t.jsxs(le,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(O,{options:P,defaultValue:P.find(n=>n.value===(o==null?void 0:o.lang)),onChange:m,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(n=>n.value==(o==null?void 0:o.rate)),onChange:d,placeholder:"Rate...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:P,defaultValue:P.find(n=>n.value===u.lang),onChange:r,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(n=>n.value==u.rate),onChange:c,placeholder:"Rate...",$ol:U,$b:K,$bh:q})]})};be.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:ct}=T.shadows,it=()=>{const e=B(),{user:u}=W(),{activeCluster:o}=L();S.useEffect(()=>{const d=async r=>{r.key==="d"&&r.metaKey&&(r.prevent,await m())};return addEventListener("keydown",d),()=>{removeEventListener("keydown",d)}},[]);const m=async d=>{const r=window.getSelection().toString();r&&await Ye(r);const c=(await qe()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),n={from:o.lang,to:u.lang},p=await oe(c,n,u.engine),{_id:$}=o;try{const b={cluster:$,element:"[]",caption:c},k={cluster:$,element:c,caption:p,favorite:!0,checked:c.split(/\s+/).length<20},j=c.includes("https://")?b:k;e(Re(j)),d.target.blur()}catch(b){d.target.blur(),_.error(`Invalid element, ${b.message}`)}};return t.jsx(H,{onClick:m,$s:"m",$round:!0,$bs:ct,children:t.jsx(_e,{size:18})})},{button:ut}=T.shadows,dt=()=>{const e=B(),{elementTrash:u}=I(),o=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Be(u.map(m=>m._id).join("&"))).unwrap().then(()=>e(Le()))};return t.jsx(H,{onClick:o,$s:"m",$round:!0,$bs:ut,children:t.jsx(He,{size:16})})},{m:pt,s:ht}=T.indents,xe=({className:e})=>{const{pathname:u}=Ie(),{elementTrash:o}=I(),{activeCluster:m}=L(),d=o.length>0?" 1fr":"",r=m?" 1fr":"",c=d+r;if(u.includes("/element"))return t.jsxs(le,{className:e,$m:`${ht} ${pt}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:c,children:[r&&t.jsx(it,{}),d&&t.jsx(dt,{})]})};xe.propTypes={className:A.string};const{colors:J}=T,mt=w.div`
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
`,ve=({onClick:e})=>t.jsx(mt,{onClick:e,children:t.jsx(We,{size:"35px"})});ve.propTypes={onClick:A.func};const{background:ee}=T.colors,{button:de}=T.shadows,{m:ft,s:gt}=T.indents,ye=({className:e,filtredElements:u,setLiColor:o})=>{const{user:m}=W(),{activeCluster:d}=L(),{activeElement:r}=I(),c=x=>{if(!x.length)return;let f="",l=0;const v=x.reduce((g,s)=>(g[s.lang]||(g[s.lang]=0),g[s.lang]+=1,g),{});for(const g in v)v[g]>l&&(l=v[g],f=g);return f},n=u.length?c(u):m.lang,p=(x,f)=>x.replaceAll(", `",`;${f} `).replaceAll(" `",`${f} `).replaceAll(",`",";"),$=({text:x,playList:f,divider:l})=>{let v="";for(let g=0;g<f.length;g+=1){let s=f[g][x];s.endsWith(".")||s.endsWith("!")||s.endsWith("?")||s.endsWith('"')?v+=p(s,l).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(": ",`:${l} `).replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9.").replaceAll(`${l}`,x==="caption"?`@±@${f[g].lang}${l}`:`${l}`):f[g].element.startsWith("[")||(x==="caption"&&(s.includes(" [")&&(s=s.substring(0,s.indexOf(" ["))),s=`${s}@±@${f[g].lang}`),v+=s+l)}return v},b=x=>{o(ee);const f="$*@",l=u.findIndex(s=>s.element===r.element),v=u.splice(l===-1?0:l),g=N({setLiColor:o,divider:f,text:$({text:"element",playList:v,divider:f}),lang:d.lang,rate:d.rate});x.target.blur(),g&&_.error(g)},k=x=>{const f="$*@";o(ee);const l=u.findIndex(s=>s.element===r.element),v=u.splice(l===-1?0:l),g=N({setLiColor:o,divider:f,text:$({text:"caption",playList:v,divider:f}),lang:n,rate:m.rate});x.target.blur(),g&&_.error(g)},j=x=>{o(ee);let f="";const l="$*@",v=u.findIndex(a=>a.element===r.element),g=u.splice(v===-1?0:v);for(let a=0;a<g.length;a+=1){const{element:i,caption:h,lang:y}=g[a];if(!i.startsWith("[")){const C=p(i,""),R=h.includes(" [")?h.substring(0,h.indexOf(" [")):p(h,"");f+=C+`@±@${y}`+R+l}}const s=Fe({setLiColor:o,divider:l,text:f,lang:d.lang,rate:m.rate});x.target.blur(),s&&_.error(s)};return t.jsxs(le,{className:e,$m:`${gt} ${ft}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(H,{onClick:b,$s:"m",$round:!0,$bs:de,children:(d==null?void 0:d.lang.at(0).toUpperCase())+(d==null?void 0:d.lang.substring(1))}),t.jsx(ve,{onClick:j}),t.jsx(H,{onClick:k,$s:"m",$round:!0,$bs:de,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};ye.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:E,shadows:pe,indents:te}=T,$t=V`
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
`,Ce=({el:e,sortByDate:u,setSortByDate:o,setLiColor:m})=>{const d=B(),{user:r}=W(),{activeCluster:c}=L(),{element:n,caption:p}=e,$="$*@",b=(s,a)=>{let i="";return a?(s.trim().endsWith(".")||s.trim().endsWith("!")||s.trim().endsWith("?")||s.endsWith('"')?i=s.trim().replaceAll(", `",`;${a} `).replaceAll(" `",`${a} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `).replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9."):i=s.trim()+a,i.includes("[")?i.substring(0,i.indexOf("["))+a:i):s},k=s=>{const a=N({setLiColor:m,divider:$,text:b(n,$),lang:c.lang,rate:c.rate});s.target.blur(),a&&_.error(a)},j=s=>{const a=N({setLiColor:m,divider:$,text:b(p,$),lang:e.lang,rate:r.rate});s.target.blur(),a&&_.error(a)},x=s=>{o(!u),u?_.success("Below is Recent"):_.success("Above is Recent"),s.stopPropagation()},f=s=>{const{_id:a}=c;d(ge(e)),s.currentTarget.closest("li").id!=="active-element"&&d(ne({_id:a,activeEl:e._id}))},l=p.endsWith("mp3"),v=!l&&p.startsWith("http"),g=!l&&!v;return t.jsxs(jt,{onClick:f,children:[t.jsx(me,{onClick:k,children:n}),t.jsx(wt,{onClick:x}),l&&t.jsx(Rt,{controls:!0,src:ie(p)}),v&&t.jsx(_t,{src:ie(p)}),g&&t.jsx(me,{onClick:j,children:p})]})};Ce.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Se=({el:e,isForm:u,setIsForm:o})=>{const m=B(),{user:d}=W(),{activeCluster:r}=L(),[c,n]=S.useState(""),{_id:p,element:$,caption:b}=e,k=u+42,{register:j,watch:x,setValue:f,handleSubmit:l,setFocus:v}=Xe({mode:"onBlur",defaultValues:{element:$,caption:b}});S.useEffect(()=>{v("element"),c&&$.trim().startsWith("der")?f("element",c+$.replace("der","").trim()+", "):c&&$.trim().startsWith("die")?f("element",c+$.replace("die","").trim()+", "):c&&$.trim().startsWith("das")?f("element",c+$.replace("das","").trim()+", "):c?f("element",c+$+", "):f("element",c+$)},[c,$,v,f]),S.useEffect(()=>{const i=async h=>{h.key==="+"&&(h.preventDefault(),await a(),l(g)()),h.key==="Enter"&&(h.preventDefault(),l(g)()),h.key==="Escape"&&o(!1)};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[]);const g=i=>{const h=d.lang;let y=i.element.split(/\s+/).join(" ").trim(),C=i.caption.trim();y.endsWith(",")&&(y=y.substring(0,y.length-1)),y.includes("·")&&(y=y.replaceAll(" ·",",").replaceAll("· ",", ")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),m(Y({_id:p,lang:h,element:y,caption:C})).then(m($e())),o(!1)},s=()=>{c===""&&n("der "),c==="der "&&n("die "),c==="die "&&n("das "),c==="das "&&n("")},a=async()=>{const i=x("element"),h={from:r.lang,to:d.lang},y=await oe(i,h,d.engine);f("caption",y)};return t.jsxs(kt,{onSubmit:l(g),children:[t.jsx(he,{...j("element"),style:{height:k}}),t.jsxs(Et,{children:[t.jsx(St,{type:"button",onClick:()=>o(k),children:t.jsx(De,{size:"16px"})}),t.jsx(Tt,{type:"button",onClick:s,children:t.jsx(Ze,{size:"18px"})}),t.jsx(we,{type:"button",onClick:a,children:t.jsx(ze,{size:"16px"})}),t.jsx(Ct,{children:t.jsx(Ve,{size:"16px"})})]}),t.jsx(he,{...j("caption"),style:{height:k}})]})};Se.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const Te=({el:e,index:u,length:o,sortByDate:m,setSortByDate:d,translateAll:r,liColor:c,setLiColor:n})=>{const p=B(),{elementTrash:$,activeElement:b}=I(),[k,j]=S.useState(!1),{_id:x,favorite:f,checked:l}=e,v=$.find(y=>y._id===x),g=()=>{p(Y({_id:x,favorite:!f}))},s=()=>{p(Y({_id:x,checked:!l}))},a=()=>p(Ue(e)),i=y=>{if(k)j(!1);else{const C=y.target.closest("div").clientHeight;j(C)}},h=x===(b==null?void 0:b._id);return t.jsxs(bt,{id:h?"active-element":null,licolor:c,children:[t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(xt,{$hovered:f,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:g}),t.jsx(Ne,{size:"20px"})]}),t.jsxs(vt,{$hovered:l,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:s}),t.jsx(Oe,{size:"15px"})]}),k&&o===u+1&&t.jsx(we,{onClick:r,children:t.jsx(Pe,{size:"16px"})})]}),k&&t.jsx(Se,{el:e,isForm:k,setIsForm:j}),!k&&t.jsx(Ce,{el:e,sortByDate:m,setSortByDate:d,setLiColor:n}),t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(yt,{$hovered:v,onClick:a,children:t.jsx(Me,{size:"16px"})}),t.jsx(At,{onClick:i,children:t.jsx(Ge,{size:"15px"})})]})]})};Te.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Bt=w.ul`
  width: 100%;
  list-style: none;
`,{white:Lt}=T.colors,It=()=>{const e=B(),{ref:u,inView:o,entry:m}=at({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:d}=W(),{activeCluster:r}=L(),{allElements:c,elementTrash:n,elementFilter:p,isLoading:$}=I(),[b,k]=S.useState(Lt);let{elementSelect:j}=I();j=j||[];const[x,f]=S.useState(!1);S.useEffect(()=>{r&&e($e({cluster:r._id})).unwrap().then(({result:i})=>{if(!r.activeEl)return;const h=i.elements.find(({_id:y})=>y===r.activeEl);e(ge(h))}).then(()=>{const i=document.getElementById("active-element");(()=>{i==null||i.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const l=c.filter(i=>i.cluster===(r==null?void 0:r._id)).sort((i,h)=>i.createdAt.localeCompare(h.createdAt)),g=(()=>{const i=n.map(h=>h._id);return j.includes("trash")?l.filter(h=>i.includes(h._id)):l})().filter(({element:i,caption:h,favorite:y,checked:C})=>{const R=i.toLowerCase().replace("·","").includes(p)||i.toLowerCase().includes(p)||h.toLowerCase().includes(p),D=j.includes("wordlist")?R&&Je(i):R,z=()=>j.some(X=>["favorite","unfavorite"].includes(X))?j.includes("favorite")?D&&y===!0:D&&y===!1:D;return(()=>j.some(X=>["checked","unchecked"].includes(X))?j.includes("checked")?z()&&C===!0:z()&&C===!1:z())()}).sort(x?(i,h)=>h.createdAt.localeCompare(i.createdAt):(i,h)=>i.createdAt.localeCompare(h.createdAt)),s=async()=>{const i=d.lang;let h=0;await g.forEach(async y=>{if(h>1)return;const{_id:C,element:R}=y;if(!R.startsWith("[")||i!==y.lang){const D={from:r.lang,to:i},z=await oe(R,D,d.engine);e(Y({_id:C,lang:i,caption:z})),h=h+1}})},a=window.innerHeight<(m==null?void 0:m.target.getBoundingClientRect().y)+(m==null?void 0:m.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Bt,{children:[g.map((i,h,y)=>t.jsx(Te,{el:i,index:h,length:y.length,sortByDate:x,setSortByDate:f,translateAll:s,liColor:b,setLiColor:k},i._id)),t.jsxs("div",{ref:u,children:[t.jsx(be,{}),t.jsx(xe,{className:!o||!a?"shown":"hidden"}),t.jsx(ye,{className:!o||!a?"shown":"hidden",filtredElements:g,setLiColor:k})]})]}),$&&t.jsx(Ke,{})]})},{s:fe,m:Wt}=T.indents,Mt=()=>t.jsx(se,{$p:`0 ${Wt} ${fe} ${fe}`,children:t.jsx(It,{})});export{Mt as default};
