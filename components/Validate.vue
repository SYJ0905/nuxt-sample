<template>
  <ValidationObserver
    ref="validate"
    tag="div"
    class="validate_container"
  >
    <ValidationProvider
      v-slot="{ classes, errors }"
      tag="div"
      vid="驗證欄位"
      name="驗證欄位"
      rules="required"
      class="validate_section"
    >
      <div class="validate_input">
        <input
          v-model="validateContent"
          type="text"
          :class="classes"
          placeholder="請輸入內容"
        >
      </div>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <a
      href="#"
      @click.prevent="validate()"
    >驗證</a>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      validateContent: '',
    };
  },
  methods: {
    async validate() {
      const vm = this;
      const validateResult = await vm.$refs.validate.validate();
      if (!validateResult) return;
      vm.$nextTick(async () => {
        await vm.$refs.validate.reset();
      });
    },
  },
};
</script>
