<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">
      <div v-for="(item, index) in menu.items" :key="index" :class="['modal-wrapper', { 'md-show': item.show }]">
        <div :id="`modal-${item.id}`" class="md-modal has-dish">
          <div class="md-content dish info">
            <button :class="['btn', 'js-close', { 'has-not-img': !item.img }]" type="button" @click="item.show = false">
              Cerrar
              <span>&times;</span>
            </button>
            <div
              class="img cover"
              :style="{
                'background-image':
                  'url(' + require(`@/assets/negocios/${businessId}/${businessId}-${item.img}.jpg`) + ')',
                'background-position': menu.imgs.position,
              }"
              v-if="item.img"
            ></div>
            <div class="details">
              <h4 class="name">{{ item.name }}</h4>
              <p class="desc" v-html="item.desc" v-if="item.desc"></p>
              <div class="prices">
                <div class="price item" v-for="(price, index) in item.prices" :key="index">
                  <small class="price name">{{ price.name }}</small>
                  <span class="price quantity" v-if="price.price">
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
  name: 'BusinessItemModal',
  props: {
    businessId: {
      type: String,
      default: null,
      required: true,
    },
    menus: {
      type: Array,
      default: null,
      required: true,
    },
  }
}
</script>
