<template>
  <div :class="['page', 'business', business.id, { 'aside-menu-open': openedAside }]">
    <!-- Floating button to trigger Aside navbar -->
    <nav
      v-if="['mobile', 'smartphone', 'tablet'].includes($mq)"
      class="navbar is-fixed-bottom bottom-bar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          v-if="business.whatsapp"
          class="whatsapp light ml-1"
          :href="`https://wa.me/${business.whatsapp}`"
          :title="`Llamar o escribir al Whatsapp de ${business.name}`"
          target="_blank"
          rel="noopener noreferrer"
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
          v-if="business.logo"
          :class="['navbar-brand-logo', { 'ml-1': !business.whatsapp }]"
          :src="require(`~/assets/negocios/${business.id}/${business.id}-logo-color.png`)"
          :alt="`Logotipo de ${business.name} en ${business.place}`"
          :title="`Logotipo de ${business.name} en ${business.place}`"
        />
        <div class="is-flex is-burger-btn" @click.prevent="asideBehaviour()">
          <a
            role="button"
            :class="['navbar-burger', 'burger', { 'is-active': openedAside }]"
            aria-label="menu"
            aria-expanded="false"
            :aria-pressed="openedAside ? 'true' : 'false'"
          >
            <span v-for="item in 3" aria-hidden="true"></span>
          </a>
          <div class="burger-copy">
            <small v-if="!openedAside" class="opener">
              Abrir <b>Carta</b>
            </small>
            <small v-else class="closer">
              Cerrar <b>Carta</b>
            </small>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modal dialogs... -->
    <!-- ...for Schedule details -->
    <transition name="fd" appear>
      <div v-if="openedSchedule" class="md-overlay" @click="closeModal()"></div>
    </transition>
    <transition name="pop" appear>
      <div
        v-if="openedSchedule"
        class="md"
        role="dialog"
        aria-labelledby="name"
        aria-describedby="schedule"
      >
        <button class="btn js-close" type="button" @click="closeModal()" aria-labelledby="cerrar">
          <small>Cerrar</small>
          <span>&times;</span>
        </button>
        <div class="md-inner dish info">
          <div class="details">
            <div class="notification is-warning is-size-6">
              Debido a las medidas especiales por la crisis del covid-19, el
              <span class="has-text-weight-medium">horario de apertura podría variar</span>.
            </div>
            <h4 class="name has-text-centered">Horario de apertura</h4>
            <ul class="schedule-list">
              <li class="schedule" v-for="workday in business.schedule.days" :key="workday.day">
                <small class="day">{{ workday.day }}:</small>
                <span :class="setSchedule(workday.hour)">{{ workday.hour }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <!-- <BaseModal
      v-if="business.schedule"
      :class="{ 'md-show': openedSchedule }"
      @close="closeModal()"
      :data="business.schedule"
    /> -->

    <!-- ...for each item to shown info details -->
    <transition name="fd" appear>
      <div v-if="openedItemDetail" class="md-overlay" @click="closeModal()"></div>
    </transition>
    <transition name="pop" appear>
      <div
        v-if="openedItemDetail"
        v-for="item in filterItemModal"
        :key="item.id"
        class="md"
        role="dialog"
        aria-labelledby="name"
        aria-describedby="desc"
      >
        <div class="md-inner dish info">
          <button
            :class="['btn', 'js-close', { 'has-not-img': !item.img }]"
            type="button"
            @click="closeItemDetail()"
            aria-labelledby="cerrar"
          >
            <small>Cerrar</small>
            <span>&times;</span>
          </button>
          <div
            v-if="item.img"
            class="img cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.id}/${business.id}-${item.img}.jpg`) + ')',
            }"
          ></div>
          <div class="details">
            <h4 class="name">{{ item.name }}</h4>
            <p v-if="item.desc" v-html="item.desc" class="desc"></p>
            <div class="prices">
              <div class="price item" v-for="(price, index) in item.prices" :key="index">
                <small class="price name">{{ price.name }}</small>
                <span v-if="price.price" class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div v-if="item.allergens" class="allergens prices">
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
    </transition>
    <!-- <BusinessItemModal :business-id="business.id" :menus="business.menus" /> -->

    <!-- <a href="https://www.facebook.com/laantiguabodeguitavaldemoro/" target="_blank" rel="noopener noreferrer" title="Facebook de La antigua bodeguita" class="facebook"><span class="brand icon"><i class="mdi mdi-24px mdi-facebook"></i></span></a> -->

    <!-- Aside to navigate across dishes sections -->
    <TheAside :business="business" @aside="asideBehaviour()" :aria-expanded="openedAside ? 'true' : 'false'"/>    

    <main class="wrapper-menu">
      <div class="dishes">
        <!-- Business info -->
        <header class="business-header">
          <div
            v-if="business.cover"
            class="business cover"
            :style="{
              'background-image':
                'url(' + require(`@/assets/negocios/${business.id}/${business.id}-${business.cover}.jpg`) + ')',
            }"
          ></div>
          <div class="business data">
            <h1 class="data name">{{ business.name }}</h1>
            <h4 v-if="business.desc" v-html="business.desc" class="data desc"></h4>
            <ul v-if="business.address || business.phone || business.schedule">
              <li>
                <a
                  v-if="business.address"
                  class="data address"
                  :href="`https://goo.gl/maps/${business.gmap}`"
                  :title="`Ver dirección de ${business.name}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ business.address }}
                </a>
              </li>
              <li :class="business.schedule ? 'has-schedule' : null">
                <a
                  v-if="business.phone"
                  class="data phone"
                  :href="`tel:${business.phone}`"
                  :title="`Llamar al ${business.name}: ${business.phone}`"
                >
                  {{ business.phone }}
                </a>
                <button
                  v-if="business.schedule"
                  type="button"
                  class="btn light"
                  @click="showModal()"
                  aria-labelledby="Ver horario"
                >
                  Ver horario
                </button>
              </li>
            </ul>
          </div>
          <BaseMessage v-if="business.messages" :data="business.messages" />
        </header>

        <!-- Items list :: all Menu Dishes & Beverages -->
        <div class="sections-list">
          <section
            :id="`section-${index}`"
            v-for="(menu, index) in business.menus"
            :key="index"
          >
            <h2 v-html="menu.title" :id="`longdesc-${index}`" class="section name"></h2>
            <p v-if="menu.desc" v-html="menu.desc" class="section desc"></p>
            <div class="dish-area">
              <article
                v-for="item in menu.items"
                :key="item.id"
                @click="showItemDetail(item.id)"
                class="dish item"
              >
                <div class="dish info">
                  <h3 class="name">{{ item.name }}</h3>
                  <p v-if="item.desc" v-html="item.desc" :id="`longdesc-${item.id}`" class="desc"></p>
                  <!-- <p v-if="item.desc" class="desc">{{ setDescription(item.desc) }}</p> -->
                  <div class="prices">
                    <div v-if="item.prices" class="price item" v-for="(price, index) in item.prices" :key="index">
                      <small v-if="price.name" class="price name">{{ price.name }}</small>
                      <span v-if="price.price" class="price quantity">
                        <b>{{ price.price }}</b> €
                      </span>
                    </div>
                  </div>
                  <div v-if="item.allergens" class="allergens">
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
                <figure v-if="item.img" class="dish img">
                  <img
                    :src="require(`~/assets/negocios/${business.id}/${business.id}-${item.img}.jpg`)"
                    :title="`${business.name}: ${item.name}`"
                    :alt="`${business.name}: ${item.name}`"
                    :longdesc="`#longdesc-${item.id}`"
                    :width="menu.imgs.width"
                    :height="menu.imgs.height"
                  />
                </figure>
              </article>
            </div>
          </section>
        </div>
        <!-- <BusinessItemList :menus="business.menus" :business-id="business.id" :business-name="business.name" /> -->
      </div>

      <div class="message thankfulness">
        <p><b>Gracias</b> por su visita 😊</p>
      </div>
    </main>

    <TheFooter :data="business.name" is-hidden />
  </div>
</template>

<script>
// import BaseModal from '~/components/BaseModal.vue'
// import BusinessItemModal from '~/components/BusinessItemModal.vue'
// import BusinessItemList from '~/components/BusinessItemList.vue'
import BaseMessage from '~/components/BaseMessage.vue'
import TheAside from '~/components/TheAside.vue'
import TheFooter from '~/components/TheFooter.vue'

import businesses from '~/data/businesses'

export default {
  components: {
    // BaseModal,
    // BusinessItemModal,
    // BusinessItemList,
    BaseMessage,
    TheAside,
    TheFooter,
  },
  data() {
    return {
      currentModal: 0,
      openedSchedule: false,
      openedItemDetail: false,
      openedAside: false,
      business: businesses.find(business => business.id == 'la-antigua-bodeguita'),
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'additionalType': 'Bar Galicia de Valdemoro en #HazTuNegocioDigital por @jalofernández',
        '@id': 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita',
        'url': 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita',
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        'logo': 'https://haztunegociodigital.com/negocios/la-antigua-bodeguita/la-antigua-bodeguita-metadata-logo.jpg',
        'name': 'La Antigua Bodeguita',
        'description': 'Restaurante especializado en mariscos, carnes maduradas y arroces',
        'telephone': '+34 644 09 34 70',
        'email': 'jalofernandez@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': 'https://haztunegociodigital.com/negocios/la-antigua-bodeguita/la-antigua-bodeguita-metadata-cover.jpg',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 644 09 34 70',
          'contactType': 'Llamar para reservar o recoger pedidos',
        },
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Pje. de Colón, 2',
          'postalCode': '28341',
          'addressLocality': 'Valdemoro',
          'addressRegion': 'Madrid'
        },
        'hasMap': 'https://g.page/Bodeguitavaldemoro?share',
        'geo' : {
          '@type': 'GeoCoordinates',
          'latitude': '40.19180347920824',
          'longitude': '-3.674800017240268'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.2',
          'bestRating': '5',
          'worstRating': '1',
          'ratingCount': '291'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Lunes',
              'Martes',
              'Miércoles',
              'Viernes',
              'Sábado',
              'Domingo'
            ],
            'opens': '11:00',
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
      var dishes = this.business.menus.flatMap(menu => menu.items)
      return dishes.filter(dish => dish.id === modal)
    }
  },
  // TODO: aside navbar is hidden in desktop: fix it asap!
  // created() {
  //   const mq = this.$mq
  //   console.log(mq)
  //   mq === 'mobile' ? this.openedAside = false 
  //   : mq === 'smartphone' ? this.openedAside = false
  //   : this.openedAside = true
  // },
  methods: {
    showModal() {
      this.openedSchedule = true
    },
    closeModal() {
      this.openedSchedule = false
    },
    setSchedule(info) {
      var sch = info.replace(/\s/g, '').toLowerCase()
      if (sch !== 'cerrado') return 'abierto'
      else return sch
    },
    asideBehaviour() {
      this.openedAside = !this.openedAside
    },
    showItemDetail(id) {
      this.currentModal = id
      this.openedItemDetail = true
      // TODO: Make me as a component!
      // this.$emit('modal', id)
      // console.log('showItemDetail: ' + id)
    },
    closeItemDetail() {
      this.currentModal = 0
      this.openedItemDetail = false
    },
    // modalsBlockTitle(info) {
    //   let strClean = info.replace(/[^èéòàùì\w\s]/gi, '')
    //   return strClean.replace(/\s/g, '').toLowerCase()
    // },
  },
}
</script>

<style lang="sass">
$font-family-name: 'Times', sans-serif
$font-family-desc: 'Arial', sans-serif
$font-color: #412406 // superdark Orange
$bg-color: #f9e0c4 // superlight Orange
$card-color: lighten($bg-color, 5%)
$prices-color: coral
$alternative-color: #ff9872
$border-radius: 12px
// $shadow-color: #502e08

.business
  &.la-antigua-bodeguita
    background-color: $bg-color

    .business.data,
    .dish.item,
    .btn.light,
    .btn.js-close
      background-color: $card-color
    .btn
      &:not(.js-close),
      &.js-aside .opener
        color: $font-color

    @media (min-width: 1024px)
      .business.cover
        border-bottom-left-radius: $border-radius
        border-bottom-right-radius: $border-radius

    .dish
      &.item
        border-radius: $border-radius
        box-shadow: none

      &.info
        .name:not(.price)
          font-family: $font-family-name
          color: $font-color
          font-weight: 600
          line-height: 1.25
        .desc,
        .prices .price.name,
        .md .details
          font-family: $font-family-desc
          color: lighten($font-color, 5%)
        .prices .price.quantity
          color: $prices-color

      &.img
        width: 120px
        height: auto
        img
          border-radius: $border-radius

    .message,
    .section
      color: $font-color
    .section.name
      background-color: rgba($bg-color, .85)
      font-size: 120%
      font-weight: 600
    #section-0
      margin-top: 0

    .business.data .name,
    .footer .name
      font-family: $font-family-desc
      color: $prices-color
      font-weight: 600

    .business.data
      .name
        padding: .5rem 0
        font-size: 1.5rem
      .desc
        font-size: 1rem
        color: $alternative-color
        font-style: italic
        position: relative
        bottom: .33rem
      ul li a
        color: $font-color

    .footer
      ul li
        color: $font-color

    .footer, .message
      background-color: $bg-color

    .navbar.bottom-bar
      .navbar-brand
        border-radius: $border-radius * 3
        border: 4px solid $bg-color
        background-color: $card-color
        box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.15), 0 1px 1px 1px rgba(60, 64, 67, 0.1)
        .burger-copy
          .opener, .closer
            color: $font-color

    .aside-menu
      background-color: $prices-color
      h2
        font-family: $font-family-desc
      ul li a
        font-family: $font-family-desc
        color: $font-color
        padding: .4rem 1.5rem

    .md-overlay
      background-color: rgba($font-color,.6)
    .md
      .md-inner
        background-color: $card-color
      .md-inner,
      .md-inner .img
        border-radius: $border-radius
      .md-inner .img
        width: calc(100% - .5rem)
        margin: .25rem auto 0
      .schedule .day,
      .dish.info .prices .helper
        font-family: $font-family-desc
        color: $font-color
</style>
