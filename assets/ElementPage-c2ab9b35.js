import{T as Z,r as S,t as T,P as A,u as B,b as W,q as L,j as t,S as oe,U as O,w as ne,D as ce,E as ie,K as H,R as _e,V as Re,Q as _,y as I,W as Be,X as Le,Y as Ie,s as w,Z as We,_ as N,$ as De,n as V,a0 as ue,a1 as $e,a2 as Fe,a3 as ze,a4 as Ve,a5 as Oe,a6 as Y,a7 as be,F as se,C as Pe,a8 as Me,A as Ge,z as Ue,a9 as Ke,aa as qe}from"./index-dff12793.js";import{r as He,H as Ne,T as Ye}from"./index-ef0a383e.js";import{w as Qe}from"./writeClipboard-b159b7c2.js";import{v as Xe,u as Ze}from"./index.esm-7dd7dd8d.js";import{a as Je}from"./index-bee5912e.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt={google:"",deepl:tt},ae=async(e,{from:u,to:c},m)=>{var i,n;Z.engine=m,Z.key=nt[m];const d=e.replaceAll(" ·",",").replaceAll("·","");let r=await Z(`${d}`,{from:u,to:c});try{if(c.includes("en")&&d.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(d.at(d.length-1)))return r;const $=d.split(d.includes(", ")?", ":/\s+/),x=r.split(", ");return $.length===1?r.toLocaleLowerCase():["der","die","das"].includes($[0].split(" ")[0])?r.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase():c.includes("en")&&((i=$[2])!=null&&i.startsWith("am"))?x[2].startsWith("the")?r:`${x[0]}, ${x[1]}, the ${x[2]}`:($[0].endsWith("n")&&["hat","ist"].includes((n=$[2])==null?void 0:n.split(" ")[0])&&u.includes("de")&&(r=c.includes("en")?"to "+x[0]:x[0]),r)}catch(p){return p.message}},P=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],M=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var re=new Map,G=new WeakMap,de=0,st=void 0;function rt(e){return e?(G.has(e)||(de+=1,G.set(e,de.toString())),G.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(u=>e[u]!==void 0).map(u=>`${u}_${u==="root"?rt(e.root):e[u]}`).toString()}function ot(e){const u=lt(e);let c=re.get(u);if(!c){const m=new Map;let d;const r=new IntersectionObserver(i=>{i.forEach(n=>{var p;const $=n.isIntersecting&&d.some(x=>n.intersectionRatio>=x);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=$),(p=m.get(n.target))==null||p.forEach(x=>{x($,n)})})},e);d=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),c={id:u,observer:r,elements:m},re.set(u,c)}return c}function at(e,u,c={},m=st){if(typeof window.IntersectionObserver>"u"&&m!==void 0){const p=e.getBoundingClientRect();return u(m,{isIntersecting:m,target:e,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:d,observer:r,elements:i}=ot(c),n=i.get(e)||[];return i.has(e)||i.set(e,n),n.push(u),r.observe(e),function(){n.splice(n.indexOf(u),1),n.length===0&&(i.delete(e),r.unobserve(e)),i.size===0&&(r.disconnect(),re.delete(d))}}function ct({threshold:e,delay:u,trackVisibility:c,rootMargin:m,root:d,triggerOnce:r,skip:i,initialInView:n,fallbackInView:p,onChange:$}={}){var x;const[k,j]=S.useState(null),y=S.useRef($),[f,l]=S.useState({inView:!!n,entry:void 0});y.current=$,S.useEffect(()=>{if(i||!k)return;let o;return o=at(k,(a,h)=>{l({inView:a,entry:h}),y.current&&y.current(a,h),h.isIntersecting&&r&&o&&(o(),o=void 0)},{root:d,rootMargin:m,threshold:e,trackVisibility:c,delay:u},p),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,k,d,m,r,i,c,p,u]);const b=(x=f.entry)==null?void 0:x.target,g=S.useRef(void 0);!k&&b&&!r&&!i&&g.current!==b&&(g.current=b,l({inView:!!n,entry:void 0}));const s=[j,f.inView,f.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}const{backgroundHoverd:U,white:K,borderLight:q}=T.colors,xe=()=>{const e=B(),{user:u}=W(),{activeCluster:c}=L(),m=({value:n})=>{e(ne({_id:c._id,lang:n})).unwrap().then(p=>e(ce(p.result.cluster)))},d=({value:n})=>{e(ne({_id:c._id,rate:n})).unwrap().then(p=>e(ce(p.result.cluster)))},r=({value:n})=>{const p=new FormData;p.append("lang",n),e(ie(p))},i=({value:n})=>{const p=new FormData;p.append("rate",n),e(ie(p))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(O,{options:P,defaultValue:P.find(n=>n.value===(c==null?void 0:c.lang)),onChange:m,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(n=>n.value==(c==null?void 0:c.rate)),onChange:d,placeholder:"Rate...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:P,defaultValue:P.find(n=>n.value===u.lang),onChange:r,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(n=>n.value==u.rate),onChange:i,placeholder:"Rate...",$ol:U,$b:K,$bh:q})]})};xe.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:it}=T.shadows,ut=()=>{const e=B(),{user:u}=W(),{activeCluster:c}=L();S.useEffect(()=>{const d=async r=>{r.key==="d"&&r.metaKey&&(r.prevent,await m())};return addEventListener("keydown",d),()=>{removeEventListener("keydown",d)}},[]);const m=async d=>{const r=window.getSelection().toString();r&&await Qe(r);const i=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),n={from:c.lang,to:u.lang},p=await ae(i,n,u.engine),{_id:$}=c;try{const x={cluster:$,element:"[]",caption:i},k={cluster:$,element:i,caption:p,favorite:!0,checked:i.split(/\s+/).length<20},j=i.includes("https://")?x:k;e(Re(j)),d.target.blur()}catch(x){d.target.blur(),_.error(`Invalid element, ${x.message}`)}};return t.jsx(H,{onClick:m,$s:"m",$round:!0,$bs:it,children:t.jsx(_e,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=B(),{elementTrash:u}=I(),c=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Be(u.map(m=>m._id).join("&"))).unwrap().then(()=>e(Le()))};return t.jsx(H,{onClick:c,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ye=({className:e})=>{const{pathname:u}=Ie(),{elementTrash:c}=I(),{activeCluster:m}=L(),d=c.length>0?" 1fr":"",r=m?" 1fr":"",i=d+r;if(u.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:i,children:[r&&t.jsx(ut,{}),d&&t.jsx(pt,{})]})};ye.propTypes={className:A.string};const{colors:J}=T,ft=w.div`
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
`,ve=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(We,{size:"35px"})});ve.propTypes={onClick:A.func};const{background:ee}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:u,setLiColor:c})=>{const{user:m}=W(),{activeCluster:d}=L(),{activeElement:r}=I(),i=y=>{if(!y.length)return;let f="",l=0;const b=y.reduce((g,s)=>(g[s.lang]||(g[s.lang]=0),g[s.lang]+=1,g),{});for(const g in b)b[g]>l&&(l=b[g],f=g);return f},n=u.length?i(u):m.lang,p=(y,f)=>y.replaceAll(", `",`;${f} `).replaceAll(" `",`${f} `).replaceAll(",`",";"),$=({text:y,playList:f,divider:l})=>{let b="";for(let g=0;g<f.length;g+=1){let s=f[g][y];s.endsWith(".")||s.endsWith("!")||s.endsWith("?")||s.endsWith('"')?(b+=p(s,l).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(": ",`:${l} `),d.lang.includes("de")&&(b=b.replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9.")),b=b.replaceAll(`${l}`,y==="caption"?`@±@${f[g].lang}${l}`:`${l}`)):f[g].element.startsWith("[")||(y==="caption"&&(s.includes(" [")&&(s=s.substring(0,s.indexOf(" ["))),s=`${s}@±@${f[g].lang}`),b+=s+l)}return b},x=y=>{c(ee);const f="$*@",l=u.findIndex(s=>s.element===r.element),b=u.splice(l===-1?0:l),g=N({setLiColor:c,divider:f,text:$({text:"element",playList:b,divider:f}),lang:d.lang,rate:d.rate});y.target.blur(),g&&_.error(g)},k=y=>{const f="$*@";c(ee);const l=u.findIndex(s=>s.element===r.element),b=u.splice(l===-1?0:l),g=N({setLiColor:c,divider:f,text:$({text:"caption",playList:b,divider:f}),lang:n,rate:m.rate});y.target.blur(),g&&_.error(g)},j=y=>{c(ee);let f="";const l="$*@",b=u.findIndex(o=>o.element===r.element),g=u.splice(b===-1?0:b);for(let o=0;o<g.length;o+=1){const{element:a,caption:h,lang:v}=g[o];if(!a.startsWith("[")){const C=p(a,""),R=h.includes(" [")?h.substring(0,h.indexOf(" [")):p(h,"");f+=C+`@±@${v}`+R+l}}const s=De({setLiColor:c,divider:l,text:f,lang:d.lang,rate:m.rate});y.target.blur(),s&&_.error(s)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(H,{onClick:x,$s:"m",$round:!0,$bs:pe,children:(d==null?void 0:d.lang.at(0).toUpperCase())+(d==null?void 0:d.lang.substring(1))}),t.jsx(ve,{onClick:j}),t.jsx(H,{onClick:k,$s:"m",$round:!0,$bs:pe,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};Ae.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:E,shadows:he,indents:te}=T,bt=V`
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
`,xt=w.li`
  ${bt}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${E.border};
    background-color: ${E.background};
    box-shadow: ${he.back};

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
    box-shadow: ${he.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,je=V`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Xe}
  }
`,yt=w.label`
  ${je}

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
  ${je}
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
`,D=V`
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
`,At=w.button`
  ${D}

  opacity: ${({$hovered:e})=>e?1:0};
`,jt=w.button`
  ${D}

  opacity: 0;
`,{colors:Q,indents:ke}=T,we=V`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,kt=w.div`
  ${we}
`,wt=w.form`
  ${we}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,me=w.textarea`
  outline: none;
  border: 1px solid ${Q.accent};
  border-radius: ${ke.xs};
  resize: none;
`,Et=w.div`
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
`,Ct=w.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,St=w.button`
  ${D}
`,Tt=w.button`
  ${D}
`,le=w.button`
  ${D}
`,_t=w.button`
  ${D}
`,fe=w.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ke.xs};
  color: ${Q.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ee=V`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Rt=w.iframe`
  ${Ee}

  height: 60px;
  border-radius: 30px;
`,Bt=w.audio`
  ${Ee}
`,Ce=({el:e,sortByDate:u,setSortByDate:c,setLiColor:m})=>{const d=B(),{user:r}=W(),{activeCluster:i}=L(),{element:n,caption:p}=e,$="$*@",x=(s,o)=>{let a="";return o?(s.trim().endsWith(".")||s.trim().endsWith("!")||s.trim().endsWith("?")||s.endsWith('"')?(a=s.trim().replaceAll(", `",`;${o} `).replaceAll(" `",`${o} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${o}`).replaceAll(".",`.${o}`).replaceAll(",",`,${o}`).replaceAll("!",`!${o}`).replaceAll("?",`?${o}`).replaceAll(": ",`:${o} `),i.lang.includes("de")&&(a=a.replaceAll(`0.${o}`,"0.").replaceAll(`1.${o}`,"1.").replaceAll(`2.${o}`,"2.").replaceAll(`3.${o}`,"3.").replaceAll(`4.${o}`,"4.").replaceAll(`5.${o}`,"5.").replaceAll(`6.${o}`,"6.").replaceAll(`7.${o}`,"7.").replaceAll(`8.${o}`,"8.").replaceAll(`9.${o}`,"9."))):a=s.trim()+o,a.includes("[")?a.substring(0,a.indexOf("["))+o:a):s},k=s=>{const o=N({setLiColor:m,divider:$,text:x(n,$),lang:i.lang,rate:i.rate});s.target.blur(),o&&_.error(o)},j=s=>{const o=N({setLiColor:m,divider:$,text:x(p,$),lang:e.lang,rate:r.rate});s.target.blur(),o&&_.error(o)},y=s=>{c(!u),u?_.success("Below is Recent"):_.success("Above is Recent"),s.stopPropagation()},f=s=>{const{_id:o}=i;d($e(e)),s.currentTarget.closest("li").id!=="active-element"&&d(ne({_id:o,activeEl:e._id}))},l=p.endsWith("mp3"),b=!l&&p.startsWith("http"),g=!l&&!b;return t.jsxs(kt,{onClick:f,children:[t.jsx(fe,{onClick:k,children:n}),t.jsx(Et,{onClick:y}),l&&t.jsx(Bt,{controls:!0,src:ue(p)}),b&&t.jsx(Rt,{src:ue(p)}),g&&t.jsx(fe,{onClick:j,children:p})]})};Ce.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Se=({el:e,isForm:u,setIsForm:c})=>{const m=B(),{user:d}=W(),{activeCluster:r}=L(),[i,n]=S.useState(""),{_id:p,element:$,caption:x}=e,k=u+42,{register:j,watch:y,setValue:f,handleSubmit:l,setFocus:b}=Ze({mode:"onBlur",defaultValues:{element:$,caption:x}});S.useEffect(()=>{b("element"),i&&$.trim().startsWith("der")?f("element",i+$.replace("der","").trim()+", "):i&&$.trim().startsWith("die")?f("element",i+$.replace("die","").trim()+", "):i&&$.trim().startsWith("das")?f("element",i+$.replace("das","").trim()+", "):i?f("element",i+$+", "):f("element",i+$)},[i,$,b,f]),S.useEffect(()=>{const a=async h=>{h.key==="+"&&(h.preventDefault(),await o(),l(g)()),h.key==="Enter"&&(h.preventDefault(),l(g)()),h.key==="Escape"&&c(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const g=a=>{const h=d.lang;let v=a.element.split(/\s+/).join(" ").trim(),C=a.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes("·")&&(v=v.replaceAll(" ·",",").replaceAll("· ",", ")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),m(Y({_id:p,lang:h,element:v,caption:C})).then(m(be())),c(!1)},s=()=>{i===""&&n("der "),i==="der "&&n("die "),i==="die "&&n("das "),i==="das "&&n("")},o=async a=>{const h=y("element"),v={from:r.lang,to:d.lang},C=await ae(h,v,a);f("caption",C)};return t.jsxs(wt,{onSubmit:l(g),children:[t.jsx(me,{...j("element"),style:{height:k}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>c(k),children:t.jsx(Fe,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:s,children:t.jsx(Je,{size:"18px"})}),t.jsx(le,{type:"button",onClick:()=>o("google"),children:t.jsx(ze,{size:"16px"})}),t.jsx(le,{type:"button",onClick:()=>o("deepl"),children:t.jsx(Ve,{size:"18px"})}),t.jsx(St,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...j("caption"),style:{height:k}})]})};Se.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const Te=({el:e,index:u,length:c,sortByDate:m,setSortByDate:d,translateAll:r,liColor:i,setLiColor:n})=>{const p=B(),{elementTrash:$,activeElement:x}=I(),[k,j]=S.useState(!1),{_id:y,favorite:f,checked:l}=e,b=$.find(v=>v._id===y),g=()=>{p(Y({_id:y,favorite:!f}))},s=()=>{p(Y({_id:y,checked:!l}))},o=()=>p(Ke(e)),a=v=>{if(k)j(!1);else{const C=v.target.closest("div").clientHeight;j(C)}},h=y===(x==null?void 0:x._id);return t.jsxs(xt,{id:h?"active-element":null,licolor:i,children:[t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(yt,{$hovered:f,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:g}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(vt,{$hovered:l,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:s}),t.jsx(Pe,{size:"15px"})]}),k&&c===u+1&&t.jsx(le,{onClick:r,children:t.jsx(Me,{size:"16px"})})]}),k&&t.jsx(Se,{el:e,isForm:k,setIsForm:j}),!k&&t.jsx(Ce,{el:e,sortByDate:m,setSortByDate:d,setLiColor:n}),t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:b,onClick:o,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:a,children:t.jsx(Ue,{size:"15px"})})]})]})};Te.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Lt=w.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=B(),{ref:u,inView:c,entry:m}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:d}=W(),{activeCluster:r}=L(),{allElements:i,elementTrash:n,elementFilter:p,isLoading:$}=I(),[x,k]=S.useState(It);let{elementSelect:j}=I();j=j||[];const[y,f]=S.useState(!1);S.useEffect(()=>{r&&e(be({cluster:r._id})).unwrap().then(({result:a})=>{if(!r.activeEl)return;const h=a.elements.find(({_id:v})=>v===r.activeEl);e($e(h))}).then(()=>{const a=document.getElementById("active-element");(()=>{a==null||a.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const l=i.filter(a=>a.cluster===(r==null?void 0:r._id)).sort((a,h)=>a.createdAt.localeCompare(h.createdAt)),g=(()=>{const a=n.map(h=>h._id);return j.includes("trash")?l.filter(h=>a.includes(h._id)):l})().filter(({element:a,caption:h,favorite:v,checked:C})=>{const R=a.toLowerCase().replace("·","").includes(p)||a.toLowerCase().includes(p)||h.toLowerCase().includes(p),F=j.includes("wordlist")?R&&et(a):R,z=()=>j.some(X=>["favorite","unfavorite"].includes(X))?j.includes("favorite")?F&&v===!0:F&&v===!1:F;return(()=>j.some(X=>["checked","unchecked"].includes(X))?j.includes("checked")?z()&&C===!0:z()&&C===!1:z())()}).sort(y?(a,h)=>h.createdAt.localeCompare(a.createdAt):(a,h)=>a.createdAt.localeCompare(h.createdAt)),s=async()=>{const a=d.lang;let h=0;await g.forEach(async v=>{if(h>1)return;const{_id:C,element:R}=v;if(!R.startsWith("[")||a!==v.lang){const F={from:r.lang,to:a},z=await ae(R,F,d.engine);e(Y({_id:C,lang:a,caption:z})),h=h+1}})},o=window.innerHeight<(m==null?void 0:m.target.getBoundingClientRect().y)+(m==null?void 0:m.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[g.map((a,h,v)=>t.jsx(Te,{el:a,index:h,length:v.length,sortByDate:y,setSortByDate:f,translateAll:s,liColor:x,setLiColor:k},a._id)),t.jsxs("div",{ref:u,children:[t.jsx(xe,{}),t.jsx(ye,{className:!c||!o?"shown":"hidden"}),t.jsx(Ae,{className:!c||!o?"shown":"hidden",filtredElements:g,setLiColor:k})]})]}),$&&t.jsx(qe,{})]})},{s:ge,m:Dt}=T.indents,Gt=()=>t.jsx(se,{$p:`0 ${Dt} ${ge} ${ge}`,children:t.jsx(Wt,{})});export{Gt as default};
