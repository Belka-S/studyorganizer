import{T as J,r as S,t as T,P as y,u as B,b as W,q as R,j as t,S as oe,U as P,w as ne,D as ce,E as ie,K as N,R as Be,V as Re,Q as _,y as I,W as Le,X as Ie,Y as We,s as w,Z as Fe,_ as Y,$ as De,n as O,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Q,a6 as be,F as re,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-e08a76c2.js";import{r as He,H as Ne,T as Ye}from"./index.esm-fdf32a22.js";import{w as Qe}from"./writeClipboard-f5b68204.js";import{v as Xe,u as Ze}from"./index.esm-421c501a.js";import{a as Je}from"./index.esm-e9348fc1.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},st={google:"",deepl:tt},ae=async(e,{from:i,to:l},m)=>{J.engine=m,J.key=st[m];const u=e.replaceAll("·",""),h=[".","!","?"].includes(u.at(u.length-1)),a=u.split(/\s+/),n=u.split(", ");let s=await J(`${u}`,{from:i,to:l});try{if(l.includes("en")&&u.toLowerCase().includes("uhr")&&(s=s.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),h)return s;if(a.length===1&&(s=s.toLocaleLowerCase()),["der","die","das"].includes(a[0])&&(s=s.replaceAll("The ","").replaceAll("the ","").split(", ")[0].toLocaleLowerCase()),n[0].endsWith("en")&&i.includes("de")){const p=s.split(", ");s=l.includes("en")?"to "+s:p[0],l.includes("en")&&["hat","ist"].includes(n[2].split(" ")[0])&&(s=p[2].startsWith("has")?s:`${p[0]}, ${p[1]}, has ${p[2]}`)}if(l.includes("en")&&n[2].split(" ")[0]==="am"){const p=s.split(", ");s=p[2].startsWith("the")?s:`${p[0]}, ${p[1]}, the ${p[2]}`}return s}catch(p){return p.message}},M=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],G=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var le=new Map,U=new WeakMap,de=0,nt=void 0;function rt(e){return e?(U.has(e)||(de+=1,U.set(e,de.toString())),U.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?rt(e.root):e[i]}`).toString()}function ot(e){const i=lt(e);let l=le.get(i);if(!l){const m=new Map;let u;const h=new IntersectionObserver(a=>{a.forEach(n=>{var s;const p=n.isIntersecting&&u.some(j=>n.intersectionRatio>=j);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=p),(s=m.get(n.target))==null||s.forEach(j=>{j(p,n)})})},e);u=h.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:h,elements:m},le.set(i,l)}return l}function at(e,i,l={},m=nt){if(typeof window.IntersectionObserver>"u"&&m!==void 0){const s=e.getBoundingClientRect();return i(m,{isIntersecting:m,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:u,observer:h,elements:a}=ot(l),n=a.get(e)||[];return a.has(e)||a.set(e,n),n.push(i),h.observe(e),function(){n.splice(n.indexOf(i),1),n.length===0&&(a.delete(e),h.unobserve(e)),a.size===0&&(h.disconnect(),le.delete(u))}}function ct({threshold:e,delay:i,trackVisibility:l,rootMargin:m,root:u,triggerOnce:h,skip:a,initialInView:n,fallbackInView:s,onChange:p}={}){var j;const[b,C]=S.useState(null),x=S.useRef(p),[f,o]=S.useState({inView:!!n,entry:void 0});x.current=p,S.useEffect(()=>{if(a||!b)return;let c;return c=at(b,(A,d)=>{o({inView:A,entry:d}),x.current&&x.current(A,d),d.isIntersecting&&h&&c&&(c(),c=void 0)},{root:u,rootMargin:m,threshold:e,trackVisibility:l,delay:i},s),()=>{c&&c()}},[Array.isArray(e)?e.toString():e,b,u,m,h,a,l,s,i]);const v=(j=f.entry)==null?void 0:j.target,$=S.useRef(void 0);!b&&v&&!h&&!a&&$.current!==v&&($.current=v,o({inView:!!n,entry:void 0}));const r=[C,f.inView,f.entry];return r.ref=r[0],r.inView=r[1],r.entry=r[2],r}const{backgroundHoverd:K,white:q,borderLight:H}=T.colors,xe=()=>{const e=B(),{user:i}=W(),{activeCluster:l}=R(),m=({value:n})=>{e(ne({_id:l._id,lang:n})).unwrap().then(s=>e(ce(s.result.cluster)))},u=({value:n})=>{e(ne({_id:l._id,rate:n})).unwrap().then(s=>e(ce(s.result.cluster)))},h=({value:n})=>{const s=new FormData;s.append("lang",n),e(ie(s))},a=({value:n})=>{const s=new FormData;s.append("rate",n),e(ie(s))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(P,{options:M,defaultValue:M.find(n=>n.value===(l==null?void 0:l.lang)),onChange:m,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(n=>n.value==(l==null?void 0:l.rate)),onChange:u,placeholder:"Rate...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:M,defaultValue:M.find(n=>n.value===i.lang),onChange:h,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(n=>n.value==i.rate),onChange:a,placeholder:"Rate...",$ol:K,$b:q,$bh:H})]})};xe.propTypes={filtredElements:y.array,setLiColor:y.func};const{button:it}=T.shadows,ut=()=>{const e=B(),{user:i}=W(),{activeCluster:l}=R();S.useEffect(()=>{const u=async h=>{h.key==="d"&&h.metaKey&&(h.prevent,await m())};return addEventListener("keydown",u),()=>{removeEventListener("keydown",u)}},[]);const m=async u=>{const h=window.getSelection().toString();h&&await Qe(h);const a=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),n={from:l.lang,to:i.lang},s=await ae(a,n,i.engine),{_id:p}=l;try{const j={cluster:p,element:"[]",caption:a},b={cluster:p,element:a,caption:s,favorite:!0,checked:a.split(/\s+/).length<20},C=a.includes("https://")?j:b;e(Re(C)),u.target.blur()}catch(j){u.target.blur(),_.error(`Invalid element, ${j.message}`)}};return t.jsx(N,{onClick:m,$s:"m",$round:!0,$bs:it,children:t.jsx(Be,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=B(),{elementTrash:i}=I(),l=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(i.map(m=>m._id).join("&"))).unwrap().then(()=>e(Ie()))};return t.jsx(N,{onClick:l,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ve=({className:e})=>{const{pathname:i}=We(),{elementTrash:l}=I(),{activeCluster:m}=R(),u=l.length>0?" 1fr":"",h=m?" 1fr":"",a=u+h;if(i.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:a,children:[h&&t.jsx(ut,{}),u&&t.jsx(pt,{})]})};ve.propTypes={className:y.string};const{colors:ee}=T,ft=w.div`
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
`,ye=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(Fe,{size:"35px"})});ye.propTypes={onClick:y.func};const{background:te}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:i,setLiColor:l})=>{const{user:m}=W(),{activeCluster:u}=R(),{activeElement:h}=I(),a=x=>{if(!x.length)return;let f="",o=0;const v=x.reduce(($,r)=>($[r.lang]||($[r.lang]=0),$[r.lang]+=1,$),{});for(const $ in v)v[$]>o&&(o=v[$],f=$);return f},n=i.length?a(i):m.lang,s=(x,f)=>x.replaceAll(", `",`;${f} `).replaceAll(" `",`${f} `).replaceAll(",`",";"),p=({text:x,playList:f,divider:o})=>{let v="";for(let $=0;$<f.length;$+=1){let r=f[$][x];r.endsWith(".")||r.endsWith("!")||r.endsWith("?")||r.endsWith('"')?v+=s(r,o).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${o}`).replaceAll(".",`.${o}`).replaceAll(",",`,${o}`).replaceAll("!",`!${o}`).replaceAll("?",`?${o}`).replaceAll(": ",`:${o} `).replaceAll(`0.${o}`,"0.").replaceAll(`1.${o}`,"1.").replaceAll(`2.${o}`,"2.").replaceAll(`3.${o}`,"3.").replaceAll(`4.${o}`,"4.").replaceAll(`5.${o}`,"5.").replaceAll(`6.${o}`,"6.").replaceAll(`7.${o}`,"7.").replaceAll(`8.${o}`,"8.").replaceAll(`9.${o}`,"9.").replaceAll(`${o}`,x==="caption"?`@±@${f[$].lang}${o}`:`${o}`):f[$].element.startsWith("[")||(x==="caption"&&(r.includes(" [")&&(r=r.substring(0,r.indexOf(" ["))),r=`${r}@±@${f[$].lang}`),v+=r+o)}return v},j=x=>{l(te);const f="$*@",o=i.findIndex(r=>r.element===h.element),v=i.splice(o===-1?0:o),$=Y({setLiColor:l,divider:f,text:p({text:"element",playList:v,divider:f}),lang:u.lang,rate:u.rate});x.target.blur(),$&&_.error($)},b=x=>{const f="$*@";l(te);const o=i.findIndex(r=>r.element===h.element),v=i.splice(o===-1?0:o),$=Y({setLiColor:l,divider:f,text:p({text:"caption",playList:v,divider:f}),lang:n,rate:m.rate});x.target.blur(),$&&_.error($)},C=x=>{l(te);let f="";const o="$*@",v=i.findIndex(c=>c.element===h.element),$=i.splice(v===-1?0:v);for(let c=0;c<$.length;c+=1){const{element:A,caption:d,lang:g}=$[c];if(!A.startsWith("[")){const k=s(A,""),L=d.includes(" [")?d.substring(0,d.indexOf(" [")):s(d,"");f+=k+`@±@${g}`+L+o}}const r=De({setLiColor:l,divider:o,text:f,lang:u.lang,rate:m.rate});x.target.blur(),r&&_.error(r)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(N,{onClick:j,$s:"m",$round:!0,$bs:pe,children:(u==null?void 0:u.lang.at(0).toUpperCase())+(u==null?void 0:u.lang.substring(1))}),t.jsx(ye,{onClick:C}),t.jsx(N,{onClick:b,$s:"m",$round:!0,$bs:pe,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};Ae.propTypes={className:y.string,filtredElements:y.array,setLiColor:y.func};const{colors:E,shadows:he,indents:se}=T,bt=O`
  margin-bottom: 7px;
  padding-block: ${se.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${se.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${se.s};
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
`,Bt=w.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,Rt=w.audio`
  ${Ce}
`,Se=({el:e,sortByDate:i,setSortByDate:l,setLiColor:m})=>{const u=B(),{user:h}=W(),{activeCluster:a}=R(),{element:n,caption:s}=e,p="$*@",j=(r,c)=>{let A="";return c?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?A=r.trim().replaceAll(", `",`;${c} `).replaceAll(" `",`${c} `).replaceAll(",`",";").replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${c}`).replaceAll(".",`.${c}`).replaceAll(",",`,${c}`).replaceAll("!",`!${c}`).replaceAll("?",`?${c}`).replaceAll(": ",`:${c} `).replaceAll(`0.${c}`,"0.").replaceAll(`1.${c}`,"1.").replaceAll(`2.${c}`,"2.").replaceAll(`3.${c}`,"3.").replaceAll(`4.${c}`,"4.").replaceAll(`5.${c}`,"5.").replaceAll(`6.${c}`,"6.").replaceAll(`7.${c}`,"7.").replaceAll(`8.${c}`,"8.").replaceAll(`9.${c}`,"9."):A=r.trim()+c,A.includes("[")?A.substring(0,A.indexOf("["))+c:A):r},b=r=>{const c=Y({setLiColor:m,divider:p,text:j(n,p),lang:a.lang,rate:a.rate});r.target.blur(),c&&_.error(c)},C=r=>{const c=Y({setLiColor:m,divider:p,text:j(s,p),lang:e.lang,rate:h.rate});r.target.blur(),c&&_.error(c)},x=r=>{l(!i),i?_.success("Below is Recent"):_.success("Above is Recent"),r.stopPropagation()},f=r=>{const{_id:c}=a;u($e(e)),r.currentTarget.closest("li").id!=="active-element"&&u(ne({_id:c,activeEl:e._id}))},o=s.endsWith("mp3"),v=!o&&s.startsWith("http"),$=!o&&!v;return t.jsxs(kt,{onClick:f,children:[t.jsx(fe,{onClick:b,children:n}),t.jsx(Et,{onClick:x}),o&&t.jsx(Rt,{controls:!0,src:ue(s)}),v&&t.jsx(Bt,{src:ue(s)}),$&&t.jsx(fe,{onClick:C,children:s})]})};Se.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func,$active:y.bool,$hovered:y.bool,setLiColor:y.func};const Te=({el:e,isForm:i,setIsForm:l})=>{const m=B(),{user:u}=W(),{activeCluster:h}=R(),[a,n]=S.useState(""),{_id:s,element:p,caption:j}=e,b=i+42,{register:C,watch:x,setValue:f,handleSubmit:o,setFocus:v}=Ze({mode:"onBlur",defaultValues:{element:p,caption:j}});S.useEffect(()=>{v("element"),a&&p.trim().startsWith("der")?f("element",a+p.replace("der","").trim()+", "):a&&p.trim().startsWith("die")?f("element",a+p.replace("die","").trim()+", "):a&&p.trim().startsWith("das")?f("element",a+p.replace("das","").trim()+", "):a?f("element",a+p+", "):f("element",a+p)},[a,p,v,f]),S.useEffect(()=>{const A=async d=>{d.key==="+"&&(d.preventDefault(),await c(),o($)()),d.key==="Enter"&&(d.preventDefault(),o($)()),d.key==="Escape"&&l(!1)};return addEventListener("keydown",A),()=>{removeEventListener("keydown",A)}},[]);const $=A=>{const d=u.lang;let g=A.element.split(/\s+/).join(" ").trim(),k=A.caption.trim();g.endsWith(",")&&(g=g.substring(0,g.length-1)),g.includes("·")&&(g=g.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),m(Q({_id:s,lang:d,element:g,caption:k})).then(m(be())),l(!1)},r=()=>{a===""&&n("der "),a==="der "&&n("die "),a==="die "&&n("das "),a==="das "&&n("")},c=async()=>{const A=x("element"),d={from:h.lang,to:u.lang},g=await ae(A,d,u.engine);f("caption",g)};return t.jsxs(wt,{onSubmit:o($),children:[t.jsx(me,{...C("element"),style:{height:b}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>l(b),children:t.jsx(ze,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:r,children:t.jsx(Je,{size:"18px"})}),t.jsx(Ee,{type:"button",onClick:c,children:t.jsx(Ve,{size:"16px"})}),t.jsx(St,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...C("caption"),style:{height:b}})]})};Te.propTypes={el:y.object,isForm:y.oneOfType([y.bool,y.number]),setIsForm:y.func};const _e=({el:e,index:i,length:l,sortByDate:m,setSortByDate:u,translateAll:h,liColor:a,setLiColor:n})=>{const s=B(),{elementTrash:p,activeElement:j}=I(),[b,C]=S.useState(!1),{_id:x,favorite:f,checked:o}=e,v=p.find(g=>g._id===x),$=()=>{s(Q({_id:x,favorite:!f}))},r=()=>{s(Q({_id:x,checked:!o}))},c=()=>s(Ke(e)),A=g=>{if(b)C(!1);else{const k=g.target.closest("div").clientHeight;C(k)}},d=x===(j==null?void 0:j._id);return t.jsxs(xt,{id:d?"active-element":null,licolor:a,children:[t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(vt,{$hovered:f,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:$}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(yt,{$hovered:o,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:o,onChange:r}),t.jsx(Pe,{size:"15px"})]}),b&&l===i+1&&t.jsx(Ee,{onClick:h,children:t.jsx(Me,{size:"16px"})})]}),b&&t.jsx(Te,{el:e,isForm:b,setIsForm:C}),!b&&t.jsx(Se,{el:e,sortByDate:m,setSortByDate:u,setLiColor:n}),t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:v,onClick:c,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:A,children:t.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:y.object,index:y.number,length:y.number,sortByDate:y.bool,setSortByDate:y.func,translateAll:y.func,liColor:y.string,setLiColor:y.func};const Lt=w.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=B(),{ref:i,inView:l,entry:m}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:u}=W(),{activeCluster:h}=R(),{allElements:a,elementTrash:n,elementFilter:s}=I(),[p,j]=S.useState(It);let{elementSelect:b}=I();b=b||[];const[C,x]=S.useState(!1),[f,o]=S.useState(!0);S.useEffect(()=>{h&&e(be({cluster:h._id})).unwrap().then(({result:d})=>{if(!h.activeEl)return;const g=d.elements.find(({_id:k})=>k===h.activeEl);e($e(g))}).then(()=>{const d=document.getElementById("active-element");(()=>{d==null||d.scrollIntoView({block:"center",behavior:"smooth"})})(),o(!1)})},[]);const v=a.filter(d=>d.cluster===(h==null?void 0:h._id)).sort((d,g)=>d.createdAt.localeCompare(g.createdAt)),r=(()=>{const d=n.map(g=>g._id);return b.includes("trash")?v.filter(g=>d.includes(g._id)):v})().filter(({element:d,caption:g,favorite:k,checked:L})=>{const D=d.toLowerCase().replace("·","").includes(s)||d.toLowerCase().includes(s)||g.toLowerCase().includes(s),z=b.includes("wordlist")?D&&et(d):D,V=()=>b.some(Z=>["favorite","unfavorite"].includes(Z))?b.includes("favorite")?z&&k===!0:z&&k===!1:z;return(()=>b.some(Z=>["checked","unchecked"].includes(Z))?b.includes("checked")?V()&&L===!0:V()&&L===!1:V())()}).sort(C?(d,g)=>g.createdAt.localeCompare(d.createdAt):(d,g)=>d.createdAt.localeCompare(g.createdAt)),c=async()=>{const d=u.lang;let g=0;await r.forEach(async k=>{if(g>1)return;const{_id:L,element:D}=k;if(!D.startsWith("[")||d!==k.lang){const z={from:h.lang,to:d},V=await ae(D,z,u.engine);e(Q({_id:L,lang:d,caption:V})),g=g+1}})},A=window.innerHeight<(m==null?void 0:m.target.getBoundingClientRect().y)+(m==null?void 0:m.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[r.map((d,g,k)=>t.jsx(_e,{el:d,index:g,length:k.length,sortByDate:C,setSortByDate:x,translateAll:c,liColor:p,setLiColor:j},d._id)),t.jsxs("div",{ref:i,children:[t.jsx(xe,{}),t.jsx(ve,{className:!l||!A?"shown":"hidden"}),t.jsx(Ae,{className:!l||!A?"shown":"hidden",filtredElements:r,setLiColor:j})]})]}),f&&t.jsx(qe,{})]})},{s:ge,m:Ft}=T.indents,Gt=()=>t.jsx(re,{$p:`0 ${Ft} ${ge} ${ge}`,children:t.jsx(Wt,{})});export{Gt as default};
