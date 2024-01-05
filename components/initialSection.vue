<template>
  <div>
    <div class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
      <img
        src="../src/assets/img/fundo-imagem.png"
        alt
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div class="mx-auto max-w-full px-6 lg:px-8">
        <div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
              <h3
                class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-5 animate__animated animate__fadeInDown"
              >Alan Santos</h3>
              <hr class="hr-effect">
              <h3
                class="text-2xl font-bold tracking-tight text-white sm:text-5xl mt-8 animate__animated animate__fadeInUp"
              >{{ getTranslation('Engenheiro de Software', actualLanguage) }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTranslation } from '~/services/translationService';
export default {
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
</script>

<style scoped>
.border-image {
  border: 2px solid rgb(76, 155, 181);
  border-radius: 20px;
}

.imagem-bg {
  opacity: 1;
}

.hr-effect {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-bottom: solid rgb(255, 249, 249);
  width: 0%;
  text-align: center;
  animation: line 1s linear forwards;
}

@keyframes line {
  from {
    left: 50%;
    width: 0%;
  }
  to {
    left: 20%;
    width: 60%;
  }
}
</style>