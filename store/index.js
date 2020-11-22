// import Vue from 'vue';
// import { API } from '../plugins/api';

export const state = () => ({
  page_loading: false,
});
export const mutations = {
  PAGELOAD(state, payload) {
    state.page_loading = payload;
  },
};
export const actions = {
  async page_load(context, status) {
    context.commit('PAGELOAD', status);
  },
};
export const getters = {
  page_loading(state) {
    return state.page_loading;
  },
};
