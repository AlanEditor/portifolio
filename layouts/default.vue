<template>
  <header class="md:block absolute inset-x-0 top-0 z-50 animate__animated animate__fadeIn">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          v-if="!mobileMenuOpen"
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-gray-900"
        >{{ getTranslation(item.name, actualLanguage)}}</a>
        <button
          @click="changeLanguage(actualLanguage === 'en' ? 'pt' : 'en')"
          class="text-sm font-semibold leading-6 border-2 hover:border-blue-500 hover:text-blue-500 px-2 text-white"
        >{{actualLanguage === 'en' ? 'PT' : 'EN'}}</button>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="../src/assets/img/aura.png" alt />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-300"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="grid grid-cols-1 gap-y-4 gap-x-8 pt-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                @click="mobileMenuOpen = false"
                class="text-sm font-semibold leading-6 text-gray-900 block"
              >{{ item.name }}</a>
            </div>
            <div @click="mobileMenuOpen = false">
              <button
                @click="changeLanguage(actualLanguage === 'en' ? 'pt' : 'en')"
                class="text-sm font-semibold leading-6 border-2 border-white hover:border-blue-500 hover:text-blue-500 px-2 mt-5 text-white"
              >{{actualLanguage === 'en' ? 'PT' : 'EN'}}</button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { getTranslation } from '~/services/translationService';

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#project" },
  { name: "Tecnologias", href: "#stack" },
  { name: "Recomendações", href: "#testimonials" },
  { name: "Contato", href: "#contact" }
];
</script>

<script>
export default {
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
        newUrl +=
          (url.indexOf("?") !== -1 ? "&" : "?") + paramName + "=" + paramValue;
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
</script>

<style scoped>
a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #f1f1f1;
}

a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: rgb(76, 155, 181);
  transform: scaleX(0);
  transition: transform 0.1s ease;
}

a:hover::after {
  transform: scaleX(1);
}
</style>