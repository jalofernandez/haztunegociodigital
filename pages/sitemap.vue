<template>
  <div :class="['page', $route.name]">
    <TheNavbar />
    <main>
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
                          <NuxtLink to="/" class="navbar-item" :title="`Ir a la página de inicio de #${owner.name}`">
                            <span>Inicio / Home</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/contacto"
                            class="navbar-item"
                            :title="`Ir a la página de contacto de #${owner.name}`"
                          >
                            <span>Contacto</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/legal"
                            class="navbar-item"
                            :title="`Ir a la página de términos legales de #${owner.name}`"
                          >
                            <span>Legal</span>
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p class="menu-label"> Negocios / <span class="has-text-weight-medium">Horeca</span>: </p>
                  <ul class="menu-list">
                    <li>
                      <ul>
                        <li>
                          <NuxtLink
                            to="/horeca/bar-galicia"
                            class="navbar-item bar-galicia"
                            :title="`Ir a la página del Bar Galicia en #${owner.name}`"
                          >
                            <span>Bar galicia</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/horeca/la-antigua-bodeguita"
                            class="navbar-item la-antigua-bodeguita"
                            :title="`Ir a la página de La antigua Bodeguita en #${owner.name}`"
                          >
                            <span>La Antigua Bodeguita</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/horeca/ole-veinti3"
                            class="navbar-item ole-veinti3"
                            :title="`Ir a la página de Taberna Olé Veinti3 en #${owner.name}`"
                          >
                            <span>Taberna Olé Veinti3</span>
                          </NuxtLink>
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
                          <NuxtLink to="/servicios/canessa" class="navbar-item canessa" :title="`Ir a la página de peluquería canina Canessa en #${owner.name}`">
                            <span>Peluquería canina Canessa</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/servicios/jalofernandez" class="navbar-item jalofernandez" :title="`Ir a la página de @jalofernandez en #${owner.name}`">
                            <span>@jalofernandez</span>
                          </NuxtLink>
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
    const title = 'Mapa del sitio web'
    const description =
      `Sitio web o índice de páginas de #${landing.owner.name}: te ayudamos a la transformación digital de tu negocio. Desarrollado por ${landing.author.alias}`
    const canonical = landing.owner.url + this.$route.path

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'subject', name: 'subject', content: `Sitemap de #${landing.owner.name}` },

      { hid: 'og:title', property: 'og:title', content: `Sitemap de #${landing.owner.name}` },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },

      { hid: 'twitter:title', name: 'twitter:title', content: `Sitemap de #${landing.owner.name}` },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
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
          type: 'application/ld+json'
        }
      ]
    }
  },
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
