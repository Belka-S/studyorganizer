import{r as S,s as j,t as B,P as v,j as s,T as Be,u as W,b as V,q as I,y as L,S as ge,U,K as q,w as te,D as le,E as oe,V as Q,Q as _,W as Re,R as _e,X as re,Y as Fe,Z as We,_ as Le,$ as Ie,n as M,a0 as ae,a1 as be,a2 as ze,a3 as De,a4 as Ve,a5 as Y,a6 as $e,F as ne,C as Me,a7 as Oe,A as Ue,z as He,a8 as Pe,a9 as Ge}from"./index-2346d907.js";import{r as Ke,H as Ne,T as Xe}from"./index.esm-23ac869c.js";import{w as qe}from"./writeClipboard-34772610.js";import{v as Qe,u as Ye}from"./index.esm-8a661be4.js";import{a as Ze}from"./index.esm-17e4e9a4.js";const H=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],P=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var se=new Map,G=new WeakMap,ce=0,Je=void 0;function et(e){return e?(G.has(e)||(ce+=1,G.set(e,ce.toString())),G.get(e)):"0"}function tt(e){return Object.keys(e).sort().filter(d=>e[d]!==void 0).map(d=>`${d}_${d==="root"?et(e.root):e[d]}`).toString()}function nt(e){const d=tt(e);let m=se.get(d);if(!m){const p=new Map;let o;const u=new IntersectionObserver(a=>{a.forEach(h=>{var f;const g=h.isIntersecting&&o.some(x=>h.intersectionRatio>=x);e.trackVisibility&&typeof h.isVisible>"u"&&(h.isVisible=g),(f=p.get(h.target))==null||f.forEach(x=>{x(g,h)})})},e);o=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),m={id:d,observer:u,elements:p},se.set(d,m)}return m}function st(e,d,m={},p=Je){if(typeof window.IntersectionObserver>"u"&&p!==void 0){const f=e.getBoundingClientRect();return d(p,{isIntersecting:p,target:e,intersectionRatio:typeof m.threshold=="number"?m.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:o,observer:u,elements:a}=nt(m),h=a.get(e)||[];return a.has(e)||a.set(e,h),h.push(d),u.observe(e),function(){h.splice(h.indexOf(d),1),h.length===0&&(a.delete(e),u.unobserve(e)),a.size===0&&(u.disconnect(),se.delete(o))}}function rt({threshold:e,delay:d,trackVisibility:m,rootMargin:p,root:o,triggerOnce:u,skip:a,initialInView:h,fallbackInView:f,onChange:g}={}){var x;const[b,A]=S.useState(null),C=S.useRef(g),[y,k]=S.useState({inView:!!h,entry:void 0});C.current=g,S.useEffect(()=>{if(a||!b)return;let t;return t=st(b,(i,n)=>{k({inView:i,entry:n}),C.current&&C.current(i,n),n.isIntersecting&&u&&t&&(t(),t=void 0)},{root:o,rootMargin:p,threshold:e,trackVisibility:m,delay:d},f),()=>{t&&t()}},[Array.isArray(e)?e.toString():e,b,o,p,u,a,m,f,d]);const E=(x=y.entry)==null?void 0:x.target,c=S.useRef(void 0);!b&&E&&!u&&!a&&c.current!==E&&(c.current=E,k({inView:!!h,entry:void 0}));const r=[A,y.inView,y.entry];return r.ref=r[0],r.inView=r[1],r.entry=r[2],r}const{colors:J}=B,lt=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${J.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${J.placeholder};
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
`,xe=({onClick:e})=>s.jsx(lt,{onClick:e,children:s.jsx(Be,{size:"26px"})});xe.propTypes={onClick:v.func};const{background:ee,backgroundHoverd:K,white:N,borderLight:X}=B.colors,{button:ie}=B.shadows,ve=({filtredElements:e,setLiColor:d})=>{const m=W(),{user:p}=V(),{activeCluster:o}=I(),{activeElement:u}=L(),a=c=>{if(!c.length)return;let r="",t=0;const i=c.reduce((n,l)=>(n[l.lang]||(n[l.lang]=0),n[l.lang]+=1,n),{});for(const n in i)i[n]>t&&(t=i[n],r=n);return r},h=e.length?a(e):p.lang,f=({value:c})=>{m(te({_id:o._id,lang:c})).unwrap().then(r=>m(le(r.result.cluster)))},g=({value:c})=>{m(te({_id:o._id,rate:c})).unwrap().then(r=>m(le(r.result.cluster)))},x=({value:c})=>{const r=new FormData;r.append("lang",c),m(oe(r))},b=({value:c})=>{const r=new FormData;r.append("rate",c),m(oe(r))},A=(c,r)=>c.replaceAll(",`",";").replaceAll(" `",`${r} `),C=({text:c,playList:r,divider:t})=>{let i="";for(let n=0;n<r.length;n+=1){let l=r[n][c];l.endsWith(".")||l.endsWith("!")||l.endsWith("?")||l.endsWith('"')?i+=A(l,t).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(": ",`:${t} `).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`${t}`,c==="caption"?`@±@${r[n].lang}${t}`:`${t}`):r[n].element.startsWith("[")||(c==="caption"&&(l.includes(" [")&&(l=l.substring(0,l.indexOf(" ["))),l=`${l}@±@${r[n].lang}`),i+=l+t)}return i},y=c=>{d(ee);const r="$*@",t=e.findIndex(l=>l.element===u.element),i=e.splice(t===-1?0:t),n=Q({setLiColor:d,divider:r,text:C({text:"element",playList:i,divider:r}),lang:o.lang,rate:o.rate});c.target.blur(),n&&_.error(n)},k=c=>{const r="$*@";d(ee);const t=e.findIndex(l=>l.element===u.element),i=e.splice(t===-1?0:t),n=Q({setLiColor:d,divider:r,text:C({text:"caption",playList:i,divider:r}),lang:h,rate:p.rate});c.target.blur(),n&&_.error(n)},E=c=>{d(ee);let r="";const t="$*@",i=e.findIndex($=>$.element===u.element),n=e.splice(i===-1?0:i);for(let $=0;$<n.length;$+=1){const{element:R,caption:T,lang:F}=n[$];if(!R.startsWith("[")){const O=A(R,""),D=T.includes(" [")?T.substring(0,T.indexOf(" [")):T;r+=O+`@±@${F}`+D+t}}const l=Re({setLiColor:d,divider:t,text:r,lang:o.lang,rate:p.rate});c.target.blur(),l&&_.error(l)};return s.jsxs(ge,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[s.jsx(U,{options:H,defaultValue:H.find(c=>c.value===(o==null?void 0:o.lang)),onChange:f,placeholder:"Language...",$ol:K,$b:N,$bh:X}),s.jsx(U,{options:P,defaultValue:P.find(c=>c.value==(o==null?void 0:o.rate)),onChange:g,placeholder:"Rate...",$ol:K,$b:N,$bh:X}),s.jsx(q,{onClick:y,$s:"m",$bs:ie,children:(o==null?void 0:o.lang.at(0).toUpperCase())+(o==null?void 0:o.lang.substring(1))}),s.jsx(xe,{onClick:E}),s.jsx(q,{onClick:k,$s:"m",$bs:ie,children:(h==null?void 0:h.at(0).toUpperCase())+(h==null?void 0:h.substring(1))}),s.jsx(U,{options:H,defaultValue:H.find(c=>c.value===p.lang),onChange:x,placeholder:"Language...",$ol:K,$b:N,$bh:X}),s.jsx(U,{options:P,defaultValue:P.find(c=>c.value==p.rate),onChange:b,placeholder:"Rate...",$ol:K,$b:N,$bh:X})]})};ve.propTypes={filtredElements:v.array,setLiColor:v.func};const{button:ot}=B.shadows,at=()=>{const e=W(),{user:d}=V(),{activeCluster:m}=I();S.useEffect(()=>{const o=async u=>{u.key==="d"&&u.metaKey&&(u.prevent,await p())};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[]);const p=async o=>{const u=window.getSelection().toString();u&&await qe(u);const a=(await Ke()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),h={from:m.lang,to:d.lang},f=await re(a,h),{_id:g}=m;try{const x={cluster:g,element:"[]",caption:a},b={cluster:g,element:a,caption:f,favorite:!0,checked:a.split(/\s+/).length<20},A=a.includes("https://")?x:b;e(Fe(A)),o.target.blur()}catch(x){o.target.blur(),_.error(`Invalid element, ${x.message}`)}};return s.jsx(q,{onClick:p,$s:"m",$round:!0,$bs:ot,children:s.jsx(_e,{size:18})})},{button:ct}=B.shadows,it=()=>{const e=W(),{elementTrash:d}=L(),m=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&e(We(d.map(p=>p._id).join("&"))).unwrap().then(()=>e(Le()))};return s.jsx(q,{onClick:m,$s:"m",$round:!0,$bs:ct,children:s.jsx(Ne,{size:16})})},{m:ue}=B.indents,ye=({className:e})=>{const{pathname:d}=Ie(),{elementTrash:m}=L(),{activeCluster:p}=I(),o=m.length>0?" 1fr":"",u=p?" 1fr":"",a=o+u;if(d.includes("/element"))return s.jsxs(ge,{className:e,$m:`${ue} ${ue}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:a,children:[u&&s.jsx(at,{}),o&&s.jsx(it,{})]})};ye.propTypes={className:v.string};const{colors:w,shadows:de,indents:pe}=B,ut=M`
  margin-bottom: 7px;
  padding-block: ${pe.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:e})=>e};
  border-radius: ${pe.xs};
  font-size: 22px;
`,dt=j.li`
  ${ut}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${w.border};
    background-color: ${w.background};
    box-shadow: ${de.back};

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
    box-shadow: ${de.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,je=M`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Qe}
  }
`,pt=j.label`
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
`,ht=j.label`
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
`,z=M`
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
`,mt=j.button`
  ${z}

  opacity: ${({$hovered:e})=>e?1:0};
`,ft=j.button`
  ${z}

  opacity: 0;
`,{colors:Z,indents:Ae}=B,ke=M`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,gt=j.div`
  ${ke}
`,bt=j.form`
  ${ke}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,he=j.textarea`
  outline: none;
  border: 1px solid ${Z.accent};
  border-radius: ${Ae.xs};
  resize: none;
`,$t=j.div`
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
`,xt=j.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,vt=j.button`
  ${z}
`,yt=j.button`
  ${z}
`,we=j.button`
  ${z}
`,jt=j.button`
  ${z}
`,me=j.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Ae.xs};
  color: ${Z.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ce=M`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,At=j.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,kt=j.audio`
  ${Ce}
`,Ee=({el:e,sortByDate:d,setSortByDate:m,setLiColor:p})=>{const o=W(),{user:u}=V(),{activeCluster:a}=I(),{element:h,caption:f}=e,g="$*@",x=(r,t)=>{let i="";return t?(r.trim().endsWith(".")||r.trim().endsWith("!")||r.trim().endsWith("?")||r.endsWith('"')?i=r.trim().replaceAll(",`",";").replaceAll(" `",`${t} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(": ",`:${t} `).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9."):i=r.trim()+t,i.includes("[")?i.substring(0,i.indexOf("["))+t:i):r},b=r=>{const t=Q({setLiColor:p,divider:g,text:x(h,g),lang:a.lang,rate:a.rate});r.target.blur(),t&&_.error(t)},A=r=>{const t=Q({setLiColor:p,divider:g,text:x(f,g),lang:e.lang,rate:u.rate});r.target.blur(),t&&_.error(t)},C=r=>{m(!d),d?_.success("Below is Recent"):_.success("Above is Recent"),r.stopPropagation()},y=r=>{const{_id:t}=a;o(be(e)),r.currentTarget.closest("li").id!=="active-element"&&o(te({_id:t,activeEl:e._id}))},k=f.endsWith("mp3"),E=!k&&f.startsWith("http"),c=!k&&!E;return s.jsxs(gt,{onClick:y,children:[s.jsx(me,{onClick:b,children:h}),s.jsx($t,{onClick:C}),k&&s.jsx(kt,{controls:!0,src:ae(f)}),E&&s.jsx(At,{src:ae(f)}),c&&s.jsx(me,{onClick:A,children:f})]})};Ee.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func,$active:v.bool,$hovered:v.bool,setLiColor:v.func};const Se=({el:e,isForm:d,setIsForm:m})=>{const p=W(),{user:o}=V(),{activeCluster:u}=I(),[a,h]=S.useState(""),{_id:f,element:g,caption:x}=e,b=d+42,{register:A,watch:C,setValue:y,handleSubmit:k,setFocus:E}=Ye({mode:"onBlur",defaultValues:{element:g,caption:x}});S.useEffect(()=>{E("element"),a&&g.trim().startsWith("der")?y("element",a+g.replace("der","").trim()+", "):a&&g.trim().startsWith("die")?y("element",a+g.replace("die","").trim()+", "):a&&g.trim().startsWith("das")?y("element",a+g.replace("das","").trim()+", "):a?y("element",a+g+", "):y("element",a+g)},[a,g,E,y]),S.useEffect(()=>{const i=async n=>{n.key==="+"&&(n.preventDefault(),await t(),k(c)()),n.key==="Enter"&&(n.preventDefault(),k(c)()),n.key==="Escape"&&m(!1)};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[]);const c=i=>{const n=o.lang;let l=i.element.split(/\s+/).join(" ").trim(),$=i.caption.trim();l.endsWith(",")&&(l=l.substring(0,l.length-1)),l.includes("·")&&(l=l.replaceAll(" ·",",").replaceAll("· ",", ")),$.endsWith(",")&&($=$.substring(0,$.length-1)),p(Y({_id:f,lang:n,element:l,caption:$})).then(p($e())),m(!1)},r=()=>{a===""&&h("der "),a==="der "&&h("die "),a==="die "&&h("das "),a==="das "&&h("")},t=async()=>{let i=C("element");const n=[".","!","?"].includes(i.at(i.length-1)),l=!n&&i.split(/\s+/);["der","die","das"].includes(l[0])&&(i=l[1]);const $=!n&&i.split(",");$.length===3&&(i=$[0]+",");const R={from:u.lang,to:o.lang},T=await re(i,R);y("caption",T)};return s.jsxs(bt,{onSubmit:k(c),children:[s.jsx(he,{...A("element"),style:{height:b}}),s.jsxs(xt,{children:[s.jsx(yt,{type:"button",onClick:()=>m(b),children:s.jsx(ze,{size:"16px"})}),s.jsx(jt,{onClick:r,children:s.jsx(Ze,{size:"18px"})}),s.jsx(we,{type:"button",onClick:t,children:s.jsx(De,{size:"16px"})}),s.jsx(vt,{children:s.jsx(Ve,{size:"16px"})})]}),s.jsx(he,{...A("caption"),style:{height:b}})]})};Se.propTypes={el:v.object,isForm:v.oneOfType([v.bool,v.number]),setIsForm:v.func};const Te=({el:e,index:d,length:m,sortByDate:p,setSortByDate:o,translateAll:u,liColor:a,setLiColor:h})=>{const f=W(),{elementTrash:g,activeElement:x}=L(),[b,A]=S.useState(!1),{_id:C,favorite:y,checked:k}=e,E=g.find(l=>l._id===C),c=()=>{f(Y({_id:C,favorite:!y}))},r=()=>{f(Y({_id:C,checked:!k}))},t=()=>f(Pe(e)),i=l=>{if(b)A(!1);else{const $=l.target.closest("div").clientHeight;A($)}},n=C===(x==null?void 0:x._id);return s.jsxs(dt,{id:n?"active-element":null,licolor:a,children:[s.jsxs(ne,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(pt,{$hovered:y,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:y,onChange:c}),s.jsx(Xe,{size:"20px"})]}),s.jsxs(ht,{$hovered:k,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:k,onChange:r}),s.jsx(Me,{size:"15px"})]}),b&&m===d+1&&s.jsx(we,{onClick:u,children:s.jsx(Oe,{size:"16px"})})]}),b&&s.jsx(Se,{el:e,isForm:b,setIsForm:A}),!b&&s.jsx(Ee,{el:e,sortByDate:p,setSortByDate:o,setLiColor:h}),s.jsxs(ne,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(mt,{$hovered:E,onClick:t,children:s.jsx(Ue,{size:"16px"})}),s.jsx(ft,{onClick:i,children:s.jsx(He,{size:"15px"})})]})]})};Te.propTypes={el:v.object,index:v.number,length:v.number,sortByDate:v.bool,setSortByDate:v.func,translateAll:v.func,liColor:v.string,setLiColor:v.func};const wt=j.ul`
  width: 100%;
  list-style: none;
`,{white:Ct}=B.colors,Et=()=>{const e=W(),{ref:d,inView:m,entry:p}=rt({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:o}=V(),{activeCluster:u}=I(),{allElements:a,elementTrash:h,elementFilter:f}=L(),[g,x]=S.useState(Ct);let{elementSelect:b}=L();b=b||[];const[A,C]=S.useState(!1),[y,k]=S.useState(!0);S.useEffect(()=>{u&&e($e({cluster:u._id})).unwrap().then(({result:n})=>{if(!u.activeEl)return;const l=n.elements.find(({_id:$})=>$===u.activeEl);e(be(l))}).then(()=>{const n=document.getElementById("active-element");(()=>{n==null||n.scrollIntoView({block:"center",behavior:"smooth"})})(),k(!1)})},[]);const E=a.filter(n=>n.cluster===(u==null?void 0:u._id)).sort((n,l)=>n.createdAt.localeCompare(l.createdAt)),r=(()=>{const n=h.map(l=>l._id);return b.includes("trash")?E.filter(l=>n.includes(l._id)):E})().filter(({element:n,caption:l,favorite:$,checked:R})=>{const T=n.toLowerCase().replace("·","").includes(f)||n.toLowerCase().includes(f)||l.toLowerCase().includes(f),F=()=>b.some(D=>["favorite","unfavorite"].includes(D))?b.includes("favorite")?T&&$===!0:T&&$===!1:T;return(()=>b.some(D=>["checked","unchecked"].includes(D))?b.includes("checked")?F()&&R===!0:F()&&R===!1:F())()}).sort(A?(n,l)=>l.createdAt.localeCompare(n.createdAt):(n,l)=>n.createdAt.localeCompare(l.createdAt)),t=async()=>{const n=o.lang;let l=0;await r.forEach(async $=>{if(l>1)return;const{_id:R,element:T}=$;if(!T.startsWith("[")||n!==$.lang){const F={from:u.lang,to:n},O=await re(T,F);e(Y({_id:R,lang:n,caption:O})),l=l+1}})},i=window.innerHeight<(p==null?void 0:p.target.getBoundingClientRect().y)+(p==null?void 0:p.target.getBoundingClientRect().height)*1.5;return s.jsxs(s.Fragment,{children:[s.jsxs(wt,{children:[r.map((n,l,$)=>s.jsx(Te,{el:n,index:l,length:$.length,sortByDate:A,setSortByDate:C,translateAll:t,liColor:g,setLiColor:x},n._id)),s.jsxs("div",{ref:d,children:[s.jsx(ve,{filtredElements:r,setLiColor:x}),s.jsx(ye,{className:!m||!i?"shown":"hidden"})]})]}),y&&s.jsx(Ge,{})]})},{s:fe,m:St}=B.indents,Wt=()=>s.jsx(ne,{$p:`0 ${St} ${fe} ${fe}`,children:s.jsx(Et,{})});export{Wt as default};
