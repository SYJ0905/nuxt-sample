import Vue from 'vue';
import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue';
import 'overlayscrollbars/css/OverlayScrollbars.css';

Vue.use(OverlayScrollbarsPlugin);

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: false,
  },
});
