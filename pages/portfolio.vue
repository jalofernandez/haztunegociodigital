<template>
  <main class="portfolio">
    <!-- (modal dialogs) each Gallery item -->
    <div
      v-for="(item, index) in portfolio"
      :key="index"
      :class="['modal-wrapper', { 'md-show' : item.show }]"
    >
      <div :id="'modal-'+item.id" class="md-modal">
        <div class="md-content">
          <img
            :src="'/portfolio/' + item.img"
            :title="item.title + ' ' + byJalo"
            :alt="item.title + ' ' + byJalo"
          />
          <p>
            {{ item.title }}
          </p>
          <button class="btn menu--link glitch js-modal-close" data-text="X Close me!" @click="item.show = false">
            X Close me!
          </button>
        </div>
      </div>
      <div :class="['modal-overlay', 'flicker', { 'md-show' : item.show }]" @click="item.show = false"></div>
    </div>
    <!-- top Navbar to filter Gallery below -->
    <div class="toolbar mb2 mt2">
      <nuxt-link :to="{name: 'index'}" class="btn menu--link glitch" data-text="<< Home">
        &lt;&lt; Home
      </nuxt-link>
      <button
        class="btn fil-cat menu--link glitch"
        v-for="(link, index) in links"
        :key="index"
        type="button"
        value="text"
        name="all"
        aria-labelledby="all"
        :data-rel="link.filter"
        :data-text="link.name"
        @click="filterItems(link.filter)"
      >
        {{ link.name }}
      </button>
    </div>
    <div style="clear:both;"></div>
    <!-- (gallery) @jalofernandez works -->
    <div id="portfolio">
      <div
        v-for="(item, index) in portfolio"
        :key="index"
        :class="'tile scale-anm js-modal-trigger '+item.filter+' all'"
        :data-modal="'modal-'+item.id"
        @click="item.show = !item.show"
      >
        <img :src="'/portfolio/'+item.img" :title="item.title+' '+byJalo" :alt="item.title+' '+byJalo"/>
        <div class="overlay">
          {{ overlay }}
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      overlay: "Click me to make me bigger",
      byJalo: "by @jalofernandez",
      links: [
        { name: "All", filter: "all" },
        { name: "Layout", filter: "layout" },
        { name: "Photography", filter: "photo" },
        { name: "UX/UI/Web", filter: "web" },
        { name: "Packaging", filter: "pack" },
        { name: "Graphs/Draws", filter: "graph" }
      ],
      portfolio: [
        { id: "01", show: false, filter: "graph", img: "movistar-upplication_promo-rollup_by-jalofernandez.jpg", title: "Upplication + Movistar promo rollup" },
        { id: "20", show: false, filter: "pack photo", img: "britishknights_packaging-shoesbox_by-jalofernandez.jpg", title: "British Knights shoesbox packaging" },
        { id: "02", show: false, filter: "layout", img: "bcard_upplication_01.jpg", title: "Upplication business card side A" },
        { id: "03", show: false, filter: "layout", img: "bcard_upplication_02.jpg", title: "Upplication Developers business card" },
        { id: "19", show: false, filter: "layout", img: "ecomerzpro_email-template-marketplace_by-jalofernandez.jpg", title: "EcomerzPro email layout" },
        { id: "04", show: false, filter: "layout", img: "upplication_pwa-infography_by-jalofernandez.jpg", title: "Upplication PWA infography layout" },
        { id: "05", show: false, filter: "web", img: "app_sample-pic_restaurant-module.png", title: "Upplication App (Restaurant module)" },
        { id: "42", show: false, filter: "photo", img: "britishknights_promo-collection_by-jalofernandez.jpg", title: "British Knights tees promo poster @jalofernandez" },
        { id: "43", show: false, filter: "layout", img: "salondejuegos_bcard-invitation_by-jalofernandez.jpg", title: "Salón de Juegos business card + invitation" },
        { id: "44", show: false, filter: "layout", img: "laparadadelosmonstruos-bar_flyer-halloween_by-jalofernandez.jpg", title: "La Parada de los Monstruos flyer" },
        { id: "37", show: false, filter: "graph", img: "domolock-app_concept-logo_by-jalofernandez.jpg", title: "Domolock App concept logo" },
        { id: "38", show: false, filter: "graph", img: "puntoycoma_comic_strip_n32_by-jalofernandez.jpg", title: "Comic strip to Punto y Coma magazine" },
        { id: "39", show: false, filter: "layout graph", img: "brithisknights_hoddie-specs_by-jalofernandez.jpg", title: "British Knights hoddie chart sheet" },
        { id: "21", show: false, filter: "layout", img: "wellness_promo-flyerA5-sideA_by-jalofernandez.jpg", title: "Wellness promo flyer layout" },
        { id: "22", show: false, filter: "layout", img: "wellness_promo-flyerA5-sideB_by-jalofernandez.jpg", title: "Wellness promo flyer layout" },
        { id: "23", show: false, filter: "layout photo", img: "britishknights_winter-catalog_by-jalofernandez.jpg", title: "British Knights winter catalog page" },
        { id: "45", show: false, filter: "graph", img: "aiba_adoption-campaign-logo_by-jalofernandez.jpg", title: "Aiba adoption campaign logotype" },
        { id: "24", show: false, filter: "layout web", img: "widitrade_manager-offer-details_by-jalofernandez.jpg", title: "Widitrade manager offer detail view" },
        { id: "07", show: false, filter: "graph", img: "upplication_socialmedia-promo-artwork_by-jalofernandez.jpg", title: "Upplication Valentines Day promo artwork to social media" },
        { id: "25", show: false, filter: "layout web", img: "byeinsects_landing-page-with-counterdown_by-jalofernandez.jpg", title: "Bye Insects landing page" },
        { id: "26", show: false, filter: "layout web", img: "byeinsects_landing-page-desktop_by-jalofernandez.jpg", title: "Bye Insects landing page" },
        { id: "53", show: false, filter: "layout", img: "younging_bcard-mockup_by-jalofernandez.jpg", title: "Younging business cards mockup" },
        { id: "65", show: false, filter: "layout graph", img: "upplication_crew-team-manifest_by-jalofernandez.jpg", title: "Upplication crew infography" },
        { id: "66", show: false, filter: "layout web", img: "knowers_index-page-with-login-signin_by-jalofernandez.jpg", title: "Knowers webwsite login" },
        { id: "06", show: false, filter: "layout graph", img: "acens-upplication_infography-cover_by-jalofernandez.jpg", title: "Upplication + Acens infography cover" },
        { id: "08", show: false, filter: "layout graph", img: "acens-upplication_infography-page_by-jalofernandez.jpg", title: "Upplication + Acens commercial infography" },
        { id: "27", show: false, filter: "layout photo", img: "spalding_promo-flyer-basket_by-jalofernandez.jpg", title: "Spalding promo flyer layout" },
        { id: "54", show: false, filter: "layout web", img: "teayudamosavendermas_website-contact-form_by-jalofernandez.jpg", title: "Te ayudamos a vender más contact form" },
        { id: "55", show: false, filter: "layout web", img: "knowers_customers-chat-page-desktop_by-jalofernandez.jpg", title: "Knowers customers chat view desktop version" },
        { id: "56", show: false, filter: "layout", img: "lepainquotidien_daily-menu-card_by-jalofernandez.jpg", title: "Le Pain Quotidien daily menu card" },
        { id: "57", show: false, filter: "layout web", img: "oportino-restaurant_website_by-jalofernandez.jpg", title: "O´Portiño restaurant website intro" },
        { id: "58", show: false, filter: "layout web", img: "ecomerzpro_email-template-outlet_by-jalofernandez.jpg", title: "Ecomerz Pro email template" },
        { id: "59", show: false, filter: "layout photo", img: "britishknights_promo-collection-poster_by-jalofernandez.jpg", title: "British Knights by Sergio Alcover promo poster" },
        { id: "28", show: false, filter: "layout web", img: "ecomerzpro-club_landing-page_by-jalofernandez.jpg", title: "Ecomerz Pro landing page" },
        { id: "29", show: false, filter: "layout graph", img: "oportino_bcard-sideA_by-jalofernandez.jpg", title: "O´Portiño business card side A" },
        { id: "62", show: false, filter: "layout web", img: "knowers_customers-chat-page-mobile_by-jalofernandez.jpg", title: "Knowers customers chat view mobile version" },
        { id: "30", show: false, filter: "layout photo", img: "medion_promo-triptico-exterior_by-jalofernandez.jpg", title: "Medion promo flyer layout" },
        { id: "31", show: false, filter: "layout photo", img: "medion_promo-triptico-interior_by-jalofernandez.jpg", title: "Medion promo flyer layout" },
        { id: "32", show: false, filter: "layout graph", img: "brithisknights_swimsuit-mix-specs_by-jalofernandez.jpg", title: "British Knights swinsuit chart sheet" },
        { id: "46", show: false, filter: "web", img: "wellness_website-newsletter-sign_by-jalofernandez.jpg", title: "Wellness newsletter sign layout" },
        { id: "33", show: false, filter: "graph", img: "britishknights_baseball-logo_designed-by-jalofernandez.jpg", title: "British Knights baseball logo" },
        { id: "34", show: false, filter: "graph", img: "puntoycoma_comic_strip_n28_by-jalofernandez.jpg", title: "Comic strip to Punto y Coma magazine" },
        { id: "63", show: false, filter: "layout web", img: "knowers_customers-chat-modal_by-jalofernandez.jpg", title: "Knowers customers chat modal dialog" },
        { id: "64", show: false, filter: "layout web", img: "widitrade-manager_offer-marketplace_desktop.jpg", title: "Widitrade manager marketplace view" },
        { id: "09", show: false, filter: "layout graph", img: "upplication-movistar_aso-ebook-page_by-jalofernandez.jpg", title: "Upplication + Movistar ASO eBook page" },
        { id: "60", show: false, filter: "web", img: "upplication_app-ios-template-block_by-jalofernandez.jpg", title: "Upplication iOS Template catalog view" },
        { id: "61", show: false, filter: "web", img: "upplication_app-ios-template-inline_by-jalofernandez.jpg", title: "Upplication iOS Template catalog view" },
        { id: "10", show: false, filter: "layout", img: "abc_bcard-front-claram_designed-by-jalofernandez.jpg", title: "ABC architecture business card side A" },
        { id: "11", show: false, filter: "layout", img: "abc_bcard-back-claram_designed-by-jalofernandez.jpg", title: "ABC architecture business card side B" },
        { id: "51", show: false, filter: "layout web", img: "gastronomix_website-footer_by-jalofernandez.jpg", title: "Gastronomix website" },
        { id: "12", show: false, filter: "graph", img: "upplication_promo-sticker_by-jalofernandez.jpg", title: "Upplication promo sticker" },
        { id: "48", show: false, filter: "layout photo", img: "lepainquotidien_daily-menu-promo-poster_by-jalofernandez.jpg", title: "Le Pain Quotidien promo poster" },
        { id: "49", show: false, filter: "layout pack", img: "teayudamosavendermas_folder_by-jalofernandez.jpg", title: "Te ayudamos a vender más promo folders" },
        { id: "52", show: false, filter: "layout pack", img: "britishknights_clothing-display-blueprint_by-jalofernandez.jpg", title: "British Knights clothing display" },
        { id: "50", show: false, filter: "layout", img: "artsclubmadrid_drinks-card_by-jalofernandez.jpg", title: "Arts Club Madrid drinks card page" },
        { id: "47", show: false, filter: "layout web", img: "knowers_about-us-page_by-jalofernandez.jpg", title: "Knowers landing page layout" },
        { id: "13", show: false, filter: "graph", img: "upplication_socialmedia-hiring-artwork_by-jalofernandez.jpg", title: "Knowers landing page layout" },
        { id: "14", show: false, filter: "layout web", img: "app_sample-pic_mcommerce-module.png", title: "Upplication mCommerce module for Apps" },
        { id: "15", show: false, filter: "layout web", img: "upp_dashboard_shipping-charges-view_by-jalofernandez.jpg", title: "Upplication dashboard shipping charges feature" },
        { id: "16", show: false, filter: "graph", img: "upplication_ios-template-promo_by-jalofernandez.jpg", title: "Upplication iOS Template promo artwork" },
        { id: "18", show: false, filter: "layout graph", img: "upplication_dashboard-custom-forms-feature_by-jalofernandez.jpg", title: "Upplication dashboard promo feature" },
        { id: "35", show: false, filter: "layout", img: "wellness_bcard-sideA-designed-by-jalofernandez.jpg", title: "Wellness business card side A" },
        { id: "36", show: false, filter: "layout", img: "wellness_bcard-sideB-designed-by-jalofernandez.jpg", title: "Wellness business card side B" },
        { id: "40", show: false, filter: "layout", img: "rusty_parka-snow-labels-sideA_by-jalofernandez.jpg", title: "Rusty labels to winter jackets" },
        { id: "41", show: false, filter: "layout", img: "rusty_parka-snow-labels-sideB_by-jalofernandez.jpg", title: "Rusty labels to winter jackets" }
      ],
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "jalofernández design webmaster frontend diseño gráfico",
        "@id": "https://jalofernandez.com",
        "url": "https://jalofernandez.com",
        "sameAs": [
          "https://www.instagram.com/jalofernandez/?ref=badge",
          "https://twitter.com/jalofernandez",
          "https://www.linkedin.com/in/javierlorenzofernandez/",
          "https://github.com/jalofernandez",
          "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
          "https://www.facebook.com/jalofernandez?ref=tn_tnmn"
        ],
        "logo": "",
        "name": "jalofernández diseño gráfico y desarrollo web en Madrid, España",
        "description": "Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.",
        "telephone": "+34 696 682 791",
        "email": "jalofernandez@gmail.com",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Efectivo, tarjeta de crédito, Cash, Credit Card",
        "priceRange": "Desde 10€",
        "image": "",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34 696 682 791",
          "contactType": "Llamar para pedir presupuestos"
        }
      }
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: '@jalofernandez: portfolio web + design',
      meta: [
        // (metas) common
        { hid: 'description', name: 'description', content: 'Galería de trabajos del portfolio y CV personal de Javier Lorenzo Fernández (aka @jalofernandez). Diseñador gráfico y desarrollador web frontend de los que ya quedan pocos.' },
        { hid: 'author', name: 'author', content: '@jalofernandez' },
        { hid: 'copyright', name: 'copyright', content: 'Jalofernandez' },
        { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
        { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
        { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
        { hid: 'lang', name: 'lang', content: 'es-ES' },
        { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
        { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },
        { hid: 'rating', name: 'rating', content: 'General' },
        { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
        // (metas) to customize (all browsers) top navbar
        { hid: 'theme-color', name: 'theme-color', content: '#f4692a' },
        // (metas) to Webkit (iOS Safari) browsers
        { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
        { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: '@jalofernandez' },
        // (metas) IE (windows phone) browsers
        // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
        { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
        // (microdata) TWITTER
        { name: 'twitter:title', content: 'Jalofernández diseño gráfico y desarrollo web en Madrid, España' },
        { name: 'twitter:description', content: 'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.' },
        { name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
        { name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@jalofernandez' },
        { name: 'twitter:creator', content: '@jalofernandez' },
        // (open-graph) FACEBOOK
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'es_ES' },
        { name: 'og:url', content: 'https://jalofernandez.com' },
        { name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico' },
        { name: 'og:title', content: 'Jalofernández diseño gráfico y desarrollo web en Madrid, España' },
        { name: 'og:description', content: 'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.' },
        { name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
        { name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
        { name: 'og:image:width', content: '960' },
        { name: 'og:image:height', content: '540' },
        { name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' }
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' },
        // Third parties links
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        // Canonical url
        { rel: 'canonical', hid: "canonical", href: 'https://jalofernandez.com' + this.$route.path },
        // (custom) Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: "57x57", href: '/favicon/app-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: "60x60", href: '/favicon/app-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: "72x72", href: '/favicon/app-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: "76x76", href: '/favicon/app-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: "114x114", href: '/favicon/app-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: "120x120", href: '/favicon/app-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: "144x144", href: '/favicon/app-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: "152x152", href: '/favicon/app-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/app-icon-180x180.png' },
        // Browsers Tabs
        { rel: 'mask-icon', color: "#333333", href: '/favicon/safari-pinned-tab.svg' }
      ]
    }
  },
  methods: {
    filterItems(dataRel) {
      $("#portfolio").fadeTo(100, 0.1);
      $("#portfolio div").not("." + dataRel).fadeOut().removeClass('scale-anm');
      setTimeout(function () {
          $("." + dataRel).fadeIn().addClass('scale-anm');
          $("#portfolio").fadeTo(300, 1);
      }, 300);
    }
  }
}
</script>
