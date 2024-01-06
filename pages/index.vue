<template>
  <div>
    <NuxtLayout name="default" />
    <main>
        <initialSection />
      <div
        ref="aboutSection"
        class="section"
        :class="{ 'animate__animated animate__fadeIn': aboutVisible }"
      >
        <aboutSection />
      </div>
      <div
        ref="expirienceSection"
        class="section"
        :class="{ 'animate__animated animate__fadeIn': expirienceVisible }"
      >
        <expirienceSection />
      </div>

      <div
        ref="stackSection"
        class="section"
        :class="{ 'animate__animated animate__fadeIn': stackVisible }"
      >
        <stackSection />
      </div>

      <div
        ref="testimonialSection"
        class="section"
        :class="{ 'animate__animated animate__fadeIn': testimonialVisible }"
      >
        <testimonialSection />
      </div>

      <div
        ref="contactSection"
        class="section"
        :class="{ 'animate__animated animate__fadeIn': contactVisible }"
      >
        <contactSection />
      </div>
    </main>
  </div>
</template>

<script>
import initialSection from "~/components/initialSection.vue";
import aboutSection from "../components/aboutSection.vue";
import expirienceSection from "../components/expirienceSection.vue";
import stackSection from "../components/stackSection.vue";
import testimonialSection from "../components/testimonialSection.vue";
import contactSection from "../components/contactSection.vue";

export default {
  name: "IndexPage",
  layout: "default",
  components: {
    initialSection,
    aboutSection,
    expirienceSection,
    stackSection,
    testimonialSection,
    contactSection
  },
  data() {
    return {
      aboutVisible: false,
      expirienceVisible: false,
      stackVisible: false,
      testimonialVisible: false,
      contactVisible: false,
    };
  },
  methods: {
    handleScroll() {
      const sections = [
        { ref: 'aboutSection', prop: 'aboutVisible' },
        { ref: 'expirienceSection', prop: 'expirienceVisible' },
        { ref: 'stackSection', prop: 'stackVisible' },
        { ref: 'testimonialSection', prop: 'testimonialVisible' },
        { ref: 'contactSection', prop: 'contactVisible' },
      ];

      sections.forEach(({ ref, prop }) => {
        const section = this.$refs[ref];
        const rect = section.getBoundingClientRect();

        this[prop] = rect.top < window.innerHeight && rect.bottom >= 0;
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
body {
  background-color: #000000;
}
.section {
  opacity: 0;
  transition: opacity 1s ease;
}

.animate__fadeIn {
  opacity: 1;
}
</style>