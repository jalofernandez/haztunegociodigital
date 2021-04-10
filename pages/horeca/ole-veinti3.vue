<template>
  <div
    :class="['page', 'business', business.id, { 'aside-menu-open': showAside }]">
    <!-- Floatin´bottom Navbar (small screen devices only) -->
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
    <!-- <BusinessNavbar :business="business" @aside="asideBehaviour()" /> -->

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
                  @click="showModal()"
                  v-if="business.schedule"
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
        id: 'ole-veinti3',
        name: 'Taberna Olé Veinti3',
        desc: 'Restaurante parrilla bar',
        logo: true,
        cover: 'cover',
        address: 'Calle Miguel Hernández, 3, 28342 Valdemoro.',
        place: 'Valdemoro, Madrid',
        gmap: 'cybbnXb5z2gM1ctQ9',
        phone: '670584973',
        whatsapp: null,
        // whatsapp: 670584973,
        // social: {
        //   facebook: "https://www.facebook.com/¿?/",
        //   instagram: "https://www.instagram.com/¿?/",
        //   tripadvisor: "https://www.tripadvisor.es/¿?.html",
        // },
        schedule: {
          days: [
            { day: 'Lunes', hour: '11:00 - 2:00' },
            { day: 'Martes', hour: '11:00 - 2:00' },
            { day: 'Miercoles', hour: 'Cerrado' },
            { day: 'Jueves', hour: '11:00 - 2:00' },
            { day: 'Viernes', hour: '11:00 - 2:00' },
            { day: 'Sábado', hour: '11:00 - 2:00' },
            { day: 'Domingo', hour: '11:00 - 2:00' },
          ],
        },
        messages: {
          gluten: {
            type: null,
            copy: '<strong>Celebramos todo tipo de eventos</strong> bajo reserva previa. Consultános. <br>Toda nuestra carta también <strong>para llevar</strong>. Recoger en el local.',
          },
        },
        menus: [
          {
            title: 'Menús <span>🍽️</span>',
            desc: 'Preguntar al camarero por los platos ofrecidos y la disponibilidad.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 120,
                show: false,
                name: 'Menú del día',
                img: null,
                desc: 'Preguntar los platos ofrecidos cada día. <br>Incluye pan, bebida, postre o café. <br><small>Disponibles de <b>Lunes</b> a <b>Viernes</b>.</small>',
                prices: [{ name: 'Precio', price: '10' }],
                allergens: null,
              },
              {
                id: 121,
                show: false,
                name: 'Menú especial',
                img: null,
                desc: 'Preguntar los platos ofrecidos y su disponibilidad.',
                prices: [{ name: 'A partir de', price: '22' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Raciones de la tierra',
            desc: '"Gran variedad de entrantes típicos de la gastronomía medirterránea."',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 1,
                show: false,
                name: 'Jamón ibérico',
                img: 'racion-jamon-iberico',
                desc: null,
                prices: [
                  { name: 'Ración', price: '16,50' },
                  { name: '1/2 ración', price: '10' },
                ],
                allergens: null,
              },
              {
                id: 2,
                show: false,
                name: 'Queso manchego',
                img: null,
                // img: 'racion-queso-manchego',
                desc: null,
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['gluten','huevos', 'lacteos'],
              },
              {
                id: 3,
                show: false,
                name: 'Tabla de jamón y queso',
                img: 'tabla-jamon-queso',
                desc: null,
                prices: [
                  { name: 'Ración', price: '18,50' },
                  { name: '1/2 ración', price: '11,50' },
                ],
                allergens: ['gluten','huevos', 'lacteos', 'soja'],
              },
              {
                id: 4,
                show: false,
                name: 'Tabla de pates y quesos',
                img: null,
                // img: 'tabla-pates-quesos',
                desc: null,
                prices: [
                  { name: 'Tabla', price: '16' }
                ],
                allergens: ['gluten','huevos', 'lacteos', 'soja'],
              },
              {
                id: 5,
                show: false,
                name: 'Revuelto de setas',
                img: 'racion-revuelto-setas',
                desc:
                  'Tradicional revuelto de setas de la gastornomía del norte de España.',
                prices: [
                  { name: 'Ración', price: '12,50' }
                ],
                allergens: ['huevos', 'lacteos', 'sulfitos'],
              },
              {
                id: 6,
                show: false,
                name: 'Morcilla de Burgos',
                img: 'racion-morcilla-burgos',
                desc:
                  'Morcilla de cebolla y arroz típica de la gastronomía burgalesa.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: 'Ración', price: '9' }
                ],
                allergens: ['lacteos'],
              },
              {
                id: 7,
                show: false,
                name: 'Croquetas caseras',
                img: 'racion-croquetas',
                desc:
                  'Ración de riquísimas croquetas caseras de jamón.',
                prices: [
                  { name: 'Ración', price: '9,50' },
                  { name: '1/2 ración', price: '6' },
                ],
                allergens: ['huevos', 'lacteos', 'sulfitos'],
              },
              {
                id: 8,
                show: false,
                name: 'Patatas bravas o bravioli',
                img: 'racion-patatas-bravas',
                desc:
                  'Ración de patatas bravas picantes o con un sabrosa mezcla de salsa brava y salsa ali oli.',
                prices: [
                  { name: 'Ración', price: '9,50' },
                  { name: '1/2 ración', price: '6' },
                ],
                allergens: ['sulfitos', 'huevos']
              },
              {
                id: 9,
                show: false,
                name: 'Carne de pincho',
                img: 'racion-carne-pincho',
                desc:
                  'Ración de carne de pincho con patatas fritas y pimientos de Padrón.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['sulfitos']
              },
              {
                id: 10,
                show: false,
                name: 'Huevos rotos con jamón',
                img: 'racion-huevos-rotos-jamon',
                desc:
                  'Revuelto de patatas fritas, huevos fritos y jamón curado. Un clásico nacional.',
                prices: [
                  { name: 'Ración', price: '13,50' }
                ],
                allergens: ['huevos', 'sulfitos'],
              },
              {
                id: 11,
                show: false,
                name: 'Alitas de pollo',
                img: 'racion-alitas-pollo',
                desc:
                  'Alitas de pollo (8 unidades) al punto de sal.',
                prices: [
                  { name: 'Ración', price: '13,50' }
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 12,
                show: false,
                name: 'Delicias de pollo',
                // img: 'racion-pollo-huevos',
                img: null,
                desc:
                  'Piezas de pollo, patatas fritas con pimientos de padrón y huevos fritos.',
                prices: [
                  { name: 'Ración', price: '16,50' },
                  { name: '1/2 ración', price: '9,50' },
                ],
                allergens: ['huevos', 'sulfitos'],
              },
              {
                id: 13,
                show: false,
                name: 'Taquitos de pollo',
                img: 'racion-taquitos-pollo',
                desc:
                  'Piezas de pollo con rebozado suave, patatas fritas y pimientos de padrón con salsa ali oli.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 14,
                show: false,
                name: 'Oreja a la plancha',
                img: 'racion-oreja-plancha',
                desc:
                  'Tradicional ración de oreja de cerdo a la plancha al punto que desse con un toque picante.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 15,
                show: false,
                name: 'Oreja a la gallega',
                img: 'racion-oreja-gallega',
                desc:
                  'Oreja a la gallega cocida con aceite de oliva, sal y pimientón de la Vera espolvoreado.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: null,
              },
              {
                id: 16,
                show: false,
                name: 'Lacón a la gallega',
                img: 'racion-lacon-gallega',
                desc:
                  'Lacón de cerdo cocido con su toque de pimentón de la Vera con aceite de oliva virgen.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: null,
              },
              {
                id: 17,
                show: false,
                name: 'Lacón con grelos',
                // img: 'racion-lacon-grelos',
                img: null,
                desc:
                  'Lacón con grelos y chorizo al estilo gallego. Bajo reserva. Precio por comensal.',
                prices: [
                  { name: 'Preguntar', price: '11,50' }
                ],
                allergens: null,
              },
              {
                id: 18,
                show: false,
                name: 'Pimientos de padrón',
                img: 'racion-pimientos-padron',
                desc:
                  'Ya lo dicen los gallegos: <em>"Os pementos de Padrón, uns pican e outros non"</em>.',
                prices: [
                  { name: 'Ración', price: '11,50' },
                  { name: '1/2 ración', price: '7,50' },
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 19,
                show: false,
                name: 'Berenjenas con miel',
                // img: 'berenjenas-miel',
                img: null,
                desc:
                  'Berenjenas rebozadas fritas con miel tradicionales de la cocina andaluza.',
                prices: [
                  { name: 'Ración', price: '12,50' }
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 20,
                show: false,
                name: 'Torreznos de Soria',
                img: 'racion-torreznos-soria',
                desc:
                  'Disponemos de los auténticos torreznos de Soria. Elaborados con panceta de cerdo frita crujiente por fuera y jugosos por dentro.',
                prices: [
                  { name: 'Unidad', price: '4,50' }
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 21,
                show: false,
                name: 'Tortilla de patatas',
                img: 'racion-tortilla-patatas',
                desc:
                  'Tortilla de patatas casera con <strong>huevos de corral</strong> y cebolla. ¡Un clásico español!',
                prices: [
                  { name: 'Pincho', price: '3' },
                  { name: 'Entera', price: '10' }
                ],
                allergens: ['huevos', 'sulfitos'],
              },
            ]
          },
          {
            title: 'Raciones del mar',
            desc: '"Raciones de pescado fresco: robozados, mariscos, frituras..."',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 22,
                show: false,
                name: 'Bacalao rebozado',
                img: 'racion-bacalao-rebozado',
                desc:
                  'Bacalao rebozado como se debe hacer: frito tras pasarlo por harina y empaparlo en huevo batido.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['huevos', 'lacteos', 'sulfitos'],
              },
              {
                id: 23,
                show: false,
                name: 'Sepia a la plancha',
                img: 'racion-sepia-plancha',
                desc:
                  'Sepia fresca a la plancha con salsa alioli y guarnición de ensalada.',
                prices: [
                  { name: 'Ración', price: '13,50' }
                ],
                allergens: ['moluscos', 'pescado', 'huevos', 'sulfitos'],
              },
              {
                id: 24,
                show: false,
                name: 'Chipirones a la plancha',
                img: 'racion-chipirones-plancha',
                desc:
                  'Clásica ración de chipirones a la plancha con cebolla y su aceite de oliva, ajo y perejil.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['moluscos'],
              },
              {
                id: 25,
                show: false,
                name: 'Gambón a la plancha',
                img: 'racion-gambon-plancha',
                desc: null,
                prices: [
                  { name: 'Ración', price: '15,50' },
                  { name: '1/2 ración', price: '9,50' },
                ],
                allergens: ['crustaceos', 'pescado', 'sulfitos'],
              },
              {
                id: 26,
                show: false,
                name: 'Gambas al ajillo',
                // img: 'racion-gambas-ajillo',
                img: null,
                desc:
                  'La popular ración de la cocina española: gambas, ajo y aceite de oliva con un toque picante.',
                prices: [
                  { name: 'Ración', price: '15,50' }
                ],
                allergens: ['crustaceos', 'pescado', 'sulfitos'],
              },
              {
                id: 27,
                show: false,
                name: 'Alcachofas con almejas y gambas',
                img: 'racion-alcachofas-almejas-gambas',
                desc:
                  'Alcachofas frescas con almejas y gambas salteadas con ajo y aceite de oliva.',
                prices: [
                  { name: 'Ración', price: '15,50' },
                  { name: '1/2 ración', price: '9,50' },
                ],
                allergens: ['crustaceos', 'pescado', 'sulfitos'],
              },
              {
                id: 28,
                show: false,
                name: 'Calamares a la romana',
                img: 'racion-calamares-romana',
                desc:
                  'Calamares rebozados sólo con harina fritos con su toque de limón.',
                prices: [
                  { name: 'Ración', price: '13,50' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: ['moluscos', 'pescado', 'sulfitos', 'gluten'],
              },
              {
                id: 29,
                show: false,
                name: 'Fritura de la casa',
                img: 'racion-fritura',
                desc:
                  'Clásica fritura variada de pescado rebozado: calamares, chopitos, patas de calamar, gambas, merluza...',
                prices: [
                  { name: 'Ración', price: '16,50' },
                  { name: '1/2 ración', price: '9,50' },
                ],
                allergens: ['moluscos', 'crustaceos', 'pescado', 'sulfitos'],
              },
            ]
          },
          {
            title: 'Ensaladas',
            desc: '"Fresquitas y saludables. Prueba nuestras ensaladas."',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 30,
                show: false,
                name: 'Ensalada mixta',
                img: 'ensalada-mixta',
                desc:
                  'Ensalada de mezclun de lechugas, tomate, espáragos, atún, cebolla...',
                prices: [
                  { name: 'Entera', price: '9,50' },
                  { name: '1/2 media', price: '6,50' },
                ],
                allergens: ['huevos'],
              },
              {
                id: 31,
                show: false,
                name: 'Ensalada de ventresca',
                img: 'ensalada-ventresca',
                desc:
                  'Ensalada de ventresca de atún, cogollos, tomate, anchoas, pimientos de piquillo...',
                prices: [
                  { name: 'Entera', price: '13,50' },
                  { name: '1/2 media', price: '9' },
                ],
                allergens: null,
              },
              {
                id: 32,
                show: false,
                name: 'Ensalada césar',
                img: 'ensalada-cesar',
                desc:
                  'Ensalada césar con pollo crujiente, lechuga romana, piña, manzana, huevo y nuestra salsa casera (preguntad por ella).',
                prices: [
                  { name: 'Entera', price: '13,50' }
                ],
                allergens: ['huevos'],
              },
            ]
          },
          {
            title: 'Carnes a la brasa',
            desc: '"Carnes jugosas a la parrilla para que se te haga la boca agua."',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 40,
                show: false,
                name: 'Chuletón trinchado',
                img: 'chuleton-trinchado',
                desc:
                  'Chuletón trinchado con su guarnición de patatas fritas.',
                prices: [
                  { name: 'Pieza', price: '17,50' }
                ],
                allergens: null,
              },
              {
                id: 41,
                show: false,
                name: 'Secreto de cerdo',
                img: 'secreto-cerdo',
                desc:
                  'Secreto de cerdo jugoso marcado a la brasa con sus patatas fritas.',
                prices: [
                  { name: 'Ración', price: '13,50' }
                ],
                allergens: null,
              },
              {
                id: 42,
                show: false,
                name: 'Carne a la piedra',
                // img: 'carne-piedra',
                img: null,
                desc:
                  'Carne a la piedra. Bajo reserva. Mínimo 2 comensales.',
                prices: [
                  { name: '1 kg aprox.', price: '32' }
                ],
                allergens: null,
              },
              {
                id: 43,
                show: false,
                name: 'Chuletitas de cordero',
                img: 'chuletitas-cordero',
                desc:
                  'Chuletitas de cordero de lechal con su guarnición de patatas fritas.',
                prices: [
                  { name: 'Plato', price: '17,00' }
                ],
                allergens: null,
              }
            ]
          },
          {
            title: 'Parrilladas',
            desc: '"Nuestras famosas parrilladas de carne, verduras o marisco a la brasa. Bajo <b>reserva previa</b>."',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 71,
                show: false,
                name: 'Parrillada de carne',
                img: 'parrillada-carne',
                desc:
                  'Carnes a la brasa: costillas de cerdo, pechuga de pollo, chorizitos, longaniza, panceta, alitas de pollo, chuleta de cerdo... Y patatas fritas.',
                prices: [
                  { name: 'Parrillada', price: '18,50' }
                ],
                allergens: null,
              },
              {
                id: 70,
                show: false,
                name: 'Parrillada de verduras',
                img: 'parrillada-verduras',
                desc:
                  'Compuesta de verduras frescas como tomate, pimiento verde y rojo, cebolla, brocoli, berenjena, calabacín, champiñones, espárragos con sal de escamos y aceite cruda.',
                prices: [
                  { name: 'Parrillada', price: '15,50' }
                ],
                allergens: null,
              },
              {
                id: 72,
                show: false,
                name: 'Parrillada de marisco',
                img: 'parrillada-marisco',
                desc:
                  'Del mar a tu mesa: cigalas, navajas, gambas y gambones, mejillones, centollo o buey de mar... <br>Bajo <b>reserva previa</b>.',
                prices: [
                  { name: 'Parrillada', price: '45' }
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Platos combinados',
            desc: '"¿Qué hay más típico que los platos combinados?"',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 46,
                show: false,
                name: 'Brocheta solomillo',
                img: 'combo-brocheta-solomillo',
                desc:
                  'Brocheta de solomillo de cerdo con su guarnición de patatas fritas.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: ['sulfitos'],
              },
              {
                id: 47,
                show: false,
                name: 'Pollo con patatas y huevo',
                img: 'combo-pollo-huevo',
                desc:
                  'Filete de pechuga de pollo con guarnición de patatas y huevos fritos.',
                prices: [
                  { name: 'Plato', price: '7,90' }
                ],
                allergens: ['huevos', 'sulfitos'],
              },
              {
                id: 48,
                show: false,
                name: 'Chuleta con patatas y huevo',
                // img: 'combo-chuleta-huevo',
                img: null,
                desc:
                  'Chuleta de cerdo con guarnición de patatas y huevos fritos.',
                prices: [
                  { name: 'Plato', price: '7,90' }
                ],
                allergens: ['huevos', 'sulfitos'],
              }
            ]
          },
          {
            title: 'Hamburguesas',
            desc: '"Se pueden <b>añadir o retirar ingredientes</b> a gusto del consumidor. Consultar con el camarero."',
            imgs: {
              position: 'top',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 50,
                show: false,
                name: 'Hamburguesa veinti3',
                img: 'hamburguesa-veinti3',
                desc:
                  'De ternera, lechuga, pepinillos, tomate, mayonesa, cebolla, queso y jamón de york.',
                prices: [
                  { name: 'Unidad', price: '5,50' }
                ],
                allergens: ['lacteos'],
              },
              {
                id: 51,
                show: false,
                name: 'Hamburguesa Olé',
                img: 'hamburguesa-ole',
                desc:
                  'De ternera, lechuga, pepinillos, tomate, mayonesa, cebolla, queso, jamón de york, bacón y huevo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '6,50' }
                ],
                allergens: ['huevos'],
              },
            ]
          },
          {
            title: 'Sándwiches',
            desc: '"Nuestros sándwiches están elaborados con rebanadas de pan rústico."',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 55,
                show: false,
                name: 'Sándwich vegetal "Estoque"',
                img: 'sandwich-vegetal-estoque',
                desc:
                  'Lechuga, tomate, mayonesa, huevo a la plancha y espárragos.',
                prices: [
                  { name: 'Unidad', price: '6' }
                ],
                allergens: ['huevos', 'lacteos'],
              },
              {
                id: 56,
                show: false,
                name: 'Sándwich mixto "Banderillas"',
                img: 'sandwich-mixto-banderillas',
                desc:
                  'Como viene siendo de ley: sándwich de queso y jamón de york a la plancha.',
                prices: [
                  { name: 'Unidad', price: '3,50' }
                ],
                allergens: ['lacteos'],
              },
              {
                id: 57,
                show: false,
                name: 'Sándwich mixto "Capote"',
                // img: 'sandwich-mixto-capote',
                img: null,
                desc:
                  'Queso y jamón de york con un huevo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '4,50' }
                ],
                allergens: ['huevos', 'lacteos'],
              },
              {
                id: 58,
                show: false,
                name: 'Sándwich "Olé"',
                // img: 'sandwich-ole',
                img: null,
                desc:
                  'Queso, jamón de york y bacon con un huevo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '5,50' }
                ],
                allergens: ['huevos', 'lacteos'],
              },
            ]
          },
          {
            title: 'Tostas',
            desc: '"Todas nuestras tostas están elaborados con rebanadas de pan rústico."',
            imgs: {
              position: 'center',
              width: 96,
              height: 122,
            },
            items: [
              {
                id: 60,
                show: false,
                name: 'Tosta jamón y tortilla',
                img: 'tosta-jamon',
                desc:
                  'Pan tumaca con jamón y tortilla francesa. El clásico "paleto", vamos.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: ['huevos'],
              },
              {
                id: 61,
                show: false,
                name: 'Tosta tumaca y bacon queso',
                img: 'tosta-bacon',
                desc:
                  'Pan tumaca con bacon a la plancha y queso fundido.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: ['lacteos'],
              },
              {
                id: 62,
                show: false,
                name: 'Tosta lomo y queso',
                img: 'tosta-lomo',
                desc:
                  'Pan tumaca y lomo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: null,
              },
              {
                id: 63,
                show: false,
                name: 'Tosta de solomillo',
                img: 'tosta-solomillo',
                desc:
                  'Pan tostado con solomillo y salsa de queso roquefort.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: ['lacteos'],
              },
              {
                id: 64,
                show: false,
                name: 'Tosta de jamón ibérico',
                img: 'tosta-jamon-iberico',
                desc:
                  'Pan tumaca con jamón ibérico.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 65,
                show: false,
                name: 'Tosta de ventresca y pimientos',
                img: 'tosta-ventresca',
                desc:
                  'Pan tostado con ventresca y pimientos de piquillo.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: ['pescado'],
              },
              {
                id: 66,
                show: false,
                name: 'Tosta de salmón',
                img: 'tosta-salmon',
                desc:
                  'Pan tostado con salmón y salsa de queso roquefort.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: ['pescado','lacteos'],
              },
              {
                id: 67,
                show: false,
                name: 'Tosta de anchoas con tomate',
                // img: 'tosta-anchoas',
                img: null,
                desc:
                  'Pan tostado con anchoas y tomate fresco.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: ['pescado'],
              },
              {
                id: 68,
                show: false,
                name: 'Tosta de gulas',
                img: 'tosta-gulas',
                desc:
                  'Pan tostado con gulas y salsa de queso suave tipo Philadelphia.',
                prices: [
                  { name: 'Unidad', price: '7,50' }
                ],
                allergens: ['pescado'],
              },
              {
                id: 69,
                show: false,
                name: 'Tosta de pulpo',
                img: 'tosta-pulpo',
                desc:
                  'Pan tostado con pulpo a la gallega sobre cama de puré de patatas. Todo con su toque de pimentón de la vera, sal gorda y aceite cruda.',
                prices: [
                  { name: 'Unidad', price: '9' }
                ],
                allergens: ['moluscos', 'pescado'],
              }
            ]
          },
          {
            title: 'Cervezas',
            desc: null,
            imgs: {
              position: 'bottom',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 80,
                show: false,
                name: 'El Álguila',
                img: 'cerveza-aguila',
                desc: 'Disponemos de la cerveza madrileña El Águila lager especial y sin filtrar.',
                prices: [
                  { name: 'Tercio especial', price: '2,50' },
                  { name: 'Tercio sin filtrar', price: '2,80' },
                ],
                allergens: ['gluten'],
              },
              {
                id: 81,
                show: false,
                name: 'Amstel Original',
                img: 'cerveza-amstel',
                desc: 'Disponemos de la cerveza valenciana Amstel original 100% malta.',
                prices: [
                  { name: 'Caña', price: '1,60' },
                  { name: 'Doble', price: '2,50' },
                  { name: 'Tercio', price: '2,50' },
                  { name: 'Jarra', price: '3,30' },
                ],
                allergens: ['gluten'],
              },
              {
                id: 82,
                show: false,
                name: 'Amstel Radler',
                img: 'cerveza-radler',
                desc: 'La cerveza Amstel Original de siempre con el zumo de limón ofreciendo el doble de frescor.',
                prices: [
                  { name: 'Caña', price: '1,60' },
                  { name: 'Doble', price: '2,50' },
                  { name: 'Tercio', price: '2,70' },
                  { name: 'Jarra', price: '3,30' },
                ],
                allergens: ['gluten'],
              },
              {
                id: 83,
                show: false,
                name: 'Amstel Oro',
                img: 'cerveza-amstel-oro',
                desc: 'Cerveza lager especial tostada, mezcla de maltas de cebadas claras y tostadas.',
                prices: [
                  { name: 'Tercio', price: '2,70' }
                ],
                allergens: ['gluten'],
              },
              {
                id: 84,
                show: false,
                name: 'Amstel Oro 0,0',
                img: 'cerveza-amstel-oro-sin',
                desc: 'Cerveza lager especial tostada pero sin nada de alcohol.',
                prices: [
                  { name: 'Tercio', price: '2,70' }
                ],
                allergens: ['gluten'],
              },
              {
                id: 85,
                show: false,
                name: 'Buckler 0,0',
                img: 'cerveza-buckler',
                desc: 'Cerveza sin alcohol 100% malta. Dorada, única y ligera.',
                prices: [
                  { name: 'Caña', price: '1,60' },
                  { name: 'Doble', price: '2,50' },
                  { name: 'Copa', price: '2,50' },
                  { name: 'Jarra', price: '3,30' },
                ],
                allergens: ['gluten'],
              },
              {
                id: 86,
                show: false,
                name: 'El Alcázar',
                img: 'cerveza-alcazar',
                desc: 'Cerveza especial, con cuerpo, sabor intenso y fuertes notas aromáticas.',
                prices: [
                  { name: 'Tercio', price: '2,70' }
                ],
                allergens: ['gluten'],
              },
              {
                id: 87,
                show: false,
                name: '18/70 La Rubia',
                img: 'cerveza-1870-la-rubia',
                desc: 'Cerveza rubia de estilo lager con más cuerpo y fácil de beber, nacida en Donosti.',
                prices: [
                  { name: 'Tercio', price: '2,70' }
                ],
                allergens: ['gluten'],
              },
              {
                id: 88,
                show: false,
                name: 'Heineken',
                img: 'cerveza-heineken',
                desc: 'Disponemos de la cerveza holandesa Heineken Pilsener.',
                prices: [
                  { name: 'Tercio', price: '2,50' }
                ],
                allergens: ['gluten'],
              },
              {
                id: 89,
                show: false,
                name: 'Desperados',
                img: 'cerveza-desperados',
                desc: 'Cerveza alsaciana aromatizada con tequila.',
                prices: [
                  { name: 'Tercio', price: '3,00' }
                ],
                allergens: ['gluten'],
              },
              {
                id: 90,
                show: false,
                name: 'Ladrón de Manzanas',
                img: 'sidra-ladron-manzanas',
                desc: '<b>Sidra</b> elaborada con 7 tipos de manzanas dulces y ácidas, sin gluten, con bajo contenido alcohólico y un toque de gas.',
                prices: [
                  { name: 'Tercio', price: '2,70' }
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Vinos',
            desc: '"Amplia variedad de vinos. Preguntad a nuestros camareros."',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 101,
                show: false,
                name: 'Rivera Roble',
                img: 'vino-rivera-roble',
                desc: 'Ribera del Duero roble. Ideal para embutidos y quesos así como para guisos.',
                prices: [
                  { name: 'Copa', price: '2,50' },
                  { name: 'Botella', price: '14' },
                ],
                allergens: null,
              },
              {
                id: 102,
                show: false,
                name: 'Rioja crianza',
                img: 'vino-rioja-crianza',
                desc: 'Rioja crianza ideal para maridar con asados de carne.',
                prices: [
                  { name: 'Copa', price: '2,50' },
                  { name: 'Botella', price: '14' },
                ],
                allergens: null,
              },
              {
                id: 103,
                show: false,
                name: 'Alma',
                img: 'vino-alma',
                desc: 'Vino rosado semidulce con denominación de origen.',
                prices: [
                  { name: 'Copa', price: '2,50' },
                  { name: 'Botella', price: '14' },
                ],
                allergens: null,
              },
              {
                id: 104,
                show: false,
                name: 'Verdejo',
                img: 'vino-verdejo',
                desc: 'Vinos blanco verdejo con denominación de origen.',
                prices: [
                  { name: 'Copa', price: '2,20' },
                  { name: 'Botella', price: '10' },
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Licores y combinados',
            desc: null,
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 110,
                show: false,
                name: 'Tinto de verano',
                img: 'tinto-de-verano',
                desc: 'Vino tinto con gaseosa o limón bien fresquito.',
                prices: [
                  { name: 'Vaso ancho', price: '2,50' },
                  { name: 'Jarra', price: '3,30' }
                ],
                allergens: null,
              },
              {
                id: 111,
                show: false,
                name: 'Combinados',
                img: 'combinados',
                desc:
                  'Combinados nacionales o de importación. Preguntar al camarero por nuestra selección de licores sus precios.',
                prices: [
                  { name: 'Nacional', price: '4,70' },
                  { name: 'Importación', price: '5,20' },
                  { name: 'Barceló', price: '5,50' },
                  { name: 'Legendario', price: '7' }
                ],
                allergens: null,
              },
              // {
              //   id: 112,
              //   show: false,
              //   name: 'Chupito',
              //   img: null,
              //   desc: null,
              //   prices: [{ name: 'Precio', price: '1,40' }],
              //   allergens: null,
              // },
            ],
          },
          {
            title: 'Bebidas',
            desc: null,
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 120,
                show: false,
                name: 'Café o infusión',
                img: 'cafe-con-leche',
                desc:
                  'Café al gusto (cortado, sólo, con leche...) o infusión.',
                prices: [
                  { name: 'Café', price: '1,30' },
                  { name: 'Infusión', price: '1,30' },
                  { name: 'Carajillo', price: '3,50' }
                ],
                allergens: null,
              },
              {
                id: 121,
                show: false,
                name: 'Café irlandés o vienés',
                img: 'cafe-irlandes',
                desc:
                  '<small>En temporada de invierno disponemos de:</small> <br><strong>café irlandés</strong>: whisky, azúcar y café cubierto de crema. <br><strong>café vienés</strong>: café y nata montada.',
                prices: [
                  { name: 'Irlandés', price: '5,50' },
                  { name: 'Vienés', price: '3,50' }
                ],
                allergens: null,
              },
              {
                id: 122,
                show: false,
                name: 'Botella de agua',
                img: 'botella-agua',
                desc: 'Disponemos de agua mineral embotellada de medio litro.',
                prices: [
                  { name: '1/2 litro', price: '1,50' }
                ],
                allergens: null,
              },
              {
                id: 123,
                show: false,
                name: 'Refrescos',
                img: 'refrescos',
                desc: 'Coca-Cola <small>Nomal y Zero</small>, Nestea, Fanta y Acuarius (<small>naranja y limón</small>)...',
                prices: [
                  { name: 'Coca-Cola', price: '2,50' },
                  { name: 'Fanta', price: '2,50' },
                  { name: 'Nestea', price: '2,60' },
                  { name: 'Acuarius', price: '2,60' }
                ],
                allergens: null,
              },
              {
                id: 124,
                show: false,
                name: 'Zumos',
                img: 'zumos',
                desc: 'De piña, melocotón...',
                prices: [{ name: 'Precio', price: '2,50' }],
                allergens: null,
              },
            ]
          }     
        ]
      },
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        'additionalType': 'Taberna Olé Veinti3 de Valdemoro en #HazTuNegocioDigital por @jalofernández',
        '@id': 'https://haztunegociodigital.com/horeca/ole-veinti3',
        'url': 'https://haztunegociodigital.com/horeca/ole-veinti3',
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        'logo': 'https://haztunegociodigital.com/negocios/ole-veinti3/ole-veinti3-metadata-logo.jpg',
        'name': 'Taberna Olé Veinti3',
        'description': 'Taberna Olé Veinti3 de Valdemoro especializado en raciones y carnes a la brasa',
        'telephone': '+34 91 000 00 00',
        'email': 'haztunegociodigital@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': 'https://haztunegociodigital.com/negocios/ole-veinti3/ole-veinti3-metadata-cover.jpg',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+34 91 000 00 00',
          'contactType': 'Llamar para reservar o recoger pedidos',
        },
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Calle Miguel Hernández, 3',
          'postalCode': '28342',
          'addressLocality': 'Valdemoro',
          'addressRegion': 'Madrid'
        },
        'hasMap': 'https://goo.gl/maps/YryixYPatDDUUphbA',
        'geo' : {
          '@type': 'GeoCoordinates',
          'latitude': '40.19418532123188',
          'longitude': '-3.684211738623255'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4',
          'bestRating': '5',
          'worstRating': '1',
          'ratingCount': '104'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Lunes',
              'Martes',
              'Jueves',
              'Viernes',
              'Sábado',
              'Domingo'
            ],
            'opens': '11:00',
            'closes': '02:00'
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
    }
  },
}
</script>

<style lang="sass">
// $font-family-name: Georgia, serif
$font-family-name: 'Brush Script MT', cursive
$font-family-desc: Verdana, sans-serif
$font-color: #f2e0d3  // superlight Orange almost White
$bg-color: #222222    // very Dark Grey
$card-color: #181512  // superdark Brown almost Black
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
      border-color: $bg-color
      border-width: 2px
      &:not(.js-close),
      &.js-aside .opener
        color: $price-color

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
        .modal-wrapper .md-modal.has-dish .md-content .details
          font-family: $font-family-desc
          color: lighten($font-color, 5%)
        .name:not(.price)
          font-size: 2rem
          line-height: 1
        .prices
          .price.quantity
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

    .modal-wrapper .md-modal.has-dish .md-content
      background-color: $card-color
      border-radius: $border-radius
      .img
        border-color: $card-color
        border-radius: $border-radius
        width: calc(100% - .5rem)
        margin: .25rem auto 0 auto
      .details
        border-radius: $border-radius
        .name:not(.price)
          font-size: 2rem
        .prices .helper,
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
