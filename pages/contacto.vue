<template>
  <div :class="['page', $route.name]">
    <TheNavbar />
    <main class="mt-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13324641.58162493!2d-15.918533047838157!3d35.37831492355589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4187990fc30f33%3A0x41c5287f41992efd!2sHazTuNegocioDigital!5e0!3m2!1ses!2ses!4v1620467148613!5m2!1ses!2ses"
        width="100%"
        height="350"
        frameborder="0"
        style="border:0;" 
        allowfullscreen
        loading="lazy"
      ></iframe>
      <section class="hero is-small">
        <div class="hero-body">
          <div class="container">
            <nav class="level">
              <div class="level-item has-text-centered mb-5">
                <div>
                  <p class="heading">Contactar por <b>teléfono</b>:</p>
                  <a
                    class="button is-medium is-dark is-rounded"
                    :href="`tel:${owner.phone}`"
                    :title="`Llamar a #${owner.name}`"
                  >
                    <figure class="image is-24x24px mr-3">
                      <img
                        src="~/assets/icons/phone-in-talk.svg"
                        title="Icono de llamada por teléfono"
                        alt="Icono de llamada por teléfono"
                        width="24"
                        height="24"
                      />
                    </figure>
                    <span class="has-text-weight-medium">
                      {{ owner.phone.slice(4, owner.phone.length) }}
                    </span>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered mb-5">
                <div>
                  <p class="heading">Escribir por <b>chat</b>:</p>
                  <a
                    class="button is-medium is-dark is-rounded"
                    :href="`https://wa.me/${owner.whatsapp}`"
                    :title="`Llamar o escribir al WhatsApp ${owner.whatsapp} de #${owner.name}`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure class="image is-24x24px mr-3">
                      <img
                        src="~/assets/icons/whatsapp.svg"
                        title="Icono de WhatsApp"
                        alt="Icono de WhatsApp"
                        width="24"
                        height="24"
                      />
                    </figure>
                    <span class="has-text-weight-medium">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered mb-5">
                <div>
                  <p class="heading">Ver <b>mapa</b> completo:</p>
                  <a
                    class="button is-medium is-dark is-rounded"
                    href="https://goo.gl/maps/Aegzf2qZF4x"
                    :title="`Dirección de #${owner.name} en Google Maps`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure class="image is-24x24px mr-3">
                      <img
                        src="~/assets/icons/map-marker-outline.svg"
                        title="Icono de WhatsApp"
                        alt="Icono de WhatsApp"
                        width="24"
                        height="24"
                      />
                    </figure>
                    <span>
                      Google <span class="has-text-weight-medium">Maps</span>
                    </span>
                  </a>
                </div>
              </div>
            </nav>
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
      randomAnim: true,
      isModeDesign: true,
      isModeCode: false,
      links: {
        designer: [],
        coder: [],
      }
    };
  },
  head() {
    const landing = this.$store.state.landing
    const title = 'Contacto'
    const description =
      `Contactar con #${landing.owner.name} o ${landing.author.alias} para digitalizar tu negocio o comercio y poder ofrecer tus productos y servicios en internet`
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
        // Pre-fetch and return recipe data server-side
        {
          rel: "dns-prefetch",
          href: "//twitter.com/jalofernandez" },
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
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    // changeMode() {
    //   ;(this.isModeDesign = !this.isModeDesign), (this.isModeCode = !this.isModeCode)
    // },
  },
};
</script>
