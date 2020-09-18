<template>
  <main :class="['horeca', business.short, { 'aside-menu-open': showAside }]">
    <!-- Floating button to trigger Aside navbar -->
    <button class="button js-aside light" type="button" @click="showAside = !showAside">
      <span class v-if="!showAside">Abrir secciones +</span>
      <span class v-else>Cerrar secciones &times;</span>
    </button>

    <Modal
      :class="{ 'md-show': isModalVisible }"
      @close="closeModal()"
      :data="business.schedule"
      v-if="business.schedule"
    />

    <!-- Aside to navigate across dishes sections -->
    <nav class="aside-menu with-anim">
      <h2 class="icon icon-lab">{{ business.name }}</h2>
      <ul>
        <li v-for="(menu, index) in business.menus" :key="index">
          <a class="icon icon-data" href="#">{{ menu.title }}</a>
        </li>
      </ul>
    </nav>

    <!-- Modal dialogs for each item to shown info details -->
    <Detail :business="business" />

    <div class="dishes">
      <!-- Business info -->
      <div
        class="business cover"
        :style="{
          'background-image':
            'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${business.cover}.jpg`) + ')',
        }"
        v-if="business.cover"
      ></div>
      <div class="business data">
        <h1 class="data name">{{ business.name }}</h1>
        <ul v-if="business.address || business.phone || business.schedule">
          <li>
            <a
              class="data address"
              :href="business.gmap"
              :title="`Ver dirección de ${business.name}`"
              target="_blank"
              rel="noopener noreferrer"
              v-if="business.address"
              >{{ business.address }}</a
            >
          </li>
          <li :class="business.schedule ? 'has-schedule' : null">
            <a
              class="data phone"
              :href="`tel:${business.phone}`"
              :title="`Llamar al ${business.name}: ${business.phone}`"
              v-if="business.phone"
              >{{ business.phone }}</a
            >
            <button type="button" class="button light" @click="showModal()" v-if="business.schedule">
              Ver horario
            </button>
          </li>
        </ul>
      </div>

      <Message :data="business.messages" v-if="business.messages" />

      <!-- Items list :: all Menu Dishes & Beverages -->
      <Item :business="business" />
    </div>

    <div class="message thankfulness">
      <p>¡<b>Gracias</b> por su visita! 😊</p>
    </div>

    <Footer :data="business.name" />
  </main>
</template>

<script>
import Modal from '~/components/Modal.vue'
import Message from '~/components/Message.vue'
import Detail from '~/components/Detail.vue'
import Item from '~/components/Item.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Modal, Message, Detail, Item, Footer },
  data() {
    return {
      isModalVisible: false,
      showAside: false,
      business: {
        name: 'La Antigua Bodeguita',
        short: 'la-antigua-bodeguita',
        type: 'Restaurante, bar, cafetería',
        cover: 'cover',
        address: 'Calle Miguel Hernández, 5, 28342 Valdemoro, Madrid',
        place: 'Valdemoro, Madrid',
        gmap: 'https://goo.gl/maps/TGCdSV6Y9rZ1gxQU6',
        phone: '918955364',
        schedule: {
          days: [
            { day: 'Lunes', hour: 'Cerrado' },
            { day: 'Martes', hour: '9:00 - 1:00' },
            { day: 'Miercoles', hour: '9:00 - 1:00' },
            { day: 'Jueves', hour: '9:00 - 1:00' },
            { day: 'Viernes', hour: '9:00 - 1:00' },
            { day: 'Sábado', hour: '9:00 - 1:00' },
            { day: 'Domingo', hour: '9:00 - 1:00' },
          ],
        },
        messages: null,
        menus: [
          {
            title: 'Menú del día',
            desc: 'Disponible de <span class="semibold">Martes</span> a <span class="semibold">Viernes</span>.',
            items: [
              {
                id: '99',
                show: false,
                name: 'Menú diario',
                img: null,
                desc: 'Preguntar los platos ofrecidos cada día. Incluye pan, bebida, postre o café.',
                prices: [{ name: 'Precio', price: '10' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Cervezas',
            items: [
              {
                id: '50',
                show: false,
                name: 'Cerveza de grifo',
                img: 'cerveza-grifo',
                desc: 'Disponemos de grifos de: Estrella de Galicia, Mahou y Heineken.',
                prices: [
                  { name: 'Caña', price: '1,80' },
                  { name: 'Copa', price: '2,50' },
                  { name: 'Maceta', price: '3' },
                  { name: 'Jarra', price: '3,40' },
                ],
                allergens: ['gluten'],
              },
              {
                id: '51',
                show: false,
                name: 'Cerveza en botella',
                img: 'cerveza-tercio',
                desc: 'Disponemos de: Estrella de Galicia, Mahou y Heineken.',
                prices: [
                  { name: 'Botellín', price: '1,60' },
                  { name: 'Tercio', price: '2,50' },
                ],
                allergens: ['gluten'],
              },
              {
                id: '52',
                show: false,
                name: 'Cerveza sin gluten',
                img: 'cerveza-tercio-sin-gluten',
                desc: 'Tercio de Mahou sin gluten.',
                prices: [{ name: 'Tercio', price: '2,80' }],
                allergens: null,
              },
              {
                id: '53',
                show: false,
                name: 'Cerveza 1906',
                img: 'cerveza-1906',
                desc: 'Tercio de cerveza especial reserva 1906 de Estrella de Galicia.',
                prices: [{ name: 'Tercio', price: '2,90' }],
                allergens: ['gluten'],
              },
              {
                id: '54',
                show: false,
                name: 'Cerveza tostada 0,0',
                img: 'cerveza-tostada-00',
                desc: 'Mahou 0,0 Tostada tiene una combinación inimitable de maltas tostadas.',
                prices: [{ name: 'Tercio', price: '2,50' }],
                allergens: ['gluten'],
              },
            ],
          },
        ],
      },
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'additionalType': 'Bar Galicia de Valdemoro en jalofernández',
        '@id': 'https://haztunegociodigital.com/horeca/bar-galicia',
        'url': 'https://haztunegociodigital.com/horeca/bar-galicia',
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://github.com/jalofernandez",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        'logo': '',
        'name': 'Bar Galicia Valdemoro',
        'description': 'Bar Galicia de Valdemoro especializado en raciones y cocina gallega',
        'telephone': '+34 696 682 791',
        'email': 'jalofernandez@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': '',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 91 895 53 64',
          'contactType': 'Llamar para reservar o recoger pedidos',
        },
      },
    }
  },
  head() {
    const businessName = this.business.name
    const businessShort = this.business.short
    const businessPlace = this.business.place
    const businessType = this.business.type

    const title = `${businessName} en #HazTuNegocioDigital`
    const description = `${businessName} en ${businessPlace} por @jalofernandez`
    const type = `${businessType} en ${businessPlace}`

    const canonical = `https://haztunegociodigital.com/horeca/${businessShort}`

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'Classification', name: 'Classification', content: businessType },
      { hid: 'subject', name: 'subject', content: type },

      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },
      // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
      // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
      // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
      // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },

      // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
      // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
      // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
    ]

    const link = [{ rel: 'canonical', hid: 'canonical', href: canonical }]

    // if (this.restaurant.web) {
    //   link.push({ rel: 'dns-prefetch', href: this.restaurant.web })
    // }

    return {
      title,
      meta,
      link,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: 'application/ld+json',
        },
      ],
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    // modalsBlockTitle(info) {
    //   let strClean = info.replace(/[^èéòàùì\w\s]/gi, '')
    //   return strClean.replace(/\s/g, '').toLowerCase()
    // },
  },
}
</script>

<style lang="sass">
main.horeca
  &.la-antigua-bodeguita
    .business.data .name,
    .footer .name
      // font-family: cursive
      color: coral
    .business.data .name
      font-size: 1.5rem
    .footer .name
      font-weight: 600
</style>
