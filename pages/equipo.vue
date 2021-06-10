<template>
  <div :class="['page', $route.name]">
    <TheNavbar />
    <main>
      <section class="hero is-fullheight" aria-label="Autor">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title text-shadow is-size-2 is-size-3-mobile">
              Hecho por <span class="has-text-success">negocios</span> para
              negocios
            </h1>
            <h4 class="subtitle is-size-5 is-size-6-mobile">
              Con #{{ owner.name }} <span class="has-text-weight-medium">autónomos</span>,
              <span class="has-text-weight-medium">pymes</span> y
              <span class="has-text-weight-medium">negocios</span> en general
              </br>
              pueden digitalizar sus productos y servicios de manera cómoda, rápida y
              eficaz.
            </h4>
            <p class="mt-5 mb-2">
              <em>Servicio y tecnología ofrecida por:</em>
            </p>
            <div class="jalo old-crt-effect">
              <div class="jalo-header">
                <Logo />
                <Slogan />
              </div>
              <div class="jalo-footer">
                <a href="https://jalofernandez.com" target="_blank" title="Ir al portfolio online de @jalofernandez">
                  Ver website
                </a>
                <Social />
              </div>
              <div class="line--anim"></div>
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
import Logo from '~/components/Logo.vue'
import Slogan from '~/components/Slogan.vue'
import Social from '~/components/Social.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
    Logo,
    Slogan,
    Social
  },
  data() {
    return {
      owner: this.$store.state.landing.owner,
    };
  },
  head() {
    const landing = this.$store.state.landing
    const title = 'Equipo'
    const description =
      `${landing.author.alias} diseñador, desarrollador y responsable de #${landing.owner.name} para digitalizar tu pyme, negocio o comercio ofreciendo tus productos y servicios online`
    const dataImage = landing.owner.dataImage
    const canonical = landing.owner.url + this.$route.path

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'subject', name: 'subject', content: `${title} de #${landing.owner.name} y ${landing.author.alias}` },

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

    return {
      title,
      meta,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(landing.owner.schema),
          type: "application/ld+json",
        },
        // (PWA) Service worker:
        // { src: "/sw.js" },
      ],
      // Pre-fetch and return recipe data server-side
      // async asyncData(context) {
      // },
      link: [
        // Canonical url
        { rel: "canonical", hid: "canonical", href: canonical },
      ],
    };
  },
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
  },
};
</script>
