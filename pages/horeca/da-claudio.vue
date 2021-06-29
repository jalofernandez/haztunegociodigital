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
            :class="['navbar-burger', 'burger', { 'is-active': openedAside }]"
            role="button"
            aria-label="menu"
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

    <!-- MODAL dialogs... -->
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
      <div v-if="openedItemDetail" class="md-overlay" @click="closeItemDetail()"></div>
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
    <!-- <BusinessItemModal :businessId="business.id" :menus="business.menus"/> -->

    <!-- ASIDE to navigate across dishes sections -->
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
          <address class="business data">
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
                  <strong>{{ business.address }}</strong>
                </a>
              </li>
              <li :class="business.schedule ? 'has-schedule' : null">
                <a
                  v-if="business.phone"
                  class="data phone"
                  :href="`tel:${business.phone}`"
                  :title="`Llamar al ${business.name}: ${business.phone}`"
                >
                  <strong>{{ business.phone }}</strong>
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
          </address>
          <BaseMessage v-if="business.messages" :data="business.messages.gluten"/>
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
                        <strong>{{ price.price }}</strong> €
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
        <!-- <BusinessItemList :menus="business.menus" :businessId="business.id" :businessName="business.name"/> -->
      </div>

      <div class="message thankfulness">
        <p><i>🇮🇹</i> <b>Gracias</b> por su visita <i>🇮🇹</i></p>
      </div>
    </main>

    <TheFooter :data="business.name" is-hidden/>
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
      business: businesses.find(business => business.id == 'da-claudio'),
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
      var dishes = this.business.menus.flatMap(menu => menu.items)
      return dishes.filter(dish => dish.id === modal)
    }
  },
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
      @media (min-width: 1024px)
        background-color: #f5f6f8
        border: none
        ul li a:hover,
        ul li a:focus
          text-decoration: none
          span:last-child
            text-decoration: underline

    .md
      .md-inner
        border-radius: $border-radius
        background-color: #f5f6f8
      .btn
        color: $color-red
        &.js-close
          border-color: $color-red
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
        .prices .price.quantity,
        .prices .price.quantity strong
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
