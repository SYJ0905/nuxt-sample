<template>
  <div>
    <select v-model="synCity">
      <option
        v-for="item in cityList"
        :key="item.id"
        :value="item.name"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<!--
  父元素寫法
  <template>
    <PropsSync
      :city.sync="city"
      :city-list.sync="cityList"
    />
  </template>
  <script>
  import PropsSync from '@/components/PropsSync.vue';
  export default {
    components: {
      PropsSync,
    },
    data() {
      return {
        city: '台北市',
        cityList: [
          {
            id: 1,
            name: '台北市',
          },
          {
            id: 2,
            name: '新北市',
          },
        ],
      };
    },
  };
  </script>
-->

<script>
export default {
  props: {
    city: {
      type: String,
      default() {
        return '';
      },
    },
    cityList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    synCity: {
      get() {
        return this.city;
      },
      set(val) {
        this.$emit('update:city', val);
      },
    },
  },
};
</script>
