import{T as J,r as S,t as T,P as A,u as R,b as W,q as B,j as t,S as oe,U as P,w as se,D as ce,E as ie,K as N,R as Re,V as Be,Q as _,y as I,W as Le,X as Ie,Y as We,s as w,Z as Fe,_ as Y,$ as De,n as O,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Q,a6 as be,F as re,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-bed2a60a.js";import{r as He,H as Ne,T as Ye}from"./index.esm-2d575bbf.js";import{w as Qe}from"./writeClipboard-3b7378a1.js";import{v as Xe,u as Ze}from"./index.esm-c70d71c6.js";import{a as Je}from"./index.esm-c741d3fd.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt={google:"",deepl:tt},ae=async(e,{from:i,to:l},h)=>{var a,n;J.engine=h,J.key=nt[h];const u=e.replaceAll(" ·",",").replaceAll("·","");let r=await J(`${u}`,{from:i,to:l});try{if(l.includes("en")&&u.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(u.at(u.length-1)))return r;const f=u.split(u.includes(", ")?", ":/\s+/),b=r.split(", ");return f.length===1?r.toLocaleLowerCase():["der","die","das"].includes(f[0].split(" ")[0])?r.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase():l.includes("en")&&((a=f[2])!=null&&a.startsWith("am"))?b[2].startsWith("the")?r:`${b[0]}, ${b[1]}, the ${b[2]}`:(f[0].endsWith("n")&&["hat","ist"].includes((n=f[2])==null?void 0:n.split(" ")[0])&&i.includes("de")&&(r=l.includes("en")?"to "+b[0]:b[0]),r)}catch(p){return p.message}},M=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],G=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var le=new Map,U=new WeakMap,de=0,st=void 0;function rt(e){return e?(U.has(e)||(de+=1,U.set(e,de.toString())),U.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?rt(e.root):e[i]}`).toString()}function ot(e){const i=lt(e);let l=le.get(i);if(!l){const h=new Map;let u;const r=new IntersectionObserver(a=>{a.forEach(n=>{var p;const f=n.isIntersecting&&u.some(b=>n.intersectionRatio>=b);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=f),(p=h.get(n.target))==null||p.forEach(b=>{b(f,n)})})},e);u=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:r,elements:h},le.set(i,l)}return l}function at(e,i,l={},h=st){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const p=e.getBoundingClientRect();return i(h,{isIntersecting:h,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:u,observer:r,elements:a}=ot(l),n=a.get(e)||[];return a.has(e)||a.set(e,n),n.push(i),r.observe(e),function(){n.splice(n.indexOf(i),1),n.length===0&&(a.delete(e),r.unobserve(e)),a.size===0&&(r.disconnect(),le.delete(u))}}function ct({threshold:e,delay:i,trackVisibility:l,rootMargin:h,root:u,triggerOnce:r,skip:a,initialInView:n,fallbackInView:p,onChange:f}={}){var b;const[x,C]=S.useState(null),v=S.useRef(f),[m,o]=S.useState({inView:!!n,entry:void 0});v.current=f,S.useEffect(()=>{if(a||!x)return;let c;return c=at(x,(j,d)=>{o({inView:j,entry:d}),v.current&&v.current(j,d),d.isIntersecting&&r&&c&&(c(),c=void 0)},{root:u,rootMargin:h,threshold:e,trackVisibility:l,delay:i},p),()=>{c&&c()}},[Array.isArray(e)?e.toString():e,x,u,h,r,a,l,p,i]);const y=(b=m.entry)==null?void 0:b.target,$=S.useRef(void 0);!x&&y&&!r&&!a&&$.current!==y&&($.current=y,o({inView:!!n,entry:void 0}));const s=[C,m.inView,m.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}const{backgroundHoverd:K,white:q,borderLight:H}=T.colors,xe=()=>{const e=R(),{user:i}=W(),{activeCluster:l}=B(),h=({value:n})=>{e(se({_id:l._id,lang:n})).unwrap().then(p=>e(ce(p.result.cluster)))},u=({value:n})=>{e(se({_id:l._id,rate:n})).unwrap().then(p=>e(ce(p.result.cluster)))},r=({value:n})=>{const p=new FormData;p.append("lang",n),e(ie(p))},a=({value:n})=>{const p=new FormData;p.append("rate",n),e(ie(p))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(P,{options:M,defaultValue:M.find(n=>n.value===(l==null?void 0:l.lang)),onChange:h,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(n=>n.value==(l==null?void 0:l.rate)),onChange:u,placeholder:"Rate...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:M,defaultValue:M.find(n=>n.value===i.lang),onChange:r,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(n=>n.value==i.rate),onChange:a,placeholder:"Rate...",$ol:K,$b:q,$bh:H})]})};xe.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:it}=T.shadows,ut=()=>{const e=R(),{user:i}=W(),{activeCluster:l}=B();S.useEffect(()=>{const u=async r=>{r.key==="d"&&r.metaKey&&(r.prevent,await h())};return addEventListener("keydown",u),()=>{removeEventListener("keydown",u)}},[]);const h=async u=>{const r=window.getSelection().toString();r&&await Qe(r);const a=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),n={from:l.lang,to:i.lang},p=await ae(a,n,i.engine),{_id:f}=l;try{const b={cluster:f,element:"[]",caption:a},x={cluster:f,element:a,caption:p,favorite:!0,checked:a.split(/\s+/).length<20},C=a.includes("https://")?b:x;e(Be(C)),u.target.blur()}catch(b){u.target.blur(),_.error(`Invalid element, ${b.message}`)}};return t.jsx(N,{onClick:h,$s:"m",$round:!0,$bs:it,children:t.jsx(Re,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=R(),{elementTrash:i}=I(),l=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(i.map(h=>h._id).join("&"))).unwrap().then(()=>e(Ie()))};return t.jsx(N,{onClick:l,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ve=({className:e})=>{const{pathname:i}=We(),{elementTrash:l}=I(),{activeCluster:h}=B(),u=l.length>0?" 1fr":"",r=h?" 1fr":"",a=u+r;if(i.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:a,children:[r&&t.jsx(ut,{}),u&&t.jsx(pt,{})]})};ve.propTypes={className:A.string};const{colors:ee}=T,ft=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${ee.yellow};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${ee.hovered};
    /* stroke: ${({$colored:e})=>e&&ee.yellow}; */
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
`,ye=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(Fe,{size:"35px"})});ye.propTypes={onClick:A.func};const{background:te}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:i,setLiColor:l})=>{const{user:h}=W(),{activeCluster:u}=B(),{activeElement:r}=I(),a=v=>{if(!v.length)return;let m="",o=0;const y=v.reduce(($,s)=>($[s.lang]||($[s.lang]=0),$[s.lang]+=1,$),{});for(const $ in y)y[$]>o&&(o=y[$],m=$);return m},n=i.length?a(i):h.lang,p=(v,m)=>v.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),f=({text:v,playList:m,divider:o})=>{let y="";for(let $=0;$<m.length;$+=1){let s=m[$][v];s.endsWith(".")||s.endsWith("!")||s.endsWith("?")||s.endsWith('"')?y+=p(s,o).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${o}`).replaceAll(".",`.${o}`).replaceAll(",",`,${o}`).replaceAll("!",`!${o}`).replaceAll("?",`?${o}`).replaceAll(": ",`:${o} `).replaceAll(`0.${o}`,"0.").replaceAll(`1.${o}`,"1.").replaceAll(`2.${o}`,"2.").replaceAll(`3.${o}`,"3.").replaceAll(`4.${o}`,"4.").replaceAll(`5.${o}`,"5.").replaceAll(`6.${o}`,"6.").replaceAll(`7.${o}`,"7.").replaceAll(`8.${o}`,"8.").replaceAll(`9.${o}`,"9.").replaceAll(`${o}`,v==="caption"?`@±@${m[$].lang}${o}`:`${o}`):m[$].element.startsWith("[")||(v==="caption"&&(s.includes(" [")&&(s=s.substring(0,s.indexOf(" ["))),s=`${s}@±@${m[$].lang}`),y+=s+o)}return y},b=v=>{l(te);const m="$*@",o=i.findIndex(s=>s.element===r.element),y=i.splice(o===-1?0:o),$=Y({setLiColor:l,divider:m,text:f({text:"element",playList:y,divider:m}),lang:u.lang,rate:u.rate});v.target.blur(),$&&_.error($)},x=v=>{const m="$*@";l(te);const o=i.findIndex(s=>s.element===r.element),y=i.splice(o===-1?0:o),$=Y({setLiColor:l,divider:m,text:f({text:"caption",playList:y,divider:m}),lang:n,rate:h.rate});v.target.blur(),$&&_.error($)},C=v=>{l(te);let m="";const o="$*@",y=i.findIndex(c=>c.element===r.element),$=i.splice(y===-1?0:y);for(let c=0;c<$.length;c+=1){const{element:j,caption:d,lang:g}=$[c];if(!j.startsWith("[")){const k=p(j,""),L=d.includes(" [")?d.substring(0,d.indexOf(" [")):p(d,"");m+=k+`@±@${g}`+L+o}}const s=De({setLiColor:l,divider:o,text:m,lang:u.lang,rate:h.rate});v.target.blur(),s&&_.error(s)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(N,{onClick:b,$s:"m",$round:!0,$bs:pe,children:(u==null?void 0:u.lang.at(0).toUpperCase())+(u==null?void 0:u.lang.substring(1))}),t.jsx(ye,{onClick:C}),t.jsx(N,{onClick:x,$s:"m",$round:!0,$bs:pe,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};Ae.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:E,shadows:he,indents:ne}=T,bt=O`
  margin-bottom: 7px;
  padding-block: ${ne.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${ne.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${ne.s};
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
`,je=O`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Xe}
  }
`,vt=w.label`
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
`,yt=w.label`
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
`,F=O`
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
  ${F}

  opacity: ${({$hovered:e})=>e?1:0};
`,jt=w.button`
  ${F}

  opacity: 0;
`,{colors:X,indents:ke}=T,we=O`
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
  border: 1px solid ${X.accent};
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
    border: 1px solid ${X.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${X.placeholder};
  }
`,Ct=w.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,St=w.button`
  ${F}
`,Tt=w.button`
  ${F}
`,Ee=w.button`
  ${F}
`,_t=w.button`
  ${F}
`,fe=w.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ke.xs};
  color: ${X.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ce=O`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Rt=w.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,Bt=w.audio`
  ${Ce}
`,Se=({el:e,sortByDate:i,setSortByDate:l,setLiColor:h})=>{const u=R(),{user:r}=W(),{activeCluster:a}=B(),{element:n,caption:p}=e,f="$*@",b=(s,c)=>{let j="";return c?(s.trim().endsWith(".")||s.trim().endsWith("!")||s.trim().endsWith("?")||s.endsWith('"')?j=s.trim().replaceAll(", `",`;${c} `).replaceAll(" `",`${c} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${c}`).replaceAll(".",`.${c}`).replaceAll(",",`,${c}`).replaceAll("!",`!${c}`).replaceAll("?",`?${c}`).replaceAll(": ",`:${c} `).replaceAll(`0.${c}`,"0.").replaceAll(`1.${c}`,"1.").replaceAll(`2.${c}`,"2.").replaceAll(`3.${c}`,"3.").replaceAll(`4.${c}`,"4.").replaceAll(`5.${c}`,"5.").replaceAll(`6.${c}`,"6.").replaceAll(`7.${c}`,"7.").replaceAll(`8.${c}`,"8.").replaceAll(`9.${c}`,"9."):j=s.trim()+c,j.includes("[")?j.substring(0,j.indexOf("["))+c:j):s},x=s=>{const c=Y({setLiColor:h,divider:f,text:b(n,f),lang:a.lang,rate:a.rate});s.target.blur(),c&&_.error(c)},C=s=>{const c=Y({setLiColor:h,divider:f,text:b(p,f),lang:e.lang,rate:r.rate});s.target.blur(),c&&_.error(c)},v=s=>{l(!i),i?_.success("Below is Recent"):_.success("Above is Recent"),s.stopPropagation()},m=s=>{const{_id:c}=a;u($e(e)),s.currentTarget.closest("li").id!=="active-element"&&u(se({_id:c,activeEl:e._id}))},o=p.endsWith("mp3"),y=!o&&p.startsWith("http"),$=!o&&!y;return t.jsxs(kt,{onClick:m,children:[t.jsx(fe,{onClick:x,children:n}),t.jsx(Et,{onClick:v}),o&&t.jsx(Bt,{controls:!0,src:ue(p)}),y&&t.jsx(Rt,{src:ue(p)}),$&&t.jsx(fe,{onClick:C,children:p})]})};Se.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Te=({el:e,isForm:i,setIsForm:l})=>{const h=R(),{user:u}=W(),{activeCluster:r}=B(),[a,n]=S.useState(""),{_id:p,element:f,caption:b}=e,x=i+42,{register:C,watch:v,setValue:m,handleSubmit:o,setFocus:y}=Ze({mode:"onBlur",defaultValues:{element:f,caption:b}});S.useEffect(()=>{y("element"),a&&f.trim().startsWith("der")?m("element",a+f.replace("der","").trim()+", "):a&&f.trim().startsWith("die")?m("element",a+f.replace("die","").trim()+", "):a&&f.trim().startsWith("das")?m("element",a+f.replace("das","").trim()+", "):a?m("element",a+f+", "):m("element",a+f)},[a,f,y,m]),S.useEffect(()=>{const j=async d=>{d.key==="+"&&(d.preventDefault(),await c(),o($)()),d.key==="Enter"&&(d.preventDefault(),o($)()),d.key==="Escape"&&l(!1)};return addEventListener("keydown",j),()=>{removeEventListener("keydown",j)}},[]);const $=j=>{const d=u.lang;let g=j.element.split(/\s+/).join(" ").trim(),k=j.caption.trim();g.endsWith(",")&&(g=g.substring(0,g.length-1)),g.includes("·")&&(g=g.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),h(Q({_id:p,lang:d,element:g,caption:k})).then(h(be())),l(!1)},s=()=>{a===""&&n("der "),a==="der "&&n("die "),a==="die "&&n("das "),a==="das "&&n("")},c=async()=>{const j=v("element"),d={from:r.lang,to:u.lang},g=await ae(j,d,u.engine);m("caption",g)};return t.jsxs(wt,{onSubmit:o($),children:[t.jsx(me,{...C("element"),style:{height:x}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>l(x),children:t.jsx(ze,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:s,children:t.jsx(Je,{size:"18px"})}),t.jsx(Ee,{type:"button",onClick:c,children:t.jsx(Ve,{size:"16px"})}),t.jsx(St,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...C("caption"),style:{height:x}})]})};Te.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const _e=({el:e,index:i,length:l,sortByDate:h,setSortByDate:u,translateAll:r,liColor:a,setLiColor:n})=>{const p=R(),{elementTrash:f,activeElement:b}=I(),[x,C]=S.useState(!1),{_id:v,favorite:m,checked:o}=e,y=f.find(g=>g._id===v),$=()=>{p(Q({_id:v,favorite:!m}))},s=()=>{p(Q({_id:v,checked:!o}))},c=()=>p(Ke(e)),j=g=>{if(x)C(!1);else{const k=g.target.closest("div").clientHeight;C(k)}},d=v===(b==null?void 0:b._id);return t.jsxs(xt,{id:d?"active-element":null,licolor:a,children:[t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(vt,{$hovered:m,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:$}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(yt,{$hovered:o,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:o,onChange:s}),t.jsx(Pe,{size:"15px"})]}),x&&l===i+1&&t.jsx(Ee,{onClick:r,children:t.jsx(Me,{size:"16px"})})]}),x&&t.jsx(Te,{el:e,isForm:x,setIsForm:C}),!x&&t.jsx(Se,{el:e,sortByDate:h,setSortByDate:u,setLiColor:n}),t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:y,onClick:c,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:j,children:t.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Lt=w.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=R(),{ref:i,inView:l,entry:h}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:u}=W(),{activeCluster:r}=B(),{allElements:a,elementTrash:n,elementFilter:p}=I(),[f,b]=S.useState(It);let{elementSelect:x}=I();x=x||[];const[C,v]=S.useState(!1),[m,o]=S.useState(!0);S.useEffect(()=>{r&&e(be({cluster:r._id})).unwrap().then(({result:d})=>{if(!r.activeEl)return;const g=d.elements.find(({_id:k})=>k===r.activeEl);e($e(g))}).then(()=>{const d=document.getElementById("active-element");(()=>{d==null||d.scrollIntoView({block:"center",behavior:"smooth"})})(),o(!1)})},[]);const y=a.filter(d=>d.cluster===(r==null?void 0:r._id)).sort((d,g)=>d.createdAt.localeCompare(g.createdAt)),s=(()=>{const d=n.map(g=>g._id);return x.includes("trash")?y.filter(g=>d.includes(g._id)):y})().filter(({element:d,caption:g,favorite:k,checked:L})=>{const D=d.toLowerCase().replace("·","").includes(p)||d.toLowerCase().includes(p)||g.toLowerCase().includes(p),z=x.includes("wordlist")?D&&et(d):D,V=()=>x.some(Z=>["favorite","unfavorite"].includes(Z))?x.includes("favorite")?z&&k===!0:z&&k===!1:z;return(()=>x.some(Z=>["checked","unchecked"].includes(Z))?x.includes("checked")?V()&&L===!0:V()&&L===!1:V())()}).sort(C?(d,g)=>g.createdAt.localeCompare(d.createdAt):(d,g)=>d.createdAt.localeCompare(g.createdAt)),c=async()=>{const d=u.lang;let g=0;await s.forEach(async k=>{if(g>1)return;const{_id:L,element:D}=k;if(!D.startsWith("[")||d!==k.lang){const z={from:r.lang,to:d},V=await ae(D,z,u.engine);e(Q({_id:L,lang:d,caption:V})),g=g+1}})},j=window.innerHeight<(h==null?void 0:h.target.getBoundingClientRect().y)+(h==null?void 0:h.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[s.map((d,g,k)=>t.jsx(_e,{el:d,index:g,length:k.length,sortByDate:C,setSortByDate:v,translateAll:c,liColor:f,setLiColor:b},d._id)),t.jsxs("div",{ref:i,children:[t.jsx(xe,{}),t.jsx(ve,{className:!l||!j?"shown":"hidden"}),t.jsx(Ae,{className:!l||!j?"shown":"hidden",filtredElements:s,setLiColor:b})]})]}),m&&t.jsx(qe,{})]})},{s:ge,m:Ft}=T.indents,Gt=()=>t.jsx(re,{$p:`0 ${Ft} ${ge} ${ge}`,children:t.jsx(Wt,{})});export{Gt as default};
