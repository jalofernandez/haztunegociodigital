
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#030203' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles.sass'
  ],
  /*
  ** Plugins to load before mounting the App as: Google Analytics (ga)
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap' // always declare the sitemap module at end of array
  ],
  sitemap: {
    routes: [
      { url: '/', changefreq: 'daily', priority: 1, lastmod: '2020-03-02T13:30:00.000Z' },
      { url: '/portfolio', changefreq: 'daily', priority: 2, lastmod: '2020-03-02T13:30:00.000Z' },
      { url: '/cv-resume', changefreq: 'daily', priority: 3, lastmod: '2020-03-02T13:30:00.000Z' },
      { url: '/legal', changefreq: 'daily', priority: 4, lastmod: '2020-03-02T13:30:00.000Z' },
      { url: '/404', changefreq: 'daily', priority: 5, lastmod: '2020-03-02T13:30:00.000Z' }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
