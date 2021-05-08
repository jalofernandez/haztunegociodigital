<template>
  <footer class="footer">
    <ul v-if="!isHidden" class="is-flex is-justify-content-center is-align-content-center">
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink
          :to="`/${link.url}`"
          :title="`Ir a la página ${link.title} de #${landing.owner.name}`"
        >
          <span class="has-vert-spacer">
            {{ link.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
    <figure class="image is-48x48 is-logo" v-if="!isHidden">
    <!-- <picture> -->
      <!-- <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png?webp')" type="image/webp" />
      <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png')" type="image/png" /> -->
      <img
        src="/haztunegociodigital-icon.svg"
        :title="`Logotipo de #${landing.owner.name}`"
        :alt="`Logotipo de #${landing.owner.name}`"
        width="48"
        height="48"
      >
    <!-- </picture> -->
    </figure>
    <p>
      <span class="name" v-html="data"></span> en
    </p>
    <p class="mb-0 mt-1 is-flex is-justify-content-center is-align-content-center">
      <NuxtLink
        to="/"
        class="tags has-addons"
        :title="`Ir a la página de inicio de #${landing.owner.name}`"
      >
        <span class="tag is-dark">#<b>{{ landing.owner.name }}</b></span>
        <b class="tag is-success">{{ landing.owner.version }}</b>
      </NuxtLink>
    </p>
    <p>
      <small>por
      <a
        :href="landing.author.url"
        :class="landing.author.name"
        :title="`Ir al sitio web de ${landing.author.alias}: diseñador gráfico y desarrollador web`"
        target="_blank"
        rel="noopener noreferrer"
        >
        {{ landing.author.name }}.com
      </a></small>
    </p>
    <p class="mt-4">
      <small>Tecnología utilizada:</small>
    </p>
    <ul class="has-icons-tech is-flex is-justify-content-center is-align-content-center">
      <li v-for="(item, index) in tech" :key="index">
        <figure class="image is-24x24px">
          <img
            :src="require(`~/assets/tech/${item}.svg`)"
            :title="`Icono de ${item}`"
            :alt="`Icono de ${item}`"
            width="24"
            height="24"
          >
        </figure>
      </li>
    </ul>
    <p class="copyright is-size-7 mt-4">
      <span>© Todos los derechos reservados</span>,
      <b>
        <small>{{ currentYear }}</small>
      </b>
    </p>
  </footer>
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
    isHidden: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      landing: this.$store.state.landing,
      currentYear: new Date().getFullYear(),
      tech: [ 'nodejs', 'vuejs', 'nuxt', 'language-html5', 'sass', 'firebase' ],
      links: [
        {
          url: '',
          name: 'Inicio',
          title: 'de inicio',
        },
        {
          url: 'negocios-en-internet',
          name: 'Showcase',
          title: 'de negocios digitalizados',
        },
        {
          url: 'equipo',
          name: 'Equipo',
          title: 'de equipo y responsables',
        },
        {
          url: 'contacto',
          name: 'Contacto',
          title: 'de contacto',
        },
        {
          url: 'legal',
          name: 'Legal',
          title: 'de términos legales',
        },
        {
          url: 'sitemap',
          name: 'Sitemap',
          title: 'del mapa del sitio web',
        },
      ],
    }
  },
}
</script>
