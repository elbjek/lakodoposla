import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adverts: [],
  },
  mutations: {
  },
  actions: {
    getAdverts() {
      // axios.get()
    },
  },
  modules: {
  },
});
