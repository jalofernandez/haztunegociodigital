<template>
  <nav :class="['navbar', 'is-fixed-top', { 'has-shadow': scrollin }]" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item logo" to="/" :title="`Ir a la página de inicio de #${owner.name}`">
          <img src="/haztunegociodigital-icon.svg" :title="`Logotipo de #${owner.name}`" width="40" height="40" />
        </nuxt-link>
        <div class="has-cta-btn is-flex">
          <a
            :href="`https://wa.me/${owner.whatsapp}`"
            class="navbar-item button has-img is-dark is-rounded is-overlay is-hidden-desktop"
            :title="`Whatsapp de #${owner.name}`"
          >
            <span>Pregúntanos</span>
            <figure class="image is-28x28">
              <img
                src="/icons/whatsapp-brands.svg"
                :title="`Whatsapp de #${owner.name}`"
                :alt="`Whatsapp de #${owner.name}`"
                width="28"
                height="28"
              />
            </figure>
          </a>
          <a
            role="button"
            :class="['navbar-burger', 'burger', { 'is-active': active }]"
            aria-label="menu"
            aria-expanded="false"
            @click.prevent="active = !active"
          >
            <span aria-hidden="true" v-for="item in 3"></span>
          </a>
        </div>
      </div>

      <div :class="['navbar-menu', { 'is-active': active }]">
        <div class="navbar-start has-text-centered">
          <nuxt-link to="/" class="navbar-item" :title="`Ir a la página de inicio de #${owner.name}`">
            <span>
              #<b>{{ owner.name }}</b>
            </span>
          </nuxt-link>
          <!-- <nuxt-link to="/servicios" class="navbar-item" :title="`Ir a la página de servicios ofrecidos por #${owner.name}`">
            <span>Servicios</span>
          </nuxt-link>
          <nuxt-link to="/nosotros" class="navbar-item" :title="`Ir a la página de los responsables de #${owner.name}`">
            <span>Nosotros</span>
          </nuxt-link> -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Ya nos usan </a>
            <div class="navbar-dropdown">
              <nuxt-link
                to="/horeca/bar-galicia"
                class="navbar-item dropdown-inner bar-galicia"
                :title="`Ir a la página del Bar Galicia en #${owner.name}`"
              >
                <span>Bar galicia</span>
              </nuxt-link>
              <nuxt-link
                to="/horeca/la-antigua-bodeguita"
                class="navbar-item dropdown-inner la-antigua-bodeguita"
                :title="`Ir a la página de La antigua Bodeguita en #${owner.name}`"
              >
                <span>La Antigua Bodeguita</span>
              </nuxt-link>
              <a
                href="https://peluqueriacanessa.com"
                class="navbar-item dropdown-inner peluqueriacanessa"
                title="Ir a la página de peluquería canina Canessa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Peluquería canina Canessa</span>
              </a>
              <a
                href="https://chefioana.firebaseapp.com"
                class="navbar-item dropdown-inner chefioana"
                title="Ir a la página de peluquería canina Canessa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Chef Ioana en tu casa</span>
              </a>
              <!-- <nuxt-link to="/servicios/jalofernandez" class="navbar-item" :title="`Ir a la página de @jalofernandez en #${owner.name}`">
                <span>Jalofernandez: designer + coder</span>
              </nuxt-link> -->
              <hr class="navbar-divider" />
              <a
                :href="`https://wa.me/${owner.whatsapp}`"
                class="navbar-item dropdown-inner has-text-weight-medium"
                :title="`Whatsapp de #${owner.name}`"
              >
                ¿Te <b class="has-text-success pl-1">unes</b>?
              </a>
            </div>
          </div>
          <nuxt-link to="/contacto" class="navbar-item" :title="`Ir a la página de contacto de #${owner.name}`">
            <span>Contacto</span>
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item is-hidden-touch">
            <a
              :href="`https://wa.me/${owner.whatsapp}`"
              class="button has-img is-dark is-rounded"
              :title="`Whatsapp de #${owner.name}`"
            >
              <b>Pregúntanos</b>
              <figure class="image is-28x28">
                <img
                  src="/icons/whatsapp-brands.svg"
                  :title="`Whatsapp de #${owner.name}`"
                  :alt="`Whatsapp de #${owner.name}`"
                  width="28"
                  height="28"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  // props: {
  //   data: {
  //     type: String,
  //     default: null,
  //     required: true,
  //   },
  // },
  data() {
    return {
      active: false,
      scrollin: false,
      owner: this.$store.state.landing.owner,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.scrollin = top > 30
    },
  },
}
</script>
