<template>
  <div class="container">
    <p class="text-center">
      後台
    </p>
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
