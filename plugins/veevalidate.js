import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    };
  },
  message: '請輸入{_field_}',
  computesRequired: true,
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
