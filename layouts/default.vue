<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
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
  // middleware: 'auth',
  components: {},
  // asyncData() {},
  // jsonld() {
  //   const data = [];
  //   return data;
  // },
  data() {
    return {};
  },
  // async fetch() {},
  // head() {
  //   return {
  //     title: 'Nuxt Sample',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: '',
  //       },
  //       { hid: 'og:title', property: 'og:title', content: 'Nuxt Sample' },
  //       { hid: 'og:description', property: 'og:description', content: '' },
  //       { hid: 'og:url', property: 'og:url', content: '' },
  //       { hid: 'og:url', property: 'og:image', content: '圖片網址' },
  //     ],
  //   };
  // },
  computed: {},
  watch: {},
  // async mounted() {},
  // async destroyed() {},
  methods: {},
};
</script>
