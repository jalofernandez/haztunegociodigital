
export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: '@jalofernandez' },
      { hid: 'copyright', name: 'copyright', content: 'Jalofernandez' },
      { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
      { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
      { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'lang', name: 'lang', content: 'es-ES' },
      { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
      { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },
      { hid: 'rating', name: 'rating', content: 'General' },
      { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
      // (metas) to customize (all browsers) top navbar
      { hid: 'theme-color', name: 'theme-color', content: '#f4692a' },
      // (metas) to Webkit (iOS Safari) browsers
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: '@jalofernandez' },
      // (metas) IE (windows phone) browsers
      // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
      // (microdata) TWITTER
      { name: 'twitter:title', content: 'Jalofernández diseño gráfico y desarrollo web en Madrid, España' },
      { name: 'twitter:description', content: 'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.' },
      { name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
      { name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jalofernandez' },
      { name: 'twitter:creator', content: '@jalofernandez' },
      // (open-graph) FACEBOOK
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'es_ES' },
      { name: 'og:url', content: 'https://jalofernandez.com' },
      { name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico' },
      { name: 'og:title', content: 'Jalofernández diseño gráfico y desarrollo web en Madrid, España' },
      { name: 'og:description', content: 'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.' },
      { name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
      { name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
      { name: 'og:image:width', content: '960' },
      { name: 'og:image:height', content: '540' },
      { name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' }
    ],
    // (metas) common global ones
    link: [
      // to PWA
      { rel: 'manifest', href: '/manifest.json' },
      // (custom) Favicons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: "57x57", href: '/favicon/app-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: "60x60", href: '/favicon/app-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: "72x72", href: '/favicon/app-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '/favicon/app-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: "114x114", href: '/favicon/app-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '/favicon/app-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: "144x144", href: '/favicon/app-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/favicon/app-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/app-icon-180x180.png' },
      // Browsers Tabs
      { rel: 'mask-icon', color: "#333333", href: '/favicon/safari-pinned-tab.svg' }
    ]
  },
  // Customize the progress-bar color
  loading: { color: '#030203' },
  // Global CSS
  css: [
    '@/assets/styles.sass'
  ],
  // Plugins to load before mounting the App as: Google Analytics (ga)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  // Nuxt.js dev-modules
  buildModules: [
    // '@nuxtjs/google-analytics'
  ],
  // Nuxt.js modules
  modules: [
    '@nuxtjs/sitemap' // always declare the sitemap module at end of array
  ],
  // googleAnalytics: {
  //   id: 'UA-113398984-1'
  // },
  sitemap: {
    hostname: `https://jalofernandez.com`,
    gzip: true,
    // exclude: ['/pedidos', '/blog', '/blog/', '/blog/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  // Build configuration
  build: {
    // You can extend webpack config here
    extend (config, ctx) {
    }
  }
}
