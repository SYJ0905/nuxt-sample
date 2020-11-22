import Vue from 'vue';

export default ({ route, redirect }) => {
  if (process.client) {
    /* 判斷是否為 IE 包含 IE 11 */
    const isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
    if (isIE) {
      window.location.href = '/browser.html';
    }
    const { requiresAuth } = route.meta[0] || null;
    /* token: 登入金鑰 */
    if (requiresAuth) {
      const token = localStorage.getItem('login') || '';
      if (!token) {
        Vue.swal({
          icon: 'warning',
          title: '請先登入!',
          timer: 1000,
          confirmButtonText: '關閉視窗',
        });
        redirect('/');
      }
    }
  }
};
