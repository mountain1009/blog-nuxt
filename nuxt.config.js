export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    titleTemplate: '%s｜ryo hey!',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'ブログ,nuxt,ryohei,ryohey!,雑談',
      },
      {
        hid: 'description',
        name: 'description',
        content: "blog だよ"
      },
      {
        property: 'og:title',
        content: 'blog ｜ryo hey!',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '' },
      {
        property: 'og:site_name',
        content: 'Leasy(リジー) ｜ryo hey!',
      },
      {
        property: 'og:description',
        content:
          'blog だよ',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollactive',
    '~plugins/lazyload'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  vite: {
    ssr: false,
  },
  sitemap: {
    hostname: 'https://blog-nuxt.vercel.app',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const articles = await $content('articles').fetch()

      return articles.map(article => article.path)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    interval: 100,
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('articles').fetch()

      return [
        '/',
        ...files.map(file => file.path),
      ]
    }
  },
  pwa: {
    manifest: {
      lang: 'en'
    },
    workbox: {
      dev: true, //開発環境でもPWAできるように
    }
  },
}
