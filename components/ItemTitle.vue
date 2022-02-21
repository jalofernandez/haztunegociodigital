<template>
  <h4
    :class="[
      'is-title',
      'is-size-2-widescreen',
      'is-size-3-desktop',
      'is-size-4-touch',
      'has-text-primary',
      $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
      'is-relative'
    ]"
    v-html="title"
  >
  </h4>
</template>

<script>
export default {
  name: 'ItemTitle',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
