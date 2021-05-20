<template>
  <div>
    <nuxt-link to="/">
      返回首頁
    </nuxt-link>
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
// window.addEventListener('resize', initHeight);
/* 檢測裝置實際 vh 不會包含導覽列高度 */
}
</script>
