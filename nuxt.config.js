export default {
  head: {
    title: 'nuxt-bootstrap_shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    icons: true
  },
  build: {
  }
}
