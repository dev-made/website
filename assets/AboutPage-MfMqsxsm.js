import{_ as de}from"./PageDivider-BQQKDwQI.js";import{g as q}from"./gsap-DaYL4gH5.js";import{av as me,ac as pe,ad as f,ag as M,aa as P,af as h,aj as ee,d as j,ai as te,x as fe,D as k,q as ge,s as he,aY as ve,p as $,aS as B,am as be,an as _e,ar as K,aA as Y,B as ke,k as ye,aZ as Se,j as T,a_ as we,a$ as xe,l as N,b0 as ne,b1 as S,m as oe,aG as E,y as ze,z as Ce,c as C,a as m,b as G,F as ie,h as re,e as $e,o as z,t as J,az as Te,_ as De,u as Me,b2 as Pe,i as g,w as _,aH as Be,b3 as Ee,g as F,f as Ie,b4 as Le,aF as Fe}from"./index-CvCw7FSK.js";import{S as Re,_ as Oe,b as We}from"./CloseButton-CGifxoYN.js";import"./three-yDIE3mZu.js";import"./glslify-CqkleIqs.js";import"./es-toolkit-Czm1cOl8.js";let U=!1;function je(){if(me&&window.CSS&&!U&&(U=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const Ne={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};function Ae(e){const{textColor3:t,infoColor:o,errorColor:s,successColor:i,warningColor:a,textColor1:u,textColor2:n,railColor:r,fontWeightStrong:l,fontSize:c}=e;return Object.assign(Object.assign({},Ne),{contentFontSize:c,titleFontWeight:l,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${s}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${a}`,iconColor:t,iconColorInfo:o,iconColorError:s,iconColorSuccess:i,iconColorWarning:a,titleTextColor:u,contentTextColor:n,metaTextColor:t,lineColor:r})}const He={name:"Timeline",common:pe,self:Ae},Q=1.25,Ve=f("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Q};
`,[M("horizontal",`
 flex-direction: row;
 `,[P(">",[f("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[M("dashed-line-type",[P(">",[f("timeline-item-timeline",[h("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),P(">",[f("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[P(">",[h("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),f("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[h("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),M("right-placement",[f("timeline-item",[f("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),f("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),M("left-placement",[f("timeline-item",[f("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),f("timeline-item-timeline",`
 left: 0;
 `)])]),f("timeline-item",`
 position: relative;
 `,[P("&:last-child",[f("timeline-item-timeline",[h("line",`
 display: none;
 `)]),f("timeline-item-content",[h("meta",`
 margin-bottom: 0;
 `)])]),f("timeline-item-content",[h("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),h("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),h("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),M("dashed-line-type",[f("timeline-item-timeline",[h("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),f("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Q} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[h("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),h("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),h("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),qe=Object.assign(Object.assign({},ee.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),le=ge("n-timeline"),Ke=j({name:"Timeline",props:qe,setup(e,{slots:t}){const{mergedClsPrefixRef:o}=te(e),s=ee("Timeline","-timeline",Ve,He,e,o);return fe(le,{props:e,mergedThemeRef:s,mergedClsPrefixRef:o}),()=>{const{value:i}=o;return k("div",{class:[`${i}-timeline`,e.horizontal&&`${i}-timeline--horizontal`,`${i}-timeline--${e.size}-size`,!e.horizontal&&`${i}-timeline--${e.itemPlacement}-placement`]},t)}}}),Ye={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Ge=j({name:"TimelineItem",props:Ye,slots:Object,setup(e){const t=he(le);t||ve("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),je();const{inlineThemeDisabled:o}=te(),s=$(()=>{const{props:{size:a,iconSize:u},mergedThemeRef:n}=t,{type:r}=e,{self:{titleTextColor:l,contentTextColor:c,metaTextColor:p,lineColor:v,titleFontWeight:y,contentFontSize:b,[B("iconSize",a)]:D,[B("titleMargin",a)]:w,[B("titleFontSize",a)]:x,[B("circleBorder",r)]:I,[B("iconColor",r)]:L},common:{cubicBezierEaseInOut:d}}=n.value;return{"--n-bezier":d,"--n-circle-border":I,"--n-icon-color":L,"--n-content-font-size":b,"--n-content-text-color":c,"--n-line-color":v,"--n-meta-text-color":p,"--n-title-font-size":x,"--n-title-font-weight":y,"--n-title-margin":w,"--n-title-text-color":l,"--n-icon-size":be(u)||D}}),i=o?_e("timeline-item",$(()=>{const{props:{size:a,iconSize:u}}=t,{type:n}=e;return`${a[0]}${u||"a"}${n[0]}`}),s,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:o?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:o,$slots:s}=this;return o==null||o(),k("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},k("div",{class:`${e}-timeline-item-timeline`},k("div",{class:`${e}-timeline-item-timeline__line`}),K(s.icon,i=>i?k("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},i):k("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),k("div",{class:`${e}-timeline-item-content`},K(s.header,i=>i||this.title?k("div",{class:`${e}-timeline-item-content__title`},i||this.title):null),k("div",{class:`${e}-timeline-item-content__content`},Y(s.default,()=>[this.content])),k("div",{class:`${e}-timeline-item-content__meta`},Y(s.footer,()=>[this.time]))))}});function V(e){return we()?(xe(e),!0):!1}const se=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Je=e=>e!=null,Ue=Object.prototype.toString,Qe=e=>Ue.call(e)==="[object Object]",R=()=>{},X=Xe();function Xe(){var e,t;return se&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function O(e){return Array.isArray(e)?e:[e]}function Ze(...e){if(e.length!==1)return ke(...e);const t=e[0];return typeof t=="function"?ye(Se(()=>({get:t,set:R}))):T(t)}function et(e,t,o){return N(e,t,{...o,immediate:!0})}const ae=se?window:void 0;function W(e){var t;const o=S(e);return(t=o==null?void 0:o.$el)!=null?t:o}function tt(...e){const t=[],o=()=>{t.forEach(n=>n()),t.length=0},s=(n,r,l,c)=>(n.addEventListener(r,l,c),()=>n.removeEventListener(r,l,c)),i=$(()=>{const n=O(S(e[0])).filter(r=>r!=null);return n.every(r=>typeof r!="string")?n:void 0}),a=et(()=>{var n,r;return[(r=(n=i.value)==null?void 0:n.map(l=>W(l)))!=null?r:[ae].filter(l=>l!=null),O(S(i.value?e[1]:e[0])),O(E(i.value?e[2]:e[1])),S(i.value?e[3]:e[2])]},([n,r,l,c])=>{if(o(),!(n!=null&&n.length)||!(r!=null&&r.length)||!(l!=null&&l.length))return;const p=Qe(c)?{...c}:c;t.push(...n.flatMap(v=>r.flatMap(y=>l.map(b=>s(v,y,b,p)))))},{flush:"post"}),u=()=>{a(),o()};return V(o),u}function nt(){const e=ne(!1),t=ze();return t&&oe(()=>{e.value=!0},t),e}function ot(e){const t=nt();return $(()=>(t.value,!!e()))}function Z(e,t,o={}){const{root:s,rootMargin:i="0px",threshold:a=0,window:u=ae,immediate:n=!0}=o,r=ot(()=>u&&"IntersectionObserver"in u),l=$(()=>{const b=S(e);return O(b).map(W).filter(Je)});let c=R;const p=T(n),v=r.value?N(()=>[l.value,W(s),p.value],([b,D])=>{if(c(),!p.value||!b.length)return;const w=new IntersectionObserver(t,{root:W(D),rootMargin:i,threshold:a});b.forEach(x=>x&&w.observe(x)),c=()=>{w.disconnect(),c=R}},{immediate:n,flush:"post"}):R,y=()=>{c(),v(),p.value=!1};return V(y),{isSupported:r,isActive:p,pause(){c(),p.value=!1},resume(){p.value=!0},stop:y}}function A(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}const it={mounted(e,t){typeof t.value=="function"?Z(e,t.value):Z(e,...t.value)}};function ce(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const o=e.parentNode;return!o||o.tagName==="BODY"?!1:ce(o)}}function rt(e){const t=e||window.event,o=t.target;return ce(o)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const H=new WeakMap;function lt(e,t=!1){const o=T(t);let s=null,i="";N(Ze(e),n=>{const r=A(S(n));if(r){const l=r;if(H.get(l)||H.set(l,l.style.overflow),l.style.overflow!=="hidden"&&(i=l.style.overflow),l.style.overflow==="hidden")return o.value=!0;if(o.value)return l.style.overflow="hidden"}},{immediate:!0});const a=()=>{const n=A(S(e));!n||o.value||(X&&(s=tt(n,"touchmove",r=>{rt(r)},{passive:!1})),n.style.overflow="hidden",o.value=!0)},u=()=>{const n=A(S(e));!n||!o.value||(X&&(s==null||s()),n.style.overflow=i,H.delete(n),o.value=!1)};return V(u),$({get(){return o.value},set(n){n?a():u()}})}function st(){let e=!1;const t=ne(!1);return(o,s)=>{if(t.value=s.value,e)return;e=!0;const i=lt(o,s.value);N(t,a=>i.value=a)}}st();const at=["skills-part"],ct=j({__name:"SkillsBlock",props:{header:{type:String},skills:{type:Array,default:Array()},skillsPart:{required:!0,type:String},animationDelay:{type:String,default:"0"}},setup(e){const t=T(!1),o=([i])=>{((i==null?void 0:i.isIntersecting)||!1)&&!t.value&&s(e.skills,.8,.4,Number(e.animationDelay)).play().then(()=>{console.log(`${e.skillsPart} animation complete`),t.value=!0})},s=(i,a,u,n=0)=>{const r=q.timeline({paused:!0}),l=(c,p,v)=>q.fromTo(c,{paused:!0,percent:0},{delay:v,ease:"sine.out",duration:p,percent:c.percent,roundProps:"percent"});for(let c=0;c<i.length;c++)r.add(l(i[c],a,c===0?n:0).play(),`-=${u}`);return r};return oe(()=>{}),(i,a)=>e.skills&&e.skills.length>0?Ce((z(),C("div",{key:0,"skills-part":e.skillsPart},[m("h2",null,[G(i.$slots,"header")]),(z(!0),C(ie,null,re(e.skills,(u,n)=>(z(),C("dl",{key:n},[m("dt",null,[G(i.$slots,"icon"),m("span",null,J(u.name),1),m("span",null,J(`${u.percent}%`),1)]),m("dd",null,[m("span",{style:Te(`background: ${u.color}; width: ${u.percent}%;`)},null,4)])]))),128))],8,at)),[[E(it),o]]):$e("",!0)}}),ut={},dt={width:"50",height:"53",viewBox:"0 0 50 53",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function mt(e,t){return z(),C("svg",dt,t[0]||(t[0]=[m("rect",{fill:"currentColor",width:"8.75561",height:"38.9138",transform:"matrix(0.686803 0.726844 -0.686803 0.726844 33.4077 0)"},null,-1),m("rect",{fill:"currentColor",width:"8.75561",height:"38.9138",transform:"matrix(0.686803 0.726844 -0.686803 0.726844 36.7485 17.6777)"},null,-1)]))}const pt=De(ut,[["render",mt]]),ft=[{directions:[{name:"Backend",percent:65,color:"#D9D9D9",icon:""},{name:"Frontend",percent:60,color:"#D9D9D9",icon:""},{name:"Scripting",percent:50,color:"#D9D9D9",icon:""}]},{skills:[{name:"HTML",percent:80,color:"#DC4C23",icon:""},{name:"CSS",percent:80,color:"#214CE5",icon:""},{name:"PHP",percent:70,color:"#4D588E",icon:""},{name:"JavaScript",percent:65,color:"#EFD81D",icon:""},{name:"TypeScript",percent:60,color:"#2F75C1",icon:""},{name:"SQL",percent:65,color:"#D47030",icon:""}]},{frameworks:[{name:"React",percent:50,color:"#58C4DC",icon:""},{name:"Vue",percent:50,color:"#41B883",icon:""},{name:"NestJS",percent:60,color:"#D9224C",icon:""},{name:"AdonisJS",percent:55,color:"#5743F7",icon:""},{name:"Express",percent:50,color:"#7EC726",icon:""},{name:"Koa",percent:55,color:"#60D4D2",icon:""},{name:"Laravel",percent:65,color:"#F72C1F",icon:""},{name:"Yii2",percent:70,color:"#40B3D8",icon:""},{name:"Phalcon",percent:70,color:"#16A880",icon:""}]},{databases:[{name:"MSSQL",percent:65,color:"#EE352C",icon:""},{name:"MySql",percent:75,color:"#005D88",icon:""},{name:"MongoDB",percent:65,color:"#4DA53F",icon:""},{name:"Redis",percent:50,color:"#D12B1F",icon:""},{name:"ClickHouse",percent:65,color:"#F7C600",icon:""}]}],gt=[{color:"#4d588e",title:"Фриланс",time:"01.11.2015",lineType:"default"},{color:"var(--c-color11)",title:"ООО УК МЖД Калугатеплосеть",time:"12.03.2018",lineType:"default",content:"Руководитель группы АСУ"},{color:"gray",title:"Отпуск",time:"12.03.2019",lineType:"dashed"},{color:"#4d588e",title:"Фриланс",time:"10.06.2020",lineType:"default"},{color:"var(--c-color11)",title:"ООО 'Стереоформа'",time:"20.11.2020",lineType:"default",content:"<a href='https://www.stereoforma.com/ru' target='_blank'>Fullstack developer</a>"},{color:"var(--c-color11)",title:"Modernize Games",time:"10.01.2021",lineType:"default",content:"<a href='https://modernizegames.com/team' target='_blank'>Senior Full Stack Developer</a>"},{color:"gray",title:"Отпуск",time:"08.01.2023",lineType:"dashed"},{color:"#4d588e",title:"Фриланс",time:"12.10.2024",lineType:"default"}],ht="<p>Привет, меня зовут Евгений и я занимаюсь разработкой ПО, написанием сайтов различной сложности (под ключ) + создание / деплой / настройка серверов.</p><p>Люблю компьютерные игры и все что связано с ними - имею опыт работы в Геймдеве в зарубежной компании в составе интернациональной команды разработчиков, где я занимался написанием с нуля <b>Мастер-Сервера</b> (<a href='https://github.com/uNetworking/uWebSockets.js' target='_blank'>uWebSockets.js</a> / <a href='https://clickhouse.com/' target='_blank'>Clickhouse</a>) и <b>сервера статистики</b> (<a href='https://github.com/uNetworking/uWebSockets.js' target='_blank'>uWebSockets.js</a> / <a href='https://nestjs.com/' target='_blank'>NestJS</a> / <a href='https://clickhouse.com/' target='_blank'>Clickhouse</a>, в т. ч. создание игровых серверов (в Azure), с автоматическим масштабированием в зависимости от загруженности серверов), мониторингом и логированием ошибок (+ интеграция <a href='https://sentry.io/' target='_blank'>Sentry</a>) серверов для многопользовательской игры <a href='https://kompete.game' target='_blank'>KOMPETE</a>, интеграцией цифровой игровой валюты (<a href='https://etherscan.io/token/0x1e0b2992079b620aa13a7c2e7c88d2e1e18e46e9' target='_blank'>ERC20</a> и ERC1155 для NFT-ассет-маркетплейса), а так же руководил разработкой / код ревью и поддержкой сайтов компании (<a href='https://kompete.game' target='_blank'>kompete.game</a> и <a href='https://modernizegames.com' target='_blank'>modernizegames.com</a>).</p>",vt={content:ht},bt=["page-name"],_t={class:"page__content"},kt={class:"page-about__intro"},yt={class:"page-about__intro-quote"},St=["innerHTML"],wt={class:"page__inner page__inner--2columns"},xt={class:"page-about__skills"},zt={class:"page-about__history",id:"history"},Ct=["innerHTML"],$t=`
--n-bezier: cubic-bezier(.4, 0, .2, 1);
--n-circle-border: 2px solid rgb(118, 124, 130);
--n-icon-color: rgb(118, 124, 130);
--n-content-font-size: 14px;
--n-content-text-color: rgb(51, 54, 57);
--n-line-color: rgb(219, 219, 223);
--n-meta-text-color: rgb(118, 124, 130);
--n-title-font-size: 16px;
--n-title-font-weight: 500;
--n-title-margin: 0 0 6px 0;
--n-title-text-color: var(--c-gray2);
--n-icon-size: 14px;
`,Lt=j({__name:"AboutPage",props:{pageName:{type:String,default:"about"}},setup(e){Me({title:"Портфолио | Обо мне",description:"Краткий рассказ из моей жизни о разработке",ogTitle:"Портфолио | Обо мне",ogLocale:"ru_RU",ogSiteName:"dev-made.github.io/website",ogType:"website",ogImage:"",ogUrl:new URL("about","https://dev-made.github.io/website").href});const t=T(),o=Be();let s;o.hasRoute("main")&&(s=o.getRoutes().find(u=>u.name==="main"));const i=T("Обо мне"),a=Pe(ft);return(u,n)=>{const r=Oe,l=Fe,c=We,p=ct,v=de,y=Ge,b=Ke,D=Re;return z(),C("div",{class:"page page-about","page-name":e.pageName},[g(D,null,{default:_(()=>{var w,x,I,L;return[m("div",{class:"page__container",ref_key:"root",ref:t},[g(r,{to:E(s).path??"/"},null,8,["to"]),g(c,{header:i.value},{icon:_(()=>[g(l,{size:"44",color:"var(--c-color1)"},{default:_(()=>[g(Ee)]),_:1})]),_:1},8,["header"]),m("div",_t,[m("div",kt,[m("div",yt,[g(l,{color:"var(--c-color11)",size:"40"},{default:_(()=>[g(pt)]),_:1})]),m("div",{innerHTML:E(vt).content},null,8,St)]),m("div",wt,[m("div",xt,[g(p,{skills:(w=a.find(d=>d.directions))==null?void 0:w.directions,"skills-part":"directions","animation-delay":"0"},{header:_(()=>n[0]||(n[0]=[F(" Направления ")])),_:1},8,["skills"]),g(p,{skills:(x=a.find(d=>d.skills))==null?void 0:x.skills,"skills-part":"skills"},{header:_(()=>n[1]||(n[1]=[F(" Навыки ")])),_:1},8,["skills"]),g(p,{skills:(I=a.find(d=>d.frameworks))==null?void 0:I.frameworks,"skills-part":"frameworks"},{header:_(()=>n[2]||(n[2]=[F(" Фреймворки ")])),_:1},8,["skills"]),g(p,{skills:(L=a.find(d=>d.databases))==null?void 0:L.databases,"skills-part":"databases"},{header:_(()=>n[3]||(n[3]=[F(" Базы данных ")])),_:1},8,["skills"])]),m("div",zt,[m("div",null,[g(v),g(b,null,{default:_(()=>[(z(!0),C(ie,null,re(E(gt),(d,ue)=>(z(),Ie(y,{key:ue,color:d.color?d.color:"",title:d.title?d.title:"",time:d.time?d.time:"","line-type":d.lineType??"default",style:$t},Le({_:2},[d.content?{name:"default",fn:_(()=>[m("div",{innerHTML:d.content},null,8,Ct)]),key:"0"}:void 0]),1032,["color","title","time","line-type"]))),128))]),_:1}),g(v)])])])])],512)]}),_:1})],8,bt)}}});export{Lt as default};
