import{d as g,r as h,o,c as i,a as e,b as n,e as f,f as _,w as r,_ as p,g as k,u as v,F as m,h as y,i as N,t as $}from"./index-om0qpsu1.js";import"./gsap-DaYL4gH5.js";import"./three-yDIE3mZu.js";import"./glslify-CqkleIqs.js";import"./es-toolkit-Czm1cOl8.js";const w={key:0,class:"page__block page__block--intro"},B={key:0,class:"page__block_header"},S={class:"h2"},M={class:"icon__wrapper style-2"},x={class:"page__block_body"},P={class:"page__block_header"},C=["data-hover"],I={class:"icon__wrapper style-2"},V={class:"page__block_body"},F=g({__name:"MainPageBlock",props:{header:String,idx:Number,link:{type:String,default:"/"}},setup(t){return(a,d)=>{const s=h("router-link");return t.idx===0?(o(),i("div",w,[t.header?(o(),i("div",B,[e("span",S,[n(a.$slots,"block-header",{},void 0,!0)]),e("span",M,[n(a.$slots,"block-icon",{},void 0,!0)])])):f("",!0),e("div",x,[n(a.$slots,"block-body",{},void 0,!0)]),d[0]||(d[0]=e("div",{class:"gsbg first"},null,-1))])):(o(),_(s,{key:1,class:"page__block",to:t.link},{default:r(()=>[e("div",P,[e("span",{class:"h2","data-hover":t.header},[n(a.$slots,"block-header",{},void 0,!0)],8,C),e("span",I,[n(a.$slots,"block-icon",{},void 0,!0)])]),e("div",V,[n(a.$slots,"block-body",{},void 0,!0)]),d[1]||(d[1]=e("div",{class:"gsbg first"},null,-1))]),_:3},8,["to"]))}}}),L=p(F,[["__scopeId","data-v-fde76268"]]),T={},U={class:"page__block_intro"};function j(t,a){return o(),i("div",U,a[0]||(a[0]=[e("h2",null,"Евгений",-1),e("p",{class:"text-scrumble"},[e("span",{class:"color-accent"},"Fullstack"),k("  developer ")],-1)]))}const R=p(T,[["render",j]]),D=["page-name"],E={class:"page__container"},q=g({__name:"MainPage",props:{pageName:{type:String,default:"main"}},setup(t){v({title:"Портфолио | Главная страница",description:"",ogTitle:"Портфолио | Главная страница",ogLocale:"ru_RU",ogSiteName:"dev-made.github.io/website",ogType:"website",ogImage:"",ogUrl:new URL("main","https://dev-made.github.io/website").href});const a=[{header:"",animation:"",pageName:"",link:""},{header:"Обо мне",animation:"default",pageName:"about",link:"/about"},{header:"Проекты",animation:"default",pageName:"projects",link:"/projects"},{header:"Контакты",animation:"default",pageName:"contacts",link:"/contacts"}];return(d,s)=>{const b=R,u=L;return o(),i("div",{class:"page page-main","page-name":t.pageName},[e("div",E,[(o(),i(m,null,y(a,(l,c)=>(o(),i(m,{key:c},[c===0?(o(),_(u,{key:0,idx:c},{"block-body":r(()=>[N(b)]),_:2},1032,["idx"])):(o(),_(u,{key:1,animation:l.animation,header:l.header,link:l.link,idx:c},{"block-header":r(()=>[k($(l.header),1)]),"block-icon":r(()=>s[0]||(s[0]=[])),"block-body":r(()=>s[1]||(s[1]=[])),_:2},1032,["animation","header","link","idx"]))],64))),64))])],8,D)}}}),K=p(q,[["__scopeId","data-v-e8817408"]]);export{K as default};
