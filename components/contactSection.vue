<template>
  <div id="contact">
    <div class="relative isolate -z-10 mt-32 sm:mt-40">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
        >
          <div class="w-full flex-auto">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">{{ getTranslation('Vamos trabalhar juntos', actualLanguage) }}</h2>
            <p
              class="mt-6 text-lg leading-8 text-gray-300 text-center"
            >{{getTranslation('Entre em contato', actualLanguage) }}</p>
            <div
              class="mt-10 md:flex justify-center gap-x-24 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
            >
              <div v-for="contact in contacts" :key="contact.name" class="flex gap-x-3 mb-10 justify-center">
                <i :class="contact.icon" style="font-size: 32px;"></i>
                <p class="mt-1">{{ contact.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const contacts = [
    {
        name: "Email",
        icon: "bi bi-envelope-fill",
        value: "alansantos04@hotmail.com",
    },
    {
        name: "Fone",
        icon: "bi bi-whatsapp",
        value: "+55 (13) 98862-1433",
    }
]

</script>

<script>
import { getTranslation } from '~/services/translationService';

export default {
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
</script>
