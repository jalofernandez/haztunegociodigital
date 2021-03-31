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
          :class="{ 'ml-1': !business.whatsapp }"
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

    <!-- <a href="https://www.facebook.com/laantiguabodeguitavaldemoro/" target="_blank" rel="noopener noreferrer" title="Facebook de La antigua bodeguita" class="facebook"><span class="brand icon"><i class="mdi mdi-24px mdi-facebook"></i></span></a> -->

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
                  @click="showModal()"
                  v-if="business.schedule"
                >
                  Ver horario
                </button>
              </li>
            </ul>
          </div>
          <BaseMessage :data="business.messages" v-if="business.messages" />
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
        id: 'la-antigua-bodeguita',
        name: 'La Antigua Bodeguita',
        type: 'Restaurante, marisquería, arrocería',
        logo: false,
        cover: 'cover',
        // desc: 'En pleno centro de Valdemoro ofrecemos alta cocina mediterránea especializándonos en arroces y mariscos. Nuestra cocinera, Ioana, se instruyó con el chef Paco Roncero.',
        address: 'Pje. de Colón, 2, 28341 Valdemoro, Madrid, España',
        place: 'Valdemoro, Madrid',
        gmap: 'fGcJ3LA1DA4ETxTd8',
        phone: '644093470',
        whatsapp: '34644093470',
        // social: {
        //   facebook: "https://www.facebook.com/laantiguabodeguitavaldemoro/",
        //   instagram: "https://www.instagram.com/antiguabodeguita/",
        //   tripadvisor: "https://www.tripadvisor.es/Restaurant_Review-g1063667-d6962779-Reviews-La_Bodeguita_del_Tio_Rosa-Valdemoro.html",
        // },
        schedule: {
          days: [
            { day: 'Lunes', hour: '11:00 - 1:00' },
            { day: 'Martes', hour: '11:00 - 1:00' },
            { day: 'Miercoles', hour: '11:00 - 1:00' },
            { day: 'Jueves', hour: 'Cerrado' },
            { day: 'Viernes', hour: '11:00 - 1:00' },
            { day: 'Sábado', hour: '11:00 - 1:00' },
            { day: 'Domingo', hour: '11:00 - 1:00' },
          ],
        },
        messages: null,
        menus: [
          {
            title: 'Para empezar',
            desc: 'Una exquisita selección de <span class="semibold">productos frescos</span> y de la huerta.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 1,
                show: false,
                name: 'Tomates con arbequina y sal Maldon',
                img: 'tomates-arbequina',
                desc:
                  'Tomates naturales de la granja con aceite de oliva virgen extra de Arbequina y la tradicional sal de escamas de Essex (Maldon).',
                prices: [{ name: 'Precio', price: '9' }],
                allergens: null,
              },
              {
                id: 2,
                show: false,
                name: 'Tomates con escabeche y piparras',
                img: 'tomates-escabeche',
                desc: 'Tomates naturales de la granja con escabeche y piparras picantes del cantábrico.',
                prices: [{ name: 'Precio', price: '13' }],
                allergens: null,
              },
              {
                id: 3,
                show: false,
                name: 'Tomates con anchoa del Cantábrico',
                img: 'tomates-anchoas',
                desc: 'Tomates naturales de la granja con anchoas del cantábrico.',
                prices: [{ name: 'Precio', price: '14' }],
                allergens: null,
              },
              {
                id: 4,
                show: false,
                name: 'Tomates con ventresca',
                img: 'tomates-ventresca',
                desc: 'Tomates frescos y naturales de la granja con ventresca de atún.',
                prices: [{ name: 'Precio', price: '13' }],
                allergens: null,
              },
              {
                id: 5,
                show: false,
                name: 'Pimientos de Lodosa con escabeche y piparras',
                img: null,
                desc: 'Pimientos de piquillo de Lodosa, DO Navarra, con escabeche y piparras cántabras.',
                prices: [{ name: 'Precio', price: '13' }],
                allergens: null,
              },
              {
                id: 6,
                show: false,
                name: 'Foie con canónigos al caramelo de naranja',
                img: 'foie-canonigos',
                desc:
                  'Foie de pato en virutas sobre cama de canónigos rehogados con vinagreta de caramelo a la naranja.',
                prices: [{ name: 'Precio', price: '12' }],
                allergens: null,
              },
              {
                id: 7,
                show: false,
                name: 'Setas gratinadas con ali oli',
                img: 'setas-espuma-alioli',
                desc: 'Setas gratinadas con espuma de ali oli a la miel.',
                prices: [{ name: 'Precio', price: '13' }],
                allergens: null,
              },
              {
                id: 8,
                show: false,
                name: 'Ensalada del Bierzo',
                img: null,
                desc: 'Ensalada de brotes frescos con cecina del Bierzo y tomates de la huerta.',
                prices: [{ name: 'Precio', price: '12' }],
                allergens: null,
              },
              {
                id: 9,
                show: false,
                name: 'Anchoas de Castro Urdiales con base de tomate',
                img: null,
                desc: 'Anchoas de Castro Urdiales con base de tomates naturales de la huerta.',
                prices: [{ name: 'Precio', price: '19' }],
                allergens: null,
              },
              {
                id: 10,
                show: false,
                name: 'Alcachofitas salteadas con foie',
                img: 'alcachofitas-foie',
                desc: 'Corazones de alcachofas baby ligeramente salteadas con foie gras de pato.',
                prices: [{ name: 'Precio', price: '16' }],
                allergens: null,
              },
              {
                id: 11,
                show: false,
                name: 'Revuelto de grelos con gambas',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '16' }],
                allergens: null,
              },
              {
                id: 12,
                show: false,
                name: 'Jamón ibérico con sus tostas',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '15' }],
                allergens: null,
              },
              {
                id: 13,
                show: false,
                name: 'Alcachofa confitada con foie',
                img: 'alcachofa-foie',
                desc: 'Alcachofa confitada a baja temperatura con foie gras de pato y aceite cruda.',
                prices: [{ name: 'Precio', price: '6' }],
                allergens: null,
              },
              {
                id: 14,
                show: false,
                name: 'Carpacho de boletus',
                img: 'carpacho-boletus',
                desc: 'Carpacho de boletus confitados con foie gras de pato y cecina leonesa.',
                prices: [{ name: 'Precio', price: '14' }],
                allergens: null,
              },
              {
                id: 15,
                show: false,
                name: 'Pimientos del padrón',
                img: null,
                desc: 'Sin acompañamiento.',
                prices: [{ name: 'Precio', price: '8' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Del Mar',
            desc: 'Selección de <span class="semibold">productos mediterráneos</span> del mar del norte.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 20,
                show: false,
                name: 'Mejillones a la Trattoria',
                img: 'mejillones-trattoria',
                desc: 'Mejillones al vapor al estilo italiano con su vino blanco, pimienta negra, ajito y perejil.',
                prices: [{ name: 'Precio', price: '9' }],
                allergens: ['crustaceos', 'pescado', 'sulfitos'],
              },
              {
                id: 21,
                show: false,
                name: 'Pulpo a feira con cachelos',
                img: 'pulpo-cachelos',
                desc: 'Pulpo cocido al estilo tradicional gallego con acéite cruda, pimentón de la Vera y sal gruesa con cachelos, la auténtica patata norteña cocida.',
                prices: [{ name: 'Precio', price: '18' }],
                allergens: ['moluscos', 'pescado'],
              },
              {
                id: 22,
                show: false,
                name: 'Pulpo a la parrilla con patata asada',
                img: 'pulpo-parrilla',
                desc:
                  'Pulpo cocido con un toque de parrilla además de su pimentón de la Vera, sal gruesa y patata asada.',
                prices: [{ name: 'Precio', price: '19' }],
                allergens: ['moluscos', 'pescado'],
              },
              {
                id: 23,
                show: false,
                name: 'Almejas de Arousa a la marinera',
                img: 'almejas-marinera',
                desc: 'Almejas de Arousa a la marinera.',
                prices: [{ name: 'Precio', price: '18' }],
                allergens: ['crustaceos', 'pescado'],
              },
              {
                id: 24,
                show: false,
                name: 'Bacalao rebozado',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '14' }],
                allergens: ['pescado'],
              },
              {
                id: 25,
                show: false,
                name: 'Zamburiñas a la plancha',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '14' }],
                allergens: ['crustaceos', 'pescado'],
              },
              {
                id: 26,
                show: false,
                name: 'Boquerones fritos de Cádiz',
                img: 'boquerones-fritos',
                desc: 'Boquerones fritos enharinados y salpimentados con su toque de limón.',
                prices: [{ name: 'Precio', price: '9' }],
                allergens: ['moluscos', 'pescado'],
              },
              {
                id: 27,
                show: false,
                name: 'Tartar de salmón',
                img: null,
                desc: 'Tartar de salmón con cama de tomate fresco y aguacate acompañado de pan tostado.',
                prices: [{ name: 'Precio', price: '16' }],
                allergens: ['pescado'],
              },
              {
                id: 28,
                show: false,
                name: 'Tartar de atún',
                img: 'tartar-atun',
                desc: 'Atún con sésamo en cama de tomate fresco, cebolla morada y aguacate acompañado de pan tostado.',
                prices: [{ name: 'Precio', price: '16' }],
                allergens: ['pescado'],
              },
              {
                id: 29,
                show: false,
                name: 'Gambas blancas a la plancha 🍤',
                img: 'gambas-plancha',
                desc: 'Ración de gambas blancas frescas a la plancha con un toque de sal.',
                prices: [{ name: 'Precio', price: '16' }],
                allergens: null,
              },
              {
                id: 30,
                show: false,
                name: 'Tataki de atún con sésamo',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '17' }],
                allergens: ['crustaceos', 'pescado'],
              },
            ],
          },
          {
            title: 'De la Tierra',
            desc: 'Selección de <span class="semibold">productos mediterráneos</span> de las tierras altas norteñas.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 40,
                show: false,
                name: 'Secreto ibérico a la parrilla',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '15' }],
                allergens: null,
              },
              {
                id: 41,
                show: false,
                name: 'Foie plancha con reducción de mermelada de rosa mosqueta',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '18' }],
                allergens: null,
              },
              {
                id: 42,
                show: false,
                name: 'Cecina de vacuno con virutas de manchego',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '14' }],
                allergens: null,
              },
              {
                id: 43,
                show: false,
                name: 'Huevos con jamón ibérico y patatas roja',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '16' }],
                allergens: null,
              },
              {
                id: 44,
                show: false,
                name: 'Entrecot a la parrilla',
                img: 'entrecot-parrilla',
                desc:
                  'Entrecot de vaca gallega a la parrilla de piedra volcánica acompañada de patatas fritas, verduras o tomate natural.',
                prices: [{ name: 'Precio', price: '22' }],
                allergens: null,
              },
              {
                id: 45,
                show: false,
                name: 'Chuletón a la parrilla',
                img: 'chuleton-parrilla',
                desc:
                  'Chuletón de vaca gallega a la parrilla de piedra volcánica acompañada de patatas fritas, verduras o tomate natural.',
                prices: [{ name: 'Precio', price: '38' }],
                allergens: null,
              },
              {
                id: 46,
                show: false,
                name: 'Steak tartar',
                img: null,
                desc: 'Steak tartar de carne madurada acompañado de pan tostado.',
                prices: [{ name: 'Precio', price: '18' }],
                allergens: null,
              },
              {
                id: 47,
                show: false,
                name: 'Lacón a la gallega',
                img: null,
                desc: 'Lacón de cerdo cocido con patatas y su toque de pimentón y aceite de oliva virgen.',
                prices: [{ name: 'Precio', price: '12' }],
                allergens: null,
              },
              {
                id: 48,
                show: false,
                name: 'Espárragos blancos a la parrilla con cecina y trufa',
                img: null,
                desc: '3 unidades.',
                prices: [{ name: 'Precio', price: '12' }],
                allergens: null,
              },
              {
                id: 49,
                show: false,
                name: 'Solomillo de cerdo a la parrilla',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '14' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Arroces',
            desc:
              'Selección de arroces caldosos o melosos de marisco. <span class="semibold">40 minutos</span> de tiempo de elaboración. <span class="semibold">Pedido mínimo</span> para 2 comensales.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 60,
                show: false,
                name: 'Arroz con bogavante',
                img: 'arroz-bogavante',
                desc: 'Clásico arroz con bogavante caldoso o suelto, según preferencia del comensal.',
                prices: [{ name: 'Por persona', price: '20' }],
                allergens: ['crustaceos', 'pescado'],
              },
              {
                id: 61,
                show: false,
                name: 'Arroz con zamburiñas',
                img: 'arroz-zamburinas',
                desc: 'Arroz con zamburiñas al gusto: caldoso o suelto.',
                prices: [{ name: 'Por persona', price: '18' }],
                allergens: ['crustaceos', 'pescado', 'moluscos'],
              },
              {
                id: 62,
                show: false,
                name: 'Paella de marisco',
                img: 'arroz-paella-marisco',
                desc: 'Paella española de marisco con langostinos rojos, mejillones, almejas...',
                prices: [{ name: 'Por persona', price: '18' }],
                allergens: ['crustaceos', 'pescado', 'moluscos'],
              },
              {
                id: 63,
                show: false,
                name: 'Paella de pulpo y gambas 🍤',
                img: 'arroz-pulpo-gambas',
                desc: 'Paella especial de pulpo y gambas al gusto, meloso o suelto.',
                prices: [{ name: 'Por persona', price: '18' }],
                allergens: ['crustaceos', 'pescado', 'moluscos'],
              },
              {
                id: 64,
                show: false,
                name: 'Arroz negro al gusto',
                img: 'arroz-al-gusto',
                desc: 'Arroz con tinta de calamar (negro) al gusto: gambas, pulpo, almejas, mejillones, zamburiñas...',
                prices: [{ name: 'Por persona', price: '18' }],
                allergens: ['crustaceos', 'pescado', 'moluscos'],
              },
            ],
          },
          {
            title: 'De cuchara',
            desc: 'Pedido mínimo para <span class="semibold">2 comensales</span>.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 80,
                show: false,
                name: 'Botillo del Bierzo',
                img: 'botillo-bierzo',
                desc: 'Botillo del Bierzo con su patata, zanahoria, berzas... Al pimentón de la Vera.',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
              {
                id: 81,
                show: false,
                name: 'Codillo asado',
                img: 'codillo-asado',
                desc: 'Codillo asado con verduras.',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
              {
                id: 82,
                show: false,
                name: 'Pochas con almejas',
                img: null,
                desc: 'Pochas con almejas típicas asturianas con su faba asturiana y almejas.',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
              {
                id: 83,
                show: false,
                name: 'Callos con garbanzos',
                img: null,
                desc: 'Cocinamos el famoso guiso de legumbres y casquería norteño que entra perfecto en días de frío.',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
              {
                id: 84,
                show: false,
                name: 'Cocido madrileño',
                img: null,
                desc:
                  'Preparamos el guiso madrileño de garbanzos, verduras, carnes, tocino de cerdo, chorizo, morcilla...',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
              {
                id: 85,
                show: false,
                name: 'Sopa de ajo',
                img: null,
                desc:
                  'La famosa sopa castellana de caldo, pan, pimentón, laurel, ajo, aceite de oliva y huevo escalfado.',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Para terminar',
            desc: 'Postres caseros para dejar un toque dulce en el paladar.',
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 70,
                show: false,
                name: 'Arroz con leche con azúcar tostada',
                img: null,
                desc: 'Arroz con leche casero con azúcar tostada.',
                prices: [{ name: 'Precio', price: '4' }],
                allergens: null,
              },
              {
                id: 71,
                show: false,
                name: 'Flan de orujo',
                img: null,
                desc: 'Flan casero de orujo de licor café de Galicia.',
                prices: [{ name: 'Precio', price: '4,50' }],
                allergens: null,
              },
              {
                id: 72,
                show: false,
                name: 'Tarta Tatin de manzana',
                img: null,
                desc: 'Tarta de manzana casera con dulce hojaldre crujiente.',
                prices: [{ name: 'Precio', price: '6' }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Fuera de carta',
            desc: 'Otras sugerencias culinarias de temporada. Preguntar disponibilidad.',
            imgs: {
              position: 'top',
              width: 120,
              height: 138,
            },
            items: [
              {
                id: 96,
                show: false,
                name: 'Pierna de cordero asada',
                img: 'pierna-cordero-asada',
                desc: 'Pierna de cordero asada a fuego lento con patatas asadas.',
                prices: [{ name: 'Preguntar precio', price: null }],
                allergens: null,
              },
            ],
          },
          {
            title: 'Vinos',
            desc: 'Amplia variedad de vinos.',
            imgs: {
              position: 'bottom',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 90,
                show: false,
                name: 'Condado de Oriza',
                img: 'vino-condado-oriza',
                desc: 'Crianza Rivera del Duero envejecido 14 meses en barricas de roble americano.',
                prices: [
                  { name: 'Copa', price: '2,80' },
                  { name: 'Botella', price: '19' },
                ],
                allergens: null,
              },
              {
                id: 91,
                show: false,
                name: 'Pulpo albariño',
                img: 'vino-pulpo-albarino',
                desc: 'Albariño de Pagos del Rey. Vino blanco de denominación de origen Rías Baixas.',
                prices: [
                  { name: 'Copa', price: '2,60' },
                  { name: 'Botella', price: '18' },
                ],
                allergens: null,
              },
              {
                id: 92,
                show: false,
                name: 'Arnegui',
                img: 'vino-arnegui-rioja',
                desc: 'Crianza Rioja tinto con aromas afrutados, con un toque de herbáceo y de roble bien integrado.',
                prices: [
                  { name: 'Copa', price: '2,50' },
                  { name: 'Botella', price: '18' },
                ],
                allergens: null,
              },
            ],
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
                id: 50,
                show: false,
                name: 'Cerveza de grifo',
                img: 'cerveza-grifo',
                desc: 'Disponemos de grifos de: Estrella de Galicia, Mahou y Heineken.',
                prices: [{ name: 'Copa', price: '2,50' }],
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
                name: 'Cerveza 1906 Red',
                img: 'cerveza-1906-red',
                desc: 'Tercio de cerveza tostada (roja) especial reserva 1906 de Estrella de Galicia.',
                prices: [{ name: 'Tercio', price: '2,90' }],
                allergens: ['gluten'],
              },
              {
                id: 55,
                show: false,
                name: 'Cerveza 1906 Black',
                img: 'cerveza-1906-black',
                desc: 'Tercio de cerveza especial reserva 1906 Black Coupage (negra) de Estrella de Galicia.',
                prices: [{ name: 'Tercio', price: '2,90' }],
                allergens: ['gluten'],
              },
              // {
              //   id: 54,
              //   show: false,
              //   name: 'Cerveza tostada 0,0',
              //   img: 'cerveza-tostada-00',
              //   desc: 'Mahou 0,0 Tostada tiene una combinación inimitable de maltas tostadas.',
              //   prices: [{ name: 'Tercio', price: '2,50' }],
              //   allergens: ['gluten'],
              // },
            ],
          },
          {
            title: 'Cerveza artesanal Yria',
            desc:
              'Yria es una pequeña <span class="semibold">cervecera nacional</span> con una marcada tendencia a la innovación.',
            imgs: {
              position: 'bottom',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 56,
                show: false,
                name: 'Bohemia lager',
                img: 'cerveza-yria-bohemia',
                desc: 'Cerveza rubia refrescante estilo lager de 4.7%',
                prices: [{ name: 'Tercio', price: '3,00' }],
                allergens: ['gluten'],
              },
              {
                id: 57,
                show: false,
                name: 'Golden Ale',
                img: 'cerveza-yria-golden',
                desc: 'Cerveza dorada estilo ale donde predomina la malta. 5.5%',
                prices: [{ name: 'Tercio', price: '3,00' }],
                allergens: ['gluten'],
              },
              {
                id: 58,
                show: false,
                name: 'Brutalism',
                img: 'cerveza-yria-brutalism',
                desc: 'Cerveza brut ipa refrescante y muy aromática. 7%',
                prices: [{ name: 'Tercio', price: '3,00' }],
                allergens: ['gluten'],
              },
            ],
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
                id: 35,
                show: false,
                name: 'Tinto de verano',
                img: 'tinto-de-verano',
                desc: 'Vino tinto con gaseosa o limón bien fresquito.',
                prices: [{ name: 'Vaso ancho', price: '2,80' }],
                allergens: null,
              },
              {
                id: 36,
                show: false,
                name: 'Chupito',
                img: null,
                desc: null,
                prices: [{ name: 'Precio', price: '1,40' }],
                allergens: null,
              },
              {
                id: 37,
                show: false,
                name: 'Combinados',
                img: 'combinados',
                desc:
                  'Combinados nacionales o de importación. Preguntar al camarero por nuestra selección de licores sus precios.',
                prices: null,
                allergens: null,
              },
            ],
          },
          {
            title: 'Otras bebidas',
            desc: null,
            imgs: {
              position: 'top',
              width: 120,
              height: 120,
            },
            items: [
              {
                id: 30,
                show: false,
                name: 'Café o infusión',
                img: 'cafe-con-leche',
                desc: 'Café al gusto (cortado, sólo, con leche...) o infusión.',
                prices: [{ name: 'Precio', price: '1,30' }],
                allergens: null,
              },
              {
                id: 31,
                show: false,
                name: 'Refrescos',
                img: 'refrescos',
                desc: 'Coca-Cola, Coca-Cola Zero, Fanta de naranja y limón...',
                prices: [{ name: 'Precio', price: '2,40' }],
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
        '@id': 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita',
        'url': 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita',
        // sameAs: [
        //   "https://www.instagram.com/jalofernandez/?ref=badge",
        //   "https://twitter.com/jalofernandez",
        //   "https://www.linkedin.com/in/javierlorenzofernandez/",
        //   "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
        //   "https://www.facebook.com/jalofernandez?ref=tn_tnmn",
        // ],
        'logo': 'https://haztunegociodigital.com/assets/negocios/la-antigua-bodeguita/la-antigua-bodeguita-logo.png',
        'name': 'La Antigua Bodeguita',
        'description': 'Restaurante especializado en mariscos, carnes maduradas y arroces',
        'telephone': '+34 644 09 34 70',
        'email': 'jalofernandez@gmail.com',
        'currenciesAccepted': 'EUR',
        'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
        'priceRange': 'Desde 2€',
        'image': '',
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
          'ratingCount': '288'
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
            'opens': '09:00',
            'closes': '23:00'
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
$border-radius: 12px
// $shadow-color: #502e08

.business.la-antigua-bodeguita
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
      .modal-wrapper .md-modal.has-dish .md-content .details
        font-family: $font-family-desc
        color: lighten($font-color, 5%)
      .prices .price.quantity
        color: coral
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

  .business.data .name,
  .footer .name
    font-family: $font-family-desc
    color: coral

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
    background-color: coral
    h2
      font-family: $font-family-desc
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
