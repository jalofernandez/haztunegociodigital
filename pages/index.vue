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
            <span class="title__inner mode mode--design" data-switch="" data-glitch="">
              @jalofernandez
            </span>
          </h2>
          <nav class="controls">
            <a class="icon icon-twitter" href="https://twitter.com/jalofernandez" target="_blank" rel="noopener noreferrer" title="Ver cuenta de Twitter de @jalofernandez"></a>
          </nav>
        </div>
        <h1 class="glitch" href="index.html" title="Volver al índice del Website de @jalofernandez" data-text="designer + coder">
          designer + coder
        </h1>
        <!-- (menu) DESIGNER -->
        <div class="menu">
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
        <div class="menu menu--code">
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
          <div class="switch mode mode--design">
            <a class="switch__item switch__item--current" href="javascript:" title="Ver menu diseñador">
              Designer
            </a>
            <a class="switch__item" href="javascript:" title="Ver menu desarrollador">
              <span class="mode mode--design" data-switch="" data-glitch="">
                Coder
              </span>
            </a>
          </div>
          <div class="link-wrap">
            <a class="contact-link mode mode--design" href="cv-resume.html" title="Ver C.V. de @jalofernandez" data-switch="" data-glitch="">
              _check my profile
            </a>
          </div>
          <a class="mode mode--coder" href="legal.html" title="Ver términos legales de @jalofernandez" data-switch="" data-glitch="">
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
  }
  // computed: {
  //   getLinksDesigner() {
  //     return this.$store.state.links.designer.find(design => design.id === this.id) // when items are placed in store
  //   } 
  // }
}
</script>
