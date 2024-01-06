// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/main.css', 'bootstrap-icons/font/bootstrap-icons.css'],
  app: {
    baseURL: '/portifolio/',
    buildAssetsDir: 'assets',
  }
})