<template>
  <main class="error old-crt-effect">
    <div class="pieces in-error"></div>
    <div class="overlay overlay--hidden"></div>
    <div class="content">
      <div class="content--inner">
        <!-- (main) Header -->
        <div class="content--header">
          <Logo/>
          <Social/>
        </div>
        <Slogan/>
        <!-- typewritin´Title -->
        <div class="typewriter in-error">
          <h3 class="mode--code">
            <span>[</span> Error 404 <span>]</span> Page Not Found
          </h3>
        </div>
        <!-- FOOTER navbar links -->
        <div class="content--footer">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{name: 'index'}" class="btn is-link btn--coder menu--link glitch" data-text="<< Home">
              &lt;&lt; Home
            </nuxt-link>
            <nuxt-link :to="{name: 'portfolio'}" class="btn is-link btn--designer menu--link glitch" data-text="Portfolio >>">
              Portfolio &gt;&gt;
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="line--anim">
      <div class="flicker"></div>
    </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Slogan from '~/components/Slogan.vue'
import Social from '~/components/Social.vue'

export default {
  components: { Logo, Slogan, Social },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "jalofernández design webmaster frontend diseño gráfico",
        "@id": "https://jalofernandez.com",
        "url": "https://jalofernandez.com",
        "sameAs": [
          "https://www.instagram.com/jalofernandez/?ref=badge",
          "https://twitter.com/jalofernandez",
          "https://www.linkedin.com/in/javierlorenzofernandez/",
          "https://github.com/jalofernandez",
          "https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw",
          "https://www.facebook.com/jalofernandez?ref=tn_tnmn"
        ],
        "logo": "",
        "name": "jalofernández diseño gráfico y desarrollo web en Madrid, España",
        "description": "Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.",
        "telephone": "+34 696 682 791",
        "email": "jalofernandez@gmail.com",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Efectivo, tarjeta de crédito, Cash, Credit Card",
        "priceRange": "Desde 10€",
        "image": "",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34 696 682 791",
          "contactType": "Llamar para pedir presupuestos"
        }
      }
    }
  },
  head() {
    return {
      title: 'with modals',
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }
      ]
    }
  }
}
</script>
