import{u as L}from"./list-b8ae3163.js";import{u as M}from"./settings-b4da8509.js";import{g as W,o as B,a as x,n as D,u as T,b as E,r as C,w as F,c as _,s as I,d as R,e as q,f as O,V as H,h as S,i as P,t as V,j as k}from"./index-476972ca.js";import{V as $}from"./VCol-db517396.js";import{V as z}from"./VRow-11e79833.js";function A(e){return W()?(B(e),!0):!1}function b(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const i=()=>t(o);return A(i),{off:i}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(i=>i(...o)))}}function U(e){return typeof e=="function"?e():T(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return e||E()}function Z(e,t=!0,n){const r=Y(n);r?x(e,r):t?e():D(e)}function ee(e){var t;const n=U(e);return(t=n==null?void 0:n.$el)!=null?t:n}const j=J?window:void 0;function te(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=j):[t,n,r,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],a=()=>{i.forEach(u=>u()),i.length=0},p=(u,s,l,c)=>(u.addEventListener(s,l,c),()=>u.removeEventListener(s,l,c)),g=F(()=>[ee(t),U(o)],([u,s])=>{if(a(),!u)return;const l=Q(s)?{...s}:s;i.push(...n.flatMap(c=>r.map(m=>p(u,c,m,l))))},{immediate:!0,flush:"post"}),v=()=>{g(),a()};return A(v),v}function ne(){const e=C(!1);return E()&&x(()=>{e.value=!0}),e}function oe(e){const t=ne();return _(()=>(t.value,!!e()))}function re(e={}){const{window:t=j,requestPermissions:n=!0}=e,r=e,o=oe(()=>!!t&&"Notification"in t),i=C(o.value&&"permission"in Notification&&Notification.permission==="granted"),a=C(null),p=async()=>{if(o.value)return!i.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(i.value=!0),i.value},{on:g,trigger:v}=b(),{on:u,trigger:s}=b(),{on:l,trigger:c}=b(),{on:m,trigger:N}=b(),y=async d=>{if(!o.value||!i.value)return;const f=Object.assign({},r,d);return a.value=new Notification(f.title||"",f),a.value.onclick=v,a.value.onshow=s,a.value.onerror=c,a.value.onclose=N,a.value},h=()=>{a.value&&a.value.close(),a.value=null};if(n&&Z(p),A(h),o.value&&t){const d=t.document;te(d,"visibilitychange",f=>{f.preventDefault(),d.visibilityState==="visible"&&h()})}return{isSupported:o,notification:a,ensurePermissions:p,permissionGranted:i,show:y,close:h,onClick:g,onShow:u,onError:l,onClose:m}}const ce={__name:"HomeView",setup(e){const t=L(),{currentItem:n,items:r,timeleft:o}=I(t),{setCurrentItem:i,countdown:a,setFinishedItem:p}=t,g=M(),{selectedAlarmFile:v,notify:u}=I(g),s={STOP:0,COUNTING:1,PAUSE:2},l=C(s.STOP);let c=0;const m=()=>{l.value===s.STOP&&r.value.length>0&&i(),l.value=s.COUNTING,c=setInterval(()=>{a(),o.value===0&&y()},1e3)},N=()=>{l.value=s.PAUSE,clearInterval(c)},y=()=>{clearInterval(c),l.value=s.STOP;const f=new Audio;if(f.src=v.value,f.play(),u.value){const{show:w,isSupported:G}=re({title:"事項完成",body:n.value,icon:new URL(""+new URL("tomato-fe6b03eb.png",import.meta.url).href,self.location).href});G.value&&w()}p(),r.value.length>0&&m()},h=_(()=>n.value.length>0?n.value:r.value.length>0?"點擊開始":"沒有事項"),d=_(()=>{const f=Math.floor(o.value/60).toString().padStart(2,"0"),w=(o.value%60).toString().padStart(2,"0");return f+":"+w});return(f,w)=>(R(),q(H,{class:"h-100 d-flex justify-center align-center"},{default:O(()=>[S(z,null,{default:O(()=>[S($,{cols:"12"},{default:O(()=>[P("h1",null,V(h.value),1),P("h1",null,V(d.value),1),S(k,{variant:"text",icon:"mdi-play",disabled:l.value===s.COUNTING||T(n).length===0&&T(r).length===0,onClick:m},null,8,["disabled"]),S(k,{variant:"text",icon:"mdi-pause",disabled:l.value!==s.COUNTING,onClick:N},null,8,["disabled"]),S(k,{variant:"text",icon:"mdi-skip-next",disabled:T(n).length===0,onClick:y},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ce as default};
