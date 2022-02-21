<template>
  <div
    :class="[
      'page',
      'business',
      business.id,
      { 'aside-menu-open': openedAside },
    ]"
  >
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
        <div class="is-flex is-burger-btn" @click.prevent="asideBehaviour()">
          <a
            role="button"
            :class="['navbar-burger', 'burger', { 'is-active': openedAside }]"
            aria-label="menu"
            aria-expanded="false"
            :aria-pressed="openedAside ? 'true' : 'false'"
          >
            <span v-for="item in 3" aria-hidden="true" :key="item"></span>
          </a>
          <div class="burger-copy">
            <small v-if="!openedAside" class="opener">
              Abrir <b>Carta</b>
            </small>
            <small v-else class="closer"> Cerrar <b>Carta</b> </small>
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
        <button
          class="btn js-close"
          type="button"
          @click="closeModal()"
          aria-labelledby="cerrar"
        >
          <small>Cerrar</small>
          <span>&times;</span>
        </button>
        <div class="md-inner dish info">
          <div class="details">
            <div class="notification is-warning is-size-6">
              Debido a las medidas especiales por la crisis del covid-19, el
              <span class="has-text-weight-medium"
                >horario de apertura podría variar</span
              >.
            </div>
            <h4 class="name has-text-centered">Horario de apertura</h4>
            <ul class="schedule-list">
              <li
                class="schedule"
                v-for="workday in business.schedule.days"
                :key="workday.day"
              >
                <small class="day">{{ workday.day }}:</small>
                <span :class="setSchedule(workday.hour)">{{
                  workday.hour
                }}</span>
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
      <div
        v-if="openedItemDetail"
        class="md-overlay"
        @click="closeItemDetail()"
      ></div>
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
                'url(' +
                require(`@/assets/negocios/${business.id}/${business.id}-${item.img}.png`) +
                ')',
            }"
          ></div>
          <div class="details">
            <h4 class="name">{{ item.name }}</h4>
            <p v-if="item.desc" v-html="item.desc" class="desc"></p>
            <div class="prices">
              <div
                class="price item"
                v-for="(price, index) in item.prices"
                :key="index"
              >
                <small class="price name">{{ price.name }}</small>
                <span v-if="price.price" class="price quantity">
                  <b>{{ price.price }}</b> €
                </span>
              </div>
            </div>
            <div v-if="item.allergens" class="allergens prices">
              <div
                class="price item"
                v-for="(allergen, index) in item.allergens"
                :key="index"
              >
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
    <TheAside
      :business="business"
      @aside="asideBehaviour()"
      :aria-expanded="openedAside ? 'true' : 'false'"
    />

    <main class="wrapper-menu">
      <div class="dishes">
        <!-- Business info -->
        <header class="business-header">
          <div
            v-if="business.cover"
            class="business cover"
            :style="{
              'background-image':
                'url(' +
                require(`@/assets/negocios/${business.id}/${business.id}-${business.cover}.jpg`) +
                ')',
            }"
          ></div>
          <address class="business data">
            <h1 class="data name">{{ business.name }}</h1>
            <h4
              v-if="business.desc"
              v-html="business.desc"
              class="data desc"
            ></h4>
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
          <BaseMessage v-if="business.messages" :data="business.messages" />
        </header>

        <!-- Items list :: all Menu Dishes & Beverages -->
        <div class="sections-list">
          <section
            :id="`section-${index}`"
            v-for="(menu, index) in business.menus"
            :key="index"
          >
            <h2
              v-html="menu.title"
              :id="`longdesc-${index}`"
              class="section name"
            ></h2>
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
                  <p
                    v-if="item.desc"
                    v-html="item.desc"
                    :id="`longdesc-${item.id}`"
                    class="desc"
                  ></p>
                  <!-- <p v-if="item.desc" class="desc">{{ setDescription(item.desc) }}</p> -->
                  <div class="prices">
                    <div
                      v-if="item.prices"
                      class="price item"
                      v-for="(price, index) in item.prices"
                      :key="index"
                    >
                      <small v-if="price.name" class="price name">{{
                        price.name
                      }}</small>
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
                    :src="
                      require(`~/assets/negocios/${business.id}/${business.id}-${item.img}.png`)
                    "
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
import BaseMessage from "~/components/BaseMessage.vue";
import TheAside from "~/components/TheAside.vue";
import TheFooter from "~/components/TheFooter.vue";

import businesses from "~/data/businesses";

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
      business: businesses.find((business) => business.id === "la-teja-verde"),
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        additionalType:
          "La Teja Verde de Aranjuez en #HazTuNegocioDigital por @jalofernández",
        "@id": "https://haztunegociodigital.com/horeca/la-teja-verde",
        url: "https://haztunegociodigital.com/horeca/la-teja-verde",
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        logo: "https://haztunegociodigital.com/negocios/la-teja-verde/la-teja-verde-metadata-logo.jpg",
        name: "La Antigua Bodeguita",
        description:
          "Restaurante especializado en mariscos, carnes maduradas y arroces",
        telephone: "+34 636 68 30 46",
        email: "jalofernandez@gmail.com",
        currenciesAccepted: "EUR",
        paymentAccepted: "Efectivo, tarjeta de crédito, Cash, Credit Card",
        priceRange: "Desde 2€",
        image:
          "https://haztunegociodigital.com/negocios/la-teja-verde/la-teja-verde-metadata-cover.jpg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34 636 68 30 46",
          contactType: "Llamar para reservar o recoger pedidos",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle Príncipe, 44",
          postalCode: "28300",
          addressLocality: "Aranjuez",
          addressRegion: "Madrid",
        },
        hasMap: "https://goo.gl/maps/5kPC5FHYghoYGq5i9",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.03551310169365",
          longitude: "-3.5981789315062493",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.3",
          bestRating: "5",
          worstRating: "2",
          ratingCount: "135",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
              "Domingo",
            ],
            opens: "08:00",
            closes: "00:00",
          },
        ],
      },
    };
  },
  head() {
    const businessName = this.business.name;
    const businessId = this.business.id;
    const businessPlace = this.business.place;
    const businessType = this.business.type;

    const title = businessName;
    const description = `${businessName} en ${businessPlace} por ${this.$store.state.landing.author.alias}`;
    const type = `${businessType} en ${businessPlace}`;
    const ownerUrl = this.$store.state.landing.owner.url;

    const canonical = `${ownerUrl}/horeca/${businessId}`;

    const meta = [
      { hid: "description", name: "description", content: description },
      { hid: "Classification", name: "Classification", content: businessType },
      { hid: "subject", name: "subject", content: type },

      { hid: "og:title", property: "og:title", content: title },
      {
        hid: "og:description",
        property: "og:description",
        content: description,
      },
      { hid: "og:url", property: "og:url", content: canonical },
      {
        hid: "og:image",
        property: "og:image",
        content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg`,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg`,
      },
      { hid: "og:image:alt", property: "og:image:alt", content: description },

      { hid: "twitter:title", name: "twitter:title", content: title },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg`,
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: description,
      },
      { hid: "twitter:site", name: "twitter:site", content: ownerUrl },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: `${ownerUrl}/negocios/${businessId}/${businessId}-metadata-logo.jpg`,
      },
    ];

    const link = [{ rel: "canonical", hid: "canonical", href: canonical }];

    // if (this.restaurant.web) {
    //   link.push({ rel: 'dns-prefetch', href: this.restaurant.web })
    // }

    return {
      title,
      meta,
      link,
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json",
        },
      ],
    };
  },
  computed: {
    filterItemModal() {
      var modal = this.currentModal;
      var dishes = this.business.menus.flatMap((menu) => menu.items);
      return dishes.filter((dish) => dish.id === modal);
    },
  },
  methods: {
    showModal() {
      this.openedSchedule = true;
    },
    closeModal() {
      this.openedSchedule = false;
    },
    setSchedule(info) {
      var sch = info.replace(/\s/g, "").toLowerCase();
      if (sch !== "cerrado") return "abierto";
      else return sch;
    },
    asideBehaviour() {
      this.openedAside = !this.openedAside;
    },
    showItemDetail(id) {
      this.currentModal = id;
      this.openedItemDetail = true;
      // TODO: Make me as a component!
      // this.$emit('modal', id)
      // console.log('showItemDetail: ' + id)
    },
    closeItemDetail() {
      this.currentModal = 0;
      this.openedItemDetail = false;
    },
    // modalsBlockTitle(info) {
    //   let strClean = info.replace(/[^èéòàùì\w\s]/gi, '')
    //   return strClean.replace(/\s/g, '').toLowerCase()
    // },
  },
};
</script>

<style lang="sass">
$font-family-name: 'Trebuchet MS', sans-serif
$font-family-desc: Helvetica, sans-serif
$font-color: #3c2c23 // dark Brown
$font-dark: #110d0a
$bg-color: #fcfbfa // superlight Beige almost White
$card-color: $bg-color
$prices-color: coral
$alternative-color: #ff9872
$border-radius: 12px

.md .md-inner .img
  background-position: center center

.business
  &.la-teja-verde
    background-color: $bg-color
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
      ul li
        &:first-child
          font-size: 15px
        a
          // color: $font-color-alt

    .dishes
      section .section
        &.name,
        &.desc
          background-color: rgba($bg-color, 0.85)
          font-family: $font-family-name
          color: $font-color
        &.name
          font-weight: 900
          text-transform: uppercase

    .dish
      &.img
        width: 200px
        height: auto
      &.info
        color: $font-color
        .name:not(.price)
          font-family: $font-family-name
          font-weight: 600
        .desc
          color: $font-dark

    .navbar.bottom-bar
      .navbar-brand
        border-radius: 6px
        border: 1px solid lighten($font-color, 50%)
        box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.1), 0 1px 1px 1px rgba(60, 64, 67, 0.05)

    .aside-menu
      background-color: $font-color
      .aside-header
        background-color: $bg-color
      .aside-business-logo
        max-width: 200px
        padding: 0.5rem 1.5rem
      ul li a
        padding: 0.33rem 1.5rem
        font-size: 1rem
        span
          display: none
</style>
