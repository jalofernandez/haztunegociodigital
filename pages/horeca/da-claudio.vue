<template>
  <div :class="['page', 'business', business.id, { 'aside-menu-open': showAside }]">
    <!-- Floating button to trigger Aside navbar -->
    <nav
      class="navbar is-fixed-bottom bottom-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq == 'mobile' || $mq == 'smartphone' || $mq == 'tablet'"
    >
      <div class="navbar-brand">
        <a
          class="whatsapp light ml-1"
          :href="`https://wa.me/${business.whatsapp}`"
          :title="`Llamar o escribir al Whatsapp de ${business.name}`"
          target="_blank"
          rel="noopener noreferrer"
          v-if="business.whatsapp"
        >
          <img
            src="/icons/whatsapp-brands.svg"
            alt="Icono de WhatsApp"
            title="Icono de WhatsApp"
            width="40"
            height="40"
          />
        </a>
        <img
          :class="['navbar-brand-logo', { 'ml-1': !business.whatsapp }]"
          :src="require(`~/assets/negocios/${business.id}/${business.id}-logo-color.png`)"
          :alt="`Logotipo de ${business.name} en ${business.place}`"
          :title="`Logotipo de ${business.name} en ${business.place}`"
          v-if="business.logo"
        />
        <div class="is-flex is-burger-btn" @click.prevent="asideBehaviour()">
          <a
            role="button"
            :class="['navbar-burger', 'burger', { 'is-active': showAside }]"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" v-for="item in 3"></span>
          </a>
          <div class="burger-copy">
            <small class="opener" v-if="!showAside">
              Abrir <b>Carta</b>
            </small>
            <small class="closer" v-else>
              Cerrar <b>Carta</b>
            </small>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modal dialogs... -->
    <!-- ...for Schedule details -->
    <BaseModal
      :class="{ 'md-show': isModalVisible }"
      @close="closeModal()"
      :data="business.schedule"
      v-if="business.schedule"
    />
    <!-- ...for each item to shown info details -->
    <!-- COMPONENT -->
    <!-- <BusinessItemModal :businessId="business.id" :menus="business.menus"/> -->

    <transition name="slide-fade" appear>
      <div v-for="item in filterItemModal" :key="item.id" :class="['modal-wrapper', { 'md-show': showDishItemModal(item.id) }]">
        <div :id="`modal-${item.id}`" class="md-modal has-dish">
          <div class="md-content dish info">
            <button :class="['btn', 'js-close', { 'has-not-img': !item.img }]" type="button" @click="closeDishItemModal()">
              Cerrar
              <span>&times;</span>
            </button>
            <div
              class="img cover"
              :style="{
                'background-image':
                  'url(' + require(`@/assets/negocios/${business.id}/${business.id}-${item.img}.jpg`) + ')',
              }"
              v-if="item.img"
            ></div>
            <div class="details">
              <h4 class="name">{{ item.name }}</h4>
              <p class="desc" v-html="item.desc" v-if="item.desc"></p>
              <div class="prices">
                <div class="price item" v-for="(price, index) in item.prices" :key="index">
                  <small class="price name">{{ price.name }}</small>
                  <span class="price quantity" v-if="price.price">
                    <b>{{ price.price }}</b> €
                  </span>
                </div>
              </div>
              <div class="allergens prices" v-if="item.allergens">
                <div class="price item" v-for="(allergen, index) in item.allergens" :key="index">
                  <small class="helper">{{ allergen }}</small>
                  <img
                    class="allergen"
                    :src="require(`~/assets/allergens/${allergen}.svg`)"
                    :title="`Alérgeno: ${allergen}`"
                    :alt="`Alérgeno: ${allergen}`"
                    width="30"
                    height="30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="['modal-overlay', { 'md-show': showDishItemModal(item.id) }]" @click="closeDishItemModal()"></div>
      </div>
    </transition>

    <!-- Aside to navigate across dishes sections -->
    <TheAside :business="business" @aside="asideBehaviour()" />

    <main class="wrapper-menu">
      <div class="dishes">
        <!-- Business info -->
        <header class="business-header">
          <div
            class="business cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.id}/${business.id}-${business.cover}.jpg`) + ')',
            }"
            v-if="business.cover"
          ></div>
          <div class="business data">
            <h1 class="data name">{{ business.name }}</h1>
            <h4 class="data desc" v-html="business.desc" v-if="business.desc"></h4>
            <ul v-if="business.address || business.phone || business.schedule">
              <li>
                <a
                  class="data address"
                  :href="`https://goo.gl/maps/${business.gmap}`"
                  :title="`Ver dirección de ${business.name}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-if="business.address"
                >
                  {{ business.address }}
                </a>
              </li>
              <li :class="business.schedule ? 'has-schedule' : null">
                <a
                  class="data phone"
                  :href="`tel:${business.phone}`"
                  :title="`Llamar al ${business.name}: ${business.phone}`"
                  v-if="business.phone"
                  >
                  {{ business.phone }}
                </a>
                <button
                  type="button"
                  class="btn light"
                  @click="showModal()" v-if="business.schedule"
                >
                  Ver horario
                </button>
              </li>
            </ul>
          </div>
          <BaseMessage :data="business.messages.gluten" v-if="business.messages" />
        </header>
        <!-- Items list :: all Menu Dishes & Beverages -->
        <!-- COMPONENT -->
        <!-- <BusinessItemList :menus="business.menus" :businessId="business.id" :businessName="business.name" /> -->
        <div class="sections-list">
          <section 
            :id="`section-${index}`"
            v-for="(menu, index) in business.menus"
            :key="index"
          >
            <h2 class="section name" v-html="menu.title"></h2>
            <p class="section desc" v-if="menu.desc" v-html="menu.desc"></p>
            <div class="dish-area">
              <article
                class="dish item"
                v-for="(item, index) in menu.items"
                :key="index"
                :data-modal="`modal-${item.id}`"
                @click="showItemDetail(item.id)"
              >
                <div class="dish info">
                  <h3 class="name">{{ item.name }}</h3>
                  <p class="desc" v-html="item.desc" v-if="item.desc"></p>
                  <!-- <p class="desc" v-if="item.desc">{{ setDescription(item.desc) }}</p> -->
                  <div class="prices">
                    <div class="price item" v-for="(price, index) in item.prices" :key="index" v-if="item.prices">
                      <small class="price name" v-if="price.name">{{ price.name }}</small>
                      <span class="price quantity" v-if="price.price">
                        <b>{{ price.price }}</b> €
                      </span>
                    </div>
                  </div>
                  <div class="allergens" v-if="item.allergens">
                    <img
                      class="allergen"
                      v-for="(allergen, index) in item.allergens"
                      :key="index"
                      :src="require(`~/assets/allergens/${allergen}.svg`)"
                      :title="`Alérgeno: ${allergen}`"
                      :alt="`Alérgeno: ${allergen}`"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
                <figure class="dish img" v-if="item.img">
                  <img
                    :src="require(`~/assets/negocios/${business.id}/${business.id}-${item.img}.jpg`)"
                    :title="`${business.name}: ${item.desc}`"
                    :alt="`${business.name}: ${item.desc}`"
                    :width="menu.imgs.width"
                    :height="menu.imgs.height"
                  />
                </figure>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div class="message thankfulness">
        <p><i>🇮🇹</i> <b>Gracias</b> por su visita <i>🇮🇹</i></p>
      </div>
    </main>

    <TheFooter :data="business.name" is-hidden />
  </div>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'
import BaseMessage from '~/components/BaseMessage.vue'
import BusinessItemModal from '~/components/BusinessItemModal.vue'
import BusinessItemList from '~/components/BusinessItemList.vue'
import TheAside from '~/components/TheAside.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    BaseModal,
    BaseMessage,
    BusinessItemModal,
    BusinessItemList,
    TheAside,
    TheFooter,
  },
  data() {
    return {
      currentModal: 0,
      isModalVisible: false,
      showAside: false,
      business: {
        id: 'da-claudio',
        name: 'Da Claudio Pizza & Pasta',
        desc: '<span>Cocina</span> tradicional <span>italiana</span>',
        logo: true,
        cover: 'cover',
        address: 'Calle Estrella de Elola, 11B (local), Valdemoro.',
        place: 'Valdemoro, Madrid',
        gmap: '3TtCfgnWdUwjL78u9',
        phone: '910392366',
        whatsapp: null,
        // social: {
        //   facebook: "https://www.facebook.com/¿?/",
        //   instagram: "https://www.instagram.com/¿?/",
        //   tripadvisor: "https://www.tripadvisor.es/¿?.html",
        // },
        schedule: {
          days: [
            { day: 'Lunes', hour: '9:00 - 14:00' },
            { day: 'Martes', hour: 'Cerrado' },
            { day: 'Miercoles', hour: '9:00 - 12:00' },
            { day: 'Jueves', hour: '9:00 - 12:00' },
            { day: 'Viernes', hour: '9:00 - 12:00' },
            { day: 'Sábado', hour: '9:00 - 12:00' },
            { day: 'Domingo', hour: '9:00 - 12:00' },
          ],
        },
        messages: {
          gluten: {
            type: null,
            copy: 'Elaboración diaria con ingredientes italianos. <br/><strong>Recoger en local</strong> y <strong>a domicilio</strong>.',
          },
        },
        menus: [
          {
            title: '<span>🍽️</span> Menú del día',
            desc: 'Disponible <em>Lunes</em>, <em>Miércoles</em>, <em>Jueves</em> y <em>Viernes</em>.',
            imgs: {
              position: 'top',
              width: 145,
              height: 145,
            },
            items: [
              {
                id: 99,
                show: false,
                name: 'Menú diario',
                img: null,
                desc: 'Preguntar los platos ofrecidos cada día. Incluye pan, bebida, postre o café.',
                prices: [{ name: 'Precio', price: '9,50' }],
                allergens: null,
              },
            ],
          },
          {
            title: '<span>🍕</span> Pizzas',
            desc: '30 cm de deliciosa <strong>masa fina</strong> y <strong>crujiente</strong>. Base de tomate y mozzarella.',
            imgs: {
              position: 'top',
              width: 145,
              height: 145,
            },
            items: [
              {
                id: 1,
                show: false,
                name: 'Margaritta',
                img: 'pizza-margaritta',
                desc: 'Tomate y mozzarella.',
                prices: [
                  { name: 'Entera', price: '8' },
                ],
                allergens: ['gluten'],
              },
              {
                id: 2,
                show: false,
                name: 'Diavola',
                img: 'pizza-diavola',
                desc: 'Tomate, mozzarella, chorizo picante, pimiento rojo y aceitunas.',
                prices: [
                  { name: 'Entera', price: '9,50' },
                ],
                allergens: ['gluten'],
              },
              {
                id: 3,
                show: false,
                name: 'Sfiziosa',
                img: 'pizza-sfiziosa',
                desc: 'Tomate, mozzarella, jamón, bacon y cebolla.',
                prices: [
                  { name: 'Entera', price: '10' },
                ],
                allergens: ['gluten', 'soja'],
              },
            ],
          },
          {
            title: '<span>🍝</span> Pasta',
            desc: 'Nuestras auténticas pastas italianas.',
            imgs: {
              position: 'top',
              width: 145,
              height: 145,
            },
            items: [
              {
                id: 50,
                show: false,
                name: 'Spaghetti, Penne, Paccheri',
                img: null,
                desc:
                  '- <em>Elige una salsa</em> - <br/><strong>Pesto:</strong> albahaca, ajo y piñones. <br/><strong>Pommodoro:</strong> salsa de tomate. <br/><strong>Bolognesa:</strong> carne de ternera y tomate. <br/><strong>Arrabiata:</strong> tomate picante. <br/><strong>Carbonara:</strong> bacon, huevo y parmiggiano.',
                prices: [
                  { name: 'Plato', price: '8,50' },
                ],
                allergens: ['gluten', 'huevos'],
              },
              {
                id: 51,
                show: false,
                name: 'Spaghetti Nero Mare',
                img: 'pasta-spaghetti-nero-mare',
                desc: 'Spaghetti con tinta de sepia y mix de mariscos.',
                prices: [
                  { name: 'Tostada', price: '11,00' },
                ],
                allergens: ['gluten', 'huevos', 'crustaceos', 'moluscos', 'pescado'],
              },
            ],
          },
          {
            title: '<span>☕️</span> Desayunos',
            desc: 'En horario de mañana de 9:00 a 12:00 h.',
            imgs: {
              position: 'top',
              width: 145,
              height: 145,
            },
            items: [
              {
                id: 41,
                show: false,
                name: 'Café italiano',
                img: 'capuccino',
                desc: 'Café al gusto: cortado, sólo, con leche, capuccino...',
                prices: [
                  { name: 'Precio', price: '1,20' },
                ],
                allergens: null,
              },
              {
                id: 42,
                show: false,
                name: 'Tostada',
                img: 'tostada',
                desc: 'Tostada de tomate o con mantequilla y mermelada.',
                prices: [
                  { name: 'Precio', price: '1,80' },
                ],
                allergens: null,
              },
            ],
          },
          {
            title: '<span>🍰</span> Postres',
            desc: '...Y para terminar un poco de dulce.',
            imgs: {
              position: 'top',
              width: 145,
              height: 145,
            },
            items: [
              {
                id: 70,
                show: false,
                name: 'Tiramisú',
                img: 'postre-tiramisu',
                desc: 'Pastel frío en capas de nata y bizcocho de café y espolboreado con cacao.',
                prices: [
                  { name: 'Unidad', price: '4,00' }
                ],
                allergens: ['gluten', 'huevos', 'lacteos', 'sulfitos'],
              },
            ],
          },
          {
            title: '<span>🥤</span> Bebidas',
            desc: null,
            imgs: {
              position: 'top',
              width: 145,
              height: 145,
            },
            items: [
              // {
              //   id: 60,
              //   show: false,
              //   name: 'Café o infusión',
              //   img: 'cafe-con-leche',
              //   desc: 'Café al gusto (cortado, sólo, con leche, capuccino...) o infusión.',
              //   prices: [{ name: 'Precio', price: '1,20' }],
              //   allergens: null,
              // },
              // {
              //   id: 62,
              //   show: false,
              //   name: 'Colacao',
              //   img: null,
              //   desc: null,
              //   prices: [{ name: 'Precio', price: '1,40' }],
              //   allergens: null,
              // },
              {
                id: 63,
                show: false,
                name: 'Botella de agua',
                img: 'botella-agua',
                desc: 'Agua mineral bien fresquita.',
                prices: [
                  { name: '1/2 litro', price: '0,70' },
                ],
                allergens: null,
              },
              {
                id: 64,
                show: false,
                name: 'Refrescos',
                img: 'refrescos',
                desc: 'Coca-Cola, Coca-Cola Zero, Fanta de naranja y limón...',
                prices: [{ name: 'Precio', price: '2,50' }],
                allergens: null,
              },
              // {
              //   id: 65,
              //   show: false,
              //   name: 'Zumos',
              //   img: 'zumos',
              //   desc: 'De piña, melocotón...',
              //   prices: [{ name: 'Precio', price: '2,40' }],
              //   allergens: null,
              // },
              {
                id: 66,
                show: false,
                name: 'Cerveza',
                img: 'cerveza',
                desc: 'Disponemos de: Mahou y Heineken.',
                prices: [
                  { name: 'Lata', price: '1,00' },
                ],
                allergens: ['gluten'],
              },
            ],
          },
        ],
      },
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'additionalType': 'Bar Galicia de Valdemoro en #HazTuNegocioDigital por @jalofernández',
        '@id': 'https://haztunegociodigital.com/horeca/bar-galicia',
        'url': 'https://haztunegociodigital.com/horeca/bar-galicia',
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        'logo': 'https://haztunegociodigital.com/negocios/bar-galicia/bar-galicia-metadata-logo.jpg',
        'name': 'Bar Galicia Valdemoro',
        'description': 'Bar Galicia de Valdemoro especializado en raciones y cocina gallega',
        'telephone': '+34 91 895 53 64',
        'email': 'haztunegociodigital@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': 'https://haztunegociodigital.com/negocios/bar-galicia/bar-galicia-metadata-cover.jpg',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 91 895 53 64',
          'contactType': 'Llamar para reservar o recoger pedidos',
        },
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Calle Miguel Hernández, 5',
          'postalCode': '28342',
          'addressLocality': 'Valdemoro',
          'addressRegion': 'Madrid'
        },
        'hasMap': 'https://goo.gl/maps/w1KzohPjfHSS6hTX6',
        'geo' : {
          '@type': 'GeoCoordinates',
          'latitude': '40.19315166194334',
          'longitude': '-3.683921828879778'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.5',
          'bestRating': '5',
          'worstRating': '1',
          'ratingCount': '1656'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Martes',
              'Miércoles',
              'Jueves',
              'Viernes',
              'Sábado',
              'Domingo'
            ],
            'opens': '09:00',
            'closes': '01:00'
          }
        ]
      },
    }
  },
  head() {
    const businessName = this.business.name
    const businessId = this.business.id
    const businessPlace = this.business.place
    const businessType = this.business.type

    const title = businessName
    const description = `${businessName} en ${businessPlace} por ${this.$store.state.landing.author.alias}`
    const type = `${businessType} en ${businessPlace}`
    const ownerUrl = this.$store.state.landing.owner.url

    const canonical = `${ownerUrl}/horeca/${businessId}`

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'Classification', name: 'Classification', content: businessType },
      { hid: 'subject', name: 'subject', content: type },

      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: canonical },
      { hid: 'og:image', property: 'og:image', content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg` },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg` },
      { hid: 'og:image:alt', property: 'og:image:alt', content: description },

      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:image', name: 'twitter:image', content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: description },
      { hid: 'twitter:site', name: 'twitter:site', content: ownerUrl },
      { hid: 'twitter:creator', name: 'twitter:creator', content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg` },
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
  computed: {
    filterItemModal() {
      var modal = this.currentModal
      const menus = this.business.menus
      var dishes = []
      dishes = menus.flatMap(menu => menu.items)
      return dishes.filter(dish => dish.id === modal)
    }
  },
  // created() {
  //   const mq = this.$mq
  //   console.log(mq)
  //   mq === 'mobile' ? this.showAside = false 
  //   : mq === 'smartphone' ? this.showAside = false
  //   : this.showAside = true
  // },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    asideBehaviour() {
      this.showAside = !this.showAside
    },
    showItemDetail(id) {
      this.currentModal = id
      // TODO: Make me as a component!
      // this.$emit('modal', id)
      // console.log('showItemDetail: ' + id)
    },
    showDishItemModal(id) {
      return this.currentModal === id
    },
    closeDishItemModal() {
      this.currentModal = 0
    },
  },
}
</script>

<style lang="sass">
$font-family-name: Georgia, serif
$font-family-desc: Georgia, serif
$font-color: #11200c // superdark Green
$font-color-alt: #1e3816 // dark Green
$color-red: lighten(#af2a2d, 15%)
$color-green: lighten(#4c8e37, 15%)
$border-radius: 8px

.business
  &.da-claudio
    .business.data
      .name
        font-family: $font-family-name
        color: $font-color
        font-size: 1.75rem
      .desc
        margin: .33rem 1rem .75rem 1rem
        font-weight: 300
        @media (max-width: 1023px)
          text-align: center
        span:first-child
          color: $color-green
        span:last-child
          color: $color-red
      ul li
        &:first-child
          font-size: 15px
        a
          color: $font-color-alt

    .aside-menu
      background-color: #4c8e37
      border-right: 1px solid rgba(0,0,0,0.2)
      .aside-header
        background-color: #f5f6f8
      .aside-business-logo
        padding-bottom: 0
        padding-top: .5rem
        max-width: 60%
      ul li a
        font-family: $font-family-name
        font-size: 1.2rem
        font-weight: 600
        span
          margin-right: .5rem

    .modal-wrapper .md-modal.has-dish .md-content
      .btn
        color: $color-red
      .details
        color: $font-color
        .schedule .day
          font-family: $font-family-desc

    .message
      border-radius: 0
      font-family: $font-family-name
      color: $font-color-alt
      &.thankfulness
        i
          font-style: normal
        i:first-child
          margin-right: .25rem
        i:last-child
          margin-left: .25rem

    .dishes
      .dish-area
        margin: 1rem 0
      section .section
        &.name,
        &.desc
          font-family: $font-family-name
          color: $font-color
        &.name
          font-weight: 600
          font-size: 1.2rem
          padding-bottom: .25rem
          border-bottom: 1px solid $color-red
          &::after
            content: ""
            display: block
            width: calc(100% + 1.2rem) // full width + header lateral padding (both sides)
            height: 1px
            border-bottom: 1px solid $color-green
            position: relative
            top: 2px
            left: -0.6rem // header lateral padding (one side)
          span
            margin-right: .5rem
        &.desc
          padding-top: .33rem

    .dish
      &.info
        color: $font-color
        .name:not(.price)
          font-family: $font-family-name
          font-weight: 600
        .desc
          font-family: $font-family-desc
          em, b, strong
            color: $font-color-alt
        .name:not(.price),
        .prices,
        .prices .price.name
          margin-bottom: 0
        .prices .price.quantity
          color: $color-green
      &.img
        width: 145px
        height: auto

    .footer .name
      font-family: $font-family-name
      color: $font-color
      font-size: 1.1rem
      font-weight: 600

    .navbar.bottom-bar
      border: 1px solid $color-red
      background-color: rgba(251, 248, 255, 0.8)
      border-radius: $border-radius / 2
      width: calc(100% - 1rem)
      padding: .12rem
      left: .5rem
      right: .5rem
      .navbar-brand
        border: 1px solid $color-green
        background-color: transparent
        border-radius: $border-radius / 3
        justify-content: flex-end
        position: relative
        .navbar-brand-logo
          width: 154px
          height: 80px
          position: absolute
          bottom: -2px
          left: .25rem
          z-index: 31
          // animation: shake 5s cubic-bezier(.36,.07,.19,.97) infinite
          // transform: translate3d(0, 0, 0)
          // backface-visibility: hidden
          // perspective: 1000px

    .navbar-burger
      &.is-active span
        color: $color-red
      + .burger-copy
        .opener
          color: $font-color-alt
        .closer
          color: $color-red

  // @keyframes shake
  //   1%
  //     opacity: 0
  //   15%
  //     transform: translate3d(8rem, 0, 0)
  //   0%, 25%
  //     opacity: 1
  //   0%, 100%
  //     transform: translate3d(0, 0, 0)
</style>
