<template>
  <div class="container">
    <div>
      <Logo />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import jsonLd from '@/static/jsonld.json';

export default {
  meta: {
    requiresAuth: false,
  },
  asyncData() {
    return { jsonLd };
  },
  jsonld() {
    const data = [];
    data.push(this.jsonLd.organization, this.jsonLd.webpage, this.jsonLd.website);
    return data;
  },
};
</script>
