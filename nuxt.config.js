const lang = 'es-ES'
const author = 'HazTuNegocioDigital'
const description = 'Únete a la transformación digital: aumenta tus ventas con tu negocio en internet'
const url = author.toLowerCase() + '.com'
// const production = process.env.BASE_URL === url // when we need it more than once


export default {
  mode: 'universal', // deprecated
  ssr: 'true', // use it instead "mode"
  target: 'static',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  head: {
    htmlAttrs: {
      lang: lang,
      // class: ['has-navbar-fixed-top', 'has-navbar-fixed-bottom']
    },
    bodyAttrs: {
      class: [ author.toLowerCase() ]
    },
    title: process.env.npm_package_name || '',
    titleTemplate: '%s | #'+author+' por @jalofernandez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: author },
      { hid: 'copyright', name: 'copyright', content: author },
      { hid: 'Classification', name: 'Classification', content: 'Business' },
      { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
      { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
      { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'lang', name: 'lang', content: lang },
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
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: url },
      //- (open-graph) FACEBOOK
      { hid: 'og:locale', property: 'og:locale', content: lang },
      { hid: 'og:site_name', property: 'og:site_name', content: url },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '960' },
      { hid: 'og:image:height', property: 'og:image:height', content: '540' },
    ],
    //- (metas) common global ones
    link: [
      { rel: 'author', type: 'text/plain', href: 'https://' + url + '/humans.txt' },
      { rel: 'dns-prefetch', href: '//wa.me/34696682791' },
      { rel: 'dns-prefetch', href: '//peluqueriacanessa.com' },
      { rel: 'dns-prefetch', href: '//chefioana.firebaseapp.com' },
      // { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true },
    ],
  },

  loading: { color: '#030203' },

  css: ['@/assets/styles.sass'],

  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  
  plugins: [],
  
  buildModules: [
    '@nuxtjs/pwa',
  ],
  
  modules: [
    'vue-scrollto/nuxt',
    'nuxt-webfontloader',
    'nuxt-mq',
    'nuxt-lazy-load',
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
    // '@nuxtjs/robots', // TODO: install me asap!
    '@nuxtjs/sitemap', // always declare the sitemap module at end of array
  ],

  webfontloader: {
    google: {
      families: ['Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap'],
    },
  },

  mq: {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 600,
      smartphone: 768,
      tablet: 1024,
      laptop: 1280,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity
    }
  },

  pwa: {
    manifest: {
      name: author,
      short_name: '#' + author,
      description: description,
      // start_url: 'index.html?launcher=true', // value by default ("/?standalone=true")
      // display: 'standalone', // value by default
      background_color: '#fbf8ff',
      theme_color: '#363636',
      lang: lang,
      // dir: 'ltr', // value by default
      useWebmanifestExtension: false, // value by default. With true the file extension will be ".webmanifest" instead ".json"
    },
    workbox: {
      // check it asap cause in "true" fails!
      // https://www.notion.so/HTTP-404-HazTuNegocioDigital-297f6a4e55204799b1b2c24856625af9
      enabled: false,
      autoRegister: false
    },
  },

  gtm: {
    id: 'GTM-NCSZTTP',
    enabled: true,
    scriptDefer: true,
    pageTracking: true,
  },

  robots: {
    UserAgent: '*',
    [process.env.BASE_URL === url ? 'Allow' : 'Disallow']: '/',
    Sitemap: `https://${url}/sitemap.xml`,
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
    hostname: `https://` + url,
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
    subFolders: false,
    fallback: '404.html'
    // dir: 'public' // to deploy in Google Firebase ('dist' by default)
  },

  //- Webpack config here
  build: {
    extend(config, ctx) {},
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
