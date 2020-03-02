<template>
  <main class="error old-crt-effect">
    <div class="pieces in-error"></div>
    <div class="overlay overlay--hidden"></div>
    <div class="content">
      <div class="content--inner">
        <!-- (main) Header -->
        <div class="content--header">
          <Logo/>
          <Social/>
        </div>
        <Slogan/>
        <!-- typewritin´Title -->
        <div class="typewriter in-error">
          <h3 class="mode--code">
            <span>[</span> Error 404 <span>]</span> Page Not Found
          </h3>
        </div>
        <!-- FOOTER navbar links -->
        <div class="content--footer">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{name: 'index'}" class="btn is-link btn--coder menu--link glitch" data-text="<< Home">
              &lt;&lt; Home
            </nuxt-link>
            <nuxt-link :to="{name: 'portfolio'}" class="btn is-link btn--designer menu--link glitch" data-text="Portfolio >>">
              Portfolio &gt;&gt;
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="line--anim">
      <div class="flicker"></div>
    </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Slogan from '~/components/Slogan.vue'
import Social from '~/components/Social.vue'

export default {
  components: { Logo, Slogan, Social },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "jalofernández design webmaster frontend diseño gráfico",
        "@id": "https://jalofernandez.com",
        "url": "https://jalofernandez.com",
        "sameAs": [
          "https://www.instagram.com/jalofernandez/?ref=badge",
          "https://twitter.com/jalofernandez",
          "https://www.linkedin.com/in/javierlorenzofernandez/",
          "https://github.com/jalofernandez",
          "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
          "https://www.facebook.com/jalofernandez?ref=tn_tnmn"
        ],
        "logo": "",
        "name": "jalofernández diseño gráfico y desarrollo web en Madrid, España",
        "description": "Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.",
        "telephone": "+34 696 682 791",
        "email": "jalofernandez@gmail.com",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Efectivo, tarjeta de crédito, Cash, Credit Card",
        "priceRange": "Desde 10€",
        "image": "",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34 696 682 791",
          "contactType": "Llamar para pedir presupuestos"
        }
      }
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: '@jalofernandez: page not found',
      meta: [
        // (metas) common
        { hid: 'description', name: 'description', content: 'Página de error del portfolio y CV personal de Javier Lorenzo Fernández (aka @jalofernandez). Diseñador gráfico y desarrollador web frontend un poco friki como podéis comprobar...' },
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
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }
      ]
    }
  }
}
</script>
