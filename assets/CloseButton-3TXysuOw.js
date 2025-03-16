import{ax as Ut,ay as Gt,d as ce,y as qt,k as rt,z as ot,b as Ee,K as k,ae as Jt,V as Kt,J as be,Y as te,L as pe,a0 as Oe,a1 as Qt,a7 as Zt,j as T,x as O,a5 as en,a9 as tn,H as C,F as nn,ah as Ve,az as rn,o as it,c as on,a as re,g as an,t as ln,_ as at,r as sn,f as cn,w as un}from"./index-CNi9nonO.js";function dn(e){return e.composedPath()[0]||null}function Xe(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function ue(e,n){const t=e.trim().split(/\s+/g),r={top:t[0]};switch(t.length){case 1:r.right=t[0],r.bottom=t[0],r.left=t[0];break;case 2:r.right=t[1],r.left=t[1],r.bottom=t[0];break;case 3:r.right=t[1],r.bottom=t[2],r.left=t[1];break;case 4:r.right=t[1],r.bottom=t[2],r.left=t[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return r}function or(e,n){const[t,r]=e.split(" ");return{row:t,col:r||t}}function Re(e){return e.composedPath()[0]}const fn={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function hn(e,n,t){if(e==="mousemoveoutside"){const r=o=>{n.contains(Re(o))||t(o)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const o=f=>{r=!n.contains(Re(f))},u=f=>{r&&(n.contains(Re(f))||t(f))};return{mousedown:o,mouseup:u,touchstart:o,touchend:u}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function lt(e,n,t){const r=fn[e];let o=r.get(n);o===void 0&&r.set(n,o=new WeakMap);let u=o.get(t);return u===void 0&&o.set(t,u=hn(e,n,t)),u}function vn(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=lt(e,n,t);return Object.keys(o).forEach(u=>{de(u,document,o[u],r)}),!0}return!1}function bn(e,n,t,r){if(e==="mousemoveoutside"||e==="clickoutside"){const o=lt(e,n,t);return Object.keys(o).forEach(u=>{ne(u,document,o[u],r)}),!0}return!1}function pn(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,n=new WeakMap;function t(){e.set(this,!0)}function r(){e.set(this,!0),n.set(this,!0)}function o(a,l,d){const h=a[l];return a[l]=function(){return d.apply(a,arguments),h.apply(a,arguments)},a}function u(a,l){a[l]=Event.prototype[l]}const f=new WeakMap,x=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function B(){var a;return(a=f.get(this))!==null&&a!==void 0?a:null}function g(a,l){x!==void 0&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:l??x.get})}const w={bubble:{},capture:{}},b={};function M(){const a=function(l){const{type:d,eventPhase:h,bubbles:m}=l,H=Re(l);if(h===2)return;const W=h===1?"capture":"bubble";let y=H;const _=[];for(;y===null&&(y=window),_.push(y),y!==window;)y=y.parentNode||null;const L=w.capture[d],F=w.bubble[d];if(o(l,"stopPropagation",t),o(l,"stopImmediatePropagation",r),g(l,B),W==="capture"){if(L===void 0)return;for(let N=_.length-1;N>=0&&!e.has(l);--N){const q=_[N],Q=L.get(q);if(Q!==void 0){f.set(l,q);for(const J of Q){if(n.has(l))break;J(l)}}if(N===0&&!m&&F!==void 0){const J=F.get(q);if(J!==void 0)for(const ve of J){if(n.has(l))break;ve(l)}}}}else if(W==="bubble"){if(F===void 0)return;for(let N=0;N<_.length&&!e.has(l);++N){const q=_[N],Q=F.get(q);if(Q!==void 0){f.set(l,q);for(const J of Q){if(n.has(l))break;J(l)}}}}u(l,"stopPropagation"),u(l,"stopImmediatePropagation"),g(l)};return a.displayName="evtdUnifiedHandler",a}function S(){const a=function(l){const{type:d,eventPhase:h}=l;if(h!==2)return;const m=b[d];m!==void 0&&m.forEach(H=>H(l))};return a.displayName="evtdUnifiedWindowEventHandler",a}const E=M(),j=S();function $(a,l){const d=w[a];return d[l]===void 0&&(d[l]=new Map,window.addEventListener(l,E,a==="capture")),d[l]}function V(a){return b[a]===void 0&&(b[a]=new Set,window.addEventListener(a,j)),b[a]}function X(a,l){let d=a.get(l);return d===void 0&&a.set(l,d=new Set),d}function A(a,l,d,h){const m=w[l][d];if(m!==void 0){const H=m.get(a);if(H!==void 0&&H.has(h))return!0}return!1}function U(a,l){const d=b[a];return!!(d!==void 0&&d.has(l))}function G(a,l,d,h){let m;if(typeof h=="object"&&h.once===!0?m=L=>{z(a,l,m,h),d(L)}:m=d,vn(a,l,m,h))return;const W=h===!0||typeof h=="object"&&h.capture===!0?"capture":"bubble",y=$(W,a),_=X(y,l);if(_.has(m)||_.add(m),l===window){const L=V(a);L.has(m)||L.add(m)}}function z(a,l,d,h){if(bn(a,l,d,h))return;const H=h===!0||typeof h=="object"&&h.capture===!0,W=H?"capture":"bubble",y=$(W,a),_=X(y,l);if(l===window&&!A(l,H?"bubble":"capture",a,d)&&U(a,d)){const F=b[a];F.delete(d),F.size===0&&(window.removeEventListener(a,j),b[a]=void 0)}_.has(d)&&_.delete(d),_.size===0&&y.delete(l),y.size===0&&(window.removeEventListener(a,E,W==="capture"),w[W][a]=void 0)}return{on:G,off:z}}const{on:de,off:ne}=pn(),gn=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function mn(){return gn}function wn(e){const n={isDeactivated:!1};let t=!1;return Ut(()=>{if(n.isDeactivated=!1,!t){t=!0;return}e()}),Gt(()=>{n.isDeactivated=!0,t||(t=!0)}),n}function Ne(e,n){console.error(`[vueuc/${e}]: ${n}`)}var oe=[],Rn=function(){return oe.some(function(e){return e.activeTargets.length>0})},xn=function(){return oe.some(function(e){return e.skippedTargets.length>0})},Ye="ResizeObserver loop completed with undelivered notifications.",Sn=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Ye}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Ye),window.dispatchEvent(e)},he;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(he||(he={}));var ie=function(e){return Object.freeze(e)},zn=function(){function e(n,t){this.inlineSize=n,this.blockSize=t,ie(this)}return e}(),st=function(){function e(n,t,r,o){return this.x=n,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,ie(this)}return e.prototype.toJSON=function(){var n=this,t=n.x,r=n.y,o=n.top,u=n.right,f=n.bottom,x=n.left,B=n.width,g=n.height;return{x:t,y:r,top:o,right:u,bottom:f,left:x,width:B,height:g}},e.fromRect=function(n){return new e(n.x,n.y,n.width,n.height)},e}(),_e=function(e){return e instanceof SVGElement&&"getBBox"in e},ct=function(e){if(_e(e)){var n=e.getBBox(),t=n.width,r=n.height;return!t&&!r}var o=e,u=o.offsetWidth,f=o.offsetHeight;return!(u||f||e.getClientRects().length)},je=function(e){var n;if(e instanceof Element)return!0;var t=(n=e==null?void 0:e.ownerDocument)===null||n===void 0?void 0:n.defaultView;return!!(t&&e instanceof t.Element)},yn=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},fe=typeof window<"u"?window:{},ge=new WeakMap,Ae=/auto|scroll/,Tn=/^tb|vertical/,Bn=/msie|trident/i.test(fe.navigator&&fe.navigator.userAgent),Y=function(e){return parseFloat(e||"0")},se=function(e,n,t){return e===void 0&&(e=0),n===void 0&&(n=0),t===void 0&&(t=!1),new zn((t?n:e)||0,(t?e:n)||0)},Fe=ie({devicePixelContentBoxSize:se(),borderBoxSize:se(),contentBoxSize:se(),contentRect:new st(0,0,0,0)}),ut=function(e,n){if(n===void 0&&(n=!1),ge.has(e)&&!n)return ge.get(e);if(ct(e))return ge.set(e,Fe),Fe;var t=getComputedStyle(e),r=_e(e)&&e.ownerSVGElement&&e.getBBox(),o=!Bn&&t.boxSizing==="border-box",u=Tn.test(t.writingMode||""),f=!r&&Ae.test(t.overflowY||""),x=!r&&Ae.test(t.overflowX||""),B=r?0:Y(t.paddingTop),g=r?0:Y(t.paddingRight),w=r?0:Y(t.paddingBottom),b=r?0:Y(t.paddingLeft),M=r?0:Y(t.borderTopWidth),S=r?0:Y(t.borderRightWidth),E=r?0:Y(t.borderBottomWidth),j=r?0:Y(t.borderLeftWidth),$=b+g,V=B+w,X=j+S,A=M+E,U=x?e.offsetHeight-A-e.clientHeight:0,G=f?e.offsetWidth-X-e.clientWidth:0,z=o?$+X:0,a=o?V+A:0,l=r?r.width:Y(t.width)-z-G,d=r?r.height:Y(t.height)-a-U,h=l+$+G+X,m=d+V+U+A,H=ie({devicePixelContentBoxSize:se(Math.round(l*devicePixelRatio),Math.round(d*devicePixelRatio),u),borderBoxSize:se(h,m,u),contentBoxSize:se(l,d,u),contentRect:new st(b,B,l,d)});return ge.set(e,H),H},dt=function(e,n,t){var r=ut(e,t),o=r.borderBoxSize,u=r.contentBoxSize,f=r.devicePixelContentBoxSize;switch(n){case he.DEVICE_PIXEL_CONTENT_BOX:return f;case he.BORDER_BOX:return o;default:return u}},En=function(){function e(n){var t=ut(n);this.target=n,this.contentRect=t.contentRect,this.borderBoxSize=ie([t.borderBoxSize]),this.contentBoxSize=ie([t.contentBoxSize]),this.devicePixelContentBoxSize=ie([t.devicePixelContentBoxSize])}return e}(),ft=function(e){if(ct(e))return 1/0;for(var n=0,t=e.parentNode;t;)n+=1,t=t.parentNode;return n},Hn=function(){var e=1/0,n=[];oe.forEach(function(f){if(f.activeTargets.length!==0){var x=[];f.activeTargets.forEach(function(g){var w=new En(g.target),b=ft(g.target);x.push(w),g.lastReportedSize=dt(g.target,g.observedBox),b<e&&(e=b)}),n.push(function(){f.callback.call(f.observer,x,f.observer)}),f.activeTargets.splice(0,f.activeTargets.length)}});for(var t=0,r=n;t<r.length;t++){var o=r[t];o()}return e},Ue=function(e){oe.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(ft(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},On=function(){var e=0;for(Ue(e);Rn();)e=Hn(),Ue(e);return xn()&&Sn(),e>0},Te,ht=[],_n=function(){return ht.splice(0).forEach(function(e){return e()})},Pn=function(e){if(!Te){var n=0,t=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return _n()}).observe(t,r),Te=function(){t.textContent="".concat(n?n--:n++)}}ht.push(e),Te()},Mn=function(e){Pn(function(){requestAnimationFrame(e)})},xe=0,Cn=function(){return!!xe},kn=250,$n={attributes:!0,characterData:!0,childList:!0,subtree:!0},Ge=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],qe=function(e){return e===void 0&&(e=0),Date.now()+e},Be=!1,Wn=function(){function e(){var n=this;this.stopped=!0,this.listener=function(){return n.schedule()}}return e.prototype.run=function(n){var t=this;if(n===void 0&&(n=kn),!Be){Be=!0;var r=qe(n);Mn(function(){var o=!1;try{o=On()}finally{if(Be=!1,n=r-qe(),!Cn())return;o?t.run(1e3):n>0?t.run(n):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var n=this,t=function(){return n.observer&&n.observer.observe(document.body,$n)};document.body?t():fe.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var n=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Ge.forEach(function(t){return fe.addEventListener(t,n.listener,!0)}))},e.prototype.stop=function(){var n=this;this.stopped||(this.observer&&this.observer.disconnect(),Ge.forEach(function(t){return fe.removeEventListener(t,n.listener,!0)}),this.stopped=!0)},e}(),He=new Wn,Je=function(e){!xe&&e>0&&He.start(),xe+=e,!xe&&He.stop()},Ln=function(e){return!_e(e)&&!yn(e)&&getComputedStyle(e).display==="inline"},Dn=function(){function e(n,t){this.target=n,this.observedBox=t||he.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var n=dt(this.target,this.observedBox,!0);return Ln(this.target)&&(this.lastReportedSize=n),this.lastReportedSize.inlineSize!==n.inlineSize||this.lastReportedSize.blockSize!==n.blockSize},e}(),In=function(){function e(n,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=n,this.callback=t}return e}(),me=new WeakMap,Ke=function(e,n){for(var t=0;t<e.length;t+=1)if(e[t].target===n)return t;return-1},we=function(){function e(){}return e.connect=function(n,t){var r=new In(n,t);me.set(n,r)},e.observe=function(n,t,r){var o=me.get(n),u=o.observationTargets.length===0;Ke(o.observationTargets,t)<0&&(u&&oe.push(o),o.observationTargets.push(new Dn(t,r&&r.box)),Je(1),He.schedule())},e.unobserve=function(n,t){var r=me.get(n),o=Ke(r.observationTargets,t),u=r.observationTargets.length===1;o>=0&&(u&&oe.splice(oe.indexOf(r),1),r.observationTargets.splice(o,1),Je(-1))},e.disconnect=function(n){var t=this,r=me.get(n);r.observationTargets.slice().forEach(function(o){return t.unobserve(n,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Vn=function(){function e(n){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof n!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");we.connect(this,n)}return e.prototype.observe=function(n,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!je(n))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");we.observe(this,n,t)},e.prototype.unobserve=function(n){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!je(n))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");we.unobserve(this,n)},e.prototype.disconnect=function(){we.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Xn{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Vn)(this.handleResize),this.elHandlersMap=new Map}handleResize(n){for(const t of n){const r=this.elHandlersMap.get(t.target);r!==void 0&&r(t)}}registerHandler(n,t){this.elHandlersMap.set(n,t),this.observer.observe(n)}unregisterHandler(n){this.elHandlersMap.has(n)&&(this.elHandlersMap.delete(n),this.observer.unobserve(n))}}const Qe=new Xn,Ze=ce({name:"ResizeObserver",props:{onResize:Function},setup(e){let n=!1;const t=qt().proxy;function r(o){const{onResize:u}=e;u!==void 0&&u(o)}rt(()=>{const o=t.$el;if(o===void 0){Ne("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){Ne("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(Qe.registerHandler(o.nextElementSibling,r),n=!0)}),ot(()=>{n&&Qe.unregisterHandler(t.$el.nextElementSibling)})},render(){return Ee(this.$slots,"default")}});function et(e){const{left:n,right:t,top:r,bottom:o}=ue(e);return`${r} ${n} ${o} ${t}`}const tt=ce({render(){var e,n;return(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)}}),{cubicBezierEaseInOut:nt}=Jt;function Nn({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:r=nt,leaveCubicBezier:o=nt}={}){return[k(`&.${e}-transition-enter-active`,{transition:`all ${n} ${r}!important`}),k(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),k(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),k(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const Yn={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function jn(e){const{scrollbarColor:n,scrollbarColorHover:t,scrollbarHeight:r,scrollbarWidth:o,scrollbarBorderRadius:u}=e;return Object.assign(Object.assign({},Yn),{height:r,width:o,borderRadius:u,color:n,colorHover:t})}const An={name:"Scrollbar",common:Kt,self:jn},Fn=be("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[k(">",[be("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[k("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),k(">",[be("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),k(">, +",[be("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[te("horizontal",`
 height: var(--n-scrollbar-height);
 `,[k(">",[pe("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),te("horizontal--top",`
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),te("horizontal--bottom",`
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),te("vertical",`
 width: var(--n-scrollbar-width);
 `,[k(">",[pe("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),te("vertical--left",`
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),te("vertical--right",`
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),te("disabled",[k(">",[pe("scrollbar","pointer-events: none;")])]),k(">",[pe("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[Nn(),k("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),Un=Object.assign(Object.assign({},Oe.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Gn=ce({name:"Scrollbar",props:Un,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t,mergedRtlRef:r}=Qt(e),o=Zt("Scrollbar",r,n),u=T(null),f=T(null),x=T(null),B=T(null),g=T(null),w=T(null),b=T(null),M=T(null),S=T(null),E=T(null),j=T(null),$=T(0),V=T(0),X=T(!1),A=T(!1);let U=!1,G=!1,z,a,l=0,d=0,h=0,m=0;const H=mn(),W=Oe("Scrollbar","-scrollbar",Fn,An,e,n),y=O(()=>{const{value:i}=M,{value:s}=w,{value:c}=E;return i===null||s===null||c===null?0:Math.min(i,c*i/s+Xe(W.value.self.width)*1.5)}),_=O(()=>`${y.value}px`),L=O(()=>{const{value:i}=S,{value:s}=b,{value:c}=j;return i===null||s===null||c===null?0:c*i/s+Xe(W.value.self.height)*1.5}),F=O(()=>`${L.value}px`),N=O(()=>{const{value:i}=M,{value:s}=$,{value:c}=w,{value:v}=E;if(i===null||c===null||v===null)return 0;{const R=c-i;return R?s/R*(v-y.value):0}}),q=O(()=>`${N.value}px`),Q=O(()=>{const{value:i}=S,{value:s}=V,{value:c}=b,{value:v}=j;if(i===null||c===null||v===null)return 0;{const R=c-i;return R?s/R*(v-L.value):0}}),J=O(()=>`${Q.value}px`),ve=O(()=>{const{value:i}=M,{value:s}=w;return i!==null&&s!==null&&s>i}),Pe=O(()=>{const{value:i}=S,{value:s}=b;return i!==null&&s!==null&&s>i}),vt=O(()=>{const{trigger:i}=e;return i==="none"||X.value}),bt=O(()=>{const{trigger:i}=e;return i==="none"||A.value}),Z=O(()=>{const{container:i}=e;return i?i():f.value}),pt=O(()=>{const{content:i}=e;return i?i():x.value}),Me=(i,s)=>{if(!e.scrollable)return;if(typeof i=="number"){ae(i,s??0,0,!1,"auto");return}const{left:c,top:v,index:R,elSize:P,position:I,behavior:p,el:D,debounce:K=!0}=i;(c!==void 0||v!==void 0)&&ae(c??0,v??0,0,!1,p),D!==void 0?ae(0,D.offsetTop,D.offsetHeight,K,p):R!==void 0&&P!==void 0?ae(0,R*P,P,K,p):I==="bottom"?ae(0,Number.MAX_SAFE_INTEGER,0,!1,p):I==="top"&&ae(0,0,0,!1,p)},Ce=wn(()=>{e.container||Me({top:$.value,left:V.value})}),gt=()=>{Ce.isDeactivated||ee()},mt=i=>{if(Ce.isDeactivated)return;const{onResize:s}=e;s&&s(i),ee()},wt=(i,s)=>{if(!e.scrollable)return;const{value:c}=Z;c&&(typeof i=="object"?c.scrollBy(i):c.scrollBy(i,s||0))};function ae(i,s,c,v,R){const{value:P}=Z;if(P){if(v){const{scrollTop:I,offsetHeight:p}=P;if(s>I){s+c<=I+p||P.scrollTo({left:i,top:s+c-p,behavior:R});return}}P.scrollTo({left:i,top:s,behavior:R})}}function Rt(){yt(),Tt(),ee()}function xt(){Se()}function Se(){St(),zt()}function St(){a!==void 0&&window.clearTimeout(a),a=window.setTimeout(()=>{A.value=!1},e.duration)}function zt(){z!==void 0&&window.clearTimeout(z),z=window.setTimeout(()=>{X.value=!1},e.duration)}function yt(){z!==void 0&&window.clearTimeout(z),X.value=!0}function Tt(){a!==void 0&&window.clearTimeout(a),A.value=!0}function Bt(i){const{onScroll:s}=e;s&&s(i),ke()}function ke(){const{value:i}=Z;i&&($.value=i.scrollTop,V.value=i.scrollLeft*(o!=null&&o.value?-1:1))}function Et(){const{value:i}=pt;i&&(w.value=i.offsetHeight,b.value=i.offsetWidth);const{value:s}=Z;s&&(M.value=s.offsetHeight,S.value=s.offsetWidth);const{value:c}=g,{value:v}=B;c&&(j.value=c.offsetWidth),v&&(E.value=v.offsetHeight)}function $e(){const{value:i}=Z;i&&($.value=i.scrollTop,V.value=i.scrollLeft*(o!=null&&o.value?-1:1),M.value=i.offsetHeight,S.value=i.offsetWidth,w.value=i.scrollHeight,b.value=i.scrollWidth);const{value:s}=g,{value:c}=B;s&&(j.value=s.offsetWidth),c&&(E.value=c.offsetHeight)}function ee(){e.scrollable&&(e.useUnifiedContainer?$e():(Et(),ke()))}function We(i){var s;return!(!((s=u.value)===null||s===void 0)&&s.contains(dn(i)))}function Ht(i){i.preventDefault(),i.stopPropagation(),G=!0,de("mousemove",window,Le,!0),de("mouseup",window,De,!0),d=V.value,h=o!=null&&o.value?window.innerWidth-i.clientX:i.clientX}function Le(i){if(!G)return;z!==void 0&&window.clearTimeout(z),a!==void 0&&window.clearTimeout(a);const{value:s}=S,{value:c}=b,{value:v}=L;if(s===null||c===null)return;const P=(o!=null&&o.value?window.innerWidth-i.clientX-h:i.clientX-h)*(c-s)/(s-v),I=c-s;let p=d+P;p=Math.min(I,p),p=Math.max(p,0);const{value:D}=Z;if(D){D.scrollLeft=p*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:K}=e;K&&K(p)}}function De(i){i.preventDefault(),i.stopPropagation(),ne("mousemove",window,Le,!0),ne("mouseup",window,De,!0),G=!1,ee(),We(i)&&Se()}function Ot(i){i.preventDefault(),i.stopPropagation(),U=!0,de("mousemove",window,ze,!0),de("mouseup",window,ye,!0),l=$.value,m=i.clientY}function ze(i){if(!U)return;z!==void 0&&window.clearTimeout(z),a!==void 0&&window.clearTimeout(a);const{value:s}=M,{value:c}=w,{value:v}=y;if(s===null||c===null)return;const P=(i.clientY-m)*(c-s)/(s-v),I=c-s;let p=l+P;p=Math.min(I,p),p=Math.max(p,0);const{value:D}=Z;D&&(D.scrollTop=p)}function ye(i){i.preventDefault(),i.stopPropagation(),ne("mousemove",window,ze,!0),ne("mouseup",window,ye,!0),U=!1,ee(),We(i)&&Se()}en(()=>{const{value:i}=Pe,{value:s}=ve,{value:c}=n,{value:v}=g,{value:R}=B;v&&(i?v.classList.remove(`${c}-scrollbar-rail--disabled`):v.classList.add(`${c}-scrollbar-rail--disabled`)),R&&(s?R.classList.remove(`${c}-scrollbar-rail--disabled`):R.classList.add(`${c}-scrollbar-rail--disabled`))}),rt(()=>{e.container||ee()}),ot(()=>{z!==void 0&&window.clearTimeout(z),a!==void 0&&window.clearTimeout(a),ne("mousemove",window,ze,!0),ne("mouseup",window,ye,!0)});const Ie=O(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:s,colorHover:c,height:v,width:R,borderRadius:P,railInsetHorizontalTop:I,railInsetHorizontalBottom:p,railInsetVerticalRight:D,railInsetVerticalLeft:K,railColor:_t}}=W.value,{top:Pt,right:Mt,bottom:Ct,left:kt}=ue(I),{top:$t,right:Wt,bottom:Lt,left:Dt}=ue(p),{top:It,right:Vt,bottom:Xt,left:Nt}=ue(o!=null&&o.value?et(D):D),{top:Yt,right:jt,bottom:At,left:Ft}=ue(o!=null&&o.value?et(K):K);return{"--n-scrollbar-bezier":i,"--n-scrollbar-color":s,"--n-scrollbar-color-hover":c,"--n-scrollbar-border-radius":P,"--n-scrollbar-width":R,"--n-scrollbar-height":v,"--n-scrollbar-rail-top-horizontal-top":Pt,"--n-scrollbar-rail-right-horizontal-top":Mt,"--n-scrollbar-rail-bottom-horizontal-top":Ct,"--n-scrollbar-rail-left-horizontal-top":kt,"--n-scrollbar-rail-top-horizontal-bottom":$t,"--n-scrollbar-rail-right-horizontal-bottom":Wt,"--n-scrollbar-rail-bottom-horizontal-bottom":Lt,"--n-scrollbar-rail-left-horizontal-bottom":Dt,"--n-scrollbar-rail-top-vertical-right":It,"--n-scrollbar-rail-right-vertical-right":Vt,"--n-scrollbar-rail-bottom-vertical-right":Xt,"--n-scrollbar-rail-left-vertical-right":Nt,"--n-scrollbar-rail-top-vertical-left":Yt,"--n-scrollbar-rail-right-vertical-left":jt,"--n-scrollbar-rail-bottom-vertical-left":At,"--n-scrollbar-rail-left-vertical-left":Ft,"--n-scrollbar-rail-color":_t}}),le=t?tn("scrollbar",void 0,Ie,e):void 0;return Object.assign(Object.assign({},{scrollTo:Me,scrollBy:wt,sync:ee,syncUnifiedContainer:$e,handleMouseEnterWrapper:Rt,handleMouseLeaveWrapper:xt}),{mergedClsPrefix:n,rtlEnabled:o,containerScrollTop:$,wrapperRef:u,containerRef:f,contentRef:x,yRailRef:B,xRailRef:g,needYBar:ve,needXBar:Pe,yBarSizePx:_,xBarSizePx:F,yBarTopPx:q,xBarLeftPx:J,isShowXBar:vt,isShowYBar:bt,isIos:H,handleScroll:Bt,handleContentResize:gt,handleContainerResize:mt,handleYScrollMouseDown:Ot,handleXScrollMouseDown:Ht,cssVars:t?void 0:Ie,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:t,triggerDisplayManually:r,rtlEnabled:o,internalHoistYRail:u,yPlacement:f,xPlacement:x,xScrollable:B}=this;if(!this.scrollable)return(e=n.default)===null||e===void 0?void 0:e.call(n);const g=this.trigger==="none",w=(S,E)=>C("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${f}`,S],"data-scrollbar-rail":!0,style:[E||"",this.verticalRailStyle],"aria-hidden":!0},C(g?tt:Ve,g?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?C("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),b=()=>{var S,E;return(S=this.onRender)===null||S===void 0||S.call(this),C("div",rn(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,o&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(E=n.default)===null||E===void 0?void 0:E.call(n):C("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},C(Ze,{onResize:this.handleContentResize},{default:()=>C("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},n)})),u?null:w(void 0,void 0),B&&C("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${x}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},C(g?tt:Ve,g?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?C("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},M=this.container?b():C(Ze,{onResize:this.handleContainerResize},{default:b});return u?C(nn,null,M,w(this.themeClass,this.cssVars)):M}}),qn=Object.assign(Object.assign({},Oe.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),ir=ce({name:"Scrollbar",props:qn,setup(){const e=T(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return C(Gn,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Jn={class:"page__header"},Kn={class:"page__header_top"},Qn={class:"page__icon_wrapper"},Zn=ce({__name:"PageHeader",props:{header:String},setup(e){return(n,t)=>(it(),on("div",Jn,[re("div",Kn,[re("h1",null,[an(ln(e.header)+" ",1),Ee(n.$slots,"header",{},void 0,!0)])]),re("div",Qn,[re("span",null,[Ee(n.$slots,"icon",{},void 0,!0)])])]))}}),ar=at(Zn,[["__scopeId","data-v-1ae5da9a"]]),er=["onClick"],tr=ce({__name:"CloseButton",props:{backUrl:String,icon:Boolean},setup(e){const n=async(t,r,o)=>{o(t)};return(t,r)=>{const o=sn("router-link");return it(),cn(o,{to:"backUrl",custom:""},{default:un(({href:u,navigate:f})=>[re("a",{class:"page__close-btn",onClick:x=>{n(x,u,f)}},r[0]||(r[0]=[re("span",null,null,-1),re("span",null,null,-1)]),8,er)]),_:1})}}}),lr=at(tr,[["__scopeId","data-v-cc635037"]]);export{ir as S,Ze as V,lr as _,ar as a,Gn as b,ne as c,or as d,Xe as e,ue as g,de as o};
