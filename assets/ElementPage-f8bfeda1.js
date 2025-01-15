import{r as T,s as A,t as B,P as x,j as r,T as Be,u as W,b as D,q as I,y as L,S as be,U,K as Q,w as te,D as oe,E as le,V as Y,Q as F,W as Re,R as _e,X as re,Y as Fe,Z as We,_ as Le,$ as Ie,n as V,a0 as ae,a1 as $e,a2 as ze,a3 as De,a4 as Ve,a5 as Z,a6 as xe,F as ne,C as Me,a7 as Oe,A as Ue,z as He,a8 as Pe,a9 as Ge}from"./index-809a5a42.js";import{r as Ke,H as Xe,T as qe}from"./index.esm-81ed24a1.js";import{w as Qe}from"./writeClipboard-dbb4eaf3.js";import{a as Ye}from"./index.esm-58ed6c28.js";import{v as Ze,u as Je}from"./index.esm-03ff62ce.js";const H=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],P=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var se=new Map,G=new WeakMap,ce=0,Ne=void 0;function et(t){return t?(G.has(t)||(ce+=1,G.set(t,ce.toString())),G.get(t)):"0"}function tt(t){return Object.keys(t).sort().filter(l=>t[l]!==void 0).map(l=>`${l}_${l==="root"?et(t.root):t[l]}`).toString()}function nt(t){const l=tt(t);let m=se.get(l);if(!m){const d=new Map;let c;const p=new IntersectionObserver(f=>{f.forEach(h=>{var i;const v=h.isIntersecting&&c.some(b=>h.intersectionRatio>=b);t.trackVisibility&&typeof h.isVisible>"u"&&(h.isVisible=v),(i=d.get(h.target))==null||i.forEach(b=>{b(v,h)})})},t);c=p.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),m={id:l,observer:p,elements:d},se.set(l,m)}return m}function st(t,l,m={},d=Ne){if(typeof window.IntersectionObserver>"u"&&d!==void 0){const i=t.getBoundingClientRect();return l(d,{isIntersecting:d,target:t,intersectionRatio:typeof m.threshold=="number"?m.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:c,observer:p,elements:f}=nt(m),h=f.get(t)||[];return f.has(t)||f.set(t,h),h.push(l),p.observe(t),function(){h.splice(h.indexOf(l),1),h.length===0&&(f.delete(t),p.unobserve(t)),f.size===0&&(p.disconnect(),se.delete(c))}}function rt({threshold:t,delay:l,trackVisibility:m,rootMargin:d,root:c,triggerOnce:p,skip:f,initialInView:h,fallbackInView:i,onChange:v}={}){var b;const[g,E]=T.useState(null),$=T.useRef(v),[k,w]=T.useState({inView:!!h,entry:void 0});$.current=v,T.useEffect(()=>{if(f||!g)return;let e;return e=st(g,(u,s)=>{w({inView:u,entry:s}),$.current&&$.current(u,s),s.isIntersecting&&p&&e&&(e(),e=void 0)},{root:c,rootMargin:d,threshold:t,trackVisibility:m,delay:l},i),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,g,c,d,p,f,m,i,l]);const C=(b=k.entry)==null?void 0:b.target,a=T.useRef(void 0);!g&&C&&!p&&!f&&a.current!==C&&(a.current=C,w({inView:!!h,entry:void 0}));const n=[E,k.inView,k.entry];return n.ref=n[0],n.inView=n[1],n.entry=n[2],n}const{colors:N}=B,ot=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${N.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${N.placeholder};
    /* stroke: ${({$colored:t})=>t&&N.yellow}; */
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
`,ve=({onClick:t})=>r.jsx(ot,{onClick:t,children:r.jsx(Be,{size:"26px"})});ve.propTypes={onClick:x.func};const{background:ee,backgroundHoverd:K,white:X,borderLight:q}=B.colors,{button:ie}=B.shadows,ye=({filtredElements:t,setLiColor:l})=>{const m=W(),{user:d}=D(),{activeCluster:c}=I(),{activeElement:p}=L(),f=a=>{if(!a.length)return;let n="",e=0;const u=a.reduce((s,o)=>(s[o.lang]||(s[o.lang]=0),s[o.lang]+=1,s),{});for(const s in u)u[s]>e&&(e=u[s],n=s);return n},h=t.length?f(t):d.lang,i=({value:a})=>{m(te({_id:c._id,lang:a})).unwrap().then(n=>m(oe(n.result.cluster)))},v=({value:a})=>{m(te({_id:c._id,rate:a})).unwrap().then(n=>m(oe(n.result.cluster)))},b=({value:a})=>{const n=new FormData;n.append("lang",a),m(le(n))},g=({value:a})=>{const n=new FormData;n.append("rate",a),m(le(n))},E=(a,n)=>a.replaceAll(",`",";").replaceAll(" `",`${n} `),$=({text:a,playList:n,divider:e})=>{let u="";for(let s=0;s<n.length;s+=1){let o=n[s][a];o.endsWith(".")||o.endsWith("!")||o.endsWith("?")||o.endsWith('"')?u+=E(o,e).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(": ",`:${e} `).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`${e}`,a==="caption"?`@±@${n[s].lang}${e}`:`${e}`):n[s].element.startsWith("[")||(a==="caption"&&(o.includes(" [")&&(o=o.substring(0,o.indexOf(" ["))),o=`${o}@±@${n[s].lang}`),u+=o+e)}return u},k=a=>{l(ee);const n="$*@",e=t.findIndex(o=>o.element===p.element),u=t.splice(e===-1?0:e),s=Y({setLiColor:l,divider:n,text:$({text:"element",playList:u,divider:n}),lang:c.lang,rate:c.rate});a.target.blur(),s&&F.error(s)},w=a=>{const n="$*@";l(ee);const e=t.findIndex(o=>o.element===p.element),u=t.splice(e===-1?0:e),s=Y({setLiColor:l,divider:n,text:$({text:"caption",playList:u,divider:n}),lang:h,rate:d.rate});a.target.blur(),s&&F.error(s)},C=a=>{l(ee);let n="";const e="$*@",u=t.findIndex(y=>y.element===p.element),s=t.splice(u===-1?0:u);for(let y=0;y<s.length;y+=1){const{element:R,caption:S,lang:_}=s[y];if(!R.startsWith("[")){const O=E(R,""),z=S.includes(" [")?S.substring(0,S.indexOf(" [")):S;n+=O+`@±@${_}`+z+e}}const o=Re({setLiColor:l,divider:e,text:n,lang:c.lang,rate:d.rate});a.target.blur(),o&&F.error(o)};return r.jsxs(be,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[r.jsx(U,{options:H,defaultValue:H.find(a=>a.value===(c==null?void 0:c.lang)),onChange:i,placeholder:"Language...",$ol:K,$b:X,$bh:q}),r.jsx(U,{options:P,defaultValue:P.find(a=>a.value==(c==null?void 0:c.rate)),onChange:v,placeholder:"Rate...",$ol:K,$b:X,$bh:q}),r.jsx(Q,{onClick:k,$s:"m",$bs:ie,children:(c==null?void 0:c.lang.at(0).toUpperCase())+(c==null?void 0:c.lang.substring(1))}),r.jsx(ve,{onClick:C}),r.jsx(Q,{onClick:w,$s:"m",$bs:ie,children:(h==null?void 0:h.at(0).toUpperCase())+(h==null?void 0:h.substring(1))}),r.jsx(U,{options:H,defaultValue:H.find(a=>a.value===d.lang),onChange:b,placeholder:"Language...",$ol:K,$b:X,$bh:q}),r.jsx(U,{options:P,defaultValue:P.find(a=>a.value==d.rate),onChange:g,placeholder:"Rate...",$ol:K,$b:X,$bh:q})]})};ye.propTypes={filtredElements:x.array,setLiColor:x.func};const{button:lt}=B.shadows,at=()=>{const t=W(),{user:l}=D(),{activeCluster:m}=I();T.useEffect(()=>{const c=async p=>{p.key==="d"&&p.metaKey&&(p.prevent,await d())};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[]);const d=async c=>{const p=window.getSelection().toString();p&&await Qe(p);const f=(await Ke()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),h={from:m.lang,to:l.lang},i=await re(f,h),{_id:v}=m;try{const b=f.split(/\s+/).length!==1?{element:f,caption:i,cluster:v,checked:!0}:f.includes("https://")?{element:"[]",caption:f,cluster:v}:{element:f,caption:i,cluster:v,favorite:!0};t(Fe(b)),c.target.blur()}catch(b){c.target.blur(),F.error(`Invalid element, ${b.message}`)}};return r.jsx(Q,{onClick:d,$s:"m",$round:!0,$bs:lt,children:r.jsx(_e,{size:18})})},{button:ct}=B.shadows,it=()=>{const t=W(),{elementTrash:l}=L(),m=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&t(We(l.map(d=>d._id).join("&"))).unwrap().then(()=>t(Le()))};return r.jsx(Q,{onClick:m,$s:"m",$round:!0,$bs:ct,children:r.jsx(Xe,{size:16})})},{m:ue}=B.indents,ut=()=>{const{pathname:t}=Ie(),{elementTrash:l}=L(),{activeCluster:m}=I(),d=l.length>0?" 1fr":"",c=m?" 1fr":"",p=d+c;if(t.includes("/element"))return r.jsxs(be,{$m:`${ue} ${ue}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:p,children:[c&&r.jsx(at,{}),d&&r.jsx(it,{})]})},{colors:j,shadows:de,indents:pe}=B,dt=V`
  margin-bottom: 7px;
  padding-block: ${pe.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({licolor:t})=>t};
  border-radius: ${pe.xs};
  font-size: 22px;
`,pt=A.li`
  ${dt}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${j.border};
    background-color: ${j.background};
    box-shadow: ${de.back};

    &:hover {
      border-color: ${j.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${j.smokeBlack};
      &:hover {
        color: ${j.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${j.hovered};
    }
  }

  &:hover {
    border-color: ${j.accent};
    box-shadow: ${de.back};
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
    ${Ze}
  }
`,ht=A.label`
  ${je}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?j.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?j.yellow:j.border};
  }
  &:hover svg {
    stroke: ${j.placeholder};
  }
`,mt=A.label`
  ${je}
  opacity: ${({$hovered:t})=>t?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${j.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?j.border:"transparent"};
  }
  &:hover svg {
    border-color: ${j.placeholder};
    color: ${({$hovered:t})=>t?j.placeholder:"transparent"};
  }
`,M=V`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${j.black};

  & svg {
    transition: color 250ms;
    color: ${j.border};
  }
  &:hover,
  &:hover svg {
    color: ${j.placeholder};
  }
`,ft=A.button`
  ${M}

  opacity: ${({$hovered:t})=>t?1:0};
`,he=A.button`
  ${M}

  opacity: 0;
`,{colors:J,indents:Ae}=B,ke=V`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,gt=A.div`
  ${ke}
`,bt=A.form`
  ${ke}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,me=A.textarea`
  outline: none;
  border: 1px solid ${J.accent};
  border-radius: ${Ae.xs};
  resize: none;
`,$t=A.div`
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
    border: 1px solid ${J.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${J.placeholder};
  }
`,xt=A.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,vt=A.button`
  ${M}
`,yt=A.button`
  ${M}
`,we=A.button`
  ${M}
`,fe=A.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Ae.xs};
  color: ${J.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ce=V`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,jt=A.iframe`
  ${Ce}

  height: 60px;
  border-radius: 30px;
`,At=A.audio`
  ${Ce}
`,Ee=({el:t,sortByDate:l,setSortByDate:m,setLiColor:d})=>{const c=W(),{user:p}=D(),{activeCluster:f}=I(),{element:h,caption:i}=t,v="$*@",b=(n,e)=>{let u="";return e?(n.trim().endsWith(".")||n.trim().endsWith("!")||n.trim().endsWith("?")||n.endsWith('"')?u=n.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(": ",`:${e} `).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):u=n.trim()+e,u.includes("[")?u.substring(0,u.indexOf("["))+e:u):n},g=n=>{const e=Y({setLiColor:d,divider:v,text:b(h,v),lang:f.lang,rate:f.rate});n.target.blur(),e&&F.error(e)},E=n=>{const e=Y({setLiColor:d,divider:v,text:b(i,v),lang:t.lang,rate:p.rate});n.target.blur(),e&&F.error(e)},$=n=>{m(!l),l?F.success("Below is Recent"):F.success("Above is Recent"),n.stopPropagation()},k=n=>{const{_id:e}=f;c($e(t)),n.currentTarget.closest("li").id!=="active-element"&&c(te({_id:e,activeEl:t._id}))},w=i.endsWith("mp3"),C=!w&&i.startsWith("http"),a=!w&&!C;return r.jsxs(gt,{onClick:k,children:[r.jsx(fe,{onClick:g,children:h}),r.jsx($t,{onClick:$}),w&&r.jsx(At,{controls:!0,src:ae(i)}),C&&r.jsx(jt,{src:ae(i)}),a&&r.jsx(fe,{onClick:E,children:i})]})};Ee.propTypes={el:x.object,sortByDate:x.bool,setSortByDate:x.func,$active:x.bool,$hovered:x.bool,setLiColor:x.func};const Se=({el:t,article:l,isForm:m,setIsForm:d})=>{const c=W(),{user:p}=D(),{activeCluster:f}=I(),{_id:h,element:i,caption:v}=t,b=m+24,{register:g,watch:E,setValue:$,handleSubmit:k,setFocus:w}=Je({mode:"onBlur",defaultValues:{element:i,caption:v}});T.useEffect(()=>{w("element"),l&&i.trim().startsWith("der")?$("element",l+i.replace("der","").trim()+", "):l&&i.trim().startsWith("die")?$("element",l+i.replace("die","").trim()+", "):l&&i.trim().startsWith("das")?$("element",l+i.replace("das","").trim()+", "):l?$("element",l+i+", "):$("element",l+i)},[l,i,w,$]),T.useEffect(()=>{const n=async e=>{e.key==="+"&&(e.preventDefault(),await a(),k(C)()),e.key==="Enter"&&(e.preventDefault(),k(C)()),e.key==="Escape"&&d(!1)};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const C=n=>{const e=p.lang;let u=n.element.split(/\s+/).join(" ").trim(),s=n.caption.trim();u.endsWith(",")&&(u=u.substring(0,u.length-1)),u.includes("·")&&(u=u.replaceAll(" ·",",").replaceAll("· ",", ")),s.endsWith(",")&&(s=s.substring(0,s.length-1)),c(Z({_id:h,lang:e,element:u,caption:s})).then(c(xe())),d(!1)},a=async()=>{let n=E("element");const e=[".","!","?"].includes(n.at(n.length-1)),u=!e&&n.split(/\s+/);["der","die","das"].includes(u[0])&&(n=u[1]);const s=!e&&n.split(",");s.length===3&&(n=s[0]+",");const o={from:f.lang,to:p.lang},y=await re(n,o);$("caption",y)};return r.jsxs(bt,{onSubmit:k(C),children:[r.jsx(me,{...g("element"),style:{height:b}}),r.jsxs(xt,{children:[r.jsx(vt,{children:r.jsx(ze,{size:"16px"})}),r.jsx(yt,{type:"button",onClick:()=>d(b),children:r.jsx(De,{size:"16px"})}),r.jsx(we,{type:"button",onClick:a,children:r.jsx(Ve,{size:"16px"})})]}),r.jsx(me,{...g("caption"),style:{height:b}})]})};Se.propTypes={el:x.object,article:x.string,isForm:x.oneOfType([x.bool,x.number]),setIsForm:x.func};const Te=({el:t,index:l,length:m,sortByDate:d,setSortByDate:c,translateAll:p,liColor:f,setLiColor:h})=>{const i=W(),{elementTrash:v,activeElement:b}=L(),[g,E]=T.useState(!1),{_id:$,favorite:k,checked:w}=t,C=v.find(S=>S._id===$),[a,n]=T.useState(""),e=()=>{i(Z({_id:$,favorite:!k}))},u=()=>{i(Z({_id:$,checked:!w}))},s=()=>i(Pe(t)),o=S=>{if(g)E(!1);else{const _=S.target.closest("div").clientHeight;E(_)}},y=()=>{a===""&&n("der "),a==="der "&&n("die "),a==="die "&&n("das "),a==="das "&&n("")},R=$===(b==null?void 0:b._id);return r.jsxs(pt,{id:R?"active-element":null,licolor:f,children:[r.jsxs(ne,{$h:"100%",$p:"0",$fd:"column",children:[r.jsxs(ht,{$hovered:k,children:[r.jsx("input",{type:"checkbox",name:"favorite",checked:k,onChange:e}),r.jsx(qe,{size:"20px"})]}),r.jsxs(mt,{$hovered:w,children:[r.jsx("input",{type:"checkbox",name:"checked",checked:w,onChange:u}),r.jsx(Me,{size:"15px"})]}),g&&m===l+1&&r.jsx(we,{onClick:p,children:r.jsx(Oe,{size:"16px"})})]}),g&&r.jsx(Se,{el:t,article:a,isForm:g,setIsForm:E}),!g&&r.jsx(Ee,{el:t,sortByDate:d,setSortByDate:c,setLiColor:h}),r.jsxs(ne,{$h:"100%",$p:"0",$fd:"column",children:[r.jsx(ft,{$hovered:C,onClick:s,children:r.jsx(Ue,{size:"16px"})}),g&&r.jsx(he,{onClick:y,children:r.jsx(Ye,{size:"18px"})}),r.jsx(he,{onClick:o,children:r.jsx(He,{size:"15px"})})]})]})};Te.propTypes={el:x.object,index:x.number,length:x.number,sortByDate:x.bool,setSortByDate:x.func,translateAll:x.func,liColor:x.string,setLiColor:x.func};const kt=A.ul`
  width: 100%;
  list-style: none;
`,{white:wt}=B.colors,Ct=()=>{const t=W(),{ref:l,inView:m,entry:d}=rt({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:c}=D(),{activeCluster:p}=I(),{allElements:f,elementTrash:h,elementFilter:i}=L(),[v,b]=T.useState(wt);let{elementSelect:g}=L();g=g||[];const[E,$]=T.useState(!1),[k,w]=T.useState(!0);T.useEffect(()=>{p&&t(xe({cluster:p._id})).unwrap().then(({result:s})=>{if(!p.activeEl)return;const o=s.elements.find(({_id:y})=>y===p.activeEl);t($e(o))}).then(()=>{const s=document.getElementById("active-element");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})(),w(!1)})},[]);const C=f.filter(s=>s.cluster===(p==null?void 0:p._id)).sort((s,o)=>s.createdAt.localeCompare(o.createdAt)),n=(()=>{const s=h.map(o=>o._id);return g.includes("trash")?C.filter(o=>s.includes(o._id)):C})().filter(({element:s,caption:o,favorite:y,checked:R})=>{const S=s.toLowerCase().replace("·","").includes(i)||s.toLowerCase().includes(i)||o.toLowerCase().includes(i),_=()=>g.some(z=>["favorite","unfavorite"].includes(z))?g.includes("favorite")?S&&y===!0:S&&y===!1:S;return(()=>g.some(z=>["checked","unchecked"].includes(z))?g.includes("checked")?_()&&R===!0:_()&&R===!1:_())()}).sort(E?(s,o)=>o.createdAt.localeCompare(s.createdAt):(s,o)=>s.createdAt.localeCompare(o.createdAt)),e=async()=>{const s=c.lang;let o=0;await n.forEach(async y=>{if(o>1)return;const{_id:R,element:S}=y;if(!S.startsWith("[")||s!==y.lang){const _={from:p.lang,to:s},O=await re(S,_);t(Z({_id:R,lang:s,caption:O})),o=o+1}})},u=window.innerHeight<(d==null?void 0:d.target.getBoundingClientRect().y)+(d==null?void 0:d.target.getBoundingClientRect().height)*1.5;return r.jsxs(r.Fragment,{children:[r.jsxs(kt,{children:[n.map((s,o,y)=>r.jsx(Te,{el:s,index:o,length:y.length,sortByDate:E,setSortByDate:$,translateAll:e,liColor:v,setLiColor:b},s._id)),r.jsxs("div",{ref:l,children:[r.jsx(ye,{filtredElements:n,setLiColor:b}),(!m||!u)&&r.jsx(ut,{})]})]}),k&&r.jsx(Ge,{})]})},{s:ge,m:Et}=B.indents,Ft=()=>r.jsx(ne,{$p:`0 ${Et} ${ge} ${ge}`,children:r.jsx(Ct,{})});export{Ft as default};
