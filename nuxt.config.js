import webpack from 'webpack';
import axios from 'axios';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/all.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/bootstrap.js',
      ssr: false,
    },
    {
      src: '@/plugins/axios.js',
      ssr: true,
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
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
    generate: true, // 允許使用 nuxt generate 生成
    // 排除不要的頁面路由
    exclude: [
      '/xxx/admin', // 後臺頁面不需要加入
      '/xxx/admin/**', // 後臺頁面不需要加入
      '/xxx/create-order', // 後臺頁面不需要加入
    ],
    routes(callback) {
      const indexRoute = [
        {
          url: '/',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(), // yyyy-mm-dd
          lastmodrealtime: true, // yyyy-mm-ddTHH:MON:SSZ
        },
      ];
      axios.all([
        axios.get('https://randomuser.me/api/?results=10'),
      ])
        .then(axios.spread((userList) => {
          const indexRoutes = indexRoute;
          const userListRoutes = userList.data.results.map((data) => ({
            url: `/userdetail/${data.email}`,
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date(), // yyyy-mm-dd
            lastmodrealtime: true, // yyyy-mm-ddTHH:MON:SSZ
          }));
          callback(null, indexRoutes.concat(indexRoutes, userListRoutes));
        }), (err) => { next(err); });
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: [
      '/xxx/admin',
      '/xxx/admin/**',
      '/xxx/create-order',
    ],
    Sitemap: 'https://www.xxx.com.tw/sitemap.xml',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
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
  },
};
