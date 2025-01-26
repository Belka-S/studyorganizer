import{T as J,r as S,t as T,P as y,u as B,b as W,q as R,j as s,S as oe,U as P,w as ne,D as ce,E as ie,K as N,R as Be,V as Re,Q as _,y as I,W as Le,X as Ie,Y as We,s as w,Z as Fe,_ as Y,$ as De,n as O,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Q,a6 as be,F as re,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-e9e1d654.js";import{r as He,H as Ne,T as Ye}from"./index.esm-c31e9f22.js";import{w as Qe}from"./writeClipboard-e8839c3e.js";import{v as Xe,u as Ze}from"./index.esm-2cdd5d2b.js";import{a as Je}from"./index.esm-e9b02d36.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},st={google:"",deepl:tt},ae=async(e,{from:i,to:l},h)=>{J.engine=h,J.key=st[h];const d=e.replaceAll("·",""),p=d.split(/\s+/),o=d.split(", ");let t=await J(`${d}`,{from:i,to:l});try{if(p.length===1&&(t=t.toLocaleLowerCase()),["der","die","das"].includes(p[0])&&(t=t.replaceAll("The ","").replaceAll("the ","").split(", ")[0].toLocaleLowerCase()),o[0].endsWith("en")&&i.includes("de")){const n=t.split(", ");t=l.includes("en")?"to "+t:n[0],l.includes("en")&&["hat","ist"].includes(o[2].split(" ")[0])&&(t=n[2].startsWith("has")?t:`${n[0]}, ${n[1]}, has ${n[2]}`)}if(l.includes("en")&&o[2].split(" ")[0]==="am"){const n=t.split(", ");t=n[2].startsWith("the")?t:`${n[0]}, ${n[1]}, the ${n[2]}`}return l.includes("en")&&d.toLowerCase().includes("uhr")&&(t=t.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),t}catch(n){return n.message}},M=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],G=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var le=new Map,U=new WeakMap,de=0,nt=void 0;function rt(e){return e?(U.has(e)||(de+=1,U.set(e,de.toString())),U.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?rt(e.root):e[i]}`).toString()}function ot(e){const i=lt(e);let l=le.get(i);if(!l){const h=new Map;let d;const p=new IntersectionObserver(o=>{o.forEach(t=>{var n;const $=t.isIntersecting&&d.some(j=>t.intersectionRatio>=j);e.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=$),(n=h.get(t.target))==null||n.forEach(j=>{j($,t)})})},e);d=p.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:p,elements:h},le.set(i,l)}return l}function at(e,i,l={},h=nt){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const n=e.getBoundingClientRect();return i(h,{isIntersecting:h,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:d,observer:p,elements:o}=ot(l),t=o.get(e)||[];return o.has(e)||o.set(e,t),t.push(i),p.observe(e),function(){t.splice(t.indexOf(i),1),t.length===0&&(o.delete(e),p.unobserve(e)),o.size===0&&(p.disconnect(),le.delete(d))}}function ct({threshold:e,delay:i,trackVisibility:l,rootMargin:h,root:d,triggerOnce:p,skip:o,initialInView:t,fallbackInView:n,onChange:$}={}){var j;const[b,C]=S.useState(null),x=S.useRef($),[m,a]=S.useState({inView:!!t,entry:void 0});x.current=$,S.useEffect(()=>{if(o||!b)return;let c;return c=at(b,(A,u)=>{a({inView:A,entry:u}),x.current&&x.current(A,u),u.isIntersecting&&p&&c&&(c(),c=void 0)},{root:d,rootMargin:h,threshold:e,trackVisibility:l,delay:i},n),()=>{c&&c()}},[Array.isArray(e)?e.toString():e,b,d,h,p,o,l,n,i]);const v=(j=m.entry)==null?void 0:j.target,g=S.useRef(void 0);!b&&v&&!p&&!o&&g.current!==v&&(g.current=v,a({inView:!!t,entry:void 0}));const r=[C,m.inView,m.entry];return r.ref=r[0],r.inView=r[1],r.entry=r[2],r}const{backgroundHoverd:K,white:q,borderLight:H}=T.colors,xe=()=>{const e=B(),{user:i}=W(),{activeCluster:l}=R(),h=({value:t})=>{e(ne({_id:l._id,lang:t})).unwrap().then(n=>e(ce(n.result.cluster)))},d=({value:t})=>{e(ne({_id:l._id,rate:t})).unwrap().then(n=>e(ce(n.result.cluster)))},p=({value:t})=>{const n=new FormData;n.append("lang",t),e(ie(n))},o=({value:t})=>{const n=new FormData;n.append("rate",t),e(ie(n))};return s.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[s.jsx(P,{options:M,defaultValue:M.find(t=>t.value===(l==null?void 0:l.lang)),onChange:h,placeholder:"Language...",$ol:K,$b:q,$bh:H}),s.jsx(P,{options:G,defaultValue:G.find(t=>t.value==(l==null?void 0:l.rate)),onChange:d,placeholder:"Rate...",$ol:K,$b:q,$bh:H}),s.jsx(P,{options:M,defaultValue:M.find(t=>t.value===i.lang),onChange:p,placeholder:"Language...",$ol:K,$b:q,$bh:H}),s.jsx(P,{options:G,defaultValue:G.find(t=>t.value==i.rate),onChange:o,placeholder:"Rate...",$ol:K,$b:q,$bh:H})]})};xe.propTypes={filtredElements:y.array,setLiColor:y.func};const{button:it}=T.shadows,ut=()=>{const e=B(),{user:i}=W(),{activeCluster:l}=R();S.useEffect(()=>{const d=async p=>{p.key==="d"&&p.metaKey&&(p.prevent,await h())};return addEventListener("keydown",d),()=>{removeEventListener("keydown",d)}},[]);const h=async d=>{const p=window.getSelection().toString();p&&await Qe(p);const o=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),t={from:l.lang,to:i.lang},n=await ae(o,t,i.engine),{_id:$}=l;try{const j={cluster:$,element:"[]",caption:o},b={cluster:$,element:o,caption:n,favorite:!0,checked:o.split(/\s+/).length<20},C=o.includes("https://")?j:b;e(Re(C)),d.target.blur()}catch(j){d.target.blur(),_.error(`Invalid element, ${j.message}`)}};return s.jsx(N,{onClick:h,$s:"m",$round:!0,$bs:it,children:s.jsx(Be,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=B(),{elementTrash:i}=I(),l=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(i.map(h=>h._id).join("&"))).unwrap().then(()=>e(Ie()))};return s.jsx(N,{onClick:l,$s:"m",$round:!0,$bs:dt,children:s.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ve=({className:e})=>{const{pathname:i}=We(),{elementTrash:l}=I(),{activeCluster:h}=R(),d=l.length>0?" 1fr":"",p=h?" 1fr":"",o=d+p;if(i.includes("/element"))return s.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:o,children:[p&&s.jsx(ut,{}),d&&s.jsx(pt,{})]})};ve.propTypes={className:y.string};const{colors:ee}=T,ft=w.div`
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
`,ye=({onClick:e})=>s.jsx(ft,{onClick:e,children:s.jsx(Fe,{size:"35px"})});ye.propTypes={onClick:y.func};const{background:te}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:i,setLiColor:l})=>{const{user:h}=W(),{activeCluster:d}=R(),{activeElement:p}=I(),o=x=>{if(!x.length)return;let m="",a=0;const v=x.reduce((g,r)=>(g[r.lang]||(g[r.lang]=0),g[r.lang]+=1,g),{});for(const g in v)v[g]>a&&(a=v[g],m=g);return m},t=i.length?o(i):h.lang,n=(x,m)=>x.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),$=({text:x,playList:m,divider:a})=>{let v="";for(let g=0;g<m.length;g+=1){let r=m[g][x];r.endsWith(".")||r.endsWith("!")||r.endsWith("?")||r.endsWith('"')?v+=n(r,a).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `).replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9.").replaceAll(`${a}`,x==="caption"?`@±@${m[g].lang}${a}`:`${a}`):m[g].element.startsWith("[")||(x==="caption"&&(r.includes(" [")&&(r=r.substring(0,r.indexOf(" ["))),r=`${r}@±@${m[g].lang}`),v+=r+a)}return v},j=x=>{l(te);const m="$*@",a=i.findIndex(r=>r.element===p.element),v=i.splice(a===-1?0:a),g=Y({setLiColor:l,divider:m,text:$({text:"element",playList:v,divider:m}),lang:d.lang,rate:d.rate});x.target.blur(),g&&_.error(g)},b=x=>{const m="$*@";l(te);const a=i.findIndex(r=>r.element===p.element),v=i.splice(a===-1?0:a),g=Y({setLiColor:l,divider:m,text:$({text:"caption",playList:v,divider:m}),lang:t,rate:h.rate});x.target.blur(),g&&_.error(g)},C=x=>{l(te);let m="";const a="$*@",v=i.findIndex(c=>c.element===p.element),g=i.splice(v===-1?0:v);for(let c=0;c<g.length;c+=1){const{element:A,caption:u,lang:f}=g[c];if(!A.startsWith("[")){const k=n(A,""),L=u.includes(" [")?u.substring(0,u.indexOf(" [")):u;m+=k+`@±@${f}`+L+a}}const r=De({setLiColor:l,divider:a,text:m,lang:d.lang,rate:h.rate});x.target.blur(),r&&_.error(r)};return s.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[s.jsx(N,{onClick:j,$s:"m",$round:!0,$bs:pe,children:(d==null?void 0:d.lang.at(0).toUpperCase())+(d==null?void 0:d.lang.substring(1))}),s.jsx(ye,{onClick:C}),s.jsx(N,{onClick:b,$s:"m",$round:!0,$bs:pe,children:(t==null?void 0:t.at(0).toUpperCase())+(t==null?void 0:t.substring(1))})]})};Ae.propTypes={className:y.string,filtredElements:y.array,setLiColor:y.func};const{colors:E,shadows:he,indents:se}=T,bt=O`
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
`,Se=({el:e,sortByDate:i,setSortByDate:l,setLiColor:h})=>{const d=B(),{user:p}=W(),{activeCluster:o}=R(),{element:t,caption:n}=e,$="$*@",j=(r,c)=>{let A="";return c?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?A=r.trim().replaceAll(", `",`;${c} `).replaceAll(" `",`${c} `).replaceAll(",`",";").replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${c}`).replaceAll(".",`.${c}`).replaceAll(",",`,${c}`).replaceAll("!",`!${c}`).replaceAll("?",`?${c}`).replaceAll(": ",`:${c} `).replaceAll(`0.${c}`,"0.").replaceAll(`1.${c}`,"1.").replaceAll(`2.${c}`,"2.").replaceAll(`3.${c}`,"3.").replaceAll(`4.${c}`,"4.").replaceAll(`5.${c}`,"5.").replaceAll(`6.${c}`,"6.").replaceAll(`7.${c}`,"7.").replaceAll(`8.${c}`,"8.").replaceAll(`9.${c}`,"9."):A=r.trim()+c,A.includes("[")?A.substring(0,A.indexOf("["))+c:A):r},b=r=>{const c=Y({setLiColor:h,divider:$,text:j(t,$),lang:o.lang,rate:o.rate});r.target.blur(),c&&_.error(c)},C=r=>{const c=Y({setLiColor:h,divider:$,text:j(n,$),lang:e.lang,rate:p.rate});r.target.blur(),c&&_.error(c)},x=r=>{l(!i),i?_.success("Below is Recent"):_.success("Above is Recent"),r.stopPropagation()},m=r=>{const{_id:c}=o;d($e(e)),r.currentTarget.closest("li").id!=="active-element"&&d(ne({_id:c,activeEl:e._id}))},a=n.endsWith("mp3"),v=!a&&n.startsWith("http"),g=!a&&!v;return s.jsxs(kt,{onClick:m,children:[s.jsx(fe,{onClick:b,children:t}),s.jsx(Et,{onClick:x}),a&&s.jsx(Rt,{controls:!0,src:ue(n)}),v&&s.jsx(Bt,{src:ue(n)}),g&&s.jsx(fe,{onClick:C,children:n})]})};Se.propTypes={el:y.object,sortByDate:y.bool,setSortByDate:y.func,$active:y.bool,$hovered:y.bool,setLiColor:y.func};const Te=({el:e,isForm:i,setIsForm:l})=>{const h=B(),{user:d}=W(),{activeCluster:p}=R(),[o,t]=S.useState(""),{_id:n,element:$,caption:j}=e,b=i+42,{register:C,watch:x,setValue:m,handleSubmit:a,setFocus:v}=Ze({mode:"onBlur",defaultValues:{element:$,caption:j}});S.useEffect(()=>{v("element"),o&&$.trim().startsWith("der")?m("element",o+$.replace("der","").trim()+", "):o&&$.trim().startsWith("die")?m("element",o+$.replace("die","").trim()+", "):o&&$.trim().startsWith("das")?m("element",o+$.replace("das","").trim()+", "):o?m("element",o+$+", "):m("element",o+$)},[o,$,v,m]),S.useEffect(()=>{const A=async u=>{u.key==="+"&&(u.preventDefault(),await c(),a(g)()),u.key==="Enter"&&(u.preventDefault(),a(g)()),u.key==="Escape"&&l(!1)};return addEventListener("keydown",A),()=>{removeEventListener("keydown",A)}},[]);const g=A=>{const u=d.lang;let f=A.element.split(/\s+/).join(" ").trim(),k=A.caption.trim();f.endsWith(",")&&(f=f.substring(0,f.length-1)),f.includes("·")&&(f=f.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),h(Q({_id:n,lang:u,element:f,caption:k})).then(h(be())),l(!1)},r=()=>{o===""&&t("der "),o==="der "&&t("die "),o==="die "&&t("das "),o==="das "&&t("")},c=async()=>{const A=x("element"),u={from:p.lang,to:d.lang},f=await ae(A,u,d.engine);m("caption",f)};return s.jsxs(wt,{onSubmit:a(g),children:[s.jsx(me,{...C("element"),style:{height:b}}),s.jsxs(Ct,{children:[s.jsx(Tt,{type:"button",onClick:()=>l(b),children:s.jsx(ze,{size:"16px"})}),s.jsx(_t,{type:"button",onClick:r,children:s.jsx(Je,{size:"18px"})}),s.jsx(Ee,{type:"button",onClick:c,children:s.jsx(Ve,{size:"16px"})}),s.jsx(St,{children:s.jsx(Oe,{size:"16px"})})]}),s.jsx(me,{...C("caption"),style:{height:b}})]})};Te.propTypes={el:y.object,isForm:y.oneOfType([y.bool,y.number]),setIsForm:y.func};const _e=({el:e,index:i,length:l,sortByDate:h,setSortByDate:d,translateAll:p,liColor:o,setLiColor:t})=>{const n=B(),{elementTrash:$,activeElement:j}=I(),[b,C]=S.useState(!1),{_id:x,favorite:m,checked:a}=e,v=$.find(f=>f._id===x),g=()=>{n(Q({_id:x,favorite:!m}))},r=()=>{n(Q({_id:x,checked:!a}))},c=()=>n(Ke(e)),A=f=>{if(b)C(!1);else{const k=f.target.closest("div").clientHeight;C(k)}},u=x===(j==null?void 0:j._id);return s.jsxs(xt,{id:u?"active-element":null,licolor:o,children:[s.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(vt,{$hovered:m,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:g}),s.jsx(Ye,{size:"20px"})]}),s.jsxs(yt,{$hovered:a,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:a,onChange:r}),s.jsx(Pe,{size:"15px"})]}),b&&l===i+1&&s.jsx(Ee,{onClick:p,children:s.jsx(Me,{size:"16px"})})]}),b&&s.jsx(Te,{el:e,isForm:b,setIsForm:C}),!b&&s.jsx(Se,{el:e,sortByDate:h,setSortByDate:d,setLiColor:t}),s.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(At,{$hovered:v,onClick:c,children:s.jsx(Ge,{size:"16px"})}),s.jsx(jt,{onClick:A,children:s.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:y.object,index:y.number,length:y.number,sortByDate:y.bool,setSortByDate:y.func,translateAll:y.func,liColor:y.string,setLiColor:y.func};const Lt=w.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Wt=()=>{const e=B(),{ref:i,inView:l,entry:h}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:d}=W(),{activeCluster:p}=R(),{allElements:o,elementTrash:t,elementFilter:n}=I(),[$,j]=S.useState(It);let{elementSelect:b}=I();b=b||[];const[C,x]=S.useState(!1),[m,a]=S.useState(!0);S.useEffect(()=>{p&&e(be({cluster:p._id})).unwrap().then(({result:u})=>{if(!p.activeEl)return;const f=u.elements.find(({_id:k})=>k===p.activeEl);e($e(f))}).then(()=>{const u=document.getElementById("active-element");(()=>{u==null||u.scrollIntoView({block:"center",behavior:"smooth"})})(),a(!1)})},[]);const v=o.filter(u=>u.cluster===(p==null?void 0:p._id)).sort((u,f)=>u.createdAt.localeCompare(f.createdAt)),r=(()=>{const u=t.map(f=>f._id);return b.includes("trash")?v.filter(f=>u.includes(f._id)):v})().filter(({element:u,caption:f,favorite:k,checked:L})=>{const D=u.toLowerCase().replace("·","").includes(n)||u.toLowerCase().includes(n)||f.toLowerCase().includes(n),z=b.includes("wordlist")?D&&et(u):D,V=()=>b.some(Z=>["favorite","unfavorite"].includes(Z))?b.includes("favorite")?z&&k===!0:z&&k===!1:z;return(()=>b.some(Z=>["checked","unchecked"].includes(Z))?b.includes("checked")?V()&&L===!0:V()&&L===!1:V())()}).sort(C?(u,f)=>f.createdAt.localeCompare(u.createdAt):(u,f)=>u.createdAt.localeCompare(f.createdAt)),c=async()=>{const u=d.lang;let f=0;await r.forEach(async k=>{if(f>1)return;const{_id:L,element:D}=k;if(!D.startsWith("[")||u!==k.lang){const z={from:p.lang,to:u},V=await ae(D,z,d.engine);e(Q({_id:L,lang:u,caption:V})),f=f+1}})},A=window.innerHeight<(h==null?void 0:h.target.getBoundingClientRect().y)+(h==null?void 0:h.target.getBoundingClientRect().height)*1.5;return s.jsxs(s.Fragment,{children:[s.jsxs(Lt,{children:[r.map((u,f,k)=>s.jsx(_e,{el:u,index:f,length:k.length,sortByDate:C,setSortByDate:x,translateAll:c,liColor:$,setLiColor:j},u._id)),s.jsxs("div",{ref:i,children:[s.jsx(xe,{}),s.jsx(ve,{className:!l||!A?"shown":"hidden"}),s.jsx(Ae,{className:!l||!A?"shown":"hidden",filtredElements:r,setLiColor:j})]})]}),m&&s.jsx(qe,{})]})},{s:ge,m:Ft}=T.indents,Gt=()=>s.jsx(re,{$p:`0 ${Ft} ${ge} ${ge}`,children:s.jsx(Wt,{})});export{Gt as default};
