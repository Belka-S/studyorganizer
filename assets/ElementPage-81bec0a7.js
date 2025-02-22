import{a2 as We,r as L,h as ee,t as V,P as N,u as ae,i as de,v as te,j as S,a1 as Je,a3 as ke,x as _e,K as je,a4 as bt,a5 as jt,a6 as Qe,a7 as Ze,B as pe,a0 as wn,A as oe,Y as Sn,a8 as $n,a9 as Tn,aa as Pt,ab as kn,q as U,ac as Rn,ad as Ot,p as he,ae as Ve,af as Dt,ag as xn,ah as An,ai as En,aj as Cn,ak as Ln,al as _n,M as jn,am as Pe,an as Pn,ao as On,ap as Dn,aq as In,ar as Mn,as as Oe,k as He,H as zn,D as Nn,C as Bn,U as Ye,at as Wn,au as Fn,av as Kn}from"./index-877ed783.js";import{r as It,T as Un}from"./index-1065603f.js";import{w as Mt,S as Gn}from"./googleScopes-9f764a64.js";import{v as Vn,u as Hn}from"./index.esm-40dbc087.js";const qe=(e,t)=>{if(!t.includes("de"))return e;const n=e.trim().split(`
`);return n.length===1?e:["der","die","das"].includes(n[0].split(" ")[0])?`${n[0].trim()}, ${n[1].split("·")[1].replaceAll("⁰","").replaceAll("/"," / ").trim()}`:(e.includes("hat")||e.includes("ist"))&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e.includes("am")&&!n[0].trim().includes(" ")?`${n[0].trim()}, ${n[1].split("·")[1].trim()}, `+n[1].split("·")[2]:e},wt=(e,t)=>{let n=e;for(const r in t)n=n.replaceAll(r,t[r]);const a=r=>r.replace(/^./,s=>s.toUpperCase()),o=[...n.split(/\s+/)];for(let r=0;r<o.length;r+=1)[".","!","?"].includes(o[r].at(-1))&&o[r+1]&&o.splice(r+1,1,a(o[r+1]));return o.join(" ")},{VITE_DEEPL_API_KEY:Yn}={VITE_GOOGLE_CLIENT_ID:"502819804892-294ksvklsg60pjugga88j8l13a6dgmf2.apps.googleusercontent.com",VITE_DEEPL_API_KEY:"d15bf272-fb1f-4f29-bbc3-d3bbdd686c53:fx",VITE_GOOGLE_API_KEY:"AIzaSyABIqXgO4nO0LhnoircvA4SL0uwOY_PxJ4",VITE_PROD_BACK_URL:"https://studyorganizer.onrender.com",BASE_URL:"/studyorganizer/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},qn={google:"",deepl:Yn},De=async(e,{from:t,to:n},a)=>{var c,r;if(!e||e.length===0)return"";const o=e.replaceAll(" ·",",").replaceAll("·","");We.engine=a,We.key=qn[a];try{let s=await We(`${o}`,{from:t,to:n});if(n.includes("en")&&o.toLowerCase().includes("uhr")&&(s=s.replaceAll("a.m. on","am on").replaceAll("p.m. on","pm on").replaceAll("a.m. to","am to").replaceAll("p.m. to","pm to").replaceAll("a.m.","am.").replaceAll("p.m.","pm.")),[".","!","?"].includes(o.at(-1)))return s;const k=o.split(o.includes(", ")?", ":/\s+/),d=s.split(", "),g=n.includes("de")?d[0]:d[0].at(0).toLowerCase()+d[0].substring(1);return k.length===1?s.toLocaleLowerCase()+", ":["der","die","das"].includes(k[0].split(" ")[0])?s.replace("The ","").replace("the ","").split(", ")[0].toLocaleLowerCase()+", ":n.includes("en")&&((c=k[2])!=null&&c.startsWith("am"))?d[2].startsWith("the")?s:`${g}, ${d[1]}, the ${d[2]}`:(k[0].endsWith("n")&&["hat","ist"].includes((r=k[2])==null?void 0:r.split(" ")[0])&&t.includes("de")&&(s=n.includes("en")?"to "+g+", ":g+", "),s)}catch(s){return s.message}},Ie=(e,t)=>e.endsWith(t)?e.substring(0,e.length-1):e,Xn=(e,t)=>{let n=84;e[0]&&(n=Number(e[0].style.height.replace("px",""))),L.useEffect(()=>{if(!e[0])return;let a=Math.max(...e.map(o=>o.scrollHeight));n!==a&&(a=a<=90?a:a+6,e.forEach(o=>{o.style.height=a+"px"}))},[n,e,t])},Jn=()=>{const[e,t]=L.useState("ready"),[n,a]=L.useState(""),[o,c]=L.useState({}),[r,s]=L.useState(0),[h,k]=L.useState(""),d=()=>{a(void 0),t("selecting")},g=y=>{const f=document.getSelection();if(!f)return;const $=f.toString();if(!$){a(void 0),t("ready");return}let x=null;["TEXTAREA","INPUT"].includes(y.target.nodeName)?x=y.target.getBoundingClientRect():x=f.getRangeAt(0).getBoundingClientRect(),c({x:x.left+x.width/2,y:x.top+window.scrollY,width:x.width,height:x.height}),a($),t("selected");const u=y.target.value||y.target.textContent;u.toLowerCase()!=="translate"&&k(u);const b=y.target.closest("ul").getBoundingClientRect().width,m=window.innerWidth-b;b&&s(m)};return L.useEffect(()=>(document.addEventListener("selectstart",d),document.addEventListener("mouseup",g),()=>{document.removeEventListener("selectstart",d),document.removeEventListener("mouseup",g)}),[]),{selection:n,position:o,offset:r,state:e,nodeText:h}},Qn=e=>{let t=L.useRef([]);const n=c=>{c.forEach(r=>{const s=window.open(r,"_blank");s?t.current.push(s):ee.error(`Failed to open tab: ${r}`)})},a=()=>{t.current.forEach(c=>{c.close()}),t.current=[]},o=L.useCallback(async c=>{let r=[];c.forEach(s=>r.push(s)),a(),n(r)},[]);return L.useEffect(()=>{const c=async r=>{r.metaKey&&r.key==="l"&&!r.altKey&&!r.shiftKey&&(r.preventDefault(),await o(e))};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[o,e]),{openUrls:o}},Re=[{value:"de",label:"German"},{value:"en",label:"English"},{value:"uk",label:"Ukrainian"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],xe=[{value:.3,label:"Rate: 0.3"},{value:.4,label:"Rate: 0.4"},{value:.5,label:"Rate: 0.5"},{value:.6,label:"Rate: 0.6"},{value:.8,label:"Rate: 0.8"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"}],Zn={"..":".",". .":".","?.":"?","? .":"?","!.":"!","! .":"!",",,":",",", ,":","},er={" Dot":"."," dot":"."," exclamation mark":"!"," question mark":"?"," comma":","," colon":":"," semi-colon":";","Yes ":"Yes, ","No ":"No, ","Wow ":"Wow, ","Look ":"Look, "," but":", but"," please?":", please?"},tr={" Punkt":"."," Ausrufezeichen":"!"," Fragezeichen":"?"," Komma":","," Doppelpunkt":":"," Semikolon":";","Ja ":"Ja, ","Nein ":"Nein, "," weil":", weil"," aber":", aber"," als":", als"," ob":", ob"," damit":", damit"," bevor":", bevor"," obwohl":", obwohl"," dass":", dass"," dann":", dann"," deshalb":", deshalb"," desvegen":", desvegen"," trotzdem":", trotzdem"},St={...er,...tr,...Zn},nr=e=>[{de:`https://www.verbformen.com/conjugation/?w=${e}`},{en:`https://dictionary.cambridge.org/dictionary/english-russian/${e}`}];var Xe=new Map,Ae=new WeakMap,$t=0,rr=void 0;function ir(e){return e?(Ae.has(e)||($t+=1,Ae.set(e,$t.toString())),Ae.get(e)):"0"}function sr(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?ir(e.root):e[t]}`).toString()}function or(e){const t=sr(e);let n=Xe.get(t);if(!n){const a=new Map;let o;const c=new IntersectionObserver(r=>{r.forEach(s=>{var h;const k=s.isIntersecting&&o.some(d=>s.intersectionRatio>=d);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=k),(h=a.get(s.target))==null||h.forEach(d=>{d(k,s)})})},e);o=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:c,elements:a},Xe.set(t,n)}return n}function ar(e,t,n={},a=rr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const h=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:h,intersectionRect:h,rootBounds:h}),()=>{}}const{id:o,observer:c,elements:r}=or(n),s=r.get(e)||[];return r.has(e)||r.set(e,s),s.push(t),c.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(r.delete(e),c.unobserve(e)),r.size===0&&(c.disconnect(),Xe.delete(o))}}function cr({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:c,skip:r,initialInView:s,fallbackInView:h,onChange:k}={}){var d;const[g,y]=L.useState(null),f=L.useRef(k),[$,x]=L.useState({inView:!!s,entry:void 0});f.current=k,L.useEffect(()=>{if(r||!g)return;let A;return A=ar(g,(v,i)=>{x({inView:v,entry:i}),f.current&&f.current(v,i),i.isIntersecting&&c&&A&&(A(),A=void 0)},{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},h),()=>{A&&A()}},[Array.isArray(e)?e.toString():e,g,o,a,c,r,n,h,t]);const u=(d=$.entry)==null?void 0:d.target,b=L.useRef(void 0);!g&&u&&!c&&!r&&b.current!==u&&(b.current=u,x({inView:!!s,entry:void 0}));const m=[y,$.inView,$.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const{backgroundHoverd:Ee,white:Ce,borderLight:Le}=V.colors,zt=()=>{const e=ae(),{user:t}=de(),{activeCluster:n}=te(),a=({value:s})=>{e(_e({_id:n._id,lang:s})).unwrap().then(h=>e(je(h.result.cluster)))},o=({value:s})=>{e(_e({_id:n._id,rate:s})).unwrap().then(h=>e(je(h.result.cluster)))},c=({value:s})=>{const h=new FormData;h.append("lang",s),e(bt(h))},r=({value:s})=>{const h=new FormData;h.append("rate",s),e(bt(h))};return S.jsxs(Je,{$m:"0",$cg:"8px",$ai:"center",$gtc:"2fr 2fr 2fr 2fr",children:[S.jsx(ke,{options:Re,defaultValue:Re.find(s=>s.value===(n==null?void 0:n.lang)),onChange:a,placeholder:"Language...",$ol:Ee,$b:Ce,$bh:Le}),S.jsx(ke,{options:xe,defaultValue:xe.find(s=>s.value==(n==null?void 0:n.rate)),onChange:o,placeholder:"Rate...",$ol:Ee,$b:Ce,$bh:Le}),S.jsx(ke,{options:Re,defaultValue:Re.find(s=>s.value===t.lang),onChange:c,placeholder:"Language...",$ol:Ee,$b:Ce,$bh:Le}),S.jsx(ke,{options:xe,defaultValue:xe.find(s=>s.value==t.rate),onChange:r,placeholder:"Rate...",$ol:Ee,$b:Ce,$bh:Le})]})};zt.propTypes={filtredElements:N.array,setLiColor:N.func};const{button:lr}=V.shadows,ur=()=>{const e=ae(),{user:t}=de(),{activeCluster:n}=te(),a=L.useCallback(async o=>{o==null||o.currentTarget.blur();const c=window.getSelection().toString();c&&await Mt(c);const r=await It();let s=qe(r,n.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();s=Ie(s,",");const h={from:n.lang,to:t.lang};let k=await De(s,h,t.engine);k=Ie(k.trim(),",");const{_id:d}=n;try{const g={clusterId:d,element:"[]",caption:s},y={clusterId:d,element:s,caption:k,favorite:!0,checked:s.split(/\s+/).length<20},f=s.includes("https://")?g:y;e(jt(f)).unwrap().then(()=>n.sortBy?Qe():Ze())}catch(g){ee.error(`Invalid element, ${g.message}`)}},[n,e,t.engine,t.lang]);return L.useEffect(()=>{const o=async c=>{c.key==="e"&&c.metaKey&&!c.altKey&&!c.shiftKey&&(c.preventDefault(),await a())};return addEventListener("keydown",o),()=>{removeEventListener("keydown",o)}},[a]),S.jsx(pe,{onClick:a,$s:"m",$round:!0,$bs:lr,children:S.jsx(wn,{size:18})})},{button:pr}=V.shadows,fr=()=>{const e=ae(),{elementTrash:t}=oe(),n=()=>{ee.error("Are you sure you want to delete the selected Element(s)?",{duration:1/0,position:"bottom-center",closeButton:!0,action:{label:"Yes",onClick:()=>{e($n(t.map(a=>a._id).join("&"))).unwrap().then(()=>e(Tn()))}}})};return S.jsx(S.Fragment,{children:S.jsx(pe,{onClick:n,$s:"m",$round:!0,$bs:pr,children:S.jsx(Sn,{size:16})})})},{button:dr}=V.shadows,hr=()=>{const{activeCluster:e}=te();let t=L.useRef([]);const n=c=>{c.forEach(r=>{const s=window.open(r,"_blank");s?t.current.push(s):ee.error(`Failed to open tab: ${r}`)})},a=()=>{t.current.forEach(c=>{c.close()}),t.current=[]},o=L.useCallback(async()=>{const c=window.getSelection().toString();c&&await Mt(c);const r=await It();let s=[];e.lang.includes("de")&&s.push(`https://www.verbformen.com/conjugation/?w=${r}`),e.lang.includes("en")&&s.push(`https://dictionary.cambridge.org/dictionary/english-russian/${r}`),a(),n(s)},[e==null?void 0:e.lang]);return L.useEffect(()=>{const c=async r=>{r.metaKey&&r.key==="d"&&!r.altKey&&!r.shiftKey&&(r.preventDefault(),await o())};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[o]),S.jsx(pe,{onClick:o,$s:"m",$round:!0,$bs:dr,children:S.jsx(Pt,{size:18})})},{s:Tt,m:gr}=V.indents,Nt=({className:e})=>{const{pathname:t}=kn(),{elementTrash:n}=oe(),{activeCluster:a}=te(),o=n.length>0?" 1fr":"",c=a?" 1fr":"",r=o+c+" 1fr";if(t.includes("/element"))return S.jsxs(Je,{className:e,$m:`${Tt} ${gr}`,$pos:"fixed",$side:"left",$high:"bottom",$gtc:r,$cg:Tt,children:[S.jsx(hr,{}),c&&S.jsx(ur,{}),o&&S.jsx(fr,{})]})};Nt.propTypes={className:N.string};const{colors:Fe}=V,mr=U.div`
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
`,Bt=({onClick:e})=>S.jsx(mr,{onClick:e,children:S.jsx(Rn,{size:"35px"})});Bt.propTypes={onClick:N.func};var vr={exports:{}};(function(e){var t=function(n){var a=Object.prototype,o=a.hasOwnProperty,c=Object.defineProperty||function(p,l,w){p[l]=w.value},r,s=typeof Symbol=="function"?Symbol:{},h=s.iterator||"@@iterator",k=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function g(p,l,w){return Object.defineProperty(p,l,{value:w,enumerable:!0,configurable:!0,writable:!0}),p[l]}try{g({},"")}catch{g=function(l,w,P){return l[w]=P}}function y(p,l,w,P){var _=l&&l.prototype instanceof A?l:A,z=Object.create(_.prototype),Y=new B(P||[]);return c(z,"_invoke",{value:R(p,w,Y)}),z}n.wrap=y;function f(p,l,w){try{return{type:"normal",arg:p.call(l,w)}}catch(P){return{type:"throw",arg:P}}}var $="suspendedStart",x="suspendedYield",u="executing",b="completed",m={};function A(){}function v(){}function i(){}var T={};g(T,h,function(){return this});var E=Object.getPrototypeOf,D=E&&E(E(I([])));D&&D!==a&&o.call(D,h)&&(T=D);var F=i.prototype=A.prototype=Object.create(T);v.prototype=i,c(F,"constructor",{value:i,configurable:!0}),c(i,"constructor",{value:v,configurable:!0}),v.displayName=g(i,d,"GeneratorFunction");function W(p){["next","throw","return"].forEach(function(l){g(p,l,function(w){return this._invoke(l,w)})})}n.isGeneratorFunction=function(p){var l=typeof p=="function"&&p.constructor;return l?l===v||(l.displayName||l.name)==="GeneratorFunction":!1},n.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,i):(p.__proto__=i,g(p,d,"GeneratorFunction")),p.prototype=Object.create(F),p},n.awrap=function(p){return{__await:p}};function M(p,l){function w(z,Y,q,J){var H=f(p[z],p,Y);if(H.type==="throw")J(H.arg);else{var ge=H.arg,ce=ge.value;return ce&&typeof ce=="object"&&o.call(ce,"__await")?l.resolve(ce.__await).then(function(ie){w("next",ie,q,J)},function(ie){w("throw",ie,q,J)}):l.resolve(ce).then(function(ie){ge.value=ie,q(ge)},function(ie){return w("throw",ie,q,J)})}}var P;function _(z,Y){function q(){return new l(function(J,H){w(z,Y,J,H)})}return P=P?P.then(q,q):q()}c(this,"_invoke",{value:_})}W(M.prototype),g(M.prototype,k,function(){return this}),n.AsyncIterator=M,n.async=function(p,l,w,P,_){_===void 0&&(_=Promise);var z=new M(y(p,l,w,P),_);return n.isGeneratorFunction(l)?z:z.next().then(function(Y){return Y.done?Y.value:z.next()})};function R(p,l,w){var P=$;return function(z,Y){if(P===u)throw new Error("Generator is already running");if(P===b){if(z==="throw")throw Y;return K()}for(w.method=z,w.arg=Y;;){var q=w.delegate;if(q){var J=j(q,w);if(J){if(J===m)continue;return J}}if(w.method==="next")w.sent=w._sent=w.arg;else if(w.method==="throw"){if(P===$)throw P=b,w.arg;w.dispatchException(w.arg)}else w.method==="return"&&w.abrupt("return",w.arg);P=u;var H=f(p,l,w);if(H.type==="normal"){if(P=w.done?b:x,H.arg===m)continue;return{value:H.arg,done:w.done}}else H.type==="throw"&&(P=b,w.method="throw",w.arg=H.arg)}}}function j(p,l){var w=l.method,P=p.iterator[w];if(P===r)return l.delegate=null,w==="throw"&&p.iterator.return&&(l.method="return",l.arg=r,j(p,l),l.method==="throw")||w!=="return"&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+w+"' method")),m;var _=f(P,p.iterator,l.arg);if(_.type==="throw")return l.method="throw",l.arg=_.arg,l.delegate=null,m;var z=_.arg;if(!z)return l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,m;if(z.done)l[p.resultName]=z.value,l.next=p.nextLoc,l.method!=="return"&&(l.method="next",l.arg=r);else return z;return l.delegate=null,m}W(F),g(F,d,"Generator"),g(F,h,function(){return this}),g(F,"toString",function(){return"[object Generator]"});function C(p){var l={tryLoc:p[0]};1 in p&&(l.catchLoc=p[1]),2 in p&&(l.finallyLoc=p[2],l.afterLoc=p[3]),this.tryEntries.push(l)}function O(p){var l=p.completion||{};l.type="normal",delete l.arg,p.completion=l}function B(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(C,this),this.reset(!0)}n.keys=function(p){var l=Object(p),w=[];for(var P in l)w.push(P);return w.reverse(),function _(){for(;w.length;){var z=w.pop();if(z in l)return _.value=z,_.done=!1,_}return _.done=!0,_}};function I(p){if(p!=null){var l=p[h];if(l)return l.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length)){var w=-1,P=function _(){for(;++w<p.length;)if(o.call(p,w))return _.value=p[w],_.done=!1,_;return _.value=r,_.done=!0,_};return P.next=P}}throw new TypeError(typeof p+" is not iterable")}n.values=I;function K(){return{value:r,done:!0}}return B.prototype={constructor:B,reset:function(p){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!p)for(var l in this)l.charAt(0)==="t"&&o.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=r)},stop:function(){this.done=!0;var p=this.tryEntries[0],l=p.completion;if(l.type==="throw")throw l.arg;return this.rval},dispatchException:function(p){if(this.done)throw p;var l=this;function w(J,H){return z.type="throw",z.arg=p,l.next=J,H&&(l.method="next",l.arg=r),!!H}for(var P=this.tryEntries.length-1;P>=0;--P){var _=this.tryEntries[P],z=_.completion;if(_.tryLoc==="root")return w("end");if(_.tryLoc<=this.prev){var Y=o.call(_,"catchLoc"),q=o.call(_,"finallyLoc");if(Y&&q){if(this.prev<_.catchLoc)return w(_.catchLoc,!0);if(this.prev<_.finallyLoc)return w(_.finallyLoc)}else if(Y){if(this.prev<_.catchLoc)return w(_.catchLoc,!0)}else if(q){if(this.prev<_.finallyLoc)return w(_.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(p,l){for(var w=this.tryEntries.length-1;w>=0;--w){var P=this.tryEntries[w];if(P.tryLoc<=this.prev&&o.call(P,"finallyLoc")&&this.prev<P.finallyLoc){var _=P;break}}_&&(p==="break"||p==="continue")&&_.tryLoc<=l&&l<=_.finallyLoc&&(_=null);var z=_?_.completion:{};return z.type=p,z.arg=l,_?(this.method="next",this.next=_.finallyLoc,m):this.complete(z)},complete:function(p,l){if(p.type==="throw")throw p.arg;return p.type==="break"||p.type==="continue"?this.next=p.arg:p.type==="return"?(this.rval=this.arg=p.arg,this.method="return",this.next="end"):p.type==="normal"&&l&&(this.next=l),m},finish:function(p){for(var l=this.tryEntries.length-1;l>=0;--l){var w=this.tryEntries[l];if(w.finallyLoc===p)return this.complete(w.completion,w.afterLoc),O(w),m}},catch:function(p){for(var l=this.tryEntries.length-1;l>=0;--l){var w=this.tryEntries[l];if(w.tryLoc===p){var P=w.completion;if(P.type==="throw"){var _=P.arg;O(w)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(p,l,w){return this.delegate={iterator:I(p),resultName:l,nextLoc:w},this.method==="next"&&(this.arg=r),m}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(vr);var be={},Wt={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.browserSupportsPolyfills=Q.compareTwoStringsUsingDiceCoefficient=Q.commandToRegExp=Q.concatTranscripts=Q.debounce=void 0;var yr=function(t,n,a){var o;return function(){var c=this,r=arguments,s=function(){o=null,a||t.apply(c,r)},h=a&&!o;clearTimeout(o),o=setTimeout(s,n),h&&t.apply(c,r)}};Q.debounce=yr;var br=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.map(function(o){return o.trim()}).join(" ").trim()};Q.concatTranscripts=br;var wr=/\s*\((.*?)\)\s*/g,Sr=/(\(\?:[^)]+\))\?/g,$r=/(\(\?)?:\w+/g,Tr=/\*/g,kr=/[-{}[\]+?.,\\^$|#]/g,Rr=function(t){return t instanceof RegExp?new RegExp(t.source,"i"):(t=t.replace(kr,"\\$&").replace(wr,"(?:$1)?").replace($r,function(n,a){return a?n:"([^\\s]+)"}).replace(Tr,"(.*?)").replace(Sr,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i"))};Q.commandToRegExp=Rr;var xr=function(t,n){if(t=t.replace(/\s+/g,"").toLowerCase(),n=n.replace(/\s+/g,"").toLowerCase(),!t.length&&!n.length)return 1;if(!t.length||!n.length)return 0;if(t===n)return 1;if(t.length===1&&n.length===1||t.length<2||n.length<2)return 0;for(var a=new Map,o=0;o<t.length-1;o++){var c=t.substring(o,o+2),r=a.has(c)?a.get(c)+1:1;a.set(c,r)}for(var s=0,h=0;h<n.length-1;h++){var k=n.substring(h,h+2),d=a.has(k)?a.get(k):0;d>0&&(a.set(k,d-1),s++)}return 2*s/(t.length+n.length-2)};Q.compareTwoStringsUsingDiceCoefficient=xr;var Ar=function(){return typeof window<"u"&&window.navigator!==void 0&&window.navigator.mediaDevices!==void 0&&window.navigator.mediaDevices.getUserMedia!==void 0&&(window.AudioContext!==void 0||window.webkitAudioContext!==void 0)};Q.browserSupportsPolyfills=Ar;var fe={},ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.APPEND_TRANSCRIPT=ue.CLEAR_TRANSCRIPT=void 0;var Er="CLEAR_TRANSCRIPT";ue.CLEAR_TRANSCRIPT=Er;var Cr="APPEND_TRANSCRIPT";ue.APPEND_TRANSCRIPT=Cr;Object.defineProperty(fe,"__esModule",{value:!0});fe.appendTranscript=fe.clearTranscript=void 0;var Ft=ue,Lr=function(){return{type:Ft.CLEAR_TRANSCRIPT}};fe.clearTranscript=Lr;var _r=function(t,n){return{type:Ft.APPEND_TRANSCRIPT,payload:{interimTranscript:t,finalTranscript:n}}};fe.appendTranscript=_r;var ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.transcriptReducer=void 0;var kt=ue,jr=Q,Pr=function(t,n){switch(n.type){case kt.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case kt.APPEND_TRANSCRIPT:return{interimTranscript:n.payload.interimTranscript,finalTranscript:(0,jr.concatTranscripts)(t.finalTranscript,n.payload.finalTranscript)};default:throw new Error}};ze.transcriptReducer=Pr;var Kt={},et={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return/(android)/i.test(typeof navigator<"u"?navigator.userAgent:"")};e.default=t})(et);var tt={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.isNative=void 0;var t=typeof window<"u"&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),n=function(c){return c===t};e.isNative=n;var a=t;e.default=a})(tt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(et),n=Q,a=tt;function o(g){return g&&g.__esModule?g:{default:g}}function c(g,y,f,$,x,u,b){try{var m=g[u](b),A=m.value}catch(v){f(v);return}m.done?y(A):Promise.resolve(A).then($,x)}function r(g){return function(){var y=this,f=arguments;return new Promise(function($,x){var u=g.apply(y,f);function b(A){c(u,$,x,b,m,"next",A)}function m(A){c(u,$,x,b,m,"throw",A)}b(void 0)})}}function s(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function h(g,y){for(var f=0;f<y.length;f++){var $=y[f];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(g,$.key,$)}}function k(g,y,f){return y&&h(g.prototype,y),f&&h(g,f),g}var d=function(){function g(y){s(this,g),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.isMicrophoneAvailable=!0,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.disableRecognition=this.disableRecognition.bind(this),this.setSpeechRecognition(y),(0,t.default)()&&(this.updateFinalTranscript=(0,n.debounce)(this.updateFinalTranscript,250,!0))}return k(g,[{key:"setSpeechRecognition",value:function(f){var $=!!f&&((0,a.isNative)(f)||(0,n.browserSupportsPolyfills)());$&&(this.disableRecognition(),this.recognition=new f,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this),this.recognition.onerror=this.onError.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange($)}},{key:"subscribe",value:function(f,$){this.subscribers[f]=$}},{key:"unsubscribe",value:function(f){delete this.subscribers[f]}},{key:"emitListeningChange",value:function(f){var $=this;this.listening=f,Object.keys(this.subscribers).forEach(function(x){var u=$.subscribers[x].onListeningChange;u(f)})}},{key:"emitMicrophoneAvailabilityChange",value:function(f){var $=this;this.isMicrophoneAvailable=f,Object.keys(this.subscribers).forEach(function(x){var u=$.subscribers[x].onMicrophoneAvailabilityChange;u(f)})}},{key:"emitTranscriptChange",value:function(f,$){var x=this;Object.keys(this.subscribers).forEach(function(u){var b=x.subscribers[u].onTranscriptChange;b(f,$)})}},{key:"emitClearTranscript",value:function(){var f=this;Object.keys(this.subscribers).forEach(function($){var x=f.subscribers[$].onClearTranscript;x()})}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(f){var $=this;Object.keys(this.subscribers).forEach(function(x){var u=$.subscribers[x],b=u.onBrowserSupportsSpeechRecognitionChange,m=u.onBrowserSupportsContinuousListeningChange;b(f),m(f)})}},{key:"disconnect",value:function(f){if(this.recognition&&this.listening)switch(f){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;case"STOP":default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"disableRecognition",value:function(){this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.recognition.onerror=function(){},this.listening&&this.stopListening())}},{key:"onError",value:function(f){f&&f.error&&f.error==="not-allowed"&&(this.emitMicrophoneAvailabilityChange(!1),this.disableRecognition())}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(f){var $=f.results,x=f.resultIndex,u=x===void 0?$.length-1:x;this.interimTranscript="",this.finalTranscript="";for(var b=u;b<$.length;++b)$[b].isFinal&&(!(0,t.default)()||$[b][0].confidence>0)?this.updateFinalTranscript($[b][0].transcript):this.interimTranscript=(0,n.concatTranscripts)(this.interimTranscript,$[b][0].transcript);var m=!1;this.interimTranscript===""&&this.finalTranscript!==""?(this.previousResultWasFinalOnly&&(m=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,m||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(f){this.finalTranscript=(0,n.concatTranscripts)(this.finalTranscript,f)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:function(){var y=r(regeneratorRuntime.mark(function $(){var x,u,b,m,A,v,i=arguments;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(x=i.length>0&&i[0]!==void 0?i[0]:{},u=x.continuous,b=u===void 0?!1:u,m=x.language,this.recognition){E.next=3;break}return E.abrupt("return");case 3:if(A=b!==this.recognition.continuous,v=m&&m!==this.recognition.lang,!(A||v)){E.next=11;break}if(!this.listening){E.next=9;break}return E.next=9,this.stopListening();case 9:this.recognition.continuous=A?b:this.recognition.continuous,this.recognition.lang=v?m:this.recognition.lang;case 11:if(this.listening){E.next=22;break}return this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript()),E.prev=13,E.next=16,this.start();case 16:this.emitListeningChange(!0),E.next=22;break;case 19:E.prev=19,E.t0=E.catch(13),E.t0 instanceof DOMException||this.emitMicrophoneAvailabilityChange(!1);case 22:case"end":return E.stop()}},$,this,[[13,19]])}));function f(){return y.apply(this,arguments)}return f}()},{key:"abortListening",value:function(){var y=r(regeneratorRuntime.mark(function $(){var x=this;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),b.next=4,new Promise(function(m){x.onStopListening=m});case 4:case"end":return b.stop()}},$,this)}));function f(){return y.apply(this,arguments)}return f}()},{key:"stopListening",value:function(){var y=r(regeneratorRuntime.mark(function $(){var x=this;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),b.next=4,new Promise(function(m){x.onStopListening=m});case 4:case"end":return b.stop()}},$,this)}));function f(){return y.apply(this,arguments)}return f}()},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:function(){var y=r(regeneratorRuntime.mark(function $(){return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(this.recognition&&!this.listening)){u.next=4;break}return u.next=3,this.recognition.start();case 3:this.listening=!0;case 4:case"end":return u.stop()}},$,this)}));function f(){return y.apply(this,arguments)}return f}()},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}]),g}();e.default=d})(Kt);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.useSpeechRecognition=void 0;var t=L,n=Q,a=fe,o=ze,c=h(Kt),r=h(et),s=h(tt);function h(R){return R&&R.__esModule?R:{default:R}}function k(R,j,C,O,B,I,K){try{var p=R[I](K),l=p.value}catch(w){C(w);return}p.done?j(l):Promise.resolve(l).then(O,B)}function d(R){return function(){var j=this,C=arguments;return new Promise(function(O,B){var I=R.apply(j,C);function K(l){k(I,O,B,K,p,"next",l)}function p(l){k(I,O,B,K,p,"throw",l)}K(void 0)})}}function g(R){return $(R)||f(R)||m(R)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(R){if(typeof Symbol<"u"&&Symbol.iterator in Object(R))return Array.from(R)}function $(R){if(Array.isArray(R))return A(R)}function x(R){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(C){return typeof C}:x=function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},x(R)}function u(R,j){return i(R)||v(R,j)||m(R,j)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(R,j){if(R){if(typeof R=="string")return A(R,j);var C=Object.prototype.toString.call(R).slice(8,-1);if(C==="Object"&&R.constructor&&(C=R.constructor.name),C==="Map"||C==="Set")return Array.from(R);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return A(R,j)}}function A(R,j){(j==null||j>R.length)&&(j=R.length);for(var C=0,O=new Array(j);C<j;C++)O[C]=R[C];return O}function v(R,j){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(R)))){var C=[],O=!0,B=!1,I=void 0;try{for(var K=R[Symbol.iterator](),p;!(O=(p=K.next()).done)&&(C.push(p.value),!(j&&C.length===j));O=!0);}catch(l){B=!0,I=l}finally{try{!O&&K.return!=null&&K.return()}finally{if(B)throw I}}return C}}function i(R){if(Array.isArray(R))return R}var T=!!s.default,E=T&&!(0,r.default)(),D,F=function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},C=j.transcribing,O=C===void 0?!0:C,B=j.clearTranscriptOnListen,I=B===void 0?!0:B,K=j.commands,p=K===void 0?[]:K,l=(0,t.useState)(W.getRecognitionManager()),w=u(l,1),P=w[0],_=(0,t.useState)(T),z=u(_,2),Y=z[0],q=z[1],J=(0,t.useState)(E),H=u(J,2),ge=H[0],ce=H[1],ie=(0,t.useReducer)(o.transcriptReducer,{interimTranscript:P.interimTranscript,finalTranscript:""}),rt=u(ie,2),it=rt[0],st=it.interimTranscript,ot=it.finalTranscript,at=rt[1],en=(0,t.useState)(P.listening),ct=u(en,2),tn=ct[0],nn=ct[1],rn=(0,t.useState)(P.isMicrophoneAvailable),lt=u(rn,2),sn=lt[0],on=lt[1],ut=(0,t.useRef)(p);ut.current=p;var pt=function(){at((0,a.clearTranscript)())},me=(0,t.useCallback)(function(){P.resetTranscript(),pt()},[P]),an=function(X,re,le){var se=x(X)==="object"?X.toString():X,ve=se.replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),Se=(0,n.compareTwoStringsUsingDiceCoefficient)(ve,re);return Se>=le?{command:X,commandWithoutSpecials:ve,howSimilar:Se,isFuzzyMatch:!0}:null},cn=function(X,re){var le=(0,n.commandToRegExp)(X),se=le.exec(re);return se?{command:X,parameters:se.slice(1)}:null},ft=(0,t.useCallback)(function(ne,X){ut.current.forEach(function(re){var le=re.command,se=re.callback,ve=re.matchInterim,Se=ve===void 0?!1:ve,gt=re.isFuzzyMatch,mt=gt===void 0?!1:gt,vt=re.fuzzyMatchingThreshold,un=vt===void 0?.8:vt,yt=re.bestMatchOnly,pn=yt===void 0?!1:yt,$e=!X&&Se?ne.trim():X.trim(),fn=Array.isArray(le)?le:[le],Te=fn.map(function(Z){return mt?an(Z,$e,un):cn(Z,$e)}).filter(function(Z){return Z});if(mt&&pn&&Te.length>=2){Te.sort(function(Z,Be){return Be.howSimilar-Z.howSimilar});var Ne=Te[0],dn=Ne.command,hn=Ne.commandWithoutSpecials,gn=Ne.howSimilar;se(hn,$e,gn,{command:dn,resetTranscript:me})}else Te.forEach(function(Z){if(Z.isFuzzyMatch){var Be=Z.command,mn=Z.commandWithoutSpecials,vn=Z.howSimilar;se(mn,$e,vn,{command:Be,resetTranscript:me})}else{var yn=Z.command,bn=Z.parameters;se.apply(void 0,g(bn).concat([{command:yn,resetTranscript:me}]))}})})},[me]),dt=(0,t.useCallback)(function(ne,X){O&&at((0,a.appendTranscript)(ne,X)),ft(ne,X)},[ft,O]),ht=(0,t.useCallback)(function(){I&&pt()},[I]);(0,t.useEffect)(function(){var ne=W.counter;W.counter+=1;var X={onListeningChange:nn,onMicrophoneAvailabilityChange:on,onTranscriptChange:dt,onClearTranscript:ht,onBrowserSupportsSpeechRecognitionChange:q,onBrowserSupportsContinuousListeningChange:ce};return P.subscribe(ne,X),function(){P.unsubscribe(ne)}},[O,I,P,dt,ht]);var ln=(0,n.concatTranscripts)(ot,st);return{transcript:ln,interimTranscript:st,finalTranscript:ot,listening:tn,isMicrophoneAvailable:sn,resetTranscript:me,browserSupportsSpeechRecognition:Y,browserSupportsContinuousListening:ge}};e.useSpeechRecognition=F;var W={counter:0,applyPolyfill:function(j){D?D.setSpeechRecognition(j):D=new c.default(j);var C=!!j&&(0,n.browserSupportsPolyfills)();T=C,E=C},removePolyfill:function(){D?D.setSpeechRecognition(s.default):D=new c.default(s.default),T=!!s.default,E=T&&!(0,r.default)()},getRecognitionManager:function(){return D||(D=new c.default(s.default)),D},getRecognition:function(){var j=W.getRecognitionManager();return j.getRecognition()},startListening:function(){var R=d(regeneratorRuntime.mark(function C(){var O,B,I,K,p=arguments;return regeneratorRuntime.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return O=p.length>0&&p[0]!==void 0?p[0]:{},B=O.continuous,I=O.language,K=W.getRecognitionManager(),w.next=4,K.startListening({continuous:B,language:I});case 4:case"end":return w.stop()}},C)}));function j(){return R.apply(this,arguments)}return j}(),stopListening:function(){var R=d(regeneratorRuntime.mark(function C(){var O;return regeneratorRuntime.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return O=W.getRecognitionManager(),I.next=3,O.stopListening();case 3:case"end":return I.stop()}},C)}));function j(){return R.apply(this,arguments)}return j}(),abortListening:function(){var R=d(regeneratorRuntime.mark(function C(){var O;return regeneratorRuntime.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return O=W.getRecognitionManager(),I.next=3,O.abortListening();case 3:case"end":return I.stop()}},C)}));function j(){return R.apply(this,arguments)}return j}(),browserSupportsSpeechRecognition:function(){return T},browserSupportsContinuousListening:function(){return E}},M=W;e.default=M})(Wt);(function(e){function t(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(h){return typeof h}:t=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},t(r)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useSpeechRecognition",{enumerable:!0,get:function(){return n.useSpeechRecognition}}),e.default=void 0;var n=o(Wt);function a(){if(typeof WeakMap!="function")return null;var r=new WeakMap;return a=function(){return r},r}function o(r){if(r&&r.__esModule)return r;if(r===null||t(r)!=="object"&&typeof r!="function")return{default:r};var s=a();if(s&&s.has(r))return s.get(r);var h={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(Object.prototype.hasOwnProperty.call(r,d)){var g=k?Object.getOwnPropertyDescriptor(r,d):null;g&&(g.get||g.set)?Object.defineProperty(h,d,g):h[d]=r[d]}return h.default=r,s&&s.set(r,h),h}var c=n.default;e.default=c})(be);const ye=Ot(be);var Ut={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a=[],o=0;o<arguments.length;o++){var c=arguments[o];if(c){var r=typeof c;if(r==="string"||r==="number")a.push(c);else if(Array.isArray(c)){if(c.length){var s=n.apply(null,c);s&&a.push(s)}}else if(r==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){a.push(c.toString());continue}for(var h in c)t.call(c,h)&&c[h]&&a.push(h)}}}return a.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ut);var Or=Ut.exports;const Dr=Ot(Or),{colors:G,shadows:Rt,indents:Ke}=V,Ir=he`
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
`,Mr=U.li`
  ${Ir}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${G.border};
    background-color: ${G.backgroundAccent};
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
    ${Vn}
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
`,{colors:Me,indents:Vt}=V,Ht=he`
  padding-block: 4px;
  display: grid;
  align-items: top;
  grid-template-columns: 20fr 1fr 20fr;
  color: ${Me.black};
`,Fr=U.div`
  ${Ht}
`,Kr=U.form`
  ${Ht}

  max-height: 70vh;
  overflow-y: scroll;
  scrollbar-width: none;
  grid-template-columns: 12fr 1fr 12fr;
`,xt=U.textarea`
  height: 84px;
  outline: none;
  border: 1px solid ${Me.backgroundHoverd};
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
    border: 1px solid ${Me.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${Me.placeholder};
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
`,Hr=U.button`
  ${we}
`,Et=U.button`
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
`,qr=U.iframe`
  ${Yr}
`,nt=({el:e,handleEdit:t,setRecording:n,setTranslation:a})=>{const o=L.useRef(null),c=L.useRef(null),r=L.useRef(null),s=ae(),{user:h}=de(),{activeCluster:k}=te(),[d,g]=L.useState(""),{_id:y,element:f,caption:$}=e,{register:x,watch:u,setValue:b,handleSubmit:m,setFocus:A}=Hn({mode:"onBlur",defaultValues:{element:f,caption:$}});L.useEffect(()=>{b("caption",$)},[$,b]);const{ref:v,...i}=x("element"),{ref:T,...E}=x("caption"),D=[o.current,c.current,r.current],F=[u("caption"),u("element")];Xn(D,F),L.useEffect(()=>{A("element"),d&&f.trim().startsWith("der")?b("element",d+f.replace("der","").trim()+", "):d&&f.trim().startsWith("die")?b("element",d+f.replace("die","").trim()+", "):d&&f.trim().startsWith("das")?b("element",d+f.replace("das","").trim()+", "):d?b("element",d+f+", "):b("element",d+f)},[d,f,A,b]);const W=L.useCallback(C=>{const O=h.lang;let B=C.caption.trim(),I=qe(C.element,k.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim();I=Ie(I,","),B=Ie(B,","),h.lang.includes("en")&&k.lang.includes("de")&&![".","!","?",'"'].includes(I.at(-1))&&(I.includes("hat")||I.includes("ist"))&&I.split(`
`)[0].split(/,\s+/)[0].endsWith("n")&&(B=B.split(/,\s+/).map(l=>l.startsWith("to ")?l:`to ${l}`).join(", ")),s(y?Ve({_id:y,lang:O,element:I,caption:B}):jt({...e,element:I,caption:B})).then(s(Dt())),!y&&B&&(k.sortBy?Qe():Ze(),n(""),a("")),t(!0)},[y,k.lang,k.sortBy,s,e,t,n,a,h.lang]),M=()=>{d===""&&g("der "),d==="der "&&g("die "),d==="die "&&g("das "),d==="das "&&g("")},R=L.useCallback(async C=>{const O=u("element"),B=qe(O,k.lang).split(/\s+/).join(" ").replaceAll(`
`," ").trim(),I={from:k.lang,to:h.lang},K=await De(B,I,C);b("caption",K)},[k.lang,b,h.lang,u]),j=document.querySelector("#modal");return L.useEffect(()=>{const C=async O=>{O==null||O.currentTarget.blur(),j.children.length===0&&(O.code==="NumpadAdd"||O.key==="F2")&&(O.preventDefault(),await R(h.engine),m(W)()),(O.key==="Enter"||O.key==="§"||j.children.length>0&&O.key==="F2")&&(O.preventDefault(),m(W)()),O.key==="Escape"&&(O.preventDefault(),t(!0)),O.code==="AltRight"&&o.current.focus()};return addEventListener("keydown",C),()=>{removeEventListener("keydown",C)}},[t,m,j.children.length,W,R,h.engine]),S.jsxs(Kr,{onSubmit:m(W),children:[S.jsx(xt,{...i,name:"element",ref:C=>{v(C),o.current=C}}),S.jsxs(Gr,{ref:r,children:[S.jsx(Hr,{type:"button",onClick:M,children:S.jsx(xn,{size:"18px"})}),S.jsx(At,{type:"button",onClick:()=>R("google"),children:S.jsx(An,{size:"16px"})}),S.jsx(At,{type:"button",onClick:()=>R("deepl"),children:S.jsx(En,{size:"18px"})}),S.jsx(Vr,{children:S.jsx(Cn,{size:"16px"})})]}),S.jsx(xt,{...E,name:"caption",ref:C=>{T(C),c.current=C}})]})};nt.propTypes={el:N.object,handleEdit:N.func,setRecording:N.func,setTranslation:N.func};const{button:Xr}=V.shadows,{m:Jr}=V.indents,Yt=({className:e})=>{const{user:t}=de(),[n,a]=L.useState(!1),{activeCluster:o}=te(),[c,r]=L.useState(""),[s,h]=L.useState(""),{transcript:k,listening:d,resetTranscript:g}=be.useSpeechRecognition(),{isMicrophoneAvailable:y}=be.useSpeechRecognition(),{browserSupportsSpeechRecognition:f}=be.useSpeechRecognition(),$=c.endsWith(", ")||c.replace(/[a-z]$/,"*#").endsWith("*#")?k.replace(/^./,v=>` ${v}`):k.replace(/^./,v=>v.toUpperCase()),x=`${c}${$}`,u=wt(x,St),b=(v,i)=>v.trim().endsWith(i)?`${v.trim()} `:`${v.trim()}${i} `;L.useEffect(()=>{if(!n)return;const v=[".","?","!",","],i=T=>{if(v.includes(T.key)){T.preventDefault();const E=b(u,T.key);r(E),g()}if(T.key==="Backspace"){T.preventDefault();const E=window.getSelection().toString();if(window.getSelection().deleteFromDocument(),E){const D=u.replace(E,"");r(D)}else{const D=u.length-1,F=u.substring(0,D);r(F)}g()}if(T.key==="Space"){T.preventDefault();const E=u+" ";r(E),g()}};return addEventListener("keydown",i),()=>{removeEventListener("keydown",i)}},[n,d,u,g]),L.useEffect(()=>{const v=async i=>{const T=i.key==="F1"||i.key==="r"&&i.metaKey&&!i.altKey&&!i.shiftKey;if(d||T&&(i.preventDefault(),a(!0),ye.startListening({language:o.lang,continuous:!0})),d&&T){i.preventDefault(),ye.stopListening();const E=u.at(-1),D=!E||["!"].includes(E)?u:b(u,"."),F=await De(wt(D,St),{from:o.lang,to:t.lang},t.engine);r(D),h(F),g()}};return addEventListener("keydown",v),()=>{removeEventListener("keydown",v)}},[o==null?void 0:o.lang,n,d,u,g,t.engine,t.lang]);const m=L.useCallback(()=>{ye.stopListening(),a(!1),r(""),h(""),g()},[g]);if(L.useEffect(()=>{const v=i=>{if(i.key==="Escape"||i.key==="Enter"||i.key==="§")return i.preventDefault(),m()};return addEventListener("keyup",v),()=>{removeEventListener("keyup",v)}},[m]),!f||!y)return;const A=async v=>{if(v==null||v.currentTarget.blur(),!d)a(!0),ye.startListening({language:o.lang,continuous:!0});else{ye.stopListening();const i=u.at(-1),T=!i||["!"].includes(i)?u:b(u,"."),E={from:o.lang,to:t.lang},D=await De(T,E,t.engine);r(T),h(D),g()}};return S.jsxs("div",{className:Dr(e,!n&&"hidden"),children:[S.jsxs(pe,{onClick:A,$s:"m",$round:!0,$bs:Xr,children:[!d&&S.jsx(Ln,{size:18})," ",d&&S.jsx(_n,{size:18,fill:V.colors.error})]}),n&&S.jsx(jn,{$x:`left: ${Jr}`,$y:"top: 50%",$bd:d?"listening":"none",btn:!0,onClick:m,children:S.jsx(nt,{el:{cluster:o._id,element:u.trim(),caption:s.trim(),favorite:!0,checked:u.split(/\s+/).length<20},handleEdit:a,setRecording:r,setTranslation:h})})]})};Yt.propTypes={className:N.string};const{background:Ue}=V.colors,{button:Ct}=V.shadows,{s:Lt,m:Qr}=V.indents,qt=({className:e,filtredElements:t,setLiColor:n})=>{const{user:a}=de(),{activeCluster:o}=te(),{activeElement:c}=oe(),[r,s]=L.useState(null);if(L.useEffect(()=>{const u=window.speechSynthesis.getVoices();Array.isArray(u)&&u.length>0&&s(u),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{const b=window.speechSynthesis.getVoices();s(b)})},[]),!Array.isArray(r)||r.length===0)return;const h=u=>{if(!u.length)return;let b="",m=0;const A=u.reduce((v,i)=>(v[i.lang]||(v[i.lang]=0),v[i.lang]+=1,v),{});for(const v in A)A[v]>m&&(m=A[v],b=v);return b},k=t.length?h(t):a.lang,d=(u,b)=>u.replaceAll(", `",`;${b} `).replaceAll(" `",`${b} `).replaceAll(",`",";"),g=({text:u,playList:b,divider:m})=>{let A="";for(let v=0;v<b.length;v+=1){let i=b[v][u];const T=`@±@${b[v].lang}${m}`;[".","!","?",'"'].includes(i.at(-1))?(A+=d(i,m).replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",u!=="caption"?`__${m}`:`__${T}`).replaceAll(".",u!=="caption"?`.${m}`:`.${T}`).replaceAll(",",u!=="caption"?`,${m}`:`,${T}`).replaceAll("!",u!=="caption"?`!${m}`:`!${T}`).replaceAll("?",u!=="caption"?`?${m}`:`?${T}`),o.lang.includes("de")&&(A=A.replaceAll(`0.${m}`,"0.").replaceAll(`1.${m}`,"1.").replaceAll(`2.${m}`,"2.").replaceAll(`3.${m}`,"3.").replaceAll(`4.${m}`,"4.").replaceAll(`5.${m}`,"5.").replaceAll(`6.${m}`,"6.").replaceAll(`7.${m}`,"7.").replaceAll(`8.${m}`,"8.").replaceAll(`9.${m}`,"9."))):b[v].element.startsWith("[")||(u==="caption"&&(i.includes(" [")&&(i=i.substring(0,i.indexOf(" ["))),i=`${i}@±@${b[v].lang}`),A+=i+m)}return A},y=r,f=u=>{u==null||u.currentTarget.blur(),n(Ue);const b="$*@",m=t.findIndex(i=>i.element===c.element),A=t.splice(m===-1?0:m),v=Pe({setLiColor:n,divider:b,voices:y,text:g({text:"element",playList:A,divider:b}),lang:o.lang,rate:o.rate});v&&ee.error(v)},$=u=>{u==null||u.currentTarget.blur();const b="$*@";n(Ue);const m=t.findIndex(i=>i.element===c.element),A=t.splice(m===-1?0:m),v=Pe({setLiColor:n,divider:b,voices:y,text:g({text:"caption",playList:A,divider:b}),lang:k,rate:a.rate});v&&ee.error(v)},x=u=>{u==null||u.currentTarget.blur(),n(Ue);let b="";const m="$*@",A=t.findIndex(T=>T.element===c.element),v=t.splice(A===-1?0:A);for(let T=0;T<v.length;T+=1){const{element:E,caption:D,lang:F}=v[T];if(!E.startsWith("[")){const W=d(E,""),M=D.includes(" [")?D.substring(0,D.indexOf(" [")):d(D,"");b+=W+`@±@${F}`+M+m}}const i=Pn({setLiColor:n,divider:m,voices:y,text:b,lang:o.lang,rate:a.rate});i&&ee.error(i)};return S.jsxs(Je,{className:e,$m:`${Lt} ${Qr}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:" 1fr 1fr 0.5fr 1fr",$cg:Lt,children:[S.jsx(Yt,{}),S.jsx(pe,{onClick:f,$s:"m",$round:!0,$bs:Ct,children:(o==null?void 0:o.lang.at(0).toUpperCase())+(o==null?void 0:o.lang.substring(1))}),S.jsx(Bt,{onClick:x}),S.jsx(pe,{onClick:$,$s:"m",$round:!0,$bs:Ct,children:(k==null?void 0:k.at(0).toUpperCase())+(k==null?void 0:k.substring(1))})]})};qt.propTypes={className:N.string,filtredElements:N.array,setLiColor:N.func};const{colors:Ge}=V,Zr=U.button`
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
`,Xt=({children:e})=>{var y;const{selection:t,position:n,offset:a,nodeText:o}=Jn(),{openUrls:c}=Qn(),{allElements:r}=oe(),{activeCluster:s}=te(),h=(y=r.find(f=>f.caption===o))==null?void 0:y.lang,k=s==null?void 0:s.lang,d=nr(t).map(f=>f[h||k]).filter(f=>f&&f);if((t==null?void 0:t.split(/\s+/).length)>1)return;const g=()=>{c(d)};if(t)return S.jsx(Zr,{$x:(n==null?void 0:n.x)-20-a,$y:(n==null?void 0:n.y)-98,$selection:t,onClick:g,children:e})};Xt.propTypes={onClick:N.func,children:N.oneOfType([N.string,N.node,N.oneOf(["img","png","svg"])])};const{background:ei,backgroundHoverd:ti}=V.colors,ni=he`
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
`,Jt=({src:e,accessToken:t,expiresIn:n})=>{const a=ae(),o=L.useRef(),[c,r]=L.useState("dump"),s=On({onSuccess:d=>{const{access_token:g,expires_in:y}=d,f={accessToken:g,expiresIn:y*1e3+Date.now()};a(Dn(f)),h(g)},onError:d=>ee.error(d.message),scope:Gn}),h=async d=>{try{const g=await In.get(e,{responseType:"blob",headers:{Authorization:`Bearer ${d}`}}).then(f=>f.data),y=URL.createObjectURL(g);r(y)}catch(g){ee.error(g.message)}},k=Date.now()<n;return S.jsx(ri,{ref:o,src:e.endsWith(".mp3")?e:c,onError:()=>{!k&&s(),k&&h(t)},onPause:d=>d.target.blur(),onEnded:d=>d.target.blur(),controls:!0})};Jt.propTypes={src:N.string,accessToken:N.string,expiresIn:N.number};const Qt=({el:e,setLiColor:t,editCount:n,selectMode:a})=>{var m,A;const o=ae(),{user:c}=de(),{activeCluster:r}=te(),{activeElement:s}=oe(),h=e.element,k=Mn(e.caption),[d,g]=L.useState(()=>{var v;return!((v=k.file)!=null&&v.endsWith(".mp3"))}),y="$*@",f=L.useCallback((v,i)=>{let T="";return i?([".","!","?",'"'].includes(v.trim().at(-1))?(T=v.trim().replaceAll(", `",`;${i} `).replaceAll(" `",`${i} `).replaceAll(",`",";").replaceAll("Mr.","misteR").replaceAll("Ms.","misS").replaceAll("Mrs.","missiS").replaceAll("...",`__${i}`).replaceAll(".",`.${i}`).replaceAll(",",`,${i}`).replaceAll("!",`!${i}`).replaceAll("?",`?${i}`),r.lang.includes("de")&&(T=T.replaceAll(`0.${i}`,"0.").replaceAll(`1.${i}`,"1.").replaceAll(`2.${i}`,"2.").replaceAll(`3.${i}`,"3.").replaceAll(`4.${i}`,"4.").replaceAll(`5.${i}`,"5.").replaceAll(`6.${i}`,"6.").replaceAll(`7.${i}`,"7.").replaceAll(`8.${i}`,"8.").replaceAll(`9.${i}`,"9."))):T=v.trim()+i,T.includes("[")?T.substring(0,T.indexOf("["))+i:T):v},[r.lang]),$=L.useCallback(v=>{if(v==null||v.currentTarget.blur(),a||h.startsWith("["))return;const i=Pe({setLiColor:t,divider:y,voices:window.speechSynthesis.getVoices(),text:f(h,y),lang:r.lang,rate:r.rate});i&&ee.error(i)},[r.lang,r.rate,h,f,a,t]),x=L.useCallback(v=>{if(v==null||v.currentTarget.blur(),a)return;const i=Pe({setLiColor:t,divider:y,voices:window.speechSynthesis.getVoices(),text:f(k.text,y),lang:e.lang,rate:c.rate});i&&ee.error(i)},[k.text,e.lang,f,a,t,c.rate]);L.useEffect(()=>{if(n>0||e._id!==(s==null?void 0:s._id))return;const v=i=>{i.key==="ArrowLeft"&&!i.metaKey&&!i.altKey&&!i.shiftKey&&(i.preventDefault(),$()),i.key==="ArrowRight"&&!i.metaKey&&!i.altKey&&!i.shiftKey&&(i.preventDefault(),x())};return addEventListener("keydown",v),()=>{removeEventListener("keydown",v)}},[s==null?void 0:s._id,n,e._id,x,$]);const u=()=>{if(a)return;if(h.startsWith("[")){g(!d);return}const{_id:v,activeElementId:i}=r;o(Oe(e)),i!==e._id&&o(_e({_id:v,activeElementId:e._id})).unwrap().then(T=>o(je(T.result.cluster)))},b=v=>{v.stopPropagation();const{_id:i,sortBy:T}=r;o(_e({_id:i,sortBy:!T})).unwrap().then(E=>o(je(E.result.cluster)))};return S.jsxs(Fr,{onClick:u,children:[S.jsx(Et,{onClick:$,$mode:`${a}`,children:h}),S.jsx(Ur,{onClick:b}),k.text&&S.jsx(Et,{onClick:x,$mode:`${a}`,children:k.text}),d&&!k.text&&S.jsx(qr,{src:k.link}),!d&&!k.text&&S.jsx(Jt,{src:k.file,accessToken:(m=c.googleToken)==null?void 0:m.accessToken,expiresIn:(A=c.googleToken)==null?void 0:A.expiresIn})]})};Qt.propTypes={el:N.object,setLiColor:N.func,editCount:N.number,selectMode:N.bool};const Zt=({el:e,liColor:t,setLiColor:n,editCount:a,setEditCount:o,selectMode:c})=>{const r=ae(),s=L.useRef(null),{activeCluster:h}=te(),{elementTrash:k,activeElement:d,allElements:g}=oe(),[y,f]=L.useState(!1),{_id:$,favorite:x,checked:u}=e,b=k.find(D=>D._id===$),m=$===(d==null?void 0:d._id),A=D=>{f(!D),o(D?a-1:a+1)},v=document.querySelector("#modal");L.useEffect(()=>{if(!m)return;const{sortBy:D}=h,F=d.element.startsWith("["),W=M=>{if(M.key==="F2"&&!F&&v.children.length===0&&(M.preventDefault(),f(!y),o(y?a-1:a+1)),!(a>0)){if(M.key==="ArrowDown"&&!M.metaKey&&!M.altKey&&!M.shiftKey){M.preventDefault();const R=g.findIndex(({_id:j})=>j===(d==null?void 0:d._id));r(Oe(g[D?R-1:R+1])),Ye(s.current.nextElementSibling)}if(M.key==="ArrowUp"&&!M.metaKey&&!M.altKey&&!M.shiftKey){M.preventDefault();const R=g.findIndex(({_id:j})=>j===(d==null?void 0:d._id));r(Oe(g[D?R+1:R-1])),Ye(s.current.previousElementSibling)}M.altKey&&M.key==="ArrowDown"&&!M.metaKey&&!M.shiftKey&&(M.preventDefault(),Ze()),M.altKey&&M.key==="ArrowUp"&&!M.metaKey&&!M.shiftKey&&(M.preventDefault(),Qe())}};return addEventListener("keydown",W),()=>{removeEventListener("keydown",W)}},[h,d==null?void 0:d._id,d==null?void 0:d.element,g,r,a,m,y,v.children.length,o]);const i=()=>{r(Ve({_id:$,favorite:!x}))},T=()=>{r(Ve({_id:$,checked:!u}))},E=()=>r(Wn(e));return S.jsxs(Mr,{id:m?"active-element":null,$licolor:t,ref:s,children:[S.jsxs(He,{$h:"100%",$p:"0",$fd:"column",children:[S.jsxs(zr,{$hovered:x,children:[S.jsx("input",{type:"checkbox",name:"favorite",checked:x,onChange:i}),S.jsx(Un,{size:"20px"})]}),S.jsxs(Nr,{$hovered:u,children:[S.jsx("input",{type:"checkbox",name:"checked",checked:u,onChange:T}),S.jsx(zn,{size:"15px"})]})]}),y&&S.jsx(nt,{el:e,handleEdit:A}),!y&&S.jsx(Qt,{el:e,setLiColor:n,editCount:a,selectMode:c}),S.jsxs(He,{$h:"100%",$p:"0",$fd:"column",children:[S.jsx(Br,{$hovered:b,onClick:E,children:S.jsx(Nn,{size:"16px"})}),S.jsx(Wr,{onClick:()=>A(y),children:S.jsx(Bn,{size:"15px"})})]})]})};Zt.propTypes={el:N.object,liColor:N.string,setLiColor:N.func,editCount:N.number,setEditCount:N.func,selectMode:N.bool};const ii=U.ul`
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
`,{white:si}=V.colors,oi=()=>{const e=ae(),{activeCluster:t}=te(),{allElements:n,activeElement:a,elementTrash:o,elementFilter:c,isLoading:r}=oe(),[s,h]=L.useState(si),[k,d]=L.useState(0),[g,y]=L.useState(!1),{ref:f,inView:$,entry:x}=cr({initialInView:!0,rootMargin:`0px 0px ${window.innerHeight/2}px 0px`});L.useEffect(()=>{if(!t)return;const i=()=>{const T=document.getElementById("active-element");T&&Ye(T)};(a==null?void 0:a._id)===t.activeElementId?i():e(Dt({clusterId:t._id})).unwrap().then(({result:T})=>{if(!t.activeElementId)return;const E=T.elements.find(({_id:D})=>D===t.activeElementId);e(Oe(E))}).then(()=>i())},[]),L.useEffect(()=>{const i=E=>{E.altKey&&y(!0)},T=E=>{E.altKey||y(!1)};return addEventListener("keyup",T),addEventListener("keydown",i),()=>{removeEventListener("keydown",i),removeEventListener("keyup",T)}},[g,y]);let{elementSelect:u}=oe();u=u||[];const b=n.filter(i=>i.clusterId===(t==null?void 0:t._id)).sort((i,T)=>i.createdAt.localeCompare(T.createdAt)),A=(()=>{const i=o.map(T=>T._id);return u.includes("trash")?b.filter(T=>i.includes(T._id)):b})().filter(({element:i,caption:T,favorite:E,checked:D})=>{const F=i.toLowerCase().replace("·","").includes(c)||i.toLowerCase().includes(c)||T.toLowerCase().includes(c),W=u.includes("wordlist")?F&&Fn(i):F,M=()=>u.some(j=>["favorite","unfavorite"].includes(j))?u.includes("favorite")?W&&E===!0:W&&E===!1:W;return(()=>u.some(j=>["checked","unchecked"].includes(j))?u.includes("checked")?M()&&D===!0:M()&&D===!1:M())()}).sort(t!=null&&t.sortBy?(i,T)=>T.createdAt.localeCompare(i.createdAt):(i,T)=>i.createdAt.localeCompare(T.createdAt)),v=window.innerHeight<(x==null?void 0:x.target.getBoundingClientRect().y)+(x==null?void 0:x.target.getBoundingClientRect().height)*1.5;return S.jsxs(S.Fragment,{children:[S.jsxs(ii,{id:"element-list",children:[A.map(i=>S.jsx(Zt,{el:i,liColor:s,setLiColor:h,editCount:k,setEditCount:d,selectMode:g},i._id)),!r&&S.jsxs("div",{ref:f,children:[S.jsx(zt,{}),S.jsx(Nt,{className:$&&v?"bar-up":"bar-down"}),S.jsx(qt,{className:$&&v?"bar-up":"bar-down",filtredElements:A,setLiColor:h})]})]}),S.jsxs(Xt,{children:[S.jsx("span",{children:"Translate"})," ",S.jsx(Pt,{size:18})]}),r&&S.jsx(Kn,{})]})},{s:_t,m:ai}=V.indents,fi=()=>S.jsx(He,{$p:`0 ${ai} ${_t} ${_t}`,children:S.jsx(oi,{})});export{fi as default};
