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
              <stackImagesComponent />
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
import { getTranslation } from "~/services/translationService";
import stackImagesComponent from "./images/stackImagesComponent.vue";

export default {
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../src/assets/img/vscode.png");
  filter: blur(5px);
  z-index: -1;
  opacity: 1;
  backdrop-filter: blur(5px);
  background-size: 100%; /* Adicione esta linha */
}
</style>