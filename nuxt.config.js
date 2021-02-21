import webpack from 'webpack';
// import axios from 'axios';

export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Sample',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'description', name: 'description', content: '描述' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: '',
        type: 'text/javascript',
        defer: true,
      },
    ],
  },
  env: {
    API_PATH:
      process.env.NODE_ENV === 'dev'
        ? 'https://randomuser.me/api'
        : 'https://randomuser.me/api',
    NODE_ENV: process.env.NODE_ENV === 'dev' ? 'dev' : 'production',
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/all.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/axios.js',
      ssr: 'server',
    },
    {
      src: '@/plugins/jsonld.js',
      ssr: 'server',
    },
    {
      src: '@/plugins/bootstrap.js',
      mode: 'client',
    },
    {
      src: '@/plugins/overlayscrollbars.js',
      mode: 'client',
    },
    {
      src: '@/plugins/api.js',
      mode: 'client',
    },
    {
      src: '@/plugins/loading.js',
      ssr: 'client',
    },
    {
      src: '@/plugins/veevalidate.js',
      ssr: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // serverMiddleware: ['redirect-ssl'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'vue-sweetalert2/nuxt',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  sitemap: {
    path: '/sitemap.xml', // sitemap名稱，不用改
    hostname: '', // 網址
    cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 檔的 sitemap
    // 排除不要的頁面路由
    exclude: [
      '',
    ],
    // async routes(callback) {
    //   /**
    //    * XML API 後端製作 or 前端處理
    //    */
    //   const response = await axios.get('XML API');
    //   const sitemapData = response.data.results;
    //   const data = sitemapData.map((item) => ({
    //     url: `/userdetail/${item.email}`,
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmod: new Date(), // yyyy-mm-dd
    //     lastmodrealtime: true, // yyyy-mm-ddTHH:MON:SSZ
    //   }));
    //   const indexRoutes = [];
    //   callback(
    //     null,
    //     indexRoutes.concat(
    //       data,
    //     ),
    //   );
    // },
  },
  robots: {
    UserAgent: '*',
    Disallow: [
      '',
    ],
    Sitemap: 'https://www.xxx.com.tw/sitemap.xml',
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
    /*
    ** You can extend webpack config here
    */
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
    },
    plugins: [
      // 這麼寫可以在 .vue 中拿到 $
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    // extend(config, ctx) {
    // },
    vue: {
      config: {
        productionTip: false,
        devtools: true,
      },
    },
  },
};
