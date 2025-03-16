import{_ as x}from"./PageDivider-DXwRfT_V.js";import{d as S,o,c as s,i,w as m,a as n,t as g,g as B,F as u,h as j,e as k,B as V,_ as C,j as w,k as R,l as q,m as M,b as D,N as I,n as z,p as N,u as U,q as A,s as H}from"./index-CpBH4S5m.js";import{S as $,_ as O,a as F}from"./CloseButton-BBNMkQxP.js";import{O as v}from"./Fancybox-BZwsjsxT.js";import"./gsap-DaYL4gH5.js";import"./three-yDIE3mZu.js";import"./glslify-CqkleIqs.js";import"./es-toolkit-Czm1cOl8.js";const T={class:"project__details_name"},Z={class:"project__details_url"},J={key:0,class:"project__details__section"},W={key:1,class:"project__details__section"},X={key:2,class:"project__details__section"},Y={key:0},G={key:3,class:"project__details__section"},K={class:"simple"},Q=S({__name:"ProjectDetails",props:{project:{}},setup(b){return(r,t)=>{const d=V,_=$;return o(),s("aside",null,[i(_,null,{default:m(()=>[n("span",T,g(r.project.name),1),n("span",Z,[i(d,{text:"",tag:"a",href:r.project.url,target:"_blank"},{default:m(()=>[B(g(r.project.urlShort),1)]),_:1},8,["href"])]),(o(!0),s(u,null,j(Object.entries(r.project),([l,c],f)=>(o(),s(u,{key:f},[l==="description"?(o(),s("div",J,[t[0]||(t[0]=n("h3",null,"Описание",-1)),n("div",null,g(c),1)])):k("",!0),l==="whatIDo"?(o(),s("div",W,[t[1]||(t[1]=n("h3",null,"Что делал",-1)),n("div",null,g(c),1)])):k("",!0),l==="techStack"?(o(),s("div",X,[t[2]||(t[2]=n("h3",null,"Технологический стек",-1)),(o(!0),s(u,null,j(c,(e,a)=>(o(),s("dl",{key:a},[n("dd",null,[n("ul",null,[(o(!0),s(u,null,j(e,(p,h)=>(o(),s(u,{key:h},[typeof p=="string"?(o(),s("li",Y,g(p),1)):typeof p=="object"?(o(!0),s(u,{key:1},j(p,(y,L)=>(o(),s("li",{key:L},g(y),1))),128)):k("",!0)],64))),128))])])]))),128))])):k("",!0),l==="other"?(o(),s("div",G,[t[3]||(t[3]=n("h3",null,"Прочее",-1)),n("ul",K,[(o(!0),s(u,null,j(c,(e,a)=>(o(),s("li",{key:a},g(e),1))),128))])])):k("",!0)],64))),128))]),_:1})])}}}),ee={},te={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function oe(b,r){return o(),s("svg",te,r[0]||(r[0]=[n("path",{d:"M16.75 2H6.75C5.647 2 4.75 2.897 4.75 4V20C4.75 21.103 5.647 22 6.75 22H16.75C17.853 22 18.75 21.103 18.75 20V4C18.75 2.897 17.853 2 16.75 2ZM6.75 20V4H16.75L16.752 20H6.75Z"},null,-1),n("path",{d:"M11.75 19C12.3023 19 12.75 18.5523 12.75 18C12.75 17.4477 12.3023 17 11.75 17C11.1977 17 10.75 17.4477 10.75 18C10.75 18.5523 11.1977 19 11.75 19Z"},null,-1)]))}const se=C(ee,[["render",oe]]),ne={class:"pp__action-panel"},re={class:"pp__preview"},ae=S({__name:"ProjectEntityFancybox",props:{options:{},project:{}},setup(b){const r=w("fb_mobile"),t=w("fb_container"),d=()=>({...f.options||{},autoFocus:!1,initialSize:"cover",wheel:"pan",Images:{zoom:!1,zoomOpacity:!1,Panzoom:{panMode:"drag",panOnlyZoomed:!0,on:{click:(e,a)=>{a.preventDefault()}}}},on:{done:(e,a)=>{var h;const p=e.getSlide();(h=p==null?void 0:p.panzoom)==null||h.zoomToCover({originY:-5e3,originX:0})}}}),_=(e,a)=>new URL(`${e}${a}`,import.meta.url).href,l=()=>{var e;return(e=f.project.images.mobile)==null?void 0:e.map(a=>({src:_("/assets/screens/",a),thumb:_("/assets/screens_thumb/",a)}))},c=()=>{var e;return(e=f.project.images.desktop)==null?void 0:e.map(a=>({src:_("/assets/screens/",a),thumb:_("/assets/screens_thumb/",a)}))};R(()=>{r.value.addEventListener("click",e=>{e.preventDefault(),v.show(l(),d())}),t.value.addEventListener("click",e=>{e.preventDefault(),v.show(c(),d())})}),q(()=>{v.unbind(r.value),v.unbind(t.value),v.close(),r.value.addEventListener("click",e=>{e.preventDefault(),v.show(l(),d())}),t.value.addEventListener("click",e=>{e.preventDefault(),v.show(c(),d())})}),M(()=>{v.destroy()});const f=b;return(e,a)=>{const p=se,h=I,y=$;return o(),s(u,null,[n("div",ne,[n("span",{ref_key:"fb_mobile",ref:r,class:"button pp__action-panel__button-mobile"},[i(h,{size:"32"},{default:m(()=>[i(p)]),_:1})],512)]),n("div",re,[i(y,null,{default:m(()=>[n("div",{ref_key:"fb_container",ref:t,class:"pp__preview__fb-wrapper"},[D(e.$slots,"desktop",{},void 0,!0),D(e.$slots,"mobile",{},void 0,!0)],512)]),_:3})])],64)}}}),ie=C(ae,[["__scopeId","data-v-2d497834"]]),le={class:"project__section"},ce={class:"project__preview"},pe={class:"pp__wrapper"},_e={class:"pp"},ue=["alt","src"],de=S({__name:"ProjectEntity",props:{project:{}},setup(b){const r=z("app:env");return(t,d)=>{const _=ie,l=$,c=Q;return o(),s("section",le,[n("div",ce,[n("div",pe,[i(l,null,{default:m(()=>[n("div",_e,[i(_,{options:{},project:t.project},{desktop:m(()=>[n("img",{width:"100%",alt:`${t.project.name}`,src:N(r).DEV?`/src/assets/static/screens_thumb/${t.project.images.desktop[0]}`:`/assets/screens_thumb/${t.project.images.desktop[0]}`},null,8,ue)]),_:1},8,["project"])])]),_:1})])]),i(c,{class:"project__details",project:t.project},null,8,["project"])])}}}),me=C(de,[["__scopeId","data-v-8b428770"]]),he=[{name:"PassHunter",url:"https://passhunter.ru",urlShort:"passhunter.ru",images:{desktop:["passhunter.png"]},description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit quae officia nulla dolor ut natus libero rerum, corrupti illum?",whatIDo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod laboriosam quidem cupiditate velit non pariatur vel officiis exercitationem sit.",techStack:[{entity:"Php",list:["Laravel(laravel-nova)","laravel-websockets","laravel-swoole"]},{entity:"JavaScript",list:["Vue2","Axios","Lodash"]},{entity:"CSS",list:["Scss","Bootstrap"]},{entity:"DB",list:["MySql","Redis(Redis-channels)"]}],other:["Nginx","Apache","Websockets","webpack"]},{name:"culinaria-club",url:"https://culinaria-club.ru",urlShort:"culinaria-club.ru",images:{desktop:["culinaria-club.png"]},description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit quae officia nulla dolor ut natus libero rerum, corrupti illum?",whatIDo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod laboriosam quidem cupiditate velit non pariatur vel officiis exercitationem sit.",techStack:[{entity:"Php",list:["Laravel(laravel-nova)","laravel-websockets","laravel-swoole"]},{entity:"JavaScript",list:["Vue2","Axios","Lodash"]},{entity:"CSS",list:["Scss","Bootstrap"]},{entity:"DB",list:["MySql","Redis(Redis-channels)"]}],other:["Nginx","Apache","Websockets","webpack"]}],ve=["page-name"],fe={class:"page__container"},Le=S({__name:"ProjectsPage",props:{pageName:{type:String,default:"projects"}},setup(b){U({title:"Мои проекты",description:"",ogTitle:"Мои проекты",ogLocale:"ru_RU",ogSiteName:"",ogType:"website",ogImage:"",ogUrl:new URL("projects","/").href});const r=A();let t;r.hasRoute("main")&&(t=r.getRoutes().find(l=>l.name==="main"));const d=w("Проекты"),_=w(Array());return _.value=he.reverse(),(l,c)=>{const f=O,e=H,a=I,p=F,h=me,y=x,L=$;return o(),s("div",{class:"page page-projects","page-name":b.pageName,onLoad:c[0]||(c[0]=()=>{console.log("loaded")})},[i(L,null,{default:m(()=>[n("div",fe,[i(f,{to:N(t).path??"/"},null,8,["to"]),i(p,{header:d.value},{icon:m(()=>[i(a,{size:"40",color:"var(--c-color1)"},{default:m(()=>[i(e)]),_:1})]),_:1},8,["header"]),(o(!0),s(u,null,j(_.value,(E,P)=>(o(),s(u,{key:P},[i(h,{project:E},null,8,["project"]),i(y)],64))),128))])]),_:1})],40,ve)}}});export{Le as default};
