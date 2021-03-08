<template>
  <main class="sitemap">
    <TheNavbar />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title text-shadow is-size-1 is-size-3-mobile">
            Mapa del <span class="has-text-success">sitio web</span></h1
          >
          <h2 class="subtitle is-size-5 is-size-6-mobile">
            <span class="has-text-weight-medium">Sitemap</span> o listado de todos los enlaces internos disponibles en
            este sitio web
          </h2>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="menu">
                <p class="menu-label">
                  Landing:
                </p>
                <ul class="menu-list">
                  <li>
                    <ul>
                      <li>
                        <nuxt-link to="/" class="navbar-item" :title="`Ir a la página de inicio de #${owner.name}`">
                          <span>Inicio / Home</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link
                          to="/contacto"
                          class="navbar-item"
                          :title="`Ir a la página de contacto de #${owner.name}`"
                        >
                          <span>Contacto</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link
                          to="/legal"
                          class="navbar-item"
                          :title="`Ir a la página de términos legales de #${owner.name}`"
                        >
                          <span>Legal</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p class="menu-label"> Negocios / <span class="has-text-weight-medium">Horeca</span>: </p>
                <ul class="menu-list">
                  <li>
                    <ul>
                      <li>
                        <nuxt-link
                          to="/horeca/bar-galicia"
                          class="navbar-item bar-galicia"
                          :title="`Ir a la página del Bar Galicia en #${owner.name}`"
                        >
                          <span>Bar galicia</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link
                          to="/horeca/la-antigua-bodeguita"
                          class="navbar-item la-antigua-bodeguita"
                          :title="`Ir a la página de La antigua Bodeguita en #${owner.name}`"
                        >
                          <span>La Antigua Bodeguita</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <!-- TODO: enabled the following links when service/business are ready to use -->
                <!-- <p class="menu-label"> Negocios / <span class="has-text-weight-medium">Servicios</span>: </p>
                <ul class="menu-list">
                  <li>
                    <ul>
                      <li>
                        <nuxt-link to="/servicios/canessa" class="navbar-item canessa" :title="`Ir a la página de peluquería canina Canessa en #${owner.name}`">
                          <span>Peluquería canina Canessa</span>
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/servicios/jalofernandez" class="navbar-item jalofernandez" :title="`Ir a la página de @jalofernandez en #${owner.name}`">
                          <span>@jalofernandez</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter :data="owner.footer" />
  </main>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheNavbar, TheFooter },
  data() {
    return {
      owner: this.$store.state.landing.owner,
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
        'description': 'Página de error de Haz tu negocio digital',
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
    const title = 'Mapa del sitio web'
    const description =
      'Sitio web o índice de páginas de #HazTuNegocioDigital: Únete a la transformación digital y aumenta tus ventas con tu negocio también en internet. Desarrollado por @jalofernandez'
    const canonical = 'https://haztunegociodigital.com' + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Error' },
        { hid: 'subject', name: 'subject', content: 'Error 404' },

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
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
