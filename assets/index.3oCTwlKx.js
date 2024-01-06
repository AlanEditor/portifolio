import{d as y,L as B,P as N,M as O,N as G,c as D,r as H,O as f,Q as Z,R as F,m as M,g as b,S as J,T as K,U as Y,V as Q,W,X,Y as p,_,t as r,v as c,x as e,y as l,C as j,D as k,Z as w,i as ee,z as m,$,a0 as S,a1 as h}from"./entry.eFIRfnXT.js";import{g as d}from"./translationService.Z3ELzQ0v.js";const te=y({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,a){const s=await f[t.name]().then(n=>n.default||n);return()=>b(s,t.layoutProps,a.slots)}}),ae=y({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,a){const s=M(),n=B(N),o=n===O()?G():n,i=D(()=>{let u=p(t.name)??o.meta.layout??"default";return u&&!(u in f)&&t.fallback&&(u=p(t.fallback)),u}),g=H();a.expose({layoutRef:g});const x=s.deferHydration();return()=>{const u=i.value&&i.value in f,v=o.meta.layoutTransition??Z;return F(Q,u&&v,{default:()=>b(Y,{suspensible:!0,onResolve:()=>{K(x)}},{default:()=>b(oe,{layoutProps:J(a.attrs,{ref:g}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!v},a.slots)})}).default()}}}),oe=y({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,a){const s=t.name;return t.shouldProvide&&W(X,{isCurrent:n=>s===(n.meta.layout??"default")}),()=>{var n,o;return!s||typeof s=="string"&&!(s in f)?(o=(n=a.slots).default)==null?void 0:o.call(n):b(te,{key:s,layoutProps:t.layoutProps,name:s},a.slots)}}}),se=""+new URL("fundo-imagem.xxYpY26G.png",import.meta.url).href,ne={name:"initialSection",data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{getTranslation(t,a){return d(t,a)}},watch:{$route(t,a){this.actualLanguage=t.query.lang}}},L=t=>(j("data-v-d8a7c9e7"),t=t(),k(),t),ie={class:"relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20"},re=L(()=>e("img",{src:se,alt:"",class:"absolute inset-0 -z-10 h-full w-full object-cover"},null,-1)),ce={class:"mx-auto max-w-full px-6 lg:px-8"},le={class:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"},de={class:"text-center"},ue=L(()=>e("h3",{class:"text-4xl font-bold tracking-tight text-white sm:text-6xl mb-5 animate__animated animate__fadeInDown"},"Alan Santos",-1)),me=L(()=>e("hr",{class:"hr-effect"},null,-1)),pe={class:"text-2xl font-bold tracking-tight text-white sm:text-5xl mt-8 animate__animated animate__fadeInUp"};function _e(t,a,s,n,o,i){return r(),c("div",null,[e("div",ie,[re,e("div",ce,[e("div",null,[e("div",le,[e("div",de,[ue,me,e("h3",pe,l(i.getTranslation("Engenheiro de Software",o.actualLanguage)),1)])])])])])])}const I=_(ne,[["render",_e],["__scopeId","data-v-d8a7c9e7"]]),ge=""+new URL("alan.ehUaHxzs.png",import.meta.url).href,he={name:"aboutSection",data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{downloadFile(){const t=this.actualLanguage==="en"?"alan_santos_cv_english.pdf":"alan_santos_cv.pdf",a="/files/"+t,s=document.createElement("a");s.href=a,s.download=t,s.click()},openPdfInNewTab(){const a="files/"+(this.actualLanguage==="en"?"alan_santos_cv_english.pdf":"alan_santos_cv.pdf");window.open(a,"_blank")},getTranslation(t,a){return d(t,a)}},watch:{$route(t,a){this.actualLanguage=t.query.lang}}},R=t=>(j("data-v-4528c4e9"),t=t(),k(),t),xe={id:"about"},ve={class:"relative z-10 bg-gray-900 pb-20 sm:pb-24 xl:pb-0"},fe=R(()=>e("div",{class:"absolute inset-0 overflow-hidden","aria-hidden":"true"},[e("div",{class:"absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl"},[e("div",{class:"aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25",style:{"clip-path":"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})])],-1)),be={class:"mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"},ye=R(()=>e("div",{class:"-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none"},[e("div",{class:"relative aspect-square h-full md:-mx-8 xl:mx-0 xl:aspect-auto"},[e("img",{class:"absolute inset-0 h-full w-full rounded-2xl bg-image hover:scale-105 transition duration-300 object-cover shadow-2xl",src:ge,alt:""})])],-1)),we={class:"w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24"},$e={class:"relative isolate pt-6 sm:pt-2"},Se={class:"leading-8 text-white sm:leading-9"},Le={class:"text-6xl font-bold"},je={class:"mt-6 text-lg"},ke=w('<div class="mt-10" data-v-4528c4e9><a href="https://www.linkedin.com/in/alan-santos-profile/" target="_blank" class="mr-4 px-6 py-3 bg-transparent text-white rounded-lg" data-v-4528c4e9><i class="bi bi-linkedin mr-2" data-v-4528c4e9></i> LinkedIn </a><a href="https://github.com/AlanEditor" target="_blank" class="mr-4 px-6 py-3 bg-transparent text-white rounded-lg" data-v-4528c4e9><i class="bi bi-github mr-2" data-v-4528c4e9></i> GitHub </a></div>',1),Ie={class:"my-10 flex justify-center md:justify-start mx-2"};function Re(t,a,s,n,o,i){return r(),c("div",xe,[e("div",ve,[fe,e("div",be,[ye,e("div",we,[e("figure",$e,[e("blockquote",Se,[e("h1",Le,l(i.getTranslation("Olá",o.actualLanguage))+",",1),e("p",je,l(i.getTranslation("Sobre-mim",o.actualLanguage)),1)])]),ke,e("div",Ie,[e("button",{type:"button",class:"px-6 py-3 bg-transparent border border-white hover:border-blue-500 hover:text-blue-500 text-white rounded-lg",style:{"z-index":"1000"},onClick:a[0]||(a[0]=g=>i.openPdfInNewTab())},"Download CV")])])])])])}const T=_(he,[["render",Re],["__scopeId","data-v-4528c4e9"]]),Te=""+new URL("ensinio.7fqJmFjL.png",import.meta.url).href,qe=""+new URL("iporto.ZKpnBZJ8.png",import.meta.url).href,Ve=""+new URL("casa_de_ge.W7bZfft_.png",import.meta.url).href,Pe=""+new URL("cm.cz2JZ1_G.png",import.meta.url).href,Ue={},Ce={class:"mt-32"},Ae=w('<div class="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10"><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><a href="https://www.ensinio.com" target="_blank"><img src="'+Te+'" class="object-cover object-center"></a></div><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><a href="https://www.iporto.com.br" target="_blank"><img src="'+qe+'" class="object-cover object-center"></a></div><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><a href="https://casadege.com.br" target="_blank"><img src="'+Ve+'" class="object-cover object-center"></a></div><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><img src="'+Pe+'" class="object-cover object-center"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div>',1),ze=[Ae];function Ee(t,a,s,n,o,i){return r(),c("div",Ce,ze)}const Be=_(Ue,[["render",Ee]]),Ne={name:"expirienceSection",components:{jobsImagesComponent:Be},data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{getTranslation(t,a){return d(t,a)}},watch:{$route(t,a){this.actualLanguage=t.query.lang}}},Oe={class:"bg-black pt-52",id:"project"},Ge={class:"relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"},De={class:"mx-auto max-w-2xl text-center lg:max-w-4xl"},He={class:"text-5xl font-bold tracking-tight text-white sm:text-6xl"},Ze={class:"mt-4 text-gray-500"},Fe={class:"mt-6 grid grid-cols-1 lg:grid-cols-4"},Me={class:"group relative opacity-75 hover:opacity-100 hover:scale-105 transition duration-300 hover:border-white rounded-lg p-6"},Je=e("div",null,null,-1),Ke=e("div",{class:"mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"},null,-1),Ye={class:"text-white text-center"},Qe=["href"],We=e("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),Xe=[We];function et(t,a,s,n,o,i){const g=ee("jobsImagesComponent");return r(),c("div",Oe,[e("div",Ge,[e("div",De,[e("h2",He,l(i.getTranslation("Projetos em que atuei",o.actualLanguage)),1),e("p",Ze,l(i.getTranslation("descricao de projeto",o.actualLanguage)),1)]),m(g),e("div",Fe,[e("div",Me,[Je,Ke,e("h3",Ye,[(r(!0),c($,null,S(t.jobs,(x,u)=>(r(),c("a",{key:u,href:x.link,target:"_blank"},Xe,8,Qe))),128))])])])])])}const q=_(Ne,[["render",et]]),tt=""+new URL("laravel.2w5j14HS.png",import.meta.url).href,at=""+new URL("php.6SAekbGD.png",import.meta.url).href,ot=""+new URL("vue.PxwK4KdQ.png",import.meta.url).href,st=""+new URL("docker.7nh1Ehpu.png",import.meta.url).href,nt=""+new URL("mysql.ZuOIHGwn.png",import.meta.url).href,it=""+new URL("node.XTxab9r5.png",import.meta.url).href,rt={},ct={class:"mx-auto grid w-full max-w-lg grid-cols-3 items-center gap-y-5 sm:gap-y-5 lg:mx-0 lg:max-w-none lg:pl-8"},lt=w('<div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img src="'+tt+'" class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img src="'+at+'" class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img src="'+ot+'" class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img src="'+st+'" class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img src="'+nt+'" class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img src="'+it+'" class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div>',6),dt=[lt];function ut(t,a,s,n,o,i){return r(),c("div",ct,dt)}const V=_(rt,[["render",ut]]),mt={class:"bg-image",id:"stack"},pt={class:"bg-gradient-to-t from-black bottom-0 py-24 sm:py-32"},_t={class:"mx-auto max-w-7xl px-6 lg:px-8"},gt={class:"grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"},ht={class:"mx-auto w-full max-w-xl lg:mx-0"},xt={class:"mt-2 text-5xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl text-center lg:text-left"},vt={class:"mt-6 text-lg leading-8 text-gray-300 text-center lg:text-left"},ft={name:"expirienceSection",components:{stackImagesComponent:V},data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{getTranslation(t,a){return d(t,a)}},watch:{$route(t,a){this.actualLanguage=t.query.lang}}},bt=Object.assign(ft,{setup(t){return(a,s)=>(r(),c("div",mt,[e("div",null,[e("div",pt,[e("div",_t,[e("div",gt,[e("div",ht,[e("h2",xt,l(p(d)("Minha Stack",a.actualLanguage)),1),e("p",vt,l(p(d)("descricao da stack",a.actualLanguage)),1)]),m(V)])])])])]))}}),P=_(bt,[["__scopeId","data-v-b93a6d77"]]),yt={class:"bg-gradient-to-t from-black to-slate-950 py-24 sm:py-32",id:"testimonials"},wt={class:"mx-auto max-w-7xl px-6 lg:px-8"},$t={class:"mx-auto max-w-xl text-center mb-10"},St={class:"text-4xl font-bold tracking-tight text-white sm:text-6xl"},Lt={class:"scroll-container"},jt={class:"grid-cols-1 lg:grid-cols-1 grid p-12"},kt={class:"rounded-2xl bg-transparent border border-blue-500 opacity-75 hover:opacity-100 hover:scale-105 transition duration-300 p-8 text-sm leading-6"},It={class:"text-white"},Rt={class:"mt-6 flex items-center gap-x-4"},Tt={class:"font-semibold text-gray-50"},qt={name:"expirienceSection",data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{getTranslation(t,a){return d(t,a)}},watch:{$route(t,a){this.actualLanguage=t.query.lang}}},Vt=Object.assign(qt,{setup(t){const a=[{body:"Alan assumiu a desafiadora tarefa de desenvolver uma plataforma online interna para os associados da Federação das Congregações Marianas de Santos, através da nossa Seção de Tecnologia. Sem dúvidas, um projeto que provou ser extremamente inovador. Seu trabalho não apenas elevou o padrão de nossas iniciativas tecnológicas, mas também criou um modelo que pode ser replicado em outras organizações semelhantes.",author:{name:"Gabriel Valério"}},{body:"Um excelente parceiro de serviço, sempre bem humorado, deixa o clima super leve e agradável no time, além de ser muito profissional e caprichoso nas entregas!",author:{name:"Luis Guilherme"}},{body:"Tive o privilégio de trabalhar lado a lado com o Alan nesses últimos meses no escopo de Backend da Ensinio. Sua dedicação e habilidades técnicas excepcionais fazem dele um profissional excelente. Seu comprometimento com a excelência e sua atitude positiva têm um impacto significativo no nível das entregas. Cumprindo as datas sem abdicar de qualidade, sua ética de trabalho exemplar serve como um modelo para todos nós.",author:{name:"Adriano Christian"}},{body:"[...] Alan também é um profissional excepcional. Atenção aos detalhes, comprometimento e qualidade nas entregas sempre foram características visíveis em todos momentos que tive oportunidade de trocar conhecimento com ele.",author:{name:"Gabriel Coutinho"}}];return(s,n)=>(r(),c("div",yt,[e("div",wt,[e("div",$t,[e("h2",St,l(p(d)("provas-sociais",s.actualLanguage)),1)]),e("div",null,[e("div",Lt,[e("div",jt,[e("div",null,[(r(),c($,null,S(a,o=>e("div",{key:o.author.handle,class:"pt-8 sm:w-1/2 md:w-full ml-2"},[e("figure",kt,[e("blockquote",It,[e("p",null,'"'+l(p(d)(o.author.name,s.actualLanguage))+'"',1)]),e("figcaption",Rt,[e("div",null,[e("div",Tt,l(o.author.name),1)])])])])),64))])])])])])]))}}),U=_(Vt,[["__scopeId","data-v-b9e264ca"]]),Pt={id:"contact"},Ut={class:"relative isolate -z-10 mt-32 sm:mt-40"},Ct={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},At={class:"mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"},zt={class:"w-full flex-auto"},Et={class:"text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"},Bt={class:"mt-6 text-lg leading-8 text-gray-300 text-center"},Nt={class:"mt-10 md:flex justify-center gap-x-24 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"},Ot={class:"mt-1"},Gt=e("div",{class:"absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl","aria-hidden":"true"},[e("div",{class:"aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25",style:{"clip-path":"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"}})],-1),Dt={name:"contactSection",data(){return{actualLanguage:this.$router.currentRoute.value.query.lang}},methods:{getTranslation(t,a){return d(t,a)}},watch:{$route(t,a){this.actualLanguage=t.query.lang}}},Ht=Object.assign(Dt,{setup(t){const a=[{name:"Email",icon:"bi bi-envelope-fill",value:"alansantos04@hotmail.com"},{name:"Fone",icon:"bi bi-whatsapp",value:"+55 (13) 98862-1433"}];return(s,n)=>(r(),c("div",Pt,[e("div",Ut,[e("div",Ct,[e("div",At,[e("div",zt,[e("h2",Et,l(p(d)("Vamos trabalhar juntos",s.actualLanguage)),1),e("p",Bt,l(p(d)("Entre em contato",s.actualLanguage)),1),e("div",Nt,[(r(),c($,null,S(a,o=>e("div",{key:o.name,class:"flex gap-x-3 mb-10 justify-center"},[e("i",{class:h(o.icon),style:{"font-size":"32px"}},null,2),e("p",Ot,l(o.value),1)])),64))])])])]),Gt])]))}}),C=Ht,Zt={name:"IndexPage",layout:"default",components:{initialSection:I,aboutSection:T,expirienceSection:q,stackSection:P,testimonialSection:U,contactSection:C},data(){return{aboutVisible:!1,expirienceVisible:!1,stackVisible:!1,testimonialVisible:!1,contactVisible:!1}},methods:{handleScroll(){[{ref:"aboutSection",prop:"aboutVisible"},{ref:"expirienceSection",prop:"expirienceVisible"},{ref:"stackSection",prop:"stackVisible"},{ref:"testimonialSection",prop:"testimonialVisible"},{ref:"contactSection",prop:"contactVisible"}].forEach(({ref:a,prop:s})=>{const o=this.$refs[a].getBoundingClientRect();this[s]=o.top<window.innerHeight&&o.bottom>=0})}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}};function Ft(t,a,s,n,o,i){const g=ae,x=I,u=T,v=q,A=P,z=U,E=C;return r(),c("div",null,[m(g,{name:"default"}),e("main",null,[m(x),e("div",{ref:"aboutSection",class:h(["section",{"animate__animated animate__fadeIn":o.aboutVisible}])},[m(u)],2),e("div",{ref:"expirienceSection",class:h(["section",{"animate__animated animate__fadeIn":o.expirienceVisible}])},[m(v)],2),e("div",{ref:"stackSection",class:h(["section",{"animate__animated animate__fadeIn":o.stackVisible}])},[m(A)],2),e("div",{ref:"testimonialSection",class:h(["section",{"animate__animated animate__fadeIn":o.testimonialVisible}])},[m(z)],2),e("div",{ref:"contactSection",class:h(["section",{"animate__animated animate__fadeIn":o.contactVisible}])},[m(E)],2)])])}const Kt=_(Zt,[["render",Ft],["__scopeId","data-v-c730f5b1"]]);export{Kt as default};
