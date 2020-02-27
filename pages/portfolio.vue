<template>
  <main class="portfolio">
    <!-- top Navbar to filter Gallery below -->
    <div class="toolbar mb2 mt2">
      <nuxt-link :to="{name: 'index'}" class="btn menu__link glitch" data-text="<< Home">
        &lt;&lt; Home
      </nuxt-link>
      <button
        class="btn fil-cat menu__link glitch"
        v-for="(link, index) in links"
        :key="index"
        type="button"
        value="text"
        name="all"
        aria-labelledby="all"
        :data-rel="link.filter"
        :data-text="link.name"
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
        @click="modalShow = true"
      >
        <img :src="'/portfolio/'+item.img" :title="item.title" :alt="item.title"/>
        <div class="overlay">
          {{ overlay }}
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    <!-- (modal dialogs) each Gallery item -->
    <div
      v-for="(item, index) in portfolio"
      :key="index"
      :id="'modal-'+item.id"
      :class="['md-modal', 'md-effect-16', { 'md-show' : modalShow }]"
    >
      <div class="md-content">
        <img :src="'/portfolio/'+item.img" :title="item.title" :alt="item.title"/>
        <p>
          {{ item.title }}
        </p>
        <button class="btn menu__link glitch js-modal-close" data-text="X Close me!" @click="closeModal()">
          X Close me!
        </button>
      </div>
    </div>
    <div class="th-modal-overlay flicker" @click="closeModal()"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
      overlay: "Click me to make me bigger",
      links: [
        { name: "All", filter: "all" },
        { name: "Layout", filter: "layout" },
        { name: "Photography", filter: "photo" },
        { name: "UX/UI/Web", filter: "web" },
        { name: "Packaging", filter: "pack" },
        { name: "Graphs/Draws", filter: "graph" }
      ],
      portfolio: [
        { id: "01", filter: "graph", img: "movistar-upplication_promo-rollup_by-jalofernandez.jpg", title: "Upplication + Movistar promo rollup by @jalofernandez" },
        { id: "20", filter: "pack photo", img: "britishknights_packaging-shoesbox_by-jalofernandez.jpg", title: "British Knights shoesbox packaging by @jalofernandez" },
        { id: "02", filter: "layout", img: "bcard_upplication_01.jpg", title: "Upplication business card side A by @jalofernandez" },
        { id: "03", filter: "layout", img: "bcard_upplication_02.jpg", title: "Upplication Developers business card by @jalofernandez" },
        { id: "19", filter: "layout", img: "ecomerzpro_email-template-marketplace_by-jalofernandez.jpg", title: "EcomerzPro email layout by @jalofernandez" },
        { id: "04", filter: "layout", img: "upplication_pwa-infography_by-jalofernandez.jpg", title: "Upplication PWA infography layout by @jalofernandez" },
        { id: "05", filter: "web", img: "app_sample-pic_restaurant-module.png", title: "Upplication App (Restaurant module) by @jalofernandez" },
        { id: "42", filter: "photo", img: "britishknights_promo-collection_by-jalofernandez.jpg", title: "British Knights tees promo poster @jalofernandez" },
        { id: "43", filter: "layout", img: "salondejuegos_bcard-invitation_by-jalofernandez.jpg", title: "Salón de Juegos business card + invitation by @jalofernandez" },
        { id: "44", filter: "layout", img: "laparadadelosmonstruos-bar_flyer-halloween_by-jalofernandez.jpg", title: "La Parada de los Monstruos flyer by @jalofernandez" },
        { id: "37", filter: "graph", img: "domolock-app_concept-logo_by-jalofernandez.jpg", title: "Domolock App concept logo by @jalofernandez" },
        { id: "38", filter: "graph", img: "puntoycoma_comic_strip_n32_by-jalofernandez.jpg", title: "Comic strip to Punto y Coma magazine by @jalofernandez" },
        { id: "39", filter: "layout graph", img: "brithisknights_hoddie-specs_by-jalofernandez.jpg", title: "British Knights hoddie chart sheet by @jalofernandez" },
        { id: "21", filter: "layout", img: "wellness_promo-flyerA5-sideA_by-jalofernandez.jpg", title: "Wellness promo flyer layout by @jalofernandez" },
        { id: "22", filter: "layout", img: "wellness_promo-flyerA5-sideB_by-jalofernandez.jpg", title: "Wellness promo flyer layout by @jalofernandez" },
        { id: "23", filter: "layout photo", img: "britishknights_winter-catalog_by-jalofernandez.jpg", title: "British Knights winter catalog page by @jalofernandez" },
        { id: "45", filter: "graph", img: "aiba_adoption-campaign-logo_by-jalofernandez.jpg", title: "Aiba adoption campaign logotype by @jalofernandez" },
        { id: "24", filter: "layout web", img: "widitrade_manager-offer-details_by-jalofernandez.jpg", title: "Widitrade manager offer detail view by @jalofernandez" },
        { id: "07", filter: "graph", img: "upplication_socialmedia-promo-artwork_by-jalofernandez.jpg", title: "Upplication Valentines Day promo artwork to social media by @jalofernandez" },
        { id: "25", filter: "layout web", img: "byeinsects_landing-page-with-counterdown_by-jalofernandez.jpg", title: "Bye Insects landing page by @jalofernandez" },
        { id: "26", filter: "layout web", img: "byeinsects_landing-page-desktop_by-jalofernandez.jpg", title: "Bye Insects landing page by @jalofernandez" },
        { id: "53", filter: "layout", img: "younging_bcard-mockup_by-jalofernandez.jpg", title: "Younging business cards mockup by @jalofernandez" },
        { id: "65", filter: "layout graph", img: "upplication_crew-team-manifest_by-jalofernandez.jpg", title: "Upplication crew infography by @jalofernandez" },
        { id: "66", filter: "layout web", img: "knowers_index-page-with-login-signin_by-jalofernandez.jpg", title: "Knowers webwsite login by @jalofernandez" },
        { id: "06", filter: "layout graph", img: "acens-upplication_infography-cover_by-jalofernandez.jpg", title: "Upplication + Acens infography cover by @jalofernandez" },
        { id: "08", filter: "layout graph", img: "acens-upplication_infography-page_by-jalofernandez.jpg", title: "Upplication + Acens commercial infography by @jalofernandez" },
        { id: "27", filter: "layout photo", img: "spalding_promo-flyer-basket_by-jalofernandez.jpg", title: "Spalding promo flyer layout by @jalofernandez" },
        { id: "54", filter: "layout web", img: "teayudamosavendermas_website-contact-form_by-jalofernandez.jpg", title: "Te ayudamos a vender más contact form by @jalofernandez" },
        { id: "55", filter: "layout web", img: "knowers_customers-chat-page-desktop_by-jalofernandez.jpg", title: "Knowers customers chat view desktop version by @jalofernandez" },
        { id: "56", filter: "layout", img: "lepainquotidien_daily-menu-card_by-jalofernandez.jpg", title: "Le Pain Quotidien daily menu card by @jalofernandez" },
        { id: "57", filter: "layout web", img: "oportino-restaurant_website_by-jalofernandez.jpg", title: "O´Portiño restaurant website intro by @jalofernandez" },
        { id: "58", filter: "layout web", img: "ecomerzpro_email-template-outlet_by-jalofernandez.jpg", title: "Ecomerz Pro email template by @jalofernandez" },
        { id: "59", filter: "layout photo", img: "britishknights_promo-collection-poster_by-jalofernandez.jpg", title: "British Knights by Sergio Alcover promo poster by @jalofernandez" },
        { id: "28", filter: "layout web", img: "ecomerzpro-club_landing-page_by-jalofernandez.jpg", title: "Ecomerz Pro landing page by @jalofernandez" },
        { id: "29", filter: "layout graph", img: "oportino_bcard-sideA_by-jalofernandez.jpg", title: "O´Portiño business card side A by @jalofernandez" },
        { id: "62", filter: "layout web", img: "knowers_customers-chat-page-mobile_by-jalofernandez.jpg", title: "Knowers customers chat view mobile version by @jalofernandez" },
        { id: "30", filter: "layout photo", img: "medion_promo-triptico-exterior_by-jalofernandez.jpg", title: "Medion promo flyer layout by @jalofernandez" },
        { id: "31", filter: "layout photo", img: "medion_promo-triptico-interior_by-jalofernandez.jpg", title: "Medion promo flyer layout by @jalofernandez" },
        { id: "32", filter: "layout graph", img: "brithisknights_swimsuit-mix-specs_by-jalofernandez.jpg", title: "British Knights swinsuit chart sheet by @jalofernandez" },
        { id: "46", filter: "web", img: "wellness_website-newsletter-sign_by-jalofernandez.jpg", title: "Wellness newsletter sign layout by @jalofernandez" },
        { id: "33", filter: "graph", img: "britishknights_baseball-logo_designed-by-jalofernandez.jpg", title: "British Knights baseball logo by @jalofernandez" },
        { id: "34", filter: "graph", img: "puntoycoma_comic_strip_n28_by-jalofernandez.jpg", title: "Comic strip to Punto y Coma magazine by @jalofernandez" },
        { id: "63", filter: "layout web", img: "knowers_customers-chat-modal_by-jalofernandez.jpg", title: "Knowers customers chat modal dialog by @jalofernandez" },
        { id: "64", filter: "layout web", img: "widitrade-manager_offer-marketplace_desktop.jpg", title: "Widitrade manager marketplace view by @jalofernandez" },
        { id: "09", filter: "layout graph", img: "upplication-movistar_aso-ebook-page_by-jalofernandez.jpg", title: "Upplication + Movistar ASO eBook page by @jalofernandez" },
        { id: "60", filter: "web", img: "upplication_app-ios-template-block_by-jalofernandez.jpg", title: "Upplication iOS Template catalog view by @jalofernandez" },
        { id: "61", filter: "web", img: "upplication_app-ios-template-inline_by-jalofernandez.jpg", title: "Upplication iOS Template catalog view by @jalofernandez" },
        { id: "10", filter: "layout", img: "abc_bcard-front-claram_designed-by-jalofernandez.jpg", title: "ABC architecture business card side A by @jalofernandez" },
        { id: "11", filter: "layout", img: "abc_bcard-back-claram_designed-by-jalofernandez.jpg", title: "ABC architecture business card side B by @jalofernandez" },
        { id: "51", filter: "layout web", img: "gastronomix_website-footer_by-jalofernandez.jpg", title: "Gastronomix website by @jalofernandez" },
        { id: "12", filter: "graph", img: "upplication_promo-sticker_by-jalofernandez.jpg", title: "Upplication promo sticker by @jalofernandez" },
        { id: "48", filter: "layout photo", img: "lepainquotidien_daily-menu-promo-poster_by-jalofernandez.jpg", title: "Le Pain Quotidien promo poster by @jalofernandez" },
        { id: "49", filter: "layout pack", img: "teayudamosavendermas_folder_by-jalofernandez.jpg", title: "Te ayudamos a vender más promo folders by @jalofernandez" },
        { id: "52", filter: "layout pack", img: "britishknights_clothing-display-blueprint_by-jalofernandez.jpg", title: "British Knights clothing display by @jalofernandez" },
        { id: "50", filter: "layout", img: "artsclubmadrid_drinks-card_by-jalofernandez.jpg", title: "Arts Club Madrid drinks card page by @jalofernandez" },
        { id: "47", filter: "layout web", img: "knowers_about-us-page_by-jalofernandez.jpg", title: "Knowers landing page layout by @jalofernandez" },
        { id: "13", filter: "graph", img: "upplication_socialmedia-hiring-artwork_by-jalofernandez.jpg", title: "Knowers landing page layout by @jalofernandez" },
        { id: "14", filter: "layout web", img: "app_sample-pic_mcommerce-module.png", title: "Upplication mCommerce module for Apps by @jalofernandez" },
        { id: "15", filter: "layout web", img: "upp_dashboard_shipping-charges-view_by-jalofernandez.jpg", title: "Upplication dashboard shipping charges feature by @jalofernandez" },
        { id: "16", filter: "graph", img: "upplication_ios-template-promo_by-jalofernandez.jpg", title: "Upplication iOS Template promo artwork by @jalofernandez" },
        { id: "18", filter: "layout graph", img: "upplication_dashboard-custom-forms-feature_by-jalofernandez.jpg", title: "Upplication dashboard promo feature by @jalofernandez" },
        { id: "35", filter: "layout", img: "wellness_bcard-sideA-designed-by-jalofernandez.jpg", title: "Wellness business card side A by @jalofernandez" },
        { id: "36", filter: "layout", img: "wellness_bcard-sideB-designed-by-jalofernandez.jpg", title: "Wellness business card side B by @jalofernandez" },
        { id: "40", filter: "layout", img: "rusty_parka-snow-labels-sideA_by-jalofernandez.jpg", title: "Rusty labels to winter jackets by @jalofernandez" },
        { id: "41", filter: "layout", img: "rusty_parka-snow-labels-sideB_by-jalofernandez.jpg", title: "Rusty labels to winter jackets by @jalofernandez" }
      ]
    }
  },
  head() {
    return {
      title: '@jalofernandez: portfolio'
    }
  },
  methods: {
    closeModal() {
      this.modalShow = false;
    }
  }
}
</script>
