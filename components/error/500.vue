<template>
  <main class="page error-500">
    <TheNavbar />
    <section class="hero is-halfheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title text-shadow is-size-1 is-size-2-mobile" v-html="internalServerError.title"></h1>
          <h2 class="subtitle is-size-5 is-size-6-mobile" v-html="internalServerError.description"></h2>
        </div>
        <div class="hero-foot has-text-centered">
          <ItemButton :btn="btn" />
        </div>
      </div>
    </section>
    <TheFooter :data="owner.footer" />
  </main>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
import ItemButton from '~/components/ItemButton.vue'

export default {
  name: 'error-500',
  components: { TheNavbar, TheFooter, ItemButton },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      owner: this.$store.state.landing.owner,
      internalServerError: [
        {
          title: '<span class="has-text-danger">Error</span> 500',
          description:
          'Parece que ha sucedido un <span class="has-text-weight-bold">error al intentar acceder al servidor</span>. <br/>¡Lo sentimos! Prueba alguna de estas formas para solucionar este error:',
          list: [
            '<b>1.</b> Recargar la página con F5 o cntrl + R.',
            '<b>2.</b> Dejar un margen de tiempo para volver intentar entrar a la página ya que es posible que haya alguna tarea del servidor que impida entrar a la web por el momento.',
            '<b>3.</b> Entrar en una pestaña de incógnito o borrar la cache de tu navegador.',
            '<b>4.</b> Eliminar las Cookies, cerrar el navegador y volver abrirlo.'
          ]
        }
      ],
      btn: {
        copy: this.$store.state.landing.btn.backToHome,
        to: ''
      }
    }
  },
  head() {
    const landing = this.$store.state.landing
    const title = 'Error 500: Internal Server Error'
    const description =
      `Página de error 500 en #${landing.owner.name}. Parece que ha sucedido un error al intentar acceder al servidor. ¡Lo sentimos mucho!`
    const canonical = landing.owner.url + this.$route.path

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'subject', name: 'subject', content: `${title} de #${landing.owner.name}` },

      { hid: 'og:title', property: 'og:title', content: `${title} de #${landing.owner.name}` },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },

      { hid: 'twitter:title', name: 'twitter:title', content: `${title} de #${landing.owner.name}` },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
    ]

    const link = [
      { rel: 'canonical', hid: 'canonical', href: canonical },
      // { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
      // { rel: 'alternate', hid: 'alternate', href: canonical+'#!' }
    ]

    return {
      title,
      meta,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { 
          innerHTML: JSON.stringify(landing.owner.schema),
          type: 'application/ld+json'
        },
      ]
    }
  }
};
</script>
