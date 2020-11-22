import Vue from 'vue';

export default ({ app, route }) => {
  if (process.client) {
    /* 判斷是否為 IE 包含 IE 11 */
    const isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
    if (isIE) {
      window.location.href = '/browser.html';
    }
    app.router.beforeEach((to, from, next) => {
    /* token: 登入金鑰 */
      const token = localStorage.getItem('login') || '';
      if (to.matched.length === 0) {
        /* 前往 error 頁面 */
        next();
      } else if (to.matched.length !== 0 && route.meta.length === 0) {
        /* 離開 error 頁面 */
        next();
      } else if (to.matched.length !== 0 && route.meta.length !== 0) {
        /* 驗證 */
        const { requiresAuth } = route.meta[0] || null;
        if (requiresAuth) {
          if (!token) {
            Vue.swal({
              icon: 'warning',
              title: '請先登入 1!',
              timer: 1000,
              confirmButtonText: '關閉視窗',
            });
            app.router.back();
          } else {
            next();
          }
        } else {
          next();
        }
      }
    });
  }
};
