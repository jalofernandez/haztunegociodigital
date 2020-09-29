// as Data()
export const state = () => ({
  services: [
    {
      id: 'canessa',
      name: 'Peluquería canina Canessa',
      type: 'Peluquería, dog grooming, estética canina',
      cover: 'cover',
      address: 'Calle Vicente Aleixandre, 5, 28342 Valdemoro, Madrid',
      place: 'Valdemoro, Madrid',
      gmap: 'yAZmAMEMtTABiJUC7',
      phone: '912480430',
      // social: {
      //   facebook: "https://www.facebook.com/laantiguabodeguitavaldemoro/",
      //   instagram: "https://www.instagram.com/antiguabodeguita/",
      //   tripadvisor: "https://www.tripadvisor.es/Restaurant_Review-g1063667-d6962779-Reviews-La_Bodeguita_del_Tio_Rosa-Valdemoro.html",
      // },
      schedule: {
        days: [
          { day: 'Lunes', hour: '10:00-14:00 / 16:00-20:00' },
          { day: 'Martes', hour: 'Cerrado' },
          { day: 'Miercoles', hour: '10:00-14:00 / 16:00-20:00' },
          { day: 'Jueves', hour: '10:00-14:00 / 16:00-20:00' },
          { day: 'Viernes', hour: '10:00-14:00 / 16:00-20:00' },
          { day: 'Sábado', hour: 'Cerrado' },
          { day: 'Domingo', hour: 'Cerrado' },
        ],
      },
      messages: null,
      menus: [
        {
          title: 'Servicios de estética perruna',
          desc: 'Cuidamos de tus peludos como si fueran nuestros ❤️',
          imgs: {
            position: 'top',
            width: 90,
            height: 133,
          },
          items: [
            {
              id: 1,
              show: false,
              name: 'Baño y corte',
              img: 'pomeranian',
              desc:
                'Baño completo con champú específico y crema hidratante además de corte comercial a tijera o máquina.',
              prices: [
                { name: 'Pequeño', price: '28' },
                { name: 'Mediano', price: '32' },
                { name: 'Grande', price: '35' },
              ],
              allergens: null,
            },
            {
              id: 2,
              show: false,
              name: 'Baño y arreglo',
              img: 'pomeranian',
              desc:
                'Baño completo con champú específico y crema hidratante además de arreglo (mantenimiento) a tijera.',
              prices: [
                { name: 'Pequeño', price: '20' },
                { name: 'Mediano', price: '25' },
                { name: 'Grande', price: '28' },
              ],
              allergens: null,
            },
            {
              id: 3,
              show: false,
              name: 'Stripping',
              img: 'pomeranian',
              desc:
                'Deslanado a mano del pelo duro de determinadas razas (Schnauzer, Teckel, Westie...) para favorecer la renovación de su manto.',
              prices: [
                { name: 'Pequeño', price: '35' },
                { name: 'Mediano', price: '38' },
                { name: 'Grande', price: '42' },
              ],
              allergens: null,
            },
          ],
        },
      ],
    },
    {
      id: 'jalofernandez',
      name: 'Jalofernandez: designer + coder',
      type: 'Diseño gráfico, desarrollo web, programamción',
      cover: 'cover',
      address: 'Calle Vicente Bascuñana, 6, 28224 Pozuelo de Alarcón, Madrid',
      place: 'Pozuelo de Alarcón, Madrid',
      gmap: 'rBLjwME49KtSmdHu9',
      phone: '696682791',
      // social: {
      //   facebook: "https://www.facebook.com/laantiguabodeguitavaldemoro/",
      //   instagram: "https://www.instagram.com/antiguabodeguita/",
      //   tripadvisor: "https://www.tripadvisor.es/Restaurant_Review-g1063667-d6962779-Reviews-La_Bodeguita_del_Tio_Rosa-Valdemoro.html",
      // },
      schedule: {
        days: [
          { day: 'Lunes', hour: '9:00-14:00 / 16:00-20:00' },
          { day: 'Martes', hour: '9:00-14:00 / 16:00-20:00' },
          { day: 'Miercoles', hour: '9:00-14:00 / 16:00-20:00' },
          { day: 'Jueves', hour: '9:00-14:00 / 16:00-20:00' },
          { day: 'Viernes', hour: '9:00-14:00 / 16:00-20:00' },
          { day: 'Sábado', hour: 'Cerrado' },
          { day: 'Domingo', hour: 'Cerrado' },
        ],
      },
      messages: {
        gluten: {
          type: 'alert',
          copy: 'Diseñador gráfico <b>offset</b> y <b>online</b>. <br />Consultar tarifas y presupuestos.',
        },
      },
      menus: [
        {
          title: 'Arroces',
          desc:
            'Selección de arroces caldosos o melosos de marisco. <span class="semibold">40 minutos</span> de tiempo de elaboración. <span class="semibold">Pedido mínimo</span> para 2 comensales.',
          imgs: {
            position: 'top',
            width: 90,
            height: 90,
          },
          items: [
            {
              id: 60,
              show: false,
              name: 'Arroz con bogavante',
              img: 'arroz-bogavante',
              desc: 'Clásico arroz con bogavante caldoso o suelto, según preferencia del comensal.',
              prices: [{ name: 'Precio', price: '20' }],
              allergens: ['crustaceos', 'pescado'],
            },
            {
              id: 61,
              show: false,
              name: 'Arroz con zamburiñas',
              img: 'arroz-zamburinas',
              desc: 'Arroz con zamburiñas al gusto: caldoso o suelto.',
              prices: [{ name: 'Precio', price: '18' }],
              allergens: ['crustaceos', 'pescado', 'moluscos'],
            },
            {
              id: 62,
              show: false,
              name: 'Paella de marisco',
              img: 'arroz-paella-marisco',
              desc: 'Paella española de marisco con langostinos rojos, mejillones, almejas...',
              prices: [{ name: 'Precio', price: '18' }],
              allergens: ['crustaceos', 'pescado', 'moluscos'],
            },
            {
              id: 63,
              show: false,
              name: 'Paella de pulpo y gambas 🍤',
              img: 'arroz-pulpo-gambas',
              desc: 'Paella especial de pulpo y gambas al gusto, meloso o suelto.',
              prices: [{ name: 'Precio', price: '18' }],
              allergens: ['crustaceos', 'pescado', 'moluscos'],
            },
            {
              id: 64,
              show: false,
              name: 'Arroz negro al gusto',
              img: 'arroz-al-gusto',
              desc: 'Arroz con tinta de calamar (negro) al gusto: gambas, pulpo, almejas, mejillones, zamburiñas...',
              prices: [{ name: 'Precio', price: '18' }],
              allergens: ['crustaceos', 'pescado', 'moluscos'],
            },
          ],
        },
      ],
    },
  ],
})

// // as Computed: properties
// export const getters = {}

// // as a Methods: property (small actions that never update the "state")
// // export const actions = {}

// // are responsible for setting & updating the "state"
export const mutations = {
  modalBehaviour(state, payload) {
    console.log(payload)
    return state.services.find((item) => (item.id = payload))
  },

  // toggleModal(state, services) {
  //   menus.items.show = false ? true : false
  // },
}
