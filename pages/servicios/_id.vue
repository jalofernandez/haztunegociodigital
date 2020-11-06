<template>
  <main :class="['business', item.id, { 'aside-menu-open': showAside }]">
    <button class="btn js-aside light" type="button" @click="asideBehaviour()">
      <span class="opener" v-if="!showAside">
        Abrir
        <b>Carta</b>
      </span>
      <span class="closer" v-else>
        Cerrar
        <b>Carta</b>
      </span>
    </button>

    <BaseModal
      :class="{ 'md-show': isModalVisible }"
      @close="closeModal()"
      :data="item.schedule"
      v-if="item.schedule"
    />

    <TheAside :business="item" @aside="asideBehaviour()" />

    <BusinessItemModal :business="item" />

    <div class="dishes">
      <!-- Business info -->
      <div
        class="business cover"
        :style="{
          'background-image': 'url(' + require(`@/assets/negocios/${item.id}/${item.id}-${item.cover}.jpg`) + ')',
        }"
        v-if="item.cover"
      ></div>
      <div class="business data">
        <h1 class="data name">{{ item.name }}</h1>
        <ul v-if="item.address || item.phone || item.schedule">
          <li>
            <a
              class="data address"
              :href="`https://goo.gl/maps/${item.gmap}`"
              :title="`Ver dirección de ${item.name}`"
              target="_blank"
              rel="noopener noreferrer"
              v-if="item.address"
              >{{ item.address }}</a
            >
          </li>
          <li :class="item.schedule ? 'has-schedule' : null">
            <a
              class="data phone"
              :href="`tel:${item.phone}`"
              :title="`Llamar al ${item.name}: ${item.phone}`"
              v-if="item.phone"
              >{{ item.phone }}</a
            >
            <button type="button" class="btn light" @click="showModal()" v-if="item.schedule">
              Ver horario
            </button>
          </li>
        </ul>
      </div>

      <BaseMessage :data="item.messages.gluten" v-if="item.messages" />

      <BusinessItemList :business="item" />
    </div>

    <ul class="others" style="text-align: center">
      <li v-for="other in otherBusiness">
        <!-- <nuxt-link :to="`/servicios/${other.id}`" :title="`Ir a la página de #${owner.name}`">{{ other.name }}</nuxt-link> -->
        <nuxt-link
          :to="{ name: 'servicios-id', params: { id: other.id } }"
          :title="`Ir a la página de #${owner.name}`"
          >{{ other.name }}</nuxt-link
        >
      </li>
    </ul>

    <div class="message thankfulness">
      <p><b>Gracias</b> por su visita 😊</p>
    </div>

    <TheFooter :data="item.name" />
  </main>
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
      isModalVisible: false,
      showAside: false,
      id: this.$route.params.id,
      // services: {},
    }
  },
  head() {
    const businessName = this.item.name
    const businessId = this.item.id
    const businessPlace = this.item.place
    const businessType = this.item.type

    const title = businessName
    const description = `${businessName} en ${businessPlace} por @jalofernandez`
    const type = `${businessType} en ${businessPlace}`

    const canonical = `https://haztunegociodigital.com/horeca/${businessId}`

    const meta = [
      { hid: 'description', name: 'description', content: description },
      { hid: 'Classification', name: 'Classification', content: businessType },
      { hid: 'subject', name: 'subject', content: type },

      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      { hid: 'og:url', property: 'og:url', content: canonical },
      // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
      // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
      // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
      // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

      { hid: 'twitter:title', name: 'twitter:title', content: title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },

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
  computed: {
    item() {
      // return this.business.find((item) => item.id === this.id); // local json consume
      return this.$store.state.business.services.find((item) => item.id === this.id) // "store" json consume
    },
    otherBusiness() {
      // return this.business.filter((item) => item.id !== this.id); // local json consume
      return this.$store.state.business.services.filter((item) => item.id !== this.id) // "store" json consume
    },
    // products() {
    //   return this.$store.state.services;
    // },
  },
  // created() {
  //   this.$store.state.services = products;
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
    showItemDetail() {},
  },
}
</script>
