<template>
  <nav class="aside-menu with-anim">
    <h2 class="aside-business">{{ business.name }}</h2>
    <ul>
      <li v-for="(menu, index) in business.menus" :key="index">
        <a
          href="#"
          class="aside-menu-link"
          v-scroll-to="{ el: '#section-' + index, onDone: asideBehaviour }"
        >{{ menu.title }}</a>
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
  data() {
    return {
      showAside: false,
    };
  },
  methods: {
    asideBehaviour() {
      this.$emit("aside");
    },
  },
};
</script>
