<template>
  <div>
    <Loading :active="page_loading" />
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

function initHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

if (process.client) {
  const isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
  if (isIE) {
    window.location.href = '/browser.html';
  }
  /* 檢測裝置實際 vh 不會包含導覽列高度 */
  initHeight();
  window.addEventListener('resize', initHeight);
/* 檢測裝置實際 vh 不會包含導覽列高度 */
}

export default {
  name: 'Default',
  components: {},
  data() {
    return {

    };
  },
  head() {
    return {
      title: 'Nuxt Sample',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        { hid: 'og:title', property: 'og:title', content: 'Nuxt Sample' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:url', property: 'og:url', content: '' },
        { hid: 'og:url', property: 'og:image', content: '圖片網址' },
      ],
    };
  },
  computed: {
    ...mapGetters(['page_loading']),
  },
  mounted() {},
  methods: {},
};
</script>

<style>
html {
  font-size: 16px;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
  color: #3b8070;
  border: 1px solid #3b8070;
  border-radius: 4px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  margin-left: 15px;
  padding: 10px 30px;
  text-decoration: none;
  color: #35495e;
  border: 1px solid #35495e;
  border-radius: 4px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
