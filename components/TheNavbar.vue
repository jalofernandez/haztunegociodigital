<template>
  <header>
    <nav
      :class="['navbar', 'is-fixed-top', { 'has-shadow': scrollin }]"
      role="navigation"
      aria-label="Site main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <NuxtLink
            class="navbar-item logo"
            to="/"
            :title="`Ir a la página de inicio de #${owner.name}`"
          >
            <img
              src="/haztunegociodigital-icon.svg"
              :title="`Logotipo de #${owner.name}`"
              :alt="`Logotipo de #${owner.name}`"
              width="40"
              height="40"
            />
          </NuxtLink>
          <div class="has-cta-btn is-flex">
            <a
              :href="`https://wa.me/${owner.whatsapp}`"
              class="
                navbar-item
                button
                has-img
                is-dark is-rounded is-overlay is-hidden-desktop
              "
              :title="`Whatsapp de #${owner.name}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Pregúntanos</span>
              <figure class="image is-28x28">
                <img
                  src="/icons/whatsapp-brands.svg"
                  alt="Icono de WhatsApp"
                  title="Icono de WhatsApp"
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
              <span aria-hidden="true" v-for="item in 3" :key="item"></span>
            </a>
          </div>
        </div>

        <div :class="['navbar-menu', { 'is-active': active }]">
          <div class="navbar-start has-text-centered">
            <NuxtLink
              to="/"
              class="navbar-item"
              :title="`Ir a la página de inicio de #${owner.name}`"
            >
              <span>
                #<strong>{{ owner.name }}</strong>
              </span>
            </NuxtLink>
            <NuxtLink
              to="/negocios-en-internet"
              class="navbar-item"
              :title="`Ir a la página de negocios digitalizados por #${owner.name}`"
            >
              <span>Showcase</span>
            </NuxtLink>
            <!-- <NuxtLink to="/servicios" class="navbar-item" :title="`Ir a la página de servicios ofrecidos por #${owner.name}`">
              <span>Servicios</span>
            </NuxtLink>
            <NuxtLink to="/precios" class="navbar-item" :title="`Ir a la página de precios de los servicios de #${owner.name}`">
              <span>Precios</span>
            </NuxtLink> -->
            <div
              class="navbar-item has-dropdown is-hoverable"
              v-if="$route.name !== 'legal'"
            >
              <a class="navbar-link"> Ya nos usan </a>
              <div class="navbar-dropdown">
                <NuxtLink
                  to="/horeca/bar-galicia"
                  class="navbar-item dropdown-inner bar-galicia"
                  :title="`Ir a la página del Bar Galicia en #${owner.name}`"
                >
                  <span>Bar galicia</span>
                </NuxtLink>
                <NuxtLink
                  to="/horeca/la-antigua-bodeguita"
                  class="navbar-item dropdown-inner la-antigua-bodeguita"
                  :title="`Ir a la página de La Antigua Bodeguita en #${owner.name}`"
                >
                  <span>La Antigua Bodeguita</span>
                </NuxtLink>
                <NuxtLink
                  to="/horeca/ole-veinti3"
                  class="navbar-item dropdown-inner ole-veinti3"
                  :title="`Ir a la página de Taberna Olé Veinti3 en #${owner.name}`"
                >
                  <span>Taberna Olé Veinti3</span>
                </NuxtLink>
                <NuxtLink
                  to="/horeca/la-teja-verde"
                  class="navbar-item dropdown-inner la-teja-verde"
                  :title="`Ir a la página de Tapería Restaurante La Teja Verde en #${owner.name}`"
                >
                  <span>Tapería La Teja Verde</span>
                </NuxtLink>
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
                <!-- <NuxtLink to="/servicios/jalofernandez" class="navbar-item" :title="`Ir a la página de @jalofernandez en #${owner.name}`">
                  <span>Jalofernandez: designer + coder</span>
                </NuxtLink> -->
                <hr class="navbar-divider" />
                <a
                  :href="`https://wa.me/${owner.whatsapp}`"
                  class="navbar-item dropdown-inner has-text-weight-medium"
                  :title="`Whatsapp de #${owner.name}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ¿Te <b class="has-text-success pl-1">unes</b>?
                </a>
              </div>
            </div>
            <NuxtLink
              to="/sitemap"
              class="navbar-item"
              :title="`Ir a la página de Mapa del sitio web de #${owner.name}`"
              v-if="$route.name === 'legal'"
            >
              <span>Sitemap</span>
            </NuxtLink>
            <NuxtLink
              to="/equipo"
              class="navbar-item"
              :title="`Ir a la página de los responsables de #${owner.name}`"
            >
              <span>Equipo</span>
            </NuxtLink>
            <NuxtLink
              to="/contacto"
              class="navbar-item"
              :title="`Ir a la página de contacto de #${owner.name}`"
            >
              <span>Contacto</span>
            </NuxtLink>
          </div>

          <div class="navbar-end">
            <div class="navbar-item is-hidden-touch">
              <a
                :href="`https://wa.me/${owner.whatsapp}`"
                class="button has-img is-dark is-rounded"
                :title="`Whatsapp de #${owner.name}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Pregúntanos</b>
                <figure class="image is-28x28">
                  <img
                    src="/icons/whatsapp-brands.svg"
                    alt="Icono de WhatsApp"
                    title="Icono de WhatsApp"
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
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
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
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      this.scrollin = top > 30;
    },
  },
};
</script>
