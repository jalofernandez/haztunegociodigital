<template>
  <!-- <main class="home old-crt-effect"> -->
  <!-- <div class="pieces" style='background-image: url(img/index/normal.jpg); background-size: 100% auto;' data-img-alt='url(img/index/alt.jpg)' data-img-code='url(img/index/code.jpg)'></div> -->

  <!-- <div class="pieces"></div>
    <div class="overlay overlay--hidden"></div>
    <div class="content">

      <div class="content--inner">
        <div class="content--header">
          <h2 class="title">
            <transition name="fade" :duration="{ enter: 500, leave: 500 }">
              <span class="mode mode--design is-glitch glitch--2" v-if="isModeDesign">
                @jalofernandez
              </span>
            </transition>
            <transition name="fade" :duration="{ enter: 600, leave: 500 }">
              <span class="mode mode--code is-glitch glitch--1" v-if="isModeCode">
                @jalofernandez
              </span>
            </transition>
          </h2>
          <Social />
        </div>
        <Slogan />

        <transition name="slide-fade">
          <div class="menu" v-show="isModeDesign">
            <ul class="menu--inner">
              <li class="menu--item">
                <a class="menu--link" href="javascript:" title="Título menu diseñador">
                  _as graphic designer:
                </a>
              </li>
              <li :class="'menu--item ' + design.filter" v-for="(design, index) in links.designer" :key="index">
                <nuxt-link
                  :to="{ name: 'portfolio' }"
                  class="menu--link glitch carapo"
                  :data-text="design.copy"
                  :title="design.title"
                >
                  {{ design.copy }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </transition>
        
        <transition name="fade">
          <div class="menu menu--code" v-show="!isModeDesign">
            <ul class="menu--inner typewriter is-home">
              <li class="menu--item mode--code">
                <a class="menu--link" href="javascript:" title="Título menu desarrollador">
                  _as UX/UI &amp; web developer:
                </a>
              </li>
              <li class="menu--item mode--code" v-for="(code, index) in links.coder" :key="index">
                <a
                  :class="['menu--link', 'glitch', { 'random-anim': randomAnim }]"
                  :href="code.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :data-text="code.copy"
                  :title="code.title"
                >
                  {{ code.copy }}
                </a>
              </li>
            </ul>
          </div>
        </transition>
        
        <div class="content--footer">
          <div :class="['switch', 'mode', { 'mode--design': isModeDesign, 'mode--code': isModeCode }]">
            <a
              :class="['switch--item', { 'is-current': isModeDesign }]"
              href="javascript:"
              title="Ver menu diseñador"
              @click="changeMode()"
            >
              <span class="mode mode--design">
                Designer
              </span>
            </a>
            <a
              :class="['switch--item', { 'is-current': !isModeDesign }]"
              href="javascript:"
              title="Ver menu desarrollador"
              @click="changeMode()"
            >
              <span class="mode mode--design">
                Coder
              </span>
            </a>
          </div>
          <div class="link-wrap">
            <nuxt-link
              :to="{ name: 'cv-resume' }"
              class="contact-link mode mode--design is-glitch glitch--1"
              title="Ver portfolio de trabajos de @jalofernandez"
            >
              _check my profile
            </nuxt-link>
          </div>
          <nuxt-link
            :to="{ name: 'legal' }"
            class="mode mode--coder is-glitch glitch--3"
            title="Ver términos legales de @jalofernandez"
          >
            Legal
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="loading"></div>
    <div class="line--anim"></div> -->
  <!-- </main> -->

  <main class="home">
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Home page
          </h1>
          <h2 class="subtitle">
            #HazTuNegocioDigital
          </h2>
        </div>
      </div>
    </section>
    <TheFooter :data="business.name" />
  </main>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheFooter },
  data() {
    return {
      business: this.$store.state.footer.landing,
      // Oldies: erase them asap!
      randomAnim: true,
      isModeDesign: true,
      isModeCode: false,
      links: {
        designer: [],
        coder: [],
      },
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'additionalType': 'jalofernández design webmaster frontend diseño gráfico',
        '@id': 'https://haztunegociodigital.com',
        'url': 'https://haztunegociodigital.com',
        'sameAs': [
          'https://www.instagram.com/jalofernandez/?ref=badge',
          'https://twitter.com/jalofernandez',
          'https://www.linkedin.com/in/javierlorenzofernandez/',
          'https://github.com/jalofernandez',
          'https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw',
          'https://www.facebook.com/jalofernandez?ref=tn_tnmn',
        ],
        'logo': '',
        'name': 'jalofernández diseño gráfico y desarrollo web en Madrid, España',
        'description':
          'Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.',
        'telephone': '+34 696 682 791',
        'email': 'jalofernandez@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 10€',
        'image': '',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 696 682 791',
          'contactType': 'Llamar para pedir presupuestos',
        },
      },
    }
  },
  head() {
    const title = '#HazTuNegocioDigital por @jalofernandez'
    const description =
      'En #HazTuNegocioDigital digitalizamos tu negocio o comercio ofreciendo tus productos y servicios online, en internet, por @jalofernandez: designer + coder'
    const canonical = 'https://haztunegociodigital.com'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Diseño gráfico y desarrollo web' },
        { hid: 'subject', name: 'subject', content: description },

        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
        // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
        // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
        // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
        // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
        // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' },
        // (PWA) Service worker:
        { src: '/sw.js' },
      ],
      // Pre-fetch and return recipe data server-side
      // async asyncData(context) {
      // },
      link: [
        // Canonical url
        { rel: 'canonical', hid: 'canonical', href: canonical },
        // Pre-fetch and return recipe data server-side
        { rel: 'dns-prefetch', href: '//twitter.com/jalofernandez' },
        { rel: 'dns-prefetch', href: '//www.instagram.com/jalofernandez/?ref=badge' },
        { rel: 'dns-prefetch', href: '//www.linkedin.com/in/javierlorenzofernandez/' },
        { rel: 'dns-prefetch', href: '//www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw' },
        { rel: 'dns-prefetch', href: '//www.facebook.com/jalofernandez?ref=tn_tnmn' },
        { rel: 'dns-prefetch', href: '//github.com/jalofernandez' },
        { rel: 'dns-prefetch', href: '//www.upplication.com/en/' },
        { rel: 'dns-prefetch', href: '//proyectogastronomix.org/' },
        { rel: 'dns-prefetch', href: '//widitrade.com/' },
        { rel: 'dns-prefetch', href: '//peluqueriacanessa.com/' },
        { rel: 'dns-prefetch', href: '//ecomerzpro.net/' },
        { rel: 'dns-prefetch', href: '//capaball.com/app/#/login/' },
        { rel: 'dns-prefetch', href: '//jalofernandez.github.io/lfcabogados/' },
      ],
    }
  },
  // mounted() {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', function() {
  //       navigator.serviceWorker
  //         .register('/sw.js')
  //         .then(function(registration) {
  //           // Registration was successful :)
  //           console.log('ServiceWorker registration successful with scope: ', registration.scope)
  //         })
  //         .catch(function(err) {
  //           // Registration failed :(
  //           console.log('ServiceWorker registration failed: ', err)
  //         })
  //     })
  //   }
  // },
  methods: {
    // changeMode() {
    //   ;(this.isModeDesign = !this.isModeDesign), (this.isModeCode = !this.isModeCode)
    // },
  },
}
</script>

<style lang="sass">
@import '~assets/bulma'
</style>
