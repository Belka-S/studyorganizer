import{s as b,t as S,u as B,j as e,T as ve,U as ae,P as h,b as P,q as U,y as V,S as Ae,V as F,K as J,w as Q,D as X,W as Y,X as H,Q as T,Y as je,n as W,Z,r as w,_ as Ce,$ as we,a0 as M,a1 as ce,F as q,C as Ee,a2 as Se,A as Te,z as Be,a3 as We,J as Le}from"./index-f1a496f8.js";import{T as Fe}from"./index.esm-9311ad02.js";import{a as Re}from"./index.esm-359a9f62.js";import{v as _e,u as ze}from"./index.esm-03e0152a.js";import{S as De}from"./index.esm-506d9329.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],_=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:G}=S,Ie=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${G.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${G.placeholder};
    /* stroke: ${({$colored:l})=>l&&G.yellow}; */

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
`,Ve=()=>{const l=B(),p=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(g=>g.removeAttribute("style")),l(ae(null))};return e.jsx(Ie,{onClick:p,children:e.jsx(ve,{size:"26px"})})},{background:N,backgroundHoverd:z,white:D,borderLight:I}=S.colors,{button:ee}=S.shadows,ie=({filtredElements:l,setLiColor:p})=>{const f=B(),{user:g}=P(),{activeCluster:m}=U(),{activeElement:k}=V(),C=({value:d})=>{f(Q({_id:m._id,lang:d})).unwrap().then(r=>f(X(r.result.cluster)))},y=({value:d})=>{f(Q({_id:m._id,rate:d})).unwrap().then(r=>f(X(r.result.cluster)))},i=({value:d})=>{const r=new FormData;r.append("lang",d),f(Y(r))},A=({value:d})=>{const r=new FormData;r.append("rate",d),f(Y(r))},j=d=>{p(N);let r="";const n="$*@",o=l.findIndex(a=>a.element===k),s=l.splice(o===-1?0:o);for(let a=0;a<s.length;a+=1){const{element:c}=s[a];c.endsWith(".")||c.endsWith("!")||c.endsWith("?")||c.endsWith('"')?r+=c.replaceAll(",`",";").replaceAll(" `",` ${n}`).replaceAll("...",`__${n}`).replaceAll(".",`.${n}`).replaceAll(",",`,${n}`).replaceAll("!",`!${n}`).replaceAll("?",`?${n}`).replaceAll(":",`:${n}`).replaceAll(`0.${n}`,"0.").replaceAll(`1.${n}`,"1.").replaceAll(`2.${n}`,"2.").replaceAll(`3.${n}`,"3.").replaceAll(`4.${n}`,"4.").replaceAll(`5.${n}`,"5.").replaceAll(`6.${n}`,"6.").replaceAll(`7.${n}`,"7.").replaceAll(`8.${n}`,"8.").replaceAll(`9.${n}`,"9.").replaceAll(`,${n} oder?`,", oder?").replaceAll(`,${n} bitte.`,", bitte.").replaceAll(`,${n} danke.`,", danke."):c.startsWith("[")||(r+=c.replaceAll(".",n)+n)}const t=H({setLiColor:p,divider:n,text:r,lang:m.lang,rate:m.rate});d.target.blur(),t&&T.error(t)},x=d=>{p(N);let r="";const n="$*@",o=l.findIndex(a=>a.element===k),s=l.splice(o===-1?0:o);for(let a=0;a<s.length;a+=1){const{element:c,caption:u,lang:v}=s[a];c.startsWith("[")||(r+=c+`@±@${v}`+u+n)}const t=je({setLiColor:p,divider:n,text:r,lang:m.lang,rate:g.rate});d.target.blur(),t&&T.error(t)};return e.jsxs(Ae,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[e.jsx(F,{options:R,defaultValue:R.find(d=>d.value===(m==null?void 0:m.lang)),onChange:C,placeholder:"Language...",$ol:z,$b:D,$bh:I}),e.jsx(F,{options:_,defaultValue:_.find(d=>d.value==(m==null?void 0:m.rate)),onChange:y,placeholder:"Rate...",$ol:z,$b:D,$bh:I}),e.jsx(J,{onClick:j,$s:"m",$bs:ee,children:"play"}),e.jsx(Ve,{}),e.jsx(J,{onClick:x,$s:"m",$bs:ee,children:"all"}),e.jsx(F,{options:R,defaultValue:R.find(d=>d.value===g.lang),onChange:i,$ol:z,$b:D,$bh:I}),e.jsx(F,{options:_,defaultValue:_.find(d=>d.value==g.rate),onChange:A,$ol:z,$b:D,$bh:I})]})};ie.propTypes={filtredElements:h.array,setLiColor:h.func};const{colors:$,shadows:te,indents:se}=S,Me=W`
  margin-bottom: 7px;
  padding-block: ${se.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${se.xs};
  font-size: 22px;
`,Oe=b.li`
  ${Me}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${$.border};
    background-color: ${$.background};
    box-shadow: ${te.back};

    &:hover {
      border-color: ${$.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${$.smokeBlack};
      &:hover {
        color: ${$.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${$.hovered};
    }
  }

  &:hover {
    border-color: ${$.accent};
    box-shadow: ${te.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,de=W`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${_e}
  }
`,Pe=b.label`
  ${de}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:l})=>l?$.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?$.yellow:$.border};
  }
  &:hover svg {
    stroke: ${$.placeholder};
  }
`,Ue=b.label`
  ${de}
  opacity: ${({$hovered:l})=>l?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${$.border};
    border-radius: 50%;
    color: ${({$hovered:l})=>l?$.border:"transparent"};
  }
  &:hover svg {
    border-color: ${$.placeholder};
    color: ${({$hovered:l})=>l?$.placeholder:"transparent"};
  }
`,L=W`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${$.black};

  & svg {
    transition: color 250ms;
    color: ${$.border};
  }
  &:hover,
  &:hover svg {
    color: ${$.placeholder};
  }
`,Ge=b.button`
  ${L}

  opacity: ${({$hovered:l})=>l?1:0};
`,ne=b.button`
  ${L}

  opacity: 0;
`,{colors:O,indents:pe}=S,ue=W`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=b.div`
  ${ue}
`,qe=b.form`
  ${ue}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,le=b.textarea`
  outline: none;
  border: 1px solid ${O.accent};
  border-radius: ${pe.xs};
  resize: none;
`,Ke=b.div`
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
    border: 1px solid ${O.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${O.placeholder};
  }
`,Je=b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Qe=b.button`
  ${L}
`,Xe=b.button`
  ${L}
`,he=b.button`
  ${L}
`,re=b.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${pe.xs};
  color: ${O.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,me=W`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ye=b.iframe`
  ${me}

  height: 60px;
  border-radius: 30px;
`,Ze=b.audio`
  ${me}
`,fe=({el:l,sortByDate:p,setSortByDate:f,setLiColor:g})=>{const{user:m}=P(),{activeCluster:k}=U(),{element:C,caption:y}=l,i="$*@",A=(s,t)=>{let a="";return t?(s.trim().endsWith(".")||s.trim().endsWith("!")||s.trim().endsWith("?")||s.endsWith('"')?a=s.trim().replaceAll(",`",";").replaceAll(" `",` ${t}`).replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`Mr.${t}`,"mister").replaceAll(`Ms.${t}`,"miss").replaceAll(`Mrs.${t}`,"missis"):a=s.trim()+t,a.includes("[")?a.substring(0,a.indexOf("[")):a):s},j=s=>{const t=H({setLiColor:g,divider:i,text:A(C,i),lang:k.lang,rate:k.rate});s.target.blur(),t&&T.error(t)},x=s=>{const t=H({setLiColor:g,divider:i,text:A(y,i),lang:l.lang,rate:m.rate});s.target.blur(),t&&T.error(t)},d=s=>{f(!p),p?T.success("Below is Recent"):T.success("Above is Recent"),s.stopImmediatePropagation()},r=y.endsWith("mp3"),n=!r&&y.startsWith("http"),o=!r&&!n;return e.jsxs(He,{children:[e.jsx(re,{onClick:j,children:C}),e.jsx(Ke,{onClick:d}),r&&e.jsx(Ze,{controls:!0,src:Z(y)}),n&&e.jsx(Ye,{src:Z(y)}),o&&e.jsx(re,{onClick:x,children:y})]})};fe.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,$active:h.bool,$hovered:h.bool,setLiColor:h.func};const $e=({el:l,article:p,isForm:f,setIsForm:g})=>{const m=B(),{user:k}=P(),{activeCluster:C}=U(),{_id:y,element:i,caption:A}=l,j=f+24,{register:x,watch:d,setValue:r,handleSubmit:n,setFocus:o}=ze({mode:"onBlur",defaultValues:{element:i,caption:A}});w.useEffect(()=>{o("element"),p&&i.trim().startsWith("der")?r("element",p+i.replace("der","").trim()+", "):p&&i.trim().startsWith("die")?r("element",p+i.replace("die","").trim()+", "):p&&i.trim().startsWith("das")?r("element",p+i.replace("das","").trim()+", "):p?r("element",p+i+", "):r("element",p+i)},[p,i,o,r]),w.useEffect(()=>{const a=async c=>{c.key==="+"&&(c.preventDefault(),await t(),n(s)()),c.key==="Enter"&&(c.preventDefault(),n(s)()),c.key==="Escape"&&g(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const s=a=>{const c=k.lang;let u=a.element.trim(),v=a.caption.trim();u.endsWith(",")&&(u=u.substring(0,u.length-1)),u.includes(" ·")&&(u=u.replaceAll(" ·",",")),v.endsWith(",")&&(v=v.substring(0,v.length-1)),m(M({_id:y,lang:c,element:u,caption:v})),g(!1)},t=async()=>{const a=d("element"),c={from:C.lang,to:k.lang},u=await ce(a,c);r("caption",u)};return e.jsxs(qe,{onSubmit:n(s),children:[e.jsx(le,{...x("element"),style:{height:j}}),e.jsxs(Je,{children:[e.jsx(Qe,{children:e.jsx(Ce,{size:"16px"})}),e.jsx(Xe,{type:"button",onClick:()=>g(j),children:e.jsx(we,{size:"16px"})}),e.jsx(he,{type:"button",onClick:t,children:e.jsx(De,{size:"16px"})})]}),e.jsx(le,{...x("caption"),style:{height:j}})]})};$e.propTypes={el:h.object,article:h.string,isForm:h.oneOfType([h.bool,h.number]),setIsForm:h.func};const be=({el:l,index:p,length:f,sortByDate:g,setSortByDate:m,translateAll:k,liColor:C,setLiColor:y})=>{const i=B(),{elementTrash:A,activeElement:j}=V(),[x,d]=w.useState(!1),{_id:r,element:n,favorite:o,checked:s}=l,t=A.find(E=>E._id===r),a=n===j,[c,u]=w.useState("");w.useEffect(()=>{const E=document.getElementById("active-element");(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const v=()=>{i(M({_id:r,favorite:!o}))},ge=()=>{i(M({_id:r,checked:!s}))},xe=()=>i(We(l)),ye=E=>{if(x)d(!1);else{const K=E.target.closest("div").clientHeight;d(K)}},ke=()=>{c===""&&u("der "),c==="der "&&u("die "),c==="die "&&u("das "),c==="das "&&u("")};return e.jsxs(Oe,{id:a?"active-element":null,onClick:()=>i(ae(n)),liColor:C,children:[e.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(Pe,{$hovered:o,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:v}),e.jsx(Fe,{size:"20px"})]}),e.jsxs(Ue,{$hovered:s,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:s,onChange:ge}),e.jsx(Ee,{size:"15px"})]}),x&&f===p+1&&e.jsx(he,{onClick:k,children:e.jsx(Se,{size:"16px"})})]}),x&&e.jsx($e,{el:l,article:c,isForm:x,setIsForm:d}),!x&&e.jsx(fe,{el:l,sortByDate:g,setSortByDate:m,setLiColor:y}),e.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[e.jsx(Ge,{$hovered:t,onClick:xe,children:e.jsx(Te,{size:"16px"})}),x&&e.jsx(ne,{onClick:ke,children:e.jsx(Re,{size:"18px"})}),e.jsx(ne,{onClick:ye,children:e.jsx(Be,{size:"15px"})})]})]})};be.propTypes={el:h.object,index:h.string,length:h.string,sortByDate:h.bool,setSortByDate:h.func,translateAll:h.func,liColor:h.string,setLiColor:h.func};const Ne=b.ul`
  width: 100%;
  list-style: none;
`,{white:et}=S.colors,tt=()=>{const l=B(),{user:p}=P(),{activeCluster:f}=U(),{allElements:g,elementTrash:m,elementFilter:k}=V(),[C,y]=w.useState(et);let{elementSelect:i}=V();i=i||[];const[A,j]=w.useState(!1);w.useEffect(()=>{l(Le())},[l]);const x=g.filter(o=>o.cluster===(f==null?void 0:f._id)).sort((o,s)=>o.createdAt.localeCompare(s.createdAt)),r=(()=>{const o=m.map(s=>s._id);return i.includes("trash")?x.filter(s=>o.includes(s._id)):x})().filter(({element:o,caption:s,favorite:t,checked:a})=>{const c=o.toLowerCase().replace("·","").includes(k)||o.toLowerCase().includes(k)||s.toLowerCase().includes(k),u=i.includes("favorite")?c&&t===!0:c;return i.some(v=>["checked","unchecked"].includes(v))?i.includes("checked")?u&&a===!0:u&&a===!1:u}).sort(A?(o,s)=>s.createdAt.localeCompare(o.createdAt):(o,s)=>o.createdAt.localeCompare(s.createdAt)),n=async()=>{const o=p.lang;let s=0;await r.forEach(async t=>{if(s>1)return;const{_id:a,element:c}=t;if(!c.startsWith("[")||o!==t.lang){const u={from:f.lang,to:o},v=await ce(c,u);l(M({_id:a,lang:o,caption:v})),s=s+1}})};return e.jsxs(Ne,{children:[r.map((o,s,t)=>e.jsx(be,{el:o,index:s,length:t.length,sortByDate:A,setSortByDate:j,translateAll:n,liColor:C,setLiColor:y},o._id)),e.jsx(ie,{filtredElements:r,setLiColor:y})]})},{s:oe,m:st}=S.indents,ct=()=>e.jsx(q,{$p:`0 ${st} ${oe} ${oe}`,children:e.jsx(tt,{})});export{ct as default};
