export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MNTN',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MNTN - App for Hiking mountains' },
      { name: 'format-detection', content: 'telephone=no' }
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pwa: {
    meta: {
      name: 'MNTN',
      description: 'MNTN - App for Hiking mountains',
      author: 'Tareq Jarwan'
    },
    manifest: {
      name: 'MNTN',
      short_name: 'MNTN',
      description: 'MNTN - App for Hiking mountains',
      lang: 'en',
      theme_color: '#ffffff',
    },
    icon: {
      fileName: 'Webclip.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    }

  }
}
