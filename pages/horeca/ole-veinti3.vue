<template>
  <div
    :class="[
      'page',
      'business',
      business.id,
      { 'aside-menu-open': openedAside },
    ]"
  >
    <!-- Floatin´bottom Navbar (small screen devices only) -->
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
          :src="
            require(`~/assets/negocios/${business.id}/${business.id}-logo-color.png`)
          "
          :alt="`Logotipo de ${business.name} en ${business.place}`"
          :title="`Logotipo de ${business.name} en ${business.place}`"
        />
        <div class="is-flex is-burger-btn" @click.prevent="asideBehaviour()">
          <a
            role="button"
            :class="['navbar-burger', 'burger', { 'is-active': openedAside }]"
            aria-label="menu"
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

    <!-- <BusinessNavbar :business="business" @aside="asideBehaviour()" /> -->

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
                require(`@/assets/negocios/${business.id}/${business.id}-${item.img}.jpg`) +
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
    <!-- <BusinessItemModal :businessId="business.id" :menus="business.menus" /> -->

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
          <BaseMessage
            :data="business.messages.gluten"
            v-if="business.messages"
          />
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
                      require(`~/assets/negocios/${business.id}/${business.id}-${item.img}.jpg`)
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
        <!-- <BusinessItemList :menus="business.menus" :businessId="business.id" :businessName="business.name" /> -->
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
      business: businesses.find((business) => business.id === "ole-veinti3"),
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        additionalType:
          "Taberna Olé Veinti3 de Valdemoro en #HazTuNegocioDigital por @jalofernández",
        "@id": "https://haztunegociodigital.com/horeca/ole-veinti3",
        url: "https://haztunegociodigital.com/horeca/ole-veinti3",
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        logo: "https://haztunegociodigital.com/negocios/ole-veinti3/ole-veinti3-metadata-logo.jpg",
        name: "Taberna Olé Veinti3",
        description:
          "Taberna Olé Veinti3 de Valdemoro especializado en raciones y carnes a la brasa",
        telephone: "+34 91 000 00 00",
        email: "haztunegociodigital@gmail.com",
        currenciesAccepted: "EUR",
        paymentAccepted: "Efectivo, tarjeta de crédito, Cash, Credit Card",
        priceRange: "Desde 2€",
        image:
          "https://haztunegociodigital.com/negocios/ole-veinti3/ole-veinti3-metadata-cover.jpg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34 91 000 00 00",
          contactType: "Llamar para reservar o recoger pedidos",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle Miguel Hernández, 3",
          postalCode: "28342",
          addressLocality: "Valdemoro",
          addressRegion: "Madrid",
        },
        hasMap: "https://goo.gl/maps/YryixYPatDDUUphbA",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.19418532123188",
          longitude: "-3.684211738623255",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "104",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Lunes",
              "Martes",
              "Jueves",
              "Viernes",
              "Sábado",
              "Domingo",
            ],
            opens: "11:00",
            closes: "02:00",
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
  },
};
</script>

<style lang="sass">
// $font-family-name: Georgia, serif
$font-family-name: 'Brush Script MT', cursive
$font-family-desc: Verdana, sans-serif
$font-color: #f2e0d3 // superlight Orange almost White
$bg-color: #222222 // very Dark Grey
$card-color: #181512 // superdark Brown almost Black
$price-color: #f36a50 // medium Orange
$green-color: #15a544 // medium Green
$border-radius: 12px
$bg-artwork: url(~assets/artworks/wood-pattern.png) center repeat

.business
  &.ole-veinti3
    background-color: $card-color

    strong
      color: $font-color

    .business.data,
    .dish.item,
    .message,
    .btn.light,
    .btn.js-close
      background-color: $card-color
    .btn
      &:not(.js-close),
      &.js-aside .opener
        color: $price-color
      &.light
        border-color: $price-color

    .business.cover
      border-bottom-left-radius: $border-radius
      border-bottom-right-radius: $border-radius

    .dishes
      background: $bg-artwork

    .dish
      &.item
        border-radius: $border-radius
        box-shadow: none

      &.info
        .name:not(.price)
          font-family: $font-family-name
          font-size: 1.8rem
          color: $font-color
          font-weight: 400
          line-height: 1.25
        .desc,
        .prices .price.name,
        .md .details
          font-family: $font-family-desc
          color: lighten($font-color, 5%)
        .name:not(.price)
          font-size: 2rem
          line-height: 1
        .prices
          .price.quantity,
          .price.quantity strong
            color: $price-color
          .helper
            color: $font-color
        .allergens .allergen
          opacity: .8 // cause dark card bg color

      &.img
        width: 135px
        height: auto
        img
          border-radius: $border-radius

    .message.thankfulness
      border-radius: 0

    .message,
    .section
      color: $font-color
    .section
      &.name
        top: .25rem
        background-color: rgba($card-color, .85)
        border-radius: $border-radius
        font-size: 120%
        font-weight: 600
        margin-bottom: .5rem
      &.desc
        text-shadow: 1px 1px 2px black

    .business.data .name,
    .footer .name
      font-family: $font-family-desc
      color: $price-color

    .business.data
      .name
        padding: .5rem 0
        font-size: 1.5rem
        font-weight: 600
      .desc
        position: relative
        bottom: .5rem
        left: .25rem
      ul li
        &:first-child
          font-size: 15px
        a
          color: $font-color

    .footer
      background-color: $bg-color
      padding-bottom: 8rem
      color: $font-color
      .name
        font-weight: 600
      .has-icons-tech
        background-color: #eaceb9
        max-width: 200px
        border-radius: 12px
        margin: 0 auto

    .navbar.bottom-bar
      .navbar-brand
        border-radius: $border-radius
        border: 1px solid black
        box-shadow: 0 -2px 5px -2px #eaceb9
        background-color: rgba($card-color,.8)
        .navbar-brand-logo
          width: 75px
          height: 44px
      .burger-copy
        .opener
          color: darken(#48c774,8%)
        .closer
          color: $price-color

    .aside-menu
      background-color: $card-color
      border-right: 1px solid #111111
      h2
        font-family: $font-family-desc
        color: $price-color
      .aside-business-name,
      .aside-business-logo,
      ul li a
        font-family: $font-family-desc
        color: $font-color
        padding: .5rem 1.5rem
      .aside-business-logo
        width: 100px
        height: 59px

    .md-overlay
      background-color: rgba(35,35,35,.85)
    .md
      .md-inner,
      .md-inner .img
        background-color: $card-color
        border-radius: $border-radius
      .md-inner .img
        width: calc(100% - .5rem)
        margin: .25rem auto 0
      .dish.info .prices .helper,
      .schedule
        .day
          font-family: $font-family-desc
          color: $font-color
        .cerrado
          color: $price-color
        .abierto
          color: $green-color

.page.business
  &.ole-veinti3
    @media (min-width: 1024px)
      .business.cover
        border-radius: $border-radius
      .footer
        background-color: $card-color
</style>
