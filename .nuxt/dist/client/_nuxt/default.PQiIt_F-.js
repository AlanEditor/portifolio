import{aa as Xe,g as L,Z as ne,L as O,F as M,r as w,c as m,d as P,o as A,ab as C,H as le,W as I,ac as Je,ad as Ze,ae as et,T as tt,t as R,v as H,x as y,_ as nt,z as X,Y as V,af as rt,$ as be,y as J,A as Ee,C as lt,D as ot}from"./entry.CcPOo2LV.js";import{g as xe}from"./translationService.Z3ELzQ0v.js";const at=""+new URL("aura.EgrCeJIf.png",import.meta.url).href;function D(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),ut=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ut||{});function N({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var o;let a=Pe(r,n),u=Object.assign(l,{props:a});if(e||t&2&&a.static)return ue(u);if(t&1){let i=(o=a.unmount)==null||o?0:1;return D(i,{0(){return null},1(){return ue({...l,props:{...a,hidden:!0,style:{display:"none"}}})}})}return ue(u)}function ue({props:e,attrs:t,slots:n,slot:r,name:l}){var o,a;let{as:u,...i}=it(e,["unmount","static"]),s=(o=n.default)==null?void 0:o.call(n,r),d={};if(r){let v=!1,p=[];for(let[c,f]of Object.entries(r))typeof f=="boolean"&&(v=!0),f===!0&&p.push(c);v&&(d["data-headlessui-state"]=p.join(" "))}if(u==="template"){if(s=Oe(s??[]),Object.keys(i).length>0||Object.keys(t).length>0){let[v,...p]=s??[];if(!st(v)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).map(h=>h.trim()).filter((h,j,Y)=>Y.indexOf(h)===j).sort((h,j)=>h.localeCompare(j)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let c=Pe((a=v.props)!=null?a:{},i),f=Xe(v,c);for(let h in c)h.startsWith("on")&&(f.props||(f.props={}),f.props[h]=c[h]);return f}return Array.isArray(s)&&s.length===1?s[0]:s}return L(u,Object.assign({},i,d),{default:()=>s})}function Oe(e){return e.flatMap(t=>t.type===ne?Oe(t.children):[t])}function Pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...o){let a=n[r];for(let u of a){if(l instanceof Event&&l.defaultPrevented)return;u(l,...o)}}});return t}function it(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function st(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let dt=0;function ct(){return++dt}function Te(){return ct()}var Fe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Fe||{});function E(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let ft=Symbol("Context");var K=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(K||{});function pt(){return O(ft,null)}var vt=Object.defineProperty,mt=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t,n)=>(mt(e,typeof t!="symbol"?t+"":t,n),n);class ht{constructor(){Le(this,"current",this.detect()),Le(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let oe=new ht;function B(e){if(oe.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let de=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var x=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(x||{}),ke=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ke||{}),gt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(gt||{});function wt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(de)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ae=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ae||{});function yt(e,t=0){var n;return e===((n=B(e))==null?void 0:n.body)?!1:D(t,{0(){return e.matches(de)},1(){let r=e;for(;r!==null;){if(r.matches(de))return!0;r=r.parentElement}return!1}})}var bt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(bt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function k(e){e==null||e.focus({preventScroll:!0})}let Et=["textarea","input"].join(",");function Lt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Et))!=null?n:!1}function $t(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let a=l.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function te(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,u=Array.isArray(e)?n?$t(e):e:wt(e);l.length>0&&u.length>1&&(u=u.filter(f=>!l.includes(f))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},v=0,p=u.length,c;do{if(v>=p||v+p<=0)return 0;let f=s+v;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}c=u[f],c==null||c.focus(d),v+=i}while(c!==a.activeElement);return t&6&&Lt(c)&&c.select(),2}function Z(e,t,n){oe.isServer||M(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Ce(e,t,n){oe.isServer||M(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function St(e,t,n=m(()=>!0)){function r(o,a){if(!n.value||o.defaultPrevented)return;let u=a(o);if(u===null||!u.getRootNode().contains(u))return;let i=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of i){if(s===null)continue;let d=s instanceof HTMLElement?s:E(s);if(d!=null&&d.contains(u)||o.composed&&o.composedPath().includes(d))return}return!yt(u,Ae.Loose)&&u.tabIndex!==-1&&o.preventDefault(),t(o,u)}let l=w(null);Z("pointerdown",o=>{var a,u;n.value&&(l.value=((u=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:u[0])||o.target)},!0),Z("mousedown",o=>{var a,u;n.value&&(l.value=((u=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:u[0])||o.target)},!0),Z("click",o=>{l.value&&(r(o,()=>l.value),l.value=null)},!0),Z("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ce("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var re=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(re||{});let ce=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return N({ourProps:o,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function xt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function me(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function he(){let e=[],t={addEventListener(n,r,l,o){return n.addEventListener(r,l,o),t.add(()=>n.removeEventListener(r,l,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return me(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=he();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}var z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(z||{});function Ot(){let e=w(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function De(e,t,n,r){oe.isServer||M(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}function Pt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Me(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=E(n);r instanceof HTMLElement&&t.add(r)}return t}var Ne=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ne||{});let q=Object.assign(P({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:w(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=w(null);r({el:l,$el:l});let o=m(()=>B(l)),a=w(!1);A(()=>a.value=!0),C(()=>a.value=!1),Ft({ownerDocument:o},m(()=>a.value&&!!(e.features&16)));let u=kt({ownerDocument:o,container:l,initialFocus:m(()=>e.initialFocus)},m(()=>a.value&&!!(e.features&2)));At({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:u},m(()=>a.value&&!!(e.features&8)));let i=Ot();function s(c){let f=E(l);f&&(h=>h())(()=>{D(i.value,{[z.Forwards]:()=>{te(f,x.First,{skipElements:[c.relatedTarget]})},[z.Backwards]:()=>{te(f,x.Last,{skipElements:[c.relatedTarget]})}})})}let d=w(!1);function v(c){c.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(c){if(!a.value)return;let f=Me(e.containers);E(l)instanceof HTMLElement&&f.add(E(l));let h=c.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(je(f,h)||(d.value?te(E(l),D(i.value,{[z.Forwards]:()=>x.Next,[z.Backwards]:()=>x.Previous})|x.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&k(c.target)))}return()=>{let c={},f={ref:l,onKeydown:v,onFocusout:p},{features:h,initialFocus:j,containers:Y,...U}=e;return L(ne,[!!(h&4)&&L(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:re.Focusable}),N({ourProps:f,theirProps:{...t,...U},slot:c,attrs:t,slots:n,name:"FocusTrap"}),!!(h&4)&&L(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:re.Focusable})])}}}),{features:Ne}),T=[];Pt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&T[0]!==t.target&&(T.unshift(t.target),T=T.filter(n=>n!=null&&n.isConnected),T.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Tt(e){let t=w(T.slice());return le([e],([n],[r])=>{r===!0&&n===!1?me(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=T.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function Ft({ownerDocument:e},t){let n=Tt(t);A(()=>{M(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&k(n())},{flush:"post"})}),C(()=>{t.value&&k(n())})}function kt({ownerDocument:e,container:t,initialFocus:n},r){let l=w(null),o=w(!1);return A(()=>o.value=!0),C(()=>o.value=!1),A(()=>{le([t,n,r],(a,u)=>{if(a.every((s,d)=>(u==null?void 0:u[d])===s)||!r.value)return;let i=E(t);i&&me(()=>{var s,d;if(!o.value)return;let v=E(n),p=(s=e.value)==null?void 0:s.activeElement;if(v){if(v===p){l.value=p;return}}else if(i.contains(p)){l.value=p;return}v?k(v):te(i,x.First|x.NoScroll)===ke.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function At({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var o;De((o=e.value)==null?void 0:o.defaultView,"focus",a=>{if(!l.value)return;let u=Me(n);E(t)instanceof HTMLElement&&u.add(E(t));let i=r.value;if(!i)return;let s=a.target;s&&s instanceof HTMLElement?je(u,s)?(r.value=s,k(s)):(a.preventDefault(),a.stopPropagation(),k(i)):k(r.value)},!0)}function je(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let ie=new Map,G=new Map;function $e(e,t=w(!0)){M(n=>{var r;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var a;if(!l)return;let u=(a=G.get(l))!=null?a:1;if(u===1?G.delete(l):G.set(l,u-1),u!==1)return;let i=ie.get(l);i&&(i["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",i["aria-hidden"]),l.inert=i.inert,ie.delete(l))});let o=(r=G.get(l))!=null?r:0;G.set(l,o+1),o===0&&(ie.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let _e=Symbol("ForcePortalRootContext");function Ct(){return O(_e,!1)}let Se=P({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return I(_e,e.force),()=>{let{force:r,...l}=e;return N({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Dt(e){let t=B(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let Mt=P({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=w(null),l=m(()=>B(r)),o=Ct(),a=O(Re,null),u=w(o===!0||a==null?Dt(r.value):a.resolveTarget());M(()=>{o||a!=null&&(u.value=a.resolveTarget())});let i=O(fe,null);return A(()=>{let s=E(r);s&&i&&C(i.register(s))}),C(()=>{var s,d;let v=(s=l.value)==null?void 0:s.getElementById("headlessui-portal-root");v&&u.value===v&&u.value.children.length<=0&&((d=u.value.parentElement)==null||d.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:r,"data-headlessui-portal":""};return L(Je,{to:u.value},N({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),fe=Symbol("PortalParentContext");function Nt(){let e=O(fe,null),t=w([]);function n(o){return t.value.push(o),e&&e.register(o),()=>r(o)}function r(o){let a=t.value.indexOf(o);a!==-1&&t.value.splice(a,1),e&&e.unregister(o)}let l={register:n,unregister:r,portals:t};return[t,P({name:"PortalWrapper",setup(o,{slots:a}){return I(fe,l),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}})]}let Re=Symbol("PortalGroupContext"),jt=P({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=Ze({resolveTarget(){return e.target}});return I(Re,r),()=>{let{target:l,...o}=e;return N({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),He=Symbol("StackContext");var pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(pe||{});function _t(){return O(He,()=>{})}function Rt({type:e,enabled:t,element:n,onUpdate:r}){let l=_t();function o(...a){r==null||r(...a),l(...a)}A(()=>{le(t,(a,u)=>{a?o(0,e,n):u===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),C(()=>{t.value&&o(1,e,n)}),I(He,o)}let Ht=Symbol("DescriptionContext");function It({slot:e=w({}),name:t="Description",props:n={}}={}){let r=w([]);function l(o){return r.value.push(o),()=>{let a=r.value.indexOf(o);a!==-1&&r.value.splice(a,1)}}return I(Ht,{register:l,slot:e,name:t,props:n}),m(()=>r.value.length>0?r.value.join(" "):void 0)}function Bt(e){let t=et(e.getSnapshot());return C(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ut(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...o){let a=t[l].call(n,...o);a&&(n=a,r.forEach(u=>u()))}}}function Wt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,o=e-l;n.style(r,"paddingRight",`${o}px`)}}}function Vt(){if(!xt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(a){return r.containers.flatMap(u=>u()).some(u=>u.contains(a))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=he();a.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>a.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!l(s)&&(o=s)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!l(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Gt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let F=Ut(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:he(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Gt(n)},l=[Vt(),Wt(),qt()];l.forEach(({before:o})=>o==null?void 0:o(r)),l.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});F.subscribe(()=>{let e=F.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&F.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&F.dispatch("TEARDOWN",n)}});function Kt(e,t,n){let r=Bt(F),l=m(()=>{let o=e.value?r.value.get(e.value):void 0;return o?o.count>0:!1});return le([e,t],([o,a],[u],i)=>{if(!o||!a)return;F.dispatch("PUSH",o,n);let s=!1;i(()=>{s||(F.dispatch("POP",u??o,n),s=!0)})},{immediate:!0}),l}function zt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let r=w(null),l=B(r);function o(){var a;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"value"in i&&i.value instanceof HTMLElement&&u.push(i.value));if(t!=null&&t.value)for(let i of t.value)u.push(i);for(let i of(a=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?a:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(E(r))||u.some(s=>i.contains(s))||u.push(i));return u}return{resolveContainers:o,contains(a){return o().some(u=>u.contains(a))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:L(ce,{features:re.Hidden,ref:r})}}}var Yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Yt||{});let ve=Symbol("DialogContext");function Ie(e){let t=O(ve,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ie),n}return t}let ee="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Qt=P({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ee},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${Te()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var o;let a=w(!1);A(()=>{a.value=!0});let u=w(0),i=pt(),s=m(()=>e.open===ee&&i!==null?(i.value&K.Open)===K.Open:e.open),d=w(null),v=m(()=>B(d));if(l({el:d,$el:d}),!(e.open!==ee||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ee?void 0:e.open}`);let p=m(()=>a.value&&s.value?0:1),c=m(()=>p.value===0),f=m(()=>u.value>1),h=O(ve,null)!==null,[j,Y]=Nt(),{resolveContainers:U,mainTreeNodeRef:we,MainTreeNode:Be}=zt({portals:j,defaultContainers:[m(()=>{var g;return(g=W.panelRef.value)!=null?g:d.value})]}),Ue=m(()=>f.value?"parent":"leaf"),ye=m(()=>i!==null?(i.value&K.Closing)===K.Closing:!1),We=m(()=>h||ye.value?!1:c.value),Ve=m(()=>{var g,b,$;return($=Array.from((b=(g=v.value)==null?void 0:g.querySelectorAll("body > *"))!=null?b:[]).find(S=>S.id==="headlessui-portal-root"?!1:S.contains(E(we))&&S instanceof HTMLElement))!=null?$:null});$e(Ve,We);let qe=m(()=>f.value?!0:c.value),Ge=m(()=>{var g,b,$;return($=Array.from((b=(g=v.value)==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(S=>S.contains(E(we))&&S instanceof HTMLElement))!=null?$:null});$e(Ge,qe),Rt({type:"Dialog",enabled:m(()=>p.value===0),element:d,onUpdate:(g,b)=>{if(b==="Dialog")return D(g,{[pe.Add]:()=>u.value+=1,[pe.Remove]:()=>u.value-=1})}});let Ke=It({name:"DialogDescription",slot:m(()=>({open:s.value}))}),Q=w(null),W={titleId:Q,panelRef:w(null),dialogState:p,setTitleId(g){Q.value!==g&&(Q.value=g)},close(){t("close",!1)}};I(ve,W);let ze=m(()=>!(!c.value||f.value));St(U,(g,b)=>{W.close(),tt(()=>b==null?void 0:b.focus())},ze);let Ye=m(()=>!(f.value||p.value!==0));De((o=v.value)==null?void 0:o.defaultView,"keydown",g=>{Ye.value&&(g.defaultPrevented||g.key===Fe.Escape&&(g.preventDefault(),g.stopPropagation(),W.close()))});let Qe=m(()=>!(ye.value||p.value!==0||h));return Kt(v,Qe,g=>{var b;return{containers:[...(b=g.containers)!=null?b:[],U]}}),M(g=>{if(p.value!==0)return;let b=E(d);if(!b)return;let $=new ResizeObserver(S=>{for(let ae of S){let _=ae.target.getBoundingClientRect();_.x===0&&_.y===0&&_.width===0&&_.height===0&&W.close()}});$.observe(b),g(()=>$.disconnect())}),()=>{let{id:g,open:b,initialFocus:$,...S}=e,ae={...n,ref:d,id:g,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":Q.value,"aria-describedby":Ke.value},_={open:p.value===0};return L(Se,{force:!0},()=>[L(Mt,()=>L(jt,{target:d.value},()=>L(Se,{force:!1},()=>L(q,{initialFocus:$,containers:U,features:c.value?D(Ue.value,{parent:q.features.RestoreFocus,leaf:q.features.All&~q.features.FocusLock}):q.features.None},()=>L(Y,{},()=>N({ourProps:ae,theirProps:{...S,...n},slot:_,attrs:n,slots:r,visible:p.value===0,features:se.RenderStrategy|se.Static,name:"Dialog"})))))),L(Be)])}}}),Xt=P({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${Te()}`}},setup(e,{attrs:t,slots:n,expose:r}){let l=Ie("DialogPanel");r({el:l.panelRef,$el:l.panelRef});function o(a){a.stopPropagation()}return()=>{let{id:a,...u}=e,i={id:a,ref:l.panelRef,onClick:o};return N({ourProps:i,theirProps:u,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Jt(e,t){return R(),H("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Zt(e,t){return R(),H("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const ge=e=>(lt("data-v-f58232d6"),e=e(),ot(),e),en={class:"md:block absolute inset-x-0 top-0 z-50 animate__animated animate__fadeIn"},tn={class:"mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8","aria-label":"Global"},nn={class:"flex lg:hidden"},rn={class:"hidden lg:flex lg:gap-x-12"},ln=["href"],on=ge(()=>y("div",{class:"fixed inset-0 z-10"},null,-1)),an={class:"flex items-center justify-between"},un=ge(()=>y("a",{href:"#",class:"-m-1.5 p-1.5"},[y("img",{class:"h-8 w-auto",src:at,alt:""})],-1)),sn=ge(()=>y("span",{class:"sr-only"},"Close menu",-1)),dn={class:"mt-6 flow-root"},cn={class:"-my-6 divide-y divide-gray-500/10"},fn={class:"grid grid-cols-1 gap-y-4 gap-x-8 pt-10"},pn=["href"],vn={data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{changeLanguage(e){if(e==="pt")this.$router.push("/");else{const t=this.$route.fullPath,n=this.addOrReplaceQueryParam(t,"lang",e);this.$router.replace(n)}},addOrReplaceQueryParam(e,t,n){const r=new RegExp("("+t+"=).*?(&|$)");let l=e;return e.match(r)?l=e.replace(r,"$1"+n+"$2"):l+=(e.indexOf("?")!==-1?"&":"?")+t+"="+n,l},getTranslation(e,t){return xe(e,t)}},watch:{$route(e,t){this.actualLanguage=e.query.lang}}},mn=Object.assign(vn,{__name:"default",setup(e){const t=w(!1),n=[{name:"Sobre",href:"#about"},{name:"Projetos",href:"#project"},{name:"Tecnologias",href:"#stack"},{name:"Recomendações",href:"#testimonials"},{name:"Contato",href:"#contact"}];return(r,l)=>(R(),H("header",en,[y("nav",tn,[y("div",nn,[t.value?rt("",!0):(R(),H("button",{key:0,type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200",onClick:l[0]||(l[0]=o=>t.value=!0)},[X(V(Jt),{class:"h-6 w-6","aria-hidden":"true"})]))]),y("div",rn,[(R(),H(ne,null,be(n,o=>y("a",{key:o.name,href:o.href,class:"text-sm font-semibold leading-6 text-gray-900"},J(V(xe)(o.name,r.actualLanguage)),9,ln)),64)),y("button",{onClick:l[1]||(l[1]=o=>r.changeLanguage(r.actualLanguage==="en"?"pt":"en")),class:"text-sm font-semibold leading-6 border-2 hover:border-blue-500 hover:text-blue-500 px-2 text-white"},J(r.actualLanguage==="en"?"PT":"EN"),1)])]),X(V(Qt),{as:"div",class:"lg:hidden",onClose:l[6]||(l[6]=o=>t.value=!1),open:t.value},{default:Ee(()=>[on,X(V(Xt),{class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:Ee(()=>[y("div",an,[un,y("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-300",onClick:l[2]||(l[2]=o=>t.value=!1)},[sn,X(V(Zt),{class:"h-6 w-6","aria-hidden":"true"})])]),y("div",dn,[y("div",cn,[y("div",fn,[(R(),H(ne,null,be(n,o=>y("a",{key:o.name,href:o.href,onClick:l[3]||(l[3]=a=>t.value=!1),class:"text-sm font-semibold leading-6 text-gray-900 block"},J(o.name),9,pn)),64))]),y("div",{onClick:l[5]||(l[5]=o=>t.value=!1)},[y("button",{onClick:l[4]||(l[4]=o=>r.changeLanguage(r.actualLanguage==="en"?"pt":"en")),class:"text-sm font-semibold leading-6 border-2 border-white hover:border-blue-500 hover:text-blue-500 px-2 mt-5 text-white"},J(r.actualLanguage==="en"?"PT":"EN"),1)])])])]),_:1})]),_:1},8,["open"])]))}}),wn=nt(mn,[["__scopeId","data-v-f58232d6"]]);export{wn as default};
