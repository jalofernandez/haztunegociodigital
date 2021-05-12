<template>
  <NuxtLink
    :to="`/${btn.to}`"
    class="button is-link is-rounded"
    :title="`${btn.copy} de ${owner.name}`"
  >
    <span v-html="btn.copy"></span>
  </NuxtLink>
</template>

<script>
export default {
  name: 'SectionButton',
  props: {
    btn: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      owner: this.$store.state.landing.owner
    }
  }
}
</script>
