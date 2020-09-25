<template>
  <main :class="['horeca', item.id, { 'aside-menu-open': showAside }]">
    <button
      class="button js-aside light"
      type="button"
      @click="asideBehaviour()"
    >
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
          'background-image':
            'url(' +
            require(`@/assets/negocios/${item.id}/${item.id}-${item.cover}.jpg`) +
            ')',
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
            <button
              type="button"
              class="button light"
              @click="showModal()"
              v-if="item.schedule"
            >
              Ver horario
            </button>
          </li>
        </ul>
      </div>

      <BaseMessage :data="item.messages.gluten" v-if="item.messages" />

      <BusinessItemList :business="item" />
    </div>

    <ul class="others">
      <li v-for="other in otherBusiness">
        <!-- <nuxt-link :to="`/servicios/${other.id}`">{{ other.name }}</nuxt-link> -->
        <nuxt-link :to="{ name: 'servicios-id', params: { id: other.id } }">{{
          other.name
        }}</nuxt-link>
      </li>
    </ul>

    <div class="message thankfulness">
      <p><b>Gracias</b> por su visita 😊</p>
    </div>

    <TheFooter :data="item.name" />
  </main>
</template>

<script>
import BaseModal from "~/components/BaseModal.vue";
import BaseMessage from "~/components/BaseMessage.vue";
import BusinessItemModal from "~/components/BusinessItemModal.vue";
import BusinessItemList from "~/components/BusinessItemList.vue";
import TheAside from "~/components/TheAside.vue";
import TheFooter from "~/components/TheFooter.vue";

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
      business: [
        {
          id: "canessa",
          name: "Peluquería canina Canessa",
          type: "Peluquería, dog grooming, estética canina",
          cover: "cover",
          address: "Calle Vicente Aleixandre, 5, 28342 Valdemoro, Madrid",
          place: "Valdemoro, Madrid",
          gmap: "yAZmAMEMtTABiJUC7",
          phone: "912480430",
          // social: {
          //   facebook: "https://www.facebook.com/laantiguabodeguitavaldemoro/",
          //   instagram: "https://www.instagram.com/antiguabodeguita/",
          //   tripadvisor: "https://www.tripadvisor.es/Restaurant_Review-g1063667-d6962779-Reviews-La_Bodeguita_del_Tio_Rosa-Valdemoro.html",
          // },
          schedule: {
            days: [
              { day: "Lunes", hour: "10:00-14:00 / 16:00-20:00" },
              { day: "Martes", hour: "Cerrado" },
              { day: "Miercoles", hour: "10:00-14:00 / 16:00-20:00" },
              { day: "Jueves", hour: "10:00-14:00 / 16:00-20:00" },
              { day: "Viernes", hour: "10:00-14:00 / 16:00-20:00" },
              { day: "Sábado", hour: "Cerrado" },
              { day: "Domingo", hour: "Cerrado" },
            ],
          },
          messages: null,
          menus: [
            {
              title: "Cervezas",
              desc: null,
              imgs: {
                position: "top",
                width: 90,
                height: 90,
              },
              items: [
                {
                  id: 50,
                  show: false,
                  name: "Cerveza de grifo",
                  img: "cerveza-grifo",
                  desc:
                    "Disponemos de grifos de: Estrella de Galicia, Mahou y Heineken.",
                  prices: [
                    { name: "Caña", price: "1,80" },
                    { name: "Copa", price: "2,50" },
                    { name: "Maceta", price: "3" },
                    { name: "Jarra", price: "3,40" },
                  ],
                  allergens: ["gluten"],
                },
                {
                  id: 51,
                  show: false,
                  name: "Cerveza en botella",
                  img: "cerveza-tercio",
                  desc: "Disponemos de: Estrella de Galicia, Mahou y Heineken.",
                  prices: [
                    { name: "Botellín", price: "1,60" },
                    { name: "Tercio", price: "2,50" },
                  ],
                  allergens: ["gluten"],
                },
                {
                  id: 52,
                  show: false,
                  name: "Cerveza sin gluten",
                  img: "cerveza-tercio-sin-gluten",
                  desc: "Tercio de Mahou sin gluten.",
                  prices: [{ name: "Tercio", price: "2,80" }],
                  allergens: null,
                },
                {
                  id: 53,
                  show: false,
                  name: "Cerveza 1906",
                  img: "cerveza-1906",
                  desc:
                    "Tercio de cerveza especial reserva 1906 de Estrella de Galicia.",
                  prices: [{ name: "Tercio", price: "2,90" }],
                  allergens: ["gluten"],
                },
                {
                  id: 54,
                  show: false,
                  name: "Cerveza tostada 0,0",
                  img: "cerveza-tostada-00",
                  desc:
                    "Mahou 0,0 Tostada tiene una combinación inimitable de maltas tostadas.",
                  prices: [{ name: "Tercio", price: "2,50" }],
                  allergens: ["gluten"],
                },
              ],
            },
          ],
        },
        {
          id: "jalofernandez",
          name: "Jalofernandez: designer + coder",
          type: "Diseño gráfico, desarrollo web, programamción",
          cover: "cover",
          address:
            "Calle Vicente Bascuñana, 6, 28224 Pozuelo de Alarcón, Madrid",
          place: "Pozuelo de Alarcón, Madrid",
          gmap: "rBLjwME49KtSmdHu9",
          phone: "696682791",
          // social: {
          //   facebook: "https://www.facebook.com/laantiguabodeguitavaldemoro/",
          //   instagram: "https://www.instagram.com/antiguabodeguita/",
          //   tripadvisor: "https://www.tripadvisor.es/Restaurant_Review-g1063667-d6962779-Reviews-La_Bodeguita_del_Tio_Rosa-Valdemoro.html",
          // },
          schedule: {
            days: [
              { day: "Lunes", hour: "9:00-14:00 / 16:00-20:00" },
              { day: "Martes", hour: "9:00-14:00 / 16:00-20:00" },
              { day: "Miercoles", hour: "9:00-14:00 / 16:00-20:00" },
              { day: "Jueves", hour: "9:00-14:00 / 16:00-20:00" },
              { day: "Viernes", hour: "9:00-14:00 / 16:00-20:00" },
              { day: "Sábado", hour: "Cerrado" },
              { day: "Domingo", hour: "Cerrado" },
            ],
          },
          messages: {
            gluten: {
              type: "alert",
              copy:
                "Disponemos de productos <b>sin gluten</b>. <br />Consultar con el camarero.",
            },
          },
          menus: [
            {
              title: "Arroces",
              desc:
                'Selección de arroces caldosos o melosos de marisco. <span class="semibold">40 minutos</span> de tiempo de elaboración. <span class="semibold">Pedido mínimo</span> para 2 comensales.',
              imgs: {
                position: "top",
                width: 90,
                height: 90,
              },
              items: [
                {
                  id: 60,
                  show: false,
                  name: "Arroz con bogavante",
                  img: "arroz-bogavante",
                  desc:
                    "Clásico arroz con bogavante caldoso o suelto, según preferencia del comensal.",
                  prices: [{ name: "Precio", price: "20" }],
                  allergens: ["crustaceos", "pescado"],
                },
                {
                  id: 61,
                  show: false,
                  name: "Arroz con zamburiñas",
                  img: "arroz-zamburinas",
                  desc: "Arroz con zamburiñas al gusto: caldoso o suelto.",
                  prices: [{ name: "Precio", price: "18" }],
                  allergens: ["crustaceos", "pescado", "moluscos"],
                },
                {
                  id: 62,
                  show: false,
                  name: "Paella de marisco",
                  img: "arroz-paella-marisco",
                  desc:
                    "Paella española de marisco con langostinos rojos, mejillones, almejas...",
                  prices: [{ name: "Precio", price: "18" }],
                  allergens: ["crustaceos", "pescado", "moluscos"],
                },
                {
                  id: 63,
                  show: false,
                  name: "Paella de pulpo y gambas 🍤",
                  img: "arroz-pulpo-gambas",
                  desc:
                    "Paella especial de pulpo y gambas al gusto, meloso o suelto.",
                  prices: [{ name: "Precio", price: "18" }],
                  allergens: ["crustaceos", "pescado", "moluscos"],
                },
                {
                  id: 64,
                  show: false,
                  name: "Arroz negro al gusto",
                  img: "arroz-al-gusto",
                  desc:
                    "Arroz con tinta de calamar (negro) al gusto: gambas, pulpo, almejas, mejillones, zamburiñas...",
                  prices: [{ name: "Precio", price: "18" }],
                  allergens: ["crustaceos", "pescado", "moluscos"],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  head() {
    const businessName = this.item.name;
    const businessId = this.item.id;
    const businessPlace = this.item.place;
    const businessType = this.item.type;

    const title = `${businessName} en #HazTuNegocioDigital`;
    const description = `${businessName} en ${businessPlace} por @jalofernandez`;
    const type = `${businessType} en ${businessPlace}`;

    const canonical = `https://haztunegociodigital.com/horeca/${businessId}`;

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
      // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
      // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
      // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
      // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

      { hid: "twitter:title", name: "twitter:title", content: title },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },

      // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
      // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
      // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
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
    item() {
      return this.business.find((item) => item.id === this.id);
    },
    otherBusiness() {
      return this.business.filter((item) => item.id !== this.id);
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    asideBehaviour() {
      this.showAside = !this.showAside;
    },
  },
};
</script>
