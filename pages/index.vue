<template>
  <div :class="['page', $route.name]">
    <TheNavbar />
    <main>
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
      <CookieControl locale="es" />
    </main>
    <TheFooter :data="owner.footer" />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheNavbar, TheFooter },
  data() {
    return {
      owner: this.$store.state.landing.owner
    }
  },
  head() {
    const landing = this.$store.state.landing
    const title = 'Inicio'
    const description =
      `Digitalizamos tu negocio o comercio ofreciendo tus productos y servicios online, en internet, en #${landing.owner.name} por ${landing.author.alias}`
    const dataImage = landing.owner.dataImage
    const canonical = landing.owner.url

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'subject', name: 'subject', content: `#${landing.owner.name}: tu negocio en internet` },

      { hid: 'og:title', property: 'og:title', content: `${title} de #${landing.owner.name}` },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },
      { hid: 'og:image', property: 'og:image', content: `${canonical}/${dataImage}` },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `${canonical}/${dataImage}` },
      { hid: 'og:image:alt', property: 'og:image:alt', content: description },

      { hid: 'twitter:title', name: 'twitter:title', content: `${title} de #${landing.owner.name}` },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:image', name: 'twitter:image', content: `${canonical}/${dataImage}` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: description },
      { hid: 'twitter:creator', name: 'twitter:creator', content: `${canonical}/${dataImage}` },
    ]

    const link = [{ rel: 'canonical', hid: 'canonical', href: canonical }]

    return {
      title,
      meta,
      link,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(landing.owner.schema),
          type: 'application/ld+json',
        },
        // (PWA) Service worker:
        // { src: '/sw.js' },
      ]
    }
  },
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
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
