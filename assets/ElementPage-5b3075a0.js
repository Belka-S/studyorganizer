import{r as k,T as ne,t as R,P as w,u as V,b as O,q as D,j as s,S as de,U as H,w as oe,D as me,E as fe,K as M,R as Fe,V as Ve,Q as W,y as N,W as Ne,X as Oe,G as Pe,Y as Me,s as j,Z as Ge,_ as X,$ as He,n as G,a0 as ge,a1 as we,a2 as Ke,a3 as Ue,a4 as qe,a5 as J,a6 as je,F as ae,C as Ye,a7 as Qe,A as Ze,z as Xe,a8 as Je,a9 as et}from"./index-2b9ebe34.js";import{r as Ee,H as tt,T as nt}from"./index-24811228.js";import{w as ke}from"./writeClipboard-5e98d8b8.js";import{v as st,u as rt}from"./index.esm-ef15756e.js";import{a as lt}from"./index-9491e438.js";const ot=(e,a)=>{let t=84;e[0]&&(t=Number(e[0].style.height.replace("px",""))),k.useEffect(()=>{if(!e[0])return;let d=Math.max(...e.map(u=>u.scrollHeight));t!==d&&(d=d<=90?d:d+6,e.forEach(u=>{u.style.height=d+"px"}))},[t,e,a])},ce=(e,a)=>{if(!a.includes("de"))return e;const t=e.trim().split(`
`);return t.length===1?e:["der","die","das"].includes(t[0].split(" ")[0])?`${t[0].trim()}, ${t[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!t[0].trim().includes(" ")?`${t[0].trim()}, ${t[1].split("·")[1].trim()}, `+t[1].split("·")[2]:e.includes("am")&&!t[0].trim().includes(" ")?`${t[0].trim()}, ${t[1].split("·")[1].trim()}, `+t[1].split("·")[2]:e},at=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:ct}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},it={google:"",deepl:ct},pe=async(e,{from:a,to:t},d)=>{var c,r;ne.engine=d,ne.key=it[d];const u=e.replaceAll(" ·",",").replaceAll("·","");let n=await ne(`${u}`,{from:a,to:t});try{if(t.includes("en")&&u.toLowerCase().includes("uhr")&&(n=n.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(u.at(u.length-1)))return n;const v=u.split(u.includes(", ")?", ":/\s+/),y=n.split(", "),b=t.includes("de")?y[0]:y[0].at(0).toLowerCase()+y[0].substring(1);return v.length===1?n.toLocaleLowerCase()+", ":["der","die","das"].includes(v[0].split(" ")[0])?n.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":t.includes("en")&&((c=v[2])!=null&&c.startsWith("am"))?y[2].startsWith("the")?n:`${b}, ${y[1]}, the ${y[2]}`:(v[0].endsWith("n")&&["hat","ist"].includes((r=v[2])==null?void 0:r.split(" ")[0])&&a.includes("de")&&(n=t.includes("en")?"to "+b+", ":b+", "),n)}catch(l){return l.message}},K=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],U=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var ie=new Map,q=new WeakMap,$e=0,ut=void 0;function dt(e){return e?(q.has(e)||($e+=1,q.set(e,$e.toString())),q.get(e)):"0"}function pt(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?dt(e.root):e[a]}`).toString()}function ht(e){const a=pt(e);let t=ie.get(a);if(!t){const d=new Map;let u;const n=new IntersectionObserver(c=>{c.forEach(r=>{var l;const v=r.isIntersecting&&u.some(y=>r.intersectionRatio>=y);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=v),(l=d.get(r.target))==null||l.forEach(y=>{y(v,r)})})},e);u=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:a,observer:n,elements:d},ie.set(a,t)}return t}function mt(e,a,t={},d=ut){if(typeof window.IntersectionObserver>"u"&&d!==void 0){const l=e.getBoundingClientRect();return a(d,{isIntersecting:d,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:u,observer:n,elements:c}=ht(t),r=c.get(e)||[];return c.has(e)||c.set(e,r),r.push(a),n.observe(e),function(){r.splice(r.indexOf(a),1),r.length===0&&(c.delete(e),n.unobserve(e)),c.size===0&&(n.disconnect(),ie.delete(u))}}function ft({threshold:e,delay:a,trackVisibility:t,rootMargin:d,root:u,triggerOnce:n,skip:c,initialInView:r,fallbackInView:l,onChange:v}={}){var y;const[b,A]=k.useState(null),g=k.useRef(v),[m,o]=k.useState({inView:!!r,entry:void 0});g.current=v,k.useEffect(()=>{if(c||!b)return;let p;return p=mt(b,(h,x)=>{o({inView:h,entry:x}),g.current&&g.current(h,x),x.isIntersecting&&n&&p&&(p(),p=void 0)},{root:u,rootMargin:d,threshold:e,trackVisibility:t,delay:a},l),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,b,u,d,n,c,t,l,a]);const $=(y=m.entry)==null?void 0:y.target,f=k.useRef(void 0);!b&&$&&!n&&!c&&f.current!==$&&(f.current=$,o({inView:!!r,entry:void 0}));const i=[A,m.inView,m.entry];return i.ref=i[0],i.inView=i[1],i.entry=i[2],i}const{backgroundHoverd:Y,white:Q,borderLight:Z}=R.colors,Ce=()=>{const e=V(),{user:a}=O(),{activeCluster:t}=D(),d=({value:r})=>{e(oe({_id:t._id,lang:r})).unwrap().then(l=>e(me(l.result.cluster)))},u=({value:r})=>{e(oe({_id:t._id,rate:r})).unwrap().then(l=>e(me(l.result.cluster)))},n=({value:r})=>{const l=new FormData;l.append("lang",r),e(fe(l))},c=({value:r})=>{const l=new FormData;l.append("rate",r),e(fe(l))};return s.jsxs(de,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[s.jsx(H,{options:K,defaultValue:K.find(r=>r.value===(t==null?void 0:t.lang)),onChange:d,placeholder:"Language...",$ol:Y,$b:Q,$bh:Z}),s.jsx(H,{options:U,defaultValue:U.find(r=>r.value==(t==null?void 0:t.rate)),onChange:u,placeholder:"Rate...",$ol:Y,$b:Q,$bh:Z}),s.jsx(H,{options:K,defaultValue:K.find(r=>r.value===a.lang),onChange:n,placeholder:"Language...",$ol:Y,$b:Q,$bh:Z}),s.jsx(H,{options:U,defaultValue:U.find(r=>r.value==a.rate),onChange:c,placeholder:"Rate...",$ol:Y,$b:Q,$bh:Z})]})};Ce.propTypes={filtredElements:w.array,setLiColor:w.func};const{button:gt}=R.shadows,$t=()=>{const e=V(),{user:a}=O(),{activeCluster:t}=D();k.useEffect(()=>{const n=async c=>{c.key==="e"&&c.metaKey&&(c.prevent,await u())};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const d=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},u=async n=>{var A;const c=window.getSelection().toString();c&&await ke(c);const r=await Ee(),l=ce(r,t.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),v={from:t.lang,to:a.lang},y=await pe(l,v,a.engine),{_id:b}=t;try{const g={cluster:b,element:"[]",caption:l},m={cluster:b,element:l,caption:y,favorite:!0,checked:l.split(/\s+/).length<20},o=l.includes("https://")?g:m;e(Ve(o)).unwrap().then(()=>(n==null?void 0:n.target)&&d()).finally(()=>{var $;return($=n==null?void 0:n.target)==null?void 0:$.blur()})}catch(g){(A=n==null?void 0:n.target)==null||A.blur(),W.error(`Invalid element, ${g.message}`)}};return s.jsx(M,{onClick:u,$s:"m",$round:!0,$bs:gt,children:s.jsx(Fe,{size:18})})},{button:bt}=R.shadows,xt=()=>{const e=V(),{elementTrash:a}=N(),t=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Ne(a.map(d=>d._id).join("&"))).unwrap().then(()=>e(Oe()))};return s.jsx(M,{onClick:t,$s:"m",$round:!0,$bs:bt,children:s.jsx(tt,{size:16})})};function vt(e){return Pe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M250.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,114,126.22,107.48,107.48,0,0,0,139.33,68H160a12,12,0,0,0,0-24H108V32a12,12,0,0,0-24,0V44H32a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,96,110.35,84,84,0,0,1,83.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,78,126.24,83.54,83.54,0,0,1,32,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L151.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM163.41,172,184,130.83,204.58,172Z"},child:[]}]})(e)}const{button:yt}=R.shadows,At=()=>{const{activeCluster:e}=D();k.useEffect(()=>{const n=async c=>{c.key==="d"&&c.metaKey&&(c.prevent,await u())};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);let a=[];function t(n){n.forEach(c=>{const r=window.open(c,"_blank");r?a.push(r):W.error(`Failed to open tab: ${c}`)})}const d=()=>{a.forEach(n=>{n.close()}),a=[]},u=async()=>{const n=window.getSelection().toString();n&&await ke(n);const c=await Ee();let r=[];e.lang.includes("de")&&r.push(`https://www.verbformen.com/conjugation/?w=${c}`),e.lang.includes("en")&&r.push(`https://dictionary.cambridge.org/dictionary/english-russian/${c}`),d(),t(r)};return s.jsx(M,{onClick:u,$s:"m",$round:!0,$bs:yt,children:s.jsx(vt,{size:18})})},{m:wt,s:jt}=R.indents,Se=({className:e})=>{const{pathname:a}=Me(),{elementTrash:t}=N(),{activeCluster:d}=D(),u=t.length>0?" 1fr":"",n=d?" 1fr":"",c=u+n+" 1fr";if(a.includes("/element"))return s.jsxs(de,{className:e,$m:`${jt} ${wt}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:c,children:[s.jsx(At,{}),n&&s.jsx($t,{}),u&&s.jsx(xt,{})]})};Se.propTypes={className:w.string};const{colors:se}=R,Et=j.div`
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
`,Te=({onClick:e})=>s.jsx(Et,{onClick:e,children:s.jsx(Ge,{size:"35px"})});Te.propTypes={onClick:w.func};const{background:re}=R.colors,{button:be}=R.shadows,{m:kt,s:Ct}=R.indents,Re=({className:e,filtredElements:a,setLiColor:t})=>{const{user:d}=O(),{activeCluster:u}=D(),{activeElement:n}=N(),c=g=>{if(!g.length)return;let m="",o=0;const $=g.reduce((f,i)=>(f[i.lang]||(f[i.lang]=0),f[i.lang]+=1,f),{});for(const f in $)$[f]>o&&(o=$[f],m=f);return m},r=a.length?c(a):d.lang,l=(g,m)=>g.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),v=({text:g,playList:m,divider:o})=>{let $="";for(let f=0;f<m.length;f+=1){let i=m[f][g];i.endsWith(".")||i.endsWith("!")||i.endsWith("?")||i.endsWith('"')?($+=l(i,o).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${o}`).replaceAll(".",`.${o}`).replaceAll(",",`,${o}`).replaceAll("!",`!${o}`).replaceAll("?",`?${o}`).replaceAll(": ",`:${o} `),u.lang.includes("de")&&($=$.replaceAll(`0.${o}`,"0.").replaceAll(`1.${o}`,"1.").replaceAll(`2.${o}`,"2.").replaceAll(`3.${o}`,"3.").replaceAll(`4.${o}`,"4.").replaceAll(`5.${o}`,"5.").replaceAll(`6.${o}`,"6.").replaceAll(`7.${o}`,"7.").replaceAll(`8.${o}`,"8.").replaceAll(`9.${o}`,"9.")),$=$.replaceAll(`${o}`,g==="caption"?`@±@${m[f].lang}${o}`:`${o}`)):m[f].element.startsWith("[")||(g==="caption"&&(i.includes(" [")&&(i=i.substring(0,i.indexOf(" ["))),i=`${i}@±@${m[f].lang}`),$+=i+o)}return $},y=g=>{t(re);const m="$*@",o=a.findIndex(i=>i.element===n.element),$=a.splice(o===-1?0:o),f=X({setLiColor:t,divider:m,text:v({text:"element",playList:$,divider:m}),lang:u.lang,rate:u.rate});g.target.blur(),f&&W.error(f)},b=g=>{const m="$*@";t(re);const o=a.findIndex(i=>i.element===n.element),$=a.splice(o===-1?0:o),f=X({setLiColor:t,divider:m,text:v({text:"caption",playList:$,divider:m}),lang:r,rate:d.rate});g.target.blur(),f&&W.error(f)},A=g=>{t(re);let m="";const o="$*@",$=a.findIndex(p=>p.element===n.element),f=a.splice($===-1?0:$);for(let p=0;p<f.length;p+=1){const{element:h,caption:x,lang:C}=f[p];if(!h.startsWith("[")){const I=l(h,""),_=x.includes(" [")?x.substring(0,x.indexOf(" [")):l(x,"");m+=I+`@±@${C}`+_+o}}const i=He({setLiColor:t,divider:o,text:m,lang:u.lang,rate:d.rate});g.target.blur(),i&&W.error(i)};return s.jsxs(de,{className:e,$m:`${Ct} ${kt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[s.jsx(M,{onClick:y,$s:"m",$round:!0,$bs:be,children:(u==null?void 0:u.lang.at(0).toUpperCase())+(u==null?void 0:u.lang.substring(1))}),s.jsx(Te,{onClick:A}),s.jsx(M,{onClick:b,$s:"m",$round:!0,$bs:be,children:(r==null?void 0:r.at(0).toUpperCase())+(r==null?void 0:r.substring(1))})]})};Re.propTypes={className:w.string,filtredElements:w.array,setLiColor:w.func};const{colors:E,shadows:xe,indents:le}=R,St=G`
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
`,Tt=j.li`
  ${St}

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
    ${st}
  }
`,Rt=j.label`
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
`,_t=j.label`
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
`,P=G`
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
`,Bt=j.button`
  ${P}

  opacity: ${({$hovered:e})=>e?1:0};
`,Lt=j.button`
  ${P}

  opacity: 0;
`,{colors:ee,indents:Be}=R,Le=G`
  padding-block: 4px;
  display: grid;
  align-items: start;
  grid-template-columns: 20fr 1fr 20fr;
`,zt=j.div`
  ${Le}
`,Wt=j.form`
  ${Le}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ve=j.textarea`
  height: 84px;
  outline: none;
  border: 1px solid ${ee.accent};
  border-radius: ${Be.xs};
  resize: none;
  overflow: clip;
  transition: height 150ms;
`,It=j.div`
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
`,Dt=j.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ft=j.button`
  ${P}
`;j.button`
  ${P}
`;const ue=j.button`
  ${P}
`,Vt=j.button`
  ${P}
`,ye=j.button`
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
`,Nt=j.iframe`
  ${ze}

  height: 60px;
  border-radius: 30px;
`,Ot=j.audio`
  ${ze}
`,We=({el:e,sortByDate:a,setSortByDate:t,setLiColor:d})=>{const u=V(),{user:n}=O(),{activeCluster:c}=D(),{element:r,caption:l}=e,v="$*@",y=(i,p)=>{let h="";return p?(i.trim().endsWith(".")||i.trim().endsWith("!")||i.trim().endsWith("?")||i.endsWith('"')?(h=i.trim().replaceAll(", `",`;${p} `).replaceAll(" `",`${p} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${p}`).replaceAll(".",`.${p}`).replaceAll(",",`,${p}`).replaceAll("!",`!${p}`).replaceAll("?",`?${p}`).replaceAll(": ",`:${p} `),c.lang.includes("de")&&(h=h.replaceAll(`0.${p}`,"0.").replaceAll(`1.${p}`,"1.").replaceAll(`2.${p}`,"2.").replaceAll(`3.${p}`,"3.").replaceAll(`4.${p}`,"4.").replaceAll(`5.${p}`,"5.").replaceAll(`6.${p}`,"6.").replaceAll(`7.${p}`,"7.").replaceAll(`8.${p}`,"8.").replaceAll(`9.${p}`,"9."))):h=i.trim()+p,h.includes("[")?h.substring(0,h.indexOf("["))+p:h):i},b=i=>{const p=X({setLiColor:d,divider:v,text:y(r,v),lang:c.lang,rate:c.rate});i.target.blur(),p&&W.error(p)},A=i=>{const p=X({setLiColor:d,divider:v,text:y(l,v),lang:e.lang,rate:n.rate});i.target.blur(),p&&W.error(p)},g=i=>{t(!a),a?W.success("Below is Recent"):W.success("Above is Recent"),i.stopPropagation()},m=i=>{const{_id:p}=c;u(we(e)),i.currentTarget.closest("li").id!=="active-element"&&u(oe({_id:p,activeEl:e._id}))},o=l.endsWith("mp3"),$=!o&&l.startsWith("http"),f=!o&&!$;return s.jsxs(zt,{onClick:m,children:[s.jsx(ye,{onClick:b,children:r}),s.jsx(It,{onClick:g}),o&&s.jsx(Ot,{controls:!0,src:ge(l)}),$&&s.jsx(Nt,{src:ge(l)}),f&&s.jsx(ye,{onClick:A,children:l})]})};We.propTypes={el:w.object,sortByDate:w.bool,setSortByDate:w.func,$active:w.bool,$hovered:w.bool,setLiColor:w.func};const Ie=({el:e,setIsForm:a})=>{const t=V(),d=k.useRef(null),u=k.useRef(null),n=k.useRef(null),{user:c}=O(),{activeCluster:r}=D(),[l,v]=k.useState(""),{_id:y,element:b,caption:A}=e,{register:g,watch:m,setValue:o,handleSubmit:$,setFocus:f}=rt({mode:"onBlur",defaultValues:{element:b,caption:A}}),{ref:i,...p}=g("element"),{ref:h,...x}=g("caption"),C=[d.current,u.current,n.current],I=[m("caption"),m("element")];ot(C,I),k.useEffect(()=>{f("element"),l&&b.trim().startsWith("der")?o("element",l+b.replace("der","").trim()+", "):l&&b.trim().startsWith("die")?o("element",l+b.replace("die","").trim()+", "):l&&b.trim().startsWith("das")?o("element",l+b.replace("das","").trim()+", "):l?o("element",l+b+", "):o("element",l+b)},[l,b,f,o]),k.useEffect(()=>{const T=async S=>{(S.code==="NumpadAdd"||S.ctrlKey&&S.key==="Escape")&&(S.preventDefault(),await L(c.engine),$(_)()),S.key==="Enter"&&(S.preventDefault(),$(_)()),S.key==="Escape"&&a(!1)};return addEventListener("keydown",T),()=>{removeEventListener("keydown",T)}},[]);const _=T=>{const S=c.lang;let z=T.caption.trim(),B=ce(T.element,r.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();B.endsWith(",")&&(B=B.substring(0,B.length-1)),z.endsWith(",")&&(z=z.substring(0,z.length-1)),c.lang.includes("en")&&r.lang.includes("de")&&(B.includes("hat")||B.includes("ist"))&&B.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(z=z.split(/,\s+/).map(te=>te.startsWith("to ")?te:`to ${te}`).join(", ")),t(J({_id:y,lang:S,element:B,caption:z})).then(t(je())),a(!1)},F=()=>{l===""&&v("der "),l==="der "&&v("die "),l==="die "&&v("das "),l==="das "&&v("")},L=async T=>{const S=m("element"),z=ce(S,r.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),B={from:r.lang,to:c.lang},he=await pe(z,B,T);o("caption",he)};return s.jsxs(Wt,{onSubmit:$(_),children:[s.jsx(ve,{...p,name:"element",ref:T=>{i(T),d.current=T}}),s.jsxs(Dt,{ref:n,children:[s.jsx(Vt,{type:"button",onClick:F,children:s.jsx(lt,{size:"18px"})}),s.jsx(ue,{type:"button",onClick:()=>L("google"),children:s.jsx(Ke,{size:"16px"})}),s.jsx(ue,{type:"button",onClick:()=>L("deepl"),children:s.jsx(Ue,{size:"18px"})}),s.jsx(Ft,{children:s.jsx(qe,{size:"16px"})})]}),s.jsx(ve,{...x,name:"caption",ref:T=>{h(T),u.current=T}})]})};Ie.propTypes={el:w.object,setIsForm:w.func};const De=({el:e,index:a,length:t,sortByDate:d,setSortByDate:u,translateAll:n,liColor:c,setLiColor:r})=>{const l=V(),{elementTrash:v,activeElement:y}=N(),[b,A]=k.useState(!1),{_id:g,favorite:m,checked:o}=e,$=v.find(C=>C._id===g),f=()=>{l(J({_id:g,favorite:!m}))},i=()=>{l(J({_id:g,checked:!o}))},p=()=>l(Je(e)),h=()=>A(!b),x=g===(y==null?void 0:y._id);return s.jsxs(Tt,{id:x?"active-element":null,licolor:c,children:[s.jsxs(ae,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(Rt,{$hovered:m,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:f}),s.jsx(nt,{size:"20px"})]}),s.jsxs(_t,{$hovered:o,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:o,onChange:i}),s.jsx(Ye,{size:"15px"})]}),b&&t===a+1&&s.jsx(ue,{onClick:n,children:s.jsx(Qe,{size:"16px"})})]}),b&&s.jsx(Ie,{el:e,setIsForm:A}),!b&&s.jsx(We,{el:e,sortByDate:d,setSortByDate:u,setLiColor:r}),s.jsxs(ae,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(Bt,{$hovered:$,onClick:p,children:s.jsx(Ze,{size:"16px"})}),s.jsx(Lt,{onClick:h,children:s.jsx(Xe,{size:"15px"})})]})]})};De.propTypes={el:w.object,index:w.number,length:w.number,sortByDate:w.bool,setSortByDate:w.func,translateAll:w.func,liColor:w.string,setLiColor:w.func};const Pt=j.ul`
  width: 100%;
  list-style: none;
`,{white:Mt}=R.colors,Gt=()=>{const e=V(),{ref:a,inView:t,entry:d}=ft({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:u}=O(),{activeCluster:n}=D(),{allElements:c,elementTrash:r,elementFilter:l,isLoading:v}=N(),[y,b]=k.useState(Mt);let{elementSelect:A}=N();A=A||[];const[g,m]=k.useState(!1);k.useEffect(()=>{n&&e(je({cluster:n._id})).unwrap().then(({result:h})=>{if(!n.activeEl)return;const x=h.elements.find(({_id:C})=>C===n.activeEl);e(we(x))}).then(()=>{const h=document.getElementById("active-element");(()=>{h==null||h.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const o=c.filter(h=>h.cluster===(n==null?void 0:n._id)).sort((h,x)=>h.createdAt.localeCompare(x.createdAt)),f=(()=>{const h=r.map(x=>x._id);return A.includes("trash")?o.filter(x=>h.includes(x._id)):o})().filter(({element:h,caption:x,favorite:C,checked:I})=>{const _=h.toLowerCase().replace("·","").includes(l)||h.toLowerCase().includes(l)||x.toLowerCase().includes(l),F=A.includes("wordlist")?_&&at(h):_,L=()=>A.some(S=>["favorite","unfavorite"].includes(S))?A.includes("favorite")?F&&C===!0:F&&C===!1:F;return(()=>A.some(S=>["checked","unchecked"].includes(S))?A.includes("checked")?L()&&I===!0:L()&&I===!1:L())()}).sort(g?(h,x)=>x.createdAt.localeCompare(h.createdAt):(h,x)=>h.createdAt.localeCompare(x.createdAt)),i=async()=>{const h=u.lang;let x=0;await f.forEach(async C=>{if(x>1)return;const{_id:I,element:_}=C;if(!_.startsWith("[")||h!==C.lang){const F={from:n.lang,to:h},L=await pe(_,F,u.engine);e(J({_id:I,lang:h,caption:L})),x=x+1}})},p=window.innerHeight<(d==null?void 0:d.target.getBoundingClientRect().y)+(d==null?void 0:d.target.getBoundingClientRect().height)*1.5;return s.jsxs(s.Fragment,{children:[s.jsxs(Pt,{children:[f.map((h,x,C)=>s.jsx(De,{el:h,index:x,length:C.length,sortByDate:g,setSortByDate:m,translateAll:i,liColor:y,setLiColor:b},h._id)),s.jsxs("div",{ref:a,children:[s.jsx(Ce,{}),s.jsx(Se,{className:!t||!p?"shown":"hidden"}),s.jsx(Re,{className:!t||!p?"shown":"hidden",filtredElements:f,setLiColor:b})]})]}),v&&s.jsx(et,{})]})},{s:Ae,m:Ht}=R.indents,Xt=()=>s.jsx(ae,{$p:`0 ${Ht} ${Ae} ${Ae}`,children:s.jsx(Gt,{})});export{Xt as default};
