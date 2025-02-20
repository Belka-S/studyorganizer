import{a2 as We,r as L,h as ee,t as V,P as N,u as ae,i as de,v as te,j as S,a1 as Xe,a3 as ke,x as _e,J as je,a4 as bt,a5 as jt,a6 as Qe,a7 as Ze,B as pe,$ as wn,z as oe,Y as Sn,a8 as $n,a9 as Tn,aa as Pt,ab as kn,q as U,ac as Rn,ad as Ot,p as he,ae as Ve,af as Dt,ag as xn,ah as An,ai as En,aj as Cn,ak as Ln,al as _n,M as jn,am as Pe,an as Pn,ao as On,ap as Dn,aq as Mn,ar as In,as as Oe,k as Ye,D as zn,C as Nn,A as Bn,U as qe,at as Wn,au as Fn}from"./index-17235dba.js";import{r as Mt,T as Kn}from"./index-af974b07.js";import{w as It,S as Un}from"./googleScopes-b79ae0b4.js";import{v as Gn,u as Vn}from"./index.esm-f6dcaef3.js";const He=(e,t)=>{if(!t.includes("de"))return e;const n=e.trim().split(`
`);return n.length===1?e:["der","die","das"].includes(n[0].split(" ")[0])?`${n[0].trim()}, ${n[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e.includes("am")&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e},wt=(e,t)=>{let n=e;for(const r in t)n=n.replaceAll(r,t[r]);const a=r=>r.replace(/^./,s=>s.toUpperCase()),o=[...n.split(/\s+/)];for(let r=0;r<o.length;r+=1)[".","!","?"].includes(o[r].at(-1))&&o[r+1]&&o.splice(r+1,1,a(o[r+1]));return o.join(" ")},Yn=e=>/[a-z]/.test(e.charAt(0)),{VITE_DEEPL_API_KEY:qn}={VITE_GOOGLE_CLIENT_ID:"502819804892-294ksvklsg60pjugga88j8l13a6dgmf2.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyABIqXgO4nO0LhnoircvA4SL0uwOY_PxJ4",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Hn={google:"",deepl:qn},De=async(e,{from:t,to:n},a)=>{var c,r;if(!e||e.length===0)return"";const o=e.replaceAll(" ·",",").replaceAll("·","");We.engine=a,We.key=Hn[a];try{let s=await We(`${o}`,{from:t,to:n});if(n.includes("en")&&o.toLowerCase().includes("uhr")&&(s=s.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(o.at(-1)))return s;const k=o.split(o.includes(", ")?", ":/\s+/),d=s.split(", "),m=n.includes("de")?d[0]:d[0].at(0).toLowerCase()+d[0].substring(1);return k.length===1?s.toLocaleLowerCase()+", ":["der","die","das"].includes(k[0].split(" ")[0])?s.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":n.includes("en")&&((c=k[2])!=null&&c.startsWith("am"))?d[2].startsWith("the")?s:`${m}, ${d[1]}, the ${d[2]}`:(k[0].endsWith("n")&&["hat","ist"].includes((r=k[2])==null?void 0:r.split(" ")[0])&&t.includes("de")&&(s=n.includes("en")?"to "+m+", ":m+", "),s)}catch(s){return s.message}},Me=(e,t)=>e.endsWith(t)?e.substring(0,e.length-1):e,Jn=(e,t)=>{let n=84;e[0]&&(n=Number(e[0].style.height.replace("px",""))),L.useEffect(()=>{if(!e[0])return;let a=Math.max(...e.map(o=>o.scrollHeight));n!==a&&(a=a<=90?a:a+6,e.forEach(o=>{o.style.height=a+"px"}))},[n,e,t])},Xn=()=>{const[e,t]=L.useState("ready"),[n,a]=L.useState(""),[o,c]=L.useState({}),[r,s]=L.useState(0),[h,k]=L.useState(""),d=()=>{a(void 0),t("selecting")},m=y=>{const f=document.getSelection();if(!f)return;const T=f.toString();if(!T){a(void 0),t("ready");return}let x=null;["TEXTAREA","INPUT"].includes(y.target.nodeName)?x=y.target.getBoundingClientRect():x=f.getRangeAt(0).getBoundingClientRect(),c({x:x.left+x.width/2,y:x.top+window.scrollY,width:x.width,height:x.height}),a(T),t("selected");const l=y.target.value||y.target.textContent;l.toLowerCase()!=="translate"&&k(l);const b=y.target.closest("ul").getBoundingClientRect().width,g=window.innerWidth-b;b&&s(g)};return L.useEffect(()=>(document.addEventListener("selectstart",d),document.addEventListener("mouseup",m),()=>{document.removeEventListener("selectstart",d),document.removeEventListener("mouseup",m)}),[]),{selection:n,position:o,offset:r,state:e,nodeText:h}},Qn=e=>{let t=L.useRef([]);const n=c=>{c.forEach(r=>{const s=window.open(r,"_blank");s?t.current.push(s):ee.error(`Failed to open tab: ${r}`)})},a=()=>{t.current.forEach(c=>{c.close()}),t.current=[]},o=L.useCallback(async c=>{let r=[];c.forEach(s=>r.push(s)),a(),n(r)},[]);return L.useEffect(()=>{const c=async r=>{r.metaKey&&r.key==="l"&&!r.altKey&&!r.shiftKey&&(r.preventDefault(),await o(e))};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[o,e]),{openUrls:o}},Re=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],xe=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}],Zn={"..":".",". .":".","?.":"?","? .":"?","!.":"!","! .":"!",",,":",",", ,":","},er={" Dot":"."," dot":"."," exclamation mark":"!"," question mark":"?"," comma":","," colon":":"," semi-colon":";","Yes ":"Yes, ","No ":"No, ","Wow ":"Wow, ","Look ":"Look, "," but":", but"," please?":", please?"},tr={" Punkt":"."," Ausrufezeichen":"!"," Fragezeichen":"?"," Komma":","," Doppelpunkt":":"," Semikolon":";","Ja ":"Ja, ","Nein ":"Nein, "," weil":", weil"," aber":", aber"," als":", als"," ob":", ob"," damit":", damit"," bevor":", bevor"," obwohl":", obwohl"," dass":", dass"," dann":", dann"," deshalb":", deshalb"," desvegen":", desvegen"," trotzdem":", trotzdem"},St={...er,...tr,...Zn},nr=e=>[{de:`https://www.verbformen.com/conjugation/?w=${e}`},{en:`https://dictionary.cambridge.org/dictionary/english-russian/${e}`}];var Je=new Map,Ae=new WeakMap,$t=0,rr=void 0;function ir(e){return e?(Ae.has(e)||($t+=1,Ae.set(e,$t.toString())),Ae.get(e)):"0"}function sr(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?ir(e.root):e[t]}`).toString()}function or(e){const t=sr(e);let n=Je.get(t);if(!n){const a=new Map;let o;const c=new IntersectionObserver(r=>{r.forEach(s=>{var h;const k=s.isIntersecting&&o.some(d=>s.intersectionRatio>=d);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=k),(h=a.get(s.target))==null||h.forEach(d=>{d(k,s)})})},e);o=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:c,elements:a},Je.set(t,n)}return n}function ar(e,t,n={},a=rr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const h=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:h,intersectionRect:h,rootBounds:h}),()=>{}}const{id:o,observer:c,elements:r}=or(n),s=r.get(e)||[];return r.has(e)||r.set(e,s),s.push(t),c.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(r.delete(e),c.unobserve(e)),r.size===0&&(c.disconnect(),Je.delete(o))}}function cr({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:c,skip:r,initialInView:s,fallbackInView:h,onChange:k}={}){var d;const[m,y]=L.useState(null),f=L.useRef(k),[T,x]=L.useState({inView:!!s,entry:void 0});f.current=k,L.useEffect(()=>{if(r||!m)return;let A;return A=ar(m,(v,i)=>{x({inView:v,entry:i}),f.current&&f.current(v,i),i.isIntersecting&&c&&A&&(A(),A=void 0)},{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},h),()=>{A&&A()}},[Array.isArray(e)?e.toString():e,m,o,a,c,r,n,h,t]);const l=(d=T.entry)==null?void 0:d.target,b=L.useRef(void 0);!m&&l&&!c&&!r&&b.current!==l&&(b.current=l,x({inView:!!s,entry:void 0}));const g=[y,T.inView,T.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const{backgroundHoverd:Ee,white:Ce,borderLight:Le}=V.colors,zt=()=>{const e=ae(),{user:t}=de(),{activeCluster:n}=te(),a=({value:s})=>{e(_e({_id:n._id,lang:s})).unwrap().then(h=>e(je(h.result.cluster)))},o=({value:s})=>{e(_e({_id:n._id,rate:s})).unwrap().then(h=>e(je(h.result.cluster)))},c=({value:s})=>{const h=new FormData;h.append("lang",s),e(bt(h))},r=({value:s})=>{const h=new FormData;h.append("rate",s),e(bt(h))};return S.jsxs(Xe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[S.jsx(ke,{options:Re,defaultValue:Re.find(s=>s.value===(n==null?void 0:n.lang)),onChange:a,placeholder:"Language...",$ol:Ee,$b:Ce,$bh:Le}),S.jsx(ke,{options:xe,defaultValue:xe.find(s=>s.value==(n==null?void 0:n.rate)),onChange:o,placeholder:"Rate...",$ol:Ee,$b:Ce,$bh:Le}),S.jsx(ke,{options:Re,defaultValue:Re.find(s=>s.value===t.lang),onChange:c,placeholder:"Language...",$ol:Ee,$b:Ce,$bh:Le}),S.jsx(ke,{options:xe,defaultValue:xe.find(s=>s.value==t.rate),onChange:r,placeholder:"Rate...",$ol:Ee,$b:Ce,$bh:Le})]})};zt.propTypes={filtredElements:N.array,setLiColor:N.func};const{button:lr}=V.shadows,ur=()=>{const e=ae(),{user:t}=de(),{activeCluster:n}=te(),a=L.useCallback(async o=>{o==null||o.currentTarget.blur();const c=window.getSelection().toString();c&&await It(c);const r=await Mt();let s=He(r,n.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();s=Me(s,",");const h={from:n.lang,to:t.lang};let k=await De(s,h,t.engine);k=Me(k.trim(),",");const{_id:d}=n;try{const m={cluster:d,element:"[]",caption:s},y={cluster:d,element:s,caption:k,favorite:!0,checked:s.split(/\s+/).length<20},f=s.includes("https://")?m:y;e(jt(f)).unwrap().then(()=>n.sortBy?Qe():Ze())}catch(m){ee.error(`Invalid element, ${m.message}`)}},[n,e,t.engine,t.lang]);return L.useEffect(()=>{const o=async c=>{c.key==="e"&&c.metaKey&&!c.altKey&&!c.shiftKey&&(c.preventDefault(),await a())};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[a]),S.jsx(pe,{onClick:a,$s:"m",$round:!0,$bs:lr,children:S.jsx(wn,{size:18})})},{button:pr}=V.shadows,fr=()=>{const e=ae(),{elementTrash:t}=oe(),n=()=>{ee.error("Are you sure you want to delete the selected Element(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{e($n(t.map(a=>a._id).join("&"))).unwrap().then(()=>e(Tn()))}}})};return S.jsx(S.Fragment,{children:S.jsx(pe,{onClick:n,$s:"m",$round:!0,$bs:pr,children:S.jsx(Sn,{size:16})})})},{button:dr}=V.shadows,hr=()=>{const{activeCluster:e}=te();let t=L.useRef([]);const n=c=>{c.forEach(r=>{const s=window.open(r,"_blank");s?t.current.push(s):ee.error(`Failed to open tab: ${r}`)})},a=()=>{t.current.forEach(c=>{c.close()}),t.current=[]},o=L.useCallback(async()=>{const c=window.getSelection().toString();c&&await It(c);const r=await Mt();let s=[];e.lang.includes("de")&&s.push(`https://www.verbformen.com/conjugation/?w=${r}`),e.lang.includes("en")&&s.push(`https://dictionary.cambridge.org/dictionary/english-russian/${r}`),a(),n(s)},[e==null?void 0:e.lang]);return L.useEffect(()=>{const c=async r=>{r.metaKey&&r.key==="d"&&!r.altKey&&!r.shiftKey&&(r.preventDefault(),await o())};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[o]),S.jsx(pe,{onClick:o,$s:"m",$round:!0,$bs:dr,children:S.jsx(Pt,{size:18})})},{s:Tt,m:gr}=V.indents,Nt=({className:e})=>{const{pathname:t}=kn(),{elementTrash:n}=oe(),{activeCluster:a}=te(),o=n.length>0?" 1fr":"",c=a?" 1fr":"",r=o+c+" 1fr";if(t.includes("/element"))return S.jsxs(Xe,{className:e,$m:`${Tt} ${gr}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:r,$cg:Tt,children:[S.jsx(hr,{}),c&&S.jsx(ur,{}),o&&S.jsx(fr,{})]})};Nt.propTypes={className:N.string};const{colors:Fe}=V,mr=U.div`
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
`,Bt=({onClick:e})=>S.jsx(mr,{onClick:e,children:S.jsx(Rn,{size:"35px"})});Bt.propTypes={onClick:N.func};var vr={exports:{}};(function(e){var t=function(n){var a=Object.prototype,o=a.hasOwnProperty,c=Object.defineProperty||function(p,u,w){p[u]=w.value},r,s=typeof Symbol=="function"?Symbol:{},h=s.iterator||"@@iterator",k=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function m(p,u,w){return Object.defineProperty(p,u,{value:w,enumerable:!0,configurable:!0,writable:!0}),p[u]}try{m({},"")}catch{m=function(u,w,P){return u[w]=P}}function y(p,u,w,P){var _=u&&u.prototype instanceof A?u:A,z=Object.create(_.prototype),q=new B(P||[]);return c(z,"_invoke",{value:R(p,w,q)}),z}n.wrap=y;function f(p,u,w){try{return{type:"normal",arg:p.call(u,w)}}catch(P){return{type:"throw",arg:P}}}var T="suspendedStart",x="suspendedYield",l="executing",b="completed",g={};function A(){}function v(){}function i(){}var $={};m($,h,function(){return this});var E=Object.getPrototypeOf,D=E&&E(E(M([])));D&&D!==a&&o.call(D,h)&&($=D);var F=i.prototype=A.prototype=Object.create($);v.prototype=i,c(F,"constructor",{value:i,configurable:!0}),c(i,"constructor",{value:v,configurable:!0}),v.displayName=m(i,d,"GeneratorFunction");function W(p){["next","throw","return"].forEach(function(u){m(p,u,function(w){return this._invoke(u,w)})})}n.isGeneratorFunction=function(p){var u=typeof p=="function"&&p.constructor;return u?u===v||(u.displayName||u.name)==="GeneratorFunction":!1},n.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,i):(p.__proto__=i,m(p,d,"GeneratorFunction")),p.prototype=Object.create(F),p},n.awrap=function(p){return{__await:p}};function I(p,u){function w(z,q,H,X){var Y=f(p[z],p,q);if(Y.type==="throw")X(Y.arg);else{var ge=Y.arg,ce=ge.value;return ce&&typeof ce=="object"&&o.call(ce,"__await")?u.resolve(ce.__await).then(function(ie){w("next",ie,H,X)},function(ie){w("throw",ie,H,X)}):u.resolve(ce).then(function(ie){ge.value=ie,H(ge)},function(ie){return w("throw",ie,H,X)})}}var P;function _(z,q){function H(){return new u(function(X,Y){w(z,q,X,Y)})}return P=P?P.then(H,H):H()}c(this,"_invoke",{value:_})}W(I.prototype),m(I.prototype,k,function(){return this}),n.AsyncIterator=I,n.async=function(p,u,w,P,_){_===void 0&&(_=Promise);var z=new I(y(p,u,w,P),_);return n.isGeneratorFunction(u)?z:z.next().then(function(q){return q.done?q.value:z.next()})};function R(p,u,w){var P=T;return function(z,q){if(P===l)throw new Error("Generator is already running");if(P===b){if(z==="throw")throw q;return K()}for(w.method=z,w.arg=q;;){var H=w.delegate;if(H){var X=j(H,w);if(X){if(X===g)continue;return X}}if(w.method==="next")w.sent=w._sent=w.arg;else if(w.method==="throw"){if(P===T)throw P=b,w.arg;w.dispatchException(w.arg)}else w.method==="return"&&w.abrupt("return",w.arg);P=l;var Y=f(p,u,w);if(Y.type==="normal"){if(P=w.done?b:x,Y.arg===g)continue;return{value:Y.arg,done:w.done}}else Y.type==="throw"&&(P=b,w.method="throw",w.arg=Y.arg)}}}function j(p,u){var w=u.method,P=p.iterator[w];if(P===r)return u.delegate=null,w==="throw"&&p.iterator.return&&(u.method="return",u.arg=r,j(p,u),u.method==="throw")||w!=="return"&&(u.method="throw",u.arg=new TypeError("The iterator does not provide a '"+w+"' method")),g;var _=f(P,p.iterator,u.arg);if(_.type==="throw")return u.method="throw",u.arg=_.arg,u.delegate=null,g;var z=_.arg;if(!z)return u.method="throw",u.arg=new TypeError("iterator result is not an object"),u.delegate=null,g;if(z.done)u[p.resultName]=z.value,u.next=p.nextLoc,u.method!=="return"&&(u.method="next",u.arg=r);else return z;return u.delegate=null,g}W(F),m(F,d,"Generator"),m(F,h,function(){return this}),m(F,"toString",function(){return"[object Generator]"});function C(p){var u={tryLoc:p[0]};1 in p&&(u.catchLoc=p[1]),2 in p&&(u.finallyLoc=p[2],u.afterLoc=p[3]),this.tryEntries.push(u)}function O(p){var u=p.completion||{};u.type="normal",delete u.arg,p.completion=u}function B(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(C,this),this.reset(!0)}n.keys=function(p){var u=Object(p),w=[];for(var P in u)w.push(P);return w.reverse(),function _(){for(;w.length;){var z=w.pop();if(z in u)return _.value=z,_.done=!1,_}return _.done=!0,_}};function M(p){if(p!=null){var u=p[h];if(u)return u.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length)){var w=-1,P=function _(){for(;++w<p.length;)if(o.call(p,w))return _.value=p[w],_.done=!1,_;return _.value=r,_.done=!0,_};return P.next=P}}throw new TypeError(typeof p+" is not iterable")}n.values=M;function K(){return{value:r,done:!0}}return B.prototype={constructor:B,reset:function(p){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!p)for(var u in this)u.charAt(0)==="t"&&o.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=r)},stop:function(){this.done=!0;var p=this.tryEntries[0],u=p.completion;if(u.type==="throw")throw u.arg;return this.rval},dispatchException:function(p){if(this.done)throw p;var u=this;function w(X,Y){return z.type="throw",z.arg=p,u.next=X,Y&&(u.method="next",u.arg=r),!!Y}for(var P=this.tryEntries.length-1;P>=0;--P){var _=this.tryEntries[P],z=_.completion;if(_.tryLoc==="root")return w("end");if(_.tryLoc<=this.prev){var q=o.call(_,"catchLoc"),H=o.call(_,"finallyLoc");if(q&&H){if(this.prev<_.catchLoc)return w(_.catchLoc,!0);if(this.prev<_.finallyLoc)return w(_.finallyLoc)}else if(q){if(this.prev<_.catchLoc)return w(_.catchLoc,!0)}else if(H){if(this.prev<_.finallyLoc)return w(_.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(p,u){for(var w=this.tryEntries.length-1;w>=0;--w){var P=this.tryEntries[w];if(P.tryLoc<=this.prev&&o.call(P,"finallyLoc")&&this.prev<P.finallyLoc){var _=P;break}}_&&(p==="break"||p==="continue")&&_.tryLoc<=u&&u<=_.finallyLoc&&(_=null);var z=_?_.completion:{};return z.type=p,z.arg=u,_?(this.method="next",this.next=_.finallyLoc,g):this.complete(z)},complete:function(p,u){if(p.type==="throw")throw p.arg;return p.type==="break"||p.type==="continue"?this.next=p.arg:p.type==="return"?(this.rval=this.arg=p.arg,this.method="return",this.next="end"):p.type==="normal"&&u&&(this.next=u),g},finish:function(p){for(var u=this.tryEntries.length-1;u>=0;--u){var w=this.tryEntries[u];if(w.finallyLoc===p)return this.complete(w.completion,w.afterLoc),O(w),g}},catch:function(p){for(var u=this.tryEntries.length-1;u>=0;--u){var w=this.tryEntries[u];if(w.tryLoc===p){var P=w.completion;if(P.type==="throw"){var _=P.arg;O(w)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(p,u,w){return this.delegate={iterator:M(p),resultName:u,nextLoc:w},this.method==="next"&&(this.arg=r),g}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(vr);var be={},Wt={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.browserSupportsPolyfills=Q.compareTwoStringsUsingDiceCoefficient=Q.commandToRegExp=Q.concatTranscripts=Q.debounce=void 0;var yr=function(t,n,a){var o;return function(){var c=this,r=arguments,s=function(){o=null,a||t.apply(c,r)},h=a&&!o;clearTimeout(o),o=setTimeout(s,n),h&&t.apply(c,r)}};Q.debounce=yr;var br=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.map(function(o){return o.trim()}).join(" ").trim()};Q.concatTranscripts=br;var wr=/\s*\((.*?)\)\s*/g,Sr=/(\(\?:[^)]+\))\?/g,$r=/(\(\?)?:\w+/g,Tr=/\*/g,kr=/[-{}[\]+?.,\\^$|#]/g,Rr=function(t){return t instanceof RegExp?new RegExp(t.source,"i"):(t=t.replace(kr,"\\$&").replace(wr,"(?:$1)?").replace($r,function(n,a){return a?n:"([^\\s]+)"}).replace(Tr,"(.*?)").replace(Sr,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i"))};Q.commandToRegExp=Rr;var xr=function(t,n){if(t=t.replace(/\s+/g,"").toLowerCase(),n=n.replace(/\s+/g,"").toLowerCase(),!t.length&&!n.length)return 1;if(!t.length||!n.length)return 0;if(t===n)return 1;if(t.length===1&&n.length===1||t.length<2||n.length<2)return 0;for(var a=new Map,o=0;o<t.length-1;o++){var c=t.substring(o,o+2),r=a.has(c)?a.get(c)+1:1;a.set(c,r)}for(var s=0,h=0;h<n.length-1;h++){var k=n.substring(h,h+2),d=a.has(k)?a.get(k):0;d>0&&(a.set(k,d-1),s++)}return 2*s/(t.length+n.length-2)};Q.compareTwoStringsUsingDiceCoefficient=xr;var Ar=function(){return typeof window<"u"&&window.navigator!==void 0&&window.navigator.mediaDevices!==void 0&&window.navigator.mediaDevices.getUserMedia!==void 0&&(window.AudioContext!==void 0||window.webkitAudioContext!==void 0)};Q.browserSupportsPolyfills=Ar;var fe={},ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.APPEND_TRANSCRIPT=ue.CLEAR_TRANSCRIPT=void 0;var Er="CLEAR_TRANSCRIPT";ue.CLEAR_TRANSCRIPT=Er;var Cr="APPEND_TRANSCRIPT";ue.APPEND_TRANSCRIPT=Cr;Object.defineProperty(fe,"__esModule",{value:!0});fe.appendTranscript=fe.clearTranscript=void 0;var Ft=ue,Lr=function(){return{type:Ft.CLEAR_TRANSCRIPT}};fe.clearTranscript=Lr;var _r=function(t,n){return{type:Ft.APPEND_TRANSCRIPT,payload:{interimTranscript:t,finalTranscript:n}}};fe.appendTranscript=_r;var ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.transcriptReducer=void 0;var kt=ue,jr=Q,Pr=function(t,n){switch(n.type){case kt.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case kt.APPEND_TRANSCRIPT:return{interimTranscript:n.payload.interimTranscript,finalTranscript:(0,jr.concatTranscripts)(t.finalTranscript,n.payload.finalTranscript)};default:throw new Error}};ze.transcriptReducer=Pr;var Kt={},et={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return/(android)/i.test(typeof navigator<"u"?navigator.userAgent:"")};e.default=t})(et);var tt={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.isNative=void 0;var t=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),n=function(c){return c===t};e.isNative=n;var a=t;e.default=a})(tt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(et),n=Q,a=tt;function o(m){return m&&m.__esModule?m:{default:m}}function c(m,y,f,T,x,l,b){try{var g=m[l](b),A=g.value}catch(v){f(v);return}g.done?y(A):Promise.resolve(A).then(T,x)}function r(m){return function(){var y=this,f=arguments;return new Promise(function(T,x){var l=m.apply(y,f);function b(A){c(l,T,x,b,g,"next",A)}function g(A){c(l,T,x,b,g,"throw",A)}b(void 0)})}}function s(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function h(m,y){for(var f=0;f<y.length;f++){var T=y[f];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(m,T.key,T)}}function k(m,y,f){return y&&h(m.prototype,y),f&&h(m,f),m}var d=function(){function m(y){s(this,m),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.isMicrophoneAvailable=!0,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.disableRecognition=this.disableRecognition.bind(this),this.setSpeechRecognition(y),(0,t.default)()&&(this.updateFinalTranscript=(0,n.debounce)(this.updateFinalTranscript,250,!0))}return k(m,[{key:"setSpeechRecognition",value:function(f){var T=!!f&&((0,a.isNative)(f)||(0,n.browserSupportsPolyfills)());T&&(this.disableRecognition(),this.recognition=new f,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this),this.recognition.onerror=this.onError.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange(T)}},{key:"subscribe",value:function(f,T){this.subscribers[f]=T}},{key:"unsubscribe",value:function(f){delete this.subscribers[f]}},{key:"emitListeningChange",value:function(f){var T=this;this.listening=f,Object.keys(this.subscribers).forEach(function(x){var l=T.subscribers[x].onListeningChange;l(f)})}},{key:"emitMicrophoneAvailabilityChange",value:function(f){var T=this;this.isMicrophoneAvailable=f,Object.keys(this.subscribers).forEach(function(x){var l=T.subscribers[x].onMicrophoneAvailabilityChange;l(f)})}},{key:"emitTranscriptChange",value:function(f,T){var x=this;Object.keys(this.subscribers).forEach(function(l){var b=x.subscribers[l].onTranscriptChange;b(f,T)})}},{key:"emitClearTranscript",value:function(){var f=this;Object.keys(this.subscribers).forEach(function(T){var x=f.subscribers[T].onClearTranscript;x()})}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(f){var T=this;Object.keys(this.subscribers).forEach(function(x){var l=T.subscribers[x],b=l.onBrowserSupportsSpeechRecognitionChange,g=l.onBrowserSupportsContinuousListeningChange;b(f),g(f)})}},{key:"disconnect",value:function(f){if(this.recognition&&this.listening)switch(f){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;case"STOP":default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"disableRecognition",value:function(){this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.recognition.onerror=function(){},this.listening&&this.stopListening())}},{key:"onError",value:function(f){f&&f.error&&f.error==="not-allowed"&&(this.emitMicrophoneAvailabilityChange(!1),this.disableRecognition())}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(f){var T=f.results,x=f.resultIndex,l=x===void 0?T.length-1:x;this.interimTranscript="",this.finalTranscript="";for(var b=l;b<T.length;++b)T[b].isFinal&&(!(0,t.default)()||T[b][0].confidence>0)?this.updateFinalTranscript(T[b][0].transcript):this.interimTranscript=(0,n.concatTranscripts)(this.interimTranscript,T[b][0].transcript);var g=!1;this.interimTranscript===""&&this.finalTranscript!==""?(this.previousResultWasFinalOnly&&(g=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,g||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(f){this.finalTranscript=(0,n.concatTranscripts)(this.finalTranscript,f)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:function(){var y=r(regeneratorRuntime.mark(function T(){var x,l,b,g,A,v,i=arguments;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(x=i.length>0&&i[0]!==void 0?i[0]:{},l=x.continuous,b=l===void 0?!1:l,g=x.language,this.recognition){E.next=3;break}return E.abrupt("return");case 3:if(A=b!==this.recognition.continuous,v=g&&g!==this.recognition.lang,!(A||v)){E.next=11;break}if(!this.listening){E.next=9;break}return E.next=9,this.stopListening();case 9:this.recognition.continuous=A?b:this.recognition.continuous,this.recognition.lang=v?g:this.recognition.lang;case 11:if(this.listening){E.next=22;break}return this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript()),E.prev=13,E.next=16,this.start();case 16:this.emitListeningChange(!0),E.next=22;break;case 19:E.prev=19,E.t0=E.catch(13),E.t0 instanceof DOMException||this.emitMicrophoneAvailabilityChange(!1);case 22:case"end":return E.stop()}},T,this,[[13,19]])}));function f(){return y.apply(this,arguments)}return f}()},{key:"abortListening",value:function(){var y=r(regeneratorRuntime.mark(function T(){var x=this;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),b.next=4,new Promise(function(g){x.onStopListening=g});case 4:case"end":return b.stop()}},T,this)}));function f(){return y.apply(this,arguments)}return f}()},{key:"stopListening",value:function(){var y=r(regeneratorRuntime.mark(function T(){var x=this;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),b.next=4,new Promise(function(g){x.onStopListening=g});case 4:case"end":return b.stop()}},T,this)}));function f(){return y.apply(this,arguments)}return f}()},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:function(){var y=r(regeneratorRuntime.mark(function T(){return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(this.recognition&&!this.listening)){l.next=4;break}return l.next=3,this.recognition.start();case 3:this.listening=!0;case 4:case"end":return l.stop()}},T,this)}));function f(){return y.apply(this,arguments)}return f}()},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}]),m}();e.default=d})(Kt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.useSpeechRecognition=void 0;var t=L,n=Q,a=fe,o=ze,c=h(Kt),r=h(et),s=h(tt);function h(R){return R&&R.__esModule?R:{default:R}}function k(R,j,C,O,B,M,K){try{var p=R[M](K),u=p.value}catch(w){C(w);return}p.done?j(u):Promise.resolve(u).then(O,B)}function d(R){return function(){var j=this,C=arguments;return new Promise(function(O,B){var M=R.apply(j,C);function K(u){k(M,O,B,K,p,"next",u)}function p(u){k(M,O,B,K,p,"throw",u)}K(void 0)})}}function m(R){return T(R)||f(R)||g(R)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(R){if(typeof Symbol<"u"&&Symbol.iterator in Object(R))return Array.from(R)}function T(R){if(Array.isArray(R))return A(R)}function x(R){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(C){return typeof C}:x=function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},x(R)}function l(R,j){return i(R)||v(R,j)||g(R,j)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(R,j){if(R){if(typeof R=="string")return A(R,j);var C=Object.prototype.toString.call(R).slice(8,-1);if(C==="Object"&&R.constructor&&(C=R.constructor.name),C==="Map"||C==="Set")return Array.from(R);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return A(R,j)}}function A(R,j){(j==null||j>R.length)&&(j=R.length);for(var C=0,O=new Array(j);C<j;C++)O[C]=R[C];return O}function v(R,j){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(R)))){var C=[],O=!0,B=!1,M=void 0;try{for(var K=R[Symbol.iterator](),p;!(O=(p=K.next()).done)&&(C.push(p.value),!(j&&C.length===j));O=!0);}catch(u){B=!0,M=u}finally{try{!O&&K.return!=null&&K.return()}finally{if(B)throw M}}return C}}function i(R){if(Array.isArray(R))return R}var $=!!s.default,E=$&&!(0,r.default)(),D,F=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},C=j.transcribing,O=C===void 0?!0:C,B=j.clearTranscriptOnListen,M=B===void 0?!0:B,K=j.commands,p=K===void 0?[]:K,u=(0,t.useState)(W.getRecognitionManager()),w=l(u,1),P=w[0],_=(0,t.useState)($),z=l(_,2),q=z[0],H=z[1],X=(0,t.useState)(E),Y=l(X,2),ge=Y[0],ce=Y[1],ie=(0,t.useReducer)(o.transcriptReducer,{interimTranscript:P.interimTranscript,finalTranscript:""}),rt=l(ie,2),it=rt[0],st=it.interimTranscript,ot=it.finalTranscript,at=rt[1],en=(0,t.useState)(P.listening),ct=l(en,2),tn=ct[0],nn=ct[1],rn=(0,t.useState)(P.isMicrophoneAvailable),lt=l(rn,2),sn=lt[0],on=lt[1],ut=(0,t.useRef)(p);ut.current=p;var pt=function(){at((0,a.clearTranscript)())},me=(0,t.useCallback)(function(){P.resetTranscript(),pt()},[P]),an=function(J,re,le){var se=x(J)==="object"?J.toString():J,ve=se.replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),Se=(0,n.compareTwoStringsUsingDiceCoefficient)(ve,re);return Se>=le?{command:J,commandWithoutSpecials:ve,howSimilar:Se,isFuzzyMatch:!0}:null},cn=function(J,re){var le=(0,n.commandToRegExp)(J),se=le.exec(re);return se?{command:J,parameters:se.slice(1)}:null},ft=(0,t.useCallback)(function(ne,J){ut.current.forEach(function(re){var le=re.command,se=re.callback,ve=re.matchInterim,Se=ve===void 0?!1:ve,gt=re.isFuzzyMatch,mt=gt===void 0?!1:gt,vt=re.fuzzyMatchingThreshold,un=vt===void 0?.8:vt,yt=re.bestMatchOnly,pn=yt===void 0?!1:yt,$e=!J&&Se?ne.trim():J.trim(),fn=Array.isArray(le)?le:[le],Te=fn.map(function(Z){return mt?an(Z,$e,un):cn(Z,$e)}).filter(function(Z){return Z});if(mt&&pn&&Te.length>=2){Te.sort(function(Z,Be){return Be.howSimilar-Z.howSimilar});var Ne=Te[0],dn=Ne.command,hn=Ne.commandWithoutSpecials,gn=Ne.howSimilar;se(hn,$e,gn,{command:dn,resetTranscript:me})}else Te.forEach(function(Z){if(Z.isFuzzyMatch){var Be=Z.command,mn=Z.commandWithoutSpecials,vn=Z.howSimilar;se(mn,$e,vn,{command:Be,resetTranscript:me})}else{var yn=Z.command,bn=Z.parameters;se.apply(void 0,m(bn).concat([{command:yn,resetTranscript:me}]))}})})},[me]),dt=(0,t.useCallback)(function(ne,J){O&&at((0,a.appendTranscript)(ne,J)),ft(ne,J)},[ft,O]),ht=(0,t.useCallback)(function(){M&&pt()},[M]);(0,t.useEffect)(function(){var ne=W.counter;W.counter+=1;var J={onListeningChange:nn,onMicrophoneAvailabilityChange:on,onTranscriptChange:dt,onClearTranscript:ht,onBrowserSupportsSpeechRecognitionChange:H,onBrowserSupportsContinuousListeningChange:ce};return P.subscribe(ne,J),function(){P.unsubscribe(ne)}},[O,M,P,dt,ht]);var ln=(0,n.concatTranscripts)(ot,st);return{transcript:ln,interimTranscript:st,finalTranscript:ot,listening:tn,isMicrophoneAvailable:sn,resetTranscript:me,browserSupportsSpeechRecognition:q,browserSupportsContinuousListening:ge}};e.useSpeechRecognition=F;var W={counter:0,applyPolyfill:function(j){D?D.setSpeechRecognition(j):D=new c.default(j);var C=!!j&&(0,n.browserSupportsPolyfills)();$=C,E=C},removePolyfill:function(){D?D.setSpeechRecognition(s.default):D=new c.default(s.default),$=!!s.default,E=$&&!(0,r.default)()},getRecognitionManager:function(){return D||(D=new c.default(s.default)),D},getRecognition:function(){var j=W.getRecognitionManager();return j.getRecognition()},startListening:function(){var R=d(regeneratorRuntime.mark(function C(){var O,B,M,K,p=arguments;return regeneratorRuntime.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return O=p.length>0&&p[0]!==void 0?p[0]:{},B=O.continuous,M=O.language,K=W.getRecognitionManager(),w.next=4,K.startListening({continuous:B,language:M});case 4:case"end":return w.stop()}},C)}));function j(){return R.apply(this,arguments)}return j}(),stopListening:function(){var R=d(regeneratorRuntime.mark(function C(){var O;return regeneratorRuntime.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return O=W.getRecognitionManager(),M.next=3,O.stopListening();case 3:case"end":return M.stop()}},C)}));function j(){return R.apply(this,arguments)}return j}(),abortListening:function(){var R=d(regeneratorRuntime.mark(function C(){var O;return regeneratorRuntime.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return O=W.getRecognitionManager(),M.next=3,O.abortListening();case 3:case"end":return M.stop()}},C)}));function j(){return R.apply(this,arguments)}return j}(),browserSupportsSpeechRecognition:function(){return $},browserSupportsContinuousListening:function(){return E}},I=W;e.default=I})(Wt);(function(e){function t(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(h){return typeof h}:t=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},t(r)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useSpeechRecognition",{enumerable:!0,get:function(){return n.useSpeechRecognition}}),e.default=void 0;var n=o(Wt);function a(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return a=function(){return r},r}function o(r){if(r&&r.__esModule)return r;if(r===null||t(r)!=="object"&&typeof r!="function")return{default:r};var s=a();if(s&&s.has(r))return s.get(r);var h={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(Object.prototype.hasOwnProperty.call(r,d)){var m=k?Object.getOwnPropertyDescriptor(r,d):null;m&&(m.get||m.set)?Object.defineProperty(h,d,m):h[d]=r[d]}return h.default=r,s&&s.set(r,h),h}var c=n.default;e.default=c})(be);const ye=Ot(be);var Ut={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a=[],o=0;o<arguments.length;o++){var c=arguments[o];if(c){var r=typeof c;if(r==="string"||r==="number")a.push(c);else if(Array.isArray(c)){if(c.length){var s=n.apply(null,c);s&&a.push(s)}}else if(r==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){a.push(c.toString());continue}for(var h in c)t.call(c,h)&&c[h]&&a.push(h)}}}return a.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ut);var Or=Ut.exports;const Dr=Ot(Or),{colors:G,shadows:Rt,indents:Ke}=V,Mr=he`
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
`,Ir=U.li`
  ${Mr}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${G.border};
    background-color: ${G.background};
    box-shadow: ${Rt.backdrop};

    &:hover {
      border-color: ${G.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${G.smokeBlack};
      &:hover {
        color: ${G.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${G.hovered};
    }
  }

  &:hover {
    border-color: ${G.accent};
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
    ${Gn}
  }
`,zr=U.label`
  ${Gt}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:e})=>e?G.yellow:"transparent"};
    stroke: ${({$hovered:e})=>e?G.yellow:G.border};
  }
  &:hover svg {
    stroke: ${G.placeholder};
  }
`,Nr=U.label`
  ${Gt}
  opacity: ${({$hovered:e})=>e?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${G.border};
    border-radius: 50%;
    color: ${({$hovered:e})=>e?G.border:"transparent"};
  }
  &:hover svg {
    border-color: ${G.placeholder};
    color: ${({$hovered:e})=>e?G.placeholder:"transparent"};
  }
`,we=he`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${G.black};

  & svg {
    transition: color 250ms;
    color: ${G.border};
  }
  &:hover,
  &:hover svg {
    color: ${G.placeholder};
  }
`,Br=U.button`
  ${we}

  opacity: ${({$hovered:e})=>e?1:0};
`,Wr=U.button`
  ${we}

  opacity: 0;
`,{colors:Ie,indents:Vt}=V,Yt=he`
  padding-block: 4px;
  display: grid;
  align-items: start;
  grid-template-columns: 20fr 1fr 20fr;
`,Fr=U.div`
  ${Yt}
`,Kr=U.form`
  ${Yt}

  max-height: 70vh;
  overflow-y: scroll;
  scrollbar-width: none;
  grid-template-columns: 12fr 1fr 12fr;
`,xt=U.textarea`
  height: 84px;
  outline: none;
  border: 1px solid ${Ie.backgroundHoverd};
  border-radius: ${Vt.xs};
  resize: none;
  overflow: clip;
  transition: height 150ms;
`,Ur=U.div`
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
    border: 1px solid ${Ie.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${Ie.placeholder};
  }
`,Gr=U.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Vr=U.button`
  ${we}
`,At=U.button`
  ${we}
`,Yr=U.button`
  ${we}
`,Et=U.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Vt.xs};
  color: ${Ie.black};
  transition: background-color 250ms;

  ${({$mode:e})=>e==="true"&&"cursor: text;"}
  -webkit-user-select: text; /* Safari */
  -ms-user-select: text; /* IE 10 and IE 11 */
  user-select: text; /* Standard syntax */
`,qr=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 30px;
`,Hr=U.iframe`
  ${qr}
`,nt=({el:e,handleEdit:t,setRecording:n,setTranslation:a})=>{const o=L.useRef(null),c=L.useRef(null),r=L.useRef(null),s=ae(),{user:h}=de(),{activeCluster:k}=te(),[d,m]=L.useState(""),{_id:y,element:f,caption:T}=e,{register:x,watch:l,setValue:b,handleSubmit:g,setFocus:A}=Vn({mode:"onBlur",defaultValues:{element:f,caption:T}});L.useEffect(()=>{b("caption",T)},[T,b]);const{ref:v,...i}=x("element"),{ref:$,...E}=x("caption"),D=[o.current,c.current,r.current],F=[l("caption"),l("element")];Jn(D,F),L.useEffect(()=>{A("element"),d&&f.trim().startsWith("der")?b("element",d+f.replace("der","").trim()+", "):d&&f.trim().startsWith("die")?b("element",d+f.replace("die","").trim()+", "):d&&f.trim().startsWith("das")?b("element",d+f.replace("das","").trim()+", "):d?b("element",d+f+", "):b("element",d+f)},[d,f,A,b]);const W=L.useCallback(C=>{const O=h.lang;let B=C.caption.trim(),M=He(C.element,k.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();M=Me(M,","),B=Me(B,","),h.lang.includes("en")&&k.lang.includes("de")&&![".","!","?",'"'].includes(M.at(-1))&&(M.includes("hat")||M.includes("ist"))&&M.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(B=B.split(/,\s+/).map(u=>u.startsWith("to ")?u:`to ${u}`).join(", ")),s(y?Ve({_id:y,lang:O,element:M,caption:B}):jt({...e,element:M,caption:B})).then(s(Dt())),!y&&B&&(k.sortBy?Qe():Ze(),n(""),a("")),t(!0)},[y,k.lang,k.sortBy,s,e,t,n,a,h.lang]),I=()=>{d===""&&m("der "),d==="der "&&m("die "),d==="die "&&m("das "),d==="das "&&m("")},R=L.useCallback(async C=>{const O=l("element"),B=He(O,k.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),M={from:k.lang,to:h.lang},K=await De(B,M,C);b("caption",K)},[k.lang,b,h.lang,l]),j=document.querySelector("#modal");return L.useEffect(()=>{const C=async O=>{O==null||O.currentTarget.blur(),j.children.length===0&&(O.code==="NumpadAdd"||O.key==="F2")&&(O.preventDefault(),await R(h.engine),g(W)()),(O.key==="Enter"||O.key==="§"||j.children.length>0&&O.key==="F2")&&(O.preventDefault(),g(W)()),O.key==="Escape"&&(O.preventDefault(),t(!0)),O.code==="AltRight"&&o.current.focus()};return addEventListener("keydown",C),()=>{removeEventListener("keydown",C)}},[t,g,j.children.length,W,R,h.engine]),S.jsxs(Kr,{onSubmit:g(W),children:[S.jsx(xt,{...i,name:"element",ref:C=>{v(C),o.current=C}}),S.jsxs(Gr,{ref:r,children:[S.jsx(Yr,{type:"button",onClick:I,children:S.jsx(xn,{size:"18px"})}),S.jsx(At,{type:"button",onClick:()=>R("google"),children:S.jsx(An,{size:"16px"})}),S.jsx(At,{type:"button",onClick:()=>R("deepl"),children:S.jsx(En,{size:"18px"})}),S.jsx(Vr,{children:S.jsx(Cn,{size:"16px"})})]}),S.jsx(xt,{...E,name:"caption",ref:C=>{$(C),c.current=C}})]})};nt.propTypes={el:N.object,handleEdit:N.func,setRecording:N.func,setTranslation:N.func};const{button:Jr}=V.shadows,{m:Xr}=V.indents,qt=({className:e})=>{const{user:t}=de(),[n,a]=L.useState(!1),{activeCluster:o}=te(),[c,r]=L.useState(""),[s,h]=L.useState(""),{transcript:k,listening:d,resetTranscript:m}=be.useSpeechRecognition(),{isMicrophoneAvailable:y}=be.useSpeechRecognition(),{browserSupportsSpeechRecognition:f}=be.useSpeechRecognition(),T=c.endsWith(", ")||c.replace(/[a-z]$/,"*#").endsWith("*#")?k.replace(/^./,v=>` ${v}`):k.replace(/^./,v=>v.toUpperCase()),x=`${c}${T}`,l=wt(x,St),b=(v,i)=>v.trim().endsWith(i)?`${v.trim()} `:`${v.trim()}${i} `;L.useEffect(()=>{if(!n)return;const v=[".","?","!",","],i=$=>{if(v.includes($.key)){$.preventDefault();const E=b(l,$.key);r(E),m()}if($.key==="Backspace"){$.preventDefault();const E=window.getSelection().toString();if(window.getSelection().deleteFromDocument(),E){const D=l.replace(E,"");r(D)}else{const D=l.length-1,F=l.substring(0,D);r(F)}m()}if($.key==="Space"){$.preventDefault();const E=l+" ";r(E),m()}};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[n,d,l,m]),L.useEffect(()=>{const v=async i=>{const $=i.key==="F1"||i.key==="r"&&i.metaKey&&!i.altKey&&!i.shiftKey;if(d||$&&(i.preventDefault(),a(!0),ye.startListening({language:o.lang,continuous:!0})),d&&$){i.preventDefault(),ye.stopListening();const E=l.at(-1),D=!E||["!"].includes(E)?l:b(l,"."),F=await De(wt(D,St),{from:o.lang,to:t.lang},t.engine);r(D),h(F),m()}};return addEventListener("keydown",v),()=>{removeEventListener("keydown",v)}},[o==null?void 0:o.lang,n,d,l,m,t.engine,t.lang]);const g=L.useCallback(()=>{ye.stopListening(),a(!1),r(""),h(""),m()},[m]);if(L.useEffect(()=>{const v=i=>{if(i.key==="Escape"||i.key==="Enter"||i.key==="§")return i.preventDefault(),g()};return addEventListener("keyup",v),()=>{removeEventListener("keyup",v)}},[g]),!f||!y)return;const A=async v=>{if(v==null||v.currentTarget.blur(),!d)a(!0),ye.startListening({language:o.lang,continuous:!0});else{ye.stopListening();const i=l.at(-1),$=!i||["!"].includes(i)?l:b(l,"."),E={from:o.lang,to:t.lang},D=await De($,E,t.engine);r($),h(D),m()}};return S.jsxs("div",{className:Dr(e,!n&&"hidden"),children:[S.jsxs(pe,{onClick:A,$s:"m",$round:!0,$bs:Jr,children:[!d&&S.jsx(Ln,{size:18})," ",d&&S.jsx(_n,{size:18,fill:V.colors.error})]}),n&&S.jsx(jn,{$x:`left: ${Xr}`,$y:"top: 50%",$bd:d?"listening":"none",btn:!0,onClick:g,children:S.jsx(nt,{el:{cluster:o._id,element:l.trim(),caption:s.trim(),favorite:!0,checked:l.split(/\s+/).length<20},handleEdit:a,setRecording:r,setTranslation:h})})]})};qt.propTypes={className:N.string};const{background:Ue}=V.colors,{button:Ct}=V.shadows,{s:Lt,m:Qr}=V.indents,Ht=({className:e,filtredElements:t,setLiColor:n})=>{const{user:a}=de(),{activeCluster:o}=te(),{activeElement:c}=oe(),[r,s]=L.useState(null);if(L.useEffect(()=>{const l=window.speechSynthesis.getVoices();Array.isArray(l)&&l.length>0&&s(l),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{const b=window.speechSynthesis.getVoices();s(b)})},[]),!Array.isArray(r)||r.length===0)return;const h=l=>{if(!l.length)return;let b="",g=0;const A=l.reduce((v,i)=>(v[i.lang]||(v[i.lang]=0),v[i.lang]+=1,v),{});for(const v in A)A[v]>g&&(g=A[v],b=v);return b},k=t.length?h(t):a.lang,d=(l,b)=>l.replaceAll(", `",`;${b} `).replaceAll(" `",`${b} `).replaceAll(",`",";"),m=({text:l,playList:b,divider:g})=>{let A="";for(let v=0;v<b.length;v+=1){let i=b[v][l];const $=`@±@${b[v].lang}${g}`;[".","!","?",'"'].includes(i.at(-1))?(A+=d(i,g).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",l!=="caption"?`__${g}`:`__${$}`).replaceAll(".",l!=="caption"?`.${g}`:`.${$}`).replaceAll(",",l!=="caption"?`,${g}`:`,${$}`).replaceAll("!",l!=="caption"?`!${g}`:`!${$}`).replaceAll("?",l!=="caption"?`?${g}`:`?${$}`).replaceAll(":",l!=="caption"?`:${g}`:`:${$}`),o.lang.includes("de")&&(A=A.replaceAll(`0.${g}`,"0.").replaceAll(`1.${g}`,"1.").replaceAll(`2.${g}`,"2.").replaceAll(`3.${g}`,"3.").replaceAll(`4.${g}`,"4.").replaceAll(`5.${g}`,"5.").replaceAll(`6.${g}`,"6.").replaceAll(`7.${g}`,"7.").replaceAll(`8.${g}`,"8.").replaceAll(`9.${g}`,"9."))):b[v].element.startsWith("[")||(l==="caption"&&(i.includes(" [")&&(i=i.substring(0,i.indexOf(" ["))),i=`${i}@±@${b[v].lang}`),A+=i+g)}return A},y=r,f=l=>{l==null||l.currentTarget.blur(),n(Ue);const b="$*@",g=t.findIndex(i=>i.element===c.element),A=t.splice(g===-1?0:g),v=Pe({setLiColor:n,divider:b,voices:y,text:m({text:"element",playList:A,divider:b}),lang:o.lang,rate:o.rate});v&&ee.error(v)},T=l=>{l==null||l.currentTarget.blur();const b="$*@";n(Ue);const g=t.findIndex(i=>i.element===c.element),A=t.splice(g===-1?0:g),v=Pe({setLiColor:n,divider:b,voices:y,text:m({text:"caption",playList:A,divider:b}),lang:k,rate:a.rate});v&&ee.error(v)},x=l=>{l==null||l.currentTarget.blur(),n(Ue);let b="";const g="$*@",A=t.findIndex($=>$.element===c.element),v=t.splice(A===-1?0:A);for(let $=0;$<v.length;$+=1){const{element:E,caption:D,lang:F}=v[$];if(!E.startsWith("[")){const W=d(E,""),I=D.includes(" [")?D.substring(0,D.indexOf(" [")):d(D,"");b+=W+`@±@${F}`+I+g}}const i=Pn({setLiColor:n,divider:g,voices:y,text:b,lang:o.lang,rate:a.rate});i&&ee.error(i)};return S.jsxs(Xe,{className:e,$m:`${Lt} ${Qr}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr 1fr 0.5fr 1fr",$cg:Lt,children:[S.jsx(qt,{}),S.jsx(pe,{onClick:f,$s:"m",$round:!0,$bs:Ct,children:(o==null?void 0:o.lang.at(0).toUpperCase())+(o==null?void 0:o.lang.substring(1))}),S.jsx(Bt,{onClick:x}),S.jsx(pe,{onClick:T,$s:"m",$round:!0,$bs:Ct,children:(k==null?void 0:k.at(0).toUpperCase())+(k==null?void 0:k.substring(1))})]})};Ht.propTypes={className:N.string,filtredElements:N.array,setLiColor:N.func};const{colors:Ge}=V,Zr=U.button`
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
`,Jt=({children:e})=>{var y;const{selection:t,position:n,offset:a,nodeText:o}=Xn(),{openUrls:c}=Qn(),{allElements:r}=oe(),{activeCluster:s}=te(),h=(y=r.find(f=>f.caption===o))==null?void 0:y.lang,k=s==null?void 0:s.lang,d=nr(t).map(f=>f[h||k]).filter(f=>f&&f);if((t==null?void 0:t.split(/\s+/).length)>1)return;const m=()=>{c(d)};if(t)return S.jsx(Zr,{$x:(n==null?void 0:n.x)-20-a,$y:(n==null?void 0:n.y)-98,$selection:t,onClick:m,children:e})};Jt.propTypes={onClick:N.func,children:N.oneOfType([N.string,N.node,N.oneOf(["img","png","svg"])])};const{background:ei,backgroundHoverd:ti}=V.colors,ni=he`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 30px;
`,ri=U.audio`
  ${ni}

  &::-webkit-media-controls {
    display: flex;
    justify-content: center;
    background-color: ${ei};
  }

  &::-webkit-media-controls-panel {
    background-color: ${ti};
  }
`,Xt=({src:e,accessToken:t,expiresIn:n})=>{const a=ae(),o=L.useRef(),[c,r]=L.useState("dump"),s=On({onSuccess:d=>{const{access_token:m,expires_in:y}=d,f={accessToken:m,expiresIn:y*1e3+Date.now()};a(Dn(f)),h(m)},onError:d=>ee.error(d.message),scope:Un}),h=async d=>{try{const m=await Mn.get(e,{responseType:"blob",headers:{Authorization:`Bearer ${d}`}}).then(f=>f.data),y=URL.createObjectURL(m);r(y)}catch(m){ee.error(m.message)}},k=Date.now()<n;return S.jsx(ri,{ref:o,src:e.endsWith(".mp3")?e:c,onError:()=>{!k&&s(),k&&h(t)},onPause:d=>d.target.blur(),onEnded:d=>d.target.blur(),controls:!0})};Xt.propTypes={src:N.string,accessToken:N.string,expiresIn:N.number};const Qt=({el:e,setLiColor:t,editCount:n,selectMode:a})=>{var g,A;const o=ae(),{user:c}=de(),{activeCluster:r}=te(),{activeElement:s}=oe(),h=e.element,k=In(e.caption),[d,m]=L.useState(()=>{var v;return!((v=k.file)!=null&&v.endsWith(".mp3"))}),y="$*@",f=L.useCallback((v,i)=>{let $="";return i?([".","!","?",'"'].includes(v.trim().at(-1))?($=v.trim().replaceAll(", `",`;${i} `).replaceAll(" `",`${i} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${i}`).replaceAll(".",`.${i}`).replaceAll(",",`,${i}`).replaceAll("!",`!${i}`).replaceAll("?",`?${i}`).replaceAll(":",`:${i}`),r.lang.includes("de")&&($=$.replaceAll(`0.${i}`,"0.").replaceAll(`1.${i}`,"1.").replaceAll(`2.${i}`,"2.").replaceAll(`3.${i}`,"3.").replaceAll(`4.${i}`,"4.").replaceAll(`5.${i}`,"5.").replaceAll(`6.${i}`,"6.").replaceAll(`7.${i}`,"7.").replaceAll(`8.${i}`,"8.").replaceAll(`9.${i}`,"9."))):$=v.trim()+i,$.includes("[")?$.substring(0,$.indexOf("["))+i:$):v},[r.lang]),T=L.useCallback(v=>{if(v==null||v.currentTarget.blur(),a||h.startsWith("["))return;const i=Pe({setLiColor:t,divider:y,voices:window.speechSynthesis.getVoices(),text:f(h,y),lang:r.lang,rate:r.rate});i&&ee.error(i)},[r.lang,r.rate,h,f,a,t]),x=L.useCallback(v=>{if(v==null||v.currentTarget.blur(),a)return;const i=Pe({setLiColor:t,divider:y,voices:window.speechSynthesis.getVoices(),text:f(k.text,y),lang:e.lang,rate:c.rate});i&&ee.error(i)},[k.text,e.lang,f,a,t,c.rate]);L.useEffect(()=>{if(n>0||e._id!==(s==null?void 0:s._id))return;const v=i=>{i.key==="ArrowLeft"&&!i.metaKey&&!i.altKey&&!i.shiftKey&&(i.preventDefault(),T()),i.key==="ArrowRight"&&!i.metaKey&&!i.altKey&&!i.shiftKey&&(i.preventDefault(),x())};return addEventListener("keydown",v),()=>{removeEventListener("keydown",v)}},[s==null?void 0:s._id,n,e._id,x,T]);const l=()=>{if(a)return;if(h.startsWith("[")){m(!d);return}const{_id:v,activeEl:i}=r;o(Oe(e)),i!==e._id&&o(_e({_id:v,activeEl:e._id})).unwrap().then($=>o(je($.result.cluster)))},b=v=>{v.stopPropagation();const{_id:i,sortBy:$}=r;o(_e({_id:i,sortBy:!$})).unwrap().then(E=>o(je(E.result.cluster)))};return S.jsxs(Fr,{onClick:l,children:[S.jsx(Et,{onClick:T,$mode:`${a}`,children:h}),S.jsx(Ur,{onClick:b}),k.text&&S.jsx(Et,{onClick:x,$mode:`${a}`,children:k.text}),d&&!k.text&&S.jsx(Hr,{src:k.link}),!d&&!k.text&&S.jsx(Xt,{src:k.file,accessToken:(g=c.googleToken)==null?void 0:g.accessToken,expiresIn:(A=c.googleToken)==null?void 0:A.expiresIn})]})};Qt.propTypes={el:N.object,setLiColor:N.func,editCount:N.number,selectMode:N.bool};const Zt=({el:e,liColor:t,setLiColor:n,editCount:a,setEditCount:o,selectMode:c})=>{const r=ae(),s=L.useRef(null),{activeCluster:h}=te(),{elementTrash:k,activeElement:d,allElements:m}=oe(),[y,f]=L.useState(!1),{_id:T,favorite:x,checked:l}=e,b=k.find(D=>D._id===T),g=T===(d==null?void 0:d._id),A=D=>{f(!D),o(D?a-1:a+1)},v=document.querySelector("#modal");L.useEffect(()=>{if(!g)return;const{sortBy:D}=h,F=d.element.startsWith("["),W=I=>{if(I.key==="F2"&&!F&&v.children.length===0&&(I.preventDefault(),f(!y),o(y?a-1:a+1)),!(a>0)){if(I.key==="ArrowDown"&&!I.metaKey&&!I.altKey&&!I.shiftKey){I.preventDefault();const R=m.findIndex(({_id:j})=>j===(d==null?void 0:d._id));r(Oe(m[D?R-1:R+1])),qe(s.current.nextElementSibling)}if(I.key==="ArrowUp"&&!I.metaKey&&!I.altKey&&!I.shiftKey){I.preventDefault();const R=m.findIndex(({_id:j})=>j===(d==null?void 0:d._id));r(Oe(m[D?R+1:R-1])),qe(s.current.previousElementSibling)}I.altKey&&I.key==="ArrowDown"&&!I.metaKey&&!I.shiftKey&&(I.preventDefault(),Ze()),I.altKey&&I.key==="ArrowUp"&&!I.metaKey&&!I.shiftKey&&(I.preventDefault(),Qe())}};return addEventListener("keydown",W),()=>{removeEventListener("keydown",W)}},[h,d==null?void 0:d._id,d==null?void 0:d.element,m,r,a,g,y,v.children.length,o]);const i=()=>{r(Ve({_id:T,favorite:!x}))},$=()=>{r(Ve({_id:T,checked:!l}))},E=()=>r(Wn(e));return S.jsxs(Ir,{id:g?"active-element":null,$licolor:t,ref:s,children:[S.jsxs(Ye,{$h:"100%",$p:"0",$fd:"column",children:[S.jsxs(zr,{$hovered:x,children:[S.jsx("input",{type:"checkbox",name:"favorite",checked:x,onChange:i}),S.jsx(Kn,{size:"20px"})]}),S.jsxs(Nr,{$hovered:l,children:[S.jsx("input",{type:"checkbox",name:"checked",checked:l,onChange:$}),S.jsx(zn,{size:"15px"})]})]}),y&&S.jsx(nt,{el:e,handleEdit:A}),!y&&S.jsx(Qt,{el:e,setLiColor:n,editCount:a,selectMode:c}),S.jsxs(Ye,{$h:"100%",$p:"0",$fd:"column",children:[S.jsx(Br,{$hovered:b,onClick:E,children:S.jsx(Nn,{size:"16px"})}),S.jsx(Wr,{onClick:()=>A(y),children:S.jsx(Bn,{size:"15px"})})]})]})};Zt.propTypes={el:N.object,liColor:N.string,setLiColor:N.func,editCount:N.number,setEditCount:N.func,selectMode:N.bool};const ii=U.ul`
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
`,{white:si}=V.colors,oi=()=>{const e=ae(),{activeCluster:t}=te(),{allElements:n,activeElement:a,elementTrash:o,elementFilter:c,isLoading:r}=oe(),[s,h]=L.useState(si),[k,d]=L.useState(0),[m,y]=L.useState(!1),{ref:f,inView:T,entry:x}=cr({initialInView:!0,rootMargin:`0px 0px ${window.innerHeight/2}px 0px`});L.useEffect(()=>{if(!t)return;const i=()=>{const $=document.getElementById("active-element");$&&qe($)};(a==null?void 0:a._id)===t.activeEl?i():e(Dt({cluster:t._id})).unwrap().then(({result:$})=>{if(!t.activeEl)return;const E=$.elements.find(({_id:D})=>D===t.activeEl);e(Oe(E))}).then(()=>i())},[]),L.useEffect(()=>{const i=E=>{E.altKey&&y(!0)},$=E=>{E.altKey||y(!1)};return addEventListener("keyup",$),addEventListener("keydown",i),()=>{removeEventListener("keydown",i),removeEventListener("keyup",$)}},[m,y]);let{elementSelect:l}=oe();l=l||[];const b=n.filter(i=>i.cluster===(t==null?void 0:t._id)).sort((i,$)=>i.createdAt.localeCompare($.createdAt)),A=(()=>{const i=o.map($=>$._id);return l.includes("trash")?b.filter($=>i.includes($._id)):b})().filter(({element:i,caption:$,favorite:E,checked:D})=>{const F=i.toLowerCase().replace("·","").includes(c)||i.toLowerCase().includes(c)||$.toLowerCase().includes(c),W=l.includes("wordlist")?F&&Yn(i):F,I=()=>l.some(j=>["favorite","unfavorite"].includes(j))?l.includes("favorite")?W&&E===!0:W&&E===!1:W;return(()=>l.some(j=>["checked","unchecked"].includes(j))?l.includes("checked")?I()&&D===!0:I()&&D===!1:I())()}).sort(t!=null&&t.sortBy?(i,$)=>$.createdAt.localeCompare(i.createdAt):(i,$)=>i.createdAt.localeCompare($.createdAt)),v=window.innerHeight<(x==null?void 0:x.target.getBoundingClientRect().y)+(x==null?void 0:x.target.getBoundingClientRect().height)*1.5;return S.jsxs(S.Fragment,{children:[S.jsxs(ii,{id:"element-list",children:[A.map(i=>S.jsx(Zt,{el:i,liColor:s,setLiColor:h,editCount:k,setEditCount:d,selectMode:m},i._id)),!r&&S.jsxs("div",{ref:f,children:[S.jsx(zt,{}),S.jsx(Nt,{className:T&&v?"bar-up":"bar-down"}),S.jsx(Ht,{className:T&&v?"bar-up":"bar-down",filtredElements:A,setLiColor:h})]})]}),S.jsxs(Jt,{children:[S.jsx("span",{children:"Translate"})," ",S.jsx(Pt,{size:18})]}),r&&S.jsx(Fn,{})]})},{s:_t,m:ai}=V.indents,fi=()=>S.jsx(Ye,{$p:`0 ${ai} ${_t} ${_t}`,children:S.jsx(oi,{})});export{fi as default};
