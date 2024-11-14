import{s as m,t as S,u as L,j as s,T as be,U as oe,P as h,b as ae,q as P,y as H,S as xe,V as R,K as M,w as J,D as Q,W as X,X as G,Q as T,Y as ge,n as F,Z as Y,r as E,_ as ve,$ as ye,a0 as O,a1 as ke,F as q,C as Ae,A as je,z as Ce,a2 as we,J as Ee}from"./index-c96874c8.js";import{T as Se}from"./index.esm-5b29f9a5.js";import{a as Te}from"./index.esm-ce9d4c33.js";import{v as Be,u as Le}from"./index.esm-5952325a.js";import{S as Fe}from"./index.esm-2473715e.js";const _=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],z=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=S,We=m.div`
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
`,Re=()=>{const l=L(),o=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(x=>x.removeAttribute("style")),l(oe(null))};return s.jsx(We,{onClick:o,children:s.jsx(be,{size:"26px"})})},{background:Z,backgroundHoverd:D,white:I,borderLight:V}=S.colors,{button:N}=S.shadows,ce=({filtredElements:l,setLiColor:o})=>{const b=L(),{user:x}=ae(),{activeCluster:c}=P(),{activeElement:u}=H(),g=({value:r})=>{b(J({_id:c._id,lang:r})).unwrap().then(e=>b(Q(e.result.cluster)))},v=({value:r})=>{b(J({_id:c._id,rate:r})).unwrap().then(e=>b(Q(e.result.cluster)))},i=({value:r})=>{const e=new FormData;e.append("lang",r),b(X(e))},A=({value:r})=>{const e=new FormData;e.append("rate",r),b(X(e))},f=r=>{o(Z);let e="";const t="$*@",n=l.findIndex(a=>a.element===u),p=l.splice(n===-1?0:n);for(let a=0;a<p.length;a+=1){const{element:d}=p[a];d.endsWith(".")||d.endsWith("!")||d.endsWith("?")||d.endsWith('"')?e+=d.replaceAll(",`",";").replaceAll(" `",` ${t}`).replaceAll("...",`__${t}`).replaceAll(".",`.${t}`).replaceAll(",",`,${t}`).replaceAll("!",`!${t}`).replaceAll("?",`?${t}`).replaceAll(":",`:${t}`).replaceAll(`0.${t}`,"0.").replaceAll(`1.${t}`,"1.").replaceAll(`2.${t}`,"2.").replaceAll(`3.${t}`,"3.").replaceAll(`4.${t}`,"4.").replaceAll(`5.${t}`,"5.").replaceAll(`6.${t}`,"6.").replaceAll(`7.${t}`,"7.").replaceAll(`8.${t}`,"8.").replaceAll(`9.${t}`,"9.").replaceAll(`,${t} oder?`,", oder?").replaceAll(`,${t} bitte.`,", bitte.").replaceAll(`,${t} danke.`,", danke."):e+=d.replaceAll(".",t)+t}const $=G({setLiColor:o,divider:t,text:e,lang:c.lang,rate:c.rate});r.target.blur(),$&&T.error($)},j=r=>{o(Z);let e="";const t="$*@",n=l.findIndex(a=>a.element===u),p=l.splice(n===-1?0:n);for(let a=0;a<p.length;a+=1){const{element:d,caption:y,lang:C}=p[a];e+=d+`@±@${C}`+y+t}const $=ge({setLiColor:o,divider:t,text:e,lang:c.lang,rate:c.rate});r.target.blur(),$&&T.error($)};return s.jsxs(xe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[s.jsx(R,{options:_,defaultValue:_.find(r=>r.value===(c==null?void 0:c.lang)),onChange:g,placeholder:"Language...",$ol:D,$b:I,$bh:V}),s.jsx(R,{options:z,defaultValue:z.find(r=>r.value==(c==null?void 0:c.rate)),onChange:v,placeholder:"Rate...",$ol:D,$b:I,$bh:V}),s.jsx(M,{onClick:f,$s:"m",$bs:N,children:"play"}),s.jsx(Re,{}),s.jsx(M,{onClick:j,$s:"m",$bs:N,children:"all"}),s.jsx(R,{options:_,defaultValue:_.find(r=>r.value===x.lang),onChange:i,$ol:D,$b:I,$bh:V}),s.jsx(R,{options:z,defaultValue:z.find(r=>r.value==x.rate),onChange:A,$ol:D,$b:I,$bh:V})]})};ce.propTypes={filtredElements:h.array,setLiColor:h.func};const{colors:k,shadows:ee,indents:te}=S,_e=F`
  margin-bottom: 7px;
  padding-block: ${te.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:l})=>l};
  border-radius: ${te.xs};
  font-size: 22px;
`,ze=m.li`
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
`,De=m.label`
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
`,Ie=m.label`
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
`,Ve=m.button`
  ${W}

  opacity: ${({$hovered:l})=>l?1:0};
`,se=m.button`
  ${W}

  opacity: 0;
`,{colors:B,indents:de}=S,pe=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,He=m.div`
  ${pe}
`,Pe=m.form`
  ${pe}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,le=m.textarea`
  outline: none;
  border: 1px solid ${B.accent};
  border-radius: ${de.xs};
  resize: none;
`,Ue=m.div`
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
`,Ge=m.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Oe=m.button`
  ${W}
`,qe=m.button`
  ${W}
`,Ke=m.button`
  ${W}
`,ne=m.button`
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
`,Me=m.iframe`
  ${ue}

  height: 60px;
  border-radius: 30px;
`,Je=m.audio`
  ${ue}
`,he=({el:l,sortByDate:o,setSortByDate:b,setLiColor:x})=>{const{activeCluster:c}=P(),{element:u,caption:g}=l,v=e=>{let t="";const n="$*@";u.trim().endsWith(".")||u.trim().endsWith("!")||u.trim().endsWith("?")||u.endsWith('"')?t=u.trim().replaceAll(",`",";").replaceAll(" `",` ${n}`).replaceAll("...",`__${n}`).replaceAll(".",`.${n}`).replaceAll(",",`,${n}`).replaceAll("!",`!${n}`).replaceAll("?",`?${n}`).replaceAll(":",`:${n}`).replaceAll(`0.${n}`,"0.").replaceAll(`1.${n}`,"1.").replaceAll(`2.${n}`,"2.").replaceAll(`3.${n}`,"3.").replaceAll(`4.${n}`,"4.").replaceAll(`5.${n}`,"5.").replaceAll(`6.${n}`,"6.").replaceAll(`7.${n}`,"7.").replaceAll(`8.${n}`,"8.").replaceAll(`9.${n}`,"9.").replaceAll(`,${n} oder?`,", oder?").replaceAll(`,${n} bitte.`,", bitte.").replaceAll(`,${n} danke.`,", danke."):t=u.trim()+n;const p=G({setLiColor:x,divider:n,text:t,lang:c.lang,rate:c.rate});e.target.blur(),p&&T.error(p)},i=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=G({setLiColor:x,text:g,lang:l.lang,rate:l.rate});e&&T.error(e)},A=e=>{b(!o),o?T.success("Below is Recent"):T.success("Above is Recent"),e.stopImmediatePropagation()},f=g.endsWith("mp3"),j=!f&&g.startsWith("http"),r=!f&&!j;return s.jsxs(He,{children:[s.jsx(ne,{onClick:v,children:u}),s.jsx(Ue,{onClick:A}),f&&s.jsx(Je,{controls:!0,src:Y(g)}),j&&s.jsx(Me,{src:Y(g)}),r&&s.jsx(ne,{onClick:i,children:g})]})};he.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,$active:h.bool,$hovered:h.bool,setLiColor:h.func};const me=({el:l,article:o,isForm:b,setIsForm:x})=>{const c=L(),{user:u}=ae(),{activeCluster:g}=P(),{_id:v,element:i,caption:A}=l,f=b+24,{register:j,watch:r,setValue:e,handleSubmit:t,setFocus:n}=Le({mode:"onBlur",defaultValues:{element:i,caption:A}});E.useEffect(()=>{n("element"),o&&i.trim().startsWith("der")?e("element",o+i.replace("der","").trim()+", "):o&&i.trim().startsWith("die")?e("element",o+i.replace("die","").trim()+", "):o&&i.trim().startsWith("das")?e("element",o+i.replace("das","").trim()+", "):o?e("element",o+i+", "):e("element",o+i)},[o,i,n,e]),E.useEffect(()=>{const a=async d=>{d.key==="+"&&(d.preventDefault(),await $(),t(p)()),d.key==="Enter"&&(d.preventDefault(),t(p)()),d.key==="Escape"&&x(!1)};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[]);const p=a=>{const d=u.lang;let y=a.element.trim(),C=a.caption.trim();y.endsWith(",")&&(y=y.substring(0,y.length-1)),y.includes(" ·")&&(y=y.replaceAll(" ·",",")),C.endsWith(",")&&(C=C.substring(0,C.length-1)),c(O({_id:v,lang:d,element:y,caption:C})),x(!1)},$=async()=>{const a=r("element"),d={from:g.lang,to:u.lang},y=await ke(a,d);e("caption",y)};return s.jsxs(Pe,{onSubmit:t(p),children:[s.jsx(le,{...j("element"),style:{height:f}}),s.jsxs(Ge,{children:[s.jsx(Oe,{children:s.jsx(ve,{size:"16px"})}),s.jsx(qe,{type:"button",onClick:()=>x(f),children:s.jsx(ye,{size:"16px"})}),s.jsx(Ke,{type:"button",onClick:$,children:s.jsx(Fe,{size:"16px"})})]}),s.jsx(le,{...j("caption"),style:{height:f}})]})};me.propTypes={el:h.object,article:h.string,isForm:h.oneOfType([h.bool,h.number]),setIsForm:h.func};const fe=({el:l,sortByDate:o,setSortByDate:b,liColor:x,setLiColor:c})=>{const u=L(),{elementTrash:g,activeElement:v}=H(),[i,A]=E.useState(!1),{_id:f,element:j,favorite:r,checked:e}=l,t=g.find(w=>w._id===f),n=j===v,[p,$]=E.useState("");E.useEffect(()=>{const w=document.getElementById("active-element");w?(()=>{w==null||w.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const a=()=>{u(O({_id:f,favorite:!r}))},d=()=>{u(O({_id:f,checked:!e}))},y=()=>u(we(l)),C=w=>{if(i)A(!1);else{const K=w.target.closest("div").clientHeight;A(K)}},$e=()=>{p===""&&$("der "),p==="der "&&$("die "),p==="die "&&$("das "),p==="das "&&$("")};return s.jsxs(ze,{id:n?"active-element":null,onClick:()=>u(oe(j)),liColor:x,children:[s.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[s.jsxs(De,{$hovered:r,children:[s.jsx("input",{type:"checkbox",name:"favorite",checked:r,onChange:a}),s.jsx(Se,{size:"20px"})]}),s.jsxs(Ie,{$hovered:e,children:[s.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:d}),s.jsx(Ae,{size:"15px"})]})]}),i&&s.jsx(me,{el:l,article:p,isForm:i,setIsForm:A}),!i&&s.jsx(he,{el:l,sortByDate:o,setSortByDate:b,setLiColor:c}),s.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[s.jsx(Ve,{$hovered:t,onClick:y,children:s.jsx(je,{size:"16px"})}),i&&s.jsx(se,{onClick:$e,children:s.jsx(Te,{size:"18px"})}),s.jsx(se,{onClick:C,children:s.jsx(Ce,{size:"15px"})})]})]})};fe.propTypes={el:h.object,sortByDate:h.bool,setSortByDate:h.func,liColor:h.string,setLiColor:h.func};const Qe=m.ul`
  width: 100%;
  list-style: none;
`,{white:Xe}=S.colors,Ye=()=>{const l=L(),{activeCluster:o}=P(),{allElements:b,elementTrash:x,elementFilter:c}=H(),[u,g]=E.useState(Xe);let{elementSelect:v}=H();v=v||[];const[i,A]=E.useState(!1);E.useEffect(()=>{l(Ee())},[l]);const f=b.filter(e=>e.cluster===(o==null?void 0:o._id)).sort((e,t)=>e.createdAt.localeCompare(t.createdAt)),r=(()=>{const e=x.map(t=>t._id);return v.includes("trash")?f.filter(t=>e.includes(t._id)):f})().filter(({element:e,caption:t,favorite:n,checked:p})=>{const $=e.toLowerCase().replace("·","").includes(c)||e.toLowerCase().includes(c)||t.toLowerCase().includes(c),a=v.includes("favorite")?$&&n===!0:$;return v.some(d=>["checked","unchecked"].includes(d))?v.includes("checked")?a&&p===!0:a&&p===!1:a}).sort(i?(e,t)=>t.createdAt.localeCompare(e.createdAt):(e,t)=>e.createdAt.localeCompare(t.createdAt));return s.jsxs(Qe,{children:[r.map(e=>s.jsx(fe,{el:e,sortByDate:i,setSortByDate:A,liColor:u,setLiColor:g},e._id)),s.jsx(ce,{filtredElements:r,setLiColor:g})]})},{s:re,m:Ze}=S.indents,nt=()=>s.jsx(q,{$p:`0 ${Ze} ${re} ${re}`,children:s.jsx(Ye,{})});export{nt as default};
