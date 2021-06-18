<template>
  <div>
    <span @click.prevent="scroll_top()">回頂部</span>
  </div>
</template>

<script>
import OverlayScrollbars from 'overlayscrollbars';

export default {
  methods: {
    scroll_top() {
      const osStatus = document.querySelector('html').classList.contains('os-html');
      if (osStatus) {
        OverlayScrollbars(document.body).scroll({
          top: 0,
        }, 300);
      } else {
        // $('html, body').animate({
        //   scrollTop: 0,
        // }, 300);
      }
    },
  },
};
</script>
