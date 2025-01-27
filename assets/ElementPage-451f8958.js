import{T as J,r as S,t as T,P as y,u as B,b as W,q as R,j as t,S as oe,U as P,w as se,D as ce,E as ie,K as N,R as Be,V as Re,Q as _,y as I,W as Le,X as Ie,Y as We,s as w,Z as Fe,_ as Y,$ as De,n as O,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Q,a6 as be,F as re,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-0407548d.js";import{r as He,H as Ne,T as Ye}from"./index.esm-c743187c.js";import{w as Qe}from"./writeClipboard-e42d4ebe.js";import{v as Xe,u as Ze}from"./index.esm-2cbd7f57.js";import{a as Je}from"./index.esm-1dec27f5.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt={google:"",deepl:tt},ae=async(e,{from:u,to:l},h)=>{J.engine=h,J.key=nt[h];const p=e.replaceAll("·","");let r=await J(`${p}`,{from:u,to:l});try{if(l.includes("en")&&p.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(p.at(p.length-1)))return r;const n=p.replaceAll(",","").split(/\s+/);if(n.length===1)return r.toLocaleLowerCase();const o=r.split(", ");return["der","die","das"].includes(n[0])?r.replaceAll("The ","").replaceAll("the ","").split(", ")[0].toLocaleLowerCase():l.includes("en")&&n[2]==="am"?o[2].startsWith("the")?r:`${o[0]}, ${o[1]}, the ${o[2]}`:(n[0].endsWith("n")&&["hat","ist"].includes(n[2])&&u.includes("de")&&(r=l.includes("en")?"to "+o[0].split(" ")[0]:o[0].split(" ")[0]),r)}catch(c){return c.message}},M=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],G=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var le=new Map,U=new WeakMap,de=0,st=void 0;function rt(e){return e?(U.has(e)||(de+=1,U.set(e,de.toString())),U.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(u=>e[u]!==void 0).map(u=>`${u}_${u==="root"?rt(e.root):e[u]}`).toString()}function ot(e){const u=lt(e);let l=le.get(u);if(!l){const h=new Map;let p;const r=new IntersectionObserver(c=>{c.forEach(n=>{var o;const $=n.isIntersecting&&p.some(j=>n.intersectionRatio>=j);e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=$),(o=h.get(n.target))==null||o.forEach(j=>{j($,n)})})},e);p=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:u,observer:r,elements:h},le.set(u,l)}return l}function at(e,u,l={},h=st){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const o=e.getBoundingClientRect();return u(h,{isIntersecting:h,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:p,observer:r,elements:c}=ot(l),n=c.get(e)||[];return c.has(e)||c.set(e,n),n.push(u),r.observe(e),function(){n.splice(n.indexOf(u),1),n.length===0&&(c.delete(e),r.unobserve(e)),c.size===0&&(r.disconnect(),le.delete(p))}}function ct({threshold:e,delay:u,trackVisibility:l,rootMargin:h,root:p,triggerOnce:r,skip:c,initialInView:n,fallbackInView:o,onChange:$}={}){var j;const[b,C]=S.useState(null),x=S.useRef($),[m,a]=S.useState({inView:!!n,entry:void 0});x.current=$,S.useEffect(()=>{if(c||!b)return;let i;return i=at(b,(A,d)=>{a({inView:A,entry:d}),x.current&&x.current(A,d),d.isIntersecting&&r&&i&&(i(),i=void 0)},{root:p,rootMargin:h,threshold:e,trackVisibility:l,delay:u},o),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,b,p,h,r,c,l,o,u]);const v=(j=m.entry)==null?void 0:j.target,g=S.useRef(void 0);!b&&v&&!r&&!c&&g.current!==v&&(g.current=v,a({inView:!!n,entry:void 0}));const s=[C,m.inView,m.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}const{backgroundHoverd:K,white:q,borderLight:H}=T.colors,xe=()=>{const e=B(),{user:u}=W(),{activeCluster:l}=R(),h=({value:n})=>{e(se({_id:l._id,lang:n})).unwrap().then(o=>e(ce(o.result.cluster)))},p=({value:n})=>{e(se({_id:l._id,rate:n})).unwrap().then(o=>e(ce(o.result.cluster)))},r=({value:n})=>{const o=new FormData;o.append("lang",n),e(ie(o))},c=({value:n})=>{const o=new FormData;o.append("rate",n),e(ie(o))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(P,{options:M,defaultValue:M.find(n=>n.value===(l==null?void 0:l.lang)),onChange:h,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(n=>n.value==(l==null?void 0:l.rate)),onChange:p,placeholder:"Rate...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:M,defaultValue:M.find(n=>n.value===u.lang),onChange:r,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(n=>n.value==u.rate),onChange:c,placeholder:"Rate...",$ol:K,$b:q,$bh:H})]})};xe.propTypes={filtredElements:y.array,setLiColor:y.func};const{button:it}=T.shadows,ut=()=>{const e=B(),{user:u}=W(),{activeCluster:l}=R();S.useEffect(()=>{const p=async r=>{r.key==="d"&&r.metaKey&&(r.prevent,await h())};return addEventListener("keydown",p),()=>{removeEventListener("keydown",p)}},[]);const h=async p=>{const r=window.getSelection().toString();r&&await Qe(r);const c=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),n={from:l.lang,to:u.lang},o=await ae(c,n,u.engine),{_id:$}=l;try{const j={cluster:$,element:"[]",caption:c},b={cluster:$,element:c,caption:o,favorite:!0,checked:c.split(/\s+/).length<20},C=c.includes("https://")?j:b;e(Re(C)),p.target.blur()}catch(j){p.target.blur(),_.error(`Invalid element, ${j.message}`)}};return t.jsx(N,{onClick:h,$s:"m",$round:!0,$bs:it,children:t.jsx(Be,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=B(),{elementTrash:u}=I(),l=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(u.map(h=>h._id).join("&"))).unwrap().then(()=>e(Ie()))};return t.jsx(N,{onClick:l,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ve=({className:e})=>{const{pathname:u}=We(),{elementTrash:l}=I(),{activeCluster:h}=R(),p=l.length>0?" 1fr":"",r=h?" 1fr":"",c=p+r;if(u.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:c,children:[r&&t.jsx(ut,{}),p&&t.jsx(pt,{})]})};ve.propTypes={className:y.string};const{colors:ee}=T,ft=w.div`
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
`,ye=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(Fe,{size:"35px"})});ye.propTypes={onClick:y.func};const{background:te}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:u,setLiColor:l})=>{const{user:h}=W(),{activeCluster:p}=R(),{activeElement:r}=I(),c=x=>{if(!x.length)return;let m="",a=0;const v=x.reduce((g,s)=>(g[s.lang]||(g[s.lang]=0),g[s.lang]+=1,g),{});for(const g in v)v[g]>a&&(a=v[g],m=g);return m},n=u.length?c(u):h.lang,o=(x,m)=>x.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),$=({text:x,playList:m,divider:a})=>{let v="";for(let g=0;g<m.length;g+=1){let s=m[g][x];s.endsWith(".")||s.endsWith("!")||s.endsWith("?")||s.endsWith('"')?v+=o(s,a).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `).replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9.").replaceAll(`${a}`,x==="caption"?`@±@${m[g].lang}${a}`:`${a}`):m[g].element.startsWith("[")||(x==="caption"&&(s.includes(" [")&&(s=s.substring(0,s.indexOf(" ["))),s=`${s}@±@${m[g].lang}`),v+=s+a)}return v},j=x=>{l(te);const m="$*@",a=u.findIndex(s=>s.element===r.element),v=u.splice(a===-1?0:a),g=Y({setLiColor:l,divider:m,text:$({text:"element",playList:v,divider:m}),lang:p.lang,rate:p.rate});x.target.blur(),g&&_.error(g)},b=x=>{const m="$*@";l(te);const a=u.findIndex(s=>s.element===r.element),v=u.splice(a===-1?0:a),g=Y({setLiColor:l,divider:m,text:$({text:"caption",playList:v,divider:m}),lang:n,rate:h.rate});x.target.blur(),g&&_.error(g)},C=x=>{l(te);let m="";const a="$*@",v=u.findIndex(i=>i.element===r.element),g=u.splice(v===-1?0:v);for(let i=0;i<g.length;i+=1){const{element:A,caption:d,lang:f}=g[i];if(!A.startsWith("[")){const k=o(A,""),L=d.includes(" [")?d.substring(0,d.indexOf(" [")):o(d,"");m+=k+`@±@${f}`+L+a}}const s=De({setLiColor:l,divider:a,text:m,lang:p.lang,rate:h.rate});x.target.blur(),s&&_.error(s)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(N,{onClick:j,$s:"m",$round:!0,$bs:pe,children:(p==null?void 0:p.lang.at(0).toUpperCase())+(p==null?void 0:p.lang.substring(1))}),t.jsx(ye,{onClick:C}),t.jsx(N,{onClick:b,$s:"m",$round:!0,$bs:pe,children:(n==null?void 0:n.at(0).toUpperCase())+(n==null?void 0:n.substring(1))})]})};Ae.propTypes={className:y.string,filtredElements:y.array,setLiColor:y.func};const{colors:E,shadows:he,indents:ne}=T,bt=O`
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
`,Bt=w.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,Rt=w.audio`
  ${Ce}
`,Se=({el:e,sortByDate:u,setSortByDate:l,setLiColor:h})=>{const p=B(),{user:r}=W(),{activeCluster:c}=R(),{element:n,caption:o}=e,$="$*@",j=(s,i)=>{let A="";return i?(s.trim().endsWith(".")||s.trim().endsWith("!")||s.trim().endsWith("?")||s.endsWith('"')?A=s.trim().replaceAll(", `",`;${i} `).replaceAll(" `",`${i} `).replaceAll(",`",";").replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${i}`).replaceAll(".",`.${i}`).replaceAll(",",`,${i}`).replaceAll("!",`!${i}`).replaceAll("?",`?${i}`).replaceAll(": ",`:${i} `).replaceAll(`0.${i}`,"0.").replaceAll(`1.${i}`,"1.").replaceAll(`2.${i}`,"2.").replaceAll(`3.${i}`,"3.").replaceAll(`4.${i}`,"4.").replaceAll(`5.${i}`,"5.").replaceAll(`6.${i}`,"6.").replaceAll(`7.${i}`,"7.").replaceAll(`8.${i}`,"8.").replaceAll(`9.${i}`,"9."):A=s.trim()+i,A.includes("[")?A.substring(0,A.indexOf("["))+i:A):s},b=s=>{const i=Y({setLiColor:h,divider:$,text:j(n,$),lang:c.lang,rate:c.rate});s.target.blur(),i&&_.error(i)},C=s=>{const i=Y({setLiColor:h,divider:$,text:j(o,$),lang:e.lang,rate:r.rate});s.target.blur(),i&&_.error(i)},x=s=>{l(!u),u?_.success("Below is Recent"):_.success("Above is Recent"),s.stopPropagation()},m=s=>{const{_id:i}=c;p($e(e)),s.currentTarget.closest("li").id!=="active-element"&&p(se({_id:i,activeEl:e._id}))},a=o.endsWith("mp3"),v=!a&&o.startsWith("http"),g=!a&&!v;return t.jsxs(kt,{onClick:m,children:[t.jsx(fe,{onClick:b,children:n}),t.jsx(Et,{onClick:x}),a&&t.jsx(Rt,{controls:!0,src:ue(o)}),v&&t.jsx(Bt,{src:ue(o)}),g&&t.jsx(fe,{onClick:C,children:o})]})};Se.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func,$active:y.bool,$hovered:y.bool,setLiColor:y.func};const Te=({el:e,isForm:u,setIsForm:l})=>{const h=B(),{user:p}=W(),{activeCluster:r}=R(),[c,n]=S.useState(""),{_id:o,element:$,caption:j}=e,b=u+42,{register:C,watch:x,setValue:m,handleSubmit:a,setFocus:v}=Ze({mode:"onBlur",defaultValues:{element:$,caption:j}});S.useEffect(()=>{v("element"),c&&$.trim().startsWith("der")?m("element",c+$.replace("der","").trim()+", "):c&&$.trim().startsWith("die")?m("element",c+$.replace("die","").trim()+", "):c&&$.trim().startsWith("das")?m("element",c+$.replace("das","").trim()+", "):c?m("element",c+$+", "):m("element",c+$)},[c,$,v,m]),S.useEffect(()=>{const A=async d=>{d.key==="+"&&(d.preventDefault(),await i(),a(g)()),d.key==="Enter"&&(d.preventDefault(),a(g)()),d.key==="Escape"&&l(!1)};return addEventListener("keydown",A),()=>{removeEventListener("keydown",A)}},[]);const g=A=>{const d=p.lang;let f=A.element.split(/\s+/).join(" ").trim(),k=A.caption.trim();f.endsWith(",")&&(f=f.substring(0,f.length-1)),f.includes("·")&&(f=f.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),h(Q({_id:o,lang:d,element:f,caption:k})).then(h(be())),l(!1)},s=()=>{c===""&&n("der "),c==="der "&&n("die "),c==="die "&&n("das "),c==="das "&&n("")},i=async()=>{const A=x("element"),d={from:r.lang,to:p.lang},f=await ae(A,d,p.engine);m("caption",f)};return t.jsxs(wt,{onSubmit:a(g),children:[t.jsx(me,{...C("element"),style:{height:b}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>l(b),children:t.jsx(ze,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:s,children:t.jsx(Je,{size:"18px"})}),t.jsx(Ee,{type:"button",onClick:i,children:t.jsx(Ve,{size:"16px"})}),t.jsx(St,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...C("caption"),style:{height:b}})]})};Te.propTypes={el:y.object,isForm:y.oneOfType([y.bool,y.number]),setIsForm:y.func};const _e=({el:e,index:u,length:l,sortByDate:h,setSortByDate:p,translateAll:r,liColor:c,setLiColor:n})=>{const o=B(),{elementTrash:$,activeElement:j}=I(),[b,C]=S.useState(!1),{_id:x,favorite:m,checked:a}=e,v=$.find(f=>f._id===x),g=()=>{o(Q({_id:x,favorite:!m}))},s=()=>{o(Q({_id:x,checked:!a}))},i=()=>o(Ke(e)),A=f=>{if(b)C(!1);else{const k=f.target.closest("div").clientHeight;C(k)}},d=x===(j==null?void 0:j._id);return t.jsxs(xt,{id:d?"active-element":null,licolor:c,children:[t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(vt,{$hovered:m,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:g}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(yt,{$hovered:a,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:a,onChange:s}),t.jsx(Pe,{size:"15px"})]}),b&&l===u+1&&t.jsx(Ee,{onClick:r,children:t.jsx(Me,{size:"16px"})})]}),b&&t.jsx(Te,{el:e,isForm:b,setIsForm:C}),!b&&t.jsx(Se,{el:e,sortByDate:h,setSortByDate:p,setLiColor:n}),t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:v,onClick:i,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:A,children:t.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:y.object,index:y.number,length:y.number,sortByDate:y.bool,setSortByDate:y.func,translateAll:y.func,liColor:y.string,setLiColor:y.func};const Lt=w.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=B(),{ref:u,inView:l,entry:h}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:p}=W(),{activeCluster:r}=R(),{allElements:c,elementTrash:n,elementFilter:o}=I(),[$,j]=S.useState(It);let{elementSelect:b}=I();b=b||[];const[C,x]=S.useState(!1),[m,a]=S.useState(!0);S.useEffect(()=>{r&&e(be({cluster:r._id})).unwrap().then(({result:d})=>{if(!r.activeEl)return;const f=d.elements.find(({_id:k})=>k===r.activeEl);e($e(f))}).then(()=>{const d=document.getElementById("active-element");(()=>{d==null||d.scrollIntoView({block:"center",behavior:"smooth"})})(),a(!1)})},[]);const v=c.filter(d=>d.cluster===(r==null?void 0:r._id)).sort((d,f)=>d.createdAt.localeCompare(f.createdAt)),s=(()=>{const d=n.map(f=>f._id);return b.includes("trash")?v.filter(f=>d.includes(f._id)):v})().filter(({element:d,caption:f,favorite:k,checked:L})=>{const D=d.toLowerCase().replace("·","").includes(o)||d.toLowerCase().includes(o)||f.toLowerCase().includes(o),z=b.includes("wordlist")?D&&et(d):D,V=()=>b.some(Z=>["favorite","unfavorite"].includes(Z))?b.includes("favorite")?z&&k===!0:z&&k===!1:z;return(()=>b.some(Z=>["checked","unchecked"].includes(Z))?b.includes("checked")?V()&&L===!0:V()&&L===!1:V())()}).sort(C?(d,f)=>f.createdAt.localeCompare(d.createdAt):(d,f)=>d.createdAt.localeCompare(f.createdAt)),i=async()=>{const d=p.lang;let f=0;await s.forEach(async k=>{if(f>1)return;const{_id:L,element:D}=k;if(!D.startsWith("[")||d!==k.lang){const z={from:r.lang,to:d},V=await ae(D,z,p.engine);e(Q({_id:L,lang:d,caption:V})),f=f+1}})},A=window.innerHeight<(h==null?void 0:h.target.getBoundingClientRect().y)+(h==null?void 0:h.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[s.map((d,f,k)=>t.jsx(_e,{el:d,index:f,length:k.length,sortByDate:C,setSortByDate:x,translateAll:i,liColor:$,setLiColor:j},d._id)),t.jsxs("div",{ref:u,children:[t.jsx(xe,{}),t.jsx(ve,{className:!l||!A?"shown":"hidden"}),t.jsx(Ae,{className:!l||!A?"shown":"hidden",filtredElements:s,setLiColor:j})]})]}),m&&t.jsx(qe,{})]})},{s:ge,m:Ft}=T.indents,Gt=()=>t.jsx(re,{$p:`0 ${Ft} ${ge} ${ge}`,children:t.jsx(Wt,{})});export{Gt as default};
