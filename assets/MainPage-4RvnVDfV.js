import{d as g,r as h,o,c as i,a as e,b as s,e as f,f as _,w as l,_ as p,g as k,u as y,F as m,h as v,i as N,t as $}from"./index-CpBH4S5m.js";import"./gsap-DaYL4gH5.js";import"./three-yDIE3mZu.js";import"./glslify-CqkleIqs.js";import"./es-toolkit-Czm1cOl8.js";const B={key:0,class:"page__block page__block--intro"},S={key:0,class:"page__block_header"},w={class:"h2"},M={class:"icon__wrapper style-2"},x={class:"page__block_body"},P={class:"page__block_header"},C=["data-hover"],I={class:"icon__wrapper style-2"},V={class:"page__block_body"},F=g({__name:"MainPageBlock",props:{header:String,idx:Number,link:{type:String,default:"/"}},setup(t){return(a,r)=>{const n=h("router-link");return t.idx===0?(o(),i("div",B,[t.header?(o(),i("div",S,[e("span",w,[s(a.$slots,"block-header",{},void 0,!0)]),e("span",M,[s(a.$slots,"block-icon",{},void 0,!0)])])):f("",!0),e("div",x,[s(a.$slots,"block-body",{},void 0,!0)]),r[0]||(r[0]=e("div",{class:"gsbg first"},null,-1))])):(o(),_(n,{key:1,class:"page__block",to:t.link},{default:l(()=>[e("div",P,[e("span",{class:"h2","data-hover":t.header},[s(a.$slots,"block-header",{},void 0,!0)],8,C),e("span",I,[s(a.$slots,"block-icon",{},void 0,!0)])]),e("div",V,[s(a.$slots,"block-body",{},void 0,!0)]),r[1]||(r[1]=e("div",{class:"gsbg first"},null,-1))]),_:3},8,["to"]))}}}),L=p(F,[["__scopeId","data-v-fde76268"]]),T={},U={class:"page__block_intro"};function j(t,a){return o(),i("div",U,a[0]||(a[0]=[e("h2",null,"Евгений",-1),e("p",{class:"text-scrumble"},[e("span",{class:"color-accent"},"Fullstack"),k("  developer ")],-1)]))}const R=p(T,[["render",j]]),D=["page-name"],E={class:"page__container"},q=g({__name:"MainPage",props:{pageName:{type:String,default:"main"}},setup(t){y({title:"Главная страница портфолио",description:"",ogTitle:"Главная страница портфолио",ogLocale:"ru_RU",ogSiteName:"",ogType:"website",ogImage:"",ogUrl:new URL("about",import.meta.url).href});const a=[{header:"",animation:"",pageName:"",link:""},{header:"Обо мне",animation:"default",pageName:"about",link:"/about"},{header:"Проекты",animation:"default",pageName:"projects",link:"/projects"},{header:"Контакты",animation:"default",pageName:"contacts",link:"/contacts"}];return(r,n)=>{const b=R,u=L;return o(),i("div",{class:"page page-main","page-name":t.pageName},[e("div",E,[(o(),i(m,null,v(a,(d,c)=>(o(),i(m,{key:c},[c===0?(o(),_(u,{key:0,idx:c},{"block-body":l(()=>[N(b)]),_:2},1032,["idx"])):(o(),_(u,{key:1,animation:d.animation,header:d.header,link:d.link,idx:c},{"block-header":l(()=>[k($(d.header),1)]),"block-icon":l(()=>n[0]||(n[0]=[])),"block-body":l(()=>n[1]||(n[1]=[])),_:2},1032,["animation","header","link","idx"]))],64))),64))])],8,D)}}}),K=p(q,[["__scopeId","data-v-7998acdd"]]);export{K as default};
