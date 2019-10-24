<template>
  <div class="container">
    <a href="#" @click.prevent="login()">登入</a>
    <nuxt-link class="text-primary" to="/user-profile">
      會員中心
    </nuxt-link>
  </div>
</template>

<script>
import jsonLd from '@/static/jsonld.json';

export default {
  components: {},
  asyncData() {
    return { jsonLd };
  },
  jsonld() {
    const data = [];
    data.push(this.jsonLd.organization, this.jsonLd.webpage, this.jsonLd.website);
    return data;
  },
  mounted() {},
  methods: {
    login() {
      localStorage.setItem('test', '測試');
    },
  },
};
</script>
