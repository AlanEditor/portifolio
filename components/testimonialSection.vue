<template>
  <div class="bg-gradient-to-t from-black to-slate-950 pt-24 sm:pt-32" id="testimonials">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center mb-10">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{{ getTranslation('provas-sociais', actualLanguage) }}</h2>
      </div>
      <div>
        <div class="scroll-container">
          <div class="grid-cols-1 lg:grid-cols-1 grid p-12">
            <div>
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.author.handle"
                class="pt-8 sm:w-1/2 md:w-full ml-2"
              >
                <figure
                  class="rounded-2xl bg-transparent border border-blue-500 opacity-75 hover:opacity-100 hover:scale-105 transition duration-300 p-8 text-sm leading-6"
                >
                  <blockquote class="text-white">
                    <p>"{{ getTranslation(testimonial.author.name, actualLanguage) }}"</p>
                  </blockquote>
                  <figcaption class="mt-6 flex items-center gap-x-4">
                    <div>
                      <div class="font-semibold text-gray-50">{{ testimonial.author.name }}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const testimonials = [
  {
    author: {
      name: "Gabriel Valério"
    }
  },
  {
    author: {
      name: "Luis Guilherme"
    }
  },
  {
    author: {
      name: "Adriano Christian"
    }
  },
  {
    author: {
      name: "Gabriel Coutinho"
    }
  },
  {
    author: {
      name: "Leonardo Sobral"
    }
  }
];
</script>

<script>
import { getTranslation } from "~/services/translationService";
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
      let hash = to.hash;
      if (hash) {
        const searchParams = new URLSearchParams(hash.slice(hash.indexOf("?")));
        const lang = searchParams.get("lang") || "pt";
        this.actualLanguage = lang;
      } else {
        this.actualLanguage = to.query.lang || "pt";
      }
    }
  }
};
</script>

<style scoped>
.scroll-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>