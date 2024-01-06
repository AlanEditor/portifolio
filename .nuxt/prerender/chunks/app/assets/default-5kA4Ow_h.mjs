import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue/dist/vue.cjs.prod.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue/server-renderer/index.mjs';
import { Dialog, DialogPanel } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import { Bars3Icon, XMarkIcon } from 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/@heroicons/vue/24/outline/esm/index.js';
import { g as getTranslation } from './index-OCpyaFXL.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/alansantos/Desktop/PROJETOS/PORTIFO%CC%81LIO/portifolio/node_modules/unctx/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("aura.EgrCeJIf.png");
const __default__ = {
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    changeLanguage(language) {
      if (language === "pt") {
        this.$router.push("/");
      } else {
        const currentUrl = this.$route.fullPath;
        const newUrl = this.addOrReplaceQueryParam(
          currentUrl,
          "lang",
          language
        );
        this.$router.replace(newUrl);
      }
    },
    addOrReplaceQueryParam(url, paramName, paramValue) {
      const pattern = new RegExp("(" + paramName + "=).*?(&|$)");
      let newUrl = url;
      if (url.match(pattern)) {
        newUrl = url.replace(pattern, "$1" + paramValue + "$2");
      } else {
        newUrl += (url.indexOf("?") !== -1 ? "&" : "?") + paramName + "=" + paramValue;
      }
      return newUrl;
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const navigation = [
      { name: "Sobre", href: "#about" },
      { name: "Projetos", href: "#project" },
      { name: "Tecnologias", href: "#stack" },
      { name: "Recomenda\xE7\xF5es", href: "#testimonials" },
      { name: "Contato", href: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "md:block absolute inset-x-0 top-0 z-50 animate__animated animate__fadeIn" }, _attrs))} data-v-f58232d6><nav class="mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8" aria-label="Global" data-v-f58232d6><div class="flex lg:hidden" data-v-f58232d6>`);
      if (!mobileMenuOpen.value) {
        _push(`<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200" data-v-f58232d6>`);
        _push(ssrRenderComponent(unref(Bars3Icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hidden lg:flex lg:gap-x-12" data-v-f58232d6><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-sm font-semibold leading-6 text-gray-900" data-v-f58232d6>${ssrInterpolate(unref(getTranslation)(item.name, _ctx.actualLanguage))}</a>`);
      });
      _push(`<!--]--><button class="text-sm font-semibold leading-6 border-2 hover:border-blue-500 hover:text-blue-500 px-2 text-white" data-v-f58232d6>${ssrInterpolate(_ctx.actualLanguage === "en" ? "PT" : "EN")}</button></div></nav>`);
      _push(ssrRenderComponent(unref(Dialog), {
        as: "div",
        class: "lg:hidden",
        onClose: ($event) => mobileMenuOpen.value = false,
        open: mobileMenuOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-10" data-v-f58232d6${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between" data-v-f58232d6${_scopeId2}><a href="#" class="-m-1.5 p-1.5" data-v-f58232d6${_scopeId2}><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_0)} alt data-v-f58232d6${_scopeId2}></a><button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-300" data-v-f58232d6${_scopeId2}><span class="sr-only" data-v-f58232d6${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root" data-v-f58232d6${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10" data-v-f58232d6${_scopeId2}><div class="grid grid-cols-1 gap-y-4 gap-x-8 pt-10" data-v-f58232d6${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(`<a${ssrRenderAttr("href", item.href)} class="text-sm font-semibold leading-6 text-gray-900 block" data-v-f58232d6${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                  });
                  _push3(`<!--]--></div><div data-v-f58232d6${_scopeId2}><button class="text-sm font-semibold leading-6 border-2 border-white hover:border-blue-500 hover:text-blue-500 px-2 mt-5 text-white" data-v-f58232d6${_scopeId2}>${ssrInterpolate(_ctx.actualLanguage === "en" ? "PT" : "EN")}</button></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("img", {
                          class: "h-8 w-auto",
                          src: _imports_0,
                          alt: ""
                        })
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-300",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close menu"),
                        createVNode(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "grid grid-cols-1 gap-y-4 gap-x-8 pt-10" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                            return createVNode("a", {
                              key: item.name,
                              href: item.href,
                              onClick: ($event) => mobileMenuOpen.value = false,
                              class: "text-sm font-semibold leading-6 text-gray-900 block"
                            }, toDisplayString(item.name), 9, ["href", "onClick"]);
                          }), 64))
                        ]),
                        createVNode("div", {
                          onClick: ($event) => mobileMenuOpen.value = false
                        }, [
                          createVNode("button", {
                            onClick: ($event) => _ctx.changeLanguage(_ctx.actualLanguage === "en" ? "pt" : "en"),
                            class: "text-sm font-semibold leading-6 border-2 border-white hover:border-blue-500 hover:text-blue-500 px-2 mt-5 text-white"
                          }, toDisplayString(_ctx.actualLanguage === "en" ? "PT" : "EN"), 9, ["onClick"])
                        ], 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-10" }),
              createVNode(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: _imports_0,
                        alt: ""
                      })
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-gray-300",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode("span", { class: "sr-only" }, "Close menu"),
                      createVNode(unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flow-root" }, [
                    createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-y-4 gap-x-8 pt-10" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode("a", {
                            key: item.name,
                            href: item.href,
                            onClick: ($event) => mobileMenuOpen.value = false,
                            class: "text-sm font-semibold leading-6 text-gray-900 block"
                          }, toDisplayString(item.name), 9, ["href", "onClick"]);
                        }), 64))
                      ]),
                      createVNode("div", {
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("button", {
                          onClick: ($event) => _ctx.changeLanguage(_ctx.actualLanguage === "en" ? "pt" : "en"),
                          class: "text-sm font-semibold leading-6 border-2 border-white hover:border-blue-500 hover:text-blue-500 px-2 mt-5 text-white"
                        }, toDisplayString(_ctx.actualLanguage === "en" ? "PT" : "EN"), 9, ["onClick"])
                      ], 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f58232d6"]]);

export { _default as default };
//# sourceMappingURL=default-5kA4Ow_h.mjs.map
