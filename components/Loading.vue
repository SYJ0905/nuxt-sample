<template>
  <loading
    :active="isLoading"
  />
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
