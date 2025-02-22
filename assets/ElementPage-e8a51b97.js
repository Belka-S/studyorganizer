import{a2 as We,r as L,h as ee,t as G,P as z,u as ae,i as de,v as te,j as $,a1 as Je,a3 as ke,x as _e,K as je,a4 as bt,a5 as jt,a6 as Qe,a7 as Ze,B as pe,a0 as wn,A as oe,Y as Sn,a8 as $n,a9 as Tn,aa as Pt,ab as kn,q as K,ac as Rn,ad as Ot,p as he,ae as Ve,af as It,ag as xn,ah as An,ai as En,aj as Cn,ak as Ln,al as _n,M as jn,am as Pe,an as Pn,ao as On,ap as In,aq as Dn,ar as Mn,as as Oe,k as He,H as zn,D as Nn,C as Bn,U as Ye,at as Wn,au as Fn,av as Kn}from"./index-ea2629ca.js";import{r as Dt,T as Un}from"./index-93c7f4ff.js";import{w as Mt,S as Gn}from"./googleScopes-96c05796.js";import{v as Vn,u as Hn}from"./index.esm-edd269ed.js";const qe=(e,t)=>{if(!t.includes("de"))return e;const n=e.trim().split(`
`);return n.length===1?e:["der","die","das"].includes(n[0].split(" ")[0])?`${n[0].trim()}, ${n[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e.includes("am")&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e},wt=(e,t)=>{let n=e;for(const r in t)n=n.replaceAll(r,t[r]);const u=r=>r.replace(/^./,s=>s.toUpperCase()),o=[...n.split(/\s+/)];for(let r=0;r<o.length;r+=1)[".","!","?"].includes(o[r].at(-1))&&o[r+1]&&o.splice(r+1,1,u(o[r+1]));return o.join(" ")},{VITE_DEEPL_API_KEY:Yn}={VITE_GOOGLE_CLIENT_ID:"502819804892-294ksvklsg60pjugga88j8l13a6dgmf2.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyABIqXgO4nO0LhnoircvA4SL0uwOY_PxJ4",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},qn={google:"",deepl:Yn},Ie=async(e,{from:t,to:n},u)=>{var a,r;if(!e||e.length===0)return"";const o=e.replaceAll(" ·",",").replaceAll("·","");We.engine=u,We.key=qn[u];try{let s=await We(`${o}`,{from:t,to:n});if(n.includes("en")&&o.toLowerCase().includes("uhr")&&(s=s.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(o.at(-1)))return s;const k=o.split(o.includes(", ")?", ":/\s+/),w=s.split(", "),d=n.includes("de")?w[0]:w[0].at(0).toLowerCase()+w[0].substring(1);return k.length===1?s.toLocaleLowerCase()+", ":["der","die","das"].includes(k[0].split(" ")[0])?s.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":n.includes("en")&&((a=k[2])!=null&&a.startsWith("am"))?w[2].startsWith("the")?s:`${d}, ${w[1]}, the ${w[2]}`:(k[0].endsWith("n")&&["hat","ist"].includes((r=k[2])==null?void 0:r.split(" ")[0])&&t.includes("de")&&(s=n.includes("en")?"to "+d+", ":d+", "),s)}catch(s){return s.message}},De=(e,t)=>e.endsWith(t)?e.substring(0,e.length-1):e,Xn=(e,t)=>{let n=84;e[0]&&(n=Number(e[0].style.height.replace("px",""))),L.useEffect(()=>{if(!e[0])return;let u=Math.max(...e.map(o=>o.scrollHeight));n!==u&&(u=u<=90?u:u+6,e.forEach(o=>{o.style.height=u+"px"}))},[n,e,t])},Jn=()=>{const[e,t]=L.useState("ready"),[n,u]=L.useState(""),[o,a]=L.useState({}),[r,s]=L.useState(0),[h,k]=L.useState(""),w=()=>{u(void 0),t("selecting")},d=y=>{const p=document.getSelection();if(!p)return;const R=p.toString();if(!R){u(void 0),t("ready");return}let x=null;["TEXTAREA","INPUT"].includes(y.target.nodeName)?x=y.target.getBoundingClientRect():x=p.getRangeAt(0).getBoundingClientRect(),a({x:x.left+x.width/2,y:x.top+window.scrollY,width:x.width,height:x.height}),u(R),t("selected");const l=y.target.value||y.target.textContent;l.toLowerCase()!=="translate"&&k(l);const m=y.target.closest("ul").getBoundingClientRect().width,v=window.innerWidth-m;m&&s(v)};return L.useEffect(()=>(document.addEventListener("selectstart",w),document.addEventListener("mouseup",d),()=>{document.removeEventListener("selectstart",w),document.removeEventListener("mouseup",d)}),[]),{selection:n,position:o,offset:r,state:e,nodeText:h}},Qn=e=>{let t=L.useRef([]);const n=a=>{a.forEach(r=>{const s=window.open(r,"_blank");s?t.current.push(s):ee.error(`Failed to open tab: ${r}`)})},u=()=>{t.current.forEach(a=>{a.close()}),t.current=[]},o=L.useCallback(async a=>{let r=[];a.forEach(s=>r.push(s)),u(),n(r)},[]);return L.useEffect(()=>{const a=async r=>{r.metaKey&&r.key==="l"&&!r.altKey&&!r.shiftKey&&(r.preventDefault(),await o(e))};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[o,e]),{openUrls:o}},Re=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],xe=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}],Zn={"..":".",". .":".","?.":"?","? .":"?","!.":"!","! .":"!",",,":",",", ,":","},er={" Dot":"."," dot":"."," exclamation mark":"!"," question mark":"?"," comma":","," colon":":"," semi-colon":";","Yes ":"Yes, ","No ":"No, ","Wow ":"Wow, ","Look ":"Look, "," but":", but"," please?":", please?"},tr={" Punkt":"."," Ausrufezeichen":"!"," Fragezeichen":"?"," Komma":","," Doppelpunkt":":"," Semikolon":";","Ja ":"Ja, ","Nein ":"Nein, "," weil":", weil"," aber":", aber"," als":", als"," ob":", ob"," damit":", damit"," bevor":", bevor"," obwohl":", obwohl"," dass":", dass"," dann":", dann"," deshalb":", deshalb"," desvegen":", desvegen"," trotzdem":", trotzdem"},St={...er,...tr,...Zn},nr=e=>[{de:`https://www.verbformen.com/conjugation/?w=${e}`},{en:`https://dictionary.cambridge.org/dictionary/english-russian/${e}`}];var Xe=new Map,Ae=new WeakMap,$t=0,rr=void 0;function ir(e){return e?(Ae.has(e)||($t+=1,Ae.set(e,$t.toString())),Ae.get(e)):"0"}function sr(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?ir(e.root):e[t]}`).toString()}function or(e){const t=sr(e);let n=Xe.get(t);if(!n){const u=new Map;let o;const a=new IntersectionObserver(r=>{r.forEach(s=>{var h;const k=s.isIntersecting&&o.some(w=>s.intersectionRatio>=w);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=k),(h=u.get(s.target))==null||h.forEach(w=>{w(k,s)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:u},Xe.set(t,n)}return n}function ar(e,t,n={},u=rr){if(typeof window.IntersectionObserver>"u"&&u!==void 0){const h=e.getBoundingClientRect();return t(u,{isIntersecting:u,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:h,intersectionRect:h,rootBounds:h}),()=>{}}const{id:o,observer:a,elements:r}=or(n),s=r.get(e)||[];return r.has(e)||r.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(r.delete(e),a.unobserve(e)),r.size===0&&(a.disconnect(),Xe.delete(o))}}function cr({threshold:e,delay:t,trackVisibility:n,rootMargin:u,root:o,triggerOnce:a,skip:r,initialInView:s,fallbackInView:h,onChange:k}={}){var w;const[d,y]=L.useState(null),p=L.useRef(k),[R,x]=L.useState({inView:!!s,entry:void 0});p.current=k,L.useEffect(()=>{if(r||!d)return;let E;return E=ar(d,(g,i)=>{x({inView:g,entry:i}),p.current&&p.current(g,i),i.isIntersecting&&a&&E&&(E(),E=void 0)},{root:o,rootMargin:u,threshold:e,trackVisibility:n,delay:t},h),()=>{E&&E()}},[Array.isArray(e)?e.toString():e,d,o,u,a,r,n,h,t]);const l=(w=R.entry)==null?void 0:w.target,m=L.useRef(void 0);!d&&l&&!a&&!r&&m.current!==l&&(m.current=l,x({inView:!!s,entry:void 0}));const v=[y,R.inView,R.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const{backgroundHoverd:Ee,white:Ce,borderLight:Le}=G.colors,zt=()=>{const e=ae(),{user:t}=de(),{activeCluster:n}=te(),u=({value:s})=>{e(_e({_id:n._id,lang:s})).unwrap().then(h=>e(je(h.result.cluster)))},o=({value:s})=>{e(_e({_id:n._id,rate:s})).unwrap().then(h=>e(je(h.result.cluster)))},a=({value:s})=>{const h=new FormData;h.append("lang",s),e(bt(h))},r=({value:s})=>{const h=new FormData;h.append("rate",s),e(bt(h))};return $.jsxs(Je,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[$.jsx(ke,{options:Re,defaultValue:Re.find(s=>s.value===(n==null?void 0:n.lang)),onChange:u,placeholder:"Language...",$ol:Ee,$b:Ce,$bh:Le}),$.jsx(ke,{options:xe,defaultValue:xe.find(s=>s.value==(n==null?void 0:n.rate)),onChange:o,placeholder:"Rate...",$ol:Ee,$b:Ce,$bh:Le}),$.jsx(ke,{options:Re,defaultValue:Re.find(s=>s.value===t.lang),onChange:a,placeholder:"Language...",$ol:Ee,$b:Ce,$bh:Le}),$.jsx(ke,{options:xe,defaultValue:xe.find(s=>s.value==t.rate),onChange:r,placeholder:"Rate...",$ol:Ee,$b:Ce,$bh:Le})]})};zt.propTypes={filtredElements:z.array,setLiColor:z.func};const{button:lr}=G.shadows,ur=()=>{const e=ae(),{user:t}=de(),{activeCluster:n}=te(),u=L.useCallback(async o=>{o==null||o.currentTarget.blur();const a=window.getSelection().toString();a&&await Mt(a);const r=await Dt();let s=qe(r,n.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();s=De(s,",");const h={from:n.lang,to:t.lang};let k=await Ie(s,h,t.engine);k=De(k.trim(),",");const{_id:w}=n;try{const d={clusterId:w,element:"[]",caption:s},y={clusterId:w,element:s,caption:k,favorite:!0,checked:s.split(/\s+/).length<20},p=s.includes("https://")?d:y;e(jt(p)).unwrap().then(()=>n.sortBy?Qe():Ze())}catch(d){ee.error(`Invalid element, ${d.message}`)}},[n,e,t.engine,t.lang]);return L.useEffect(()=>{const o=async a=>{a.key==="e"&&a.metaKey&&!a.altKey&&!a.shiftKey&&(a.preventDefault(),await u())};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[u]),$.jsx(pe,{onClick:u,$s:"m",$round:!0,$bs:lr,children:$.jsx(wn,{size:18})})},{button:pr}=G.shadows,fr=()=>{const e=ae(),{elementTrash:t}=oe(),n=()=>{ee.error("Are you sure you want to delete the selected Element(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{e($n(t.map(u=>u._id).join("&"))).unwrap().then(()=>e(Tn()))}}})};return $.jsx($.Fragment,{children:$.jsx(pe,{onClick:n,$s:"m",$round:!0,$bs:pr,children:$.jsx(Sn,{size:16})})})},{button:dr}=G.shadows,hr=()=>{const{activeCluster:e}=te();let t=L.useRef([]);const n=a=>{a.forEach(r=>{const s=window.open(r,"_blank");s?t.current.push(s):ee.error(`Failed to open tab: ${r}`)})},u=()=>{t.current.forEach(a=>{a.close()}),t.current=[]},o=L.useCallback(async()=>{const a=window.getSelection().toString();a&&await Mt(a);const r=await Dt();let s=[];e.lang.includes("de")&&s.push(`https://www.verbformen.com/conjugation/?w=${r}`),e.lang.includes("en")&&s.push(`https://dictionary.cambridge.org/dictionary/english-russian/${r}`),u(),n(s)},[e==null?void 0:e.lang]);return L.useEffect(()=>{const a=async r=>{r.metaKey&&r.key==="d"&&!r.altKey&&!r.shiftKey&&(r.preventDefault(),await o())};return addEventListener("keydown",a),()=>{removeEventListener("keydown",a)}},[o]),$.jsx(pe,{onClick:o,$s:"m",$round:!0,$bs:dr,children:$.jsx(Pt,{size:18})})},{s:Tt,m:gr}=G.indents,Nt=({className:e})=>{const{pathname:t}=kn(),{elementTrash:n}=oe(),{activeCluster:u}=te(),o=n.length>0?" 1fr":"",a=u?" 1fr":"",r=o+a+" 1fr";if(t.includes("/element"))return $.jsxs(Je,{className:e,$m:`${Tt} ${gr}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:r,$cg:Tt,children:[$.jsx(hr,{}),a&&$.jsx(ur,{}),o&&$.jsx(fr,{})]})};Nt.propTypes={className:z.string};const{colors:Fe}=G,mr=K.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${Fe.yellow};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${Fe.hovered};
    /* stroke: ${({$colored:e})=>e&&Fe.yellow}; */
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
`,Bt=({onClick:e})=>$.jsx(mr,{onClick:e,children:$.jsx(Rn,{size:"35px"})});Bt.propTypes={onClick:z.func};var vr={exports:{}};(function(e){var t=function(n){var u=Object.prototype,o=u.hasOwnProperty,a=Object.defineProperty||function(f,c,S){f[c]=S.value},r,s=typeof Symbol=="function"?Symbol:{},h=s.iterator||"@@iterator",k=s.asyncIterator||"@@asyncIterator",w=s.toStringTag||"@@toStringTag";function d(f,c,S){return Object.defineProperty(f,c,{value:S,enumerable:!0,configurable:!0,writable:!0}),f[c]}try{d({},"")}catch{d=function(c,S,P){return c[S]=P}}function y(f,c,S,P){var j=c&&c.prototype instanceof E?c:E,M=Object.create(j.prototype),Y=new N(P||[]);return a(M,"_invoke",{value:b(f,S,Y)}),M}n.wrap=y;function p(f,c,S){try{return{type:"normal",arg:f.call(c,S)}}catch(P){return{type:"throw",arg:P}}}var R="suspendedStart",x="suspendedYield",l="executing",m="completed",v={};function E(){}function g(){}function i(){}var T={};d(T,h,function(){return this});var C=Object.getPrototypeOf,D=C&&C(C(I([])));D&&D!==u&&o.call(D,h)&&(T=D);var B=i.prototype=E.prototype=Object.create(T);g.prototype=i,a(B,"constructor",{value:i,configurable:!0}),a(i,"constructor",{value:g,configurable:!0}),g.displayName=d(i,w,"GeneratorFunction");function W(f){["next","throw","return"].forEach(function(c){d(f,c,function(S){return this._invoke(c,S)})})}n.isGeneratorFunction=function(f){var c=typeof f=="function"&&f.constructor;return c?c===g||(c.displayName||c.name)==="GeneratorFunction":!1},n.mark=function(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,i):(f.__proto__=i,d(f,w,"GeneratorFunction")),f.prototype=Object.create(B),f},n.awrap=function(f){return{__await:f}};function V(f,c){function S(M,Y,q,J){var H=p(f[M],f,Y);if(H.type==="throw")J(H.arg);else{var ge=H.arg,ce=ge.value;return ce&&typeof ce=="object"&&o.call(ce,"__await")?c.resolve(ce.__await).then(function(ie){S("next",ie,q,J)},function(ie){S("throw",ie,q,J)}):c.resolve(ce).then(function(ie){ge.value=ie,q(ge)},function(ie){return S("throw",ie,q,J)})}}var P;function j(M,Y){function q(){return new c(function(J,H){S(M,Y,J,H)})}return P=P?P.then(q,q):q()}a(this,"_invoke",{value:j})}W(V.prototype),d(V.prototype,k,function(){return this}),n.AsyncIterator=V,n.async=function(f,c,S,P,j){j===void 0&&(j=Promise);var M=new V(y(f,c,S,P),j);return n.isGeneratorFunction(c)?M:M.next().then(function(Y){return Y.done?Y.value:M.next()})};function b(f,c,S){var P=R;return function(M,Y){if(P===l)throw new Error("Generator is already running");if(P===m){if(M==="throw")throw Y;return F()}for(S.method=M,S.arg=Y;;){var q=S.delegate;if(q){var J=_(q,S);if(J){if(J===v)continue;return J}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(P===R)throw P=m,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);P=l;var H=p(f,c,S);if(H.type==="normal"){if(P=S.done?m:x,H.arg===v)continue;return{value:H.arg,done:S.done}}else H.type==="throw"&&(P=m,S.method="throw",S.arg=H.arg)}}}function _(f,c){var S=c.method,P=f.iterator[S];if(P===r)return c.delegate=null,S==="throw"&&f.iterator.return&&(c.method="return",c.arg=r,_(f,c),c.method==="throw")||S!=="return"&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+S+"' method")),v;var j=p(P,f.iterator,c.arg);if(j.type==="throw")return c.method="throw",c.arg=j.arg,c.delegate=null,v;var M=j.arg;if(!M)return c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,v;if(M.done)c[f.resultName]=M.value,c.next=f.nextLoc,c.method!=="return"&&(c.method="next",c.arg=r);else return M;return c.delegate=null,v}W(B),d(B,w,"Generator"),d(B,h,function(){return this}),d(B,"toString",function(){return"[object Generator]"});function A(f){var c={tryLoc:f[0]};1 in f&&(c.catchLoc=f[1]),2 in f&&(c.finallyLoc=f[2],c.afterLoc=f[3]),this.tryEntries.push(c)}function O(f){var c=f.completion||{};c.type="normal",delete c.arg,f.completion=c}function N(f){this.tryEntries=[{tryLoc:"root"}],f.forEach(A,this),this.reset(!0)}n.keys=function(f){var c=Object(f),S=[];for(var P in c)S.push(P);return S.reverse(),function j(){for(;S.length;){var M=S.pop();if(M in c)return j.value=M,j.done=!1,j}return j.done=!0,j}};function I(f){if(f!=null){var c=f[h];if(c)return c.call(f);if(typeof f.next=="function")return f;if(!isNaN(f.length)){var S=-1,P=function j(){for(;++S<f.length;)if(o.call(f,S))return j.value=f[S],j.done=!1,j;return j.value=r,j.done=!0,j};return P.next=P}}throw new TypeError(typeof f+" is not iterable")}n.values=I;function F(){return{value:r,done:!0}}return N.prototype={constructor:N,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!f)for(var c in this)c.charAt(0)==="t"&&o.call(this,c)&&!isNaN(+c.slice(1))&&(this[c]=r)},stop:function(){this.done=!0;var f=this.tryEntries[0],c=f.completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var c=this;function S(J,H){return M.type="throw",M.arg=f,c.next=J,H&&(c.method="next",c.arg=r),!!H}for(var P=this.tryEntries.length-1;P>=0;--P){var j=this.tryEntries[P],M=j.completion;if(j.tryLoc==="root")return S("end");if(j.tryLoc<=this.prev){var Y=o.call(j,"catchLoc"),q=o.call(j,"finallyLoc");if(Y&&q){if(this.prev<j.catchLoc)return S(j.catchLoc,!0);if(this.prev<j.finallyLoc)return S(j.finallyLoc)}else if(Y){if(this.prev<j.catchLoc)return S(j.catchLoc,!0)}else if(q){if(this.prev<j.finallyLoc)return S(j.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(f,c){for(var S=this.tryEntries.length-1;S>=0;--S){var P=this.tryEntries[S];if(P.tryLoc<=this.prev&&o.call(P,"finallyLoc")&&this.prev<P.finallyLoc){var j=P;break}}j&&(f==="break"||f==="continue")&&j.tryLoc<=c&&c<=j.finallyLoc&&(j=null);var M=j?j.completion:{};return M.type=f,M.arg=c,j?(this.method="next",this.next=j.finallyLoc,v):this.complete(M)},complete:function(f,c){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&c&&(this.next=c),v},finish:function(f){for(var c=this.tryEntries.length-1;c>=0;--c){var S=this.tryEntries[c];if(S.finallyLoc===f)return this.complete(S.completion,S.afterLoc),O(S),v}},catch:function(f){for(var c=this.tryEntries.length-1;c>=0;--c){var S=this.tryEntries[c];if(S.tryLoc===f){var P=S.completion;if(P.type==="throw"){var j=P.arg;O(S)}return j}}throw new Error("illegal catch attempt")},delegateYield:function(f,c,S){return this.delegate={iterator:I(f),resultName:c,nextLoc:S},this.method==="next"&&(this.arg=r),v}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(vr);var be={},Wt={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.browserSupportsPolyfills=Q.compareTwoStringsUsingDiceCoefficient=Q.commandToRegExp=Q.concatTranscripts=Q.debounce=void 0;var yr=function(t,n,u){var o;return function(){var a=this,r=arguments,s=function(){o=null,u||t.apply(a,r)},h=u&&!o;clearTimeout(o),o=setTimeout(s,n),h&&t.apply(a,r)}};Q.debounce=yr;var br=function(){for(var t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return n.map(function(o){return o.trim()}).join(" ").trim()};Q.concatTranscripts=br;var wr=/\s*\((.*?)\)\s*/g,Sr=/(\(\?:[^)]+\))\?/g,$r=/(\(\?)?:\w+/g,Tr=/\*/g,kr=/[-{}[\]+?.,\\^$|#]/g,Rr=function(t){return t instanceof RegExp?new RegExp(t.source,"i"):(t=t.replace(kr,"\\$&").replace(wr,"(?:$1)?").replace($r,function(n,u){return u?n:"([^\\s]+)"}).replace(Tr,"(.*?)").replace(Sr,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i"))};Q.commandToRegExp=Rr;var xr=function(t,n){if(t=t.replace(/\s+/g,"").toLowerCase(),n=n.replace(/\s+/g,"").toLowerCase(),!t.length&&!n.length)return 1;if(!t.length||!n.length)return 0;if(t===n)return 1;if(t.length===1&&n.length===1||t.length<2||n.length<2)return 0;for(var u=new Map,o=0;o<t.length-1;o++){var a=t.substring(o,o+2),r=u.has(a)?u.get(a)+1:1;u.set(a,r)}for(var s=0,h=0;h<n.length-1;h++){var k=n.substring(h,h+2),w=u.has(k)?u.get(k):0;w>0&&(u.set(k,w-1),s++)}return 2*s/(t.length+n.length-2)};Q.compareTwoStringsUsingDiceCoefficient=xr;var Ar=function(){return typeof window<"u"&&window.navigator!==void 0&&window.navigator.mediaDevices!==void 0&&window.navigator.mediaDevices.getUserMedia!==void 0&&(window.AudioContext!==void 0||window.webkitAudioContext!==void 0)};Q.browserSupportsPolyfills=Ar;var fe={},ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.APPEND_TRANSCRIPT=ue.CLEAR_TRANSCRIPT=void 0;var Er="CLEAR_TRANSCRIPT";ue.CLEAR_TRANSCRIPT=Er;var Cr="APPEND_TRANSCRIPT";ue.APPEND_TRANSCRIPT=Cr;Object.defineProperty(fe,"__esModule",{value:!0});fe.appendTranscript=fe.clearTranscript=void 0;var Ft=ue,Lr=function(){return{type:Ft.CLEAR_TRANSCRIPT}};fe.clearTranscript=Lr;var _r=function(t,n){return{type:Ft.APPEND_TRANSCRIPT,payload:{interimTranscript:t,finalTranscript:n}}};fe.appendTranscript=_r;var ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.transcriptReducer=void 0;var kt=ue,jr=Q,Pr=function(t,n){switch(n.type){case kt.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case kt.APPEND_TRANSCRIPT:return{interimTranscript:n.payload.interimTranscript,finalTranscript:(0,jr.concatTranscripts)(t.finalTranscript,n.payload.finalTranscript)};default:throw new Error}};ze.transcriptReducer=Pr;var Kt={},et={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return/(android)/i.test(typeof navigator<"u"?navigator.userAgent:"")};e.default=t})(et);var tt={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.isNative=void 0;var t=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),n=function(a){return a===t};e.isNative=n;var u=t;e.default=u})(tt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(et),n=Q,u=tt;function o(d){return d&&d.__esModule?d:{default:d}}function a(d,y,p,R,x,l,m){try{var v=d[l](m),E=v.value}catch(g){p(g);return}v.done?y(E):Promise.resolve(E).then(R,x)}function r(d){return function(){var y=this,p=arguments;return new Promise(function(R,x){var l=d.apply(y,p);function m(E){a(l,R,x,m,v,"next",E)}function v(E){a(l,R,x,m,v,"throw",E)}m(void 0)})}}function s(d,y){if(!(d instanceof y))throw new TypeError("Cannot call a class as a function")}function h(d,y){for(var p=0;p<y.length;p++){var R=y[p];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(d,R.key,R)}}function k(d,y,p){return y&&h(d.prototype,y),p&&h(d,p),d}var w=function(){function d(y){s(this,d),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.isMicrophoneAvailable=!0,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.disableRecognition=this.disableRecognition.bind(this),this.setSpeechRecognition(y),(0,t.default)()&&(this.updateFinalTranscript=(0,n.debounce)(this.updateFinalTranscript,250,!0))}return k(d,[{key:"setSpeechRecognition",value:function(p){var R=!!p&&((0,u.isNative)(p)||(0,n.browserSupportsPolyfills)());R&&(this.disableRecognition(),this.recognition=new p,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this),this.recognition.onerror=this.onError.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange(R)}},{key:"subscribe",value:function(p,R){this.subscribers[p]=R}},{key:"unsubscribe",value:function(p){delete this.subscribers[p]}},{key:"emitListeningChange",value:function(p){var R=this;this.listening=p,Object.keys(this.subscribers).forEach(function(x){var l=R.subscribers[x].onListeningChange;l(p)})}},{key:"emitMicrophoneAvailabilityChange",value:function(p){var R=this;this.isMicrophoneAvailable=p,Object.keys(this.subscribers).forEach(function(x){var l=R.subscribers[x].onMicrophoneAvailabilityChange;l(p)})}},{key:"emitTranscriptChange",value:function(p,R){var x=this;Object.keys(this.subscribers).forEach(function(l){var m=x.subscribers[l].onTranscriptChange;m(p,R)})}},{key:"emitClearTranscript",value:function(){var p=this;Object.keys(this.subscribers).forEach(function(R){var x=p.subscribers[R].onClearTranscript;x()})}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(p){var R=this;Object.keys(this.subscribers).forEach(function(x){var l=R.subscribers[x],m=l.onBrowserSupportsSpeechRecognitionChange,v=l.onBrowserSupportsContinuousListeningChange;m(p),v(p)})}},{key:"disconnect",value:function(p){if(this.recognition&&this.listening)switch(p){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;case"STOP":default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"disableRecognition",value:function(){this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.recognition.onerror=function(){},this.listening&&this.stopListening())}},{key:"onError",value:function(p){p&&p.error&&p.error==="not-allowed"&&(this.emitMicrophoneAvailabilityChange(!1),this.disableRecognition())}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(p){var R=p.results,x=p.resultIndex,l=x===void 0?R.length-1:x;this.interimTranscript="",this.finalTranscript="";for(var m=l;m<R.length;++m)R[m].isFinal&&(!(0,t.default)()||R[m][0].confidence>0)?this.updateFinalTranscript(R[m][0].transcript):this.interimTranscript=(0,n.concatTranscripts)(this.interimTranscript,R[m][0].transcript);var v=!1;this.interimTranscript===""&&this.finalTranscript!==""?(this.previousResultWasFinalOnly&&(v=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,v||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(p){this.finalTranscript=(0,n.concatTranscripts)(this.finalTranscript,p)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:function(){var y=r(regeneratorRuntime.mark(function R(){var x,l,m,v,E,g,i=arguments;return regeneratorRuntime.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(x=i.length>0&&i[0]!==void 0?i[0]:{},l=x.continuous,m=l===void 0?!1:l,v=x.language,this.recognition){C.next=3;break}return C.abrupt("return");case 3:if(E=m!==this.recognition.continuous,g=v&&v!==this.recognition.lang,!(E||g)){C.next=11;break}if(!this.listening){C.next=9;break}return C.next=9,this.stopListening();case 9:this.recognition.continuous=E?m:this.recognition.continuous,this.recognition.lang=g?v:this.recognition.lang;case 11:if(this.listening){C.next=22;break}return this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript()),C.prev=13,C.next=16,this.start();case 16:this.emitListeningChange(!0),C.next=22;break;case 19:C.prev=19,C.t0=C.catch(13),C.t0 instanceof DOMException||this.emitMicrophoneAvailabilityChange(!1);case 22:case"end":return C.stop()}},R,this,[[13,19]])}));function p(){return y.apply(this,arguments)}return p}()},{key:"abortListening",value:function(){var y=r(regeneratorRuntime.mark(function R(){var x=this;return regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),m.next=4,new Promise(function(v){x.onStopListening=v});case 4:case"end":return m.stop()}},R,this)}));function p(){return y.apply(this,arguments)}return p}()},{key:"stopListening",value:function(){var y=r(regeneratorRuntime.mark(function R(){var x=this;return regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),m.next=4,new Promise(function(v){x.onStopListening=v});case 4:case"end":return m.stop()}},R,this)}));function p(){return y.apply(this,arguments)}return p}()},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:function(){var y=r(regeneratorRuntime.mark(function R(){return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(this.recognition&&!this.listening)){l.next=4;break}return l.next=3,this.recognition.start();case 3:this.listening=!0;case 4:case"end":return l.stop()}},R,this)}));function p(){return y.apply(this,arguments)}return p}()},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}]),d}();e.default=w})(Kt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.useSpeechRecognition=void 0;var t=L,n=Q,u=fe,o=ze,a=h(Kt),r=h(et),s=h(tt);function h(b){return b&&b.__esModule?b:{default:b}}function k(b,_,A,O,N,I,F){try{var f=b[I](F),c=f.value}catch(S){A(S);return}f.done?_(c):Promise.resolve(c).then(O,N)}function w(b){return function(){var _=this,A=arguments;return new Promise(function(O,N){var I=b.apply(_,A);function F(c){k(I,O,N,F,f,"next",c)}function f(c){k(I,O,N,F,f,"throw",c)}F(void 0)})}}function d(b){return R(b)||p(b)||v(b)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(b){if(typeof Symbol<"u"&&Symbol.iterator in Object(b))return Array.from(b)}function R(b){if(Array.isArray(b))return E(b)}function x(b){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(A){return typeof A}:x=function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},x(b)}function l(b,_){return i(b)||g(b,_)||v(b,_)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(b,_){if(b){if(typeof b=="string")return E(b,_);var A=Object.prototype.toString.call(b).slice(8,-1);if(A==="Object"&&b.constructor&&(A=b.constructor.name),A==="Map"||A==="Set")return Array.from(b);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return E(b,_)}}function E(b,_){(_==null||_>b.length)&&(_=b.length);for(var A=0,O=new Array(_);A<_;A++)O[A]=b[A];return O}function g(b,_){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(b)))){var A=[],O=!0,N=!1,I=void 0;try{for(var F=b[Symbol.iterator](),f;!(O=(f=F.next()).done)&&(A.push(f.value),!(_&&A.length===_));O=!0);}catch(c){N=!0,I=c}finally{try{!O&&F.return!=null&&F.return()}finally{if(N)throw I}}return A}}function i(b){if(Array.isArray(b))return b}var T=!!s.default,C=T&&!(0,r.default)(),D,B=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=_.transcribing,O=A===void 0?!0:A,N=_.clearTranscriptOnListen,I=N===void 0?!0:N,F=_.commands,f=F===void 0?[]:F,c=(0,t.useState)(W.getRecognitionManager()),S=l(c,1),P=S[0],j=(0,t.useState)(T),M=l(j,2),Y=M[0],q=M[1],J=(0,t.useState)(C),H=l(J,2),ge=H[0],ce=H[1],ie=(0,t.useReducer)(o.transcriptReducer,{interimTranscript:P.interimTranscript,finalTranscript:""}),rt=l(ie,2),it=rt[0],st=it.interimTranscript,ot=it.finalTranscript,at=rt[1],en=(0,t.useState)(P.listening),ct=l(en,2),tn=ct[0],nn=ct[1],rn=(0,t.useState)(P.isMicrophoneAvailable),lt=l(rn,2),sn=lt[0],on=lt[1],ut=(0,t.useRef)(f);ut.current=f;var pt=function(){at((0,u.clearTranscript)())},me=(0,t.useCallback)(function(){P.resetTranscript(),pt()},[P]),an=function(X,re,le){var se=x(X)==="object"?X.toString():X,ve=se.replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),Se=(0,n.compareTwoStringsUsingDiceCoefficient)(ve,re);return Se>=le?{command:X,commandWithoutSpecials:ve,howSimilar:Se,isFuzzyMatch:!0}:null},cn=function(X,re){var le=(0,n.commandToRegExp)(X),se=le.exec(re);return se?{command:X,parameters:se.slice(1)}:null},ft=(0,t.useCallback)(function(ne,X){ut.current.forEach(function(re){var le=re.command,se=re.callback,ve=re.matchInterim,Se=ve===void 0?!1:ve,gt=re.isFuzzyMatch,mt=gt===void 0?!1:gt,vt=re.fuzzyMatchingThreshold,un=vt===void 0?.8:vt,yt=re.bestMatchOnly,pn=yt===void 0?!1:yt,$e=!X&&Se?ne.trim():X.trim(),fn=Array.isArray(le)?le:[le],Te=fn.map(function(Z){return mt?an(Z,$e,un):cn(Z,$e)}).filter(function(Z){return Z});if(mt&&pn&&Te.length>=2){Te.sort(function(Z,Be){return Be.howSimilar-Z.howSimilar});var Ne=Te[0],dn=Ne.command,hn=Ne.commandWithoutSpecials,gn=Ne.howSimilar;se(hn,$e,gn,{command:dn,resetTranscript:me})}else Te.forEach(function(Z){if(Z.isFuzzyMatch){var Be=Z.command,mn=Z.commandWithoutSpecials,vn=Z.howSimilar;se(mn,$e,vn,{command:Be,resetTranscript:me})}else{var yn=Z.command,bn=Z.parameters;se.apply(void 0,d(bn).concat([{command:yn,resetTranscript:me}]))}})})},[me]),dt=(0,t.useCallback)(function(ne,X){O&&at((0,u.appendTranscript)(ne,X)),ft(ne,X)},[ft,O]),ht=(0,t.useCallback)(function(){I&&pt()},[I]);(0,t.useEffect)(function(){var ne=W.counter;W.counter+=1;var X={onListeningChange:nn,onMicrophoneAvailabilityChange:on,onTranscriptChange:dt,onClearTranscript:ht,onBrowserSupportsSpeechRecognitionChange:q,onBrowserSupportsContinuousListeningChange:ce};return P.subscribe(ne,X),function(){P.unsubscribe(ne)}},[O,I,P,dt,ht]);var ln=(0,n.concatTranscripts)(ot,st);return{transcript:ln,interimTranscript:st,finalTranscript:ot,listening:tn,isMicrophoneAvailable:sn,resetTranscript:me,browserSupportsSpeechRecognition:Y,browserSupportsContinuousListening:ge}};e.useSpeechRecognition=B;var W={counter:0,applyPolyfill:function(_){D?D.setSpeechRecognition(_):D=new a.default(_);var A=!!_&&(0,n.browserSupportsPolyfills)();T=A,C=A},removePolyfill:function(){D?D.setSpeechRecognition(s.default):D=new a.default(s.default),T=!!s.default,C=T&&!(0,r.default)()},getRecognitionManager:function(){return D||(D=new a.default(s.default)),D},getRecognition:function(){var _=W.getRecognitionManager();return _.getRecognition()},startListening:function(){var b=w(regeneratorRuntime.mark(function A(){var O,N,I,F,f=arguments;return regeneratorRuntime.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return O=f.length>0&&f[0]!==void 0?f[0]:{},N=O.continuous,I=O.language,F=W.getRecognitionManager(),S.next=4,F.startListening({continuous:N,language:I});case 4:case"end":return S.stop()}},A)}));function _(){return b.apply(this,arguments)}return _}(),stopListening:function(){var b=w(regeneratorRuntime.mark(function A(){var O;return regeneratorRuntime.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return O=W.getRecognitionManager(),I.next=3,O.stopListening();case 3:case"end":return I.stop()}},A)}));function _(){return b.apply(this,arguments)}return _}(),abortListening:function(){var b=w(regeneratorRuntime.mark(function A(){var O;return regeneratorRuntime.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return O=W.getRecognitionManager(),I.next=3,O.abortListening();case 3:case"end":return I.stop()}},A)}));function _(){return b.apply(this,arguments)}return _}(),browserSupportsSpeechRecognition:function(){return T},browserSupportsContinuousListening:function(){return C}},V=W;e.default=V})(Wt);(function(e){function t(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(h){return typeof h}:t=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},t(r)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useSpeechRecognition",{enumerable:!0,get:function(){return n.useSpeechRecognition}}),e.default=void 0;var n=o(Wt);function u(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return u=function(){return r},r}function o(r){if(r&&r.__esModule)return r;if(r===null||t(r)!=="object"&&typeof r!="function")return{default:r};var s=u();if(s&&s.has(r))return s.get(r);var h={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in r)if(Object.prototype.hasOwnProperty.call(r,w)){var d=k?Object.getOwnPropertyDescriptor(r,w):null;d&&(d.get||d.set)?Object.defineProperty(h,w,d):h[w]=r[w]}return h.default=r,s&&s.set(r,h),h}var a=n.default;e.default=a})(be);const ye=Ot(be);var Ut={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var u=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var r=typeof a;if(r==="string"||r==="number")u.push(a);else if(Array.isArray(a)){if(a.length){var s=n.apply(null,a);s&&u.push(s)}}else if(r==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){u.push(a.toString());continue}for(var h in a)t.call(a,h)&&a[h]&&u.push(h)}}}return u.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ut);var Or=Ut.exports;const Ir=Ot(Or),{colors:U,shadows:Rt,indents:Ke}=G,Dr=he`
  margin-bottom: 7px;
  padding-block: ${Ke.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  border: 1px solid transparent;
  background-color: ${({$licolor:e})=>e};
  border-radius: ${Ke.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${Ke.s};
  }
`,Mr=K.li`
  ${Dr}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${U.border};
    background-color: ${U.backgroundAccent};
    box-shadow: ${Rt.backdrop};

    &:hover {
      border-color: ${U.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${U.smokeBlack};
      &:hover {
        color: ${U.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${U.hovered};
    }
  }

  &:hover {
    border-color: ${U.accent};
    box-shadow: ${Rt.backdrop};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,Gt=he`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${Vn}
  }
`,zr=K.label`
  ${Gt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?U.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?U.yellow:U.border};
  }
  &:hover svg {
    stroke: ${U.placeholder};
  }
`,Nr=K.label`
  ${Gt}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${U.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?U.border:"transparent"};
  }
  &:hover svg {
    border-color: ${U.placeholder};
    color: ${({$hovered:e})=>e?U.placeholder:"transparent"};
  }
`,we=he`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${U.black};

  & svg {
    transition: color 250ms;
    color: ${U.border};
  }
  &:hover,
  &:hover svg {
    color: ${U.placeholder};
  }
`,Br=K.button`
  ${we}

  opacity: ${({$hovered:e})=>e?1:0};
`,Wr=K.button`
  ${we}

  opacity: 0;
`,{colors:Me,indents:Vt}=G,Ht=he`
  padding-block: 4px;
  display: grid;
  align-items: top;
  grid-template-columns: 20fr 1fr 20fr;
  color: ${Me.black};
`,Fr=K.div`
  ${Ht}
`,Kr=K.form`
  ${Ht}

  max-height: 70vh;
  overflow-y: scroll;
  scrollbar-width: none;
  grid-template-columns: 12fr 1fr 12fr;
`,xt=K.textarea`
  height: 84px;
  outline: none;
  border: 1px solid ${Me.backgroundHoverd};
  border-radius: ${Vt.xs};
  resize: none;
  overflow: clip;
  transition: height 150ms;
`,Ur=K.div`
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
    border: 1px solid ${Me.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${Me.placeholder};
  }
`,Gr=K.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Vr=K.button`
  ${we}
`,At=K.button`
  ${we}
`,Hr=K.button`
  ${we}
`,Et=K.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: inherit;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Vt.xs};
  color: inherit;
  transition: background-color 250ms;

  ${({$mode:e})=>e==="true"&&"cursor: text;"}
  -webkit-user-select: text; /* Safari */
  -ms-user-select: text; /* IE 10 and IE 11 */
  user-select: text; /* Standard syntax */
`,Yr=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 30px;
`,qr=K.iframe`
  ${Yr}
`,nt=({el:e,handleEdit:t,setRecording:n,setTranslation:u})=>{const o=L.useRef(null),a=L.useRef(null),r=L.useRef(null),s=ae(),{user:h}=de(),{activeCluster:k}=te(),[w,d]=L.useState(""),{_id:y,element:p,caption:R}=e,{register:x,watch:l,setValue:m,handleSubmit:v,setFocus:E}=Hn({mode:"onBlur",defaultValues:{element:p,caption:R}});L.useEffect(()=>{m("caption",R)},[R,m]);const{ref:g,...i}=x("element"),{ref:T,...C}=x("caption"),D=[o.current,a.current,r.current],B=[l("caption"),l("element")];Xn(D,B),L.useEffect(()=>{E("element"),w&&p.trim().startsWith("der")?m("element",w+p.replace("der","").trim()+", "):w&&p.trim().startsWith("die")?m("element",w+p.replace("die","").trim()+", "):w&&p.trim().startsWith("das")?m("element",w+p.replace("das","").trim()+", "):w?m("element",w+p+", "):m("element",w+p)},[w,p,E,m]);const W=L.useCallback(A=>{const O=h.lang;let N=A.caption.trim(),I=qe(A.element,k.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();I=De(I,","),N=De(N,","),h.lang.includes("en")&&k.lang.includes("de")&&![".","!","?",'"'].includes(I.at(-1))&&(I.includes("hat")||I.includes("ist"))&&I.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(N=N.split(/,\s+/).map(c=>c.startsWith("to ")?c:`to ${c}`).join(", ")),s(y?Ve({_id:y,lang:O,element:I,caption:N}):jt({...e,element:I,caption:N})).then(s(It({clusterId:k._id}))),!y&&N&&(k.sortBy?Qe():Ze(),n(""),u("")),t(!0)},[y,k._id,k.lang,k.sortBy,s,e,t,n,u,h.lang]),V=()=>{w===""&&d("der "),w==="der "&&d("die "),w==="die "&&d("das "),w==="das "&&d("")},b=L.useCallback(async A=>{const O=l("element"),N=qe(O,k.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),I={from:k.lang,to:h.lang},F=await Ie(N,I,A);m("caption",F)},[k.lang,m,h.lang,l]),_=document.querySelector("#modal");return L.useEffect(()=>{const A=async O=>{O==null||O.currentTarget.blur(),_.children.length===0&&(O.code==="NumpadAdd"||O.key==="F2")&&(O.preventDefault(),await b(h.engine),v(W)()),(O.key==="Enter"||O.key==="§"||_.children.length>0&&O.key==="F2")&&(O.preventDefault(),v(W)()),O.key==="Escape"&&(O.preventDefault(),t(!0)),O.code==="AltRight"&&o.current.focus()};return addEventListener("keydown",A),()=>{removeEventListener("keydown",A)}},[t,v,_.children.length,W,b,h.engine]),$.jsxs(Kr,{onSubmit:v(W),children:[$.jsx(xt,{...i,name:"element",ref:A=>{g(A),o.current=A}}),$.jsxs(Gr,{ref:r,children:[$.jsx(Hr,{type:"button",onClick:V,children:$.jsx(xn,{size:"18px"})}),$.jsx(At,{type:"button",onClick:()=>b("google"),children:$.jsx(An,{size:"16px"})}),$.jsx(At,{type:"button",onClick:()=>b("deepl"),children:$.jsx(En,{size:"18px"})}),$.jsx(Vr,{children:$.jsx(Cn,{size:"16px"})})]}),$.jsx(xt,{...C,name:"caption",ref:A=>{T(A),a.current=A}})]})};nt.propTypes={el:z.object,handleEdit:z.func,setRecording:z.func,setTranslation:z.func};const{button:Xr}=G.shadows,{m:Jr}=G.indents,Yt=({className:e})=>{const{user:t}=de(),[n,u]=L.useState(!1),{activeCluster:o}=te(),[a,r]=L.useState(""),[s,h]=L.useState(""),{transcript:k,listening:w,resetTranscript:d}=be.useSpeechRecognition(),{isMicrophoneAvailable:y}=be.useSpeechRecognition(),{browserSupportsSpeechRecognition:p}=be.useSpeechRecognition(),R=a.endsWith(", ")||a.replace(/[a-z]$/,"*#").endsWith("*#")?k.replace(/^./,g=>` ${g}`):k.replace(/^./,g=>g.toUpperCase()),x=`${a}${R}`,l=wt(x,St),m=(g,i)=>g.trim().endsWith(i)?`${g.trim()} `:`${g.trim()}${i} `;L.useEffect(()=>{if(!n)return;const g=[".","?","!",","],i=T=>{if(g.includes(T.key)){T.preventDefault();const C=m(l,T.key);r(C),d()}if(T.key==="Backspace"){T.preventDefault();const C=window.getSelection().toString();if(window.getSelection().deleteFromDocument(),C){const D=l.replace(C,"");r(D)}else{const D=l.length-1,B=l.substring(0,D);r(B)}d()}if(T.key==="Space"){T.preventDefault();const C=l+" ";r(C),d()}};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[n,w,l,d]),L.useEffect(()=>{const g=async i=>{const T=i.key==="F1"||i.key==="r"&&i.metaKey&&!i.altKey&&!i.shiftKey;if(w||T&&(i.preventDefault(),u(!0),ye.startListening({language:o.lang,continuous:!0})),w&&T){i.preventDefault(),ye.stopListening();const C=l.at(-1),D=!C||["!"].includes(C)?l:m(l,"."),B=await Ie(wt(D,St),{from:o.lang,to:t.lang},t.engine);r(D),h(B),d()}};return addEventListener("keydown",g),()=>{removeEventListener("keydown",g)}},[o==null?void 0:o.lang,n,w,l,d,t.engine,t.lang]);const v=L.useCallback(()=>{ye.stopListening(),u(!1),r(""),h(""),d()},[d]);if(L.useEffect(()=>{const g=i=>{if(i.key==="Escape"||i.key==="Enter"||i.key==="§")return i.preventDefault(),v()};return addEventListener("keyup",g),()=>{removeEventListener("keyup",g)}},[v]),!p||!y)return;const E=async g=>{if(g==null||g.currentTarget.blur(),!w)u(!0),ye.startListening({language:o.lang,continuous:!0});else{ye.stopListening();const i=l.at(-1),T=!i||["!"].includes(i)?l:m(l,"."),C={from:o.lang,to:t.lang},D=await Ie(T,C,t.engine);r(T),h(D),d()}};return $.jsxs("div",{className:Ir(e,!n&&"hidden"),children:[$.jsxs(pe,{onClick:E,$s:"m",$round:!0,$bs:Xr,children:[!w&&$.jsx(Ln,{size:18})," ",w&&$.jsx(_n,{size:18,fill:G.colors.error})]}),n&&$.jsx(jn,{$x:`left: ${Jr}`,$y:"top: 50%",$bd:w?"listening":"none",btn:!0,onClick:v,children:$.jsx(nt,{el:{cluster:o._id,element:l.trim(),caption:s.trim(),favorite:!0,checked:l.split(/\s+/).length<20},handleEdit:u,setRecording:r,setTranslation:h})})]})};Yt.propTypes={className:z.string};const{background:Ue}=G.colors,{button:Ct}=G.shadows,{s:Lt,m:Qr}=G.indents,qt=({className:e,filtredElements:t,setLiColor:n})=>{const{user:u}=de(),{activeCluster:o}=te(),{activeElement:a}=oe(),[r,s]=L.useState(null);if(L.useEffect(()=>{const l=window.speechSynthesis.getVoices();Array.isArray(l)&&l.length>0&&s(l),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{const m=window.speechSynthesis.getVoices();s(m)})},[]),!Array.isArray(r)||r.length===0)return;const h=l=>{if(!l.length)return;let m="",v=0;const E=l.reduce((g,i)=>(g[i.lang]||(g[i.lang]=0),g[i.lang]+=1,g),{});for(const g in E)E[g]>v&&(v=E[g],m=g);return m},k=t.length?h(t):u.lang,w=(l,m)=>l.replaceAll(", `",`;${m} `).replaceAll(" `",`${m} `).replaceAll(",`",";"),d=({text:l,playList:m,divider:v})=>{let E="";for(let g=0;g<m.length;g+=1){let i=m[g][l];const T=`@±@${m[g].lang}${v}`;[".","!","?",'"'].includes(i.at(-1))?(E+=w(i,v).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",l!=="caption"?`__${v}`:`__${T}`).replaceAll(".",l!=="caption"?`.${v}`:`.${T}`).replaceAll(",",l!=="caption"?`,${v}`:`,${T}`).replaceAll("!",l!=="caption"?`!${v}`:`!${T}`).replaceAll("?",l!=="caption"?`?${v}`:`?${T}`),o.lang.includes("de")&&(E=E.replaceAll(`0.${v}`,"0.").replaceAll(`1.${v}`,"1.").replaceAll(`2.${v}`,"2.").replaceAll(`3.${v}`,"3.").replaceAll(`4.${v}`,"4.").replaceAll(`5.${v}`,"5.").replaceAll(`6.${v}`,"6.").replaceAll(`7.${v}`,"7.").replaceAll(`8.${v}`,"8.").replaceAll(`9.${v}`,"9."))):m[g].element.startsWith("[")||(l==="caption"&&(i.includes(" [")&&(i=i.substring(0,i.indexOf(" ["))),i=`${i}@±@${m[g].lang}`),E+=i+v)}return E},y=r,p=l=>{l==null||l.currentTarget.blur(),n(Ue);const m="$*@",v=t.findIndex(i=>i.element===a.element),E=t.splice(v===-1?0:v),g=Pe({setLiColor:n,divider:m,voices:y,text:d({text:"element",playList:E,divider:m}),lang:o.lang,rate:o.rate});g&&ee.error(g)},R=l=>{l==null||l.currentTarget.blur();const m="$*@";n(Ue);const v=t.findIndex(i=>i.element===a.element),E=t.splice(v===-1?0:v),g=Pe({setLiColor:n,divider:m,voices:y,text:d({text:"caption",playList:E,divider:m}),lang:k,rate:u.rate});g&&ee.error(g)},x=l=>{l==null||l.currentTarget.blur(),n(Ue);let m="";const v="$*@",E=t.findIndex(T=>T.element===a.element),g=t.splice(E===-1?0:E);for(let T=0;T<g.length;T+=1){const{element:C,caption:D,lang:B}=g[T];if(!C.startsWith("[")){const W=w(C,""),V=D.includes(" [")?D.substring(0,D.indexOf(" [")):w(D,"");m+=W+`@±@${B}`+V+v}}const i=Pn({setLiColor:n,divider:v,voices:y,text:m,lang:o.lang,rate:u.rate});i&&ee.error(i)};return $.jsxs(Je,{className:e,$m:`${Lt} ${Qr}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr 1fr 0.5fr 1fr",$cg:Lt,children:[$.jsx(Yt,{}),$.jsx(pe,{onClick:p,$s:"m",$round:!0,$bs:Ct,children:(o==null?void 0:o.lang.at(0).toUpperCase())+(o==null?void 0:o.lang.substring(1))}),$.jsx(Bt,{onClick:x}),$.jsx(pe,{onClick:R,$s:"m",$round:!0,$bs:Ct,children:(k==null?void 0:k.at(0).toUpperCase())+(k==null?void 0:k.substring(1))})]})};qt.propTypes={className:z.string,filtredElements:z.array,setLiColor:z.func};const{colors:Ge}=G,Zr=K.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding-block: 10px;
  padding-inline: 14px;
  z-index: 101;

  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  border: none;
  border-radius: 20px;

  background-color: ${Ge.popup};
  color: ${Ge.white};
  transition: opacity 250ms;

  opacity: ${({$selection:e})=>e?1:0};
  pointer-events: ${({$selection:e})=>e?"all":"none"};
  transform: ${({$x:e,$y:t})=>`translate(${e}px, ${t}px)`};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid ${Ge.popup};
  }
`,Xt=({children:e})=>{var y;const{selection:t,position:n,offset:u,nodeText:o}=Jn(),{openUrls:a}=Qn(),{allElements:r}=oe(),{activeCluster:s}=te(),h=(y=r.find(p=>p.caption===o))==null?void 0:y.lang,k=s==null?void 0:s.lang,w=nr(t).map(p=>p[h||k]).filter(p=>p&&p);if((t==null?void 0:t.split(/\s+/).length)>1)return;const d=()=>{a(w)};if(t)return $.jsx(Zr,{$x:(n==null?void 0:n.x)-20-u,$y:(n==null?void 0:n.y)-98,$selection:t,onClick:d,children:e})};Xt.propTypes={onClick:z.func,children:z.oneOfType([z.string,z.node,z.oneOf(["img","png","svg"])])};const{background:ei,backgroundHoverd:ti}=G.colors,ni=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 30px;
`,ri=K.audio`
  ${ni}

  &::-webkit-media-controls {
    display: flex;
    justify-content: center;
    background-color: ${ei};
  }

  &::-webkit-media-controls-panel {
    background-color: ${ti};
  }
`,Jt=({src:e,accessToken:t,expiresIn:n})=>{const u=ae(),o=L.useRef(),[a,r]=L.useState("dump"),s=On({onSuccess:w=>{const{access_token:d,expires_in:y}=w,p={accessToken:d,expiresIn:y*1e3+Date.now()};u(In(p)),h(d)},onError:w=>ee.error(w.message),scope:Gn}),h=async w=>{try{const d=await Dn.get(e,{responseType:"blob",headers:{Authorization:`Bearer ${w}`}}).then(p=>p.data),y=URL.createObjectURL(d);r(y)}catch(d){ee.error(d.message)}},k=Date.now()<n;return $.jsx(ri,{ref:o,src:e.endsWith(".mp3")?e:a,onError:()=>{!k&&s(),k&&h(t)},onPause:w=>w.target.blur(),onEnded:w=>w.target.blur(),controls:!0})};Jt.propTypes={src:z.string,accessToken:z.string,expiresIn:z.number};const Qt=({el:e,setLiColor:t,editCount:n,selectMode:u})=>{var v,E;const o=ae(),{user:a}=de(),{activeCluster:r}=te(),{activeElement:s}=oe(),h=e.element,k=Mn(e.caption),[w,d]=L.useState(()=>{var g;return!((g=k.file)!=null&&g.endsWith(".mp3"))}),y="$*@",p=L.useCallback((g,i)=>{let T="";return i?([".","!","?",'"'].includes(g.trim().at(-1))?(T=g.trim().replaceAll(", `",`;${i} `).replaceAll(" `",`${i} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${i}`).replaceAll(".",`.${i}`).replaceAll(",",`,${i}`).replaceAll("!",`!${i}`).replaceAll("?",`?${i}`),r.lang.includes("de")&&(T=T.replaceAll(`0.${i}`,"0.").replaceAll(`1.${i}`,"1.").replaceAll(`2.${i}`,"2.").replaceAll(`3.${i}`,"3.").replaceAll(`4.${i}`,"4.").replaceAll(`5.${i}`,"5.").replaceAll(`6.${i}`,"6.").replaceAll(`7.${i}`,"7.").replaceAll(`8.${i}`,"8.").replaceAll(`9.${i}`,"9."))):T=g.trim()+i,T.includes("[")?T.substring(0,T.indexOf("["))+i:T):g},[r.lang]),R=L.useCallback(g=>{if(g==null||g.currentTarget.blur(),u||h.startsWith("["))return;const i=Pe({setLiColor:t,divider:y,voices:window.speechSynthesis.getVoices(),text:p(h,y),lang:r.lang,rate:r.rate});i&&ee.error(i)},[r.lang,r.rate,h,p,u,t]),x=L.useCallback(g=>{if(g==null||g.currentTarget.blur(),u)return;const i=Pe({setLiColor:t,divider:y,voices:window.speechSynthesis.getVoices(),text:p(k.text,y),lang:e.lang,rate:a.rate});i&&ee.error(i)},[k.text,e.lang,p,u,t,a.rate]);L.useEffect(()=>{if(n>0||e._id!==(s==null?void 0:s._id))return;const g=i=>{i.key==="ArrowLeft"&&!i.metaKey&&!i.altKey&&!i.shiftKey&&(i.preventDefault(),R()),i.key==="ArrowRight"&&!i.metaKey&&!i.altKey&&!i.shiftKey&&(i.preventDefault(),x())};return addEventListener("keydown",g),()=>{removeEventListener("keydown",g)}},[s==null?void 0:s._id,n,e._id,x,R]);const l=()=>{if(u)return;if(h.startsWith("[")){d(!w);return}const{_id:g,activeElementId:i}=r;o(Oe(e)),i!==e._id&&o(_e({_id:g,activeElementId:e._id})).unwrap().then(T=>o(je(T.result.cluster)))},m=g=>{g.stopPropagation();const{_id:i,sortBy:T}=r;o(_e({_id:i,sortBy:!T})).unwrap().then(C=>o(je(C.result.cluster)))};return $.jsxs(Fr,{onClick:l,children:[$.jsx(Et,{onClick:R,$mode:`${u}`,children:h}),$.jsx(Ur,{onClick:m}),k.text&&$.jsx(Et,{onClick:x,$mode:`${u}`,children:k.text}),w&&!k.text&&$.jsx(qr,{src:k.link}),!w&&!k.text&&$.jsx(Jt,{src:k.file,accessToken:(v=a.googleToken)==null?void 0:v.accessToken,expiresIn:(E=a.googleToken)==null?void 0:E.expiresIn})]})};Qt.propTypes={el:z.object,setLiColor:z.func,editCount:z.number,selectMode:z.bool};const Zt=e=>{const{el:t,liColor:n,setLiColor:u,editCount:o,setEditCount:a,selectMode:r}=e,s=ae(),h=L.useRef(null),{activeCluster:k}=te(),{elementTrash:w,activeElement:d,allElements:y}=oe(),[p,R]=L.useState(!1),{_id:x,favorite:l,checked:m}=t,v=w.find(B=>B._id===x),E=x===(d==null?void 0:d._id),g=B=>{R(!B),a(B?o-1:o+1)},i=document.querySelector("#modal");L.useEffect(()=>{if(!E)return;const{sortBy:B}=k,W=d.element.startsWith("["),V=b=>{if(b.key==="F2"&&!W&&i.children.length===0&&(b.preventDefault(),R(!p),a(p?o-1:o+1)),!(o>0)){if(b.key==="ArrowDown"&&!b.metaKey&&!b.altKey&&!b.shiftKey){b.preventDefault();const _=y.findIndex(({_id:A})=>A===(d==null?void 0:d._id));s(Oe(y[B?_-1:_+1])),Ye(h.current.nextElementSibling)}if(b.key==="ArrowUp"&&!b.metaKey&&!b.altKey&&!b.shiftKey){b.preventDefault();const _=y.findIndex(({_id:A})=>A===(d==null?void 0:d._id));s(Oe(y[B?_+1:_-1])),Ye(h.current.previousElementSibling)}b.altKey&&b.key==="ArrowDown"&&!b.metaKey&&!b.shiftKey&&(b.preventDefault(),Ze()),b.altKey&&b.key==="ArrowUp"&&!b.metaKey&&!b.shiftKey&&(b.preventDefault(),Qe())}};return addEventListener("keydown",V),()=>{removeEventListener("keydown",V)}},[k,d==null?void 0:d._id,d==null?void 0:d.element,y,s,o,E,p,i.children.length,a]);const T=()=>{s(Ve({_id:x,favorite:!l}))},C=()=>{s(Ve({_id:x,checked:!m}))},D=()=>s(Wn(t));return $.jsxs(Mr,{id:E?"active-element":null,$licolor:n,ref:h,children:[$.jsxs(He,{$h:"100%",$p:"0",$fd:"column",children:[$.jsxs(zr,{$hovered:l,children:[$.jsx("input",{type:"checkbox",name:"favorite",checked:l,onChange:T}),$.jsx(Un,{size:"20px"})]}),$.jsxs(Nr,{$hovered:m,children:[$.jsx("input",{type:"checkbox",name:"checked",checked:m,onChange:C}),$.jsx(zn,{size:"15px"})]})]}),p&&$.jsx(nt,{el:t,handleEdit:g}),!p&&$.jsx(Qt,{el:t,setLiColor:u,editCount:o,selectMode:r}),$.jsxs(He,{$h:"100%",$p:"0",$fd:"column",children:[$.jsx(Br,{$hovered:v,onClick:D,children:$.jsx(Nn,{size:"16px"})}),$.jsx(Wr,{onClick:()=>g(p),children:$.jsx(Bn,{size:"15px"})})]})]})};Zt.propTypes={el:z.object,liColor:z.string,setLiColor:z.func,editCount:z.number,setEditCount:z.func,selectMode:z.bool};const ii=K.ul`
  width: 100%;
  list-style: none;

  & .bar-up {
    transition: transform 250ms;
    transform: translateY(calc(124px - 100vh));
  }
  & .bar-down {
    transition: transform 250ms;
    transform: translateY(0px);
  }
`,{white:si}=G.colors,oi=()=>{const e=ae(),{activeCluster:t}=te(),{allElements:n,activeElement:u,elementTrash:o,elementFilter:a,isLoading:r}=oe(),[s,h]=L.useState(si),[k,w]=L.useState(0),[d,y]=L.useState(!1),{ref:p,inView:R,entry:x}=cr({initialInView:!0,rootMargin:`0px 0px ${window.innerHeight/2}px 0px`});L.useEffect(()=>{if(!t)return;const i=()=>{const T=document.getElementById("active-element");T&&Ye(T)};(u==null?void 0:u._id)===t.activeElementId?i():e(It({clusterId:t._id})).unwrap().then(({result:T})=>{if(!t.activeElementId)return;const C=T.elements.find(({_id:D})=>D===t.activeElementId);e(Oe(C))}).then(()=>i())},[]),L.useEffect(()=>{const i=C=>{C.altKey&&y(!0)},T=C=>{C.altKey||y(!1)};return addEventListener("keyup",T),addEventListener("keydown",i),()=>{removeEventListener("keydown",i),removeEventListener("keyup",T)}},[d,y]);let{elementSelect:l}=oe();l=l||[];const m=n.filter(i=>i.clusterId===(t==null?void 0:t._id)).sort((i,T)=>i.createdAt.localeCompare(T.createdAt)),E=(()=>{const i=o.map(T=>T._id);return l.includes("trash")?m.filter(T=>i.includes(T._id)):m})().filter(({element:i,caption:T,favorite:C,checked:D})=>{const B=i.toLowerCase().replace("·","").includes(a)||i.toLowerCase().includes(a)||T.toLowerCase().includes(a),W=l.includes("wordlist")?B&&Fn(i):B,V=()=>l.some(_=>["favorite","unfavorite"].includes(_))?l.includes("favorite")?W&&C===!0:W&&C===!1:W;return(()=>l.some(_=>["checked","unchecked"].includes(_))?l.includes("checked")?V()&&D===!0:V()&&D===!1:V())()}).sort(t!=null&&t.sortBy?(i,T)=>T.createdAt.localeCompare(i.createdAt):(i,T)=>i.createdAt.localeCompare(T.createdAt)),g=window.innerHeight<(x==null?void 0:x.target.getBoundingClientRect().y)+(x==null?void 0:x.target.getBoundingClientRect().height)*1.5;return $.jsxs($.Fragment,{children:[$.jsxs(ii,{id:"element-list",children:[E.map(i=>$.jsx(Zt,{el:i,liColor:s,setLiColor:h,editCount:k,setEditCount:w,selectMode:d},i._id)),!r&&$.jsxs("div",{ref:p,children:[$.jsx(zt,{}),$.jsx(Nt,{className:R&&g?"bar-up":"bar-down"}),$.jsx(qt,{className:R&&g?"bar-up":"bar-down",filtredElements:E,setLiColor:h})]})]}),$.jsxs(Xt,{children:[$.jsx("span",{children:"Translate"})," ",$.jsx(Pt,{size:18})]}),r&&$.jsx(Kn,{})]})},{s:_t,m:ai}=G.indents,fi=()=>$.jsx(He,{$p:`0 ${ai} ${_t} ${_t}`,children:$.jsx(oi,{})});export{fi as default};
