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
          <nav class="controls">
            <a class="icon icon-twitter" href="https://twitter.com/jalofernandez" target="_blank" rel="noopener noreferrer" title="Ver cuenta de Twitter de @jalofernandez"></a>
          </nav>
        </div>
        <h1 class="glitch" href="index.html" title="Volver al índice del Website de @jalofernandez" data-text="designer + coder">
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
          <ul class="menu__inner">
            <li class="menu__item">
              <a class="menu__link" href="#" data-switch="" title="Título menu desarrollador">
                _as UX/UI &amp; web developer:
              </a>
            </li>
            <!-- TODO: (apply me asap!) to get data from $store:
              <li class="menu__item" v-for="code in getLinksCoder" :key="code"> 
            -->
            <li class="menu__item" v-for="(code, index) in links.coder" :key="index">
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
            <!-- <a class="contact-link mode mode--design is-glitch glitch--1" href="cv-resume.html" title="Ver C.V. de @jalofernandez" data-switch="" data-glitch="">
              _check my profile
            </a> -->
            <nuxt-link :to="{name: 'cv-resume'}" class="contact-link mode mode--design is-glitch glitch--1">
              _check my profile
            </nuxt-link>
          </div>
          <a class="mode mode--coder is-glitch glitch--3" href="legal.html" title="Ver términos legales de @jalofernandez" data-switch="" data-glitch="">
            Legal
          </a>
        </div>
      </div>
    </div>
    <div class="loading"></div>
    <div class="line-anim"></div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      isModeDesign: true,
      isModeCode: false,
      links: {
        designer: [
          {
            url: "portfolio.html",
            copy: "layout",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio.html",
            copy: "photography",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio.html",
            copy: "UX & UI Web design",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio.html",
            copy: "packaging",
            title: "Ver Portfolio completo de @jalofernandez"
          },
          {
            url: "portfolio.html",
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
            url: "https://github.com/jalofernandez",
            copy: "> ...take a look on Github",
            title: "@jalofernandez GitHub account"
          }
        ]
      }
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