import{T as J,r as S,s as A,t as _,P as v,j as s,U as Re,u as I,b as V,q as F,y as D,S as be,V as P,K as N,w as ne,D as oe,E as ae,W as Q,Q as B,X as Be,R as Le,Y as Ie,Z as De,_ as Fe,$ as We,n as O,a0 as ce,a1 as $e,a2 as ze,a3 as Ve,a4 as Oe,a5 as X,a6 as xe,F as se,C as Me,a7 as Pe,A as Ge,z as Ue,a8 as Ke,a9 as qe}from"./index-15626ec6.js";import{r as He,H as Ye,T as Ne}from"./index.esm-8ca48e4e.js";import{w as Qe}from"./writeClipboard-643d0110.js";import{v as Xe,u as Ze}from"./index.esm-37a49063.js";import{a as Je}from"./index.esm-69896cfd.js";const{VITE_DEEPL_API_KEY:et}={VITE_GOOGLE_CLIENT_ID:"689266183428-lh3lmpaqnd2qd6t93voa8s6ipt3836q1.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyDqQndBxYEuOG7F6iYDqQoiNF90tptRmBQ",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},tt={google:"",deepl:et},le=async(e,{from:u,to:h},d)=>{J.engine=d,J.key=tt[d];try{let o=await J(`${e}`,{from:u,to:h});return o.split(/\s+/).length===1&&(o=o.toLocaleLowerCase()),h.includes("en")&&e.toLowerCase().includes("uhr")&&(o=o.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),o}catch(o){return o.message}},G=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],U=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var re=new Map,K=new WeakMap,ie=0,nt=void 0;function st(e){return e?(K.has(e)||(ie+=1,K.set(e,ie.toString())),K.get(e)):"0"}function rt(e){return Object.keys(e).sort().filter(u=>e[u]!==void 0).map(u=>`${u}_${u==="root"?st(e.root):e[u]}`).toString()}function lt(e){const u=rt(e);let h=re.get(u);if(!h){const d=new Map;let o;const p=new IntersectionObserver(a=>{a.forEach(m=>{var f;const g=m.isIntersecting&&o.some(x=>m.intersectionRatio>=x);e.trackVisibility&&typeof m.isVisible>"u"&&(m.isVisible=g),(f=d.get(m.target))==null||f.forEach(x=>{x(g,m)})})},e);o=p.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),h={id:u,observer:p,elements:d},re.set(u,h)}return h}function ot(e,u,h={},d=nt){if(typeof window.IntersectionObserver>"u"&&d!==void 0){const f=e.getBoundingClientRect();return u(d,{isIntersecting:d,target:e,intersectionRatio:typeof h.threshold=="number"?h.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:o,observer:p,elements:a}=lt(h),m=a.get(e)||[];return a.has(e)||a.set(e,m),m.push(u),p.observe(e),function(){m.splice(m.indexOf(u),1),m.length===0&&(a.delete(e),p.unobserve(e)),a.size===0&&(p.disconnect(),re.delete(o))}}function at({threshold:e,delay:u,trackVisibility:h,rootMargin:d,root:o,triggerOnce:p,skip:a,initialInView:m,fallbackInView:f,onChange:g}={}){var x;const[b,k]=S.useState(null),w=S.useRef(g),[y,j]=S.useState({inView:!!m,entry:void 0});w.current=g,S.useEffect(()=>{if(a||!b)return;let t;return t=ot(b,(i,n)=>{j({inView:i,entry:n}),w.current&&w.current(i,n),n.isIntersecting&&p&&t&&(t(),t=void 0)},{root:o,rootMargin:d,threshold:e,trackVisibility:h,delay:u},f),()=>{t&&t()}},[Array.isArray(e)?e.toString():e,b,o,d,p,a,h,f,u]);const C=(x=y.entry)==null?void 0:x.target,c=S.useRef(void 0);!b&&C&&!p&&!a&&c.current!==C&&(c.current=C,j({inView:!!m,entry:void 0}));const r=[k,y.inView,y.entry];return r.ref=r[0],r.inView=r[1],r.entry=r[2],r}const{colors:ee}=_,ct=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${ee.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${ee.placeholder};
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
`,ve=({onClick:e})=>s.jsx(ct,{onClick:e,children:s.jsx(Re,{size:"26px"})});ve.propTypes={onClick:v.func};const{background:te,backgroundHoverd:q,white:H,borderLight:Y}=_.colors,{button:ue}=_.shadows,ye=({filtredElements:e,setLiColor:u})=>{const h=I(),{user:d}=V(),{activeCluster:o}=F(),{activeElement:p}=D(),a=c=>{if(!c.length)return;let r="",t=0;const i=c.reduce((n,l)=>(n[l.lang]||(n[l.lang]=0),n[l.lang]+=1,n),{});for(const n in i)i[n]>t&&(t=i[n],r=n);return r},m=e.length?a(e):d.lang,f=({value:c})=>{h(ne({_id:o._id,lang:c})).unwrap().then(r=>h(oe(r.result.cluster)))},g=({value:c})=>{h(ne({_id:o._id,rate:c})).unwrap().then(r=>h(oe(r.result.cluster)))},x=({value:c})=>{const r=new FormData;r.append("lang",c),h(ae(r))},b=({value:c})=>{const r=new FormData;r.append("rate",c),h(ae(r))},k=(c,r)=>c.replaceAll(",`",";").replaceAll(" `",`${r} `),w=({text:c,playList:r,divider:t})=>{let i="";for(let n=0;n<r.length;n+=1){let l=r[n][c];l.endsWith(".")||l.endsWith("!")||l.endsWith("?")||l.endsWith('"')?i+=k(l,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(": ",`:${t} `).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`${t}`,c==="caption"?`@±@${r[n].lang}${t}`:`${t}`):r[n].element.startsWith("[")||(c==="caption"&&(l.includes(" [")&&(l=l.substring(0,l.indexOf(" ["))),l=`${l}@±@${r[n].lang}`),i+=l+t)}return i},y=c=>{u(te);const r="$*@",t=e.findIndex(l=>l.element===p.element),i=e.splice(t===-1?0:t),n=Q({setLiColor:u,divider:r,text:w({text:"element",playList:i,divider:r}),lang:o.lang,rate:o.rate});c.target.blur(),n&&B.error(n)},j=c=>{const r="$*@";u(te);const t=e.findIndex(l=>l.element===p.element),i=e.splice(t===-1?0:t),n=Q({setLiColor:u,divider:r,text:w({text:"caption",playList:i,divider:r}),lang:m,rate:d.rate});c.target.blur(),n&&B.error(n)},C=c=>{u(te);let r="";const t="$*@",i=e.findIndex($=>$.element===p.element),n=e.splice(i===-1?0:i);for(let $=0;$<n.length;$+=1){const{element:R,caption:T,lang:L}=n[$];if(!R.startsWith("[")){const M=k(R,""),z=T.includes(" [")?T.substring(0,T.indexOf(" [")):T;r+=M+`@±@${L}`+z+t}}const l=Be({setLiColor:u,divider:t,text:r,lang:o.lang,rate:d.rate});c.target.blur(),l&&B.error(l)};return s.jsxs(be,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[s.jsx(P,{options:G,defaultValue:G.find(c=>c.value===(o==null?void 0:o.lang)),onChange:f,placeholder:"Language...",$ol:q,$b:H,$bh:Y}),s.jsx(P,{options:U,defaultValue:U.find(c=>c.value==(o==null?void 0:o.rate)),onChange:g,placeholder:"Rate...",$ol:q,$b:H,$bh:Y}),s.jsx(N,{onClick:y,$s:"m",$bs:ue,children:(o==null?void 0:o.lang.at(0).toUpperCase())+(o==null?void 0:o.lang.substring(1))}),s.jsx(ve,{onClick:C}),s.jsx(N,{onClick:j,$s:"m",$bs:ue,children:(m==null?void 0:m.at(0).toUpperCase())+(m==null?void 0:m.substring(1))}),s.jsx(P,{options:G,defaultValue:G.find(c=>c.value===d.lang),onChange:x,placeholder:"Language...",$ol:q,$b:H,$bh:Y}),s.jsx(P,{options:U,defaultValue:U.find(c=>c.value==d.rate),onChange:b,placeholder:"Rate...",$ol:q,$b:H,$bh:Y})]})};ye.propTypes={filtredElements:v.array,setLiColor:v.func};const{button:it}=_.shadows,ut=()=>{const e=I(),{user:u}=V(),{activeCluster:h}=F();S.useEffect(()=>{const o=async p=>{p.key==="d"&&p.metaKey&&(p.prevent,await d())};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const d=async o=>{const p=window.getSelection().toString();p&&await Qe(p);const a=(await He()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),m={from:h.lang,to:u.lang},f=await le(a,m,u.engine),{_id:g}=h;try{const x={cluster:g,element:"[]",caption:a},b={cluster:g,element:a,caption:f,favorite:!0,checked:a.split(/\s+/).length<20},k=a.includes("https://")?x:b;e(Ie(k)),o.target.blur()}catch(x){o.target.blur(),B.error(`Invalid element, ${x.message}`)}};return s.jsx(N,{onClick:d,$s:"m",$round:!0,$bs:it,children:s.jsx(Le,{size:18})})},{button:dt}=_.shadows,pt=()=>{const e=I(),{elementTrash:u}=D(),h=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(De(u.map(d=>d._id).join("&"))).unwrap().then(()=>e(Fe()))};return s.jsx(N,{onClick:h,$s:"m",$round:!0,$bs:dt,children:s.jsx(Ye,{size:16})})},{m:de}=_.indents,Ae=({className:e})=>{const{pathname:u}=We(),{elementTrash:h}=D(),{activeCluster:d}=F(),o=h.length>0?" 1fr":"",p=d?" 1fr":"",a=o+p;if(u.includes("/element"))return s.jsxs(be,{className:e,$m:`${de} ${de}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:a,children:[p&&s.jsx(ut,{}),o&&s.jsx(pt,{})]})};Ae.propTypes={className:v.string};const{colors:E,shadows:pe,indents:he}=_,ht=O`
  margin-bottom: 7px;
  padding-block: ${he.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${he.xs};
  font-size: 22px;
`,mt=A.li`
  ${ht}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${E.border};
    background-color: ${E.background};
    box-shadow: ${pe.back};

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
    box-shadow: ${pe.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ke=O`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Xe}
  }
`,ft=A.label`
  ${ke}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?E.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?E.yellow:E.border};
  }
  &:hover svg {
    stroke: ${E.placeholder};
  }
`,gt=A.label`
  ${ke}
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
`,W=O`
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
`,bt=A.button`
  ${W}

  opacity: ${({$hovered:e})=>e?1:0};
`,$t=A.button`
  ${W}

  opacity: 0;
`,{colors:Z,indents:je}=_,Ee=O`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,xt=A.div`
  ${Ee}
`,vt=A.form`
  ${Ee}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,me=A.textarea`
  outline: none;
  border: 1px solid ${Z.accent};
  border-radius: ${je.xs};
  resize: none;
`,yt=A.div`
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
    border: 1px solid ${Z.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${Z.placeholder};
  }
`,At=A.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,kt=A.button`
  ${W}
`,jt=A.button`
  ${W}
`,we=A.button`
  ${W}
`,Et=A.button`
  ${W}
`,fe=A.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${je.xs};
  color: ${Z.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ce=O`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,wt=A.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,Ct=A.audio`
  ${Ce}
`,Se=({el:e,sortByDate:u,setSortByDate:h,setLiColor:d})=>{const o=I(),{user:p}=V(),{activeCluster:a}=F(),{element:m,caption:f}=e,g="$*@",x=(r,t)=>{let i="";return t?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?i=r.trim().replaceAll(",`",";").replaceAll(" `",`${t} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(": ",`:${t} `).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9."):i=r.trim()+t,i.includes("[")?i.substring(0,i.indexOf("["))+t:i):r},b=r=>{const t=Q({setLiColor:d,divider:g,text:x(m,g),lang:a.lang,rate:a.rate});r.target.blur(),t&&B.error(t)},k=r=>{const t=Q({setLiColor:d,divider:g,text:x(f,g),lang:e.lang,rate:p.rate});r.target.blur(),t&&B.error(t)},w=r=>{h(!u),u?B.success("Below is Recent"):B.success("Above is Recent"),r.stopPropagation()},y=r=>{const{_id:t}=a;o($e(e)),r.currentTarget.closest("li").id!=="active-element"&&o(ne({_id:t,activeEl:e._id}))},j=f.endsWith("mp3"),C=!j&&f.startsWith("http"),c=!j&&!C;return s.jsxs(xt,{onClick:y,children:[s.jsx(fe,{onClick:b,children:m}),s.jsx(yt,{onClick:w}),j&&s.jsx(Ct,{controls:!0,src:ce(f)}),C&&s.jsx(wt,{src:ce(f)}),c&&s.jsx(fe,{onClick:k,children:f})]})};Se.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func,$active:v.bool,$hovered:v.bool,setLiColor:v.func};const Te=({el:e,isForm:u,setIsForm:h})=>{const d=I(),{user:o}=V(),{activeCluster:p}=F(),[a,m]=S.useState(""),{_id:f,element:g,caption:x}=e,b=u+42,{register:k,watch:w,setValue:y,handleSubmit:j,setFocus:C}=Ze({mode:"onBlur",defaultValues:{element:g,caption:x}});S.useEffect(()=>{C("element"),a&&g.trim().startsWith("der")?y("element",a+g.replace("der","").trim()+", "):a&&g.trim().startsWith("die")?y("element",a+g.replace("die","").trim()+", "):a&&g.trim().startsWith("das")?y("element",a+g.replace("das","").trim()+", "):a?y("element",a+g+", "):y("element",a+g)},[a,g,C,y]),S.useEffect(()=>{const i=async n=>{n.key==="+"&&(n.preventDefault(),await t(),j(c)()),n.key==="Enter"&&(n.preventDefault(),j(c)()),n.key==="Escape"&&h(!1)};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[]);const c=i=>{const n=o.lang;let l=i.element.split(/\s+/).join(" ").trim(),$=i.caption.trim();l.endsWith(",")&&(l=l.substring(0,l.length-1)),l.includes("·")&&(l=l.replaceAll(" ·",",").replaceAll("· ",", ")),$.endsWith(",")&&($=$.substring(0,$.length-1)),d(X({_id:f,lang:n,element:l,caption:$})).then(d(xe())),h(!1)},r=()=>{a===""&&m("der "),a==="der "&&m("die "),a==="die "&&m("das "),a==="das "&&m("")},t=async()=>{let i=w("element");const n=[".","!","?"].includes(i.at(i.length-1)),l=!n&&i.split(/\s+/);["der","die","das"].includes(l[0])&&(i=l[1]);const $=!n&&i.split(",");$.length===3&&(i=$[0]+",");const R={from:p.lang,to:o.lang},T=await le(i,R,o.engine);y("caption",T)};return s.jsxs(vt,{onSubmit:j(c),children:[s.jsx(me,{...k("element"),style:{height:b}}),s.jsxs(At,{children:[s.jsx(jt,{type:"button",onClick:()=>h(b),children:s.jsx(ze,{size:"16px"})}),s.jsx(Et,{onClick:r,children:s.jsx(Je,{size:"18px"})}),s.jsx(we,{type:"button",onClick:t,children:s.jsx(Ve,{size:"16px"})}),s.jsx(kt,{children:s.jsx(Oe,{size:"16px"})})]}),s.jsx(me,{...k("caption"),style:{height:b}})]})};Te.propTypes={el:v.object,isForm:v.oneOfType([v.bool,v.number]),setIsForm:v.func};const _e=({el:e,index:u,length:h,sortByDate:d,setSortByDate:o,translateAll:p,liColor:a,setLiColor:m})=>{const f=I(),{elementTrash:g,activeElement:x}=D(),[b,k]=S.useState(!1),{_id:w,favorite:y,checked:j}=e,C=g.find(l=>l._id===w),c=()=>{f(X({_id:w,favorite:!y}))},r=()=>{f(X({_id:w,checked:!j}))},t=()=>f(Ke(e)),i=l=>{if(b)k(!1);else{const $=l.target.closest("div").clientHeight;k($)}},n=w===(x==null?void 0:x._id);return s.jsxs(mt,{id:n?"active-element":null,licolor:a,children:[s.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(ft,{$hovered:y,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:y,onChange:c}),s.jsx(Ne,{size:"20px"})]}),s.jsxs(gt,{$hovered:j,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:j,onChange:r}),s.jsx(Me,{size:"15px"})]}),b&&h===u+1&&s.jsx(we,{onClick:p,children:s.jsx(Pe,{size:"16px"})})]}),b&&s.jsx(Te,{el:e,isForm:b,setIsForm:k}),!b&&s.jsx(Se,{el:e,sortByDate:d,setSortByDate:o,setLiColor:m}),s.jsxs(se,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(bt,{$hovered:C,onClick:t,children:s.jsx(Ge,{size:"16px"})}),s.jsx($t,{onClick:i,children:s.jsx(Ue,{size:"15px"})})]})]})};_e.propTypes={el:v.object,index:v.number,length:v.number,sortByDate:v.bool,setSortByDate:v.func,translateAll:v.func,liColor:v.string,setLiColor:v.func};const St=A.ul`
  width: 100%;
  list-style: none;
`,{white:Tt}=_.colors,_t=()=>{const e=I(),{ref:u,inView:h,entry:d}=at({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:o}=V(),{activeCluster:p}=F(),{allElements:a,elementTrash:m,elementFilter:f}=D(),[g,x]=S.useState(Tt);let{elementSelect:b}=D();b=b||[];const[k,w]=S.useState(!1),[y,j]=S.useState(!0);S.useEffect(()=>{p&&e(xe({cluster:p._id})).unwrap().then(({result:n})=>{if(!p.activeEl)return;const l=n.elements.find(({_id:$})=>$===p.activeEl);e($e(l))}).then(()=>{const n=document.getElementById("active-element");(()=>{n==null||n.scrollIntoView({block:"center",behavior:"smooth"})})(),j(!1)})},[]);const C=a.filter(n=>n.cluster===(p==null?void 0:p._id)).sort((n,l)=>n.createdAt.localeCompare(l.createdAt)),r=(()=>{const n=m.map(l=>l._id);return b.includes("trash")?C.filter(l=>n.includes(l._id)):C})().filter(({element:n,caption:l,favorite:$,checked:R})=>{const T=n.toLowerCase().replace("·","").includes(f)||n.toLowerCase().includes(f)||l.toLowerCase().includes(f),L=()=>b.some(z=>["favorite","unfavorite"].includes(z))?b.includes("favorite")?T&&$===!0:T&&$===!1:T;return(()=>b.some(z=>["checked","unchecked"].includes(z))?b.includes("checked")?L()&&R===!0:L()&&R===!1:L())()}).sort(k?(n,l)=>l.createdAt.localeCompare(n.createdAt):(n,l)=>n.createdAt.localeCompare(l.createdAt)),t=async()=>{const n=o.lang;let l=0;await r.forEach(async $=>{if(l>1)return;const{_id:R,element:T}=$;if(!T.startsWith("[")||n!==$.lang){const L={from:p.lang,to:n},M=await le(T,L,o.engine);e(X({_id:R,lang:n,caption:M})),l=l+1}})},i=window.innerHeight<(d==null?void 0:d.target.getBoundingClientRect().y)+(d==null?void 0:d.target.getBoundingClientRect().height)*1.5;return s.jsxs(s.Fragment,{children:[s.jsxs(St,{children:[r.map((n,l,$)=>s.jsx(_e,{el:n,index:l,length:$.length,sortByDate:k,setSortByDate:w,translateAll:t,liColor:g,setLiColor:x},n._id)),s.jsxs("div",{ref:u,children:[s.jsx(ye,{filtredElements:r,setLiColor:x}),s.jsx(Ae,{className:!h||!i?"shown":"hidden"})]})]}),y&&s.jsx(qe,{})]})},{s:ge,m:Rt}=_.indents,Wt=()=>s.jsx(se,{$p:`0 ${Rt} ${ge} ${ge}`,children:s.jsx(_t,{})});export{Wt as default};
