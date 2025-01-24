import{T as J,r as S,t as T,P as A,u as L,b as D,q as I,j as t,S as oe,U as P,w as se,D as ce,E as ie,K as N,R as Be,V as Re,Q as B,y as F,W as Le,X as Ie,Y as Fe,s as E,Z as De,_ as Y,$ as We,n as O,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Q,a6 as be,F as re,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-4087712c.js";import{r as He,H as Ne,T as Ye}from"./index.esm-bc3bacda.js";import{w as Qe}from"./writeClipboard-613c55ac.js";import{v as Xe,u as Ze}from"./index.esm-8f4f5dd0.js";import{a as Je}from"./index.esm-319d3eb9.js";const et=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:tt}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt={google:"",deepl:tt},ae=async(e,{from:i,to:a},h)=>{J.engine=h,J.key=nt[h];try{let r=await J(`${e}`,{from:i,to:a});return r.split(/\s+/).length===1&&(r=r.toLocaleLowerCase()),a.includes("en")&&e.toLowerCase().includes("uhr")&&(r=r.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),r}catch(r){return r.message}},M=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],G=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var le=new Map,U=new WeakMap,de=0,st=void 0;function rt(e){return e?(U.has(e)||(de+=1,U.set(e,de.toString())),U.get(e)):"0"}function lt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?rt(e.root):e[i]}`).toString()}function ot(e){const i=lt(e);let a=le.get(i);if(!a){const h=new Map;let r;const p=new IntersectionObserver(u=>{u.forEach(s=>{var d;const $=s.isIntersecting&&r.some(j=>s.intersectionRatio>=j);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=$),(d=h.get(s.target))==null||d.forEach(j=>{j($,s)})})},e);r=p.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:i,observer:p,elements:h},le.set(i,a)}return a}function at(e,i,a={},h=st){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const d=e.getBoundingClientRect();return i(h,{isIntersecting:h,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:r,observer:p,elements:u}=ot(a),s=u.get(e)||[];return u.has(e)||u.set(e,s),s.push(i),p.observe(e),function(){s.splice(s.indexOf(i),1),s.length===0&&(u.delete(e),p.unobserve(e)),u.size===0&&(p.disconnect(),le.delete(r))}}function ct({threshold:e,delay:i,trackVisibility:a,rootMargin:h,root:r,triggerOnce:p,skip:u,initialInView:s,fallbackInView:d,onChange:$}={}){var j;const[x,C]=S.useState(null),v=S.useRef($),[m,l]=S.useState({inView:!!s,entry:void 0});v.current=$,S.useEffect(()=>{if(u||!x)return;let o;return o=at(x,(b,c)=>{l({inView:b,entry:c}),v.current&&v.current(b,c),c.isIntersecting&&p&&o&&(o(),o=void 0)},{root:r,rootMargin:h,threshold:e,trackVisibility:a,delay:i},d),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,x,r,h,p,u,a,d,i]);const y=(j=m.entry)==null?void 0:j.target,g=S.useRef(void 0);!x&&y&&!p&&!u&&g.current!==y&&(g.current=y,l({inView:!!s,entry:void 0}));const n=[C,m.inView,m.entry];return n.ref=n[0],n.inView=n[1],n.entry=n[2],n}const{backgroundHoverd:K,white:q,borderLight:H}=T.colors,xe=()=>{const e=L(),{user:i}=D(),{activeCluster:a}=I(),h=({value:s})=>{e(se({_id:a._id,lang:s})).unwrap().then(d=>e(ce(d.result.cluster)))},r=({value:s})=>{e(se({_id:a._id,rate:s})).unwrap().then(d=>e(ce(d.result.cluster)))},p=({value:s})=>{const d=new FormData;d.append("lang",s),e(ie(d))},u=({value:s})=>{const d=new FormData;d.append("rate",s),e(ie(d))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(P,{options:M,defaultValue:M.find(s=>s.value===(a==null?void 0:a.lang)),onChange:h,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(s=>s.value==(a==null?void 0:a.rate)),onChange:r,placeholder:"Rate...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:M,defaultValue:M.find(s=>s.value===i.lang),onChange:p,placeholder:"Language...",$ol:K,$b:q,$bh:H}),t.jsx(P,{options:G,defaultValue:G.find(s=>s.value==i.rate),onChange:u,placeholder:"Rate...",$ol:K,$b:q,$bh:H})]})};xe.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:it}=T.shadows,ut=()=>{const e=L(),{user:i}=D(),{activeCluster:a}=I();S.useEffect(()=>{const r=async p=>{p.key==="d"&&p.metaKey&&(p.prevent,await h())};return addEventListener("keydown",r),()=>{removeEventListener("keydown",r)}},[]);const h=async r=>{const p=window.getSelection().toString();p&&await Qe(p);const u=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),s={from:a.lang,to:i.lang},d=await ae(u,s,i.engine),{_id:$}=a;try{const j={cluster:$,element:"[]",caption:u},x={cluster:$,element:u,caption:d,favorite:!0,checked:u.split(/\s+/).length<20},C=u.includes("https://")?j:x;e(Re(C)),r.target.blur()}catch(j){r.target.blur(),B.error(`Invalid element, ${j.message}`)}};return t.jsx(N,{onClick:h,$s:"m",$round:!0,$bs:it,children:t.jsx(Be,{size:18})})},{button:dt}=T.shadows,pt=()=>{const e=L(),{elementTrash:i}=F(),a=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(i.map(h=>h._id).join("&"))).unwrap().then(()=>e(Ie()))};return t.jsx(N,{onClick:a,$s:"m",$round:!0,$bs:dt,children:t.jsx(Ne,{size:16})})},{m:ht,s:mt}=T.indents,ve=({className:e})=>{const{pathname:i}=Fe(),{elementTrash:a}=F(),{activeCluster:h}=I(),r=a.length>0?" 1fr":"",p=h?" 1fr":"",u=r+p;if(i.includes("/element"))return t.jsxs(oe,{className:e,$m:`${mt} ${ht}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:u,children:[p&&t.jsx(ut,{}),r&&t.jsx(pt,{})]})};ve.propTypes={className:A.string};const{colors:ee}=T,ft=E.div`
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
`,ye=({onClick:e})=>t.jsx(ft,{onClick:e,children:t.jsx(De,{size:"35px"})});ye.propTypes={onClick:A.func};const{background:te}=T.colors,{button:pe}=T.shadows,{m:gt,s:$t}=T.indents,Ae=({className:e,filtredElements:i,setLiColor:a})=>{const{user:h}=D(),{activeCluster:r}=I(),{activeElement:p}=F(),u=v=>{if(!v.length)return;let m="",l=0;const y=v.reduce((g,n)=>(g[n.lang]||(g[n.lang]=0),g[n.lang]+=1,g),{});for(const g in y)y[g]>l&&(l=y[g],m=g);return m},s=i.length?u(i):h.lang,d=(v,m)=>v.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),$=({text:v,playList:m,divider:l})=>{let y="";for(let g=0;g<m.length;g+=1){let n=m[g][v];n.endsWith(".")||n.endsWith("!")||n.endsWith("?")||n.endsWith('"')?y+=d(n,l).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(": ",`:${l} `).replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9.").replaceAll(`${l}`,v==="caption"?`@±@${m[g].lang}${l}`:`${l}`):m[g].element.startsWith("[")||(v==="caption"&&(n.includes(" [")&&(n=n.substring(0,n.indexOf(" ["))),n=`${n}@±@${m[g].lang}`),y+=n+l)}return y},j=v=>{a(te);const m="$*@",l=i.findIndex(n=>n.element===p.element),y=i.splice(l===-1?0:l),g=Y({setLiColor:a,divider:m,text:$({text:"element",playList:y,divider:m}),lang:r.lang,rate:r.rate});v.target.blur(),g&&B.error(g)},x=v=>{const m="$*@";a(te);const l=i.findIndex(n=>n.element===p.element),y=i.splice(l===-1?0:l),g=Y({setLiColor:a,divider:m,text:$({text:"caption",playList:y,divider:m}),lang:s,rate:h.rate});v.target.blur(),g&&B.error(g)},C=v=>{a(te);let m="";const l="$*@",y=i.findIndex(o=>o.element===p.element),g=i.splice(y===-1?0:y);for(let o=0;o<g.length;o+=1){const{element:b,caption:c,lang:f}=g[o];if(!b.startsWith("[")){const k=d(b,""),_=c.includes(" [")?c.substring(0,c.indexOf(" [")):c;m+=k+`@±@${f}`+_+l}}const n=We({setLiColor:a,divider:l,text:m,lang:r.lang,rate:h.rate});v.target.blur(),n&&B.error(n)};return t.jsxs(oe,{className:e,$m:`${$t} ${gt}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(N,{onClick:j,$s:"m",$round:!0,$bs:pe,children:(r==null?void 0:r.lang.at(0).toUpperCase())+(r==null?void 0:r.lang.substring(1))}),t.jsx(ye,{onClick:C}),t.jsx(N,{onClick:x,$s:"m",$round:!0,$bs:pe,children:(s==null?void 0:s.at(0).toUpperCase())+(s==null?void 0:s.substring(1))})]})};Ae.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:w,shadows:he,indents:ne}=T,bt=O`
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
`,W=O`
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
  ${W}

  opacity: ${({$hovered:e})=>e?1:0};
`,jt=E.button`
  ${W}

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
  ${W}
`,Tt=E.button`
  ${W}
`,we=E.button`
  ${W}
`,_t=E.button`
  ${W}
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
`,Se=({el:e,sortByDate:i,setSortByDate:a,setLiColor:h})=>{const r=L(),{user:p}=D(),{activeCluster:u}=I(),{element:s,caption:d}=e,$="$*@",j=(n,o)=>{let b="";return o?(n.trim().endsWith(".")||n.trim().endsWith("!")||n.trim().endsWith("?")||n.endsWith('"')?b=n.trim().replaceAll(", `",`;${o} `).replaceAll(" `",`${o} `).replaceAll(",`",";").replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${o}`).replaceAll(".",`.${o}`).replaceAll(",",`,${o}`).replaceAll("!",`!${o}`).replaceAll("?",`?${o}`).replaceAll(": ",`:${o} `).replaceAll(`0.${o}`,"0.").replaceAll(`1.${o}`,"1.").replaceAll(`2.${o}`,"2.").replaceAll(`3.${o}`,"3.").replaceAll(`4.${o}`,"4.").replaceAll(`5.${o}`,"5.").replaceAll(`6.${o}`,"6.").replaceAll(`7.${o}`,"7.").replaceAll(`8.${o}`,"8.").replaceAll(`9.${o}`,"9."):b=n.trim()+o,b.includes("[")?b.substring(0,b.indexOf("["))+o:b):n},x=n=>{const o=Y({setLiColor:h,divider:$,text:j(s,$),lang:u.lang,rate:u.rate});n.target.blur(),o&&B.error(o)},C=n=>{const o=Y({setLiColor:h,divider:$,text:j(d,$),lang:e.lang,rate:p.rate});n.target.blur(),o&&B.error(o)},v=n=>{a(!i),i?B.success("Below is Recent"):B.success("Above is Recent"),n.stopPropagation()},m=n=>{const{_id:o}=u;r($e(e)),n.currentTarget.closest("li").id!=="active-element"&&r(se({_id:o,activeEl:e._id}))},l=d.endsWith("mp3"),y=!l&&d.startsWith("http"),g=!l&&!y;return t.jsxs(kt,{onClick:m,children:[t.jsx(fe,{onClick:x,children:s}),t.jsx(wt,{onClick:v}),l&&t.jsx(Rt,{controls:!0,src:ue(d)}),y&&t.jsx(Bt,{src:ue(d)}),g&&t.jsx(fe,{onClick:C,children:d})]})};Se.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Te=({el:e,isForm:i,setIsForm:a})=>{const h=L(),{user:r}=D(),{activeCluster:p}=I(),[u,s]=S.useState(""),{_id:d,element:$,caption:j}=e,x=i+42,{register:C,watch:v,setValue:m,handleSubmit:l,setFocus:y}=Ze({mode:"onBlur",defaultValues:{element:$,caption:j}});S.useEffect(()=>{y("element"),u&&$.trim().startsWith("der")?m("element",u+$.replace("der","").trim()+", "):u&&$.trim().startsWith("die")?m("element",u+$.replace("die","").trim()+", "):u&&$.trim().startsWith("das")?m("element",u+$.replace("das","").trim()+", "):u?m("element",u+$+", "):m("element",u+$)},[u,$,y,m]),S.useEffect(()=>{const b=async c=>{c.key==="+"&&(c.preventDefault(),await o(),l(g)()),c.key==="Enter"&&(c.preventDefault(),l(g)()),c.key==="Escape"&&a(!1)};return addEventListener("keydown",b),()=>{removeEventListener("keydown",b)}},[]);const g=b=>{const c=r.lang;let f=b.element.split(/\s+/).join(" ").trim(),k=b.caption.trim();f.endsWith(",")&&(f=f.substring(0,f.length-1)),f.includes("·")&&(f=f.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),h(Q({_id:d,lang:c,element:f,caption:k})).then(h(be())),a(!1)},n=()=>{u===""&&s("der "),u==="der "&&s("die "),u==="die "&&s("das "),u==="das "&&s("")},o=async()=>{let b=v("element");const c=[".","!","?"].includes(b.at(b.length-1)),f=!c&&b.split(/\s+/);["der","die","das"].includes(f[0])&&(b=f[1]);const k=!c&&b.split(",");k.length===3&&(b=r.lang==="en"?"to "+k[0]+",":k[0]+",");const _={from:p.lang,to:r.lang},R=await ae(b,_,r.engine);m("caption",R)};return t.jsxs(Et,{onSubmit:l(g),children:[t.jsx(me,{...C("element"),style:{height:x}}),t.jsxs(Ct,{children:[t.jsx(Tt,{type:"button",onClick:()=>a(x),children:t.jsx(ze,{size:"16px"})}),t.jsx(_t,{type:"button",onClick:n,children:t.jsx(Je,{size:"18px"})}),t.jsx(we,{type:"button",onClick:o,children:t.jsx(Ve,{size:"16px"})}),t.jsx(St,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...C("caption"),style:{height:x}})]})};Te.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const _e=({el:e,index:i,length:a,sortByDate:h,setSortByDate:r,translateAll:p,liColor:u,setLiColor:s})=>{const d=L(),{elementTrash:$,activeElement:j}=F(),[x,C]=S.useState(!1),{_id:v,favorite:m,checked:l}=e,y=$.find(f=>f._id===v),g=()=>{d(Q({_id:v,favorite:!m}))},n=()=>{d(Q({_id:v,checked:!l}))},o=()=>d(Ke(e)),b=f=>{if(x)C(!1);else{const k=f.target.closest("div").clientHeight;C(k)}},c=v===(j==null?void 0:j._id);return t.jsxs(xt,{id:c?"active-element":null,licolor:u,children:[t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(vt,{$hovered:m,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:g}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(yt,{$hovered:l,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:n}),t.jsx(Pe,{size:"15px"})]}),x&&a===i+1&&t.jsx(we,{onClick:p,children:t.jsx(Me,{size:"16px"})})]}),x&&t.jsx(Te,{el:e,isForm:x,setIsForm:C}),!x&&t.jsx(Se,{el:e,sortByDate:h,setSortByDate:r,setLiColor:s}),t.jsxs(re,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(At,{$hovered:y,onClick:o,children:t.jsx(Ge,{size:"16px"})}),t.jsx(jt,{onClick:b,children:t.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Lt=E.ul`
  width: 100%;
  list-style: none;
`,{white:It}=T.colors,Ft=()=>{const e=L(),{ref:i,inView:a,entry:h}=ct({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:r}=D(),{activeCluster:p}=I(),{allElements:u,elementTrash:s,elementFilter:d}=F(),[$,j]=S.useState(It);let{elementSelect:x}=F();x=x||[];const[C,v]=S.useState(!1),[m,l]=S.useState(!0);S.useEffect(()=>{p&&e(be({cluster:p._id})).unwrap().then(({result:c})=>{if(!p.activeEl)return;const f=c.elements.find(({_id:k})=>k===p.activeEl);e($e(f))}).then(()=>{const c=document.getElementById("active-element");(()=>{c==null||c.scrollIntoView({block:"center",behavior:"smooth"})})(),l(!1)})},[]);const y=u.filter(c=>c.cluster===(p==null?void 0:p._id)).sort((c,f)=>c.createdAt.localeCompare(f.createdAt)),n=(()=>{const c=s.map(f=>f._id);return x.includes("trash")?y.filter(f=>c.includes(f._id)):y})().filter(({element:c,caption:f,favorite:k,checked:_})=>{const R=c.toLowerCase().replace("·","").includes(d)||c.toLowerCase().includes(d)||f.toLowerCase().includes(d),z=x.includes("wordlist")?R&&et(c):R,V=()=>x.some(Z=>["favorite","unfavorite"].includes(Z))?x.includes("favorite")?z&&k===!0:z&&k===!1:z;return(()=>x.some(Z=>["checked","unchecked"].includes(Z))?x.includes("checked")?V()&&_===!0:V()&&_===!1:V())()}).sort(C?(c,f)=>f.createdAt.localeCompare(c.createdAt):(c,f)=>c.createdAt.localeCompare(f.createdAt)),o=async()=>{const c=r.lang;let f=0;await n.forEach(async k=>{if(f>1)return;const{_id:_,element:R}=k;if(!R.startsWith("[")||c!==k.lang){const z={from:p.lang,to:c},V=await ae(R,z,r.engine);e(Q({_id:_,lang:c,caption:V})),f=f+1}})},b=window.innerHeight<(h==null?void 0:h.target.getBoundingClientRect().y)+(h==null?void 0:h.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[n.map((c,f,k)=>t.jsx(_e,{el:c,index:f,length:k.length,sortByDate:C,setSortByDate:v,translateAll:o,liColor:$,setLiColor:j},c._id)),t.jsxs("div",{ref:i,children:[t.jsx(xe,{}),t.jsx(ve,{className:!a||!b?"shown":"hidden"}),t.jsx(Ae,{className:!a||!b?"shown":"hidden",filtredElements:n,setLiColor:j})]})]}),m&&t.jsx(qe,{})]})},{s:ge,m:Dt}=T.indents,Gt=()=>t.jsx(re,{$p:`0 ${Dt} ${ge} ${ge}`,children:t.jsx(Ft,{})});export{Gt as default};
