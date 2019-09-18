<template>
  <div class="container" />
</template>

<script>

export default {
  components: {},
  mounted () {
    this.get_user_name()
  },
  methods: {
    get_user_name () {
      const vm = this
      const api = 'https://randomuser.me/api/'
      vm.$http.get(api).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
