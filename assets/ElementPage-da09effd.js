import{s as f,t as S,u as L,j as s,T as be,U as oe,P as h,b as ae,q as P,y as O,S as xe,V as R,K as M,w as J,D as Q,W as X,X as G,Q as T,Y as ge,n as F,Z as Y,r as E,_ as ve,$ as ye,a0 as H,a1 as ke,F as q,C as Ae,A as je,z as Ce,a2 as we,J as Ee}from"./index-7132a669.js";import{T as Se}from"./index.esm-c2125d1a.js";import{a as Te}from"./index.esm-9667a417.js";import{v as Be,u as Le}from"./index.esm-50fff1d9.js";import{S as Fe}from"./index.esm-8a0daba0.js";const _=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],z=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=S,We=f.div`
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
    /* stroke: ${({$colored:l})=>l&&U.yellow}; */

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
`,Re=()=>{const l=L(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(g=>g.removeAttribute("style")),l(oe(null))};return s.jsx(We,{onClick:o,children:s.jsx(be,{size:"26px"})})},{background:Z,backgroundHoverd:D,white:I,borderLight:V}=S.colors,{button:N}=S.shadows,ce=({filtredElements:l,setLiColor:o})=>{const x=L(),{user:g}=ae(),{activeCluster:c}=P(),{activeElement:u}=O(),m=({value:r})=>{x(J({_id:c._id,lang:r})).unwrap().then(t=>x(Q(t.result.cluster)))},v=({value:r})=>{x(J({_id:c._id,rate:r})).unwrap().then(t=>x(Q(t.result.cluster)))},i=({value:r})=>{const t=new FormData;t.append("lang",r),x(X(t))},A=({value:r})=>{const t=new FormData;t.append("rate",r),x(X(t))},$=r=>{o(Z);let t="";const e="$*@",n=l.findIndex(a=>a.element===u),p=l.splice(n===-1?0:n);for(let a=0;a<p.length;a+=1){const{element:d}=p[a];d.endsWith(".")||d.endsWith("!")||d.endsWith("?")||d.endsWith('"')?t+=d.replaceAll(",`",";").replaceAll(" `",` ${e}`).replaceAll("...",`__${e}`).replaceAll(".",`.${e}`).replaceAll(",",`,${e}`).replaceAll("!",`!${e}`).replaceAll("?",`?${e}`).replaceAll(":",`:${e}`).replaceAll(`0.${e}`,"0.").replaceAll(`1.${e}`,"1.").replaceAll(`2.${e}`,"2.").replaceAll(`3.${e}`,"3.").replaceAll(`4.${e}`,"4.").replaceAll(`5.${e}`,"5.").replaceAll(`6.${e}`,"6.").replaceAll(`7.${e}`,"7.").replaceAll(`8.${e}`,"8.").replaceAll(`9.${e}`,"9.").replaceAll(`,${e} oder?`,", oder?").replaceAll(`,${e} bitte.`,", bitte.").replaceAll(`,${e} danke.`,", danke."):t+=d.replaceAll(".",e)+e}const b=G({setLiColor:o,divider:e,text:t,lang:c.lang,rate:c.rate});r.target.blur(),b&&T.error(b)},j=r=>{o(Z);let t="";const e="$*@",n=l.findIndex(a=>a.element===u),p=l.splice(n===-1?0:n);for(let a=0;a<p.length;a+=1){const{element:d,caption:y,lang:C}=p[a];t+=d+`@±@${C}`+y+e}const b=ge({setLiColor:o,divider:e,text:t,lang:c.lang,rate:c.rate});r.target.blur(),b&&T.error(b)};return s.jsxs(xe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[s.jsx(R,{options:_,defaultValue:_.find(r=>r.value===(c==null?void 0:c.lang)),onChange:m,placeholder:"Language...",$ol:D,$b:I,$bh:V}),s.jsx(R,{options:z,defaultValue:z.find(r=>r.value==(c==null?void 0:c.rate)),onChange:v,placeholder:"Rate...",$ol:D,$b:I,$bh:V}),s.jsx(M,{onClick:$,$s:"m",$bs:N,children:"play"}),s.jsx(Re,{}),s.jsx(M,{onClick:j,$s:"m",$bs:N,children:"all"}),s.jsx(R,{options:_,defaultValue:_.find(r=>r.value===g.lang),onChange:i,$ol:D,$b:I,$bh:V}),s.jsx(R,{options:z,defaultValue:z.find(r=>r.value==g.rate),onChange:A,$ol:D,$b:I,$bh:V})]})};ce.propTypes={filtredElements:h.array,setLiColor:h.func};const{colors:k,shadows:ee,indents:te}=S,_e=F`
  margin-bottom: 7px;
  padding-block: ${te.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:l})=>l};
  border-radius: ${te.xs};
  font-size: 22px;
`,ze=f.li`
  ${_e}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${k.accent};
    box-shadow: ${ee.back};
  }

  &:hover {
    border-color: ${k.border};
    box-shadow: ${ee.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,ie=F`
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
    color: ${({$hovered:l})=>l?k.yellow:"transparent"};
    stroke: ${({$hovered:l})=>l?k.yellow:k.border};
  }
  &:hover svg {
    stroke: ${k.placeholder};
  }
`,Ie=f.label`
  ${ie}
  opacity: ${({$hovered:l})=>l?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${k.border};
    border-radius: 50%;
    color: ${({$hovered:l})=>l?k.border:"transparent"};
  }
  &:hover svg {
    border-color: ${k.placeholder};
    color: ${({$hovered:l})=>l?k.placeholder:"transparent"};
  }
`,W=F`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${k.black};

  & svg {
    transition: color 250ms;
    color: ${k.border};
  }
  &:hover,
  &:hover svg {
    color: ${k.placeholder};
  }
`,Ve=f.button`
  ${W}

  opacity: ${({$hovered:l})=>l?1:0};
`,se=f.button`
  ${W}

  opacity: 0;
`,{colors:B,indents:de}=S,pe=F`
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
`,le=f.textarea`
  outline: none;
  border: 1px solid ${B.accent};
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
    border: 1px solid ${B.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${B.placeholder};
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
`,ne=f.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${de.xs};
  color: ${B.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${B.background};
  }
`,ue=F`
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
`,he=({el:l,sortByDate:o,setSortByDate:x,setLiColor:g})=>{const{activeCluster:c}=P(),{element:u,caption:m}=l,v=t=>{let e="";const n="$*@";u.trim().endsWith(".")||u.trim().endsWith("!")||u.trim().endsWith("?")||u.endsWith('"')?e=u.trim().replaceAll(",`",";").replaceAll(" `",` ${n}`).replaceAll("...",`__${n}`).replaceAll(".",`.${n}`).replaceAll(",",`,${n}`).replaceAll("!",`!${n}`).replaceAll("?",`?${n}`).replaceAll(":",`:${n}`).replaceAll(`0.${n}`,"0.").replaceAll(`1.${n}`,"1.").replaceAll(`2.${n}`,"2.").replaceAll(`3.${n}`,"3.").replaceAll(`4.${n}`,"4.").replaceAll(`5.${n}`,"5.").replaceAll(`6.${n}`,"6.").replaceAll(`7.${n}`,"7.").replaceAll(`8.${n}`,"8.").replaceAll(`9.${n}`,"9.").replaceAll(`,${n} oder?`,", oder?").replaceAll(`,${n} bitte.`,", bitte.").replaceAll(`,${n} danke.`,", danke."):e=u.trim()+n;const p=G({setLiColor:g,divider:n,text:e,lang:c.lang,rate:c.rate});t.target.blur(),p&&T.error(p)},i=()=>{const t=m.includes("(")?m.substring(0,m.indexOf("(")):m,e=G({setLiColor:g,text:t,lang:l.lang,rate:l.rate});e&&T.error(e)},A=t=>{x(!o),o?T.success("Below is Recent"):T.success("Above is Recent"),t.stopImmediatePropagation()},$=m.endsWith("mp3"),j=!$&&m.startsWith("http"),r=!$&&!j;return s.jsxs(Oe,{children:[s.jsx(ne,{onClick:v,children:u}),s.jsx(Ue,{onClick:A}),$&&s.jsx(Je,{controls:!0,src:Y(m)}),j&&s.jsx(Me,{src:Y(m)}),r&&s.jsx(ne,{onClick:i,children:m})]})};he.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,$active:h.bool,$hovered:h.bool,setLiColor:h.func};const me=({el:l,article:o,isForm:x,setIsForm:g})=>{const c=L(),{user:u}=ae(),{activeCluster:m}=P(),{_id:v,element:i,caption:A}=l,$=x+24,{register:j,watch:r,setValue:t,handleSubmit:e,setFocus:n}=Le({mode:"onBlur",defaultValues:{element:i,caption:A}});E.useEffect(()=>{n("element"),o&&i.trim().startsWith("der")?t("element",o+i.replace("der","").trim()+", "):o&&i.trim().startsWith("die")?t("element",o+i.replace("die","").trim()+", "):o&&i.trim().startsWith("das")?t("element",o+i.replace("das","").trim()+", "):o?t("element",o+i+", "):t("element",o+i)},[o,i,n,t]),E.useEffect(()=>{const a=async d=>{d.key==="+"&&(d.preventDefault(),await b(),e(p)()),d.key==="Enter"&&(d.preventDefault(),e(p)()),d.key==="Escape"&&g(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const p=a=>{const d=u.lang;let y=a.element.trim(),C=a.caption.trim();y.endsWith(",")&&(y=y.substring(0,y.length-1)),y.includes(" ·")&&(y=y.replaceAll(" ·",",")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),c(H({_id:v,lang:d,element:y,caption:C})),g(!1)},b=async()=>{const a=r("element"),d={from:m.lang,to:u.lang},y=await ke(a,d);t("caption",y)};return s.jsxs(Pe,{onSubmit:e(p),children:[s.jsx(le,{...j("element"),style:{height:$}}),s.jsxs(Ge,{children:[s.jsx(He,{children:s.jsx(ve,{size:"16px"})}),s.jsx(qe,{type:"button",onClick:()=>g($),children:s.jsx(ye,{size:"16px"})}),s.jsx(Ke,{type:"button",onClick:b,children:s.jsx(Fe,{size:"16px"})})]}),s.jsx(le,{...j("caption"),style:{height:$}})]})};me.propTypes={el:h.object,article:h.string,isForm:h.oneOfType([h.bool,h.number]),setIsForm:h.func};const fe=({el:l,sortByDate:o,setSortByDate:x,liColor:g,setLiColor:c})=>{const u=L(),{elementTrash:m,activeElement:v}=O(),[i,A]=E.useState(!1),{_id:$,element:j,favorite:r,checked:t}=l,e=m.find(w=>w._id===$),n=j===v,[p,b]=E.useState("");E.useEffect(()=>{const w=document.getElementById("active-element");w?(()=>{w==null||w.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const a=()=>{u(H({_id:$,favorite:!r}))},d=()=>{u(H({_id:$,checked:!t}))},y=()=>u(we(l)),C=w=>{if(i)A(!1);else{const K=w.target.closest("div").clientHeight;A(K)}},$e=()=>{p===""&&b("der "),p==="der "&&b("die "),p==="die "&&b("das "),p==="das "&&b("")};return s.jsxs(ze,{id:n?"active-element":null,onClick:()=>u(oe(j)),liColor:g,children:[s.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(De,{$hovered:r,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:r,onChange:a}),s.jsx(Se,{size:"20px"})]}),s.jsxs(Ie,{$hovered:t,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:t,onChange:d}),s.jsx(Ae,{size:"15px"})]})]}),i&&s.jsx(me,{el:l,article:p,isForm:i,setIsForm:A}),!i&&s.jsx(he,{el:l,sortByDate:o,setSortByDate:x,setLiColor:c}),s.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(Ve,{$hovered:e,onClick:y,children:s.jsx(je,{size:"16px"})}),i&&s.jsx(se,{onClick:$e,children:s.jsx(Te,{size:"18px"})}),s.jsx(se,{onClick:C,children:s.jsx(Ce,{size:"15px"})})]})]})};fe.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,liColor:h.string,setLiColor:h.func};const Qe=f.ul`
  width: 100%;
  list-style: none;
`,{white:Xe}=S.colors,Ye=()=>{const l=L(),{activeCluster:o}=P(),{allElements:x,elementTrash:g,elementFilter:c}=O(),[u,m]=E.useState(Xe);let{elementSelect:v}=O();v=v||[];const[i,A]=E.useState(!1);E.useEffect(()=>{l(Ee())},[l]);const $=x.filter(t=>t.cluster===(o==null?void 0:o._id)).sort((t,e)=>t.createdAt.localeCompare(e.createdAt)),r=(()=>{const t=g.map(e=>e._id);return v.includes("trash")?$.filter(e=>t.includes(e._id)):$})().filter(({element:t,caption:e,favorite:n,checked:p})=>{const b=t.toLowerCase().replace("·","").includes(c)||t.toLowerCase().includes(c)||e.toLowerCase().includes(c),a=v.includes("favorite")?b&&n===!0:b;return v.some(d=>["checked","unchecked"].includes(d))?v.includes("checked")?a&&p===!0:a&&p===!1:a}).sort(i?(t,e)=>e.createdAt.localeCompare(t.createdAt):(t,e)=>t.createdAt.localeCompare(e.createdAt));return s.jsxs(Qe,{children:[r.map(t=>s.jsx(fe,{el:t,sortByDate:i,setSortByDate:A,liColor:u,setLiColor:m},t._id)),s.jsx(ce,{filtredElements:r,setLiColor:m})]})},{s:re,m:Ze}=S.indents,nt=()=>s.jsx(q,{$p:`0 ${Ze} ${re} ${re}`,children:s.jsx(Ye,{})});export{nt as default};
