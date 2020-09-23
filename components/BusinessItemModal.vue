<template>
  <div>
    <div v-for="(menu, index) in business.menus" :key="index">
      <div
        v-for="(item, index) in menu.items"
        :key="index"
        :class="['modal-wrapper', { 'md-show': item.show }]"
      >
        <div :id="`modal-${item.id}`" class="md-modal has-dish">
          <div class="md-content dish info">
            <button class="button js-close" type="button" @click="item.show = false">
              Cerrar
              <span>&times;</span>
            </button>
            <div
              class="img cover"
              :style="{
                'background-image': 'url(' + require(`@/assets/negocios/${business.short}/${business.short}-${item.img}.jpg`) + ')',
                'background-position': menu.imgs.position
              }"
              v-if="item.img"
            ></div>
            <div class="details">
              <h4 class="name">{{ item.name }}</h4>
              <p class="desc" v-if="item.desc">{{ item.desc }}</p>
              <div class="prices">
                <div class="price item" v-for="(price, index) in item.prices" :key="index">
                  <small class="price name">{{ price.name }}</small>
                  <span class="price quantity">
                    <b>{{ price.price }}</b> €
                  </span>
                </div>
              </div>
              <div class="allergens prices" v-if="item.allergens">
                <div class="price item" v-for="(allergen, index) in item.allergens" :key="index">
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
        <div :class="['modal-overlay', { 'md-show': item.show }]" @click="item.show = false"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessItemModal",
  props: {
    business: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    renderAllergens(item) {
      // switch (item) {
      //   case (item = "crustaceos"):
      //     allergen = "crustáceos";
      //     break;
      //   case (item = "lacteos"):
      //     allergen = "lácteos";
      //     break;
      //   case (item = "sesamo"):
      //     allergen = "sésamo";
      // }
      // console.log(typeof item + " : " + item);
      // item.forEach(function (allergen) {
      //   if ((allergen = "crustaceos")) {
      //     return (allergen = "crustáceos");
      //   } else if ((allergen = "lacteos")) {
      //     return (allergen = "lácteos");
      //   } else if ((allergen = "sesamo")) {
      //     return (allergen = "sésamo");
      //   } else {
      //     return allergen;
      //   }
      // });
      // console.log(item);
    },
  },
};
</script>
