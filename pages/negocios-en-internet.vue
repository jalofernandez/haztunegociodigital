<template>
  <div :class="['page', $route.name]">
    <TheNavbar />
    <main>
      <section class="hero is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title text-shadow is-size-1 is-size-3-mobile">
              Negocios <span class="has-text-success">digitalizados</span></h1
            >
            <h2 class="subtitle is-size-5 is-size-6-mobile">
              Ellos ya se han unido a la <span class="has-text-weight-medium">transformación digital</span> con nosotros:
            </h2>
          </div>
        </div>
      </section>
      <section class="hero" aria-label="Ejemplos de negocios digitalizados con nosotros">
        <div class="hero-body">
          <div class="container">
            <div class="sectionIframe withFlexbox">
              <div class="iframeMenu withCustomList">
                <ul>
                  <li v-for="(business, index) in businesses" :key="index">
                    <button
                      type="button"
                      class="button is-rounded is-light"
                      @click="summitSrc(business[1])"
                    >
                      {{ business[0] }}
                    </button>
                  </li>
                </ul>
              </div>
              <div class="iframeItem">
                <article class="sectionItem withDevice">
                  <!-- iPhone device -->
                  <div class="devicesWrapper">
                    <div class="device notch">
                      <span></span>
                    </div>
                    <span class="device swipBar"></span>
                    <div class="withIframe">
                      <iframe 
                        :src="iframeSrc" 
                        name="projects" 
                        title="Marco en línea"
                      ></iframe>
                    </div>
                    <div class="device iphone"></div>
                  </div>
      
                </article>
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
      owner: this.$store.state.landing.owner,
      iframeSrc: 'https://haztunegociodigital.com',
      businesses: {
        barGalicia: [ 'Bar Galicia', 'https://haztunegociodigital.com/horeca/bar-galicia' ],
        laAntiguaBodeguita: [ 'La Antigua Bodeguita', 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita' ],
        oleVeinti3: [ 'Taberna Olé Veinti3', 'https://haztunegociodigital.com/horeca/ole-veinti3' ],
        chefIoana: [ 'Chef Ioana en tu casa', 'http://chefioana.firebaseapp.com' ],
        canessa: [ 'Peluquería canina Canessa', 'https://peluqueriacanessa.com' ],
        jalofernandez: [ '@jalofernandez portfolio', 'https://jalofernandez.com' ],
      },
    }
  },
  head() {
    const landing = this.$store.state.landing
    const title = 'Negocios digitalizados'
    const description =
      `Negocios digitalizados a los que ya hemos ayudado a tener presencia en internet mejorando sus ventas con #${landing.owner.name}. Desarrollado por ${landing.author.alias}`
    const dataImage = landing.owner.dataImage
    const canonical = landing.owner.url + this.$route.path

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'subject', name: 'subject', content: `Sitemap de #${landing.owner.name}` },

      { hid: 'og:title', property: 'og:title', content: `Sitemap de4 #${landing.owner.name}` },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },
      { hid: 'og:image', property: 'og:image', content: `${canonical}/${dataImage}` },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `${canonical}/${dataImage}` },
      { hid: 'og:image:alt', property: 'og:image:alt', content: description },

      { hid: 'twitter:title', name: 'twitter:title', content: `Sitemap de #${landing.owner.name}` },
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
          type: 'application/ld+json'
        }
      ]
    }
  },
  // to enable "scroll to top" behaviour when page loads
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    summitSrc(business) {
      this.iframeSrc = business
    }
  }
}
</script>

<style lang="sass" scoped>
/* VARS */
$color-blue-darkest: #01151c
$color-header: #146aa7
$device-width: 360px
$device-height: 720px
$device-browser-height: 25px
$device-border-radius: 30px
$device-camera-size: 12px

/* HELPERS */
.withFlexbox
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

/* MODIFIERS */
.sectionIframe
  justify-content: flex-start
  @media screen and (min-width: 769px)
    flex-direction: row
    max-width: 625px
    margin: 0 auto

.iframeMenu,
.iframeItem 
  max-width: 100%
  @media screen and (min-width: 769px)
    height: 560px // to overwrite value

.iframeMenu
  width: 425px

.iframeItem
  width: 100%

.sectionIframe ul
  margin: 0
  padding: 0
  list-style: none
  padding-top: 2rem
  li
    padding: 0.5rem 1rem

.withCustomList a
  font-size: 1rem
  text-decoration: none


.sectionWrapper.withDevices
  position: relative
  .sectionIframe
    max-width: 720px
    margin: 0 auto
    .withIframeMenu ul
      margin-top: 2rem


/* IFRAME PROJECTS SECTION */
.withDevice
  transform: scale(0.75)
  position: relative
  bottom: 12%

/* iphone´s Device & inner iFrame */
.devicesWrapper
  position: relative
  margin: 0 auto
  background-color: #444

.devicesWrapper,
.iphone,
.withIframe,
iframe
  width: calc(#{$device-width + 2px}) // to fit screen with notch

.withIframe,
iframe
  height: calc(#{$device-height} - #{$device-browser-height}) // 680px device height less browser´s top bar
  border-bottom-left-radius: $device-border-radius
  border-bottom-right-radius: $device-border-radius
  position: absolute
  right: 0

iframe
  top: $device-browser-height
  background-color: $color-header
  border-color: $color-blue-darkest

.withIframe
  background-color: transparent
  top: 0
  z-index: 2

/* iphone´s Case & Frame */
.iphone
  z-index: 1
  box-shadow: 0px 0px 0px 14px #1f1f1f, 0px 0px 0px 8px #191919, 0px 0px 0px 16px #111
  height: $device-height
  border-radius: $device-border-radius
  &::before,
  &::after
    content: ''
    position: absolute
    left: 50%
    transform: translateX(-50%)

  /* iphone´s Buttons: volume & block ones */
  span,
  span::after
    width: 10px
    height: 50px
    background-color: #1f1f1f
    border-radius: 5px

  span 
    top: 20%
    left: -18px
    &::after
      content: ''
      position: relative
      display: block
      top: 60px
      left: 0
    + span
      left: auto
      right: -18px
      height: 75px
      &::after
        display: none

/* iphone´s bottom Swip Bar */
.notch,
.swipBar
  z-index: 3 // over iframe below device frame
  position: absolute

.swipBar
  width: 100px
  height: 4px
  background-color: #f2f2f2
  border-radius: 5px
  bottom: 12px
  left: 50%
  transform: translateX(-50%)

/* iphone´s Notch */
.notch
  top: 0px
  left: 25%
  width: 50%
  height: 20px
  background-color: #1f1f1f
  border-radius: 0px 0px 10px 10px
  /* iphone´s Speaker inside notch */
  span
    display: block
    color: transparent
    width: 65px
    height: 8px
    border-radius: 8px
    box-shadow: inset 0px -3px 3px 0px rgba(255, 255, 255, 0.2)
    background-color: #101010
    position: absolute
    top: 2px
    left: 50%
    transform: translateX(-50%)
    /* iphone´s Camera inside notch */
    &::after
      content: ''
      display: block
      width: $device-camera-size
      height: $device-camera-size
      border-radius: 50%
      // box-shadow: inset 0px -3px 2px 0px rgb(255 255 255 / 20%)
      box-shadow: inset 0px -3px 2px 0px rgba(255, 255, 255, .2)
      position: relative
      left: 75px
      top: -2px
    &::before
      content: ''
      display: block
      width: calc(#{$device-camera-size / 2})
      height: calc(#{$device-camera-size / 2})
      background-color: $color-header
      border-radius: 4px
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5)
      position: absolute
      top: 1px
      left: 78px // span::after width + 3 more pixels

</style>
