import{T as J,r as S,t as T,P as A,u as B,b as W,q as R,j as t,S as oe,U as P,w as ne,D as ce,E as ie,K as N,R as Be,V as Re,Q as _,y as I,W as Le,X as Ie,Y as We,s as E,Z as Fe,_ as Y,$ as De,n as O,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Q,a6 as be,F as re,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-d50f8858.js";import{r as He,H as Ne,T as Ye}from"./index.esm-5fd99695.js";import{w as Qe}from"./writeClipboard-37b77a73.js";import{v as Xe,u as Ze}from"./index.esm-7412acac.js";import{a as Je}from"./index.esm-ed1df99d.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},st={google:"",deepl:tt},ae=async(e,{from:i,to:l},m)=>{var b,y;J.engine=m,J.key=st[m];const u=e.replaceAll("·",""),p=[".","!","?"].includes(u.at(u.length-1)),c=u.split(/\s+/),s=u.split(", ");let n=await J(`${u}`,{from:i,to:l});try{if(l.includes("en")&&u.toLowerCase().includes("uhr")&&(n=n.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),p)return n;if(["der","die","das"].includes(c[0]))return n.replaceAll("The ","").replaceAll("the ","").split(", ")[0].toLocaleLowerCase();if(l.includes("en")&&((b=s[2])==null?void 0:b.split(" ")[0])==="am"){const h=n.split(", ");return h[2].startsWith("the")?n:`${h[0]}, ${h[1]}, the ${h[2]}`}if(s[0].endsWith("en")&&i.includes("de")){const h=n.split(", ");n=l.includes("en")?"to "+n:h[0],l.includes("en")&&["hat","ist"].includes((y=s[2])==null?void 0:y.split(" ")[0])&&(n=h[2].startsWith("has")?n:`${h[0]}, ${h[1]}, has ${h[2]}`)}return n}catch(h){return h.message}},M=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],G=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var le=new Map,U=new WeakMap,de=0,nt=void 0;function rt(e){return e?(U.has(e)||(de+=1,U.set(e,de.toString())),U.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?rt(e.root):e[i]}`).toString()}function ot(e){const i=lt(e);let l=le.get(i);if(!l){const m=new Map;let u;const p=new IntersectionObserver(c=>{c.forEach(s=>{var n;const b=s.isIntersecting&&u.some(y=>s.intersectionRatio>=y);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=b),(n=m.get(s.target))==null||n.forEach(y=>{y(b,s)})})},e);u=p.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:p,elements:m},le.set(i,l)}return l}function at(e,i,l={},m=nt){if(typeof window.IntersectionObserver>"u"&&m!==void 0){const n=e.getBoundingClientRect();return i(m,{isIntersecting:m,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:u,observer:p,elements:c}=ot(l),s=c.get(e)||[];return c.has(e)||c.set(e,s),s.push(i),p.observe(e),function(){s.splice(s.indexOf(i),1),s.length===0&&(c.delete(e),p.unobserve(e)),c.size===0&&(p.disconnect(),le.delete(u))}}function ct({threshold:e,delay:i,trackVisibility:l,rootMargin:m,root:u,triggerOnce:p,skip:c,initialInView:s,fallbackInView:n,onChange:b}={}){var y;const[h,C]=S.useState(null),x=S.useRef(b),[f,o]=S.useState({inView:!!s,entry:void 0});x.current=b,S.useEffect(()=>{if(c||!h)return;let a;return a=at(h,(j,d)=>{o({inView:j,entry:d}),x.current&&x.current(j,d),d.isIntersecting&&p&&a&&(a(),a=void 0)},{root:u,rootMargin:m,threshold:e,trackVisibility:l,delay:i},n),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,h,u,m,p,c,l,n,i]);const v=(y=f.entry)==null?void 0:y.target,$=S.useRef(void 0);!h&&v&&!p&&!c&&$.current!==v&&($.current=v,o({inView:!!s,entry:void 0}));const r=[C,f.inView,f.entry];return r.ref=r[0],r.inView=r[1],r.entry=r[2],r}const{backgroundHoverd:K,white:q,borderLight:H}=T.colors,xe=()=>{const e=B(),{user:i}=W(),{activeCluster:l}=R(),m=({value:s})=>{e(ne({_id:l._id,lang:s})).unwrap().then(n=>e(ce(n.result.cluster)))},u=({value:s})=>{e(ne({_id:l._id,rate:s})).unwrap().then(n=>e(ce(n.result.cluster)))},p=({value:s})=>{const n=new FormData;n.append("lang",s),e(ie(n))},c=({value:s})=>{const n=new FormData;n.append("rate",s),e(ie(n))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(P,{options:M,defaultValue:M.find(s=>s.value===(l==null?void 0:l.lang)),onChange:m,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(s=>s.value==(l==null?void 0:l.rate)),onChange:u,placeholder:"Rate...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:M,defaultValue:M.find(s=>s.value===i.lang),onChange:p,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(s=>s.value==i.rate),onChange:c,placeholder:"Rate...",$ol:K,$b:q,$bh:H})]})};xe.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:it}=T.shadows,ut=()=>{const e=B(),{user:i}=W(),{activeCluster:l}=R();S.useEffect(()=>{const u=async p=>{p.key==="d"&&p.metaKey&&(p.prevent,await m())};return addEventListener("keydown",u),()=>{removeEventListener("keydown",u)}},[]);const m=async u=>{const p=window.getSelection().toString();p&&await Qe(p);const c=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),s={from:l.lang,to:i.lang},n=await ae(c,s,i.engine),{_id:b}=l;try{const y={cluster:b,element:"[]",caption:c},h={cluster:b,element:c,caption:n,favorite:!0,checked:c.split(/\s+/).length<20},C=c.includes("https://")?y:h;e(Re(C)),u.target.blur()}catch(y){u.target.blur(),_.error(`Invalid element, ${y.message}`)}};return t.jsx(N,{onClick:m,$s:"m",$round:!0,$bs:it,children:t.jsx(Be,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=B(),{elementTrash:i}=I(),l=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(i.map(m=>m._id).join("&"))).unwrap().then(()=>e(Ie()))};return t.jsx(N,{onClick:l,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ve=({className:e})=>{const{pathname:i}=We(),{elementTrash:l}=I(),{activeCluster:m}=R(),u=l.length>0?" 1fr":"",p=m?" 1fr":"",c=u+p;if(i.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:c,children:[p&&t.jsx(ut,{}),u&&t.jsx(pt,{})]})};ve.propTypes={className:A.string};const{colors:ee}=T,ft=E.div`
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
`,ye=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(Fe,{size:"35px"})});ye.propTypes={onClick:A.func};const{background:te}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:i,setLiColor:l})=>{const{user:m}=W(),{activeCluster:u}=R(),{activeElement:p}=I(),c=x=>{if(!x.length)return;let f="",o=0;const v=x.reduce(($,r)=>($[r.lang]||($[r.lang]=0),$[r.lang]+=1,$),{});for(const $ in v)v[$]>o&&(o=v[$],f=$);return f},s=i.length?c(i):m.lang,n=(x,f)=>x.replaceAll(", `",`;${f} `).replaceAll(" `",`${f} `).replaceAll(",`",";"),b=({text:x,playList:f,divider:o})=>{let v="";for(let $=0;$<f.length;$+=1){let r=f[$][x];r.endsWith(".")||r.endsWith("!")||r.endsWith("?")||r.endsWith('"')?v+=n(r,o).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${o}`).replaceAll(".",`.${o}`).replaceAll(",",`,${o}`).replaceAll("!",`!${o}`).replaceAll("?",`?${o}`).replaceAll(": ",`:${o} `).replaceAll(`0.${o}`,"0.").replaceAll(`1.${o}`,"1.").replaceAll(`2.${o}`,"2.").replaceAll(`3.${o}`,"3.").replaceAll(`4.${o}`,"4.").replaceAll(`5.${o}`,"5.").replaceAll(`6.${o}`,"6.").replaceAll(`7.${o}`,"7.").replaceAll(`8.${o}`,"8.").replaceAll(`9.${o}`,"9.").replaceAll(`${o}`,x==="caption"?`@±@${f[$].lang}${o}`:`${o}`):f[$].element.startsWith("[")||(x==="caption"&&(r.includes(" [")&&(r=r.substring(0,r.indexOf(" ["))),r=`${r}@±@${f[$].lang}`),v+=r+o)}return v},y=x=>{l(te);const f="$*@",o=i.findIndex(r=>r.element===p.element),v=i.splice(o===-1?0:o),$=Y({setLiColor:l,divider:f,text:b({text:"element",playList:v,divider:f}),lang:u.lang,rate:u.rate});x.target.blur(),$&&_.error($)},h=x=>{const f="$*@";l(te);const o=i.findIndex(r=>r.element===p.element),v=i.splice(o===-1?0:o),$=Y({setLiColor:l,divider:f,text:b({text:"caption",playList:v,divider:f}),lang:s,rate:m.rate});x.target.blur(),$&&_.error($)},C=x=>{l(te);let f="";const o="$*@",v=i.findIndex(a=>a.element===p.element),$=i.splice(v===-1?0:v);for(let a=0;a<$.length;a+=1){const{element:j,caption:d,lang:g}=$[a];if(!j.startsWith("[")){const k=n(j,""),L=d.includes(" [")?d.substring(0,d.indexOf(" [")):n(d,"");f+=k+`@±@${g}`+L+o}}const r=De({setLiColor:l,divider:o,text:f,lang:u.lang,rate:m.rate});x.target.blur(),r&&_.error(r)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(N,{onClick:y,$s:"m",$round:!0,$bs:pe,children:(u==null?void 0:u.lang.at(0).toUpperCase())+(u==null?void 0:u.lang.substring(1))}),t.jsx(ye,{onClick:C}),t.jsx(N,{onClick:h,$s:"m",$round:!0,$bs:pe,children:(s==null?void 0:s.at(0).toUpperCase())+(s==null?void 0:s.substring(1))})]})};Ae.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:w,shadows:he,indents:se}=T,bt=O`
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
`,xt=E.li`
  ${bt}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${w.border};
    background-color: ${w.background};
    box-shadow: ${he.back};

    &:hover {
      border-color: ${w.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${w.smokeBlack};
      &:hover {
        color: ${w.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${w.hovered};
    }
  }

  &:hover {
    border-color: ${w.accent};
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
`,vt=E.label`
  ${je}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?w.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?w.yellow:w.border};
  }
  &:hover svg {
    stroke: ${w.placeholder};
  }
`,yt=E.label`
  ${je}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${w.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?w.border:"transparent"};
  }
  &:hover svg {
    border-color: ${w.placeholder};
    color: ${({$hovered:e})=>e?w.placeholder:"transparent"};
  }
`,F=O`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${w.black};

  & svg {
    transition: color 250ms;
    color: ${w.border};
  }
  &:hover,
  &:hover svg {
    color: ${w.placeholder};
  }
`,At=E.button`
  ${F}

  opacity: ${({$hovered:e})=>e?1:0};
`,jt=E.button`
  ${F}

  opacity: 0;
`,{colors:X,indents:ke}=T,Ee=O`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,kt=E.div`
  ${Ee}
`,Et=E.form`
  ${Ee}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,me=E.textarea`
  outline: none;
  border: 1px solid ${X.accent};
  border-radius: ${ke.xs};
  resize: none;
`,wt=E.div`
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
`,Ct=E.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,St=E.button`
  ${F}
`,Tt=E.button`
  ${F}
`,we=E.button`
  ${F}
`,_t=E.button`
  ${F}
`,fe=E.button`
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
`,Bt=E.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,Rt=E.audio`
  ${Ce}
`,Se=({el:e,sortByDate:i,setSortByDate:l,setLiColor:m})=>{const u=B(),{user:p}=W(),{activeCluster:c}=R(),{element:s,caption:n}=e,b="$*@",y=(r,a)=>{let j="";return a?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?j=r.trim().replaceAll(", `",`;${a} `).replaceAll(" `",`${a} `).replaceAll(",`",";").replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `).replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9."):j=r.trim()+a,j.includes("[")?j.substring(0,j.indexOf("["))+a:j):r},h=r=>{const a=Y({setLiColor:m,divider:b,text:y(s,b),lang:c.lang,rate:c.rate});r.target.blur(),a&&_.error(a)},C=r=>{const a=Y({setLiColor:m,divider:b,text:y(n,b),lang:e.lang,rate:p.rate});r.target.blur(),a&&_.error(a)},x=r=>{l(!i),i?_.success("Below is Recent"):_.success("Above is Recent"),r.stopPropagation()},f=r=>{const{_id:a}=c;u($e(e)),r.currentTarget.closest("li").id!=="active-element"&&u(ne({_id:a,activeEl:e._id}))},o=n.endsWith("mp3"),v=!o&&n.startsWith("http"),$=!o&&!v;return t.jsxs(kt,{onClick:f,children:[t.jsx(fe,{onClick:h,children:s}),t.jsx(wt,{onClick:x}),o&&t.jsx(Rt,{controls:!0,src:ue(n)}),v&&t.jsx(Bt,{src:ue(n)}),$&&t.jsx(fe,{onClick:C,children:n})]})};Se.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Te=({el:e,isForm:i,setIsForm:l})=>{const m=B(),{user:u}=W(),{activeCluster:p}=R(),[c,s]=S.useState(""),{_id:n,element:b,caption:y}=e,h=i+42,{register:C,watch:x,setValue:f,handleSubmit:o,setFocus:v}=Ze({mode:"onBlur",defaultValues:{element:b,caption:y}});S.useEffect(()=>{v("element"),c&&b.trim().startsWith("der")?f("element",c+b.replace("der","").trim()+", "):c&&b.trim().startsWith("die")?f("element",c+b.replace("die","").trim()+", "):c&&b.trim().startsWith("das")?f("element",c+b.replace("das","").trim()+", "):c?f("element",c+b+", "):f("element",c+b)},[c,b,v,f]),S.useEffect(()=>{const j=async d=>{d.key==="+"&&(d.preventDefault(),await a(),o($)()),d.key==="Enter"&&(d.preventDefault(),o($)()),d.key==="Escape"&&l(!1)};return addEventListener("keydown",j),()=>{removeEventListener("keydown",j)}},[]);const $=j=>{const d=u.lang;let g=j.element.split(/\s+/).join(" ").trim(),k=j.caption.trim();g.endsWith(",")&&(g=g.substring(0,g.length-1)),g.includes("·")&&(g=g.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),m(Q({_id:n,lang:d,element:g,caption:k})).then(m(be())),l(!1)},r=()=>{c===""&&s("der "),c==="der "&&s("die "),c==="die "&&s("das "),c==="das "&&s("")},a=async()=>{const j=x("element"),d={from:p.lang,to:u.lang},g=await ae(j,d,u.engine);f("caption",g)};return t.jsxs(Et,{onSubmit:o($),children:[t.jsx(me,{...C("element"),style:{height:h}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>l(h),children:t.jsx(ze,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:r,children:t.jsx(Je,{size:"18px"})}),t.jsx(we,{type:"button",onClick:a,children:t.jsx(Ve,{size:"16px"})}),t.jsx(St,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...C("caption"),style:{height:h}})]})};Te.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const _e=({el:e,index:i,length:l,sortByDate:m,setSortByDate:u,translateAll:p,liColor:c,setLiColor:s})=>{const n=B(),{elementTrash:b,activeElement:y}=I(),[h,C]=S.useState(!1),{_id:x,favorite:f,checked:o}=e,v=b.find(g=>g._id===x),$=()=>{n(Q({_id:x,favorite:!f}))},r=()=>{n(Q({_id:x,checked:!o}))},a=()=>n(Ke(e)),j=g=>{if(h)C(!1);else{const k=g.target.closest("div").clientHeight;C(k)}},d=x===(y==null?void 0:y._id);return t.jsxs(xt,{id:d?"active-element":null,licolor:c,children:[t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(vt,{$hovered:f,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:$}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(yt,{$hovered:o,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:o,onChange:r}),t.jsx(Pe,{size:"15px"})]}),h&&l===i+1&&t.jsx(we,{onClick:p,children:t.jsx(Me,{size:"16px"})})]}),h&&t.jsx(Te,{el:e,isForm:h,setIsForm:C}),!h&&t.jsx(Se,{el:e,sortByDate:m,setSortByDate:u,setLiColor:s}),t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:v,onClick:a,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:j,children:t.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Lt=E.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=B(),{ref:i,inView:l,entry:m}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:u}=W(),{activeCluster:p}=R(),{allElements:c,elementTrash:s,elementFilter:n}=I(),[b,y]=S.useState(It);let{elementSelect:h}=I();h=h||[];const[C,x]=S.useState(!1),[f,o]=S.useState(!0);S.useEffect(()=>{p&&e(be({cluster:p._id})).unwrap().then(({result:d})=>{if(!p.activeEl)return;const g=d.elements.find(({_id:k})=>k===p.activeEl);e($e(g))}).then(()=>{const d=document.getElementById("active-element");(()=>{d==null||d.scrollIntoView({block:"center",behavior:"smooth"})})(),o(!1)})},[]);const v=c.filter(d=>d.cluster===(p==null?void 0:p._id)).sort((d,g)=>d.createdAt.localeCompare(g.createdAt)),r=(()=>{const d=s.map(g=>g._id);return h.includes("trash")?v.filter(g=>d.includes(g._id)):v})().filter(({element:d,caption:g,favorite:k,checked:L})=>{const D=d.toLowerCase().replace("·","").includes(n)||d.toLowerCase().includes(n)||g.toLowerCase().includes(n),z=h.includes("wordlist")?D&&et(d):D,V=()=>h.some(Z=>["favorite","unfavorite"].includes(Z))?h.includes("favorite")?z&&k===!0:z&&k===!1:z;return(()=>h.some(Z=>["checked","unchecked"].includes(Z))?h.includes("checked")?V()&&L===!0:V()&&L===!1:V())()}).sort(C?(d,g)=>g.createdAt.localeCompare(d.createdAt):(d,g)=>d.createdAt.localeCompare(g.createdAt)),a=async()=>{const d=u.lang;let g=0;await r.forEach(async k=>{if(g>1)return;const{_id:L,element:D}=k;if(!D.startsWith("[")||d!==k.lang){const z={from:p.lang,to:d},V=await ae(D,z,u.engine);e(Q({_id:L,lang:d,caption:V})),g=g+1}})},j=window.innerHeight<(m==null?void 0:m.target.getBoundingClientRect().y)+(m==null?void 0:m.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[r.map((d,g,k)=>t.jsx(_e,{el:d,index:g,length:k.length,sortByDate:C,setSortByDate:x,translateAll:a,liColor:b,setLiColor:y},d._id)),t.jsxs("div",{ref:i,children:[t.jsx(xe,{}),t.jsx(ve,{className:!l||!j?"shown":"hidden"}),t.jsx(Ae,{className:!l||!j?"shown":"hidden",filtredElements:r,setLiColor:y})]})]}),f&&t.jsx(qe,{})]})},{s:ge,m:Ft}=T.indents,Gt=()=>t.jsx(re,{$p:`0 ${Ft} ${ge} ${ge}`,children:t.jsx(Wt,{})});export{Gt as default};
