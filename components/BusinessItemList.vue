<template>
  <div class="sections-list">
    <section 
      :id="`section-${index}`"
      v-for="(menu, index) in menus"
      :key="index"
    >
      <h2 class="section name" v-html="menu.title"></h2>
      <p class="section desc" v-if="menu.desc" v-html="menu.desc"></p>
      <div class="dish-area">
        <article
          class="dish item"
          v-for="(item, index) in menu.items"
          :key="index"
          :data-modal="`modal-${item.id}`"
          @click="item.show = !item.show"
        >
          <!-- <div
          class="dish item"
          v-for="(item, index) in menu.items"
          :key="index"
          :data-modal="`modal-${item.id}`"
          @click="showItemDetail(item.id)"
        > -->
          <div class="dish info">
            <h3 class="name">{{ item.name }}</h3>
            <p class="desc" v-html="item.desc" v-if="item.desc"></p>
            <!-- <p class="desc" v-if="item.desc">{{ setDescription(item.desc) }}</p> -->
            <div class="prices">
              <div class="price item" v-for="(price, index) in item.prices" :key="index" v-if="item.prices">
                <small class="price name" v-if="price.name">{{ price.name }}</small>
                <span class="price quantity" v-if="price.price">
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
              :src="require(`~/assets/negocios/${businessId}/${businessId}-${item.img}.jpg`)"
              :title="`${businessName}: ${item.desc}`"
              :alt="`${businessName}: ${item.desc}`"
              :width="menu.imgs.width"
              :height="menu.imgs.height"
            />
          </figure>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BusinessItemList',
  props: {
    businessId: {
      type: String,
      default: null,
      required: true,
    },
    businessName: {
      type: String,
      default: null,
      required: true,
    },
    menus: {
      type: Array,
      default: null,
      required: true,
    },
  },
}
</script>
