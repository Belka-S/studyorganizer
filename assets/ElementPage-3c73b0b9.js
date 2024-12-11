import{s as b,t as S,u as B,j as t,T as ke,U as ae,P as u,b as U,q as G,y as V,S as Ae,V as F,K as J,w as Q,D as X,W as Y,X as q,Q as T,Y as je,n as W,Z,r as w,_ as Ce,$ as we,a0 as O,a1 as ce,F as K,C as Ee,a2 as Se,A as Te,z as Be,a3 as We,J as Le}from"./index-e45d35e2.js";import{T as Fe}from"./index.esm-3d5e0bd4.js";import{a as Re}from"./index.esm-13cebf1f.js";import{v as _e,u as ze}from"./index.esm-cf8f83d6.js";import{S as De}from"./index.esm-05116c69.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],_=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:H}=S,Ie=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${H.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${H.placeholder};
    /* stroke: ${({$colored:l})=>l&&H.yellow}; */

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
`,Ve=()=>{const l=B(),d=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(v=>v.removeAttribute("style")),l(ae(null))};return t.jsx(Ie,{onClick:d,children:t.jsx(ke,{size:"26px"})})},{background:N,backgroundHoverd:z,white:D,borderLight:I}=S.colors,{button:ee}=S.shadows,ie=({filtredElements:l,setLiColor:d})=>{const f=B(),{user:v}=U(),{activeCluster:m}=G(),{activeElement:k}=V(),y=({value:a})=>{f(Q({_id:m._id,lang:a})).unwrap().then(r=>f(X(r.result.cluster)))},$=({value:a})=>{f(Q({_id:m._id,rate:a})).unwrap().then(r=>f(X(r.result.cluster)))},c=({value:a})=>{const r=new FormData;r.append("lang",a),f(Y(r))},C=({value:a})=>{const r=new FormData;r.append("rate",a),f(Y(r))},j=a=>{d(N);let r="";const s="$*@",n=l.findIndex(i=>i.element===k),e=l.splice(n===-1?0:n);for(let i=0;i<e.length;i+=1){const{element:o}=e[i];o.endsWith(".")||o.endsWith("!")||o.endsWith("?")||o.endsWith('"')?r+=o.replaceAll(",`",";").replaceAll(" `",` ${s}`).replaceAll("...",`__${s}`).replaceAll(".",`.${s}`).replaceAll(",",`,${s}`).replaceAll("!",`!${s}`).replaceAll("?",`?${s}`).replaceAll(":",`:${s}`).replaceAll(`0.${s}`,"0.").replaceAll(`1.${s}`,"1.").replaceAll(`2.${s}`,"2.").replaceAll(`3.${s}`,"3.").replaceAll(`4.${s}`,"4.").replaceAll(`5.${s}`,"5.").replaceAll(`6.${s}`,"6.").replaceAll(`7.${s}`,"7.").replaceAll(`8.${s}`,"8.").replaceAll(`9.${s}`,"9.").replaceAll(`,${s} oder?`,", oder?").replaceAll(`,${s} bitte.`,", bitte.").replaceAll(`,${s} danke.`,", danke."):o.startsWith("[")||(r+=o.replaceAll(".",s)+s)}const h=q({setLiColor:d,divider:s,text:r,lang:m.lang,rate:m.rate});a.target.blur(),h&&T.error(h)},x=a=>{d(N);let r="";const s="$*@",n=l.findIndex(i=>i.element===k),e=l.splice(n===-1?0:n);for(let i=0;i<e.length;i+=1){const{element:o,caption:p,lang:A}=e[i];o.startsWith("[")||(r+=o+`@±@${A}`+p+s)}const h=je({setLiColor:d,divider:s,text:r,lang:m.lang,rate:v.rate});a.target.blur(),h&&T.error(h)};return t.jsxs(Ae,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(F,{options:R,defaultValue:R.find(a=>a.value===(m==null?void 0:m.lang)),onChange:y,placeholder:"Language...",$ol:z,$b:D,$bh:I}),t.jsx(F,{options:_,defaultValue:_.find(a=>a.value==(m==null?void 0:m.rate)),onChange:$,placeholder:"Rate...",$ol:z,$b:D,$bh:I}),t.jsx(J,{onClick:j,$s:"m",$bs:ee,children:"play"}),t.jsx(Ve,{}),t.jsx(J,{onClick:x,$s:"m",$bs:ee,children:"all"}),t.jsx(F,{options:R,defaultValue:R.find(a=>a.value===v.lang),onChange:c,$ol:z,$b:D,$bh:I}),t.jsx(F,{options:_,defaultValue:_.find(a=>a.value==v.rate),onChange:C,$ol:z,$b:D,$bh:I})]})};ie.propTypes={filtredElements:u.array,setLiColor:u.func};const{colors:g,shadows:te,indents:se}=S,Oe=W`
  margin-bottom: 7px;
  padding-block: ${se.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:l})=>l};
  border-radius: ${se.xs};
  font-size: 22px;
`,Pe=b.li`
  ${Oe}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${g.border};
    background-color: ${g.background};
    box-shadow: ${te.back};

    &:hover {
      border-color: ${g.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${g.smokeBlack};
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${g.smokeBlack};
    }
  }

  &:hover {
    border-color: ${g.accent};
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
`,Ue=b.label`
  ${de}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:l})=>l?g.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?g.yellow:g.border};
  }
  &:hover svg {
    stroke: ${g.placeholder};
  }
`,Ge=b.label`
  ${de}
  opacity: ${({$hovered:l})=>l?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${g.border};
    border-radius: 50%;
    color: ${({$hovered:l})=>l?g.border:"transparent"};
  }
  &:hover svg {
    border-color: ${g.placeholder};
    color: ${({$hovered:l})=>l?g.placeholder:"transparent"};
  }
`,L=W`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${g.black};

  & svg {
    transition: color 250ms;
    color: ${g.border};
  }
  &:hover,
  &:hover svg {
    color: ${g.placeholder};
  }
`,He=b.button`
  ${L}

  opacity: ${({$hovered:l})=>l?1:0};
`,ne=b.button`
  ${L}

  opacity: 0;
`,{colors:P,indents:pe}=S,ue=W`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,qe=b.div`
  ${ue}
`,Ke=b.form`
  ${ue}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,le=b.textarea`
  outline: none;
  border: 1px solid ${P.accent};
  border-radius: ${pe.xs};
  resize: none;
`,Me=b.div`
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
    border: 1px solid ${P.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${P.placeholder};
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
  color: ${P.black};
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
`,fe=({el:l,sortByDate:d,setSortByDate:f,setLiColor:v})=>{const{user:m}=U(),{activeCluster:k}=G(),{element:y,caption:$}=l,c=s=>{let n="";const e="$*@";y.trim().endsWith(".")||y.trim().endsWith("!")||y.trim().endsWith("?")||y.endsWith('"')?n=y.trim().replaceAll(",`",";").replaceAll(" `",` ${e}`).replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9."):n=y.trim()+e;const h=q({setLiColor:v,divider:e,text:n,lang:k.lang,rate:k.rate});s.target.blur(),h&&T.error(h)},C=()=>{const s=$.includes("[")?$.substring(0,$.indexOf("[")):$,n=q({setLiColor:v,text:s,lang:l.lang,rate:m.rate});n&&T.error(n)},j=s=>{f(!d),d?T.success("Below is Recent"):T.success("Above is Recent"),s.stopImmediatePropagation()},x=$.endsWith("mp3"),a=!x&&$.startsWith("http"),r=!x&&!a;return t.jsxs(qe,{children:[t.jsx(re,{onClick:c,children:y}),t.jsx(Me,{onClick:j}),x&&t.jsx(Ze,{controls:!0,src:Z($)}),a&&t.jsx(Ye,{src:Z($)}),r&&t.jsx(re,{onClick:C,children:$})]})};fe.propTypes={el:u.object,sortByDate:u.bool,setSortByDate:u.func,$active:u.bool,$hovered:u.bool,setLiColor:u.func};const $e=({el:l,article:d,isForm:f,setIsForm:v})=>{const m=B(),{user:k}=U(),{activeCluster:y}=G(),{_id:$,element:c,caption:C}=l,j=f+24,{register:x,watch:a,setValue:r,handleSubmit:s,setFocus:n}=ze({mode:"onBlur",defaultValues:{element:c,caption:C}});w.useEffect(()=>{n("element"),d&&c.trim().startsWith("der")?r("element",d+c.replace("der","").trim()+", "):d&&c.trim().startsWith("die")?r("element",d+c.replace("die","").trim()+", "):d&&c.trim().startsWith("das")?r("element",d+c.replace("das","").trim()+", "):d?r("element",d+c+", "):r("element",d+c)},[d,c,n,r]),w.useEffect(()=>{const i=async o=>{o.key==="+"&&(o.preventDefault(),await h(),s(e)()),o.key==="Enter"&&(o.preventDefault(),s(e)()),o.key==="Escape"&&v(!1)};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[]);const e=i=>{const o=k.lang;let p=i.element.trim(),A=i.caption.trim();p.endsWith(",")&&(p=p.substring(0,p.length-1)),p.includes(" ·")&&(p=p.replaceAll(" ·",",")),A.endsWith(",")&&(A=A.substring(0,A.length-1)),m(O({_id:$,lang:o,element:p,caption:A})),v(!1)},h=async()=>{const i=a("element"),o={from:y.lang,to:k.lang},p=await ce(i,o);r("caption",p)};return t.jsxs(Ke,{onSubmit:s(e),children:[t.jsx(le,{...x("element"),style:{height:j}}),t.jsxs(Je,{children:[t.jsx(Qe,{children:t.jsx(Ce,{size:"16px"})}),t.jsx(Xe,{type:"button",onClick:()=>v(j),children:t.jsx(we,{size:"16px"})}),t.jsx(he,{type:"button",onClick:h,children:t.jsx(De,{size:"16px"})})]}),t.jsx(le,{...x("caption"),style:{height:j}})]})};$e.propTypes={el:u.object,article:u.string,isForm:u.oneOfType([u.bool,u.number]),setIsForm:u.func};const xe=({el:l,index:d,length:f,sortByDate:v,setSortByDate:m,translateAll:k,liColor:y,setLiColor:$})=>{const c=B(),{elementTrash:C,activeElement:j}=V(),[x,a]=w.useState(!1),{_id:r,element:s,favorite:n,checked:e}=l,h=C.find(E=>E._id===r),i=s===j,[o,p]=w.useState("");w.useEffect(()=>{const E=document.getElementById("active-element");(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const A=()=>{c(O({_id:r,favorite:!n}))},be=()=>{c(O({_id:r,checked:!e}))},ge=()=>c(We(l)),ve=E=>{if(x)a(!1);else{const M=E.target.closest("div").clientHeight;a(M)}},ye=()=>{o===""&&p("der "),o==="der "&&p("die "),o==="die "&&p("das "),o==="das "&&p("")};return t.jsxs(Pe,{id:i?"active-element":null,onClick:()=>c(ae(s)),liColor:y,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Ue,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:A}),t.jsx(Fe,{size:"20px"})]}),t.jsxs(Ge,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:be}),t.jsx(Ee,{size:"15px"})]}),x&&f===d+1&&t.jsx(he,{onClick:k,children:t.jsx(Se,{size:"16px"})})]}),x&&t.jsx($e,{el:l,article:o,isForm:x,setIsForm:a}),!x&&t.jsx(fe,{el:l,sortByDate:v,setSortByDate:m,setLiColor:$}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(He,{$hovered:h,onClick:ge,children:t.jsx(Te,{size:"16px"})}),x&&t.jsx(ne,{onClick:ye,children:t.jsx(Re,{size:"18px"})}),t.jsx(ne,{onClick:ve,children:t.jsx(Be,{size:"15px"})})]})]})};xe.propTypes={el:u.object,index:u.string,length:u.string,sortByDate:u.bool,setSortByDate:u.func,translateAll:u.func,liColor:u.string,setLiColor:u.func};const Ne=b.ul`
  width: 100%;
  list-style: none;
`,{white:et}=S.colors,tt=()=>{const l=B(),{user:d}=U(),{activeCluster:f}=G(),{allElements:v,elementTrash:m,elementFilter:k}=V(),[y,$]=w.useState(et);let{elementSelect:c}=V();c=c||[];const[C,j]=w.useState(!1);w.useEffect(()=>{l(Le())},[l]);const x=v.filter(n=>n.cluster===(f==null?void 0:f._id)).sort((n,e)=>n.createdAt.localeCompare(e.createdAt)),r=(()=>{const n=m.map(e=>e._id);return c.includes("trash")?x.filter(e=>n.includes(e._id)):x})().filter(({element:n,caption:e,favorite:h,checked:i})=>{const o=n.toLowerCase().replace("·","").includes(k)||n.toLowerCase().includes(k)||e.toLowerCase().includes(k),p=c.includes("favorite")?o&&h===!0:o;return c.some(A=>["checked","unchecked"].includes(A))?c.includes("checked")?p&&i===!0:p&&i===!1:p}).sort(C?(n,e)=>e.createdAt.localeCompare(n.createdAt):(n,e)=>n.createdAt.localeCompare(e.createdAt)),s=async()=>{const n=d.lang;let e=0;await r.forEach(async h=>{if(e>1)return;const{_id:i,element:o}=h;if(!o.startsWith("[")||n!==h.lang){const p={from:f.lang,to:n},A=await ce(o,p);l(O({_id:i,lang:n,caption:A})),e=e+1}})};return t.jsxs(Ne,{children:[r.map((n,e,h)=>t.jsx(xe,{el:n,index:e,length:h.length,sortByDate:C,setSortByDate:j,translateAll:s,liColor:y,setLiColor:$},n._id)),t.jsx(ie,{filtredElements:r,setLiColor:$})]})},{s:oe,m:st}=S.indents,ct=()=>t.jsx(K,{$p:`0 ${st} ${oe} ${oe}`,children:t.jsx(tt,{})});export{ct as default};
