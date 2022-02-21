<template>
  <nav class="controls">
    <a
      v-for="(social, index) in social"
      :key="index"
      :class="'icon icon-' + social.icon"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :title="social.title"
    >
      <img
        :src="'icons/' + social.icon + '-brands.svg'"
        :title="social.title"
        :alt="social.title"
        width="25"
        height="25"
      />
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    const author = '@jalofernandez'
    return {
      social: [
        {
          url: 'https://twitter.com/jalofernandez',
          icon: 'twitter',
          title: 'Ver cuenta de Twitter de ' + author,
        },
        {
          url: 'https://www.instagram.com/jalofernandez/?ref=badge',
          icon: 'instagram',
          title: 'Ver perfil de Instagram de ' + author,
        },
        {
          url: 'https://www.facebook.com/jalofernandez?ref=tn_tnmn',
          icon: 'facebook',
          title: 'Ver perfil de Facebook de ' + author,
        },
        {
          url: 'https://www.linkedin.com/in/javierlorenzofernandez/',
          icon: 'linkedin',
          title: 'Ver perfil de LinkedIn de ' + author,
        },
        {
          url: 'https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw',
          icon: 'youtube',
          title: 'Ver canal de Youtube de ' + author,
        },
        {
          url: 'https://github.com/jalofernandez',
          icon: 'github',
          title: 'Ver perfil de Github de ' + author,
        },
        {
          url: 'mailto:jalofernandez@gmail.com',
          icon: 'email',
          title: 'Enviar email a ' + author,
        },
      ],
    }
  },
}
</script>
