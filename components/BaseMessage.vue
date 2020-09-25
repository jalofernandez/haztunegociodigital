<template>
  <p :class="['message', data.type]">
    <span class="emoji" v-if="data.type === 'alert'"><span>🔔</span></span>
    <span class="copy" v-html="data.copy"></span>
  </p>
</template>

<script>
export default {
  name: "Message",
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
