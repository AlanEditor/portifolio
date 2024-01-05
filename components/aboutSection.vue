<template>
  <div id="about">
    <div class="relative z-10 bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
          <div
            class="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          />
        </div>
      </div>
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
      >
        <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
          <div class="relative aspect-square h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
            <img
              class="absolute inset-0 h-full w-full rounded-2xl bg-image hover:scale-105 transition duration-300 object-cover shadow-2xl"
              src="../src/assets/img/alan.png"
              alt
            />
          </div>
        </div>
        <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
          <figure class="relative isolate pt-6 sm:pt-2">
            <blockquote class="leading-8 text-white sm:leading-9">
              <h1 class="text-6xl font-bold">{{ getTranslation('Olá', actualLanguage)}},</h1>
              <p
                class="mt-6 text-lg"
              >{{ getTranslation('Sobre-mim', actualLanguage)}}</p>
            </blockquote>
          </figure>
          <div class="mt-10">
            <a
              href="https://www.linkedin.com/in/alan-santos-profile/"
              target="_blank"
              class="mr-4 px-6 py-3 bg-transparent text-white rounded-lg"
            >
              <Icon name="uil:linkedin" color="white" size="20px" class="mr-2" />LinkedIn
            </a>
            <a
              href="https://github.com/AlanEditor"
              target="_blank"
              class="mr-4 px-6 py-3 bg-transparent text-white rounded-lg"
            >
              <Icon name="uil:github" color="white" size="20px" class="mr-2" />GitHub
            </a>
          </div>
          <div class="my-10 flex justify-center md:justify-start mx-2">
            <button
              type="button"
              class="px-6 py-3 bg-transparent border border-white hover:border-blue-500 hover:text-blue-500 text-white rounded-lg"
              style="z-index: 1000;"
              @click="downloadFile"
            >Download CV</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTranslation } from "~/services/translationService";
export default {
  name: "aboutSection",
  data() {
    return {
      actualLanguage: this.$router.currentRoute.value.query.lang
    };
  },
  methods: {
    downloadFile() {
      const file = this.actualLanguage === 'en' ? 'alan_santos_cv_english.pdf' : 'alan_santos_cv.pdf';
      const fileUrl = "/files/" + file;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = file;
      link.click();
    },
    getTranslation(key, language) {
      return getTranslation(key, language);
    },
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
  background: linear-gradient(to bottom, #000004, #291b31);
}

a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
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