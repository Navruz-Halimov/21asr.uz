module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'XXI ASR - Zamonaviy va tezkor yangiliklar',
    meta: [
      { charset: 'utf-8' },
      // { 'http-equiv': "Content-Security-Policy", content: "upgrade-insecure-requests" },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      { hid: 'description', name: 'description', content: 'Eng qiziqarli yangiliklar — faqat va faqat bizda! Dunyo, mahalliy, gadjetlar, sport, avtomobillar olami yangiliklaridan xabardor bo‘ling.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      { src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit", async: true, defer: true }
    ]
  },

  
  generate: {
    fallback: true
  },
  // MODULES 

  modules: [
    "vue-toastification/nuxt",
    'nuxt-clipboard2',
    'vue-social-sharing/nuxt',
    '@nuxtjs/bootstrap-vue',
    [
      "@nuxtjs/axios",
      {baseURL: "https://21asr.uz/api/"},
    ],
    [
      "nuxt-i18n",
      {
        lazy: true,
        locales: [
          { code: "uz", iso: "uz-Latn-UZ", name: "O'zbekcha", file: "uz.js" },
          { code: "уз", iso: "ru-RU", name: "Кирилча", file: "ru.js" }
        ],
        defaultLocale: "uz",
        rootRedirect: "uz",
        strategy: "prefix",
        langDir: "lang/",
        parsePages: false,
        detectBrowserLanguage: {
          useCookie: true,
          fallbackLocale: "uz"
        }
      }
    ],
    [
      'nuxt-fontawesome', {
        component: 'fa', 
        imports: [
          //import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faMapMarkerAlt','faEnvelope','faPhone','faChevronLeft','faChevronRight','faTimes']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faInstagram','faTelegramPlane','faLinkedinIn','faTwitter','faFacebookF','faTelegram','faFacebook']
          }
        ]
      }
    ],
  ],

  plugins: [
    { src: '~/plugins/recaptcha.js', ssr: false },
    { src: '~/plugins/vue-toastification.js', ssr: false },
    { src: '~/plugins/vue-moment.js', ssr: false },
    { src: '~/plugins/vue-content-loader.js', ssr: false },
    { src: '~/plugins/swiper.js', mode: 'client' },
  ],
  /*
  ** SCSS IMPORT 
  */
  css: [
    { src: '@/assets/scss/media-query.scss', lang: 'scss' },
    { src: '@/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#d0a13f' },
  components: true,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
  //  analyze: true,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

