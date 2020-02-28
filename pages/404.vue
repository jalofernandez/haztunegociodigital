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
          <Social/>
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
              &lt;&lt; Home
            </nuxt-link>
            <nuxt-link :to="{name: 'portfolio'}" class="btn is-link btn--designer menu__link glitch" data-text="Portfolio >>">
              Portfolio &gt;&gt;
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
import Social from '~/components/Social.vue'

export default {
  components: {
    Social
  },
  head() {
    return {
      title: 'with modals'
    }
  }
}
</script>
