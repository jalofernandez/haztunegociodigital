<template>
  <div class="footer">
    <ul>
      <li>
        <span class="name">{{ data }}</span> en
      </li>
      <li>
        <span>#HazTuNegocioDigital</span>
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
        <span>© Todos los derechos reservados</span>,
        <b>
          <small>{{ currentYear }}</small>
        </b>
      </li>
    </ul>
    <!-- <nuxt-link :to="{ name: 'index' }" class="btn is-link btn--coder menu--link glitch" data-text="<< Home"
      >&lt;&lt; Home</nuxt-link
    >-->
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    data: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
