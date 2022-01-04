export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "ja"
    },
    title: "nuxt-template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { hid: "description", name: "description", content: "" },
      // OGP
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "" },
      { hid: "og:site_name", property: "og:site_name", content: "" },
      { hid: "og:description", property: "og:description", content: "" },
      { hid: "og:url", property: "og:url", content: "https://example.com/" },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://example.com/ogp.jpg"
      },
      // Twitter OGP
      { hid: "twitter:site", name: "twitter:site", content: "@twitter_id" },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "//fonts.gstatic.com/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;600&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ress/dist/ress.min.css"],

  styleResources: {
    scss: ["~assets/vars/*.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module",
    "@nuxt/typescript-build",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Sans+JP": [400, 500, 700, 800],
          "Noto+Serif+JP": [400, 500, 700, 800],
          "Open+Sans": [400, 500, 700, 800],
          Montserrat: [400, 500, 700, 800]
        },
        display: "block",
        download: true,
        inject: true
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/google-analytics"],

  googleAnalytics: {
    id: "G-XXXX"
  }
};
