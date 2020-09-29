<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" title="" width="112" height="28" />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">
            <span>Inicio</span>
          </nuxt-link>
          <nuxt-link to="/legal" class="navbar-item">
            <span>Legal</span>
          </nuxt-link>
          <!-- <nuxt-link to="/servicios" class="navbar-item">
            <span>Servicios</span>
          </nuxt-link>
          <nuxt-link to="/nosotros" class="navbar-item">
            <span>Nosotros</span>
          </nuxt-link>
          <nuxt-link to="/contacto" class="navbar-item">
            <span>Contacto</span>
          </nuxt-link> -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Ya nos usan
            </a>
            <div class="navbar-dropdown">
              <nuxt-link to="/horeca/bar-galicia" class="navbar-item">
                <span>Bar galicia</span>
              </nuxt-link>
              <nuxt-link to="/horeca/la-antigua-bodeguita" class="navbar-item">
                <span>La Antigua Bodeguita</span>
              </nuxt-link>
              <nuxt-link to="/servicios/canessa" class="navbar-item">
                <span>Peluquería canina Canessa</span>
              </nuxt-link>
              <nuxt-link to="/servicios/jalofernandez" class="navbar-item">
                <span>Jalofernandez: designer + coder</span>
              </nuxt-link>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                ¿Te unes?
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-success">
                <strong>Infórmate aquí</strong>
              </a>
            </div>
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
      //
    }
  },
}
</script>

<style scoped lang="sass"></style>
