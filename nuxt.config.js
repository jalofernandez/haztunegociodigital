const author = 'HazTuNegocioDigital'
const description = 'Únete a la transformación digital: aumenta tus ventas con tu negocio en internet'

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    bodyAttrs: {
      class: [ author.toLowerCase() ]
    },
    titleTemplate: '%s | #'+author+' por @jalofernandez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: author },
      { hid: 'copyright', name: 'copyright', content: author },
      { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
      { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
      { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'lang', name: 'lang', content: 'es-ES' },
      { hid: 'rating', name: 'rating', content: 'General' },
      { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
      //- (metas) to customize (all browsers) top navbar
      { hid: 'theme-color', name: 'theme-color', content: '#f4692a' },
      //- (metas) to Webkit (iOS Safari) browsers
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: author },
      //- (metas) IE (windows phone) browsers
      // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
      //- (microdata) TWITTER
      // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: author },
      { hid: 'twitter:creator', name: 'twitter:creator', content: author },
      //- (open-graph) FACEBOOK
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'es_ES' },
      { name: 'og:site_name', content: description },
    ],
    //- (metas) common global ones
    link: [
      // TODO: remove the following code asap because "nuxt/pwa" module just handle it
      // //- to PWA
      // { rel: 'manifest', href: '/manifest.json' },
      // //- (custom) Favicons
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      // { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/app-icon-57x57.png' },
      // { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/app-icon-60x60.png' },
      // { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/app-icon-72x72.png' },
      // { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/app-icon-76x76.png' },
      // { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/app-icon-114x114.png' },
      // { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/app-icon-120x120.png' },
      // { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/app-icon-144x144.png' },
      // { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/app-icon-152x152.png' },
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/app-icon-180x180.png' },
      //- Browsers Tabs
      { rel: 'mask-icon', color: '#333333', href: '/favicon/safari-pinned-tab.svg' },
      { rel: 'dns-prefetch', href: '//wa.me/34696682791' },
      { rel: 'dns-prefetch', href: '//peluqueriacanessa.com' },
      { rel: 'dns-prefetch', href: '//chefioana.firebaseapp.com' },
      // { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true },
    ],
  },
  //- Customize the progress-bar color
  loading: { color: '#030203' },
  //- Global CSS
  css: ['@/assets/styles.sass'],
  //- Plugins to load before mounting the App as: Google Analytics (ga)
  plugins: [],
  //- Nuxt.js dev-modules:
  //- as of Nuxt 2.9+ the PWA ("@nuxtjs/pwa" module) needs to be registered in the build modules
  buildModules: ['@nuxtjs/pwa'],
  //- Nuxt.js modules
  modules: [
    'vue-scrollto/nuxt',
    'nuxt-webfontloader',
    // '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    [
      // All info: https://www.npmjs.com/package/nuxt-cookie-control
      'nuxt-cookie-control',
      {
        css: true,
        controlButton: false,
        blockIframe: true,
        barPosition: 'bottom-full',
        colors: {
          barTextColor: '#fff',
          modalOverlay: '#000',
          barBackground: 'rgba(0,0,0,.85)',
          barButtonColor: '#4a4a4a',
          modalTextColor: '#4a4a4a',
          modalBackground: '#fff',
          modalOverlayOpacity: 0.85,
          modalButtonColor: '#fff',
          modalUnsavedColor: '#fff',
          barButtonHoverColor: '#fff',
          barButtonBackground: '#fff',
          modalButtonHoverColor: '#fff',
          modalButtonBackground: '#000',
          controlButtonIconColor: '#000',
          controlButtonBackground: '#fff',
          barButtonHoverBackground: '#333',
          checkboxActiveBackground: '#000',
          checkboxInactiveBackground: '#000',
          modalButtonHoverBackground: '#333',
          checkboxDisabledBackground: '#ddd',
          controlButtonIconHoverColor: '#fff',
          controlButtonHoverBackground: '#000',
          checkboxActiveCircleBackground: '#24cf09',
          checkboxInactiveCircleBackground: '#fff',
          checkboxDisabledCircleBackground: '#fff',
        },
        text: {
          barTitle: '¡Sorpresa! Usamos Cookies... 🍪❗',
          barDescription:
            'Usamos cookies de terceros para obtener métricas y estadísticas de uso de la web y sus servicios relacionados. Puedes gestionarlas pulsando en "Editar cookies". Si continuas navegando entendemos que aceptas las cookies.',
          acceptAll: 'Aceptar todas',
          declineAll: 'Borrar todas',
          manageCookies: 'Editar cookies',
          unsaved: 'Tienes cambios sin guardar',
          close: 'Cerrar',
          save: 'Guardar',
          necessary: 'Cookies necesarias',
          optional: 'Cookies opcionales',
          functional: 'Cookies funcionales',
          blockedIframe: 'Para ver esto activa las cookies funcionales, por favor',
          here: 'aquí',
        },
      },
    ],
    '@nuxtjs/sitemap', // always declare the sitemap module at end of array
  ],
  webfontloader: {
    google: {
      families: ['Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap'],
    },
  },
  pwa: {
    manifest: {
      name: 'HazTuNegocioDigital',
      short_name: '#HazTuNegocioDigital',
      description: 'Únete a la transformación digital: aumenta tus ventas con tu negocio también en internet',
      // start_url: 'index.html?launcher=true', // value by default ("/?standalone=true")
      lang: 'es',
      // display: 'standalone', // value by default
      background_color: '#fbf8ff',
      theme_color: '#363636',
      lang: 'es-ES',
      // dir: 'ltr', // value by default
      useWebmanifestExtension: false,
    },
    workbox: {
      // enabled: true, // check it asap!
    },
  },
  gtm: {
    id: 'GTM-NCSZTTP',
    enabled: true,
    scriptDefer: true,
    pageTracking: true,
  },
  cookies: {
    necessary: [
      {
        name: 'Cookie Control',
        description: 'Se usan para controlar las propias cookies.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
      },
    ],
    optional: [
      {
        name: 'Google Analytics',
        identifier: 'ga',
        description: 'Google GTM es una cookie para mostrar estadísticas de uso',
        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=GTM-NCSZTTP',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            'event': 'gtm.js',
          })
        },
        declined: () => {},
      },
    ],
    functional: [
      {
        name: 'De momento no utilizamos ninguna',
        description: 'Se usan para controlar las propias cookies.',
        // cookies: ['cookie_control_consent'],
      },
    ],
  },
  sitemap: {
    hostname: `https://haztunegociodigital.com`,
    gzip: true,
    // exclude: ['/pedidos', '/blog', '/blog/', '/blog/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },
  generate: {
    // subFolders: false,
    // dir: 'public' // to deploy in Google Firebase ('dist' by default)
  },
  //- Webpack config here
  build: {
    extend(config, ctx) {},
  },
}
