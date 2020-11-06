<template>
  <main class="contact">
    <TheNavbar />
    <section class="hero is-fullheight">
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
              <a href="https://jalofernandez.com" target="_blank" title=""
                >Ver website</a
              >
              <Social />
            </div>
            <div class="line--anim"></div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter :data="owner.footer" />
  </main>
</template>

<script>
import TheNavbar from "~/components/TheNavbar.vue";
import TheFooter from "~/components/TheFooter.vue";
import Logo from "~/components/Logo.vue";
import Slogan from "~/components/Slogan.vue";
import Social from "~/components/Social.vue";

export default {
  components: { TheNavbar, TheFooter, Logo, Slogan, Social },
  data() {
    return {
      owner: this.$store.state.landing.owner,
      randomAnim: true,
      isModeDesign: true,
      isModeCode: false,
      links: {
        designer: [],
        coder: [],
      },
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        additionalType:
          "jalofernández design webmaster frontend diseño gráfico",
        "@id": "https://haztunegociodigital.com",
        url: "https://haztunegociodigital.com",
        sameAs: [
          "https://www.instagram.com/jalofernandez/?ref=badge",
          "https://twitter.com/jalofernandez",
          "https://www.linkedin.com/in/javierlorenzofernandez/",
          "https://github.com/jalofernandez",
          "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
          "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        ],
        logo: "",
        name: "jalofernández diseño gráfico y desarrollo web en Madrid, España",
        description:
          "Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.",
        telephone: "+34 696 682 791",
        email: "jalofernandez@gmail.com",
        currenciesAccepted: "EUR",
        paymentAccepted: "Efectivo, tarjeta de crédito, Cash, Credit Card",
        priceRange: "Desde 10€",
        image: "",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34 696 682 791",
          contactType: "Llamar para pedir presupuestos",
        },
      },
    };
  },
  head() {
    const title = "Contacto"
    const description =
      "Contactar con #HazTuNegocioDigital para digitalizar tu negocio o comercio ofreciendo tus productos y servicios online, en internet, por @jalofernandez: designer + coder"
    const canonical = "https://haztunegociodigital.com"

    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        {
          hid: "Classification",
          name: "Classification",
          content: "Diseño gráfico y desarrollo web",
        },
        { hid: "subject", name: "subject", content: description },

        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        { hid: "og:url", property: "og:url", content: canonical },
        // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
        // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
        // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
        // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
        // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
        // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json",
        },
        // (PWA) Service worker:
        { src: "/sw.js" },
      ],
      // Pre-fetch and return recipe data server-side
      // async asyncData(context) {
      // },
      link: [
        // Canonical url
        { rel: "canonical", hid: "canonical", href: canonical },
        // Pre-fetch and return recipe data server-side
        { rel: "dns-prefetch", href: "//twitter.com/jalofernandez" },
        {
          rel: "dns-prefetch",
          href: "//www.instagram.com/jalofernandez/?ref=badge",
        },
        {
          rel: "dns-prefetch",
          href: "//www.linkedin.com/in/javierlorenzofernandez/",
        },
        {
          rel: "dns-prefetch",
          href: "//www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        },
        {
          rel: "dns-prefetch",
          href: "//www.facebook.com/jalofernandez?ref=tn_tnmn",
        },
      ],
    };
  },
  methods: {
    // changeMode() {
    //   ;(this.isModeDesign = !this.isModeDesign), (this.isModeCode = !this.isModeCode)
    // },
  },
};
</script>
