import{_ as ue}from"./PageDivider-CKNKwRO5.js";import{g as K}from"./gsap-DaYL4gH5.js";import{ad as de,V as me,J as p,Y as P,K as B,L as v,a0 as te,d as W,a1 as ne,a6 as pe,H as w,X as fe,n as ge,al as ve,x as T,a8 as L,af as he,a9 as _e,aa as Y,S as J,Q as we,am as Se,an as ye,j as I,ao as be,ap as xe,v as j,aq as ie,ar as b,k as ze,p as $,y as Ce,as as ke,c as D,a as m,b as Q,F as oe,h as re,e as $e,o as C,t as N,at as De,_ as Te,u as Pe,au as Be,i as g,w as _,q as Le,av as Ie,g as O,f as Me,aw as Ee,N as Oe}from"./index-B_LvXe90.js";import{S as Re,_ as Ve,a as Fe}from"./CloseButton-Dl9SmPJH.js";import"./three-yDIE3mZu.js";import"./glslify-CqkleIqs.js";import"./es-toolkit-Czm1cOl8.js";let U=!1;function Ne(){if(de&&window.CSS&&!U&&(U=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const We={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function je(e){const{textColor3:t,infoColor:i,errorColor:c,successColor:n,warningColor:u,textColor1:l,textColor2:o,railColor:r,fontWeightStrong:a,fontSize:s}=e;return Object.assign(Object.assign({},We),{contentFontSize:s,titleFontWeight:a,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${i}`,circleBorderError:`2px solid ${c}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${u}`,iconColor:t,iconColorInfo:i,iconColorError:c,iconColorSuccess:n,iconColorWarning:u,titleTextColor:l,contentTextColor:o,metaTextColor:t,lineColor:r})}const Ae={name:"Timeline",common:me,self:je},X=1.25,qe=p("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${X};
`,[P("horizontal",`
 flex-direction: row;
 `,[B(">",[p("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[P("dashed-line-type",[B(">",[p("timeline-item-timeline",[v("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),B(">",[p("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[B(">",[v("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),p("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[v("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),P("right-placement",[p("timeline-item",[p("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),p("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),P("left-placement",[p("timeline-item",[p("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),p("timeline-item-timeline",`
 left: 0;
 `)])]),p("timeline-item",`
 position: relative;
 `,[B("&:last-child",[p("timeline-item-timeline",[v("line",`
 display: none;
 `)]),p("timeline-item-content",[v("meta",`
 margin-bottom: 0;
 `)])]),p("timeline-item-content",[v("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),v("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),v("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),P("dashed-line-type",[p("timeline-item-timeline",[v("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),p("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${X} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[v("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),v("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),v("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),He=Object.assign(Object.assign({},te.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),le=fe("n-timeline"),Ke=W({name:"Timeline",props:He,setup(e,{slots:t}){const{mergedClsPrefixRef:i}=ne(e),c=te("Timeline","-timeline",qe,Ae,e,i);return pe(le,{props:e,mergedThemeRef:c,mergedClsPrefixRef:i}),()=>{const{value:n}=i;return w("div",{class:[`${n}-timeline`,e.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${e.size}-size`,!e.horizontal&&`${n}-timeline--${e.itemPlacement}-placement`]},t)}}}),Ye={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Je=W({name:"TimelineItem",props:Ye,slots:Object,setup(e){const t=ge(le);t||ve("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Ne();const{inlineThemeDisabled:i}=ne(),c=T(()=>{const{props:{size:u,iconSize:l},mergedThemeRef:o}=t,{type:r}=e,{self:{titleTextColor:a,contentTextColor:s,metaTextColor:f,lineColor:S,titleFontWeight:y,contentFontSize:h,[L("iconSize",u)]:k,[L("titleMargin",u)]:x,[L("titleFontSize",u)]:z,[L("circleBorder",r)]:M,[L("iconColor",r)]:d},common:{cubicBezierEaseInOut:E}}=o.value;return{"--n-bezier":E,"--n-circle-border":M,"--n-icon-color":d,"--n-content-font-size":h,"--n-content-text-color":s,"--n-line-color":S,"--n-meta-text-color":f,"--n-title-font-size":z,"--n-title-font-weight":y,"--n-title-margin":x,"--n-title-text-color":a,"--n-icon-size":he(l)||k}}),n=i?_e("timeline-item",T(()=>{const{props:{size:u,iconSize:l}}=t,{type:o}=e;return`${u[0]}${l||"a"}${o[0]}`}),c,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:i?void 0:c,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:i,$slots:c}=this;return i==null||i(),w("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},w("div",{class:`${e}-timeline-item-timeline`},w("div",{class:`${e}-timeline-item-timeline__line`}),Y(c.icon,n=>n?w("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},n):w("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),w("div",{class:`${e}-timeline-item-content`},Y(c.header,n=>n||this.title?w("div",{class:`${e}-timeline-item-content__title`},n||this.title):null),w("div",{class:`${e}-timeline-item-content__content`},J(c.default,()=>[this.content])),w("div",{class:`${e}-timeline-item-content__meta`},J(c.footer,()=>[this.time]))))}});function H(e){return be()?(xe(e),!0):!1}const se=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Qe=e=>e!=null,Ue=Object.prototype.toString,Xe=e=>Ue.call(e)==="[object Object]",R=()=>{},G=Ge();function Ge(){var e,t;return se&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function V(e){return Array.isArray(e)?e:[e]}function Ze(...e){if(e.length!==1)return we(...e);const t=e[0];return typeof t=="function"?Se(ye(()=>({get:t,set:R}))):I(t)}function et(e,t,i){return j(e,t,{...i,immediate:!0})}const ae=se?window:void 0;function F(e){var t;const i=b(e);return(t=i==null?void 0:i.$el)!=null?t:i}function tt(...e){const t=[],i=()=>{t.forEach(o=>o()),t.length=0},c=(o,r,a,s)=>(o.addEventListener(r,a,s),()=>o.removeEventListener(r,a,s)),n=T(()=>{const o=V(b(e[0])).filter(r=>r!=null);return o.every(r=>typeof r!="string")?o:void 0}),u=et(()=>{var o,r;return[(r=(o=n.value)==null?void 0:o.map(a=>F(a)))!=null?r:[ae].filter(a=>a!=null),V(b(n.value?e[1]:e[0])),V($(n.value?e[2]:e[1])),b(n.value?e[3]:e[2])]},([o,r,a,s])=>{if(i(),!(o!=null&&o.length)||!(r!=null&&r.length)||!(a!=null&&a.length))return;const f=Xe(s)?{...s}:s;t.push(...o.flatMap(S=>r.flatMap(y=>a.map(h=>c(S,y,h,f)))))},{flush:"post"}),l=()=>{u(),i()};return H(i),l}function nt(){const e=ie(!1),t=Ce();return t&&ze(()=>{e.value=!0},t),e}function it(e){const t=nt();return T(()=>(t.value,!!e()))}function Z(e,t,i={}){const{root:c,rootMargin:n="0px",threshold:u=0,window:l=ae,immediate:o=!0}=i,r=it(()=>l&&"IntersectionObserver"in l),a=T(()=>{const h=b(e);return V(h).map(F).filter(Qe)});let s=R;const f=I(o),S=r.value?j(()=>[a.value,F(c),f.value],([h,k])=>{if(s(),!f.value||!h.length)return;const x=new IntersectionObserver(t,{root:F(k),rootMargin:n,threshold:u});h.forEach(z=>z&&x.observe(z)),s=()=>{x.disconnect(),s=R}},{immediate:o,flush:"post"}):R,y=()=>{s(),S(),f.value=!1};return H(y),{isSupported:r,isActive:f,pause(){s(),f.value=!1},resume(){f.value=!0},stop:y}}function A(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}const ot={mounted(e,t){typeof t.value=="function"?Z(e,t.value):Z(e,...t.value)}};function ce(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const i=e.parentNode;return!i||i.tagName==="BODY"?!1:ce(i)}}function rt(e){const t=e||window.event,i=t.target;return ce(i)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const q=new WeakMap;function lt(e,t=!1){const i=I(t);let c=null,n="";j(Ze(e),o=>{const r=A(b(o));if(r){const a=r;if(q.get(a)||q.set(a,a.style.overflow),a.style.overflow!=="hidden"&&(n=a.style.overflow),a.style.overflow==="hidden")return i.value=!0;if(i.value)return a.style.overflow="hidden"}},{immediate:!0});const u=()=>{const o=A(b(e));!o||i.value||(G&&(c=tt(o,"touchmove",r=>{rt(r)},{passive:!1})),o.style.overflow="hidden",i.value=!0)},l=()=>{const o=A(b(e));!o||!i.value||(G&&(c==null||c()),o.style.overflow=n,q.delete(o),i.value=!1)};return H(l),T({get(){return i.value},set(o){o?u():l()}})}function st(){let e=!1;const t=ie(!1);return(i,c)=>{if(t.value=c.value,e)return;e=!0;const n=lt(i,c.value);j(t,u=>n.value=u)}}st();const at=["skills-part"],ct=W({__name:"SkillsBlock",props:{header:{type:String},skills:{type:Array,default:Array()},skillsPart:{required:!0,type:String},animationDelay:{type:String,default:"0"}},setup(e){const t=I(!1),i=([n])=>{((n==null?void 0:n.isIntersecting)||!1)&&!t.value&&c(e.skills,.8,.4,Number(e.animationDelay)).play().then(()=>{console.log(`${e.skillsPart} animation complete`),t.value=!0})},c=(n,u,l,o=0)=>{const r=K.timeline({paused:!0}),a=(s,f,S)=>K.fromTo(s,{paused:!0,percent:0},{delay:S,ease:"sine.out",duration:f,percent:s.percent,roundProps:"percent"});for(let s=0;s<n.length;s++)r.add(a(n[s],u,s===0?o:0).play(),`-=${l}`);return r};return(n,u)=>e.skills&&e.skills.length>0?ke((C(),D("div",{key:0,"skills-part":e.skillsPart},[m("h2",null,[Q(n.$slots,"header")]),(C(!0),D(oe,null,re(e.skills,(l,o)=>(C(),D("dl",{key:o},[m("dt",null,[Q(n.$slots,"icon"),m("span",null,N(l.name),1),m("span",null,N(`${l.percent}%`),1)]),m("dd",null,[m("span",{style:De(`background: ${l.color}; width: ${l.percent}%;`)},null,4)])]))),128))],8,at)),[[$(ot),i]]):$e("",!0)}}),ut={},dt={width:"50",height:"53",viewBox:"0 0 50 53",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function mt(e,t){return C(),D("svg",dt,t[0]||(t[0]=[m("rect",{fill:"currentColor",width:"8.75561",height:"38.9138",transform:"matrix(0.686803 0.726844 -0.686803 0.726844 33.4077 0)"},null,-1),m("rect",{fill:"currentColor",width:"8.75561",height:"38.9138",transform:"matrix(0.686803 0.726844 -0.686803 0.726844 36.7485 17.6777)"},null,-1)]))}const pt=Te(ut,[["render",mt]]),ft=[{directions:[{name:"Backend",percent:65,color:"#D9D9D9",icon:""},{name:"Frontend",percent:60,color:"#D9D9D9",icon:""},{name:"Scripting",percent:50,color:"#D9D9D9",icon:""}]},{skills:[{name:"HTML",percent:80,color:"#DC4C23",icon:""},{name:"CSS",percent:80,color:"#214CE5",icon:""},{name:"PHP",percent:70,color:"#4D588E",icon:""},{name:"JavaScript",percent:65,color:"#EFD81D",icon:""},{name:"TypeScript",percent:60,color:"#2F75C1",icon:""},{name:"SQL",percent:65,color:"#D47030",icon:""}]},{frameworks:[{name:"React",percent:50,color:"#58C4DC",icon:""},{name:"Vue",percent:50,color:"#41B883",icon:""},{name:"NestJS",percent:60,color:"#D9224C",icon:""},{name:"AdonisJS",percent:55,color:"#5743F7",icon:""},{name:"Express",percent:50,color:"#7EC726",icon:""},{name:"Koa",percent:55,color:"#60D4D2",icon:""},{name:"Laravel",percent:65,color:"#F72C1F",icon:""},{name:"Yii2",percent:70,color:"#40B3D8",icon:""},{name:"Phalcon",percent:70,color:"#16A880",icon:""}]},{databases:[{name:"MSSQL",percent:65,color:"#EE352C",icon:""},{name:"MySql",percent:75,color:"#005D88",icon:""},{name:"MongoDB",percent:65,color:"#4DA53F",icon:""},{name:"Redis",percent:50,color:"#D12B1F",icon:""},{name:"ClickHouse",percent:65,color:"#F7C600",icon:""}]}],ee=[{color:"green",title:"title",time:"12.09.2020",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem!"},{color:"green",title:"title",time:"12.09.2022",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem!"},{color:"gray",title:"title",time:"12.09.2022",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem!"},{color:"green",title:"title",time:"12.09.2022",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem!"},{title:"title",time:"12.09.2022",content:"Фриланс"}],gt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit, dolorem quia voluptates atque facilis recusandae ab, officiis ratione exercitationem animi mollitia amet. Neque rerum praesentium dolore rem animi voluptate amet, id quam ipsa molestias minus facere sequi, ea eligendi fuga quos? Odit veniam fugiat nihil vero eveniet debitis delectus eum, reprehenderit, asperiores harum, dicta praesentium eos quod ipsam nam?",vt={content:gt},ht=["page-name"],_t={class:"page__container"},wt={class:"page__content"},St={class:"page-about__intro"},yt={class:"page-about__intro-quote"},bt={class:"page__inner page__inner--2columns"},xt={class:"page-about__skills"},zt={class:"page-about__history"},Lt=W({__name:"AboutPage",props:{pageName:{type:String,default:"about"}},setup(e){Pe({title:"Обо мне",description:"Краткий рассказ из моей жизни о разработке",ogTitle:"Обо мне",ogLocale:"ru_RU",ogSiteName:"",ogType:"website",ogImage:"",ogUrl:new URL("about",import.meta.url).href});const t=Le();let i;t.hasRoute("main")&&(i=t.getRoutes().find(u=>u.name==="main"));const c=I("Обо мне"),n=Be(ft);return(u,l)=>{const o=Ve,r=Oe,a=Fe,s=ct,f=ue,S=Je,y=Ke,h=Re;return C(),D("div",{class:"page page-about","page-name":e.pageName},[g(h,null,{default:_(()=>{var k,x,z,M;return[m("div",_t,[g(o,{to:$(i).path??"/"},null,8,["to"]),g(a,{header:c.value},{icon:_(()=>[g(r,{size:"44",color:"var(--c-color1)"},{default:_(()=>[g(Ie)]),_:1})]),_:1},8,["header"]),m("div",wt,[m("div",St,[m("div",yt,[g(r,{color:"var(--c-color11)",size:"40"},{default:_(()=>[g(pt)]),_:1})]),m("p",null,N($(vt).content),1)]),m("div",bt,[m("div",xt,[g(s,{skills:(k=n.find(d=>d.directions))==null?void 0:k.directions,"skills-part":"directions","animation-delay":"3"},{header:_(()=>l[0]||(l[0]=[O(" Направления ")])),_:1},8,["skills"]),g(s,{skills:(x=n.find(d=>d.skills))==null?void 0:x.skills,"skills-part":"skills"},{header:_(()=>l[1]||(l[1]=[O(" Навыки ")])),_:1},8,["skills"]),g(s,{skills:(z=n.find(d=>d.frameworks))==null?void 0:z.frameworks,"skills-part":"frameworks"},{header:_(()=>l[2]||(l[2]=[O(" Фреймворки ")])),_:1},8,["skills"]),g(s,{skills:(M=n.find(d=>d.databases))==null?void 0:M.databases,"skills-part":"databases"},{header:_(()=>l[3]||(l[3]=[O(" Базы данных ")])),_:1},8,["skills"])]),m("div",zt,[m("div",null,[g(f),g(y,null,{default:_(()=>[(C(!0),D(oe,null,re($(ee),(d,E)=>(C(),Me(S,{key:E,color:d.color?d.color:"",title:d.title?d.title:"",time:d.time?d.time:"","line-type":$(ee).length-2===E?"dashed":"line"},Ee({_:2},[d.content?{name:"default",fn:_(()=>[m("div",null,N(d.content),1)]),key:"0"}:void 0]),1032,["color","title","time","line-type"]))),128))]),_:1}),g(f)])])])])])]}),_:1})],8,ht)}}});export{Lt as default};
