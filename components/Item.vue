<template>
  <div>
    <div v-for="(menu, index) in business.menus" :key="index">
      <h2 :class="['section', 'name', { 'with-desc': menu.desc }]">{{ menu.title }}</h2>
      <p class="section desc" v-if="menu.desc" v-html="menu.desc"></p>
      <div
        class="dish item"
        v-for="(item, index) in menu.items"
        :key="index"
        :data-modal="'modal-' + item.id"
        @click="item.show = !item.show"
      >
        <div class="dish info">
          <h3 class="name">{{ item.name }}</h3>
          <p class="desc" v-if="item.desc">{{ item.desc }}</p>
          <div class="prices">
            <div class="price item" v-for="(price, index) in item.prices" :key="index" v-if="item.prices">
              <small class="price name">{{ price.name }}</small>
              <span class="price quantity">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="item.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in item.allergens"
              :key="index"
              :src="require(`~/assets/allergens/${allergen}.svg`)"
              :title="`Alérgeno: ${allergen}`"
              :alt="`Alérgeno: ${allergen}`"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="item.img">
          <img
            :src="require(`~/assets/negocios/${business.short}/${business.short}-${item.img}.jpg`)"
            :title="`${business.name}: ${item.desc}`"
            :alt="`${business.name}: ${item.desc}`"
            width="90"
            height="90"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    business: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>
