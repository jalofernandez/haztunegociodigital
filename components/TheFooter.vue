<template>
  <div class="footer">
    <ul>
      <li><span class="name" v-html="data"></span> en</li>
      <li>
        <span>#{{ owner.name }}</span>
      </li>
      <li>
        por
        <a
          href="https://jalofernandez.com"
          class="jalofernandez"
          title="Sitio web de @jalofernandez: diseñador gráfico y desarrollador web"
          target="_blank"
          rel="noopener noreferrer"
          >jalofernandez.com</a
        >
      </li>
      <li class="copyright">
        <nuxt-link
          to="/legal"
          class="underline has-text-dark has-text-weight-medium"
          :title="`Ir a la página de términos legales de #${owner.name}`"
        >
          <span>Legal</span>
        </nuxt-link>
        <span>&nbsp;|&nbsp;</span>
        <nuxt-link
          to="/sitemap"
          class="underline has-text-dark has-text-weight-medium"
          :title="`Ir a la página del mapa del sitio web de #${owner.name}`"
        >
          <span>Sitemap</span>
        </nuxt-link>
        <span>© Todos los derechos reservados</span>,
        <b>
          <small>{{ currentYear }}</small>
        </b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    data: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      owner: this.$store.state.landing.owner,
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
