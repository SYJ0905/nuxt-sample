import webpack from 'webpack';
import redirectSSL from 'redirect-ssl';

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover' },

      // { name: 'msapplication-TileColor', content: '#ffffff' },
      // { name: 'msapplication-TileImage', content: '/images/ms-icon-144x144.png' },
      // { name: 'theme-color', content: '#ffffff' },

      { name: 'description', content: 'SEO 描述' },

      // { property: 'og:url', content: 'og 網址' },
      // { property: 'og:locale', content: 'zh_TW' },
      // { property: 'og:type', content: 'website' },
      // { property: 'og:title', content: 'og 標題' },
      // { property: 'og:description', content: 'og 描述' },
      // { property: 'og:image', content: 'og 圖片路徑' },
      // { property: 'og:image:alt', content: 'og 描述' },
      // { property: 'og:image:type', content: 'image/jpeg' },

      // { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      // { name: 'apple-mobile-web-app-title', content: 'apple-mobile-web-app-title' },
      // { name: 'format-detection', content: 'telephone=no' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/apple-icon-57x57.png' },
      // { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/apple-icon-60x60.png' },
      // { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/apple-icon-72x72.png' },
      // { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/apple-icon-76x76.png' },
      // { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/apple-icon-114x114.png' },
      // { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/apple-icon-120x120.png' },
      // { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/apple-icon-144x144.png' },
      // { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/apple-icon-152x152.png' },
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-icon-180x180.png' },
      // { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/android-icon-192x192.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon-96x96.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
      // { rel: 'manifest', href: '/images/manifest.json' },
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
      src: '@/plugins/route.js',
      ssr: 'server',
    },
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
    {
      src: '@/plugins/gtag.js',
      ssr: 'client',
    },
    {
      src: '@/plugins/currency.js',
      ssr: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/gtm',
    'vue-sweetalert2/nuxt',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'cookie-universal-nuxt',
  ],
  sitemap: {
    path: '/sitemap.xml', // sitemap名稱，不用改
    hostname: '', // 網址
    cacheTime: 1000 * 60 * 15, // 站點路由更新頻率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 檔的 sitemap
    // 排除不要的頁面路由
    exclude: [],
    // async routes(callback) {
    //   const response = await API_GET_SITEMAP();
    //   const res = response.data;
    //   const sitemapData = res.data;
    //   const data = sitemapData.map((item) => ({
    //     url: item.loc.replace('網址', ''),
    //     changefreq: item.changefreq,
    //     priority: item.priority,
    //     lastmod: item.lastmod,
    //     lastmodrealtime: true,
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
    Disallow: process.env.NODE_ENV === 'dev' ? '/' : [],
    // CrawlDelay: 30,
    Sitemap: '網址/sitemap.xml',
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
    serverMiddleware: [
      redirectSSL.create({
        enabled: process.env.NODE_ENV === 'production',
      }),
    ],
    vue: {
      config: {
        productionTip: false,
        devtools: process.env.NODE_ENV === 'dev',
      },
    },
  },
};
