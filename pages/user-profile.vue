<template>
  <div class="container">
    <nuxt-link class="text-primary" to="/">
      回首頁
    </nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'routerAuth',
  meta: {
    requiresAuth: true,
  },
};
</script>
