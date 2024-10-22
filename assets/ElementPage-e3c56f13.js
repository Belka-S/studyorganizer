import{s as p,t as T,u as L,j as t,T as xe,U as le,P as d,b as ae,q as P,y as H,S as ge,V as W,K as M,w as J,D as Q,W as X,X as G,Q as A,Y as $e,n as F,Z as Y,_ as ve,r as S,$ as ye,a0 as ke,a1 as O,a2 as je,F as q,C as Ce,A as we,z as Ee,a3 as Se,J as Te}from"./index-04f5d118.js";import{T as Ae}from"./index.esm-3f80b871.js";import{a as Be}from"./index.esm-3724128a.js";import{v as Le,u as Fe}from"./index.esm-5916e890.js";import{S as Re}from"./index.esm-a9d59734.js";const z=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],D=[{value:.25,label:"Rate: 0.25"},{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{colors:U}=T,We=p.div`
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
    /* stroke: ${({$colored:s})=>s&&U.yellow}; */

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
`,ze=()=>{const s=L(),r=()=>{document.querySelectorAll('button[style="font-size: 32px;"]').forEach(x=>x.removeAttribute("style")),s(le(null))};return t.jsx(We,{onClick:r,children:t.jsx(xe,{size:"26px"})})},{background:Z,backgroundHoverd:_,white:I,borderLight:V}=T.colors,{button:N}=T.shadows,ce=({filtredElements:s,setLiColor:r})=>{const b=L(),{user:x}=ae(),{activeCluster:a}=P(),{activeElement:h}=H(),g=({value:n})=>{b(J({_id:a._id,lang:n})).unwrap().then(e=>b(Q(e.result.cluster)))},$=({value:n})=>{b(J({_id:a._id,rate:n})).unwrap().then(e=>b(Q(e.result.cluster)))},c=({value:n})=>{const e=new FormData;e.append("lang",n),b(X(e))},j=({value:n})=>{const e=new FormData;e.append("rate",n),b(X(e))},m=n=>{r(Z);let e="";const o="$*@",k=s.findIndex(l=>l.element===h),u=s.splice(k===-1?0:k);for(let l=0;l<u.length;l+=1){const{element:i}=u[l];i.endsWith(".")||i.endsWith("!")||i.endsWith("?")?e+=i.replaceAll(".",o).replaceAll(",",o).replaceAll("!",o).replaceAll("?",o).replaceAll(":",o).replaceAll("`",o):e+=i.replaceAll(".",o)+o}const f=G({setLiColor:r,divider:o,text:e,lang:a.lang,rate:a.rate});n.target.blur(),f&&A.error(f)},C=n=>{r(Z);let e="";const o="$*@",k=s.findIndex(l=>l.element===h),u=s.splice(k===-1?0:k);for(let l=0;l<u.length;l+=1){const{element:i,caption:v,lang:w}=u[l];e+=i+`@±@${w}`+v+o}const f=$e({setLiColor:r,divider:o,text:e,lang:a.lang,rate:a.rate});n.target.blur(),f&&A.error(f)};return t.jsxs(ge,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 1fr .3fr 1fr 2fr 2fr",children:[t.jsx(W,{options:z,defaultValue:z.find(n=>n.value===(a==null?void 0:a.lang)),onChange:g,placeholder:"Language...",$ol:_,$b:I,$bh:V}),t.jsx(W,{options:D,defaultValue:D.find(n=>n.value==(a==null?void 0:a.rate)),onChange:$,placeholder:"Rate...",$ol:_,$b:I,$bh:V}),t.jsx(M,{onClick:m,$s:"m",$bs:N,children:"play"}),t.jsx(ze,{}),t.jsx(M,{onClick:C,$s:"m",$bs:N,children:"all"}),t.jsx(W,{options:z,defaultValue:z.find(n=>n.value===x.lang),onChange:c,$ol:_,$b:I,$bh:V}),t.jsx(W,{options:D,defaultValue:D.find(n=>n.value==x.rate),onChange:j,$ol:_,$b:I,$bh:V})]})};ce.propTypes={filtredElements:d.object,setLiColor:d.func};const{colors:y,shadows:ee,indents:te}=T,De=F`
  margin-bottom: 7px;
  padding-block: ${te.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${({liColor:s})=>s};
  border-radius: ${te.xs};
  font-size: 22px;
`,_e=p.li`
  ${De}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${y.accent};
    box-shadow: ${ee.back};
  }

  &:hover {
    border-color: ${y.border};
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
    ${Le}
  }
`,Ie=p.label`
  ${ie}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:s})=>s?y.yellow:"transparent"};
    stroke: ${({$hovered:s})=>s?y.yellow:y.border};
  }
  &:hover svg {
    stroke: ${y.placeholder};
  }
`,Ve=p.label`
  ${ie}
  opacity: ${({$hovered:s})=>s?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${y.border};
    border-radius: 50%;
    color: ${({$hovered:s})=>s?y.border:"transparent"};
  }
  &:hover svg {
    border-color: ${y.placeholder};
    color: ${({$hovered:s})=>s?y.placeholder:"transparent"};
  }
`,R=F`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${y.black};

  & svg {
    transition: color 250ms;
    color: ${y.border};
  }
  &:hover,
  &:hover svg {
    color: ${y.placeholder};
  }
`,He=p.button`
  ${R}

  opacity: ${({$hovered:s})=>s?1:0};
`,se=p.button`
  ${R}

  opacity: 0;
`,{colors:B,indents:de}=T,ue=F`
  padding-block: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Pe=p.div`
  ${ue}
`,Ue=p.form`
  ${ue}

  max-height: 70vh;
  overflow-y: scroll;
  grid-template-columns: 12fr 1fr 12fr;
`,ne=p.textarea`
  outline: none;
  border: 1px solid ${B.accent};
  border-radius: ${de.xs};
  resize: none;
`,Ge=p.div`
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
`,Oe=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,qe=p.button`
  ${R}
`,Ke=p.button`
  ${R}
`,Me=p.button`
  ${R}
`,oe=p.button`
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
`,pe=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,Je=p.iframe`
  ${pe}

  height: 60px;
  border-radius: 30px;
`,Qe=p.audio`
  ${pe}
`,he=({el:s,sortByDate:r,setSortByDate:b,setLiColor:x})=>{const{activeCluster:a}=P(),{element:h,caption:g}=s,$=async()=>{const e=G({setLiColor:x,text:h,lang:a.lang,rate:a.rate});await ve(h),e&&A.error(e)},c=()=>{window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"});const e=G({setLiColor:x,text:g,lang:s.lang,rate:s.rate});e&&A.error(e)},j=e=>{b(!r),r?A.success("Below is Recent"):A.success("Above is Recent"),e.stopImmediatePropagation()},m=g.endsWith("mp3"),C=!m&&g.startsWith("http"),n=!m&&!C;return t.jsxs(Pe,{children:[t.jsx(oe,{onClick:$,children:h}),t.jsx(Ge,{onClick:j}),m&&t.jsx(Qe,{controls:!0,src:Y(g)}),C&&t.jsx(Je,{src:Y(g)}),n&&t.jsx(oe,{onClick:c,children:g})]})};he.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,$active:d.bool,$hovered:d.bool,setLiColor:d.func};const me=({el:s,article:r,isForm:b,setIsForm:x})=>{const a=L(),{user:h}=ae(),{activeCluster:g}=P(),{_id:$,element:c,caption:j}=s,m=b+24,{register:C,watch:n,setValue:e,handleSubmit:o,setFocus:k}=Fe({mode:"onBlur",defaultValues:{element:c,caption:j}});S.useEffect(()=>{k("element"),r&&c.trim().startsWith("der")?e("element",r+c.replace("der","").trim()+", "):r&&c.trim().startsWith("die")?e("element",r+c.replace("die","").trim()+", "):r&&c.trim().startsWith("das")?e("element",r+c.replace("das","").trim()+", "):r?e("element",r+c+", "):e("element",r+c)},[r,c,k,e]),S.useEffect(()=>{const l=async i=>{i.key==="+"&&(i.preventDefault(),await f(),o(u)()),i.key==="Enter"&&(i.preventDefault(),o(u)()),i.key==="Escape"&&x(!1)};return addEventListener("keydown",l),()=>{removeEventListener("keydown",l)}},[]);const u=l=>{const i=h.lang;let v=l.element.trim(),w=l.caption.trim();v.endsWith(",")&&(v=v.substring(0,v.length-1)),v.includes(" ·")&&(v=v.replaceAll(" ·",",")),w.endsWith(",")&&(w=w.substring(0,w.length-1)),a(O({_id:$,lang:i,element:v,caption:w})),x(!1)},f=async()=>{const l=n("element"),i={from:g.lang,to:h.lang},v=await je(l,i);e("caption",v)};return t.jsxs(Ue,{onSubmit:o(u),children:[t.jsx(ne,{...C("element"),style:{height:m}}),t.jsxs(Oe,{children:[t.jsx(qe,{children:t.jsx(ye,{size:"16px"})}),t.jsx(Ke,{type:"button",onClick:()=>x(m),children:t.jsx(ke,{size:"16px"})}),t.jsx(Me,{type:"button",onClick:f,children:t.jsx(Re,{size:"16px"})})]}),t.jsx(ne,{...C("caption"),style:{height:m}})]})};me.propTypes={el:d.object,article:d.string,isForm:d.oneOfType([d.bool,d.number]),setIsForm:d.func};const fe=({el:s,sortByDate:r,setSortByDate:b,liColor:x,setLiColor:a})=>{const h=L(),{elementTrash:g,activeElement:$}=H(),[c,j]=S.useState(!1),{_id:m,element:C,favorite:n,checked:e}=s,o=g.find(E=>E._id===m),k=C===$,[u,f]=S.useState("");S.useEffect(()=>{const E=document.getElementById("active-element");E?(()=>{E==null||E.scrollIntoView({block:"center",behavior:"smooth"})})():window.scrollTo(0,document.body.scrollHeight)},[]);const l=()=>{h(O({_id:m,favorite:!n}))},i=()=>{h(O({_id:m,checked:!e}))},v=()=>h(Se(s)),w=E=>{if(c)j(!1);else{const K=E.target.closest("div").clientHeight;j(K)}},be=()=>{u===""&&f("der "),u==="der "&&f("die "),u==="die "&&f("das "),u==="das "&&f("")};return t.jsxs(_e,{id:k?"active-element":null,onClick:()=>h(le(C)),liColor:x,children:[t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsxs(Ie,{$hovered:n,children:[t.jsx("input",{type:"checkbox",name:"favorite",checked:n,onChange:l}),t.jsx(Ae,{size:"20px"})]}),t.jsxs(Ve,{$hovered:e,children:[t.jsx("input",{type:"checkbox",name:"checked",checked:e,onChange:i}),t.jsx(Ce,{size:"15px"})]})]}),c&&t.jsx(me,{el:s,article:u,isForm:c,setIsForm:j}),!c&&t.jsx(he,{el:s,sortByDate:r,setSortByDate:b,setLiColor:a}),t.jsxs(q,{$h:"100%",$p:"0",$fd:"column",children:[t.jsx(He,{$hovered:o,onClick:v,children:t.jsx(we,{size:"16px"})}),c&&t.jsx(se,{onClick:be,children:t.jsx(Be,{size:"18px"})}),t.jsx(se,{onClick:w,children:t.jsx(Ee,{size:"15px"})})]})]})};fe.propTypes={el:d.object,sortByDate:d.bool,setSortByDate:d.func,liColor:d.string,setLiColor:d.func};const Xe=p.ul`
  width: 100%;
  list-style: none;
`,{white:Ye}=T.colors,Ze=()=>{const s=L(),{activeCluster:r}=P(),{allElements:b,elementTrash:x,elementFilter:a}=H(),[h,g]=S.useState(Ye);let{elementSelect:$}=H();$=$||[];const[c,j]=S.useState(!1);S.useEffect(()=>{s(Te())},[s]);const m=b.filter(e=>e.cluster===(r==null?void 0:r._id)).sort((e,o)=>e.createdAt.localeCompare(o.createdAt)),n=(()=>{const e=x.map(o=>o._id);return $.includes("trash")?m.filter(o=>e.includes(o._id)):m})().filter(({element:e,caption:o,favorite:k,checked:u})=>{const f=e.toLowerCase().replace("·","").includes(a)||e.toLowerCase().includes(a)||o.toLowerCase().includes(a),l=$.includes("favorite")?f&&k===!0:f;return $.some(i=>["checked","unchecked"].includes(i))?$.includes("checked")?l&&u===!0:l&&u===!1:l}).sort(c?(e,o)=>o.createdAt.localeCompare(e.createdAt):(e,o)=>e.createdAt.localeCompare(o.createdAt));return t.jsxs(Xe,{children:[n.map(e=>t.jsx(fe,{el:e,sortByDate:c,setSortByDate:j,liColor:h,setLiColor:g},e._id)),t.jsx(ce,{filtredElements:n,setLiColor:g})]})},{s:re,m:Ne}=T.indents,rt=()=>t.jsx(q,{$p:`0 ${Ne} ${re} ${re}`,children:t.jsx(Ze,{})});export{rt as default};
