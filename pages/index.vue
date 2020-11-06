<template>
  <main class="home">
    <TheNavbar />
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title text-shadow is-size-1 is-size-3-mobile">
            Tu <span class="has-text-success">negocio</span> también en internet
          </h1>
          <h2 class="subtitle is-size-5 is-size-6-mobile">
            #{{ owner.name }}
            <span class="has-text-weight-medium">digitaliza tus productos</span>
            y <span class="has-text-weight-medium">servicios</span> para
            <b class="has-text-link">vender más</b>
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="level">
            <div class="level-item has-text-centered">
              <div class="card mb-2">
                <div class="card-bg-img is-mobile-apps"></div>
                <div class="card-content">
                  <p class="subtitle is-size-6-mobile">
                    <b class="has-text-success">Únete</b> a la
                    <span class="has-text-weight-medium">transformación digital</span>
                    optimizando el rendimiento de tu negocio. Internet
                    <span class="has-text-weight-medium">suma</span>.
                  </p>
                </div>
                <!-- <footer class="card-footer">
                  <p class="card-footer-item">
                    <span>
                      <a href="#">Saber más</a>
                    </span>
                  </p>
                </footer> -->
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="card mb-2">
                <div class="card-bg-img is-mobile-marketing"></div>
                <div class="card-content">
                  <p class="subtitle is-size-6-mobile">
                    <b class="has-text-success">Aumenta</b>
                    <span class="has-text-weight-medium">la visibilidad</span>
                    de tus productos y servicios fácilmente a través de
                    <span class="has-text-weight-medium">redes sociales</span>,
                    <span class="has-text-weight-medium">whatsapp</span>...
                  </p>
                </div>
                <!-- <footer class="card-footer">
                  <p class="card-footer-item">
                    <span>
                      <a href="#">Saber más</a>
                    </span>
                  </p>
                </footer> -->
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div class="card mb-2">
                <div class="card-bg-img is-online-world"></div>
                <div class="card-content">
                  <p class="subtitle is-size-6-mobile">
                    <b class="has-text-success">Incrementa</b>
                    <span class="has-text-weight-medium">tus ventas</span>
                    porque en internet tu negocio abre
                    <span class="has-text-weight-medium">24 días</span> a la semana y
                    <span class="has-text-weight-medium">365 días</span>
                    al año.
                  </p>
                </div>
                <!-- <footer class="card-footer">
                  <p class="card-footer-item">
                    <span>
                      <a href="#">Saber más</a>
                    </span>
                  </p>
                </footer> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter :data="owner.footer" />
    <CookieControl locale="es" />
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
    const title = 'Inicio'
    const description =
      'En #HazTuNegocioDigital digitalizamos tu negocio o comercio ofreciendo tus productos y servicios online, en internet, por @jalofernandez: designer + coder'
    const canonical = 'https://haztunegociodigital.com'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          hid: 'Classification',
          name: 'Classification',
          content: 'Diseño gráfico y desarrollo web',
        },
        { hid: 'subject', name: 'subject', content: description },

        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
        // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
        // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
        // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
        // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
        // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: 'application/ld+json',
        },
        // (PWA) Service worker:
        { src: '/sw.js' },
      ],
      // Pre-fetch and return recipe data server-side
      // async asyncData(context) {
      // },
      link: [
        // Canonical url
        { rel: 'canonical', hid: 'canonical', href: canonical },
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
}
</script>
