<template>
  <div class="bg-black pt-52" id="project">
    <div
      class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 "
    >
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">{{ getTranslation('Projetos em que atuei', actualLanguage) }}</h2>
        <p
          class="mt-4 text-gray-500"
        >{{ getTranslation('descricao de projeto', actualLanguage) }}</p>
      </div>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-4 ">
        <div v-for="(job, index) in jobs" :key="index" class="group relative opacity-75 hover:opacity-100 hover:scale-105 transition duration-300  hover:border-white  rounded-lg p-6">
          <div class="overflow-hidden rounded-lg bg-gray-900">
            <img :src="`/img/${job.imageSrc}`"  class="object-cover object-center" />
          </div>
          <div
            class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
          >
          </div>
          <h3 class="text-white text-center">
              <a :href="job.link" target="_blank">
                <span aria-hidden="true" class="absolute inset-0" />
              </a>
            </h3>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const jobs = [
  {
    company: "Ensinio",
    imageSrc: `ensinio.png`,
    link: "https://www.ensinio.com",

  },
  {
    company: "iPORTO",
    imageSrc: `iporto.png`,
    link: "https://iporto.com.br/",
  },
  {
    company: "Casa de Gê",
    imageSrc: `casa_de_ge.png`,
    link: "https://casadege.com.br/",
  },
  {
    company: "Congregação Mariana",
    imageSrc: `cm.png`,
  }
];

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