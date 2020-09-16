<template>
  <main class="error old-crt-effect">
    <div class="pieces in-error"></div>
    <div class="overlay overlay--hidden"></div>
    <div class="content">
      <div class="content--inner">
        <!-- (main) Header -->
        <div class="content--header">
          <Logo />
          <Social />
        </div>
        <Slogan />
        <!-- typewritin´Title -->
        <div class="typewriter in-error">
          <h3 class="mode--code"> <span>[</span> Error 404 <span>]</span> Page Not Found </h3>
        </div>
        <!-- FOOTER navbar links -->
        <div class="content--footer">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{ name: 'index' }" class="btn is-link btn--coder menu--link glitch" data-text="<< Home">
              &lt;&lt; Home
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'portfolio' }"
              class="btn is-link btn--designer menu--link glitch"
              data-text="Portfolio >>"
            >
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
          'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.',
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
    const title = 'Page not found | #HazTuNegocioDigital'
    const description =
      'Página de error de #HazTuNegocioDigital donde tu negocio o comercio podrán estar online, en internet, e incrementar su ventas y clientes. Desarrollado por @jalofernandez'
    const canonical = 'https://haztunegociodigital.com' + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
        { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },

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
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
      link: [{ rel: 'canonical', hid: 'canonical', href: canonical }],
    }
  },
}
</script>
