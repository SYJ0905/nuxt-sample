import Vue from 'vue';
import VueGtag from 'vue-gtag';

// Vue.use(VueGtag, {
//   config: { id: 'G-8P1B2DZNV0' },
// });

export default ({ app }) => {
  if (process.client) {
    Vue.use(VueGtag, {
      config: { id: 'G-XXXXXXXXXX' },
    },
    app.router);
  }
  // } else if (isDev && process.client) {
  //   console.log('Skipping GA in development');
  // }
};
