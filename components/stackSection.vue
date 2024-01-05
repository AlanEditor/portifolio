<template>
  <div class="bg-image" id="stack">
    <div>
      <div class="bg-gradient-to-t from-black bottom-0 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div class="mx-auto w-full max-w-xl lg:mx-0">
              <h2
                class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl text-center lg:text-left"
              >{{ getTranslation('Minha Stack', actualLanguage) }}</h2>
              <p
                class="mt-6 text-lg leading-8 text-gray-300 text-center lg:text-left"
              >{{ getTranslation('descricao da stack', actualLanguage) }}</p>
            </div>
            <div
              class="mx-auto grid w-full max-w-lg grid-cols-3 items-center gap-y-5 sm:gap-y-5 lg:mx-0 lg:max-w-none lg:pl-8"
            >
              <div
                v-for="(stack, index) in technologies"
                :key="index"
                class="group relative opacity-75 hover:opacity-100 hover:border-white rounded-lg p-6"
              >
                <div class="overflow-hidden rounded-lg bg-gray-900">
                  <img :src="`/img/${stack}.png`" class="object-cover object-center hover:scale-105 transition duration-300" />
                </div>
                <div
                  class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = ["laravel", "php", "vue", "docker", "mysql", "node"];
</script>

<script>
import { getTranslation } from '~/services/translationService';
export default {
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
</script>

<style scoped>

.bg-image {
  position: relative;
  overflow: hidden;
}

.bg-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../src/assets/img/vscode.png");
  filter: blur(5px);
  z-index: -1;
  opacity: 1;
  backdrop-filter: blur(5px);
  background-size: 100%; /* Adicione esta linha */
}
</style>