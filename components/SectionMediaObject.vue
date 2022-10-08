<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-flex-wrap-wrap content is-medium">
          <div class="column is-6" v-for="media in media" :key="media.title">
            <article class="media mb-4">
              <figure class="media-left mr-4">
                <p :class="`image is-${getImgSize()}x${getImgSize()}`">
                  <img
                    :src="require(`~/assets/${media.img}`)"
                    :title="media.alt"
                    :alt="media.alt"
                    :width="getImgSize()"
                    :height="getImgSize()"
                  />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <h4
                    :class="[
                      'is-title',
                      'is-size-3',
                      'is-size-5-mobile',
                      'has-text-primary',
                      $mq == 'mobile' || $mq == 'smartphone' ? 'has-text-weight-bold' : 'has-text-weight-medium'
                    ]"
                  >
                    {{ media.title }}
                  </h4>
                  <p
                    class="is-size-5 is-size-6-mobile"
                    v-html="media.description"
                    v-if="media.description"
                  ></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionMediaObject',
  props: {
    media: {
      type: Array,
      required: true,
      default: null
    }
  },
  methods: {
    getImgSize() {
      let mq = this.$mq
      if (mq === 'mobile' || mq === 'smartphone') {
        return 96 // (small screens)
      }
      return 128 // (big screens)
    },
  }
}
</script>
