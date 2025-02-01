import{r as k,T as ne,t as R,P as w,u as V,b as P,q as D,j as s,S as de,U as H,w as le,D as me,E as fe,K as M,R as Fe,V as Ve,Q as W,y as O,W as Oe,X as Pe,G as Ne,Y as Me,s as j,Z as Ge,_ as X,$ as He,n as G,a0 as ge,a1 as we,a2 as Ke,a3 as Ue,a4 as qe,a5 as J,a6 as je,F as ae,C as Ye,a7 as Qe,A as Ze,z as Xe,a8 as Je,a9 as et}from"./index-dec6ab96.js";import{r as Ee,H as tt,T as nt}from"./index-62e6fe82.js";import{w as ke}from"./writeClipboard-b8c2e227.js";import{v as st,u as rt}from"./index.esm-ca04a9d6.js";import{a as ot}from"./index-0790934a.js";const lt=(e,a)=>{k.useEffect(()=>{if(!e[0])return;e.forEach(d=>{d.style.height="0px"});const n=Math.max(...e.map(d=>d.scrollHeight))+6;e.forEach(d=>{d.style.height=n+"px"})},[e,a])},ce=(e,a)=>{if(!a.includes("de"))return e;const n=e.trim().split(`
`);return n.length===1?e:["der","die","das"].includes(n[0].split(" ")[0])?`${n[0].trim()}, ${n[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e.includes("am")&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e},at=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:ct}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},it={google:"",deepl:ct},pe=async(e,{from:a,to:n},d)=>{var c,r;ne.engine=d,ne.key=it[d];const p=e.replaceAll(" ·",",").replaceAll("·","");let t=await ne(`${p}`,{from:a,to:n});try{if(n.includes("en")&&p.toLowerCase().includes("uhr")&&(t=t.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(p.at(p.length-1)))return t;const v=p.split(p.includes(", ")?", ":/\s+/),y=t.split(", "),b=n.includes("de")?y[0]:y[0].at(0).toLowerCase()+y[0].substring(1);return v.length===1?t.toLocaleLowerCase()+", ":["der","die","das"].includes(v[0].split(" ")[0])?t.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":n.includes("en")&&((c=v[2])!=null&&c.startsWith("am"))?y[2].startsWith("the")?t:`${b}, ${y[1]}, the ${y[2]}`:(v[0].endsWith("n")&&["hat","ist"].includes((r=v[2])==null?void 0:r.split(" ")[0])&&a.includes("de")&&(t=n.includes("en")?"to "+b+", ":b+", "),t)}catch(o){return o.message}},K=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],U=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var ie=new Map,q=new WeakMap,$e=0,ut=void 0;function dt(e){return e?(q.has(e)||($e+=1,q.set(e,$e.toString())),q.get(e)):"0"}function pt(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?dt(e.root):e[a]}`).toString()}function ht(e){const a=pt(e);let n=ie.get(a);if(!n){const d=new Map;let p;const t=new IntersectionObserver(c=>{c.forEach(r=>{var o;const v=r.isIntersecting&&p.some(y=>r.intersectionRatio>=y);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=v),(o=d.get(r.target))==null||o.forEach(y=>{y(v,r)})})},e);p=t.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:a,observer:t,elements:d},ie.set(a,n)}return n}function mt(e,a,n={},d=ut){if(typeof window.IntersectionObserver>"u"&&d!==void 0){const o=e.getBoundingClientRect();return a(d,{isIntersecting:d,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:p,observer:t,elements:c}=ht(n),r=c.get(e)||[];return c.has(e)||c.set(e,r),r.push(a),t.observe(e),function(){r.splice(r.indexOf(a),1),r.length===0&&(c.delete(e),t.unobserve(e)),c.size===0&&(t.disconnect(),ie.delete(p))}}function ft({threshold:e,delay:a,trackVisibility:n,rootMargin:d,root:p,triggerOnce:t,skip:c,initialInView:r,fallbackInView:o,onChange:v}={}){var y;const[b,A]=k.useState(null),g=k.useRef(v),[m,l]=k.useState({inView:!!r,entry:void 0});g.current=v,k.useEffect(()=>{if(c||!b)return;let u;return u=mt(b,(h,x)=>{l({inView:h,entry:x}),g.current&&g.current(h,x),x.isIntersecting&&t&&u&&(u(),u=void 0)},{root:p,rootMargin:d,threshold:e,trackVisibility:n,delay:a},o),()=>{u&&u()}},[Array.isArray(e)?e.toString():e,b,p,d,t,c,n,o,a]);const $=(y=m.entry)==null?void 0:y.target,f=k.useRef(void 0);!b&&$&&!t&&!c&&f.current!==$&&(f.current=$,l({inView:!!r,entry:void 0}));const i=[A,m.inView,m.entry];return i.ref=i[0],i.inView=i[1],i.entry=i[2],i}const{backgroundHoverd:Y,white:Q,borderLight:Z}=R.colors,Ce=()=>{const e=V(),{user:a}=P(),{activeCluster:n}=D(),d=({value:r})=>{e(le({_id:n._id,lang:r})).unwrap().then(o=>e(me(o.result.cluster)))},p=({value:r})=>{e(le({_id:n._id,rate:r})).unwrap().then(o=>e(me(o.result.cluster)))},t=({value:r})=>{const o=new FormData;o.append("lang",r),e(fe(o))},c=({value:r})=>{const o=new FormData;o.append("rate",r),e(fe(o))};return s.jsxs(de,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[s.jsx(H,{options:K,defaultValue:K.find(r=>r.value===(n==null?void 0:n.lang)),onChange:d,placeholder:"Language...",$ol:Y,$b:Q,$bh:Z}),s.jsx(H,{options:U,defaultValue:U.find(r=>r.value==(n==null?void 0:n.rate)),onChange:p,placeholder:"Rate...",$ol:Y,$b:Q,$bh:Z}),s.jsx(H,{options:K,defaultValue:K.find(r=>r.value===a.lang),onChange:t,placeholder:"Language...",$ol:Y,$b:Q,$bh:Z}),s.jsx(H,{options:U,defaultValue:U.find(r=>r.value==a.rate),onChange:c,placeholder:"Rate...",$ol:Y,$b:Q,$bh:Z})]})};Ce.propTypes={filtredElements:w.array,setLiColor:w.func};const{button:gt}=R.shadows,$t=()=>{const e=V(),{user:a}=P(),{activeCluster:n}=D();k.useEffect(()=>{const t=async c=>{c.key==="e"&&c.metaKey&&(c.prevent,await p())};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);const d=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},p=async t=>{var A;const c=window.getSelection().toString();c&&await ke(c);const r=await Ee(),o=ce(r,n.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),v={from:n.lang,to:a.lang},y=await pe(o,v,a.engine),{_id:b}=n;try{const g={cluster:b,element:"[]",caption:o},m={cluster:b,element:o,caption:y,favorite:!0,checked:o.split(/\s+/).length<20},l=o.includes("https://")?g:m;e(Ve(l)).unwrap().then(()=>(t==null?void 0:t.target)&&d()).finally(()=>{var $;return($=t==null?void 0:t.target)==null?void 0:$.blur()})}catch(g){(A=t==null?void 0:t.target)==null||A.blur(),W.error(`Invalid element, ${g.message}`)}};return s.jsx(M,{onClick:p,$s:"m",$round:!0,$bs:gt,children:s.jsx(Fe,{size:18})})},{button:bt}=R.shadows,xt=()=>{const e=V(),{elementTrash:a}=O(),n=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Oe(a.map(d=>d._id).join("&"))).unwrap().then(()=>e(Pe()))};return s.jsx(M,{onClick:n,$s:"m",$round:!0,$bs:bt,children:s.jsx(tt,{size:16})})};function vt(e){return Ne({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M250.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,114,126.22,107.48,107.48,0,0,0,139.33,68H160a12,12,0,0,0,0-24H108V32a12,12,0,0,0-24,0V44H32a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,96,110.35,84,84,0,0,1,83.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,78,126.24,83.54,83.54,0,0,1,32,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L151.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM163.41,172,184,130.83,204.58,172Z"},child:[]}]})(e)}const{button:yt}=R.shadows,At=()=>{const{activeCluster:e}=D();k.useEffect(()=>{const t=async c=>{c.key==="d"&&c.metaKey&&(c.prevent,await p())};return addEventListener("keydown",t),()=>{removeEventListener("keydown",t)}},[]);let a=[];function n(t){t.forEach(c=>{const r=window.open(c,"_blank");r?a.push(r):W.error(`Failed to open tab: ${c}`)})}const d=()=>{a.forEach(t=>{t.close()}),a=[]},p=async()=>{const t=window.getSelection().toString();t&&await ke(t);const c=await Ee();let r=[];e.lang.includes("de")&&r.push(`https://www.verbformen.com/conjugation/?w=${c}`),e.lang.includes("en")&&r.push(`https://dictionary.cambridge.org/dictionary/english-russian/${c}`),d(),n(r)};return s.jsx(M,{onClick:p,$s:"m",$round:!0,$bs:yt,children:s.jsx(vt,{size:18})})},{m:wt,s:jt}=R.indents,Se=({className:e})=>{const{pathname:a}=Me(),{elementTrash:n}=O(),{activeCluster:d}=D(),p=n.length>0?" 1fr":"",t=d?" 1fr":"",c=p+t+" 1fr";if(a.includes("/element"))return s.jsxs(de,{className:e,$m:`${jt} ${wt}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:c,children:[s.jsx(At,{}),t&&s.jsx($t,{}),p&&s.jsx(xt,{})]})};Se.propTypes={className:w.string};const{colors:se}=R,Et=j.div`
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
`,Te=({onClick:e})=>s.jsx(Et,{onClick:e,children:s.jsx(Ge,{size:"35px"})});Te.propTypes={onClick:w.func};const{background:re}=R.colors,{button:be}=R.shadows,{m:kt,s:Ct}=R.indents,Re=({className:e,filtredElements:a,setLiColor:n})=>{const{user:d}=P(),{activeCluster:p}=D(),{activeElement:t}=O(),c=g=>{if(!g.length)return;let m="",l=0;const $=g.reduce((f,i)=>(f[i.lang]||(f[i.lang]=0),f[i.lang]+=1,f),{});for(const f in $)$[f]>l&&(l=$[f],m=f);return m},r=a.length?c(a):d.lang,o=(g,m)=>g.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),v=({text:g,playList:m,divider:l})=>{let $="";for(let f=0;f<m.length;f+=1){let i=m[f][g];i.endsWith(".")||i.endsWith("!")||i.endsWith("?")||i.endsWith('"')?($+=o(i,l).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(": ",`:${l} `),p.lang.includes("de")&&($=$.replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9.")),$=$.replaceAll(`${l}`,g==="caption"?`@±@${m[f].lang}${l}`:`${l}`)):m[f].element.startsWith("[")||(g==="caption"&&(i.includes(" [")&&(i=i.substring(0,i.indexOf(" ["))),i=`${i}@±@${m[f].lang}`),$+=i+l)}return $},y=g=>{n(re);const m="$*@",l=a.findIndex(i=>i.element===t.element),$=a.splice(l===-1?0:l),f=X({setLiColor:n,divider:m,text:v({text:"element",playList:$,divider:m}),lang:p.lang,rate:p.rate});g.target.blur(),f&&W.error(f)},b=g=>{const m="$*@";n(re);const l=a.findIndex(i=>i.element===t.element),$=a.splice(l===-1?0:l),f=X({setLiColor:n,divider:m,text:v({text:"caption",playList:$,divider:m}),lang:r,rate:d.rate});g.target.blur(),f&&W.error(f)},A=g=>{n(re);let m="";const l="$*@",$=a.findIndex(u=>u.element===t.element),f=a.splice($===-1?0:$);for(let u=0;u<f.length;u+=1){const{element:h,caption:x,lang:C}=f[u];if(!h.startsWith("[")){const I=o(h,""),_=x.includes(" [")?x.substring(0,x.indexOf(" [")):o(x,"");m+=I+`@±@${C}`+_+l}}const i=He({setLiColor:n,divider:l,text:m,lang:p.lang,rate:d.rate});g.target.blur(),i&&W.error(i)};return s.jsxs(de,{className:e,$m:`${Ct} ${kt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[s.jsx(M,{onClick:y,$s:"m",$round:!0,$bs:be,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),s.jsx(Te,{onClick:A}),s.jsx(M,{onClick:b,$s:"m",$round:!0,$bs:be,children:(r==null?void 0:r.at(0).toUpperCase())+(r==null?void 0:r.substring(1))})]})};Re.propTypes={className:w.string,filtredElements:w.array,setLiColor:w.func};const{colors:E,shadows:xe,indents:oe}=R,St=G`
  margin-bottom: 7px;
  padding-block: ${oe.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${oe.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${oe.s};
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
`,N=G`
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
  ${N}

  opacity: ${({$hovered:e})=>e?1:0};
`,Lt=j.button`
  ${N}

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
  outline: none;
  border: 1px solid ${ee.accent};
  border-radius: ${Be.xs};
  resize: none;
  overflow: clip;
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
  ${N}
`;j.button`
  ${N}
`;const ue=j.button`
  ${N}
`,Vt=j.button`
  ${N}
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
`,Ot=j.iframe`
  ${ze}

  height: 60px;
  border-radius: 30px;
`,Pt=j.audio`
  ${ze}
`,We=({el:e,sortByDate:a,setSortByDate:n,setLiColor:d})=>{const p=V(),{user:t}=P(),{activeCluster:c}=D(),{element:r,caption:o}=e,v="$*@",y=(i,u)=>{let h="";return u?(i.trim().endsWith(".")||i.trim().endsWith("!")||i.trim().endsWith("?")||i.endsWith('"')?(h=i.trim().replaceAll(", `",`;${u} `).replaceAll(" `",`${u} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${u}`).replaceAll(".",`.${u}`).replaceAll(",",`,${u}`).replaceAll("!",`!${u}`).replaceAll("?",`?${u}`).replaceAll(": ",`:${u} `),c.lang.includes("de")&&(h=h.replaceAll(`0.${u}`,"0.").replaceAll(`1.${u}`,"1.").replaceAll(`2.${u}`,"2.").replaceAll(`3.${u}`,"3.").replaceAll(`4.${u}`,"4.").replaceAll(`5.${u}`,"5.").replaceAll(`6.${u}`,"6.").replaceAll(`7.${u}`,"7.").replaceAll(`8.${u}`,"8.").replaceAll(`9.${u}`,"9."))):h=i.trim()+u,h.includes("[")?h.substring(0,h.indexOf("["))+u:h):i},b=i=>{const u=X({setLiColor:d,divider:v,text:y(r,v),lang:c.lang,rate:c.rate});i.target.blur(),u&&W.error(u)},A=i=>{const u=X({setLiColor:d,divider:v,text:y(o,v),lang:e.lang,rate:t.rate});i.target.blur(),u&&W.error(u)},g=i=>{n(!a),a?W.success("Below is Recent"):W.success("Above is Recent"),i.stopPropagation()},m=i=>{const{_id:u}=c;p(we(e)),i.currentTarget.closest("li").id!=="active-element"&&p(le({_id:u,activeEl:e._id}))},l=o.endsWith("mp3"),$=!l&&o.startsWith("http"),f=!l&&!$;return s.jsxs(zt,{onClick:m,children:[s.jsx(ye,{onClick:b,children:r}),s.jsx(It,{onClick:g}),l&&s.jsx(Pt,{controls:!0,src:ge(o)}),$&&s.jsx(Ot,{src:ge(o)}),f&&s.jsx(ye,{onClick:A,children:o})]})};We.propTypes={el:w.object,sortByDate:w.bool,setSortByDate:w.func,$active:w.bool,$hovered:w.bool,setLiColor:w.func};const Ie=({el:e,setIsForm:a})=>{const n=V(),d=k.useRef(null),p=k.useRef(null),t=k.useRef(null),{user:c}=P(),{activeCluster:r}=D(),[o,v]=k.useState(""),{_id:y,element:b,caption:A}=e,{register:g,watch:m,setValue:l,handleSubmit:$,setFocus:f}=rt({mode:"onBlur",defaultValues:{element:b,caption:A}}),{ref:i,...u}=g("element"),{ref:h,...x}=g("caption"),C=[d.current,p.current,t.current],I=[m("caption"),m("element")];lt(C,I),k.useEffect(()=>{f("element"),o&&b.trim().startsWith("der")?l("element",o+b.replace("der","").trim()+", "):o&&b.trim().startsWith("die")?l("element",o+b.replace("die","").trim()+", "):o&&b.trim().startsWith("das")?l("element",o+b.replace("das","").trim()+", "):o?l("element",o+b+", "):l("element",o+b)},[o,b,f,l]),k.useEffect(()=>{const T=async S=>{(S.code==="NumpadAdd"||S.ctrlKey&&S.key==="Escape")&&(S.preventDefault(),await L(c.engine),$(_)()),S.key==="Enter"&&(S.preventDefault(),$(_)()),S.key==="Escape"&&a(!1)};return addEventListener("keydown",T),()=>{removeEventListener("keydown",T)}},[]);const _=T=>{const S=c.lang;let z=T.caption.trim(),B=ce(T.element,r.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();B.endsWith(",")&&(B=B.substring(0,B.length-1)),z.endsWith(",")&&(z=z.substring(0,z.length-1)),c.lang.includes("en")&&r.lang.includes("de")&&(B.includes("hat")||B.includes("ist"))&&B.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(z=z.split(/,\s+/).map(te=>te.startsWith("to ")?te:`to ${te}`).join(", ")),n(J({_id:y,lang:S,element:B,caption:z})).then(n(je())),a(!1)},F=()=>{o===""&&v("der "),o==="der "&&v("die "),o==="die "&&v("das "),o==="das "&&v("")},L=async T=>{const S=m("element"),z=ce(S,r.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),B={from:r.lang,to:c.lang},he=await pe(z,B,T);l("caption",he)};return s.jsxs(Wt,{onSubmit:$(_),children:[s.jsx(ve,{...u,name:"element",ref:T=>{i(T),d.current=T}}),s.jsxs(Dt,{ref:t,children:[s.jsx(Vt,{type:"button",onClick:F,children:s.jsx(ot,{size:"18px"})}),s.jsx(ue,{type:"button",onClick:()=>L("google"),children:s.jsx(Ke,{size:"16px"})}),s.jsx(ue,{type:"button",onClick:()=>L("deepl"),children:s.jsx(Ue,{size:"18px"})}),s.jsx(Ft,{children:s.jsx(qe,{size:"16px"})})]}),s.jsx(ve,{...x,name:"caption",ref:T=>{h(T),p.current=T}})]})};Ie.propTypes={el:w.object,setIsForm:w.func};const De=({el:e,index:a,length:n,sortByDate:d,setSortByDate:p,translateAll:t,liColor:c,setLiColor:r})=>{const o=V(),{elementTrash:v,activeElement:y}=O(),[b,A]=k.useState(!1),{_id:g,favorite:m,checked:l}=e,$=v.find(C=>C._id===g),f=()=>{o(J({_id:g,favorite:!m}))},i=()=>{o(J({_id:g,checked:!l}))},u=()=>o(Je(e)),h=()=>A(!b),x=g===(y==null?void 0:y._id);return s.jsxs(Tt,{id:x?"active-element":null,licolor:c,children:[s.jsxs(ae,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(Rt,{$hovered:m,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:f}),s.jsx(nt,{size:"20px"})]}),s.jsxs(_t,{$hovered:l,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:i}),s.jsx(Ye,{size:"15px"})]}),b&&n===a+1&&s.jsx(ue,{onClick:t,children:s.jsx(Qe,{size:"16px"})})]}),b&&s.jsx(Ie,{el:e,setIsForm:A}),!b&&s.jsx(We,{el:e,sortByDate:d,setSortByDate:p,setLiColor:r}),s.jsxs(ae,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(Bt,{$hovered:$,onClick:u,children:s.jsx(Ze,{size:"16px"})}),s.jsx(Lt,{onClick:h,children:s.jsx(Xe,{size:"15px"})})]})]})};De.propTypes={el:w.object,index:w.number,length:w.number,sortByDate:w.bool,setSortByDate:w.func,translateAll:w.func,liColor:w.string,setLiColor:w.func};const Nt=j.ul`
  width: 100%;
  list-style: none;
`,{white:Mt}=R.colors,Gt=()=>{const e=V(),{ref:a,inView:n,entry:d}=ft({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:p}=P(),{activeCluster:t}=D(),{allElements:c,elementTrash:r,elementFilter:o,isLoading:v}=O(),[y,b]=k.useState(Mt);let{elementSelect:A}=O();A=A||[];const[g,m]=k.useState(!1);k.useEffect(()=>{t&&e(je({cluster:t._id})).unwrap().then(({result:h})=>{if(!t.activeEl)return;const x=h.elements.find(({_id:C})=>C===t.activeEl);e(we(x))}).then(()=>{const h=document.getElementById("active-element");(()=>{h==null||h.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const l=c.filter(h=>h.cluster===(t==null?void 0:t._id)).sort((h,x)=>h.createdAt.localeCompare(x.createdAt)),f=(()=>{const h=r.map(x=>x._id);return A.includes("trash")?l.filter(x=>h.includes(x._id)):l})().filter(({element:h,caption:x,favorite:C,checked:I})=>{const _=h.toLowerCase().replace("·","").includes(o)||h.toLowerCase().includes(o)||x.toLowerCase().includes(o),F=A.includes("wordlist")?_&&at(h):_,L=()=>A.some(S=>["favorite","unfavorite"].includes(S))?A.includes("favorite")?F&&C===!0:F&&C===!1:F;return(()=>A.some(S=>["checked","unchecked"].includes(S))?A.includes("checked")?L()&&I===!0:L()&&I===!1:L())()}).sort(g?(h,x)=>x.createdAt.localeCompare(h.createdAt):(h,x)=>h.createdAt.localeCompare(x.createdAt)),i=async()=>{const h=p.lang;let x=0;await f.forEach(async C=>{if(x>1)return;const{_id:I,element:_}=C;if(!_.startsWith("[")||h!==C.lang){const F={from:t.lang,to:h},L=await pe(_,F,p.engine);e(J({_id:I,lang:h,caption:L})),x=x+1}})},u=window.innerHeight<(d==null?void 0:d.target.getBoundingClientRect().y)+(d==null?void 0:d.target.getBoundingClientRect().height)*1.5;return s.jsxs(s.Fragment,{children:[s.jsxs(Nt,{children:[f.map((h,x,C)=>s.jsx(De,{el:h,index:x,length:C.length,sortByDate:g,setSortByDate:m,translateAll:i,liColor:y,setLiColor:b},h._id)),s.jsxs("div",{ref:a,children:[s.jsx(Ce,{}),s.jsx(Se,{className:!n||!u?"shown":"hidden"}),s.jsx(Re,{className:!n||!u?"shown":"hidden",filtredElements:f,setLiColor:b})]})]}),v&&s.jsx(et,{})]})},{s:Ae,m:Ht}=R.indents,Xt=()=>s.jsx(ae,{$p:`0 ${Ht} ${Ae} ${Ae}`,children:s.jsx(Gt,{})});export{Xt as default};
