import{s as $,t as S,u as B,j as t,T as ke,U as ce,P as u,b as O,q as U,y as V,S as Ae,V as F,K as Q,w as X,D as Y,W as Z,X as q,Q as T,Y as je,n as W,Z as N,r as w,_ as Ce,$ as we,a0 as M,a1 as ie,F as K,C as Ee,a2 as Se,A as Te,z as Be,a3 as We,J as Le}from"./index-f0cfca84.js";import{T as Fe}from"./index.esm-37abfd7f.js";import{a as Re}from"./index.esm-566b6be8.js";import{v as _e,u as ze}from"./index.esm-350ff402.js";import{S as De}from"./index.esm-907da6c5.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],_=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:H}=S,Ie=$.div`
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
    /* stroke: ${({$colored:r})=>r&&H.yellow}; */

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
`,Ve=()=>{const r=B(),p=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(g=>g.removeAttribute("style")),r(ce(null))};return t.jsx(Ie,{onClick:p,children:t.jsx(ke,{size:"26px"})})},{background:ee,backgroundHoverd:z,white:D,borderLight:I}=S.colors,{button:te}=S.shadows,de=({filtredElements:r,setLiColor:p})=>{const m=B(),{user:g}=O(),{activeCluster:h}=U(),{activeElement:y}=V(),j=({value:n})=>{m(X({_id:h._id,lang:n})).unwrap().then(i=>m(Y(i.result.cluster)))},x=({value:n})=>{m(X({_id:h._id,rate:n})).unwrap().then(i=>m(Y(i.result.cluster)))},c=({value:n})=>{const i=new FormData;i.append("lang",n),m(Z(i))},A=({value:n})=>{const i=new FormData;i.append("rate",n),m(Z(i))},k=(n,i)=>n.replaceAll(",`",";").replaceAll(" `",` ${i}`),b=n=>{p(ee);let i="";const e="$*@",l=r.findIndex(o=>o.element===y),s=r.splice(l===-1?0:l);for(let o=0;o<s.length;o+=1){const{element:a}=s[o];a.endsWith(".")||a.endsWith("!")||a.endsWith("?")||a.endsWith('"')?i+=k(a,e).replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`Mr.${e}`,"mister").replaceAll(`Ms.${e}`,"miss").replaceAll(`Mrs.${e}`,"missis"):a.startsWith("[")||(i+=a.replaceAll(".",e)+e)}const d=q({setLiColor:p,divider:e,text:i,lang:h.lang,rate:h.rate});n.target.blur(),d&&T.error(d)},C=n=>{p(ee);let i="";const e="$*@",l=r.findIndex(o=>o.element===y),s=r.splice(l===-1?0:l);for(let o=0;o<s.length;o+=1){const{element:a,caption:v,lang:G}=s[o];a.startsWith("[")||(i+=k(a,"")+`@±@${G}`+v+e)}const d=je({setLiColor:p,divider:e,text:i,lang:h.lang,rate:g.rate});n.target.blur(),d&&T.error(d)};return t.jsxs(Ae,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(F,{options:R,defaultValue:R.find(n=>n.value===(h==null?void 0:h.lang)),onChange:j,placeholder:"Language...",$ol:z,$b:D,$bh:I}),t.jsx(F,{options:_,defaultValue:_.find(n=>n.value==(h==null?void 0:h.rate)),onChange:x,placeholder:"Rate...",$ol:z,$b:D,$bh:I}),t.jsx(Q,{onClick:b,$s:"m",$bs:te,children:"play"}),t.jsx(Ve,{}),t.jsx(Q,{onClick:C,$s:"m",$bs:te,children:"all"}),t.jsx(F,{options:R,defaultValue:R.find(n=>n.value===g.lang),onChange:c,$ol:z,$b:D,$bh:I}),t.jsx(F,{options:_,defaultValue:_.find(n=>n.value==g.rate),onChange:A,$ol:z,$b:D,$bh:I})]})};de.propTypes={filtredElements:u.array,setLiColor:u.func};const{colors:f,shadows:se,indents:le}=S,Me=W`
  margin-bottom: 7px;
  padding-block: ${le.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:r})=>r};
  border-radius: ${le.xs};
  font-size: 22px;
`,Pe=$.li`
  ${Me}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${f.border};
    background-color: ${f.background};
    box-shadow: ${se.back};

    &:hover {
      border-color: ${f.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${f.smokeBlack};
      &:hover {
        color: ${f.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${f.hovered};
    }
  }

  &:hover {
    border-color: ${f.accent};
    box-shadow: ${se.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,pe=W`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${_e}
  }
`,Oe=$.label`
  ${pe}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:r})=>r?f.yellow:"transparent"};
    stroke: ${({$hovered:r})=>r?f.yellow:f.border};
  }
  &:hover svg {
    stroke: ${f.placeholder};
  }
`,Ue=$.label`
  ${pe}
  opacity: ${({$hovered:r})=>r?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${f.border};
    border-radius: 50%;
    color: ${({$hovered:r})=>r?f.border:"transparent"};
  }
  &:hover svg {
    border-color: ${f.placeholder};
    color: ${({$hovered:r})=>r?f.placeholder:"transparent"};
  }
`,L=W`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${f.black};

  & svg {
    transition: color 250ms;
    color: ${f.border};
  }
  &:hover,
  &:hover svg {
    color: ${f.placeholder};
  }
`,Ge=$.button`
  ${L}

  opacity: ${({$hovered:r})=>r?1:0};
`,ne=$.button`
  ${L}

  opacity: 0;
`,{colors:P,indents:ue}=S,he=W`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=$.div`
  ${he}
`,qe=$.form`
  ${he}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,re=$.textarea`
  outline: none;
  border: 1px solid ${P.accent};
  border-radius: ${ue.xs};
  resize: none;
`,Ke=$.div`
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
`,Je=$.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Qe=$.button`
  ${L}
`,Xe=$.button`
  ${L}
`,me=$.button`
  ${L}
`,oe=$.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${ue.xs};
  color: ${P.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,fe=W`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Ye=$.iframe`
  ${fe}

  height: 60px;
  border-radius: 30px;
`,Ze=$.audio`
  ${fe}
`,$e=({el:r,sortByDate:p,setSortByDate:m,setLiColor:g})=>{const{user:h}=O(),{activeCluster:y}=U(),{element:j,caption:x}=r,c="$*@",A=(l,s)=>{let d="";return s?(l.trim().endsWith(".")||l.trim().endsWith("!")||l.trim().endsWith("?")||l.endsWith('"')?d=l.trim().replaceAll(",`",";").replaceAll(" `",` ${s}`).replaceAll("...",`__${s}`).replaceAll(".",`.${s}`).replaceAll(",",`,${s}`).replaceAll("!",`!${s}`).replaceAll("?",`?${s}`).replaceAll(":",`:${s}`).replaceAll(`0.${s}`,"0.").replaceAll(`1.${s}`,"1.").replaceAll(`2.${s}`,"2.").replaceAll(`3.${s}`,"3.").replaceAll(`4.${s}`,"4.").replaceAll(`5.${s}`,"5.").replaceAll(`6.${s}`,"6.").replaceAll(`7.${s}`,"7.").replaceAll(`8.${s}`,"8.").replaceAll(`9.${s}`,"9.").replaceAll(`Mr.${s}`,"mister").replaceAll(`Ms.${s}`,"miss").replaceAll(`Mrs.${s}`,"missis"):d=l.trim()+s,d.includes("[")?d.substring(0,d.indexOf("[")):d):l},k=l=>{const s=q({setLiColor:g,divider:c,text:A(j,c),lang:y.lang,rate:y.rate});l.target.blur(),s&&T.error(s)},b=l=>{const s=q({setLiColor:g,divider:c,text:A(x,c),lang:r.lang,rate:h.rate});l.target.blur(),s&&T.error(s)},C=l=>{m(!p),p?T.success("Below is Recent"):T.success("Above is Recent"),l.stopImmediatePropagation()},n=x.endsWith("mp3"),i=!n&&x.startsWith("http"),e=!n&&!i;return t.jsxs(He,{children:[t.jsx(oe,{onClick:k,children:j}),t.jsx(Ke,{onClick:C}),n&&t.jsx(Ze,{controls:!0,src:N(x)}),i&&t.jsx(Ye,{src:N(x)}),e&&t.jsx(oe,{onClick:b,children:x})]})};$e.propTypes={el:u.object,sortByDate:u.bool,setSortByDate:u.func,$active:u.bool,$hovered:u.bool,setLiColor:u.func};const ge=({el:r,article:p,isForm:m,setIsForm:g})=>{const h=B(),{user:y}=O(),{activeCluster:j}=U(),{_id:x,element:c,caption:A}=r,k=m+24,{register:b,watch:C,setValue:n,handleSubmit:i,setFocus:e}=ze({mode:"onBlur",defaultValues:{element:c,caption:A}});w.useEffect(()=>{e("element"),p&&c.trim().startsWith("der")?n("element",p+c.replace("der","").trim()+", "):p&&c.trim().startsWith("die")?n("element",p+c.replace("die","").trim()+", "):p&&c.trim().startsWith("das")?n("element",p+c.replace("das","").trim()+", "):p?n("element",p+c+", "):n("element",p+c)},[p,c,e,n]),w.useEffect(()=>{const d=async o=>{o.key==="+"&&(o.preventDefault(),await s(),i(l)()),o.key==="Enter"&&(o.preventDefault(),i(l)()),o.key==="Escape"&&g(!1)};return addEventListener("keydown",d),()=>{removeEventListener("keydown",d)}},[]);const l=d=>{const o=y.lang;let a=d.element.split(/\s+/).join(" ").trim(),v=d.caption.trim();a.endsWith(",")&&(a=a.substring(0,a.length-1)),a.includes(" ·")&&(a=a.replaceAll(" ·",",")),v.endsWith(",")&&(v=v.substring(0,v.length-1)),h(M({_id:x,lang:o,element:a,caption:v})),g(!1)},s=async()=>{const d=C("element"),o={from:j.lang,to:y.lang},a=await ie(d,o);n("caption",a)};return t.jsxs(qe,{onSubmit:i(l),children:[t.jsx(re,{...b("element"),style:{height:k}}),t.jsxs(Je,{children:[t.jsx(Qe,{children:t.jsx(Ce,{size:"16px"})}),t.jsx(Xe,{type:"button",onClick:()=>g(k),children:t.jsx(we,{size:"16px"})}),t.jsx(me,{type:"button",onClick:s,children:t.jsx(De,{size:"16px"})})]}),t.jsx(re,{...b("caption"),style:{height:k}})]})};ge.propTypes={el:u.object,article:u.string,isForm:u.oneOfType([u.bool,u.number]),setIsForm:u.func};const be=({el:r,index:p,length:m,sortByDate:g,setSortByDate:h,translateAll:y,liColor:j,setLiColor:x})=>{const c=B(),{elementTrash:A,activeElement:k}=V(),[b,C]=w.useState(!1),{_id:n,element:i,favorite:e,checked:l}=r,s=A.find(E=>E._id===n),d=i===k,[o,a]=w.useState("");w.useEffect(()=>{const E=document.getElementById("active-element");(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const v=()=>{c(M({_id:n,favorite:!e}))},G=()=>{c(M({_id:n,checked:!l}))},xe=()=>c(We(r)),ye=E=>{if(b)C(!1);else{const J=E.target.closest("div").clientHeight;C(J)}},ve=()=>{o===""&&a("der "),o==="der "&&a("die "),o==="die "&&a("das "),o==="das "&&a("")};return t.jsxs(Pe,{id:d?"active-element":null,onClick:()=>c(ce(i)),liColor:j,children:[t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Oe,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:e,onChange:v}),t.jsx(Fe,{size:"20px"})]}),t.jsxs(Ue,{$hovered:l,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:G}),t.jsx(Ee,{size:"15px"})]}),b&&m===p+1&&t.jsx(me,{onClick:y,children:t.jsx(Se,{size:"16px"})})]}),b&&t.jsx(ge,{el:r,article:o,isForm:b,setIsForm:C}),!b&&t.jsx($e,{el:r,sortByDate:g,setSortByDate:h,setLiColor:x}),t.jsxs(K,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(Ge,{$hovered:s,onClick:xe,children:t.jsx(Te,{size:"16px"})}),b&&t.jsx(ne,{onClick:ve,children:t.jsx(Re,{size:"18px"})}),t.jsx(ne,{onClick:ye,children:t.jsx(Be,{size:"15px"})})]})]})};be.propTypes={el:u.object,index:u.string,length:u.string,sortByDate:u.bool,setSortByDate:u.func,translateAll:u.func,liColor:u.string,setLiColor:u.func};const Ne=$.ul`
  width: 100%;
  list-style: none;
`,{white:et}=S.colors,tt=()=>{const r=B(),{user:p}=O(),{activeCluster:m}=U(),{allElements:g,elementTrash:h,elementFilter:y}=V(),[j,x]=w.useState(et);let{elementSelect:c}=V();c=c||[];const[A,k]=w.useState(!1);w.useEffect(()=>{r(Le())},[r]);const b=g.filter(e=>e.cluster===(m==null?void 0:m._id)).sort((e,l)=>e.createdAt.localeCompare(l.createdAt)),n=(()=>{const e=h.map(l=>l._id);return c.includes("trash")?b.filter(l=>e.includes(l._id)):b})().filter(({element:e,caption:l,favorite:s,checked:d})=>{const o=e.toLowerCase().replace("·","").includes(y)||e.toLowerCase().includes(y)||l.toLowerCase().includes(y),a=c.includes("favorite")?o&&s===!0:o;return c.some(v=>["checked","unchecked"].includes(v))?c.includes("checked")?a&&d===!0:a&&d===!1:a}).sort(A?(e,l)=>l.createdAt.localeCompare(e.createdAt):(e,l)=>e.createdAt.localeCompare(l.createdAt)),i=async()=>{const e=p.lang;let l=0;await n.forEach(async s=>{if(l>1)return;const{_id:d,element:o}=s;if(!o.startsWith("[")||e!==s.lang){const a={from:m.lang,to:e},v=await ie(o,a);r(M({_id:d,lang:e,caption:v})),l=l+1}})};return t.jsxs(Ne,{children:[n.map((e,l,s)=>t.jsx(be,{el:e,index:l,length:s.length,sortByDate:A,setSortByDate:k,translateAll:i,liColor:j,setLiColor:x},e._id)),t.jsx(de,{filtredElements:n,setLiColor:x})]})},{s:ae,m:st}=S.indents,ct=()=>t.jsx(K,{$p:`0 ${st} ${ae} ${ae}`,children:t.jsx(tt,{})});export{ct as default};
