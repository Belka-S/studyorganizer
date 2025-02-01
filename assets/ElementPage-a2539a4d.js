import{T as X,r as T,t as S,P as w,u as z,b as I,q as R,j as n,S as ae,U as P,w as ne,D as ie,E as ue,K as V,R as Re,V as ze,Q as L,y as D,W as We,X as De,G as Ie,Y as Fe,s as E,Z as Ve,_ as q,$ as Oe,n as O,a0 as de,a1 as be,a2 as Pe,a3 as Ne,a4 as Me,a5 as Ge,a6 as Y,a7 as xe,F as se,C as Ke,a8 as He,A as Ue,z as qe,a9 as Ye,aa as Qe}from"./index-4da0f3e8.js";import{r as ye,H as Ze,T as Xe}from"./index-2340b3a7.js";import{w as ve}from"./writeClipboard-8dc42782.js";import{v as Je,u as et}from"./index.esm-0ba79da7.js";import{a as tt}from"./index-fa888b81.js";const re=(e,l)=>{if(!l.includes("de"))return e;const s=e.trim().split(`
`);return s.length===1?e:["der","die","das"].includes(s[0].split(" ")[0])?`${s[0].trim()}, ${s[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!s[0].trim().includes(" ")?`${s[0].trim()}, ${s[1].split("·")[1].trim()}, `+s[1].split("·")[2]:e.includes("am")&&!s[0].trim().includes(" ")?`${s[0].trim()}, ${s[1].split("·")[1].trim()}, `+s[1].split("·")[2]:e},nt=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:st}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},rt={google:"",deepl:st},ce=async(e,{from:l,to:s},m)=>{var r,o;X.engine=m,X.key=rt[m];const d=e.replaceAll(" ·",",").replaceAll("·","");let t=await X(`${d}`,{from:l,to:s});try{if(s.includes("en")&&d.toLowerCase().includes("uhr")&&(t=t.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(d.at(d.length-1)))return t;const $=d.split(d.includes(", ")?", ":/\s+/),y=t.split(", "),v=s.includes("de")?y[0]:y[0].at(0).toLowerCase()+y[0].substring(1);return $.length===1?t.toLocaleLowerCase()+", ":["der","die","das"].includes($[0].split(" ")[0])?t.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":s.includes("en")&&((r=$[2])!=null&&r.startsWith("am"))?y[2].startsWith("the")?t:`${v}, ${y[1]}, the ${y[2]}`:($[0].endsWith("n")&&["hat","ist"].includes((o=$[2])==null?void 0:o.split(" ")[0])&&l.includes("de")&&(t=s.includes("en")?"to "+v+", ":v+", "),t)}catch(p){return p.message}},N=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],M=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var oe=new Map,G=new WeakMap,pe=0,ot=void 0;function lt(e){return e?(G.has(e)||(pe+=1,G.set(e,pe.toString())),G.get(e)):"0"}function at(e){return Object.keys(e).sort().filter(l=>e[l]!==void 0).map(l=>`${l}_${l==="root"?lt(e.root):e[l]}`).toString()}function ct(e){const l=at(e);let s=oe.get(l);if(!s){const m=new Map;let d;const t=new IntersectionObserver(r=>{r.forEach(o=>{var p;const $=o.isIntersecting&&d.some(y=>o.intersectionRatio>=y);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=$),(p=m.get(o.target))==null||p.forEach(y=>{y($,o)})})},e);d=t.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:l,observer:t,elements:m},oe.set(l,s)}return s}function it(e,l,s={},m=ot){if(typeof window.IntersectionObserver>"u"&&m!==void 0){const p=e.getBoundingClientRect();return l(m,{isIntersecting:m,target:e,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:d,observer:t,elements:r}=ct(s),o=r.get(e)||[];return r.has(e)||r.set(e,o),o.push(l),t.observe(e),function(){o.splice(o.indexOf(l),1),o.length===0&&(r.delete(e),t.unobserve(e)),r.size===0&&(t.disconnect(),oe.delete(d))}}function ut({threshold:e,delay:l,trackVisibility:s,rootMargin:m,root:d,triggerOnce:t,skip:r,initialInView:o,fallbackInView:p,onChange:$}={}){var y;const[v,A]=T.useState(null),b=T.useRef($),[f,a]=T.useState({inView:!!o,entry:void 0});b.current=$,T.useEffect(()=>{if(r||!v)return;let i;return i=it(v,(u,h)=>{a({inView:u,entry:h}),b.current&&b.current(u,h),h.isIntersecting&&t&&i&&(i(),i=void 0)},{root:d,rootMargin:m,threshold:e,trackVisibility:s,delay:l},p),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,v,d,m,t,r,s,p,l]);const x=(y=f.entry)==null?void 0:y.target,g=T.useRef(void 0);!v&&x&&!t&&!r&&g.current!==x&&(g.current=x,a({inView:!!o,entry:void 0}));const c=[A,f.inView,f.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}const{backgroundHoverd:K,white:H,borderLight:U}=S.colors,Ae=()=>{const e=z(),{user:l}=I(),{activeCluster:s}=R(),m=({value:o})=>{e(ne({_id:s._id,lang:o})).unwrap().then(p=>e(ie(p.result.cluster)))},d=({value:o})=>{e(ne({_id:s._id,rate:o})).unwrap().then(p=>e(ie(p.result.cluster)))},t=({value:o})=>{const p=new FormData;p.append("lang",o),e(ue(p))},r=({value:o})=>{const p=new FormData;p.append("rate",o),e(ue(p))};return n.jsxs(ae,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[n.jsx(P,{options:N,defaultValue:N.find(o=>o.value===(s==null?void 0:s.lang)),onChange:m,placeholder:"Language...",$ol:K,$b:H,$bh:U}),n.jsx(P,{options:M,defaultValue:M.find(o=>o.value==(s==null?void 0:s.rate)),onChange:d,placeholder:"Rate...",$ol:K,$b:H,$bh:U}),n.jsx(P,{options:N,defaultValue:N.find(o=>o.value===l.lang),onChange:t,placeholder:"Language...",$ol:K,$b:H,$bh:U}),n.jsx(P,{options:M,defaultValue:M.find(o=>o.value==l.rate),onChange:r,placeholder:"Rate...",$ol:K,$b:H,$bh:U})]})};Ae.propTypes={filtredElements:w.array,setLiColor:w.func};const{button:dt}=S.shadows,pt=()=>{const e=z(),{user:l}=I(),{activeCluster:s}=R();T.useEffect(()=>{const t=async r=>{r.key==="e"&&r.metaKey&&(r.prevent,await d())};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const m=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},d=async t=>{var A;const r=window.getSelection().toString();r&&await ve(r);const o=await ye(),p=re(o,s.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),$={from:s.lang,to:l.lang},y=await ce(p,$,l.engine),{_id:v}=s;try{const b={cluster:v,element:"[]",caption:p},f={cluster:v,element:p,caption:y,favorite:!0,checked:p.split(/\s+/).length<20},a=p.includes("https://")?b:f;e(ze(a)).unwrap().then(()=>(t==null?void 0:t.target)&&m()).finally(()=>{var x;return(x=t==null?void 0:t.target)==null?void 0:x.blur()})}catch(b){(A=t==null?void 0:t.target)==null||A.blur(),L.error(`Invalid element, ${b.message}`)}};return n.jsx(V,{onClick:d,$s:"m",$round:!0,$bs:dt,children:n.jsx(Re,{size:18})})},{button:ht}=S.shadows,mt=()=>{const e=z(),{elementTrash:l}=D(),s=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(We(l.map(m=>m._id).join("&"))).unwrap().then(()=>e(De()))};return n.jsx(V,{onClick:s,$s:"m",$round:!0,$bs:ht,children:n.jsx(Ze,{size:16})})};function ft(e){return Ie({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M250.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,114,126.22,107.48,107.48,0,0,0,139.33,68H160a12,12,0,0,0,0-24H108V32a12,12,0,0,0-24,0V44H32a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,96,110.35,84,84,0,0,1,83.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,78,126.24,83.54,83.54,0,0,1,32,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L151.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM163.41,172,184,130.83,204.58,172Z"},child:[]}]})(e)}const{button:gt}=S.shadows,$t=()=>{const{activeCluster:e}=R();T.useEffect(()=>{const t=async r=>{r.key==="d"&&r.metaKey&&(r.prevent,await d())};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);let l=[];function s(t){t.forEach(r=>{const o=window.open(r,"_blank");o?l.push(o):L.error(`Failed to open tab: ${r}`)})}const m=()=>{l.forEach(t=>{t.close()}),l=[]},d=async()=>{const t=window.getSelection().toString();t&&await ve(t);const r=await ye();let o=[];e.lang.includes("de")&&o.push(`https://www.verbformen.com/conjugation/?w=${r}`),e.lang.includes("en")&&o.push(`https://dictionary.cambridge.org/dictionary/english-russian/${r}`),m(),s(o)};return n.jsx(V,{onClick:d,$s:"m",$round:!0,$bs:gt,children:n.jsx(ft,{size:18})})},{m:bt,s:xt}=S.indents,we=({className:e})=>{const{pathname:l}=Fe(),{elementTrash:s}=D(),{activeCluster:m}=R(),d=s.length>0?" 1fr":"",t=m?" 1fr":"",r=d+t+" 1fr";if(l.includes("/element"))return n.jsxs(ae,{className:e,$m:`${xt} ${bt}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:r,children:[n.jsx($t,{}),t&&n.jsx(pt,{}),d&&n.jsx(mt,{})]})};we.propTypes={className:w.string};const{colors:J}=S,yt=E.div`
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
`,je=({onClick:e})=>n.jsx(yt,{onClick:e,children:n.jsx(Ve,{size:"35px"})});je.propTypes={onClick:w.func};const{background:ee}=S.colors,{button:he}=S.shadows,{m:vt,s:At}=S.indents,ke=({className:e,filtredElements:l,setLiColor:s})=>{const{user:m}=I(),{activeCluster:d}=R(),{activeElement:t}=D(),r=b=>{if(!b.length)return;let f="",a=0;const x=b.reduce((g,c)=>(g[c.lang]||(g[c.lang]=0),g[c.lang]+=1,g),{});for(const g in x)x[g]>a&&(a=x[g],f=g);return f},o=l.length?r(l):m.lang,p=(b,f)=>b.replaceAll(", `",`;${f} `).replaceAll(" `",`${f} `).replaceAll(",`",";"),$=({text:b,playList:f,divider:a})=>{let x="";for(let g=0;g<f.length;g+=1){let c=f[g][b];c.endsWith(".")||c.endsWith("!")||c.endsWith("?")||c.endsWith('"')?(x+=p(c,a).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `),d.lang.includes("de")&&(x=x.replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9.")),x=x.replaceAll(`${a}`,b==="caption"?`@±@${f[g].lang}${a}`:`${a}`)):f[g].element.startsWith("[")||(b==="caption"&&(c.includes(" [")&&(c=c.substring(0,c.indexOf(" ["))),c=`${c}@±@${f[g].lang}`),x+=c+a)}return x},y=b=>{s(ee);const f="$*@",a=l.findIndex(c=>c.element===t.element),x=l.splice(a===-1?0:a),g=q({setLiColor:s,divider:f,text:$({text:"element",playList:x,divider:f}),lang:d.lang,rate:d.rate});b.target.blur(),g&&L.error(g)},v=b=>{const f="$*@";s(ee);const a=l.findIndex(c=>c.element===t.element),x=l.splice(a===-1?0:a),g=q({setLiColor:s,divider:f,text:$({text:"caption",playList:x,divider:f}),lang:o,rate:m.rate});b.target.blur(),g&&L.error(g)},A=b=>{s(ee);let f="";const a="$*@",x=l.findIndex(i=>i.element===t.element),g=l.splice(x===-1?0:x);for(let i=0;i<g.length;i+=1){const{element:u,caption:h,lang:j}=g[i];if(!u.startsWith("[")){const k=p(u,""),B=h.includes(" [")?h.substring(0,h.indexOf(" [")):p(h,"");f+=k+`@±@${j}`+B+a}}const c=Oe({setLiColor:s,divider:a,text:f,lang:d.lang,rate:m.rate});b.target.blur(),c&&L.error(c)};return n.jsxs(ae,{className:e,$m:`${At} ${vt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[n.jsx(V,{onClick:y,$s:"m",$round:!0,$bs:he,children:(d==null?void 0:d.lang.at(0).toUpperCase())+(d==null?void 0:d.lang.substring(1))}),n.jsx(je,{onClick:A}),n.jsx(V,{onClick:v,$s:"m",$round:!0,$bs:he,children:(o==null?void 0:o.at(0).toUpperCase())+(o==null?void 0:o.substring(1))})]})};ke.propTypes={className:w.string,filtredElements:w.array,setLiColor:w.func};const{colors:C,shadows:me,indents:te}=S,wt=O`
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
`,jt=E.li`
  ${wt}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${C.border};
    background-color: ${C.background};
    box-shadow: ${me.back};

    &:hover {
      border-color: ${C.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${C.smokeBlack};
      &:hover {
        color: ${C.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${C.hovered};
    }
  }

  &:hover {
    border-color: ${C.accent};
    box-shadow: ${me.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Ee=O`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Je}
  }
`,kt=E.label`
  ${Ee}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?C.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?C.yellow:C.border};
  }
  &:hover svg {
    stroke: ${C.placeholder};
  }
`,Et=E.label`
  ${Ee}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${C.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?C.border:"transparent"};
  }
  &:hover svg {
    border-color: ${C.placeholder};
    color: ${({$hovered:e})=>e?C.placeholder:"transparent"};
  }
`,F=O`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${C.black};

  & svg {
    transition: color 250ms;
    color: ${C.border};
  }
  &:hover,
  &:hover svg {
    color: ${C.placeholder};
  }
`,Ct=E.button`
  ${F}

  opacity: ${({$hovered:e})=>e?1:0};
`,Tt=E.button`
  ${F}

  opacity: 0;
`,{colors:Q,indents:Ce}=S,Te=O`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,St=E.div`
  ${Te}
`,Bt=E.form`
  ${Te}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,fe=E.textarea`
  outline: none;
  border: 1px solid ${Q.accent};
  border-radius: ${Ce.xs};
  resize: none;
`,_t=E.div`
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
`,Lt=E.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Rt=E.button`
  ${F}
`,zt=E.button`
  ${F}
`,le=E.button`
  ${F}
`,Wt=E.button`
  ${F}
`,ge=E.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Ce.xs};
  color: ${Q.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Se=O`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Dt=E.iframe`
  ${Se}

  height: 60px;
  border-radius: 30px;
`,It=E.audio`
  ${Se}
`,Be=({el:e,sortByDate:l,setSortByDate:s,setLiColor:m})=>{const d=z(),{user:t}=I(),{activeCluster:r}=R(),{element:o,caption:p}=e,$="$*@",y=(c,i)=>{let u="";return i?(c.trim().endsWith(".")||c.trim().endsWith("!")||c.trim().endsWith("?")||c.endsWith('"')?(u=c.trim().replaceAll(", `",`;${i} `).replaceAll(" `",`${i} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${i}`).replaceAll(".",`.${i}`).replaceAll(",",`,${i}`).replaceAll("!",`!${i}`).replaceAll("?",`?${i}`).replaceAll(": ",`:${i} `),r.lang.includes("de")&&(u=u.replaceAll(`0.${i}`,"0.").replaceAll(`1.${i}`,"1.").replaceAll(`2.${i}`,"2.").replaceAll(`3.${i}`,"3.").replaceAll(`4.${i}`,"4.").replaceAll(`5.${i}`,"5.").replaceAll(`6.${i}`,"6.").replaceAll(`7.${i}`,"7.").replaceAll(`8.${i}`,"8.").replaceAll(`9.${i}`,"9."))):u=c.trim()+i,u.includes("[")?u.substring(0,u.indexOf("["))+i:u):c},v=c=>{const i=q({setLiColor:m,divider:$,text:y(o,$),lang:r.lang,rate:r.rate});c.target.blur(),i&&L.error(i)},A=c=>{const i=q({setLiColor:m,divider:$,text:y(p,$),lang:e.lang,rate:t.rate});c.target.blur(),i&&L.error(i)},b=c=>{s(!l),l?L.success("Below is Recent"):L.success("Above is Recent"),c.stopPropagation()},f=c=>{const{_id:i}=r;d(be(e)),c.currentTarget.closest("li").id!=="active-element"&&d(ne({_id:i,activeEl:e._id}))},a=p.endsWith("mp3"),x=!a&&p.startsWith("http"),g=!a&&!x;return n.jsxs(St,{onClick:f,children:[n.jsx(ge,{onClick:v,children:o}),n.jsx(_t,{onClick:b}),a&&n.jsx(It,{controls:!0,src:de(p)}),x&&n.jsx(Dt,{src:de(p)}),g&&n.jsx(ge,{onClick:A,children:p})]})};Be.propTypes={el:w.object,sortByDate:w.bool,setSortByDate:w.func,$active:w.bool,$hovered:w.bool,setLiColor:w.func};const _e=({el:e,isForm:l,setIsForm:s})=>{const m=z(),{user:d}=I(),{activeCluster:t}=R(),[r,o]=T.useState(""),{_id:p,element:$,caption:y}=e,v=l+42,{register:A,watch:b,setValue:f,handleSubmit:a,setFocus:x}=et({mode:"onBlur",defaultValues:{element:$,caption:y}});T.useEffect(()=>{x("element"),r&&$.trim().startsWith("der")?f("element",r+$.replace("der","").trim()+", "):r&&$.trim().startsWith("die")?f("element",r+$.replace("die","").trim()+", "):r&&$.trim().startsWith("das")?f("element",r+$.replace("das","").trim()+", "):r?f("element",r+$+", "):f("element",r+$)},[r,$,x,f]),T.useEffect(()=>{const u=async h=>{(h.code==="NumpadAdd"||h.ctrlKey&&h.key==="Escape")&&(h.preventDefault(),await i(d.engine),a(g)()),h.key==="Enter"&&(h.preventDefault(),a(g)()),h.key==="Escape"&&s(!1)};return addEventListener("keydown",u),()=>{removeEventListener("keydown",u)}},[]);const g=u=>{const h=d.lang;let j=u.caption.trim(),k=re(u.element,t.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();k.endsWith(",")&&(k=k.substring(0,k.length-1)),j.endsWith(",")&&(j=j.substring(0,j.length-1)),d.lang.includes("en")&&t.lang.includes("de")&&(k.includes("hat")||k.includes("ist"))&&k.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(j=j.split(/,\s+/).map(_=>_.startsWith("to ")?_:`to ${_}`).join(", ")),m(Y({_id:p,lang:h,element:k,caption:j})).then(m(xe())),s(!1)},c=()=>{r===""&&o("der "),r==="der "&&o("die "),r==="die "&&o("das "),r==="das "&&o("")},i=async u=>{const h=b("element"),j=re(h,t.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),k={from:t.lang,to:d.lang},B=await ce(j,k,u);f("caption",B)};return n.jsxs(Bt,{onSubmit:a(g),children:[n.jsx(fe,{...A("element"),style:{height:v}}),n.jsxs(Lt,{children:[n.jsx(zt,{type:"button",onClick:()=>s(v),children:n.jsx(Pe,{size:"16px"})}),n.jsx(Wt,{type:"button",onClick:c,children:n.jsx(tt,{size:"18px"})}),n.jsx(le,{type:"button",onClick:()=>i("google"),children:n.jsx(Ne,{size:"16px"})}),n.jsx(le,{type:"button",onClick:()=>i("deepl"),children:n.jsx(Me,{size:"18px"})}),n.jsx(Rt,{children:n.jsx(Ge,{size:"16px"})})]}),n.jsx(fe,{...A("caption"),style:{height:v}})]})};_e.propTypes={el:w.object,isForm:w.oneOfType([w.bool,w.number]),setIsForm:w.func};const Le=({el:e,index:l,length:s,sortByDate:m,setSortByDate:d,translateAll:t,liColor:r,setLiColor:o})=>{const p=z(),{elementTrash:$,activeElement:y}=D(),[v,A]=T.useState(!1),{_id:b,favorite:f,checked:a}=e,x=$.find(j=>j._id===b),g=()=>{p(Y({_id:b,favorite:!f}))},c=()=>{p(Y({_id:b,checked:!a}))},i=()=>p(Ye(e)),u=j=>{if(v)A(!1);else{const k=j.target.closest("div").clientHeight;A(k)}},h=b===(y==null?void 0:y._id);return n.jsxs(jt,{id:h?"active-element":null,licolor:r,children:[n.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[n.jsxs(kt,{$hovered:f,children:[n.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:g}),n.jsx(Xe,{size:"20px"})]}),n.jsxs(Et,{$hovered:a,children:[n.jsx("input",{type:"checkbox",name:"checked",checked:a,onChange:c}),n.jsx(Ke,{size:"15px"})]}),v&&s===l+1&&n.jsx(le,{onClick:t,children:n.jsx(He,{size:"16px"})})]}),v&&n.jsx(_e,{el:e,isForm:v,setIsForm:A}),!v&&n.jsx(Be,{el:e,sortByDate:m,setSortByDate:d,setLiColor:o}),n.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[n.jsx(Ct,{$hovered:x,onClick:i,children:n.jsx(Ue,{size:"16px"})}),n.jsx(Tt,{onClick:u,children:n.jsx(qe,{size:"15px"})})]})]})};Le.propTypes={el:w.object,index:w.number,length:w.number,sortByDate:w.bool,setSortByDate:w.func,translateAll:w.func,liColor:w.string,setLiColor:w.func};const Ft=E.ul`
  width: 100%;
  list-style: none;
`,{white:Vt}=S.colors,Ot=()=>{const e=z(),{ref:l,inView:s,entry:m}=ut({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:d}=I(),{activeCluster:t}=R(),{allElements:r,elementTrash:o,elementFilter:p,isLoading:$}=D(),[y,v]=T.useState(Vt);let{elementSelect:A}=D();A=A||[];const[b,f]=T.useState(!1);T.useEffect(()=>{t&&e(xe({cluster:t._id})).unwrap().then(({result:u})=>{if(!t.activeEl)return;const h=u.elements.find(({_id:j})=>j===t.activeEl);e(be(h))}).then(()=>{const u=document.getElementById("active-element");(()=>{u==null||u.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const a=r.filter(u=>u.cluster===(t==null?void 0:t._id)).sort((u,h)=>u.createdAt.localeCompare(h.createdAt)),g=(()=>{const u=o.map(h=>h._id);return A.includes("trash")?a.filter(h=>u.includes(h._id)):a})().filter(({element:u,caption:h,favorite:j,checked:k})=>{const B=u.toLowerCase().replace("·","").includes(p)||u.toLowerCase().includes(p)||h.toLowerCase().includes(p),W=A.includes("wordlist")?B&&nt(u):B,_=()=>A.some(Z=>["favorite","unfavorite"].includes(Z))?A.includes("favorite")?W&&j===!0:W&&j===!1:W;return(()=>A.some(Z=>["checked","unchecked"].includes(Z))?A.includes("checked")?_()&&k===!0:_()&&k===!1:_())()}).sort(b?(u,h)=>h.createdAt.localeCompare(u.createdAt):(u,h)=>u.createdAt.localeCompare(h.createdAt)),c=async()=>{const u=d.lang;let h=0;await g.forEach(async j=>{if(h>1)return;const{_id:k,element:B}=j;if(!B.startsWith("[")||u!==j.lang){const W={from:t.lang,to:u},_=await ce(B,W,d.engine);e(Y({_id:k,lang:u,caption:_})),h=h+1}})},i=window.innerHeight<(m==null?void 0:m.target.getBoundingClientRect().y)+(m==null?void 0:m.target.getBoundingClientRect().height)*1.5;return n.jsxs(n.Fragment,{children:[n.jsxs(Ft,{children:[g.map((u,h,j)=>n.jsx(Le,{el:u,index:h,length:j.length,sortByDate:b,setSortByDate:f,translateAll:c,liColor:y,setLiColor:v},u._id)),n.jsxs("div",{ref:l,children:[n.jsx(Ae,{}),n.jsx(we,{className:!s||!i?"shown":"hidden"}),n.jsx(ke,{className:!s||!i?"shown":"hidden",filtredElements:g,setLiColor:v})]})]}),$&&n.jsx(Qe,{})]})},{s:$e,m:Pt}=S.indents,qt=()=>n.jsx(se,{$p:`0 ${Pt} ${$e} ${$e}`,children:n.jsx(Ot,{})});export{qt as default};
