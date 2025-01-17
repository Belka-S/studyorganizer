import{r as T,s as A,t as B,P as $,j as r,T as Re,u as W,b as D,q as I,y as L,S as be,U,K as q,w as te,D as oe,E as le,V as Q,Q as F,W as _e,R as Fe,X as re,Y as We,Z as Le,_ as Ie,$ as ze,n as V,a0 as ae,a1 as $e,a2 as De,a3 as Ve,a4 as Me,a5 as Y,a6 as xe,F as ne,C as Oe,a7 as Ue,A as He,z as Pe,a8 as Ge,a9 as Ke}from"./index-ee059452.js";import{r as Ne,H as Xe,T as qe}from"./index.esm-a0f57537.js";import{w as Qe}from"./writeClipboard-84ded084.js";import{a as Ye}from"./index.esm-5eb4e4b5.js";import{v as Ze,u as Je}from"./index.esm-6b021e77.js";const H=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],P=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}];var se=new Map,G=new WeakMap,ce=0,et=void 0;function tt(t){return t?(G.has(t)||(ce+=1,G.set(t,ce.toString())),G.get(t)):"0"}function nt(t){return Object.keys(t).sort().filter(l=>t[l]!==void 0).map(l=>`${l}_${l==="root"?tt(t.root):t[l]}`).toString()}function st(t){const l=nt(t);let m=se.get(l);if(!m){const p=new Map;let c;const i=new IntersectionObserver(f=>{f.forEach(h=>{var u;const v=h.isIntersecting&&c.some(b=>h.intersectionRatio>=b);t.trackVisibility&&typeof h.isVisible>"u"&&(h.isVisible=v),(u=p.get(h.target))==null||u.forEach(b=>{b(v,h)})})},t);c=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),m={id:l,observer:i,elements:p},se.set(l,m)}return m}function rt(t,l,m={},p=et){if(typeof window.IntersectionObserver>"u"&&p!==void 0){const u=t.getBoundingClientRect();return l(p,{isIntersecting:p,target:t,intersectionRatio:typeof m.threshold=="number"?m.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:c,observer:i,elements:f}=st(m),h=f.get(t)||[];return f.has(t)||f.set(t,h),h.push(l),i.observe(t),function(){h.splice(h.indexOf(l),1),h.length===0&&(f.delete(t),i.unobserve(t)),f.size===0&&(i.disconnect(),se.delete(c))}}function ot({threshold:t,delay:l,trackVisibility:m,rootMargin:p,root:c,triggerOnce:i,skip:f,initialInView:h,fallbackInView:u,onChange:v}={}){var b;const[g,k]=T.useState(null),x=T.useRef(v),[w,C]=T.useState({inView:!!h,entry:void 0});x.current=v,T.useEffect(()=>{if(f||!g)return;let e;return e=rt(g,(d,s)=>{C({inView:d,entry:s}),x.current&&x.current(d,s),s.isIntersecting&&i&&e&&(e(),e=void 0)},{root:c,rootMargin:p,threshold:t,trackVisibility:m,delay:l},u),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,g,c,p,i,f,m,u,l]);const E=(b=w.entry)==null?void 0:b.target,a=T.useRef(void 0);!g&&E&&!i&&!f&&a.current!==E&&(a.current=E,C({inView:!!h,entry:void 0}));const n=[k,w.inView,w.entry];return n.ref=n[0],n.inView=n[1],n.entry=n[2],n}const{colors:J}=B,lt=A.div`
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
    /* stroke: ${({$colored:t})=>t&&J.yellow}; */
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
`,ve=({onClick:t})=>r.jsx(lt,{onClick:t,children:r.jsx(Re,{size:"26px"})});ve.propTypes={onClick:$.func};const{background:ee,backgroundHoverd:K,white:N,borderLight:X}=B.colors,{button:ie}=B.shadows,ye=({filtredElements:t,setLiColor:l})=>{const m=W(),{user:p}=D(),{activeCluster:c}=I(),{activeElement:i}=L(),f=a=>{if(!a.length)return;let n="",e=0;const d=a.reduce((s,o)=>(s[o.lang]||(s[o.lang]=0),s[o.lang]+=1,s),{});for(const s in d)d[s]>e&&(e=d[s],n=s);return n},h=t.length?f(t):p.lang,u=({value:a})=>{m(te({_id:c._id,lang:a})).unwrap().then(n=>m(oe(n.result.cluster)))},v=({value:a})=>{m(te({_id:c._id,rate:a})).unwrap().then(n=>m(oe(n.result.cluster)))},b=({value:a})=>{const n=new FormData;n.append("lang",a),m(le(n))},g=({value:a})=>{const n=new FormData;n.append("rate",a),m(le(n))},k=(a,n)=>a.replaceAll(",`",";").replaceAll(" `",`${n} `),x=({text:a,playList:n,divider:e})=>{let d="";for(let s=0;s<n.length;s+=1){let o=n[s][a];o.endsWith(".")||o.endsWith("!")||o.endsWith("?")||o.endsWith('"')?d+=k(o,e).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(": ",`:${e} `).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`${e}`,a==="caption"?`@±@${n[s].lang}${e}`:`${e}`):n[s].element.startsWith("[")||(a==="caption"&&(o.includes(" [")&&(o=o.substring(0,o.indexOf(" ["))),o=`${o}@±@${n[s].lang}`),d+=o+e)}return d},w=a=>{l(ee);const n="$*@",e=t.findIndex(o=>o.element===i.element),d=t.splice(e===-1?0:e),s=Q({setLiColor:l,divider:n,text:x({text:"element",playList:d,divider:n}),lang:c.lang,rate:c.rate});a.target.blur(),s&&F.error(s)},C=a=>{const n="$*@";l(ee);const e=t.findIndex(o=>o.element===i.element),d=t.splice(e===-1?0:e),s=Q({setLiColor:l,divider:n,text:x({text:"caption",playList:d,divider:n}),lang:h,rate:p.rate});a.target.blur(),s&&F.error(s)},E=a=>{l(ee);let n="";const e="$*@",d=t.findIndex(y=>y.element===i.element),s=t.splice(d===-1?0:d);for(let y=0;y<s.length;y+=1){const{element:R,caption:S,lang:_}=s[y];if(!R.startsWith("[")){const O=k(R,""),z=S.includes(" [")?S.substring(0,S.indexOf(" [")):S;n+=O+`@±@${_}`+z+e}}const o=_e({setLiColor:l,divider:e,text:n,lang:c.lang,rate:p.rate});a.target.blur(),o&&F.error(o)};return r.jsxs(be,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[r.jsx(U,{options:H,defaultValue:H.find(a=>a.value===(c==null?void 0:c.lang)),onChange:u,placeholder:"Language...",$ol:K,$b:N,$bh:X}),r.jsx(U,{options:P,defaultValue:P.find(a=>a.value==(c==null?void 0:c.rate)),onChange:v,placeholder:"Rate...",$ol:K,$b:N,$bh:X}),r.jsx(q,{onClick:w,$s:"m",$bs:ie,children:(c==null?void 0:c.lang.at(0).toUpperCase())+(c==null?void 0:c.lang.substring(1))}),r.jsx(ve,{onClick:E}),r.jsx(q,{onClick:C,$s:"m",$bs:ie,children:(h==null?void 0:h.at(0).toUpperCase())+(h==null?void 0:h.substring(1))}),r.jsx(U,{options:H,defaultValue:H.find(a=>a.value===p.lang),onChange:b,placeholder:"Language...",$ol:K,$b:N,$bh:X}),r.jsx(U,{options:P,defaultValue:P.find(a=>a.value==p.rate),onChange:g,placeholder:"Rate...",$ol:K,$b:N,$bh:X})]})};ye.propTypes={filtredElements:$.array,setLiColor:$.func};const{button:at}=B.shadows,ct=()=>{const t=W(),{user:l}=D(),{activeCluster:m}=I();T.useEffect(()=>{const c=async i=>{i.key==="d"&&i.metaKey&&(i.prevent,await p())};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[]);const p=async c=>{const i=window.getSelection().toString();i&&await Qe(i);const f=(await Ne()).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),h={from:m.lang,to:l.lang},u=await re(f,h),{_id:v}=m;try{const b={cluster:v,element:"[]",caption:f},g={cluster:v,element:f,caption:u,favorite:!0,checked:f.split(/\s+/).length<20},k=f.includes("https://")?b:g;t(We(k)),c.target.blur()}catch(b){c.target.blur(),F.error(`Invalid element, ${b.message}`)}};return r.jsx(q,{onClick:p,$s:"m",$round:!0,$bs:at,children:r.jsx(Fe,{size:18})})},{button:it}=B.shadows,ut=()=>{const t=W(),{elementTrash:l}=L(),m=()=>{confirm("Are you sure you want to delete the selected Element(s)?")&&t(Le(l.map(p=>p._id).join("&"))).unwrap().then(()=>t(Ie()))};return r.jsx(q,{onClick:m,$s:"m",$round:!0,$bs:it,children:r.jsx(Xe,{size:16})})},{m:ue}=B.indents,je=({className:t})=>{const{pathname:l}=ze(),{elementTrash:m}=L(),{activeCluster:p}=I(),c=m.length>0?" 1fr":"",i=p?" 1fr":"",f=c+i;if(l.includes("/element"))return r.jsxs(be,{className:t,$m:`${ue} ${ue}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:f,children:[i&&r.jsx(ct,{}),c&&r.jsx(ut,{})]})};je.propTypes={className:$.string};const{colors:j,shadows:de,indents:pe}=B,dt=V`
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
`,Ae=V`
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
  ${Ae}

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
  ${Ae}
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
`,{colors:Z,indents:ke}=B,we=V`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,gt=A.div`
  ${we}
`,bt=A.form`
  ${we}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,me=A.textarea`
  outline: none;
  border: 1px solid ${Z.accent};
  border-radius: ${ke.xs};
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
    border: 1px solid ${Z.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${Z.placeholder};
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
`,Ce=A.button`
  ${M}
`,fe=A.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ke.xs};
  color: ${Z.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,Ee=V`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,jt=A.iframe`
  ${Ee}

  height: 60px;
  border-radius: 30px;
`,At=A.audio`
  ${Ee}
`,Se=({el:t,sortByDate:l,setSortByDate:m,setLiColor:p})=>{const c=W(),{user:i}=D(),{activeCluster:f}=I(),{element:h,caption:u}=t,v="$*@",b=(n,e)=>{let d="";return e?(n.trim().endsWith(".")||n.trim().endsWith("!")||n.trim().endsWith("?")||n.endsWith('"')?d=n.trim().replaceAll(",`",";").replaceAll(" `",`${e} `).replaceAll("Mr.","mister").replaceAll("Ms.","miss").replaceAll("Mrs.","missis").replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(": ",`:${e} `).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):d=n.trim()+e,d.includes("[")?d.substring(0,d.indexOf("["))+e:d):n},g=n=>{const e=Q({setLiColor:p,divider:v,text:b(h,v),lang:f.lang,rate:f.rate});n.target.blur(),e&&F.error(e)},k=n=>{const e=Q({setLiColor:p,divider:v,text:b(u,v),lang:t.lang,rate:i.rate});n.target.blur(),e&&F.error(e)},x=n=>{m(!l),l?F.success("Below is Recent"):F.success("Above is Recent"),n.stopPropagation()},w=n=>{const{_id:e}=f;c($e(t)),n.currentTarget.closest("li").id!=="active-element"&&c(te({_id:e,activeEl:t._id}))},C=u.endsWith("mp3"),E=!C&&u.startsWith("http"),a=!C&&!E;return r.jsxs(gt,{onClick:w,children:[r.jsx(fe,{onClick:g,children:h}),r.jsx($t,{onClick:x}),C&&r.jsx(At,{controls:!0,src:ae(u)}),E&&r.jsx(jt,{src:ae(u)}),a&&r.jsx(fe,{onClick:k,children:u})]})};Se.propTypes={el:$.object,sortByDate:$.bool,setSortByDate:$.func,$active:$.bool,$hovered:$.bool,setLiColor:$.func};const Te=({el:t,article:l,isForm:m,setIsForm:p})=>{const c=W(),{user:i}=D(),{activeCluster:f}=I(),{_id:h,element:u,caption:v}=t,b=m+24,{register:g,watch:k,setValue:x,handleSubmit:w,setFocus:C}=Je({mode:"onBlur",defaultValues:{element:u,caption:v}});T.useEffect(()=>{C("element"),l&&u.trim().startsWith("der")?x("element",l+u.replace("der","").trim()+", "):l&&u.trim().startsWith("die")?x("element",l+u.replace("die","").trim()+", "):l&&u.trim().startsWith("das")?x("element",l+u.replace("das","").trim()+", "):l?x("element",l+u+", "):x("element",l+u)},[l,u,C,x]),T.useEffect(()=>{const n=async e=>{e.key==="+"&&(e.preventDefault(),await a(),w(E)()),e.key==="Enter"&&(e.preventDefault(),w(E)()),e.key==="Escape"&&p(!1)};return addEventListener("keydown",n),()=>{removeEventListener("keydown",n)}},[]);const E=n=>{const e=i.lang;let d=n.element.split(/\s+/).join(" ").trim(),s=n.caption.trim();d.endsWith(",")&&(d=d.substring(0,d.length-1)),d.includes("·")&&(d=d.replaceAll(" ·",",").replaceAll("· ",", ")),s.endsWith(",")&&(s=s.substring(0,s.length-1)),c(Y({_id:h,lang:e,element:d,caption:s})).then(c(xe())),p(!1)},a=async()=>{let n=k("element");const e=[".","!","?"].includes(n.at(n.length-1)),d=!e&&n.split(/\s+/);["der","die","das"].includes(d[0])&&(n=d[1]);const s=!e&&n.split(",");s.length===3&&(n=s[0]+",");const o={from:f.lang,to:i.lang},y=await re(n,o);x("caption",y)};return r.jsxs(bt,{onSubmit:w(E),children:[r.jsx(me,{...g("element"),style:{height:b}}),r.jsxs(xt,{children:[r.jsx(vt,{children:r.jsx(De,{size:"16px"})}),r.jsx(yt,{type:"button",onClick:()=>p(b),children:r.jsx(Ve,{size:"16px"})}),r.jsx(Ce,{type:"button",onClick:a,children:r.jsx(Me,{size:"16px"})})]}),r.jsx(me,{...g("caption"),style:{height:b}})]})};Te.propTypes={el:$.object,article:$.string,isForm:$.oneOfType([$.bool,$.number]),setIsForm:$.func};const Be=({el:t,index:l,length:m,sortByDate:p,setSortByDate:c,translateAll:i,liColor:f,setLiColor:h})=>{const u=W(),{elementTrash:v,activeElement:b}=L(),[g,k]=T.useState(!1),{_id:x,favorite:w,checked:C}=t,E=v.find(S=>S._id===x),[a,n]=T.useState(""),e=()=>{u(Y({_id:x,favorite:!w}))},d=()=>{u(Y({_id:x,checked:!C}))},s=()=>u(Ge(t)),o=S=>{if(g)k(!1);else{const _=S.target.closest("div").clientHeight;k(_)}},y=()=>{a===""&&n("der "),a==="der "&&n("die "),a==="die "&&n("das "),a==="das "&&n("")},R=x===(b==null?void 0:b._id);return r.jsxs(pt,{id:R?"active-element":null,licolor:f,children:[r.jsxs(ne,{$h:"100%",$p:"0",$fd:"column",children:[r.jsxs(ht,{$hovered:w,children:[r.jsx("input",{type:"checkbox",name:"favorite",checked:w,onChange:e}),r.jsx(qe,{size:"20px"})]}),r.jsxs(mt,{$hovered:C,children:[r.jsx("input",{type:"checkbox",name:"checked",checked:C,onChange:d}),r.jsx(Oe,{size:"15px"})]}),g&&m===l+1&&r.jsx(Ce,{onClick:i,children:r.jsx(Ue,{size:"16px"})})]}),g&&r.jsx(Te,{el:t,article:a,isForm:g,setIsForm:k}),!g&&r.jsx(Se,{el:t,sortByDate:p,setSortByDate:c,setLiColor:h}),r.jsxs(ne,{$h:"100%",$p:"0",$fd:"column",children:[r.jsx(ft,{$hovered:E,onClick:s,children:r.jsx(He,{size:"16px"})}),g&&r.jsx(he,{onClick:y,children:r.jsx(Ye,{size:"18px"})}),r.jsx(he,{onClick:o,children:r.jsx(Pe,{size:"15px"})})]})]})};Be.propTypes={el:$.object,index:$.number,length:$.number,sortByDate:$.bool,setSortByDate:$.func,translateAll:$.func,liColor:$.string,setLiColor:$.func};const kt=A.ul`
  width: 100%;
  list-style: none;
`,{white:wt}=B.colors,Ct=()=>{const t=W(),{ref:l,inView:m,entry:p}=ot({initialInView:!0,rootMargin:"0px 0px -30px 0px"}),{user:c}=D(),{activeCluster:i}=I(),{allElements:f,elementTrash:h,elementFilter:u}=L(),[v,b]=T.useState(wt);let{elementSelect:g}=L();g=g||[];const[k,x]=T.useState(!1),[w,C]=T.useState(!0);T.useEffect(()=>{i&&t(xe({cluster:i._id})).unwrap().then(({result:s})=>{if(!i.activeEl)return;const o=s.elements.find(({_id:y})=>y===i.activeEl);t($e(o))}).then(()=>{const s=document.getElementById("active-element");(()=>{s==null||s.scrollIntoView({block:"center",behavior:"smooth"})})(),C(!1)})},[]);const E=f.filter(s=>s.cluster===(i==null?void 0:i._id)).sort((s,o)=>s.createdAt.localeCompare(o.createdAt)),n=(()=>{const s=h.map(o=>o._id);return g.includes("trash")?E.filter(o=>s.includes(o._id)):E})().filter(({element:s,caption:o,favorite:y,checked:R})=>{const S=s.toLowerCase().replace("·","").includes(u)||s.toLowerCase().includes(u)||o.toLowerCase().includes(u),_=()=>g.some(z=>["favorite","unfavorite"].includes(z))?g.includes("favorite")?S&&y===!0:S&&y===!1:S;return(()=>g.some(z=>["checked","unchecked"].includes(z))?g.includes("checked")?_()&&R===!0:_()&&R===!1:_())()}).sort(k?(s,o)=>o.createdAt.localeCompare(s.createdAt):(s,o)=>s.createdAt.localeCompare(o.createdAt)),e=async()=>{const s=c.lang;let o=0;await n.forEach(async y=>{if(o>1)return;const{_id:R,element:S}=y;if(!S.startsWith("[")||s!==y.lang){const _={from:i.lang,to:s},O=await re(S,_);t(Y({_id:R,lang:s,caption:O})),o=o+1}})},d=window.innerHeight<(p==null?void 0:p.target.getBoundingClientRect().y)+(p==null?void 0:p.target.getBoundingClientRect().height)*1.5;return r.jsxs(r.Fragment,{children:[r.jsxs(kt,{children:[n.map((s,o,y)=>r.jsx(Be,{el:s,index:o,length:y.length,sortByDate:k,setSortByDate:x,translateAll:e,liColor:v,setLiColor:b},s._id)),r.jsxs("div",{ref:l,children:[r.jsx(ye,{filtredElements:n,setLiColor:b}),r.jsx(je,{className:!m||!d?"shown":"hidden"})]})]}),w&&r.jsx(Ke,{})]})},{s:ge,m:Et}=B.indents,Ft=()=>r.jsx(ne,{$p:`0 ${Et} ${ge} ${ge}`,children:r.jsx(Ct,{})});export{Ft as default};
