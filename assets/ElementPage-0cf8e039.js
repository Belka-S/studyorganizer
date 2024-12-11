import{s as f,t as S,u as B,j as t,T as be,U as ae,P as m,b as K,q as P,y as V,S as xe,V as F,K as J,w as Q,D as X,W as Y,X as G,Q as T,Y as ge,n as L,Z,r as w,_ as ve,$ as ye,a0 as H,a1 as ke,F as q,C as Ae,A as je,z as Ce,a2 as we,J as Ee}from"./index-a5f5993f.js";import{T as Se}from"./index.esm-4a91dbbb.js";import{a as Te}from"./index.esm-64cd7af5.js";import{v as Be,u as Le}from"./index.esm-1c1910b5.js";import{S as We}from"./index.esm-469748c0.js";const R=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],_=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=S,Fe=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${U.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${U.placeholder};
    /* stroke: ${({$colored:n})=>n&&U.yellow}; */

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
`,Re=()=>{const n=B(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(b=>b.removeAttribute("style")),n(ae(null))};return t.jsx(Fe,{onClick:o,children:t.jsx(be,{size:"26px"})})},{background:N,backgroundHoverd:z,white:D,borderLight:I}=S.colors,{button:ee}=S.shadows,ce=({filtredElements:n,setLiColor:o})=>{const g=B(),{user:b}=K(),{activeCluster:p}=P(),{activeElement:v}=V(),x=({value:r})=>{g(Q({_id:p._id,lang:r})).unwrap().then(s=>g(X(s.result.cluster)))},c=({value:r})=>{g(Q({_id:p._id,rate:r})).unwrap().then(s=>g(X(s.result.cluster)))},i=({value:r})=>{const s=new FormData;s.append("lang",r),g(Y(s))},j=({value:r})=>{const s=new FormData;s.append("rate",r),g(Y(s))},y=r=>{o(N);let s="";const e="$*@",u=n.findIndex(a=>a.element===v),l=n.splice(u===-1?0:u);for(let a=0;a<l.length;a+=1){const{element:d}=l[a];d.endsWith(".")||d.endsWith("!")||d.endsWith("?")||d.endsWith('"')?s+=d.replaceAll(",`",";").replaceAll(" `",` ${e}`).replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`,${e} oder?`,", oder?").replaceAll(`,${e} bitte.`,", bitte.").replaceAll(`,${e} danke.`,", danke."):d.startsWith("[")||(s+=d.replaceAll(".",e)+e)}const h=G({setLiColor:o,divider:e,text:s,lang:p.lang,rate:p.rate});r.target.blur(),h&&T.error(h)},A=r=>{o(N);let s="";const e="$*@",u=n.findIndex(a=>a.element===v),l=n.splice(u===-1?0:u);for(let a=0;a<l.length;a+=1){const{element:d,caption:k,lang:C}=l[a];s+=d+`@±@${C}`+k+e}const h=ge({setLiColor:o,divider:e,text:s,lang:p.lang,rate:b.rate});r.target.blur(),h&&T.error(h)};return t.jsxs(xe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(F,{options:R,defaultValue:R.find(r=>r.value===(p==null?void 0:p.lang)),onChange:x,placeholder:"Language...",$ol:z,$b:D,$bh:I}),t.jsx(F,{options:_,defaultValue:_.find(r=>r.value==(p==null?void 0:p.rate)),onChange:c,placeholder:"Rate...",$ol:z,$b:D,$bh:I}),t.jsx(J,{onClick:y,$s:"m",$bs:ee,children:"play"}),t.jsx(Re,{}),t.jsx(J,{onClick:A,$s:"m",$bs:ee,children:"all"}),t.jsx(F,{options:R,defaultValue:R.find(r=>r.value===b.lang),onChange:i,$ol:z,$b:D,$bh:I}),t.jsx(F,{options:_,defaultValue:_.find(r=>r.value==b.rate),onChange:j,$ol:z,$b:D,$bh:I})]})};ce.propTypes={filtredElements:m.array,setLiColor:m.func};const{colors:$,shadows:te,indents:se}=S,_e=L`
  margin-bottom: 7px;
  padding-block: ${se.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({liColor:n})=>n};
  border-radius: ${se.xs};
  font-size: 22px;
`,ze=f.li`
  ${_e}

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
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${$.smokeBlack};
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
`,ie=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Be}
  }
`,De=f.label`
  ${ie}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:n})=>n?$.yellow:"transparent"};
    stroke: ${({$hovered:n})=>n?$.yellow:$.border};
  }
  &:hover svg {
    stroke: ${$.placeholder};
  }
`,Ie=f.label`
  ${ie}
  opacity: ${({$hovered:n})=>n?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${$.border};
    border-radius: 50%;
    color: ${({$hovered:n})=>n?$.border:"transparent"};
  }
  &:hover svg {
    border-color: ${$.placeholder};
    color: ${({$hovered:n})=>n?$.placeholder:"transparent"};
  }
`,W=L`
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
`,Ve=f.button`
  ${W}

  opacity: ${({$hovered:n})=>n?1:0};
`,le=f.button`
  ${W}

  opacity: 0;
`,{colors:O,indents:de}=S,pe=L`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Oe=f.div`
  ${pe}
`,Pe=f.form`
  ${pe}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ne=f.textarea`
  outline: none;
  border: 1px solid ${O.accent};
  border-radius: ${de.xs};
  resize: none;
`,Ue=f.div`
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
`,Ge=f.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,He=f.button`
  ${W}
`,qe=f.button`
  ${W}
`,Ke=f.button`
  ${W}
`,re=f.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${de.xs};
  color: ${O.black};
  transition: background-color 250ms;
  /* overflow-x: auto; */
`,ue=L`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Me=f.iframe`
  ${ue}

  height: 60px;
  border-radius: 30px;
`,Je=f.audio`
  ${ue}
`,he=({el:n,sortByDate:o,setSortByDate:g,setLiColor:b})=>{const{user:p}=K(),{activeCluster:v}=P(),{element:x,caption:c}=n,i=e=>{let u="";const l="$*@";x.trim().endsWith(".")||x.trim().endsWith("!")||x.trim().endsWith("?")||x.endsWith('"')?u=x.trim().replaceAll(",`",";").replaceAll(" `",` ${l}`).replaceAll("...",`__${l}`).replaceAll(".",`.${l}`).replaceAll(",",`,${l}`).replaceAll("!",`!${l}`).replaceAll("?",`?${l}`).replaceAll(":",`:${l}`).replaceAll(`0.${l}`,"0.").replaceAll(`1.${l}`,"1.").replaceAll(`2.${l}`,"2.").replaceAll(`3.${l}`,"3.").replaceAll(`4.${l}`,"4.").replaceAll(`5.${l}`,"5.").replaceAll(`6.${l}`,"6.").replaceAll(`7.${l}`,"7.").replaceAll(`8.${l}`,"8.").replaceAll(`9.${l}`,"9."):u=x.trim()+l;const h=G({setLiColor:b,divider:l,text:u,lang:v.lang,rate:v.rate});e.target.blur(),h&&T.error(h)},j=()=>{const e=c.includes("[")?c.substring(0,c.indexOf("[")):c,u=G({setLiColor:b,text:e,lang:n.lang,rate:p.rate});u&&T.error(u)},y=e=>{g(!o),o?T.success("Below is Recent"):T.success("Above is Recent"),e.stopImmediatePropagation()},A=c.endsWith("mp3"),r=!A&&c.startsWith("http"),s=!A&&!r;return t.jsxs(Oe,{children:[t.jsx(re,{onClick:i,children:x}),t.jsx(Ue,{onClick:y}),A&&t.jsx(Je,{controls:!0,src:Z(c)}),r&&t.jsx(Me,{src:Z(c)}),s&&t.jsx(re,{onClick:j,children:c})]})};he.propTypes={el:m.object,sortByDate:m.bool,setSortByDate:m.func,$active:m.bool,$hovered:m.bool,setLiColor:m.func};const me=({el:n,article:o,isForm:g,setIsForm:b})=>{const p=B(),{user:v}=K(),{activeCluster:x}=P(),{_id:c,element:i,caption:j}=n,y=g+24,{register:A,watch:r,setValue:s,handleSubmit:e,setFocus:u}=Le({mode:"onBlur",defaultValues:{element:i,caption:j}});w.useEffect(()=>{u("element"),o&&i.trim().startsWith("der")?s("element",o+i.replace("der","").trim()+", "):o&&i.trim().startsWith("die")?s("element",o+i.replace("die","").trim()+", "):o&&i.trim().startsWith("das")?s("element",o+i.replace("das","").trim()+", "):o?s("element",o+i+", "):s("element",o+i)},[o,i,u,s]),w.useEffect(()=>{const a=async d=>{d.key==="+"&&(d.preventDefault(),await h(),e(l)()),d.key==="Enter"&&(d.preventDefault(),e(l)()),d.key==="Escape"&&b(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const l=a=>{const d=v.lang;let k=a.element.trim(),C=a.caption.trim();k.endsWith(",")&&(k=k.substring(0,k.length-1)),k.includes(" ·")&&(k=k.replaceAll(" ·",",")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),p(H({_id:c,lang:d,element:k,caption:C})),b(!1)},h=async()=>{const a=r("element"),d={from:x.lang,to:v.lang},k=await ke(a,d);s("caption",k)};return t.jsxs(Pe,{onSubmit:e(l),children:[t.jsx(ne,{...A("element"),style:{height:y}}),t.jsxs(Ge,{children:[t.jsx(He,{children:t.jsx(ve,{size:"16px"})}),t.jsx(qe,{type:"button",onClick:()=>b(y),children:t.jsx(ye,{size:"16px"})}),t.jsx(Ke,{type:"button",onClick:h,children:t.jsx(We,{size:"16px"})})]}),t.jsx(ne,{...A("caption"),style:{height:y}})]})};me.propTypes={el:m.object,article:m.string,isForm:m.oneOfType([m.bool,m.number]),setIsForm:m.func};const fe=({el:n,sortByDate:o,setSortByDate:g,liColor:b,setLiColor:p})=>{const v=B(),{elementTrash:x,activeElement:c}=V(),[i,j]=w.useState(!1),{_id:y,element:A,favorite:r,checked:s}=n,e=x.find(E=>E._id===y),u=A===c,[l,h]=w.useState("");w.useEffect(()=>{const E=document.getElementById("active-element");(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const a=()=>{v(H({_id:y,favorite:!r}))},d=()=>{v(H({_id:y,checked:!s}))},k=()=>v(we(n)),C=E=>{if(i)j(!1);else{const M=E.target.closest("div").clientHeight;j(M)}},$e=()=>{l===""&&h("der "),l==="der "&&h("die "),l==="die "&&h("das "),l==="das "&&h("")};return t.jsxs(ze,{id:u?"active-element":null,onClick:()=>v(ae(A)),liColor:b,children:[t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(De,{$hovered:r,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:r,onChange:a}),t.jsx(Se,{size:"20px"})]}),t.jsxs(Ie,{$hovered:s,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:s,onChange:d}),t.jsx(Ae,{size:"15px"})]})]}),i&&t.jsx(me,{el:n,article:l,isForm:i,setIsForm:j}),!i&&t.jsx(he,{el:n,sortByDate:o,setSortByDate:g,setLiColor:p}),t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(Ve,{$hovered:e,onClick:k,children:t.jsx(je,{size:"16px"})}),i&&t.jsx(le,{onClick:$e,children:t.jsx(Te,{size:"18px"})}),t.jsx(le,{onClick:C,children:t.jsx(Ce,{size:"15px"})})]})]})};fe.propTypes={el:m.object,sortByDate:m.bool,setSortByDate:m.func,liColor:m.string,setLiColor:m.func};const Qe=f.ul`
  width: 100%;
  list-style: none;
`,{white:Xe}=S.colors,Ye=()=>{const n=B(),{activeCluster:o}=P(),{allElements:g,elementTrash:b,elementFilter:p}=V(),[v,x]=w.useState(Xe);let{elementSelect:c}=V();c=c||[];const[i,j]=w.useState(!1);w.useEffect(()=>{n(Ee())},[n]);const y=g.filter(s=>s.cluster===(o==null?void 0:o._id)).sort((s,e)=>s.createdAt.localeCompare(e.createdAt)),r=(()=>{const s=b.map(e=>e._id);return c.includes("trash")?y.filter(e=>s.includes(e._id)):y})().filter(({element:s,caption:e,favorite:u,checked:l})=>{const h=s.toLowerCase().replace("·","").includes(p)||s.toLowerCase().includes(p)||e.toLowerCase().includes(p),a=c.includes("favorite")?h&&u===!0:h;return c.some(d=>["checked","unchecked"].includes(d))?c.includes("checked")?a&&l===!0:a&&l===!1:a}).sort(i?(s,e)=>e.createdAt.localeCompare(s.createdAt):(s,e)=>s.createdAt.localeCompare(e.createdAt));return t.jsxs(Qe,{children:[r.map(s=>t.jsx(fe,{el:s,sortByDate:i,setSortByDate:j,liColor:v,setLiColor:x},s._id)),t.jsx(ce,{filtredElements:r,setLiColor:x})]})},{s:oe,m:Ze}=S.indents,nt=()=>t.jsx(q,{$p:`0 ${Ze} ${oe} ${oe}`,children:t.jsx(Ye,{})});export{nt as default};
