<template>
  <nav class="aside-menu with-anim" role="navigation" :aria-label="`${business.name} Menu page`">
    <div class="aside-header">
      <img
        v-if="business.logo"
        class="aside-business-logo"
        :src="require(`~/assets/negocios/${business.id}/${business.id}-logo-color.png`)"
        :alt="`Logotipo de ${business.name} en ${business.place}`"
        :title="`Logotipo de ${business.name} en ${business.place}`"
      />
      <h2 class="aside-business-name" v-else>{{ business.name }}</h2>
    </div>
    <ul class="aside-sections">
      <li
        class="aside-section"
        v-for="(menu, index) in business.menus" 
        :key="index"
      >
        <a
          href="#"
          class="aside-menu-link"
          v-scroll-to="{ el: '#section-' + index, onDone: asideBehaviour }"
          v-html="menu.title"
          role="button"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheAside",
  props: {
    business: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    asideBehaviour() {
      this.$emit("aside")
    },
  },
};
</script>
