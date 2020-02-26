<template>
  <main class="error old-crt-effect">
    <div class="pieces in-error"></div>
    <div class="overlay overlay--hidden"></div>
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
        <!-- typewritin´Title -->
        <div class="typewriter in-error">
          <h3 class="mode--code">
            <span>[</span> Error 404 <span>]</span> Page Not Found
          </h3>
        </div>
        <!-- FOOTER navbar links -->
        <div class="content__bottom">
          <div class="switch switch--navbar mode mode--code">
            <nuxt-link :to="{name: 'index'}" class="btn is-link btn--coder menu__link glitch" data-text="<< Home">
              << Home
            </nuxt-link>
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
  </main>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  head() {
    return {
      title: 'with modals'
    }
  },
  methods: {

  }
}
</script>
