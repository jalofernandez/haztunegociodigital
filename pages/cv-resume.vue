<template>
  <main class="resume old-crt-effect">
    <div class="overlay overlay--hidden"></div>
    <!-- Place here "Zeppelin" animation as a component (pug import in old porject) -->
    <div class="content">
      <div class="content__inner">
        <!-- (main) Header -->
        <div class="content__top">
          <h2 class="title">
            <span class="mode mode--design is-glitch glitch--2">
              @jalofernandez
            </span>
          </h2>
          <nav class="controls">
            <a 
              class="icon icon-twitter"
              href="https://twitter.com/jalofernandez"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver cuenta de Twitter de @jalofernandez">
              Twitter
              <!-- <i class="fab fa-twitter"></i> -->
              <!-- <font-awesome-icon icon="twitter"/> -->
            </a>
          </nav>
        </div>
        <h1 class="glitch" data-text="designer + coder">
          designer + coder
        </h1>
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
        <div class="content__bottom">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{name: 'index'}" class="btn is-link btn--coder menu__link glitch" data-text="<< Home">
              << Home
            </nuxt-link>
            <a
              class="btn is-link btn--designer menu__link glitch js-modal-trigger"
              id="js-resume"
              href="javascript:"
              data-modal="modal-99"
              data-text="Resume / C.V."
              @click="modalShow = true">
              Resume / C.V.
            </a>
            <nuxt-link :to="{name: 'portfolio'}" class="btn is-link btn--designer menu__link glitch" data-text="Portfolio >>">
              Portfolio >>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="line-anim">
      <div class="flicker"></div>
    </div>
    <!-- (common) "Resume / C.V." modal dialog -->
    <div id="modal-99" :class="['md-modal', 'md-effect-16', { 'md-show' : modalShow }]">
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
        <button class="btn menu__link glitch js-modal-close" data-text="X Close me!" @click="closeModal()">
          X Close me!
        </button>
      </div>
    </div>
    <div class="th-modal-overlay flicker" @click="closeModal()"></div>
  </main>
</template>

<script>
export default {
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
      ]
    }
  },
  head() {
    return {
      title: 'with modals'
    }
  },
  methods: {
    // modalTrigger() {
    //   this.$emit('click')
    // }
    closeModal() {
      this.modalShow = false;
    }
  }
}
</script>

<style>

</style>