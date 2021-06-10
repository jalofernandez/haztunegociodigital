<template>
  <div :class="['page', $route.name]">
    <TheNavbar />
    <main>
      <section class="hero is-fullheight-with-navbar has-video">
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

      <SectionTitle :header="header.features" :id="'0'" />
      <SectionChessBoard :items="features" :page="$route.name" aria-label="Negocios digitalizados"/>

      <SectionTitle :header="header.advantages" :id="'1'" aria-label="Ventajas de digitalizar tu negocio"/>
      <SectionMediaObject :media="advantages" />
    </main>
    <TheFooter :data="owner.footer" />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import SectionChessBoard from '~/components/SectionChessBoard.vue'
import SectionMediaObject from '~/components/SectionMediaObject.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
    SectionTitle,
    SectionChessBoard,
    SectionMediaObject,
  },
  data() {
    return {
      owner: this.$store.state.landing.owner,
      header: {
        features: 'Clientes como estos ya confían en nosotros:',
      },
      features: [
        {
          title: '...Cocino en tu casa',
          description:
            'Llegaré a tu casa con tiempo suficiente para cocinar el menú acordado previamente. Si eres fan de los fogones aprovecha para quedarte durante la preparación de los platos y así <b>aprender de una cocinera profesional</b>.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: true,
            // src: 'chefioana-video-cocinando.mp4',
            src: 'M3j8HmSZn6E',
            alt: 'Ioana Chef cocinando en tu casa'
          },
          reflected: false
        },
        {
          title: '...Realizo el servicio a tu ritmo',
          description:
            'Yo en persona me encargaré del <b>servicio de mesa</b>, explicándote los detalles de cada plato si así lo deseáis y al ritmo que cada comensal prefiera, sin prisas o con ellas. El servicio será discreto y profesional, para <b>garantizar una velada cómoda y discreta</b>.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: true,
            // src: 'chefioana-video-servicio-de-mesa.mp4',
            src: 'vLIveAzZmaw',
            alt: 'Ioana Chef realizando un servicio de mesa'
          },
          reflected: true
        },
        {
          title: '...Recojo y limpio la cocina',
          description:
            'Y antes de irme <b>limpiaré la cocina</b>, la <b>vajilla</b> y los utensilios utilizados tanto en la elaboración como en la degustación del menú. Podrás disfrutar de una sobremesa sin prisas, sabiendo que <b>limpian por ti</b>.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: true,
            // src: 'chefioana-video-menu-limpieza.mp4',
            src: '3tgk7-sPj8E',
            alt: 'Ioana Chef realizando la limpieza posterior a un servicio'
          },
          reflected: false
        },
        {
          title: '...No te costará más',
          description:
            '<b>Sin tener que pagar extras</b> de envío, incremento por terraza ni costes adicionales... El precio no variará respecto al menú pactado previa cita. Además disponemos de <b>ofertas especiales</b> para determinados gremios.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: false,
            src: '640x360.png',
            alt: 'Ioana Botis'
          },
          reflected: true
        }
      ],
      advantages: [
        {
          title: '¡Es comodísimo!',
          description:
            '<span class="has-text-weight-semibold">No necesitas salir de casa</span> ni coger el coche, aguantar el tráfico, tener que dar vueltas para aparcar o pagar parking, la pereza de que haga mal tiempo...',
          img: 'icons/chefioana-icon--en-casa.svg',
          alt: '¡Es comodísimo!'
        },
        {
          title: '¡Es exclusivo!',
          description:
            'Tienes al <span class="has-text-weight-semibold">cocinero y camarero en exclusiva</span> para ti y tus comensales sin tiempos de espera, ni guardar cola y al ritmo que tú marques.',
          img: 'icons/chefioana-icon--exclusivo.svg',
          alt: '¡Es exclusivo!'
        },
        {
          title: '¡Sin molestias!',
          description:
            '<span class="has-text-weight-semibold">Nada de</span> tener que <span class="has-text-weight-semibold">hacer la compra</span> antes, <span class="has-text-weight-semibold">cocinar</span>, <span class="has-text-weight-semibold">servir</span> mientras los demas disfrutan ya de la cena, <span class="has-text-weight-semibold">fregar</span> o poner lavavajillas y retirar tras la velada...',
          img: 'icons/chefioana-icon--cocinar.svg',
          alt: '¡Es molestias!'
        },
        {
          title: '¡El mismo precio!',
          description:
            '<span class="has-text-weight-semibold">sin costes adicionales</span> de trasporte, incremento por terraza...',
          img: 'icons/chefioana-icon--precio.svg',
          alt: '¡Es mismo precio!'
        },
        {
          title: '¡Con quien tú quieras!',
          description:
            '<span class="has-text-weight-semibold">Niños y mascotas permitidas</span>. Como es tu casa el derecho de admisión lo pones tú 😁',
          img: 'icons/chefioana-icon--mascotas.svg',
          alt: '¡Con quien tú quieras!'
        },
      ],
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
