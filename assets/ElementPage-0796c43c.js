import{U as ne,r as k,t as R,P as w,u as V,b as P,q as I,j as s,T as de,V as K,w as oe,D as me,E as fe,N as M,S as Fe,W as Ve,X as Ne,Q as W,y as N,Y as Pe,Z as Oe,G as Me,_ as Ge,s as j,$ as Ke,a0 as X,a1 as He,n as G,a2 as ge,a3 as we,a4 as Ue,a5 as qe,a6 as Ye,a7 as J,a8 as je,F as ae,C as Qe,a9 as Ze,A as Xe,z as Je,aa as et,K as tt,ab as nt}from"./index-b8ba4272.js";import{r as Ee,H as st,T as rt}from"./index-ece41652.js";import{w as ke}from"./writeClipboard-c47e5a24.js";import{v as lt,u as ot}from"./index.esm-0b1f5469.js";import{a as at}from"./index-9a4809d3.js";const ce=(e,c)=>{if(!c.includes("de"))return e;const t=e.trim().split(`
`);return t.length===1?e:["der","die","das"].includes(t[0].split(" ")[0])?`${t[0].trim()}, ${t[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!t[0].trim().includes(" ")?`${t[0].trim()}, ${t[1].split("·")[1].trim()}, `+t[1].split("·")[2]:e.includes("am")&&!t[0].trim().includes(" ")?`${t[0].trim()}, ${t[1].split("·")[1].trim()}, `+t[1].split("·")[2]:e},ct=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:it}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},ut={google:"",deepl:it},pe=async(e,{from:c,to:t},u)=>{var d,n;ne.engine=u,ne.key=ut[u];const l=e.replaceAll(" ·",",").replaceAll("·","");let r=await ne(`${l}`,{from:c,to:t});try{if(t.includes("en")&&l.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(l.at(l.length-1)))return r;const y=l.split(l.includes(", ")?", ":/\s+/),v=r.split(", "),g=t.includes("de")?v[0]:v[0].at(0).toLowerCase()+v[0].substring(1);return y.length===1?r.toLocaleLowerCase()+", ":["der","die","das"].includes(y[0].split(" ")[0])?r.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":t.includes("en")&&((d=y[2])!=null&&d.startsWith("am"))?v[2].startsWith("the")?r:`${g}, ${v[1]}, the ${v[2]}`:(y[0].endsWith("n")&&["hat","ist"].includes((n=y[2])==null?void 0:n.split(" ")[0])&&c.includes("de")&&(r=t.includes("en")?"to "+g+", ":g+", "),r)}catch(o){return o.message}},dt=(e,c)=>{let t=84;e[0]&&(t=Number(e[0].style.height.replace("px",""))),k.useEffect(()=>{if(!e[0])return;let u=Math.max(...e.map(l=>l.scrollHeight));t!==u&&(u=u<=90?u:u+6,e.forEach(l=>{l.style.height=u+"px"}))},[t,e,c])},H=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],U=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var ie=new Map,q=new WeakMap,$e=0,pt=void 0;function ht(e){return e?(q.has(e)||($e+=1,q.set(e,$e.toString())),q.get(e)):"0"}function mt(e){return Object.keys(e).sort().filter(c=>e[c]!==void 0).map(c=>`${c}_${c==="root"?ht(e.root):e[c]}`).toString()}function ft(e){const c=mt(e);let t=ie.get(c);if(!t){const u=new Map;let l;const r=new IntersectionObserver(d=>{d.forEach(n=>{var o;const y=n.isIntersecting&&l.some(v=>n.intersectionRatio>=v);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=y),(o=u.get(n.target))==null||o.forEach(v=>{v(y,n)})})},e);l=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:c,observer:r,elements:u},ie.set(c,t)}return t}function gt(e,c,t={},u=pt){if(typeof window.IntersectionObserver>"u"&&u!==void 0){const o=e.getBoundingClientRect();return c(u,{isIntersecting:u,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:l,observer:r,elements:d}=ft(t),n=d.get(e)||[];return d.has(e)||d.set(e,n),n.push(c),r.observe(e),function(){n.splice(n.indexOf(c),1),n.length===0&&(d.delete(e),r.unobserve(e)),d.size===0&&(r.disconnect(),ie.delete(l))}}function $t({threshold:e,delay:c,trackVisibility:t,rootMargin:u,root:l,triggerOnce:r,skip:d,initialInView:n,fallbackInView:o,onChange:y}={}){var v;const[g,A]=k.useState(null),$=k.useRef(y),[m,a]=k.useState({inView:!!n,entry:void 0});$.current=y,k.useEffect(()=>{if(d||!g)return;let p;return p=gt(g,(h,x)=>{a({inView:h,entry:x}),$.current&&$.current(h,x),x.isIntersecting&&r&&p&&(p(),p=void 0)},{root:l,rootMargin:u,threshold:e,trackVisibility:t,delay:c},o),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,g,l,u,r,d,t,o,c]);const b=(v=m.entry)==null?void 0:v.target,f=k.useRef(void 0);!g&&b&&!r&&!d&&f.current!==b&&(f.current=b,a({inView:!!n,entry:void 0}));const i=[A,m.inView,m.entry];return i.ref=i[0],i.inView=i[1],i.entry=i[2],i}const{backgroundHoverd:Y,white:Q,borderLight:Z}=R.colors,Ce=()=>{const e=V(),{user:c}=P(),{activeCluster:t}=I(),u=({value:n})=>{e(oe({_id:t._id,lang:n})).unwrap().then(o=>e(me(o.result.cluster)))},l=({value:n})=>{e(oe({_id:t._id,rate:n})).unwrap().then(o=>e(me(o.result.cluster)))},r=({value:n})=>{const o=new FormData;o.append("lang",n),e(fe(o))},d=({value:n})=>{const o=new FormData;o.append("rate",n),e(fe(o))};return s.jsxs(de,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[s.jsx(K,{options:H,defaultValue:H.find(n=>n.value===(t==null?void 0:t.lang)),onChange:u,placeholder:"Language...",$ol:Y,$b:Q,$bh:Z}),s.jsx(K,{options:U,defaultValue:U.find(n=>n.value==(t==null?void 0:t.rate)),onChange:l,placeholder:"Rate...",$ol:Y,$b:Q,$bh:Z}),s.jsx(K,{options:H,defaultValue:H.find(n=>n.value===c.lang),onChange:r,placeholder:"Language...",$ol:Y,$b:Q,$bh:Z}),s.jsx(K,{options:U,defaultValue:U.find(n=>n.value==c.rate),onChange:d,placeholder:"Rate...",$ol:Y,$b:Q,$bh:Z})]})};Ce.propTypes={filtredElements:w.array,setLiColor:w.func};const{button:bt}=R.shadows,xt=()=>{const e=V(),{user:c}=P(),{activeCluster:t}=I();k.useEffect(()=>{const l=async r=>{r.key==="e"&&r.metaKey&&(r.prevent,await u())};return addEventListener("keydown",l),()=>{removeEventListener("keydown",l)}},[]);const u=async l=>{var g;const r=window.getSelection().toString();r&&await ke(r);const d=await Ee(),n=ce(d,t.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),o={from:t.lang,to:c.lang},y=await pe(n,o,c.engine),{_id:v}=t;try{const A={cluster:v,element:"[]",caption:n},$={cluster:v,element:n,caption:y,favorite:!0,checked:n.split(/\s+/).length<20},m=n.includes("https://")?A:$;e(Ve(m)).unwrap().then(()=>(l==null?void 0:l.target)&&Ne()).finally(()=>{var a;return(a=l==null?void 0:l.target)==null?void 0:a.blur()})}catch(A){(g=l==null?void 0:l.target)==null||g.blur(),W.error(`Invalid element, ${A.message}`)}};return s.jsx(M,{onClick:u,$s:"m",$round:!0,$bs:bt,children:s.jsx(Fe,{size:18})})},{button:yt}=R.shadows,vt=()=>{const e=V(),{elementTrash:c}=N(),t=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Pe(c.map(u=>u._id).join("&"))).unwrap().then(()=>e(Oe()))};return s.jsx(M,{onClick:t,$s:"m",$round:!0,$bs:yt,children:s.jsx(st,{size:16})})};function At(e){return Me({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M250.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,114,126.22,107.48,107.48,0,0,0,139.33,68H160a12,12,0,0,0,0-24H108V32a12,12,0,0,0-24,0V44H32a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,96,110.35,84,84,0,0,1,83.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,78,126.24,83.54,83.54,0,0,1,32,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L151.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM163.41,172,184,130.83,204.58,172Z"},child:[]}]})(e)}const{button:wt}=R.shadows,jt=()=>{const{activeCluster:e}=I();k.useEffect(()=>{const r=async d=>{d.key==="d"&&d.metaKey&&(d.prevent,await l())};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);let c=[];function t(r){r.forEach(d=>{const n=window.open(d,"_blank");n?c.push(n):W.error(`Failed to open tab: ${d}`)})}const u=()=>{c.forEach(r=>{r.close()}),c=[]},l=async()=>{const r=window.getSelection().toString();r&&await ke(r);const d=await Ee();let n=[];e.lang.includes("de")&&n.push(`https://www.verbformen.com/conjugation/?w=${d}`),e.lang.includes("en")&&n.push(`https://dictionary.cambridge.org/dictionary/english-russian/${d}`),u(),t(n)};return s.jsx(M,{onClick:l,$s:"m",$round:!0,$bs:wt,children:s.jsx(At,{size:18})})},{m:Et,s:kt}=R.indents,Se=({className:e})=>{const{pathname:c}=Ge(),{elementTrash:t}=N(),{activeCluster:u}=I(),l=t.length>0?" 1fr":"",r=u?" 1fr":"",d=l+r+" 1fr";if(c.includes("/element"))return s.jsxs(de,{className:e,$m:`${kt} ${Et}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:d,children:[s.jsx(jt,{}),r&&s.jsx(xt,{}),l&&s.jsx(vt,{})]})};Se.propTypes={className:w.string};const{colors:se}=R,Ct=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${se.yellow};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${se.hovered};
    /* stroke: ${({$colored:e})=>e&&se.yellow}; */
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
`,Te=({onClick:e})=>s.jsx(Ct,{onClick:e,children:s.jsx(Ke,{size:"35px"})});Te.propTypes={onClick:w.func};const{background:re}=R.colors,{button:be}=R.shadows,{m:St,s:Tt}=R.indents,Re=({className:e,filtredElements:c,setLiColor:t})=>{const{user:u}=P(),{activeCluster:l}=I(),{activeElement:r}=N(),d=$=>{if(!$.length)return;let m="",a=0;const b=$.reduce((f,i)=>(f[i.lang]||(f[i.lang]=0),f[i.lang]+=1,f),{});for(const f in b)b[f]>a&&(a=b[f],m=f);return m},n=c.length?d(c):u.lang,o=($,m)=>$.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),y=({text:$,playList:m,divider:a})=>{let b="";for(let f=0;f<m.length;f+=1){let i=m[f][$];i.endsWith(".")||i.endsWith("!")||i.endsWith("?")||i.endsWith('"')?(b+=o(i,a).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `),l.lang.includes("de")&&(b=b.replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9.")),b=b.replaceAll(`${a}`,$==="caption"?`@±@${m[f].lang}${a}`:`${a}`)):m[f].element.startsWith("[")||($==="caption"&&(i.includes(" [")&&(i=i.substring(0,i.indexOf(" ["))),i=`${i}@±@${m[f].lang}`),b+=i+a)}return b},v=$=>{t(re);const m="$*@",a=c.findIndex(i=>i.element===r.element),b=c.splice(a===-1?0:a),f=X({setLiColor:t,divider:m,text:y({text:"element",playList:b,divider:m}),lang:l.lang,rate:l.rate});$.target.blur(),f&&W.error(f)},g=$=>{const m="$*@";t(re);const a=c.findIndex(i=>i.element===r.element),b=c.splice(a===-1?0:a),f=X({setLiColor:t,divider:m,text:y({text:"caption",playList:b,divider:m}),lang:n,rate:u.rate});$.target.blur(),f&&W.error(f)},A=$=>{t(re);let m="";const a="$*@",b=c.findIndex(p=>p.element===r.element),f=c.splice(b===-1?0:b);for(let p=0;p<f.length;p+=1){const{element:h,caption:x,lang:C}=f[p];if(!h.startsWith("[")){const D=o(h,""),_=x.includes(" [")?x.substring(0,x.indexOf(" [")):o(x,"");m+=D+`@±@${C}`+_+a}}const i=He({setLiColor:t,divider:a,text:m,lang:l.lang,rate:u.rate});$.target.blur(),i&&W.error(i)};return s.jsxs(de,{className:e,$m:`${Tt} ${St}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[s.jsx(M,{onClick:v,$s:"m",$round:!0,$bs:be,children:(l==null?void 0:l.lang.at(0).toUpperCase())+(l==null?void 0:l.lang.substring(1))}),s.jsx(Te,{onClick:A}),s.jsx(M,{onClick:g,$s:"m",$round:!0,$bs:be,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};Re.propTypes={className:w.string,filtredElements:w.array,setLiColor:w.func};const{colors:E,shadows:xe,indents:le}=R,Rt=G`
  margin-bottom: 7px;
  padding-block: ${le.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${le.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${le.s};
  }
`,_t=j.li`
  ${Rt}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${E.border};
    background-color: ${E.background};
    box-shadow: ${xe.back};

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
    box-shadow: ${xe.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,_e=G`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${lt}
  }
`,Bt=j.label`
  ${_e}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?E.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?E.yellow:E.border};
  }
  &:hover svg {
    stroke: ${E.placeholder};
  }
`,Lt=j.label`
  ${_e}
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
`,O=G`
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
`,zt=j.button`
  ${O}

  opacity: ${({$hovered:e})=>e?1:0};
`,Wt=j.button`
  ${O}

  opacity: 0;
`,{colors:ee,indents:Be}=R,Le=G`
  padding-block: 4px;
  display: grid;
  align-items: start;
  grid-template-columns: 20fr 1fr 20fr;
`,Dt=j.div`
  ${Le}
`,It=j.form`
  ${Le}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ye=j.textarea`
  height: 84px;
  outline: none;
  border: 1px solid ${ee.accent};
  border-radius: ${Be.xs};
  resize: none;
  overflow: clip;
  transition: height 150ms;
`,Ft=j.div`
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
    border: 1px solid ${ee.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${ee.placeholder};
  }
`,Vt=j.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Nt=j.button`
  ${O}
`;j.button`
  ${O}
`;const ue=j.button`
  ${O}
`,Pt=j.button`
  ${O}
`,ve=j.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Be.xs};
  color: ${ee.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,ze=G`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ot=j.iframe`
  ${ze}

  height: 60px;
  border-radius: 30px;
`,Mt=j.audio`
  ${ze}
`,We=({el:e,sortByDate:c,setSortByDate:t,setLiColor:u})=>{const l=V(),{user:r}=P(),{activeCluster:d}=I(),{element:n,caption:o}=e,y="$*@",v=(i,p)=>{let h="";return p?(i.trim().endsWith(".")||i.trim().endsWith("!")||i.trim().endsWith("?")||i.endsWith('"')?(h=i.trim().replaceAll(", `",`;${p} `).replaceAll(" `",`${p} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${p}`).replaceAll(".",`.${p}`).replaceAll(",",`,${p}`).replaceAll("!",`!${p}`).replaceAll("?",`?${p}`).replaceAll(": ",`:${p} `),d.lang.includes("de")&&(h=h.replaceAll(`0.${p}`,"0.").replaceAll(`1.${p}`,"1.").replaceAll(`2.${p}`,"2.").replaceAll(`3.${p}`,"3.").replaceAll(`4.${p}`,"4.").replaceAll(`5.${p}`,"5.").replaceAll(`6.${p}`,"6.").replaceAll(`7.${p}`,"7.").replaceAll(`8.${p}`,"8.").replaceAll(`9.${p}`,"9."))):h=i.trim()+p,h.includes("[")?h.substring(0,h.indexOf("["))+p:h):i},g=i=>{const p=X({setLiColor:u,divider:y,text:v(n,y),lang:d.lang,rate:d.rate});i.target.blur(),p&&W.error(p)},A=i=>{const p=X({setLiColor:u,divider:y,text:v(o,y),lang:e.lang,rate:r.rate});i.target.blur(),p&&W.error(p)},$=i=>{t(!c),c?W.success("Below is Recent"):W.success("Above is Recent"),i.stopPropagation()},m=i=>{const{_id:p}=d;l(we(e)),i.currentTarget.closest("li").id!=="active-element"&&l(oe({_id:p,activeEl:e._id}))},a=o.endsWith("mp3"),b=!a&&o.startsWith("http"),f=!a&&!b;return s.jsxs(Dt,{onClick:m,children:[s.jsx(ve,{onClick:g,children:n}),s.jsx(Ft,{onClick:$}),a&&s.jsx(Mt,{controls:!0,src:ge(o)}),b&&s.jsx(Ot,{src:ge(o)}),f&&s.jsx(ve,{onClick:A,children:o})]})};We.propTypes={el:w.object,sortByDate:w.bool,setSortByDate:w.func,$active:w.bool,$hovered:w.bool,setLiColor:w.func};const De=({el:e,setIsForm:c})=>{const t=V(),u=k.useRef(null),l=k.useRef(null),r=k.useRef(null),{user:d}=P(),{activeCluster:n}=I(),[o,y]=k.useState(""),{_id:v,element:g,caption:A}=e,{register:$,watch:m,setValue:a,handleSubmit:b,setFocus:f}=ot({mode:"onBlur",defaultValues:{element:g,caption:A}}),{ref:i,...p}=$("element"),{ref:h,...x}=$("caption"),C=[u.current,l.current,r.current],D=[m("caption"),m("element")];dt(C,D),k.useEffect(()=>{f("element"),o&&g.trim().startsWith("der")?a("element",o+g.replace("der","").trim()+", "):o&&g.trim().startsWith("die")?a("element",o+g.replace("die","").trim()+", "):o&&g.trim().startsWith("das")?a("element",o+g.replace("das","").trim()+", "):o?a("element",o+g+", "):a("element",o+g)},[o,g,f,a]),k.useEffect(()=>{const T=async S=>{(S.code==="NumpadAdd"||S.ctrlKey&&S.key==="Escape")&&(S.preventDefault(),await L(d.engine),b(_)()),S.key==="Enter"&&(S.preventDefault(),b(_)()),S.key==="Escape"&&c(!1)};return addEventListener("keydown",T),()=>{removeEventListener("keydown",T)}},[]);const _=T=>{const S=d.lang;let z=T.caption.trim(),B=ce(T.element,n.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();B.endsWith(",")&&(B=B.substring(0,B.length-1)),z.endsWith(",")&&(z=z.substring(0,z.length-1)),d.lang.includes("en")&&n.lang.includes("de")&&(B.includes("hat")||B.includes("ist"))&&B.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(z=z.split(/,\s+/).map(te=>te.startsWith("to ")?te:`to ${te}`).join(", ")),t(J({_id:v,lang:S,element:B,caption:z})).then(t(je())),c(!1)},F=()=>{o===""&&y("der "),o==="der "&&y("die "),o==="die "&&y("das "),o==="das "&&y("")},L=async T=>{const S=m("element"),z=ce(S,n.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),B={from:n.lang,to:d.lang},he=await pe(z,B,T);a("caption",he)};return s.jsxs(It,{onSubmit:b(_),children:[s.jsx(ye,{...p,name:"element",ref:T=>{i(T),u.current=T}}),s.jsxs(Vt,{ref:r,children:[s.jsx(Pt,{type:"button",onClick:F,children:s.jsx(at,{size:"18px"})}),s.jsx(ue,{type:"button",onClick:()=>L("google"),children:s.jsx(Ue,{size:"16px"})}),s.jsx(ue,{type:"button",onClick:()=>L("deepl"),children:s.jsx(qe,{size:"18px"})}),s.jsx(Nt,{children:s.jsx(Ye,{size:"16px"})})]}),s.jsx(ye,{...x,name:"caption",ref:T=>{h(T),l.current=T}})]})};De.propTypes={el:w.object,setIsForm:w.func};const Ie=({el:e,index:c,length:t,sortByDate:u,setSortByDate:l,translateAll:r,liColor:d,setLiColor:n})=>{const o=V(),{elementTrash:y,activeElement:v}=N(),[g,A]=k.useState(!1),{_id:$,favorite:m,checked:a}=e,b=y.find(C=>C._id===$),f=()=>{o(J({_id:$,favorite:!m}))},i=()=>{o(J({_id:$,checked:!a}))},p=()=>o(et(e)),h=()=>A(!g),x=$===(v==null?void 0:v._id);return s.jsxs(_t,{id:x?"active-element":null,licolor:d,children:[s.jsxs(ae,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(Bt,{$hovered:m,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:f}),s.jsx(rt,{size:"20px"})]}),s.jsxs(Lt,{$hovered:a,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:a,onChange:i}),s.jsx(Qe,{size:"15px"})]}),g&&t===c+1&&s.jsx(ue,{onClick:r,children:s.jsx(Ze,{size:"16px"})})]}),g&&s.jsx(De,{el:e,setIsForm:A}),!g&&s.jsx(We,{el:e,sortByDate:u,setSortByDate:l,setLiColor:n}),s.jsxs(ae,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(zt,{$hovered:b,onClick:p,children:s.jsx(Xe,{size:"16px"})}),s.jsx(Wt,{onClick:h,children:s.jsx(Je,{size:"15px"})})]})]})};Ie.propTypes={el:w.object,index:w.number,length:w.number,sortByDate:w.bool,setSortByDate:w.func,translateAll:w.func,liColor:w.string,setLiColor:w.func};const Gt=j.ul`
  width: 100%;
  list-style: none;
`,{white:Kt}=R.colors,Ht=()=>{const e=V(),{ref:c,inView:t,entry:u}=$t({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:l}=P(),{activeCluster:r}=I(),{allElements:d,elementTrash:n,elementFilter:o,isLoading:y}=N(),[v,g]=k.useState(Kt);let{elementSelect:A}=N();A=A||[];const[$,m]=k.useState(!1);k.useEffect(()=>{r&&e(je({cluster:r._id})).unwrap().then(({result:h})=>{if(!r.activeEl)return;const x=h.elements.find(({_id:C})=>C===r.activeEl);e(we(x))}).then(()=>{const h=document.getElementById("active-element");h&&tt(h)})},[]);const a=d.filter(h=>h.cluster===(r==null?void 0:r._id)).sort((h,x)=>h.createdAt.localeCompare(x.createdAt)),f=(()=>{const h=n.map(x=>x._id);return A.includes("trash")?a.filter(x=>h.includes(x._id)):a})().filter(({element:h,caption:x,favorite:C,checked:D})=>{const _=h.toLowerCase().replace("·","").includes(o)||h.toLowerCase().includes(o)||x.toLowerCase().includes(o),F=A.includes("wordlist")?_&&ct(h):_,L=()=>A.some(S=>["favorite","unfavorite"].includes(S))?A.includes("favorite")?F&&C===!0:F&&C===!1:F;return(()=>A.some(S=>["checked","unchecked"].includes(S))?A.includes("checked")?L()&&D===!0:L()&&D===!1:L())()}).sort($?(h,x)=>x.createdAt.localeCompare(h.createdAt):(h,x)=>h.createdAt.localeCompare(x.createdAt)),i=async()=>{const h=l.lang;let x=0;await f.forEach(async C=>{if(x>1)return;const{_id:D,element:_}=C;if(!_.startsWith("[")||h!==C.lang){const F={from:r.lang,to:h},L=await pe(_,F,l.engine);e(J({_id:D,lang:h,caption:L})),x=x+1}})},p=window.innerHeight<(u==null?void 0:u.target.getBoundingClientRect().y)+(u==null?void 0:u.target.getBoundingClientRect().height)*1.5;return s.jsxs(s.Fragment,{children:[s.jsxs(Gt,{children:[f.map((h,x,C)=>s.jsx(Ie,{el:h,index:x,length:C.length,sortByDate:$,setSortByDate:m,translateAll:i,liColor:v,setLiColor:g},h._id)),s.jsxs("div",{ref:c,children:[s.jsx(Ce,{}),s.jsx(Se,{className:!t||!p?"shown":"hidden"}),s.jsx(Re,{className:!t||!p?"shown":"hidden",filtredElements:f,setLiColor:g})]})]}),y&&s.jsx(nt,{})]})},{s:Ae,m:Ut}=R.indents,en=()=>s.jsx(ae,{$p:`0 ${Ut} ${Ae} ${Ae}`,children:s.jsx(Ht,{})});export{en as default};
