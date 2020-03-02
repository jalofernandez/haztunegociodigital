<template>
  <main class="resume old-crt-effect">
    <!-- (common) "Resume / C.V." modal dialog -->
    <div :class="['modal-wrapper', { 'md-show' : modalShow }]">
      <div id="modal-99" class="md-modal">
        <div class="md-content">
          <img 
            src="~assets/resume/jalofernandez_cv-resume_2020.jpg"
            title="@jalofernandez resume of skills and professional experience"
            alt="@jalofernandez resume of skills and professional experience"
          />
          <p>
            <a href="~assets/resume/jalofernandez_CV-resume_2018.pdf" title="to download @jalofernandez resume" download>
              Resume / C.V. (Download here!)
            </a>
          </p>
          <button class="btn menu--link glitch js-modal-close" data-text="X Close me!" @click="closeModal()">
            X Close me!
          </button>
        </div>
      </div>
      <div class="modal-overlay flicker" @click="closeModal()"></div>
    </div>

    <Zeppelin/>

    <div class="content">
      <div class="content--inner">
        <!-- (main) Header -->
        <div class="content--header">
          <Logo/>
          <Social/>
        </div>
        <Slogan/>
        <!-- C.V.: typewritin´summary -->
        <div class="skills-list">
          <h3 class="mode--code resume-skills-title">
            <span>[</span> Why <span>]</span> do you want to work with me?!
          </h3>
          <div class="typewriter is-resume">
            <p class="mode--code" v-for="(skill, index) in skills" :key="index">
              {{ skill.row }}
            </p>
          </div>
          <!-- to add more "typewritting" Text (block closer)
          <a class="typewrite" href="", data-period="2000", data-type='[ "Hi, I´m @jalofernandez...", "...a creative designer...", "...and a wonderfull coder...", "...go to my portfolio to check it!" ]'>
            <span class="wrap"></span>
          </a>
          -->
        </div>
        <!-- FOOTER navbar links -->
        <div class="content--footer">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{name: 'index'}" class="btn is-link btn--coder menu--link glitch" data-text="<< Home">
              &lt;&lt; Home
            </nuxt-link>
            <a
              class="btn is-link btn--designer menu--link glitch js-modal-trigger"
              id="js-resume"
              href="javascript:"
              data-modal="modal-99"
              data-text="Resume / C.V."
              @click="modalShow = true">
              Resume / C.V.
            </a>
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
import Zeppelin from '~/components/Zeppelin'

export default {
  components: { Logo, Slogan, Social, Zeppelin },
  data() {
    return {
      modalShow: false,
      skills: [
        { row: "HTML5, pug, twig, CSS3, less, sass," },
        { row: "vuejs, nuxtjs, jQuery, javascript," },
        { row: "npm, yarn, gulp, nodejs, PWA, SEO," },
        { row: "git, gitHub, bitbucket, subversion," },
        { row: "scrum, agile, trello, jira, slack," },
        { row: "responsive design, photo, video..." }
      ],
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
      htmlAttrs: {
        lang: 'es'
      },
      title: 'with modals',
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }
      ]
    }
  },
  methods: {
    closeModal() {
      this.modalShow = false;
    }
  }
}
</script>
