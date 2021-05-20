import Vue from 'vue';
import {
  ValidationObserver, ValidationProvider, extend, configure,
} from 'vee-validate';
import { email, regex } from 'vee-validate/dist/rules';

configure({
  // classes: {
  //   invalid: 'form_input_is_invalid',
  // },
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    };
  },
  message: '請輸入正確{_field_}',
  computesRequired: true,
});

extend('regex', {
  ...regex,
  message: '請輸入正確密碼格式',
});

extend('email', {
  ...email,
  message: '請輸入正確 Email',
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
