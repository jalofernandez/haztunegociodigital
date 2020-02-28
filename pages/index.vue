<template>
  <main class="home old-crt-effect">
    <!-- <div class="pieces" style='background-image: url(img/index/normal.jpg); background-size: 100% auto;' data-img-alt='url(img/index/alt.jpg)' data-img-code='url(img/index/code.jpg)'></div> -->
    <div class="pieces"></div>
    <div class="overlay overlay--hidden"></div>
    <div class="content">
      <div class="content__inner">
        <!-- (main) Header -->
        <div class="content__top">
          <h2 class="title">
            <transition name="fade" :duration="{ enter: 500, leave: 500 }">
              <span class="mode mode--design is-glitch glitch--2" v-if="isModeDesign">
                @jalofernandez
              </span>
            </transition>
            <transition name="fade" :duration="{ enter: 600, leave: 500 }">
              <span class="mode mode--code is-glitch glitch--1" v-if="isModeCode">
                @jalofernandez
              </span>
            </transition>
          </h2>
          <Social/>
        </div>
        <h1 class="glitch" data-text="designer + coder">
          designer + coder
        </h1>
        <!-- (menu) DESIGNER -->
        <div class="menu" v-if="isModeDesign">
          <ul class="menu__inner">
            <li class="menu__item">
              <a class="menu__link" href="javascript:" data-switch="" title="Título menu diseñador">
                _as graphic designer:
              </a>
            </li>
            <!-- TODO: (apply me asap!) to get data from $store:
              <li class="menu__item" v-for="design in getLinksDesigner" :key="design"> 
            -->
            <li class="menu__item" v-for="(design, index) in links.designer" :key="index">
              <a
                class="menu__link glitch"
                :href="design.url"
                :data-text="design.copy"
                data-switch=""
                :title="design.title">
                {{ design.copy }}
              </a>
            </li>
          </ul>
        </div>
        <!-- (menu) CODER -->
        <div class="menu menu--code" v-else>
          <ul class="menu__inner typewriter is-home">
            <li class="menu__item mode--code">
              <a class="menu__link" href="javascript:" title="Título menu desarrollador" data-switch="">
                _as UX/UI &amp; web developer:
              </a>
            </li>
            <!-- TODO: (apply me asap!) to get data from $store:
              <li class="menu__item" v-for="code in getLinksCoder" :key="code"> 
            -->
            <li class="menu__item mode--code" v-for="(code, index) in links.coder" :key="index">
              <a
                class="menu__link glitch"
                :href="code.url"
                target="_blank"
                rel="noopener noreferrer"
                :data-text="code.copy"
                data-switch=""
                :title="code.title">
                {{ code.copy }}
              </a>
            </li>
          </ul>
        </div>
        <!-- (main) Footer -->
        <div class="content__bottom">
          <div :class="['switch', 'mode', {'mode--design' : isModeDesign, 'mode--code' : isModeCode}]">
            <a 
              :class="['switch__item', {'switch__item--current' : isModeDesign}]"
              href="javascript:"
              title="Ver menu diseñador"
              @click="changeMode()">
              <span class="mode mode--design" data-switch="" data-glitch="">
                Designer
              </span>
            </a>
            <a 
              :class="['switch__item', {'switch__item--current' : !isModeDesign}]"
              href="javascript:"
              title="Ver menu desarrollador"
              @click="changeMode()">
              <span class="mode mode--design" data-switch="" data-glitch="">
                Coder
              </span>
            </a>
          </div>
          <div class="link-wrap">
            <nuxt-link :to="{name: 'cv-resume'}" class="contact-link mode mode--design is-glitch glitch--1" title="Ver portfolio de trabajos de @jalofernandez">
              _check my profile
            </nuxt-link>
          </div>
          <nuxt-link :to="{name: 'legal'}" class="mode mode--coder is-glitch glitch--3" title="Ver términos legales de @jalofernandez">
            Legal
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="loading"></div>
    <div class="line-anim"></div>
  </main>
</template>

<script>
import Social from '~/components/Social.vue'

export default {
  components: {
    Social
  },
  data() {
    return {
      isModeDesign: true,
      isModeCode: false,
      links: {
        designer: [
          {
            url: "portfolio",
            copy: "layout",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio",
            copy: "photography",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio",
            copy: "UX & UI Web design",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio",
            copy: "packaging",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio",
            copy: "graphisms & draws",
            title: "Ver Portfolio completo de @jalofernandez"
          }
        ],
        coder: [
          {
            url: "https://www.upplication.com/en/",
            copy: "Upplication",
            title: "Upplication® App builder. Create the app for your business, no coding required, fast and simple. Android and iOS app"
          },
          {
            url: "http://proyectogastronomix.org/",
            copy: "Gastronomix",
            title: "Gastronomix es un proyecto social gratuito de cocina, gastronomía creativa y reciclaje personal. Organizado por J.P. Morgan, Basque Culinary Center, La Casa y el Mundo y Fundación Tomillo"
          },
          {
            url: "https://widitrade.com/",
            copy: "Widitrade",
            title: "Widitrade to Increase Your Online Sales Now!"
          },
          {
            url: "https://peluqueriacanessa.com/",
            copy: "Canessa",
            title: "Canessa ofrece servicios de peluquería y belleza canina y felina con cortes de pelo comerciales y de exposición. Servicio de autolavado y de un completo SPA canino."
          },
          {
            url: "https://ecomerzpro.net/",
            copy: "Ecomerzpro Club",
            title: "Ecomerzpro Club for ecommerce offers and discounts"
          },
          {
            url: "https://jalofernandez.github.io/lfcabogados/",
            copy: "LFC; Abogados y Economistas",
            title: "LFC Abogados y Economistas expertos en Compliance penal. Asesoramos en materia jurídico penal preventiva."
          },
          {
            url: "https://capaball.com/app/#/login",
            copy: "Capaball",
            title: "Capaball elearning platform"
          },
          {
            url: "https://github.com/jalofernandez",
            copy: "> ...take a look on Github",
            title: "@jalofernandez GitHub account"
          }
        ]
      },
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Recipe",
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
      htmlAttrs: {
        lang: 'es'
      },
      title: '@jalofernandez portfolio',
      meta: [
        // (metas) common
        { hid: 'description', name: 'description', content: '@jalofernandez personal portfolio & C.V. resume' },
        { hid: 'author', name: 'author', content: '@jalofernandez' },
        { hid: 'copyright', name: 'copyright', content: 'Jalofernandez' },
        { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
        { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
        { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
        { hid: 'lang', name: 'lang', content: 'es-ES' },
        { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
        { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },
        { hid: 'rating', name: 'rating', content: 'General' },
        { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
        // (metas) to customize (all browsers) top navbar
        { hid: 'theme-color', name: 'theme-color', content: '#f4692a' },
        // (metas) to Webkit (iOS Safari) browsers
        { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
        { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: '@jalofernandez' },
        // (metas) IE (windows phone) browsers
        // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
        { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
        // (microdata) TWITTER
        { name: 'twitter:title', content: 'Jalofernández diseño gráfico y desarrollo web en Madrid, España' },
        { name: 'twitter:description', content: 'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.' },
        { name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
        { name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@jalofernandez' },
        { name: 'twitter:creator', content: '@jalofernandez' },
        // (open-graph) FACEBOOK
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'es_ES' },
        { name: 'og:url', content: 'https://jalofernandez.com' },
        { name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico' },
        { name: 'og:title', content: 'Jalofernández diseño gráfico y desarrollo web en Madrid, España' },
        { name: 'og:description', content: 'Portfolio y CV personal de Javier Lorenzo Fernández (aka jalofernandez). Diseñador gráfico y desarrollador web frontend así como maravillosa persona.' },
        { name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
        { name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg' },
        { name: 'og:image:width', content: '960' },
        { name: 'og:image:height', content: '540' },
        { name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' }
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }
      ],
      // Pre-fetch and return recipe data server-side
      // async asyncData(context) {
      // },
      link: [
        // Canonical url
        { rel: 'canonical', href: 'https://jalofernandez.com/' },
        // Pre-fetch and return recipe data server-side
        { rel: 'dns-prefetch', href: '//twitter.com/jalofernandez' },
        { rel: 'dns-prefetch', href: '//www.instagram.com/jalofernandez/?ref=badge' },
        { rel: 'dns-prefetch', href: '//www.linkedin.com/in/javierlorenzofernandez/' },
        { rel: 'dns-prefetch', href: '//www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw' },
        { rel: 'dns-prefetch', href: '//www.facebook.com/jalofernandez?ref=tn_tnmn' },
        { rel: 'dns-prefetch', href: '//github.com/jalofernandez' },
        { rel: 'dns-prefetch', href: '//www.upplication.com/en/' },
        { rel: 'dns-prefetch', href: '//proyectogastronomix.org/' },
        { rel: 'dns-prefetch', href: '//widitrade.com/' },
        { rel: 'dns-prefetch', href: '//peluqueriacanessa.com/' },
        { rel: 'dns-prefetch', href: '//ecomerzpro.net/' },
        { rel: 'dns-prefetch', href: '//capaball.com/app/#/login/' },
        { rel: 'dns-prefetch', href: '//jalofernandez.github.io/lfcabogados/' }
        // (custom) Favicons
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  mounted() {
    console.log("Hola");
  },
  methods: {
    changeMode() {
      this.isModeDesign = !this.isModeDesign,
      this.isModeCode = !this.isModeCode
    }
  }
  // computed: {
  //   getLinksDesigner() {
  //     return this.$store.state.links.designer.find(design => design.id === this.id) // when items are placed in store
  //   } 
  // }
}
</script>

<style>
/* (based on) https://codepen.io/lukemeyrick/pen/ayRgWO */
.is-glitch {
  outline: none;
  text-align: center;
}
.is-glitch,
.is-glitch * {
  display: inline-block;
  animation: animGlitch infinite steps(50);
  animation-direction: alternate-reverse;
}
.glitch--1 {
  animation-delay: 1s;
  animation-duration: 10s;
  animation-iteration-count: 5;
}
.glitch--2 {
  animation-delay: 2s;
  animation-duration: 12s;
  animation-iteration-count: 2;
}
.glitch--3 {
  animation-delay: 3s;
  animation-duration: 15s;
  animation-iteration-count: 3;
}
.glitch--5 {
  animation-delay: 5s;
  animation-duration: 12s;
  animation-iteration-count: 5;
}

@keyframes animGlitch {
  2% {
    font-weight: 100;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  4% {
    font-weight: 700;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  6% {
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: lowercase;
  }
  8% {
    font-weight: 100;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  10% {
    font-weight: 200;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  12% {
    font-weight: 100;
    font-style: italic;
    color: #f4692a;
    text-decoration: none;
  }
  14% {
    font-weight: 700;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: lowercase;
  }
  16% {
    font-weight: 400;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: lowercase;
  }
  18% {
    font-weight: 300;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  20% {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  22% {
    font-weight: 600;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  24% {
    font-weight: 100;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  26% {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  28% {
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: capitalize;
  }
  30% {
    font-weight: 400;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  32% {
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  34% {
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  36% {
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  38% {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  40% {
    font-weight: 400;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  42% {
    font-weight: 300;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  44% {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  46% {
    font-weight: 500;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: lowercase;
  }
  48% {
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  50% {
    font-weight: 500;
    font-style: italic;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  52% {
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  54% {
    font-weight: 600;
    font-style: italic;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  56% {
    font-weight: 100;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  58% {
    font-weight: 100;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: capitalize;
  }
  60% {
    font-weight: 700;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  62% {
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: lowercase;
  }
  64% {
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  66% {
    font-weight: 300;
    font-style: italic;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  68% {
    font-weight: 700;
    font-style: normal;
    color: #f4692a;
    text-decoration: none;
  }
  70% {
    font-weight: 100;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: capitalize;
  }
  72% {
    font-weight: 400;
    font-style: normal;
    color: #f4692a;
    text-decoration: none;
  }
  74% {
    font-weight: 100;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  76% {
    font-weight: 200;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  78% {
    font-weight: 200;
    font-style: normal;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: lowercase;
  }
  80% {
    font-weight: 100;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  82% {
    font-weight: 300;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  84% {
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  86% {
    font-weight: 100;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: capitalize;
  }
  88% {
    font-weight: 200;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  90% {
    font-weight: 400;
    font-style: italic;
    text-decoration: line-through;
    color: #29cc00;
    text-transform: none;
  }
  92% {
    font-weight: 500;
    font-style: italic;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  94% {
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: none;
  }
  96% {
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #f4692a;
    text-transform: lowercase;
  }
  98% {
    font-weight: 400;
    font-style: normal;
    color: #f4692a;
    text-decoration: none;
  }
}
</style>