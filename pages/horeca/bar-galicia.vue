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
          >
        </a>
        <img
          :class="['navbar-brand-logo', { 'ml-1': !business.whatsapp }]"
          :src="require(`~/assets/negocios/${business.id}/${business.id}-logo-color.png`)"
          :alt="`Logotipo de ${business.name} en ${business.place}`"
          :title="`Logotipo de ${business.name} en ${business.place}`"
          v-if="business.logo"
        >
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
    <BusinessItemModal :business="business" />

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
        <BusinessItemList :business="business" />
      </div>

      <div class="message thankfulness">
        <p><b>Gracias</b> por su visita 😊</p>
      </div>
    </main>

    <TheFooter :data="business.name" isHidden />
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
      isModalVisible: false,
      showAside: false,
      business: {
        id: 'bar-galicia',
        name: 'Bar Galicia',
        type: 'Restaurante, bar, cafetería',
        logo: true,
        cover: 'cover',
        address: 'Calle Miguel Hernández, 5, 28342 Valdemoro, Madrid',
        place: 'Valdemoro, Madrid',
        gmap: 'TGCdSV6Y9rZ1gxQU6',
        phone: '918955364',
        whatsapp: null,
        // social: {
        //   facebook: "https://www.facebook.com/¿?/",
        //   instagram: "https://www.instagram.com/¿?/",
        //   tripadvisor: "https://www.tripadvisor.es/¿?.html",
        // },
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
        messages: {
          gluten: {
            type: 'alert',
            copy: 'Disponemos de productos <b>sin gluten</b>. <br />Consultar con el camarero.',
          },
        },
        menus: [
          {
            title: 'Menú del día <span>🍲</span>',
            desc: 'Disponible de <span class="semibold">Martes</span> a <span class="semibold">Viernes</span>.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 99,
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
            title: 'Raciones <span>🧆</span>',
            desc: 'También <span class="semibold">para llevar</span>. Recoger en el local.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 1,
                show: false,
                name: 'Patatas bravas o mixtas',
                img: 'racion-braviolis',
                desc: 'Ración de patatas bravas picantes o mitad bravas y mitad ali oli.',
                prices: [
                  { name: 'Ración', price: '9' },
                  { name: '1/2 ración', price: '6' },
                ],
                allergens: ['sulfitos', 'huevos'],
              },
              {
                id: 2,
                show: false,
                name: 'Carne de pincho',
                img: 'racion-carnepincho',
                desc: 'Ración de carne de pincho con patatas fritas y pimientos de Padrón.',
                prices: [
                  { name: 'Ración', price: '15' },
                  { name: '1/2 ración', price: '10' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 3,
                show: false,
                name: 'Croquetas de jamón',
                img: 'racion-croquetas',
                desc: 'Ración de croquetas caseras de jamón serrano.',
                prices: [
                  { name: 'Ración', price: '10' },
                  { name: '1/2 ración', price: '7,50' },
                ],
                allergens: ['huevos', 'lacteos', 'sulfitos'],
              },
              {
                id: 4,
                show: false,
                name: 'Ensalada mixta',
                img: 'racion-ensalada-mixta',
                desc: 'Ensalada de mezclun de lechugas, tomate, espáragos, atún, maiz...',
                prices: [
                  { name: 'Entera', price: '9' },
                  { name: '1/2 ensalada', price: '7' },
                ],
                allergens: ['huevos'],
              },
              {
                id: 5,
                show: false,
                name: 'Jamón ibérico',
                img: null,
                desc: null,
                prices: [
                  { name: 'Ración', price: '18' },
                  { name: '1/2 ración', price: '13' },
                ],
                allergens: null,
              },
              {
                id: 6,
                show: false,
                name: 'Queso curado',
                img: null,
                desc: null,
                prices: [
                  { name: 'Ración', price: '12,50' },
                  { name: '1/2 ración', price: '8' },
                ],
                allergens: ['lacteos'],
              },
              {
                id: 7,
                show: false,
                name: 'Lacón a la gallega',
                img: null,
                desc: 'Lacón de cerdo cocido con patatas y su toque de pimentón y aceite de oliva virgen.',
                prices: [
                  { name: 'Ración', price: '12' },
                  { name: '1/2 ración', price: '8' },
                ],
                allergens: null,
              },
              {
                id: 8,
                show: false,
                name: 'Tabla de salchipapas',
                img: null,
                desc: 'Patatas fritas con salchichas acompañado de salsa brava, kepchup, mostaza, alioli...',
                prices: [
                  { name: 'Ración', price: '9' },
                  { name: '1/2 ración', price: '7' },
                ],
                allergens: ['mostaza', 'huevos', 'sulfitos'],
              },
              {
                id: 9,
                show: false,
                name: 'Tortilla de patatas',
                img: 'racion-tortilla',
                desc: 'Básico de la comida española. Con o sin cebolla. Al punto, jugosilla.',
                prices: [
                  { name: 'Entera', price: '9' },
                  { name: 'Media', price: '5' },
                ],
                allergens: ['huevos', 'sulfitos'],
              },
              {
                id: 10,
                show: false,
                name: 'Alitas de pollo',
                img: null,
                desc: 'Alitas de pollo con patatas fritas y pimientos al punto de sal.',
                prices: [
                  { name: 'Ración', price: '12' },
                  { name: '1/2 ración', price: '8' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 11,
                show: false,
                name: 'Nuggets de pollo',
                img: null,
                desc: 'Pequeñas piezas de pechuga de pollo rebozadas y fritas.',
                prices: [
                  { name: 'Ración', price: '11' },
                  { name: '1/2 ración', price: '7' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 12,
                show: false,
                name: 'Oreja a la plancha',
                img: null,
                desc: 'La tradicional oreja de cerdo a la plancha al punto que desse con un toque picante.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '8,80' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 13,
                show: false,
                name: 'Huevos rotos con jamón',
                img: null,
                desc: 'Revuelto de patatas fritas, huevos fritos y jamón curado. Un clásico.',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: ['huevos', 'sulfitos'],
              },
              {
                id: 14,
                show: false,
                name: 'Pimientos de Padrón',
                img: null,
                desc: 'Como dirían en Galicia: "Os pementos de Padrón, uns pican e outros non".',
                prices: [
                  { name: 'Ración', price: '10' },
                  { name: '1/2 ración', price: '6' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 15,
                show: false,
                name: 'Pulpo a la gallega',
                img: 'racion-pulpo',
                desc: 'Pulpo cocido con cachelos y su toque de sal, aceite de oliva y pimentón.',
                prices: [{ name: 'Ración', price: '15' }],
                allergens: ['moluscos', 'pescado'],
              },
              {
                id: 16,
                show: false,
                name: 'Chopitos',
                img: null,
                desc: null,
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,80' },
                ],
                allergens: ['moluscos', 'pescado', 'sulfitos'],
              },
              {
                id: 17,
                show: false,
                name: 'Calamares a la romana',
                img: null,
                desc: 'Calamares rebozados fritos con su toque de limón.',
                prices: [
                  { name: 'Ración', price: '14' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['moluscos', 'pescado', 'sulfitos'],
              },
              {
                id: 18,
                show: false,
                name: 'Boquerones fritos',
                img: 'racion-boquerones-fritos',
                desc: 'Al estilo andaluz, con su toque de vinagre, pimentón y limón.',
                prices: [
                  { name: 'Ración', price: '12' },
                  { name: '1/2 ración', price: '8' },
                ],
                allergens: ['pescado', 'sulfitos'],
              },
              {
                id: 19,
                show: false,
                name: 'Patas de calamar',
                img: 'racion-rabas',
                desc: 'Patas de calamar rebozadas fritas con su toque de limón.',
                prices: [
                  { name: 'Ración', price: '14' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['moluscos', 'pescado', 'sulfitos'],
              },
              {
                id: 20,
                show: false,
                name: 'Fritura de pescado',
                img: 'racion-fritura',
                desc: 'Fritura variada de pescado rebozado: calamares, gambas, rabas, cazón...',
                prices: [
                  { name: 'Ración', price: '15' },
                  { name: '1/2 ración', price: '10' },
                ],
                allergens: ['moluscos', 'crustaceos', 'pescado', 'sulfitos'],
              },
              {
                id: 21,
                show: false,
                name: 'Sepia a la plancha',
                img: 'racion-sepia',
                desc: 'Sepia con salsa alioli y guarnición de ensalada.',
                prices: [{ name: 'Ración', price: '14' }],
                allergens: ['moluscos', 'pescado', 'huevos', 'sulfitos'],
              },
              {
                id: 22,
                show: false,
                name: 'Gambón a la plancha',
                img: null,
                desc: null,
                prices: [{ name: 'Ración', price: '17' }],
                allergens: ['crustaceos', 'pescado', 'sulfitos'],
              },
              {
                id: 23,
                show: false,
                name: 'Boquerones en vinagre',
                img: 'racion-boquerones-vinagre',
                desc: 'Boquerones en vinagre con su toque de ajo y perejil.',
                prices: [
                  { name: 'Ración', price: '10' },
                  { name: '1/2 ración', price: '6,50' },
                ],
                allergens: ['pescado'],
              },
              {
                id: 24,
                show: false,
                name: 'Anchoas',
                img: null,
                desc: 'Anchoas en aceite de oliva virgen.',
                prices: [
                  { name: 'Ración', price: '12' },
                  { name: '1/2 ración', price: '7,50' },
                ],
                allergens: ['pescado'],
              },
              {
                id: 25,
                show: false,
                name: 'Matrimonio',
                img: null,
                desc: 'Clásico combinado de anchoas en aceite y boquerones en vinagre.',
                prices: [
                  { name: 'Ración', price: '11' },
                  { name: '1/2 ración', price: '7' },
                ],
                allergens: ['pescado'],
              },
            ],
          },
          {
            title: 'Bocadillos y Montados <span>🥪</span>',
            desc: 'Preguntar precios y disponibilidad.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: null,
          },
          {
            title: 'Desayunos <span>☕️</span>',
            desc: 'En horario de mañana.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 41,
                show: false,
                name: 'Café y tostada',
                img: null,
                desc: 'Café al gusto (cortado, sólo, con leche...) con tostada de mantequilla y mermelada o tomate.',
                prices: [
                  { name: 'Entera', price: '2,50' },
                  { name: 'Media', price: '2,20' },
                ],
                allergens: null,
              },
              {
                id: 42,
                show: false,
                name: 'Café y tostada con jamón',
                img: null,
                desc: 'Café al gusto (cortado, sólo, con leche...) con tostada de tomate y jamón.',
                prices: [{ name: 'Entera', price: '3,80' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Cervezas <span>🍺</span>',
            desc: null,
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 50,
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
                id: 51,
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
                id: 52,
                show: false,
                name: 'Cerveza sin gluten',
                img: 'cerveza-tercio-sin-gluten',
                desc: 'Tercio de Mahou sin gluten.',
                prices: [{ name: 'Tercio', price: '2,80' }],
                allergens: null,
              },
              {
                id: 53,
                show: false,
                name: 'Cerveza 1906',
                img: 'cerveza-1906',
                desc: 'Tercio de cerveza especial reserva 1906 de Estrella de Galicia.',
                prices: [{ name: 'Tercio', price: '2,90' }],
                allergens: ['gluten'],
              },
              {
                id: 54,
                show: false,
                name: 'Cerveza tostada 0,0',
                img: 'cerveza-tostada-00',
                desc: 'Mahou 0,0 Tostada tiene una combinación inimitable de maltas tostadas.',
                prices: [{ name: 'Tercio', price: '2,50' }],
                allergens: ['gluten'],
              },
            ],
          },
          {
            title: 'Vinos <span>🍷</span>',
            desc: 'Amplia variedad de vinos.',
            imgs: {
              position: 'bottom',
              width: 120,
              height: 134,
            },
            items: [
              {
                id: '80',
                show: false,
                name: 'Condado de Haza',
                img: 'vino-condado-haza',
                desc: 'Crianza 2017 es un vino limpio y brillante, ideal para maridar con asados de carne.',
                prices: [
                  { name: 'Copa', price: '3' },
                  { name: 'Botella', price: '18' },
                ],
                allergens: null,
              },
              {
                id: '81',
                show: false,
                name: 'La Planta',
                img: 'vino-la-planta',
                desc: 'Ribera del Duero 2018. Ideal para embutidos y quesos así como para guisos.',
                prices: [
                  { name: 'Copa', price: '2,60' },
                  { name: 'Botella', price: '15' },
                ],
                allergens: null,
              },
              {
                id: '82',
                show: false,
                name: 'Albariño Altos de Torona',
                img: 'vino-altos-de-torona',
                desc: 'Vino blanco de uva Albariño, recogida en las laderas del río Miño.',
                prices: [
                  { name: 'Copa', price: '2,50' },
                  { name: 'Botella', price: '14' },
                ],
                allergens: null,
              },
              {
                id: '83',
                show: false,
                name: 'Manzanilla Solear',
                img: 'vino-manzanilla-solear',
                desc: 'Manzanilla fina y vieja, de carácter alegre que funcionará de maravilla con ibéricos.',
                prices: [
                  { name: 'Copa', price: '2,50' },
                  { name: 'Botella', price: '15' },
                ],
                allergens: null,
              },
              {
                id: '84',
                show: false,
                name: 'Portocelo Roble',
                img: 'vino-portocelo-rivera',
                desc: 'Vino tinto tempranillo con denominación de origen Ribera del Duero.',
                prices: [
                  { name: 'Copa', price: '2,20' },
                  { name: 'Botella', price: '12' },
                ],
                allergens: null,
              },
              {
                id: '85',
                show: false,
                name: 'Lan Crianza',
                img: 'vino-lan-crianza',
                desc: 'Vino crianza de la Rioja Alta y Rioja Alavesa perfecto para acompañar tapas y entremeses.',
                prices: [
                  { name: 'Copa', price: '2,90' },
                  { name: 'Botella', price: '17' },
                ],
                allergens: null,
              },
              {
                id: '86',
                show: false,
                name: 'Rueda Heredad de Peñalosa',
                img: 'vino-rueda-penalosa',
                desc: 'Vino blanco 100% Verdejo con denominación de origen Rueda.',
                prices: [
                  { name: 'Copa', price: '2,20' },
                  { name: 'Botella', price: '12' },
                ],
                allergens: null,
              },
              {
                id: '87',
                show: false,
                name: 'Alma de Valdeguerra',
                img: 'vino-alma-valdeguerra',
                desc: 'Vino rosado semidulce con denominación de origen Madrid.',
                prices: [
                  { name: 'Copa', price: '2,20' },
                  { name: 'Botella', price: '12' },
                ],
                allergens: null,
              },
              {
                id: '88',
                show: false,
                name: 'Viñaredo Godello',
                img: 'vino-vinaredo-godello',
                desc: 'Vino blanco fresco y afrutado procedente de viñedos de Valdeorras.',
                prices: [
                  { name: 'Copa', price: '2,20' },
                  { name: 'Botella', price: '14' },
                ],
                allergens: null,
              },
            ],
          },
          {
            title: 'Bebidas <span>🥤</span>',
            desc: null,
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 60,
                show: false,
                name: 'Café o infusión',
                img: 'cafe-con-leche',
                desc: 'Café al gusto (cortado, sólo, con leche...) o infusión.',
                prices: [{ name: 'Precio', price: '1,30' }],
                allergens: null,
              },
              {
                id: 61,
                show: false,
                name: 'Carajillo',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '2,50' }],
                allergens: null,
              },
              {
                id: 62,
                show: false,
                name: 'Colacao',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '1,40' }],
                allergens: null,
              },
              {
                id: 63,
                show: false,
                name: 'Botella de agua',
                img: 'botella-agua',
                desc: 'El agua de Cabreiroá destaca por sus propiedades minero-medicinales.',
                prices: [
                  { name: '1/2 litro', price: '1,60' },
                  { name: '1 litro', price: '2,80' },
                ],
                allergens: null,
              },
              {
                id: 64,
                show: false,
                name: 'Refrescos',
                img: 'refrescos',
                desc: 'Coca-Cola, Coca-Cola Zero, Fanta de naranja y limón...',
                prices: [{ name: 'Precio', price: '2,40' }],
                allergens: null,
              },
              {
                id: 65,
                show: false,
                name: 'Zumos',
                img: 'zumos',
                desc: 'De piña, melocotón...',
                prices: [{ name: 'Precio', price: '2,40' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Licores y combinados <span>🍸</span>',
            desc: null,
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 70,
                show: false,
                name: 'Tinto de verano',
                img: 'tinto-de-verano',
                desc: 'Vino tinto con gaseosa o limón bien fresquito.',
                prices: [
                  { name: 'Maceta', price: '2,50' },
                  { name: 'Jarra', price: '3,20' },
                ],
                allergens: null,
              },
              {
                id: 71,
                show: false,
                name: 'Chupito',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '1,40' }],
                allergens: null,
              },
              {
                id: 72,
                show: false,
                name: 'Copa de licor',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '2,40' }],
                allergens: null,
              },
              {
                id: 73,
                show: false,
                name: 'Copa de Baileys',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '3,80' }],
                allergens: null,
              },
              {
                id: 74,
                show: false,
                name: 'Combinados',
                img: 'combinados',
                desc: 'Combinados nacionales o de importación. Preguntar al camarero por nuestra selección de licores.',
                prices: [
                  { name: 'Nacional', price: '5' },
                  { name: 'Importación', price: '5,50' },
                  { name: 'Nordes', price: '7,30' },
                  { name: 'Legendario', price: '5,80' },
                ],
                allergens: null,
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
        'logo': 'https://haztunegociodigital.com/assets/negocios/bar-galicia/bar-galicia-logo.png',
        'name': 'Bar Galicia Valdemoro',
        'description': 'Bar Galicia de Valdemoro especializado en raciones y cocina gallega',
        'telephone': '+34 91 895 53 64',
        'email': 'haztunegociodigital@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': 'https://haztunegociodigital.com/assets/negocios/bar-galicia/bar-galicia-metadata-cover.jpg',
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
      { hid: 'og:image', property: 'og:image', content: `${ownerUrl}/assets/negocios/${businessId}/${businessId}-metadata-cover.jpg` },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `${ownerUrl}/assets/negocios/${businessId}/${businessId}-metadata-cover.jpg` },
      { hid: 'og:image:alt', property: 'og:image:alt', content: description },

      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:image', name: 'twitter:image', content: `${ownerUrl}/assets/negocios/${businessId}/${businessId}-metadata-cover.jpg` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: description },
      { hid: 'twitter:site', name: 'twitter:site', content: ownerUrl },
      { hid: 'twitter:creator', name: 'twitter:creator', content: `${ownerUrl}/assets/negocios/${businessId}/${businessId}-metadata-cover.jpg` },
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
  },
}
</script>

<style lang="sass">
$border-radius: 3px

.business
  &.bar-galicia
    .section.name
      font-size: 1.1rem
      font-weight: bolder
      letter-spacing: .02rem

    .dish
      &.info .name:not(.price)
        font-weight: 600
      &.img
        width: 120px
        height: auto

    .aside-menu
      .aside-business-name
        font-family: cursive // if logo fails
      .aside-business-logo
        width: 300px
        padding-bottom: 0
      .aside-menu-link span
        display: none

    .navbar.bottom-bar
      box-shadow: -3px -3px 6px -2px rgba(60, 64, 67, 0.5), 3px 3px 6px 2px rgba(60, 64, 67, 0.5)
      .navbar-brand
        border-radius: $border-radius
        background-color: rgba(white,.8)
        .navbar-brand-logo
          width: 105px
          height: 47px

    .business.data .name,
    .footer .name
      font-family: cursive
      color: #940202

    .footer .name
      font-size: 1.4rem
      font-weight: 600

    .footer, .message
      background-color: #eceef2
</style>
