import{T as Z,r as S,t as T,P as A,u as L,b as F,q as I,j as t,S as oe,U as O,w as ne,D as ce,E as ie,K as H,R as Be,V as Re,Q as R,y as D,W as Le,X as Ie,Y as De,s as E,Z as Fe,_ as N,$ as We,n as V,a0 as ue,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as Y,a6 as be,F as se,C as Pe,a7 as Me,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-f8621d8a.js";import{r as He,H as Ne,T as Ye}from"./index.esm-01c5011e.js";import{w as Qe}from"./writeClipboard-c06af4b9.js";import{v as Xe,u as Ze}from"./index.esm-88312a55.js";import{a as Je}from"./index.esm-b5e652f0.js";const{VITE_DEEPL_API_KEY:et}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},tt={google:"",deepl:et},le=async(e,{from:i,to:l},h)=>{Z.engine=h,Z.key=tt[h];try{let o=await Z(`${e}`,{from:i,to:l});return o.split(/\s+/).length===1&&(o=o.toLocaleLowerCase()),l.includes("en")&&e.toLowerCase().includes("uhr")&&(o=o.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),o}catch(o){return o.message}},P=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],M=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var re=new Map,G=new WeakMap,de=0,nt=void 0;function st(e){return e?(G.has(e)||(de+=1,G.set(e,de.toString())),G.get(e)):"0"}function rt(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?st(e.root):e[i]}`).toString()}function ot(e){const i=rt(e);let l=re.get(i);if(!l){const h=new Map;let o;const p=new IntersectionObserver(u=>{u.forEach(s=>{var d;const $=s.isIntersecting&&o.some(j=>s.intersectionRatio>=j);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=$),(d=h.get(s.target))==null||d.forEach(j=>{j($,s)})})},e);o=p.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),l={id:i,observer:p,elements:h},re.set(i,l)}return l}function lt(e,i,l={},h=nt){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const d=e.getBoundingClientRect();return i(h,{isIntersecting:h,target:e,intersectionRatio:typeof l.threshold=="number"?l.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:o,observer:p,elements:u}=ot(l),s=u.get(e)||[];return u.has(e)||u.set(e,s),s.push(i),p.observe(e),function(){s.splice(s.indexOf(i),1),s.length===0&&(u.delete(e),p.unobserve(e)),u.size===0&&(p.disconnect(),re.delete(o))}}function at({threshold:e,delay:i,trackVisibility:l,rootMargin:h,root:o,triggerOnce:p,skip:u,initialInView:s,fallbackInView:d,onChange:$}={}){var j;const[x,C]=S.useState(null),v=S.useRef($),[m,r]=S.useState({inView:!!s,entry:void 0});v.current=$,S.useEffect(()=>{if(u||!x)return;let a;return a=lt(x,(b,c)=>{r({inView:b,entry:c}),v.current&&v.current(b,c),c.isIntersecting&&p&&a&&(a(),a=void 0)},{root:o,rootMargin:h,threshold:e,trackVisibility:l,delay:i},d),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,x,o,h,p,u,l,d,i]);const y=(j=m.entry)==null?void 0:j.target,g=S.useRef(void 0);!x&&y&&!p&&!u&&g.current!==y&&(g.current=y,r({inView:!!s,entry:void 0}));const n=[C,m.inView,m.entry];return n.ref=n[0],n.inView=n[1],n.entry=n[2],n}const{backgroundHoverd:U,white:K,borderLight:q}=T.colors,xe=()=>{const e=L(),{user:i}=F(),{activeCluster:l}=I(),h=({value:s})=>{e(ne({_id:l._id,lang:s})).unwrap().then(d=>e(ce(d.result.cluster)))},o=({value:s})=>{e(ne({_id:l._id,rate:s})).unwrap().then(d=>e(ce(d.result.cluster)))},p=({value:s})=>{const d=new FormData;d.append("lang",s),e(ie(d))},u=({value:s})=>{const d=new FormData;d.append("rate",s),e(ie(d))};return t.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[t.jsx(O,{options:P,defaultValue:P.find(s=>s.value===(l==null?void 0:l.lang)),onChange:h,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(s=>s.value==(l==null?void 0:l.rate)),onChange:o,placeholder:"Rate...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:P,defaultValue:P.find(s=>s.value===i.lang),onChange:p,placeholder:"Language...",$ol:U,$b:K,$bh:q}),t.jsx(O,{options:M,defaultValue:M.find(s=>s.value==i.rate),onChange:u,placeholder:"Rate...",$ol:U,$b:K,$bh:q})]})};xe.propTypes={filtredElements:A.array,setLiColor:A.func};const{button:ct}=T.shadows,it=()=>{const e=L(),{user:i}=F(),{activeCluster:l}=I();S.useEffect(()=>{const o=async p=>{p.key==="d"&&p.metaKey&&(p.prevent,await h())};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const h=async o=>{const p=window.getSelection().toString();p&&await Qe(p);const u=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),s={from:l.lang,to:i.lang},d=await le(u,s,i.engine),{_id:$}=l;try{const j={cluster:$,element:"[]",caption:u},x={cluster:$,element:u,caption:d,favorite:!0,checked:u.split(/\s+/).length<20},C=u.includes("https://")?j:x;e(Re(C)),o.target.blur()}catch(j){o.target.blur(),R.error(`Invalid element, ${j.message}`)}};return t.jsx(H,{onClick:h,$s:"m",$round:!0,$bs:ct,children:t.jsx(Be,{size:18})})},{button:ut}=T.shadows,dt=()=>{const e=L(),{elementTrash:i}=D(),l=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(Le(i.map(h=>h._id).join("&"))).unwrap().then(()=>e(Ie()))};return t.jsx(H,{onClick:l,$s:"m",$round:!0,$bs:ut,children:t.jsx(Ne,{size:16})})},{m:pt,s:ht}=T.indents,ve=({className:e})=>{const{pathname:i}=De(),{elementTrash:l}=D(),{activeCluster:h}=I(),o=l.length>0?" 1fr":"",p=h?" 1fr":"",u=o+p;if(i.includes("/element"))return t.jsxs(oe,{className:e,$m:`${ht} ${pt}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:u,children:[p&&t.jsx(it,{}),o&&t.jsx(dt,{})]})};ve.propTypes={className:A.string};const{colors:J}=T,mt=E.div`
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
`,ye=({onClick:e})=>t.jsx(mt,{onClick:e,children:t.jsx(Fe,{size:"26px"})});ye.propTypes={onClick:A.func};const{background:ee}=T.colors,{button:pe}=T.shadows,{m:ft,s:gt}=T.indents,Ae=({className:e,filtredElements:i,setLiColor:l})=>{const{user:h}=F(),{activeCluster:o}=I(),{activeElement:p}=D(),u=v=>{if(!v.length)return;let m="",r=0;const y=v.reduce((g,n)=>(g[n.lang]||(g[n.lang]=0),g[n.lang]+=1,g),{});for(const g in y)y[g]>r&&(r=y[g],m=g);return m},s=i.length?u(i):h.lang,d=(v,m)=>v.replaceAll(",`",";").replaceAll(" `",`${m} `),$=({text:v,playList:m,divider:r})=>{let y="";for(let g=0;g<m.length;g+=1){let n=m[g][v];n.endsWith(".")||n.endsWith("!")||n.endsWith("?")||n.endsWith('"')?y+=d(n,r).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${r}`).replaceAll(".",`.${r}`).replaceAll(",",`,${r}`).replaceAll("!",`!${r}`).replaceAll("?",`?${r}`).replaceAll(": ",`:${r} `).replaceAll(`0.${r}`,"0.").replaceAll(`1.${r}`,"1.").replaceAll(`2.${r}`,"2.").replaceAll(`3.${r}`,"3.").replaceAll(`4.${r}`,"4.").replaceAll(`5.${r}`,"5.").replaceAll(`6.${r}`,"6.").replaceAll(`7.${r}`,"7.").replaceAll(`8.${r}`,"8.").replaceAll(`9.${r}`,"9.").replaceAll(`${r}`,v==="caption"?`@±@${m[g].lang}${r}`:`${r}`):m[g].element.startsWith("[")||(v==="caption"&&(n.includes(" [")&&(n=n.substring(0,n.indexOf(" ["))),n=`${n}@±@${m[g].lang}`),y+=n+r)}return y},j=v=>{l(ee);const m="$*@",r=i.findIndex(n=>n.element===p.element),y=i.splice(r===-1?0:r),g=N({setLiColor:l,divider:m,text:$({text:"element",playList:y,divider:m}),lang:o.lang,rate:o.rate});v.target.blur(),g&&R.error(g)},x=v=>{const m="$*@";l(ee);const r=i.findIndex(n=>n.element===p.element),y=i.splice(r===-1?0:r),g=N({setLiColor:l,divider:m,text:$({text:"caption",playList:y,divider:m}),lang:s,rate:h.rate});v.target.blur(),g&&R.error(g)},C=v=>{l(ee);let m="";const r="$*@",y=i.findIndex(a=>a.element===p.element),g=i.splice(y===-1?0:y);for(let a=0;a<g.length;a+=1){const{element:b,caption:c,lang:f}=g[a];if(!b.startsWith("[")){const k=d(b,""),_=c.includes(" [")?c.substring(0,c.indexOf(" [")):c;m+=k+`@±@${f}`+_+r}}const n=We({setLiColor:l,divider:r,text:m,lang:o.lang,rate:h.rate});v.target.blur(),n&&R.error(n)};return t.jsxs(oe,{className:e,$m:`${gt} ${ft}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:"1fr 0.5fr 1fr",children:[t.jsx(H,{onClick:j,$s:"m",$round:!0,$bs:pe,children:(o==null?void 0:o.lang.at(0).toUpperCase())+(o==null?void 0:o.lang.substring(1))}),t.jsx(ye,{onClick:C}),t.jsx(H,{onClick:x,$s:"m",$round:!0,$bs:pe,children:(s==null?void 0:s.at(0).toUpperCase())+(s==null?void 0:s.substring(1))})]})};Ae.propTypes={className:A.string,filtredElements:A.array,setLiColor:A.func};const{colors:w,shadows:he,indents:te}=T,$t=V`
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
`,bt=E.li`
  ${$t}

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
`,je=V`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Xe}
  }
`,xt=E.label`
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
`,vt=E.label`
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
`,W=V`
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
`,yt=E.button`
  ${W}

  opacity: ${({$hovered:e})=>e?1:0};
`,At=E.button`
  ${W}

  opacity: 0;
`,{colors:Q,indents:ke}=T,Ee=V`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,jt=E.div`
  ${Ee}
`,kt=E.form`
  ${Ee}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,me=E.textarea`
  outline: none;
  border: 1px solid ${Q.accent};
  border-radius: ${ke.xs};
  resize: none;
`,Et=E.div`
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
`,wt=E.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Ct=E.button`
  ${W}
`,St=E.button`
  ${W}
`,we=E.button`
  ${W}
`,Tt=E.button`
  ${W}
`,fe=E.button`
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
`,Ce=V`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,_t=E.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,Bt=E.audio`
  ${Ce}
`,Se=({el:e,sortByDate:i,setSortByDate:l,setLiColor:h})=>{const o=L(),{user:p}=F(),{activeCluster:u}=I(),{element:s,caption:d}=e,$="$*@",j=(n,a)=>{let b="";return a?(n.trim().endsWith(".")||n.trim().endsWith("!")||n.trim().endsWith("?")||n.endsWith('"')?b=n.trim().replaceAll(",`",";").replaceAll(" `",`${a} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${a}`).replaceAll(".",`.${a}`).replaceAll(",",`,${a}`).replaceAll("!",`!${a}`).replaceAll("?",`?${a}`).replaceAll(": ",`:${a} `).replaceAll(`0.${a}`,"0.").replaceAll(`1.${a}`,"1.").replaceAll(`2.${a}`,"2.").replaceAll(`3.${a}`,"3.").replaceAll(`4.${a}`,"4.").replaceAll(`5.${a}`,"5.").replaceAll(`6.${a}`,"6.").replaceAll(`7.${a}`,"7.").replaceAll(`8.${a}`,"8.").replaceAll(`9.${a}`,"9."):b=n.trim()+a,b.includes("[")?b.substring(0,b.indexOf("["))+a:b):n},x=n=>{const a=N({setLiColor:h,divider:$,text:j(s,$),lang:u.lang,rate:u.rate});n.target.blur(),a&&R.error(a)},C=n=>{const a=N({setLiColor:h,divider:$,text:j(d,$),lang:e.lang,rate:p.rate});n.target.blur(),a&&R.error(a)},v=n=>{l(!i),i?R.success("Below is Recent"):R.success("Above is Recent"),n.stopPropagation()},m=n=>{const{_id:a}=u;o($e(e)),n.currentTarget.closest("li").id!=="active-element"&&o(ne({_id:a,activeEl:e._id}))},r=d.endsWith("mp3"),y=!r&&d.startsWith("http"),g=!r&&!y;return t.jsxs(jt,{onClick:m,children:[t.jsx(fe,{onClick:x,children:s}),t.jsx(Et,{onClick:v}),r&&t.jsx(Bt,{controls:!0,src:ue(d)}),y&&t.jsx(_t,{src:ue(d)}),g&&t.jsx(fe,{onClick:C,children:d})]})};Se.propTypes={el:A.object,sortByDate:A.bool,setSortByDate:A.func,$active:A.bool,$hovered:A.bool,setLiColor:A.func};const Te=({el:e,isForm:i,setIsForm:l})=>{const h=L(),{user:o}=F(),{activeCluster:p}=I(),[u,s]=S.useState(""),{_id:d,element:$,caption:j}=e,x=i+42,{register:C,watch:v,setValue:m,handleSubmit:r,setFocus:y}=Ze({mode:"onBlur",defaultValues:{element:$,caption:j}});S.useEffect(()=>{y("element"),u&&$.trim().startsWith("der")?m("element",u+$.replace("der","").trim()+", "):u&&$.trim().startsWith("die")?m("element",u+$.replace("die","").trim()+", "):u&&$.trim().startsWith("das")?m("element",u+$.replace("das","").trim()+", "):u?m("element",u+$+", "):m("element",u+$)},[u,$,y,m]),S.useEffect(()=>{const b=async c=>{c.key==="+"&&(c.preventDefault(),await a(),r(g)()),c.key==="Enter"&&(c.preventDefault(),r(g)()),c.key==="Escape"&&l(!1)};return addEventListener("keydown",b),()=>{removeEventListener("keydown",b)}},[]);const g=b=>{const c=o.lang;let f=b.element.split(/\s+/).join(" ").trim(),k=b.caption.trim();f.endsWith(",")&&(f=f.substring(0,f.length-1)),f.includes("·")&&(f=f.replaceAll(" ·",",").replaceAll("· ",", ")),k.endsWith(",")&&(k=k.substring(0,k.length-1)),h(Y({_id:d,lang:c,element:f,caption:k})).then(h(be())),l(!1)},n=()=>{u===""&&s("der "),u==="der "&&s("die "),u==="die "&&s("das "),u==="das "&&s("")},a=async()=>{let b=v("element");const c=[".","!","?"].includes(b.at(b.length-1)),f=!c&&b.split(/\s+/);["der","die","das"].includes(f[0])&&(b=f[1]);const k=!c&&b.split(",");k.length===3&&(b=k[0]+",");const _={from:p.lang,to:o.lang},B=await le(b,_,o.engine);m("caption",B)};return t.jsxs(kt,{onSubmit:r(g),children:[t.jsx(me,{...C("element"),style:{height:x}}),t.jsxs(wt,{children:[t.jsx(St,{type:"button",onClick:()=>l(x),children:t.jsx(ze,{size:"16px"})}),t.jsx(Tt,{type:"button",onClick:n,children:t.jsx(Je,{size:"18px"})}),t.jsx(we,{type:"button",onClick:a,children:t.jsx(Ve,{size:"16px"})}),t.jsx(Ct,{children:t.jsx(Oe,{size:"16px"})})]}),t.jsx(me,{...C("caption"),style:{height:x}})]})};Te.propTypes={el:A.object,isForm:A.oneOfType([A.bool,A.number]),setIsForm:A.func};const _e=({el:e,index:i,length:l,sortByDate:h,setSortByDate:o,translateAll:p,liColor:u,setLiColor:s})=>{const d=L(),{elementTrash:$,activeElement:j}=D(),[x,C]=S.useState(!1),{_id:v,favorite:m,checked:r}=e,y=$.find(f=>f._id===v),g=()=>{d(Y({_id:v,favorite:!m}))},n=()=>{d(Y({_id:v,checked:!r}))},a=()=>d(Ke(e)),b=f=>{if(x)C(!1);else{const k=f.target.closest("div").clientHeight;C(k)}},c=v===(j==null?void 0:j._id);return t.jsxs(bt,{id:c?"active-element":null,licolor:u,children:[t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(xt,{$hovered:m,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:m,onChange:g}),t.jsx(Ye,{size:"20px"})]}),t.jsxs(vt,{$hovered:r,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:r,onChange:n}),t.jsx(Pe,{size:"15px"})]}),x&&l===i+1&&t.jsx(we,{onClick:p,children:t.jsx(Me,{size:"16px"})})]}),x&&t.jsx(Te,{el:e,isForm:x,setIsForm:C}),!x&&t.jsx(Se,{el:e,sortByDate:h,setSortByDate:o,setLiColor:s}),t.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(yt,{$hovered:y,onClick:a,children:t.jsx(Ge,{size:"16px"})}),t.jsx(At,{onClick:b,children:t.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:A.object,index:A.number,length:A.number,sortByDate:A.bool,setSortByDate:A.func,translateAll:A.func,liColor:A.string,setLiColor:A.func};const Rt=E.ul`
  width: 100%;
  list-style: none;
`,{white:Lt}=T.colors,It=()=>{const e=L(),{ref:i,inView:l,entry:h}=at({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:o}=F(),{activeCluster:p}=I(),{allElements:u,elementTrash:s,elementFilter:d}=D(),[$,j]=S.useState(Lt);let{elementSelect:x}=D();x=x||[];const[C,v]=S.useState(!1),[m,r]=S.useState(!0);S.useEffect(()=>{p&&e(be({cluster:p._id})).unwrap().then(({result:c})=>{if(!p.activeEl)return;const f=c.elements.find(({_id:k})=>k===p.activeEl);e($e(f))}).then(()=>{const c=document.getElementById("active-element");(()=>{c==null||c.scrollIntoView({block:"center",behavior:"smooth"})})(),r(!1)})},[]);const y=u.filter(c=>c.cluster===(p==null?void 0:p._id)).sort((c,f)=>c.createdAt.localeCompare(f.createdAt)),n=(()=>{const c=s.map(f=>f._id);return x.includes("trash")?y.filter(f=>c.includes(f._id)):y})().filter(({element:c,caption:f,favorite:k,checked:_})=>{const B=c.toLowerCase().replace("·","").includes(d)||c.toLowerCase().includes(d)||f.toLowerCase().includes(d),z=()=>x.some(X=>["favorite","unfavorite"].includes(X))?x.includes("favorite")?B&&k===!0:B&&k===!1:B;return(()=>x.some(X=>["checked","unchecked"].includes(X))?x.includes("checked")?z()&&_===!0:z()&&_===!1:z())()}).sort(C?(c,f)=>f.createdAt.localeCompare(c.createdAt):(c,f)=>c.createdAt.localeCompare(f.createdAt)),a=async()=>{const c=o.lang;let f=0;await n.forEach(async k=>{if(f>1)return;const{_id:_,element:B}=k;if(!B.startsWith("[")||c!==k.lang){const z={from:p.lang,to:c},ae=await le(B,z,o.engine);e(Y({_id:_,lang:c,caption:ae})),f=f+1}})},b=window.innerHeight<(h==null?void 0:h.target.getBoundingClientRect().y)+(h==null?void 0:h.target.getBoundingClientRect().height)*1.5;return t.jsxs(t.Fragment,{children:[t.jsxs(Rt,{children:[n.map((c,f,k)=>t.jsx(_e,{el:c,index:f,length:k.length,sortByDate:C,setSortByDate:v,translateAll:a,liColor:$,setLiColor:j},c._id)),t.jsxs("div",{ref:i,children:[t.jsx(xe,{}),t.jsx(ve,{className:!l||!b?"shown":"hidden"}),t.jsx(Ae,{className:!l||!b?"shown":"hidden",filtredElements:n,setLiColor:j})]})]}),m&&t.jsx(qe,{})]})},{s:ge,m:Dt}=T.indents,Pt=()=>t.jsx(se,{$p:`0 ${Dt} ${ge} ${ge}`,children:t.jsx(It,{})});export{Pt as default};
