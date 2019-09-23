<template>
  <div class="container">
    <a href="#" @click.prevent="login()">登入</a>
    <nuxt-link class="text-primary" to="/user-profile">
      會員中心
    </nuxt-link>
  </div>
</template>

<script>

export default {
  components: {},
  mounted() {},
  methods: {
    login() {
      localStorage.setItem('test', '測試');
    },
  },
};
</script>
