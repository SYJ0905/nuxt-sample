import Vue from 'vue';

export default (context) => {
  // if (process.server) {
  //   // console.log('context.req =>', context.req.headers.cookie);
  //   // console.log(context.req.headers.cookie.includes(LOGIN));
  //   if (!context.req.headers.cookie.includes(LOGIN)) {
  //     context.redirect('/');
  //     return;
  //   }
  // }
  if (process.client) {
    /* 判斷是否為 IE 包含 IE 11 */
    const isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
    if (isIE) {
      window.location.href = '/browser.html';
      return;
    }
    if (!context.store.state.login.loginStatus) {
      context.redirect('/');
      Vue.swal({
        icon: 'warning',
        title: '提示!',
        text: '請先登入!',
        confirmButtonText: '關閉視窗',
      });
    }
  }
};
