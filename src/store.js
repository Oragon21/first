import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formTitle: 'HYPE BEAST PRODUCTS',

  },
  mutations: {},
  actions: {},
  getters: {
    getTitle() {
      return this.state.formTitle;
    },
  },
});
