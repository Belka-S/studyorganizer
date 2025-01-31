import{T as Z,r as S,t as T,P as A,u as B,b as W,q as L,j as t,S as oe,U as V,w as ne,D as ce,E as ie,K as q,R as _e,V as Re,Q as _,y as I,W as Be,X as Le,Y as Ie,s as w,Z as We,_ as N,$ as De,n as O,a0 as ue,a1 as $e,a2 as Fe,a3 as ze,a4 as Oe,a5 as Ve,a6 as Y,a7 as be,F as se,C as Pe,a8 as Me,A as Ge,z as Ke,a9 as Ue,aa as He}from"./index-5e9dbd37.js";import{r as qe,H as Ne,T as Ye}from"./index-65c5e0f2.js";import{w as Qe}from"./writeClipboard-6c28ed0d.js";import{v as Xe,u as Ze}from"./index.esm-11e65cfa.js";import{a as Je}from"./index-12edbf07.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt={google:"",deepl:tt},ae=async(e,{from:u,to:i},f)=>{var o,n;Z.engine=f,Z.key=nt[f];const p=e.replaceAll(" ·",",").replaceAll("·","");let s=await Z(`${p}`,{from:u,to:i});try{if(i.includes("en")&&p.toLowerCase().includes("uhr")&&(s=s.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(p.at(p.length-1)))return s;const $=p.split(p.includes(", ")?", ":/\s+/),y=s.split(", ");return $.length===1?s.toLocaleLowerCase():["der","die","das"].includes($[0].split(" ")[0])?s.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase():i.includes("en")&&((o=$[2])!=null&&o.startsWith("am"))?y[2].startsWith("the")?s:`${y[0]}, ${y[1]}, the ${y[2]}`:($[0].endsWith("n")&&["hat","ist"].includes((n=$[2])==null?void 0:n.split(" ")[0])&&u.includes("de")&&(s=i.includes("en")?"to "+y[0]:y[0]),s)}catch(d){return d.message}},P=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],M=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var re=new Map,G=new WeakMap,de=0,st=void 0;function rt(e){return e?(G.has(e)||(de+=1,G.set(e,de.toString())),G.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(u=>e[u]!==void 0).map(u=>`${u}_${u==="root"?rt(e.root):e[u]}`).toString()}function ot(e){const u=lt(e);let i=re.get(u);if(!i){const f=new Map;let p;const s=new IntersectionObserver(o=>{o.forEach(n=>{var d;const $=n.isIntersecting&&p.some(y=>n.intersectionRatio>=y);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=$),(d=f.get(n.target))==null||d.forEach(y=>{y($,n)})})},e);p=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:u,observer:s,elements:f},re.set(u,i)}return i}function at(e,u,i={},f=st){if(typeof window.IntersectionObserver>"u"&&f!==void 0){const d=e.getBoundingClientRect();return u(f,{isIntersecting:f,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:p,observer:s,elements:o}=ot(i),n=o.get(e)||[];return o.has(e)||o.set(e,n),n.push(u),s.observe(e),function(){n.splice(n.indexOf(u),1),n.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),re.delete(p))}}function ct({threshold:e,delay:u,trackVisibility:i,rootMargin:f,root:p,triggerOnce:s,skip:o,initialInView:n,fallbackInView:d,onChange:$}={}){var y;const[k,j]=S.useState(null),b=S.useRef($),[h,r]=S.useState({inView:!!n,entry:void 0});b.current=$,S.useEffect(()=>{if(o||!k)return;let a;return a=at(k,(c,m)=>{r({inView:c,entry:m}),b.current&&b.current(c,m),m.isIntersecting&&s&&a&&(a(),a=void 0)},{root:p,rootMargin:f,threshold:e,trackVisibility:i,delay:u},d),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,k,p,f,s,o,i,d,u]);const x=(y=h.entry)==null?void 0:y.target,g=S.useRef(void 0);!k&&x&&!s&&!o&&g.current!==x&&(g.current=x,r({inView:!!n,entry:void 0}));const l=[j,h.inView,h.entry];return l.ref=l[0],l.inView=l[1],l.entry=l[2],l}const{backgroundHoverd:K,white:U,borderLight:H}=T.colors,xe=()=>{const e=B(),{user:u}=W(),{activeCluster:i}=L(),f=({value:n})=>{e(ne({_id:i._id,lang:n})).unwrap().then(d=>e(ce(d.result.cluster)))},p=({value:n})=>{e(ne({_id:i._id,rate:n})).unwrap().then(d=>e(ce(d.result.cluster)))},s=({value:n})=>{const d=new FormData;d.append("lang",n),e(ie(d))},o=({value:n})=>{const d=new FormData;d.append("rate",n),e(ie(d))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(V,{options:P,defaultValue:P.find(n=>n.value===(i==null?void 0:i.lang)),onChange:f,placeholder:"Language...",$ol:K,$b:U,$bh:H}),t.jsx(V,{options:M,defaultValue:M.find(n=>n.value==(i==null?void 0:i.rate)),onChange:p,placeholder:"Rate...",$ol:K,$b:U,$bh:H}),t.jsx(V,{options:P,defaultValue:P.find(n=>n.value===u.lang),onChange:s,placeholder:"Language...",$ol:K,$b:U,$bh:H}),t.jsx(V,{options:M,defaultValue:M.find(n=>n.value==u.rate),onChange:o,placeholder:"Rate...",$ol:K,$b:U,$bh:H})]})};xe.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:it}=T.shadows,ut=()=>{const e=B(),{user:u}=W(),{activeCluster:i}=L();S.useEffect(()=>{const s=async o=>{o.key==="d"&&o.metaKey&&(o.prevent,await p())};return addEventListener("keydown",s),()=>{removeEventListener("keydown",s)}},[]);const f=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},p=async s=>{var k,j;const o=window.getSelection().toString();o&&await Qe(o);const n=(await qe()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),d={from:i.lang,to:u.lang},$=await ae(n,d,u.engine),{_id:y}=i;try{const b={cluster:y,element:"[]",caption:n},h={cluster:y,element:n,caption:$,favorite:!0,checked:n.split(/\s+/).length<20},r=n.includes("https://")?b:h;e(Re(r)),(k=s==null?void 0:s.target)==null||k.blur()}catch(b){(j=s==null?void 0:s.target)==null||j.blur(),_.error(`Invalid element, ${b.message}`)}};return t.jsx(q,{onClick:async()=>{await p(),f()},$s:"m",$round:!0,$bs:it,children:t.jsx(_e,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=B(),{elementTrash:u}=I(),i=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Be(u.map(f=>f._id).join("&"))).unwrap().then(()=>e(Le()))};return t.jsx(q,{onClick:i,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ye=({className:e})=>{const{pathname:u}=Ie(),{elementTrash:i}=I(),{activeCluster:f}=L(),p=i.length>0?" 1fr":"",s=f?" 1fr":"",o=p+s;if(u.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:o,children:[s&&t.jsx(ut,{}),p&&t.jsx(pt,{})]})};ye.propTypes={className:A.string};const{colors:J}=T,ft=w.div`
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
`,ve=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(We,{size:"35px"})});ve.propTypes={onClick:A.func};const{background:ee}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:u,setLiColor:i})=>{const{user:f}=W(),{activeCluster:p}=L(),{activeElement:s}=I(),o=b=>{if(!b.length)return;let h="",r=0;const x=b.reduce((g,l)=>(g[l.lang]||(g[l.lang]=0),g[l.lang]+=1,g),{});for(const g in x)x[g]>r&&(r=x[g],h=g);return h},n=u.length?o(u):f.lang,d=(b,h)=>b.replaceAll(", `",`;${h} `).replaceAll(" `",`${h} `).replaceAll(",`",";"),$=({text:b,playList:h,divider:r})=>{let x="";for(let g=0;g<h.length;g+=1){let l=h[g][b];l.endsWith(".")||l.endsWith("!")||l.endsWith("?")||l.endsWith('"')?(x+=d(l,r).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${r}`).replaceAll(".",`.${r}`).replaceAll(",",`,${r}`).replaceAll("!",`!${r}`).replaceAll("?",`?${r}`).replaceAll(": ",`:${r} `),p.lang.includes("de")&&(x=x.replaceAll(`0.${r}`,"0.").replaceAll(`1.${r}`,"1.").replaceAll(`2.${r}`,"2.").replaceAll(`3.${r}`,"3.").replaceAll(`4.${r}`,"4.").replaceAll(`5.${r}`,"5.").replaceAll(`6.${r}`,"6.").replaceAll(`7.${r}`,"7.").replaceAll(`8.${r}`,"8.").replaceAll(`9.${r}`,"9.")),x=x.replaceAll(`${r}`,b==="caption"?`@±@${h[g].lang}${r}`:`${r}`)):h[g].element.startsWith("[")||(b==="caption"&&(l.includes(" [")&&(l=l.substring(0,l.indexOf(" ["))),l=`${l}@±@${h[g].lang}`),x+=l+r)}return x},y=b=>{i(ee);const h="$*@",r=u.findIndex(l=>l.element===s.element),x=u.splice(r===-1?0:r),g=N({setLiColor:i,divider:h,text:$({text:"element",playList:x,divider:h}),lang:p.lang,rate:p.rate});b.target.blur(),g&&_.error(g)},k=b=>{const h="$*@";i(ee);const r=u.findIndex(l=>l.element===s.element),x=u.splice(r===-1?0:r),g=N({setLiColor:i,divider:h,text:$({text:"caption",playList:x,divider:h}),lang:n,rate:f.rate});b.target.blur(),g&&_.error(g)},j=b=>{i(ee);let h="";const r="$*@",x=u.findIndex(a=>a.element===s.element),g=u.splice(x===-1?0:x);for(let a=0;a<g.length;a+=1){const{element:c,caption:m,lang:v}=g[a];if(!c.startsWith("[")){const C=d(c,""),R=m.includes(" [")?m.substring(0,m.indexOf(" [")):d(m,"");h+=C+`@±@${v}`+R+r}}const l=De({setLiColor:i,divider:r,text:h,lang:p.lang,rate:f.rate});b.target.blur(),l&&_.error(l)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(q,{onClick:y,$s:"m",$round:!0,$bs:pe,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),t.jsx(ve,{onClick:j}),t.jsx(q,{onClick:k,$s:"m",$round:!0,$bs:pe,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};Ae.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:E,shadows:he,indents:te}=T,bt=O`
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
`,D=O`
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
`,{colors:Q,indents:ke}=T,we=O`
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
`,Ee=O`
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
`,Ce=({el:e,sortByDate:u,setSortByDate:i,setLiColor:f})=>{const p=B(),{user:s}=W(),{activeCluster:o}=L(),{element:n,caption:d}=e,$="$*@",y=(l,a)=>{let c="";return a?(l.trim().endsWith(".")||l.trim().endsWith("!")||l.trim().endsWith("?")||l.endsWith('"')?(c=l.trim().replaceAll(", `",`;${a} `).replaceAll(" `",`${a} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `),o.lang.includes("de")&&(c=c.replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9."))):c=l.trim()+a,c.includes("[")?c.substring(0,c.indexOf("["))+a:c):l},k=l=>{const a=N({setLiColor:f,divider:$,text:y(n,$),lang:o.lang,rate:o.rate});l.target.blur(),a&&_.error(a)},j=l=>{const a=N({setLiColor:f,divider:$,text:y(d,$),lang:e.lang,rate:s.rate});l.target.blur(),a&&_.error(a)},b=l=>{i(!u),u?_.success("Below is Recent"):_.success("Above is Recent"),l.stopPropagation()},h=l=>{const{_id:a}=o;p($e(e)),l.currentTarget.closest("li").id!=="active-element"&&p(ne({_id:a,activeEl:e._id}))},r=d.endsWith("mp3"),x=!r&&d.startsWith("http"),g=!r&&!x;return t.jsxs(kt,{onClick:h,children:[t.jsx(fe,{onClick:k,children:n}),t.jsx(Et,{onClick:b}),r&&t.jsx(Bt,{controls:!0,src:ue(d)}),x&&t.jsx(Rt,{src:ue(d)}),g&&t.jsx(fe,{onClick:j,children:d})]})};Ce.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Se=({el:e,isForm:u,setIsForm:i})=>{const f=B(),{user:p}=W(),{activeCluster:s}=L(),[o,n]=S.useState(""),{_id:d,element:$,caption:y}=e,k=u+42,{register:j,watch:b,setValue:h,handleSubmit:r,setFocus:x}=Ze({mode:"onBlur",defaultValues:{element:$,caption:y}});S.useEffect(()=>{x("element"),o&&$.trim().startsWith("der")?h("element",o+$.replace("der","").trim()+", "):o&&$.trim().startsWith("die")?h("element",o+$.replace("die","").trim()+", "):o&&$.trim().startsWith("das")?h("element",o+$.replace("das","").trim()+", "):o?h("element",o+$+", "):h("element",o+$)},[o,$,x,h]),S.useEffect(()=>{const c=async m=>{m.ctrlKey&&m.key==="Escape"&&(m.preventDefault(),await a(p.engine),r(g)()),m.key==="Enter"&&(m.preventDefault(),r(g)()),m.key==="Escape"&&i(!1)};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[]);const g=c=>{const m=p.lang;let v=c.element.split(/\s+/).join(" ").trim(),C=c.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes("·")&&(v=v.replaceAll(" ·",",").replaceAll("· ",", ")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),f(Y({_id:d,lang:m,element:v,caption:C})).then(f(be())),i(!1)},l=()=>{o===""&&n("der "),o==="der "&&n("die "),o==="die "&&n("das "),o==="das "&&n("")},a=async c=>{const m=b("element"),v={from:s.lang,to:p.lang},C=await ae(m,v,c);h("caption",C)};return t.jsxs(wt,{onSubmit:r(g),children:[t.jsx(me,{...j("element"),style:{height:k}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>i(k),children:t.jsx(Fe,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:l,children:t.jsx(Je,{size:"18px"})}),t.jsx(le,{type:"button",onClick:()=>a("google"),children:t.jsx(ze,{size:"16px"})}),t.jsx(le,{type:"button",onClick:()=>a("deepl"),children:t.jsx(Oe,{size:"18px"})}),t.jsx(St,{children:t.jsx(Ve,{size:"16px"})})]}),t.jsx(me,{...j("caption"),style:{height:k}})]})};Se.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const Te=({el:e,index:u,length:i,sortByDate:f,setSortByDate:p,translateAll:s,liColor:o,setLiColor:n})=>{const d=B(),{elementTrash:$,activeElement:y}=I(),[k,j]=S.useState(!1),{_id:b,favorite:h,checked:r}=e,x=$.find(v=>v._id===b),g=()=>{d(Y({_id:b,favorite:!h}))},l=()=>{d(Y({_id:b,checked:!r}))},a=()=>d(Ue(e)),c=v=>{if(k)j(!1);else{const C=v.target.closest("div").clientHeight;j(C)}},m=b===(y==null?void 0:y._id);return t.jsxs(xt,{id:m?"active-element":null,licolor:o,children:[t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(yt,{$hovered:h,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:h,onChange:g}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(vt,{$hovered:r,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:r,onChange:l}),t.jsx(Pe,{size:"15px"})]}),k&&i===u+1&&t.jsx(le,{onClick:s,children:t.jsx(Me,{size:"16px"})})]}),k&&t.jsx(Se,{el:e,isForm:k,setIsForm:j}),!k&&t.jsx(Ce,{el:e,sortByDate:f,setSortByDate:p,setLiColor:n}),t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:x,onClick:a,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:c,children:t.jsx(Ke,{size:"15px"})})]})]})};Te.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Lt=w.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=B(),{ref:u,inView:i,entry:f}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:p}=W(),{activeCluster:s}=L(),{allElements:o,elementTrash:n,elementFilter:d,isLoading:$}=I(),[y,k]=S.useState(It);let{elementSelect:j}=I();j=j||[];const[b,h]=S.useState(!1);S.useEffect(()=>{s&&e(be({cluster:s._id})).unwrap().then(({result:c})=>{if(!s.activeEl)return;const m=c.elements.find(({_id:v})=>v===s.activeEl);e($e(m))}).then(()=>{const c=document.getElementById("active-element");(()=>{c==null||c.scrollIntoView({block:"center",behavior:"smooth"})})()})},[]);const r=o.filter(c=>c.cluster===(s==null?void 0:s._id)).sort((c,m)=>c.createdAt.localeCompare(m.createdAt)),g=(()=>{const c=n.map(m=>m._id);return j.includes("trash")?r.filter(m=>c.includes(m._id)):r})().filter(({element:c,caption:m,favorite:v,checked:C})=>{const R=c.toLowerCase().replace("·","").includes(d)||c.toLowerCase().includes(d)||m.toLowerCase().includes(d),F=j.includes("wordlist")?R&&et(c):R,z=()=>j.some(X=>["favorite","unfavorite"].includes(X))?j.includes("favorite")?F&&v===!0:F&&v===!1:F;return(()=>j.some(X=>["checked","unchecked"].includes(X))?j.includes("checked")?z()&&C===!0:z()&&C===!1:z())()}).sort(b?(c,m)=>m.createdAt.localeCompare(c.createdAt):(c,m)=>c.createdAt.localeCompare(m.createdAt)),l=async()=>{const c=p.lang;let m=0;await g.forEach(async v=>{if(m>1)return;const{_id:C,element:R}=v;if(!R.startsWith("[")||c!==v.lang){const F={from:s.lang,to:c},z=await ae(R,F,p.engine);e(Y({_id:C,lang:c,caption:z})),m=m+1}})},a=window.innerHeight<(f==null?void 0:f.target.getBoundingClientRect().y)+(f==null?void 0:f.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[g.map((c,m,v)=>t.jsx(Te,{el:c,index:m,length:v.length,sortByDate:b,setSortByDate:h,translateAll:l,liColor:y,setLiColor:k},c._id)),t.jsxs("div",{ref:u,children:[t.jsx(xe,{}),t.jsx(ye,{className:!i||!a?"shown":"hidden"}),t.jsx(Ae,{className:!i||!a?"shown":"hidden",filtredElements:g,setLiColor:k})]})]}),$&&t.jsx(He,{})]})},{s:ge,m:Dt}=T.indents,Gt=()=>t.jsx(se,{$p:`0 ${Dt} ${ge} ${ge}`,children:t.jsx(Wt,{})});export{Gt as default};
