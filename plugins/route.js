export default ({ app }) => {
  if (process.client) {
    /* 判斷是否為 IE 包含 IE 11 */
    const isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
    if (isIE) {
      window.location.href = '/browser.html';
    }
    app.router.afterEach(() => {});
  }
};
