// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/src/assets/main.css"],
  modules: ["@nuxtjs/i18n"],
  components: ["~/components/icons", "~/components/sections", "~/components"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        name: "🇬🇧 English",
      },
      {
        code: "es",
        name: "🇨🇱 Español",
      },
    ],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Leonardo David • Software Engineer",
      meta: [
        {
          name: "description",
          content:
            "Hey! I'm a Software Engineer, welcome to my little space on internet 👋",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
