import { b as buildAssetsURL } from '../../renderer.mjs';
import { defineComponent, h, inject, computed, unref, ref, Suspense, nextTick, mergeProps, Transition, provide, useSSRContext, resolveComponent } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue/dist/vue.cjs.prod.js';
import { P as PageRouteSymbol, d as useRoute, e as appLayoutTransition, f as _wrapIf, L as LayoutMetaSymbol, g as useNuxtApp, _ as _export_sfc } from '../server.mjs';
import { useRoute as useRoute$1 } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/devalue/index.js';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/ufo/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/destr/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/scule/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/klona/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/defu/dist/defu.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/ohash/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/pathe/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unhead/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unctx/dist/index.mjs';

const layouts = {
  default: () => import('./default-5kA4Ow_h.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      let layout2 = (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => {
          var _a;
          return name === ((_a = route.meta.layout) != null ? _a : "default");
        }
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const Sobre = {
  pt: "Sobre",
  en: "About"
};
const Projetos = {
  pt: "Projetos",
  en: "Projects"
};
const Tecnologias = {
  pt: "Tecnologias",
  en: "Technologies"
};
const Contato = {
  pt: "Contato",
  en: "Contact"
};
const translate = {
  Sobre,
  Projetos,
  Tecnologias,
  "Recomenda\xE7\xF5es": {
    pt: "Recomenda\xE7\xF5es",
    en: "Testimonials"
  },
  Contato,
  "Engenheiro de Software": {
    pt: "Engenheiro de Software",
    en: "Software Engineer"
  },
  "Ol\xE1": {
    pt: "Ol\xE1",
    en: "Hi"
  },
  "Sobre-mim": {
    pt: "me chamo Alan Santos, sou engenheiro de software pleno. Especialista em desenvolvimento web com mais de 3 anos de experi\xEAncia. Possuo experi\xEAncia com equipes multidiciplinares e inovadoras. Atuei em projetos de grande escala, gerando alto valor.",
    en: "my name is Alan Santos, and I am a full-stack software engineer. I specialize in web development with over 3 years of experience. I have worked in diverse and innovative teams, contributing to large-scale projects that deliver significant value."
  },
  "Projetos em que atuei": {
    pt: "Projetos em que atuei",
    en: "Projects I have worked on"
  },
  "descricao de projeto": {
    pt: "Com anos de experi\xEAncia, autei em desenvolvimento de produtos de grande escala e segmentos diversos em ambientes \xE1geis. Atualmente, tamb\xE9m, estou desenvolvendo uma plataforma de e-learning interna como projeto social.",
    en: "With over 3 years of experience, I have worked on large-scale projects in various industries. Currently, I am developing an internal e-learning platform as a project social."
  },
  "Minha Stack": {
    pt: "Minha Stack",
    en: "My Stack"
  },
  "descricao da stack": {
    pt: "Ao longo dos anos pude aprimorar meus conhecimentos e me especializar nessas tecnologias.",
    en: "Through my years of learning and specialization, I have improved my knowledge and specialize in these technologies."
  },
  "provas-sociais": {
    pt: "Recomenda\xE7\xF5es",
    en: "What they have been talking about me"
  },
  "Gabriel Val\xE9rio": {
    pt: "Alan assumiu a desafiadora tarefa de desenvolver uma plataforma online interna para os associados da Federa\xE7\xE3o das Congrega\xE7\xF5es Marianas de Santos, atrav\xE9s da nossa Se\xE7\xE3o de Tecnologia. Sem d\xFAvidas, um projeto que provou ser extremamente inovador. Seu trabalho n\xE3o apenas elevou o padr\xE3o de nossas iniciativas tecnol\xF3gicas, mas tamb\xE9m criou um modelo que pode ser replicado em outras organiza\xE7\xF5es semelhantes.",
    en: "Alan took on the challenging task of developing an internal online platform for the members of the Federation of Marian Congregations of Santos, through our Technology Section. Undoubtedly, a project that proved to be extremely innovative. His work not only raised the standard of our technological initiatives but also created a model that can be replicated in other similar organizations."
  },
  "Luis Guilherme": {
    pt: "Um excelente parceiro de servi\xE7o, sempre bem humorado, deixa o clima super leve e agrad\xE1vel no time, al\xE9m de ser muito profissional e caprichoso nas entregas!",
    en: "An excellent service partner, always cheerful, brings a super light and pleasant atmosphere to the team, and is very professional and meticulous in deliveries!"
  },
  "Adriano Christian": {
    pt: "Tive o privil\xE9gio de trabalhar lado a lado com o Alan nesses \xFAltimos meses no escopo de Backend da Ensinio. Sua dedica\xE7\xE3o e habilidades t\xE9cnicas excepcionais fazem dele um profissional excelente. Seu comprometimento com a excel\xEAncia e sua atitude positiva t\xEAm um impacto significativo no n\xEDvel das entregas. Cumprindo as datas sem abdicar de qualidade, sua \xE9tica de trabalho exemplar serve como um modelo para todos n\xF3s.",
    en: "I had the privilege of working side by side with Alan in recent months in the Backend scope of Ensinio. His dedication and exceptional technical skills make him an excellent professional. His commitment to excellence and positive attitude have a significant impact on the level of deliveries. Meeting deadlines without compromising quality, his exemplary work ethic serves as a model for all of us."
  },
  "Gabriel Coutinho": {
    pt: "[...] Alan tamb\xE9m \xE9 um profissional excepcional. Aten\xE7\xE3o aos detalhes, comprometimento e qualidade nas entregas sempre foram caracter\xEDsticas vis\xEDveis em todos momentos que tive oportunidade de trocar conhecimento com ele.",
    en: "[...] Alan is also an exceptional professional. Attention to detail, commitment, and quality in deliveries have always been visible characteristics in every moment I had the opportunity to exchange knowledge with him."
  },
  "Vamos trabalhar juntos": {
    pt: "Vamos trabalhar juntos!",
    en: "Let's work together!"
  },
  "Entre em contato": {
    pt: "Entre em contato. Um grande projeto nos espera.",
    en: "Contact me. A big project awaits us."
  }
};
function getTranslation(key, language) {
  const translation = translate[key][language] ? translate[key][language] : translate[key]["pt"];
  return translation || key;
}
const _imports_0$3 = "" + buildAssetsURL("fundo-imagem.xxYpY26G.png");
const _sfc_main$8 = {
  name: "initialSection",
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    getTranslation(key, language) {
      return getTranslation(key, language);
    }
  },
  watch: {
    $route(to, from) {
      this.actualLanguage = to.query.lang;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d8a7c9e7><div class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20" data-v-d8a7c9e7><img${ssrRenderAttr("src", _imports_0$3)} alt class="absolute inset-0 -z-10 h-full w-full object-cover" data-v-d8a7c9e7><div class="mx-auto max-w-full px-6 lg:px-8" data-v-d8a7c9e7><div data-v-d8a7c9e7><div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" data-v-d8a7c9e7><div class="text-center" data-v-d8a7c9e7><h3 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-5 animate__animated animate__fadeInDown" data-v-d8a7c9e7>Alan Santos</h3><hr class="hr-effect" data-v-d8a7c9e7><h3 class="text-2xl font-bold tracking-tight text-white sm:text-5xl mt-8 animate__animated animate__fadeInUp" data-v-d8a7c9e7>${ssrInterpolate($options.getTranslation("Engenheiro de Software", $data.actualLanguage))}</h3></div></div></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/initialSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-d8a7c9e7"]]);
const _imports_0$2 = "" + buildAssetsURL("alan.ehUaHxzs.png");
const _sfc_main$7 = {
  name: "aboutSection",
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    downloadFile() {
      const file = this.actualLanguage === "en" ? "alan_santos_cv_english.pdf" : "alan_santos_cv.pdf";
      const fileUrl = "/files/" + file;
      const link = (void 0).createElement("a");
      link.href = fileUrl;
      link.download = file;
      link.click();
    },
    getTranslation(key, language) {
      return getTranslation(key, language);
    }
  },
  watch: {
    $route(to, from) {
      this.actualLanguage = to.query.lang;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "about" }, _attrs))} data-v-e68d9e44><div class="relative z-10 bg-gray-900 pb-20 sm:pb-24 xl:pb-0" data-v-e68d9e44><div class="absolute inset-0 overflow-hidden" aria-hidden="true" data-v-e68d9e44><div class="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl" data-v-e68d9e44><div class="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}" data-v-e68d9e44></div></div></div><div class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch" data-v-e68d9e44><div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none" data-v-e68d9e44><div class="relative aspect-square h-full md:-mx-8 xl:mx-0 xl:aspect-auto" data-v-e68d9e44><img class="absolute inset-0 h-full w-full rounded-2xl bg-image hover:scale-105 transition duration-300 object-cover shadow-2xl"${ssrRenderAttr("src", _imports_0$2)} alt data-v-e68d9e44></div></div><div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24" data-v-e68d9e44><figure class="relative isolate pt-6 sm:pt-2" data-v-e68d9e44><blockquote class="leading-8 text-white sm:leading-9" data-v-e68d9e44><h1 class="text-6xl font-bold" data-v-e68d9e44>${ssrInterpolate($options.getTranslation("Ol\xE1", $data.actualLanguage))},</h1><p class="mt-6 text-lg" data-v-e68d9e44>${ssrInterpolate($options.getTranslation("Sobre-mim", $data.actualLanguage))}</p></blockquote></figure><div class="mt-10" data-v-e68d9e44><a href="https://www.linkedin.com/in/alan-santos-profile/" target="_blank" class="mr-4 px-6 py-3 bg-transparent text-white rounded-lg" data-v-e68d9e44><i class="bi bi-linkedin mr-2" data-v-e68d9e44></i> LinkedIn </a><a href="https://github.com/AlanEditor" target="_blank" class="mr-4 px-6 py-3 bg-transparent text-white rounded-lg" data-v-e68d9e44><i class="bi bi-github mr-2" data-v-e68d9e44></i> GitHub </a></div><div class="my-10 flex justify-center md:justify-start mx-2" data-v-e68d9e44><button type="button" class="px-6 py-3 bg-transparent border border-white hover:border-blue-500 hover:text-blue-500 text-white rounded-lg" style="${ssrRenderStyle({ "z-index": "1000" })}" data-v-e68d9e44>Download CV</button></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e68d9e44"]]);
const _imports_0$1 = "" + buildAssetsURL("ensinio.7fqJmFjL.png");
const _imports_1$1 = "" + buildAssetsURL("iporto.ZKpnBZJ8.png");
const _imports_2$1 = "" + buildAssetsURL("casa_de_ge.W7bZfft_.png");
const _imports_3$1 = "" + buildAssetsURL("cm.cz2JZ1_G.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-32" }, _attrs))}><div class="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-x-8"><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><a href="https://www.ensinio.com" target="_blank"><img${ssrRenderAttr("src", _imports_0$1)} class="object-cover object-center"></a></div><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><a href="https://www.iporto.com.br" target="_blank"><img${ssrRenderAttr("src", _imports_1$1)} class="object-cover object-center"></a></div><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><a href="https://casadege.com.br" target="_blank"><img${ssrRenderAttr("src", _imports_2$1)} class="object-cover object-center"></a></div><div class="overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition duration-300"><img${ssrRenderAttr("src", _imports_3$1)} class="object-cover object-center"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/images/jobsImagesComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const jobsImagesComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  name: "expirienceSection",
  components: {
    jobsImagesComponent
  },
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    getTranslation(key, language) {
      return getTranslation(key, language);
    }
  },
  watch: {
    $route(to, from) {
      this.actualLanguage = to.query.lang;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobsImagesComponent = resolveComponent("jobsImagesComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg-black pt-52",
    id: "project"
  }, _attrs))}><div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"><div class="mx-auto max-w-2xl text-center lg:max-w-4xl"><h2 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">${ssrInterpolate($options.getTranslation("Projetos em que atuei", $data.actualLanguage))}</h2><p class="mt-4 text-gray-500">${ssrInterpolate($options.getTranslation("descricao de projeto", $data.actualLanguage))}</p></div>`);
  _push(ssrRenderComponent(_component_jobsImagesComponent, null, null, _parent));
  _push(`<div class="mt-6 grid grid-cols-1 lg:grid-cols-4"><div class="group relative opacity-75 hover:opacity-100 hover:scale-105 transition duration-300 hover:border-white rounded-lg p-6"><div></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div><h3 class="text-white text-center"><!--[-->`);
  ssrRenderList(_ctx.jobs, (job, index2) => {
    _push(`<a${ssrRenderAttr("href", job.link)} target="_blank"><span aria-hidden="true" class="absolute inset-0"></span></a>`);
  });
  _push(`<!--]--></h3></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/expirienceSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("laravel.2w5j14HS.png");
const _imports_1 = "" + buildAssetsURL("php.6SAekbGD.png");
const _imports_2 = "" + buildAssetsURL("vue.PxwK4KdQ.png");
const _imports_3 = "" + buildAssetsURL("docker.7nh1Ehpu.png");
const _imports_4 = "" + buildAssetsURL("mysql.ZuOIHGwn.png");
const _imports_5 = "" + buildAssetsURL("node.XTxab9r5.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto grid w-full max-w-lg grid-cols-3 items-center gap-y-5 sm:gap-y-5 lg:mx-0 lg:max-w-none lg:pl-8" }, _attrs))}><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img${ssrRenderAttr("src", _imports_0)} class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img${ssrRenderAttr("src", _imports_1)} class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img${ssrRenderAttr("src", _imports_2)} class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img${ssrRenderAttr("src", _imports_3)} class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img${ssrRenderAttr("src", _imports_4)} class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div><div class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"><div class="overflow-hidden rounded-lg bg-gray-900"><img${ssrRenderAttr("src", _imports_5)} class="object-cover object-center hover:scale-105 transition duration-300"></div><div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/images/stackImagesComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const stackImagesComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const __default__$2 = {
  name: "expirienceSection",
  components: {
    stackImagesComponent
  },
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    getTranslation(key, language) {
      return getTranslation(key, language);
    }
  },
  watch: {
    $route(to, from) {
      this.actualLanguage = to.query.lang;
    }
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-image",
        id: "stack"
      }, _attrs))} data-v-64d206ff><div data-v-64d206ff><div class="bg-gradient-to-t from-black bottom-0 py-24 sm:py-32" data-v-64d206ff><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-64d206ff><div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2" data-v-64d206ff><div class="mx-auto w-full max-w-xl lg:mx-0" data-v-64d206ff><h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl text-center lg:text-left" data-v-64d206ff>${ssrInterpolate(unref(getTranslation)("Minha Stack", _ctx.actualLanguage))}</h2><p class="mt-6 text-lg leading-8 text-gray-300 text-center lg:text-left" data-v-64d206ff>${ssrInterpolate(unref(getTranslation)("descricao da stack", _ctx.actualLanguage))}</p></div>`);
      _push(ssrRenderComponent(stackImagesComponent, null, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stackSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-64d206ff"]]);
const __default__$1 = {
  name: "expirienceSection",
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    getTranslation(key, language) {
      return getTranslation(key, language);
    }
  },
  watch: {
    $route(to, from) {
      this.actualLanguage = to.query.lang;
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        body: "Alan assumiu a desafiadora tarefa de desenvolver uma plataforma online interna para os associados da Federa\xE7\xE3o das Congrega\xE7\xF5es Marianas de Santos, atrav\xE9s da nossa Se\xE7\xE3o de Tecnologia. Sem d\xFAvidas, um projeto que provou ser extremamente inovador. Seu trabalho n\xE3o apenas elevou o padr\xE3o de nossas iniciativas tecnol\xF3gicas, mas tamb\xE9m criou um modelo que pode ser replicado em outras organiza\xE7\xF5es semelhantes.",
        author: {
          name: "Gabriel Val\xE9rio"
        }
      },
      {
        body: "Um excelente parceiro de servi\xE7o, sempre bem humorado, deixa o clima super leve e agrad\xE1vel no time, al\xE9m de ser muito profissional e caprichoso nas entregas!",
        author: {
          name: "Luis Guilherme"
        }
      },
      {
        body: "Tive o privil\xE9gio de trabalhar lado a lado com o Alan nesses \xFAltimos meses no escopo de Backend da Ensinio. Sua dedica\xE7\xE3o e habilidades t\xE9cnicas excepcionais fazem dele um profissional excelente. Seu comprometimento com a excel\xEAncia e sua atitude positiva t\xEAm um impacto significativo no n\xEDvel das entregas. Cumprindo as datas sem abdicar de qualidade, sua \xE9tica de trabalho exemplar serve como um modelo para todos n\xF3s.",
        author: {
          name: "Adriano Christian"
        }
      },
      {
        body: "[...] Alan tamb\xE9m \xE9 um profissional excepcional. Aten\xE7\xE3o aos detalhes, comprometimento e qualidade nas entregas sempre foram caracter\xEDsticas vis\xEDveis em todos momentos que tive oportunidade de trocar conhecimento com ele.",
        author: {
          name: "Gabriel Coutinho"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-gradient-to-t from-black to-slate-950 py-24 sm:py-32",
        id: "testimonials"
      }, _attrs))} data-v-b9e264ca><div class="mx-auto max-w-7xl px-6 lg:px-8" data-v-b9e264ca><div class="mx-auto max-w-xl text-center mb-10" data-v-b9e264ca><h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl" data-v-b9e264ca>${ssrInterpolate(unref(getTranslation)("provas-sociais", _ctx.actualLanguage))}</h2></div><div data-v-b9e264ca><div class="scroll-container" data-v-b9e264ca><div class="grid-cols-1 lg:grid-cols-1 grid p-12" data-v-b9e264ca><div data-v-b9e264ca><!--[-->`);
      ssrRenderList(testimonials, (testimonial) => {
        _push(`<div class="pt-8 sm:w-1/2 md:w-full ml-2" data-v-b9e264ca><figure class="rounded-2xl bg-transparent border border-blue-500 opacity-75 hover:opacity-100 hover:scale-105 transition duration-300 p-8 text-sm leading-6" data-v-b9e264ca><blockquote class="text-white" data-v-b9e264ca><p data-v-b9e264ca>&quot;${ssrInterpolate(unref(getTranslation)(testimonial.author.name, _ctx.actualLanguage))}&quot;</p></blockquote><figcaption class="mt-6 flex items-center gap-x-4" data-v-b9e264ca><div data-v-b9e264ca><div class="font-semibold text-gray-50" data-v-b9e264ca>${ssrInterpolate(testimonial.author.name)}</div></div></figcaption></figure></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonialSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b9e264ca"]]);
const __default__ = {
  name: "contactSection",
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    getTranslation(key, language) {
      return getTranslation(key, language);
    }
  },
  watch: {
    $route(to, from) {
      this.actualLanguage = to.query.lang;
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const contacts = [
      {
        name: "Email",
        icon: "bi bi-envelope-fill",
        value: "alansantos04@hotmail.com"
      },
      {
        name: "Fone",
        icon: "bi bi-whatsapp",
        value: "+55 (13) 98862-1433"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))}><div class="relative isolate -z-10 mt-32 sm:mt-40"><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"><div class="w-full flex-auto"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">${ssrInterpolate(unref(getTranslation)("Vamos trabalhar juntos", _ctx.actualLanguage))}</h2><p class="mt-6 text-lg leading-8 text-gray-300 text-center">${ssrInterpolate(unref(getTranslation)("Entre em contato", _ctx.actualLanguage))}</p><div class="mt-10 md:flex justify-center gap-x-24 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"><!--[-->`);
      ssrRenderList(contacts, (contact) => {
        _push(`<div class="flex gap-x-3 mb-10 justify-center"><i class="${ssrRenderClass(contact.icon)}" style="${ssrRenderStyle({ "font-size": "32px" })}"></i><p class="mt-1">${ssrInterpolate(contact.value)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true"><div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="${ssrRenderStyle({ "clip-path": "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" })}"></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  name: "IndexPage",
  layout: "default",
  components: {
    initialSection: __nuxt_component_1,
    aboutSection: __nuxt_component_2,
    expirienceSection: __nuxt_component_3,
    stackSection: __nuxt_component_4,
    testimonialSection: __nuxt_component_5,
    contactSection: __nuxt_component_6
  },
  data() {
    return {
      aboutVisible: false,
      expirienceVisible: false,
      stackVisible: false,
      testimonialVisible: false,
      contactVisible: false
    };
  },
  methods: {
    handleScroll() {
      const sections = [
        { ref: "aboutSection", prop: "aboutVisible" },
        { ref: "expirienceSection", prop: "expirienceVisible" },
        { ref: "stackSection", prop: "stackVisible" },
        { ref: "testimonialSection", prop: "testimonialVisible" },
        { ref: "contactSection", prop: "contactVisible" }
      ];
      sections.forEach(({ ref: ref2, prop }) => {
        const section = this.$refs[ref2];
        const rect = section.getBoundingClientRect();
        this[prop] = rect.top < (void 0).innerHeight && rect.bottom >= 0;
      });
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_initialSection = __nuxt_component_1;
  const _component_aboutSection = __nuxt_component_2;
  const _component_expirienceSection = __nuxt_component_3;
  const _component_stackSection = __nuxt_component_4;
  const _component_testimonialSection = __nuxt_component_5;
  const _component_contactSection = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, null, _parent));
  _push(`<main data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_initialSection, null, null, _parent));
  _push(`<div class="${ssrRenderClass([{ "animate__animated animate__fadeIn": $data.aboutVisible }, "section"])}" data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_aboutSection, null, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "animate__animated animate__fadeIn": $data.expirienceVisible }, "section"])}" data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_expirienceSection, null, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "animate__animated animate__fadeIn": $data.stackVisible }, "section"])}" data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_stackSection, null, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "animate__animated animate__fadeIn": $data.testimonialVisible }, "section"])}" data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_testimonialSection, null, null, _parent));
  _push(`</div><div class="${ssrRenderClass([{ "animate__animated animate__fadeIn": $data.contactVisible }, "section"])}" data-v-c730f5b1>`);
  _push(ssrRenderComponent(_component_contactSection, null, null, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c730f5b1"]]);
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: index
});

export { getTranslation as g, index$1 as i };
//# sourceMappingURL=index-OCpyaFXL.mjs.map
