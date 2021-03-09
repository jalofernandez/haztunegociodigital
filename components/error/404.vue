<template>
  <main class="error-404">
    <TheNavbar />
    <!-- <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div
          class="wave waveTop"
          style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
        ></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div
          class="wave waveMiddle"
          style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
        ></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div
          class="wave waveBottom"
          style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
        ></div>
      </div>
    </div> -->
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container has-text-centered card-bg-img is-broken-glass">
          <h1 class="title text-shadow is-size-1 is-size-2-mobile" v-html="pageNotFound.title"></h1>
          <h2 class="subtitle is-size-5 is-size-6-mobile" v-html="pageNotFound.description"></h2>
          <!-- <div class="artwork">
            <img
              src="/artworks/htnd-artwork--broken-glass.svg"
              :title="`Creatividad de #${owner.name}: cristal roto para error 404`"
              :alt="`Creatividad de #${owner.name}: cristal roto para error 404`"
              width="400"
              height="338"
            />
          </div> -->
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
  name: 'error-404',
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
      pageNotFound: {
        title: '<span class="has-text-danger">Error</span> 404',
        description:
          'La página que estás buscando <span class="has-text-weight-medium">no está aquí</span> 🥵 <br />¡Lo sentimos! Podría ser por alguna de estas causas como:',
        list: [
          '<b>1.</b> Que haya tecleado incorrectamente la dirección URL.',
          '<b>2.</b> Que haya perdido su conexión a internet.',
          '<b>3.</b> Que la página esté obsoleta y haya sido eliminada.',
          '<b>4.</b> Que la página no exista en el idioma que solicita.'
        ]
      },
      btn: {
        copy: this.$store.state.landing.btn.backToHome,
        to: ''
      }
    }
  },
  head() {
    const title = '404: ' + this.pageNotFound.title + ' en'
    const description =
      'Página de error 404 del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      // IMP! Better remvoe canonical metatags links in order to avoid weird URL generation 
      // link: [
      //   { rel: 'canonical', hid: 'canonical', href: canonical },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      // ]
    }
  }
};
</script>
