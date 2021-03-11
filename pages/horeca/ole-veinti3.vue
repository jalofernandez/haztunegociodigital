<template>
  <main :class="['business', business.id, { 'aside-menu-open': showAside }]">
    <!-- Floating button to trigger Aside navbar -->
    <button class="btn js-aside light" type="button" @click="asideBehaviour">
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
      :data="business.schedule"
      v-if="business.schedule"
    />

    <!-- Aside to navigate across dishes sections -->
    <TheAside :business="business" @aside="asideBehaviour()" />

    <!-- Modal dialogs for each item to shown info details -->
    <BusinessItemModal :business="business" />

    <div class="dishes">
      <!-- Business info -->
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
            <button type="button" class="btn light" @click="showModal()" v-if="business.schedule">
              Ver horario
            </button>
          </li>
        </ul>
      </div>

      <BaseMessage :data="business.messages.gluten" v-if="business.messages" />

      <!-- Items list :: all Menu Dishes & Beverages -->
      <BusinessItemList :business="business" />
    </div>

    <div class="message thankfulness">
      <p><b>Gracias</b> por su visita 😊</p>
    </div>

    <TheFooter :data="business.name" />
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
      business: {
        id: 'ole-veinti3',
        name: 'Taberna Olé Veinti3',
        type: 'Restaurante, bar, cafetería',
        cover: 'cover',
        address: 'Calle Miguel Hernández, 3, 28342 Valdemoro, Madrid',
        place: 'Valdemoro, Madrid',
        gmap: 'cybbnXb5z2gM1ctQ9',
        phone: '910000000',
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
            title: 'Raciones de la tierra',
            desc: 'descripción de raciones',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 1,
                show: false,
                name: 'Jamón ibérico',
                // img: 'jamon-iberico',
                desc:
                  'Jamón ibérico',
                prices: [
                  { name: 'Ración', price: '16' },
                  { name: '1/2 ración', price: '9,50' },
                ],
                allergens: null,
              },
              {
                id: 2,
                show: false,
                name: 'Queso manchego',
                // img: 'queso-manchego',
                desc:
                  'Queso manchego',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 3,
                show: false,
                name: 'Tabla de jamón y queso',
                // img: 'tabla-jamon-queso',
                desc:
                  'Tabla de jamón y queso',
                prices: [
                  { name: 'Ración', price: '18' },
                  { name: '1/2 ración', price: '11' },
                ],
                allergens: null,
              },
              {
                id: 28,
                show: false,
                name: 'Tabla de pates y quesos',
                // img: 'tabls-pates-quesos',
                desc:
                  'Tabla de pates y quesos',
                prices: [
                  { name: 'Tabla', price: '15,50' }
                ],
                allergens: null,
              },
              {
                id: 22,
                show: false,
                name: 'Revuelto de setas',
                // img: 'revuelto-setas',
                desc:
                  'Revuelto de setas',
                prices: [
                  { name: 'Ración', price: '12' }
                ],
                allergens: null,
              },
              {
                id: 24,
                show: false,
                name: 'Morcilla de Burgos',
                // img: 'morcilla-burgos',
                desc:
                  'Morcilla de Burgos',
                prices: [
                  { name: 'Ración', price: '13' }
                ],
                allergens: null,
              },
              {
                id: 10,
                show: false,
                name: 'Croquetas caseras',
                // img: 'croquetas-caseras',
                desc:
                  'Croquetas caseras',
                prices: [
                  { name: 'Ración', price: '9' },
                  { name: '1/2 ración', price: '5,50' },
                ],
                allergens: null,
              },
              {
                id: 11,
                show: false,
                name: 'Patatas bravas o bravioli',
                // img: 'patatas-bravas',
                desc:
                  'Patatas bravas o bravioli',
                prices: [
                  { name: 'Ración', price: '9' },
                  { name: '1/2 ración', price: '5,50' },
                ],
                allergens: null,
              },
              {
                id: 19,
                show: false,
                name: 'Carne de pincho',
                // img: 'carne-pincho-patatas-pimientos',
                desc:
                  'Carne de pincho y patatas fritas con pimientos de padrón',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 25,
                show: false,
                name: 'Huevos rotos con jamón',
                // img: 'huvos-rotos-jamon',
                desc:
                  'Huevos rotos con jamón',
                prices: [
                  { name: 'Ración', price: '13' }
                ],
                allergens: null,
              },
              {
                id: 4,
                show: false,
                name: 'Alitas de pollo',
                // img: 'alitas-pollo',
                desc:
                  'Alitas de pollo (8 uds)',
                prices: [
                  { name: 'Ración', price: '11' }
                ],
                allergens: null,
              },
              {
                id: 20,
                show: false,
                name: 'Pollo, huevos y patatas',
                // img: 'pollo-huevos-patatas-pimientos',
                desc:
                  'Delicias de pollo, patatas fritas con pimientos de padrón y huevos fritos',
                prices: [
                  { name: 'Ración', price: '16' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: null,
              },
              {
                id: 21,
                show: false,
                name: 'Taquitos de pollo',
                // img: 'taquitos-pollo',
                desc:
                  'Taquitos de pollo, patatas fritas y pimientos de padrón con salsa ali oli',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 7,
                show: false,
                name: 'Oreja a la plancha',
                // img: 'oreja-plancha',
                desc:
                  'Oreja a la plancha',
                prices: [
                  { name: 'Ración', price: '11' },
                  { name: '1/2 ración', price: '7' },
                ],
                allergens: null,
              },
              {
                id: 8,
                show: false,
                name: 'Oreja a la gallega',
                // img: 'oreja-gallega',
                desc:
                  'Oreja a la gallega',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 9,
                show: false,
                name: 'Lacón a la gallega',
                // img: 'lacon-gallega',
                desc:
                  'Lacón a la gallega',
                prices: [
                  { name: 'Ración', price: '11' },
                  { name: '1/2 ración', price: '7,50' },
                ],
                allergens: null,
              },
              {
                id: 29,
                show: false,
                name: 'Lacón con grelos',
                // img: 'lacon-grelos',
                desc:
                  'Lacón con grelos y chorizo al estilo gallego. Bajo reserva. Precio por comensal.',
                prices: [
                  { name: 'Por persona', price: '11' }
                ],
                allergens: null,
              },
              {
                id: 18,
                show: false,
                name: 'Pimientos de padrón',
                // img: 'pimientos-padron',
                desc:
                  'Pimientos de padrón',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Raciones del mar',
            desc: 'descripción de raciones del mar',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 12,
                show: false,
                name: 'Bacalao rebozado',
                // img: 'bacalao-rebozado',
                desc:
                  'Bacalao rebozado',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 13,
                show: false,
                name: 'Sepia a la plancha',
                // img: 'sepia-plancha',
                desc:
                  'Sepia a la plancha',
                prices: [
                  { name: 'Ración', price: '13' }
                ],
                allergens: null,
              },
              {
                id: 14,
                show: false,
                name: 'Chipirones a la plancha',
                // img: 'chipirones-plancha',
                desc:
                  'Chipirones a la plancha',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 15,
                show: false,
                name: 'Gambón a la plancha',
                // img: 'gambon-plancha',
                desc:
                  'Gambón a la plancha',
                prices: [
                  { name: 'Ración', price: '13' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 26,
                show: false,
                name: 'Gambas al ajillo',
                // img: 'gambas-ajillo',
                desc:
                  'Gambas al ajillo',
                prices: [
                  { name: 'Ración', price: '15' }
                ],
                allergens: null,
              },
              {
                id: 27,
                show: false,
                name: 'Alcachofas con almejas y gambas',
                // img: 'alcachofas-almejas-gambas',
                desc:
                  'Alcachofas con almejas y gambas',
                prices: [
                  { name: 'Ración', price: '15' },
                  { name: '1/2 ración', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 5,
                show: false,
                name: 'Calamares',
                // img: 'calamares',
                desc:
                  'Calamares',
                prices: [
                  { name: 'Ración', price: '11' },
                  { name: '1/2 ración', price: '7' },
                ],
                allergens: null,
              },
              {
                id: 6,
                show: false,
                name: 'Fritura de la casa',
                // img: 'fritura-casa',
                desc:
                  'Fritura de la casa',
                prices: [
                  { name: 'Ración', price: '16' },
                  { name: '1/2 ración', price: '9' },
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Ensaladas',
            desc: 'Descripción de ensaladas',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 16,
                show: false,
                name: 'Ensalada mixta',
                // img: 'ensalada-mixta',
                desc:
                  'Ensalada mixta',
                prices: [
                  { name: 'Entera', price: '9' },
                  { name: '1/2 media', price: '6' },
                ],
                allergens: null,
              },
              {
                id: 17,
                show: false,
                name: 'Ensalada de ventresca',
                // img: 'ensalada-ventresca',
                desc:
                  'Ensalada de ventresca',
                prices: [
                  { name: 'Entera', price: '13' },
                  { name: '1/2 media', price: '8,50' },
                ],
                allergens: null,
              },
              {
                id: 23,
                show: false,
                name: 'Ensalada césar',
                // img: 'ensalada-cesar',
                desc:
                  'Ensalada césar con pollo crujiente.',
                prices: [
                  { name: 'Entera', price: '13' }
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Carnes a la brasa',
            desc: 'descripción de carnes a la brasa',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 30,
                show: false,
                name: 'Chuletón trinchado',
                // img: 'chuleton-trinchado',
                desc:
                  'Chuletón trinchado con patatas fritas.',
                prices: [
                  { name: 'Pieza', price: '17' }
                ],
                allergens: null,
              },
              {
                id: 31,
                show: false,
                name: 'Secreto de cerdo',
                // img: 'secreto-cerdo',
                desc:
                  'Secreto de cerdo',
                prices: [
                  { name: 'Ración', price: '13' }
                ],
                allergens: null,
              },
              {
                id: 32,
                show: false,
                name: 'Brocheta solomillo con patatas',
                // img: 'brocheta-solomillo',
                desc:
                  'Brocheta solomillo con patatas fritas.',
                prices: [
                  { name: 'Unidad', price: '6,50' }
                ],
                allergens: null,
              },
              {
                id: 33,
                show: false,
                name: 'Carne a la piedra',
                // img: 'carne-piedra',
                desc:
                  'Carne a la piedra. Bajo reserva. Mínimo 2 comensales.',
                prices: [
                  { name: 'Unidad', price: '32' }
                ],
                allergens: null,
              },
              {
                id: 34,
                show: false,
                name: 'Pollo con patatas y huevo',
                // img: 'carne-piedra',
                desc:
                  'Filte de pollo con patatas y huevos fritas.',
                prices: [
                  { name: 'Plato', price: '6,90' }
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Hamburguesas',
            desc: 'Se pueden añadir o retirar ingredientes a gusto del consumidor. Consultar con el camarero.',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 40,
                show: false,
                name: 'Hamburguesa veinti3',
                // img: 'hamburguesa-veinti3',
                desc:
                  'Lechuga, pepinillos, tomate, mayonesa, cebolla, queso, jamón de york.',
                prices: [
                  { name: 'Unidad', price: '5' }
                ],
                allergens: null,
              },
              {
                id: 31,
                show: false,
                name: 'Hamburguesa Olé',
                // img: 'hamburguesa-ole',
                desc:
                  'Lechuga, pepinillos, tomate, mayonesa, cebolla, queso, jamón de york, bacón y huevo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '6' }
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Sándwiches',
            desc: 'Descripción de los Sándwiches',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 45,
                show: false,
                name: 'Sándwich vegetal "Estoque"',
                // img: 'sandwich-vegetal',
                desc:
                  'Lechuga, tomate, mayonesa, huevo a la plancha y espárragos.',
                prices: [
                  { name: 'Unidad', price: '5,50' }
                ],
                allergens: null,
              },
              {
                id: 46,
                show: false,
                name: 'Sándwich mixto "Banderillas"',
                // img: 'sandwich-mixto',
                desc:
                  'Como viene siendo de ley, el Sándwich está compuesto de queso y jamón de york.',
                prices: [
                  { name: 'Unidad', price: '3' }
                ],
                allergens: null,
              },
              {
                id: 47,
                show: false,
                name: 'Sándwich mixto "Capote"',
                // img: 'sandwich-capote',
                desc:
                  'Queso y jamón de york con un huevo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '4' }
                ],
                allergens: null,
              },
              {
                id: 48,
                show: false,
                name: 'Sándwich "Olé"',
                // img: 'sandwich-ole',
                desc:
                  'Queso y bacon con un huevo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '5' }
                ],
                allergens: null,
              },
            ]
          },
          {
            title: 'Tostas',
            desc: 'Descripción de las tostas',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 50,
                show: false,
                name: 'Tosta tumaca y jamón',
                // img: 'tosta-jamon',
                desc:
                  'Tostas de tumaca con jamón y tortilla francesa, el clásico "paleto", vamos.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 51,
                show: false,
                name: 'Tosta tumaca y bacon queso',
                // img: 'tosta-bacon',
                desc:
                  'Tostas de tumaca, bacon y queso.',
                prices: [
                  { name: 'Unidad', price: '6,50' }
                ],
                allergens: null,
              },
              {
                id: 52,
                show: false,
                name: 'Tosta tumaca y lomo',
                // img: 'tosta-lomo',
                desc:
                  'Tosta de tumaca y lomo a la plancha.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 53,
                show: false,
                name: 'Tosta de ventresca y pimientos',
                // img: 'tosta-ventresca',
                desc:
                  'Tosta de ventresca y pimientos de piquillo.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 54,
                show: false,
                name: 'Tosta de jamón ibérico',
                // img: 'tosta-jamon-iberico',
                desc:
                  'Tosta de jamón ibérico con tumaca.',
                prices: [
                  { name: 'Unidad', price: '6,50' }
                ],
                allergens: null,
              },
              {
                id: 55,
                show: false,
                name: 'Tosta de salmón',
                // img: 'tosta-salmon',
                desc:
                  'Tosta de salmón con queso roquefort.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 56,
                show: false,
                name: 'Tosta de anchoas con tomate',
                // img: 'tosta-anchoas',
                desc:
                  'Tosta de anchoas con tomate',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 57,
                show: false,
                name: 'Tosta de solomillo',
                // img: 'tosta-solomillo',
                desc:
                  'Tosta de solomillo con queso fundido.',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 58,
                show: false,
                name: 'Tosta de gulas',
                // img: 'tosta-gulas',
                desc:
                  'Tosta de gulas',
                prices: [
                  { name: 'Unidad', price: '7' }
                ],
                allergens: null,
              },
              {
                id: 59,
                show: false,
                name: 'Tosta de pulpo',
                // img: 'tosta-vegetal',
                desc:
                  'Tosta de pulpo a la gallega con su toque de pimentón de la vera, sal gorda y aceite cruda.',
                prices: [
                  { name: 'Unidad', price: '8,50' }
                ],
                allergens: null,
              }
            ]
          },
          {
            title: 'Parrilladas',
            desc: 'descripción de parrilladas',
            // imgs: {
            //   position: 'top',
            //   width: 120,
            //   height: 120,
            // },
            items: [
              {
                id: 60,
                show: false,
                name: 'Parrilladas de verduras',
                // img: 'parrilladas-verduras',
                desc:
                  'Parrilladas de verduras',
                prices: [
                  { name: 'Parrillada', price: '13,50' }
                ],
                allergens: null,
              },
              {
                id: 61,
                show: false,
                name: 'Parrilladas de carne',
                // img: 'parrilladas-carne',
                desc:
                  'Parrilladas de carne',
                prices: [
                  { name: 'Parrillada', price: '18' }
                ],
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
        'logo': 'https://haztunegociodigital.com/assets/negocios/ole-veinti3/ole-veinti3-logo.png',
        'name': 'Taberna Olé Veinti3',
        'description': 'Taberna Olé Veinti3 de Valdemoro especializado en raciones y carnes a la brasa',
        'telephone': '+34 91 000 00 00',
        'email': 'haztunegociodigital@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': 'https://haztunegociodigital.com/assets/negocios/ole-veinti3/ole-veinti3-metadata-cover.jpg',
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
          'ratingCount': '102'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Lunes',
              'Martes',
              'Miércoles',
              'Jueves',
              'Viernes',
              'Sábado',
              'Domingo'
            ],
            'opens': '11:30',
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
    const description = `${businessName} en ${businessPlace} por ${this.$store.state.landing.author.name}`
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
// $font-family-name: Georgia, serif
$font-family-name: 'Brush Script MT', cursive
$font-family-desc: Verdana, sans-serif
$font-color: #f2e0d3 // superdark Orange
$bg-color: #222222 // very Dark Grey
$card-color: #181512 // almost Black
$price-color: #eb710c // medium Orange
$border-radius: 12px
// $shadow-color: #502e08

main.business
  &.ole-veinti3
    background-color: $bg-color

    .business.data,
    .dish.item,
    .btn.light,
    .btn.js-close
      background-color: $card-color
    .btn
      border-color: $bg-color
      border-width: 2px
      &:not(.js-close),
      &.js-aside .opener
        color: $price-color

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
        .prices .price.quantity
          color: $price-color
      &.img
        width: 120px
        height: auto
        img
          border-radius: $border-radius

    .message,
    .section
      color: $font-color
    .section.name
      font-size: 120%
      font-weight: 600

    .business.data .name,
    .footer .name
      font-family: $font-family-desc
      color: $price-color

    .business.data
      .name
        padding: .5rem 0
        font-size: 1.5rem
      ul li a
        color: $font-color

    .footer
      .name
        font-weight: 600
      ul li
        color: $font-color

    .footer, .message
      background-color: $bg-color

    .aside-menu
      background-color: $card-color
      h2
        font-family: $font-family-desc
        color: $price-color
      ul li a
        font-family: $font-family-desc
        color: $font-color
        padding: .4rem 1.5rem
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
        .prices .helper,
        .schedule .day
          font-family: $font-family-desc
          color: $font-color
</style>
