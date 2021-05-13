import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adverts: [],
    categories: [],
    positions: [],
    advert: null,
    loading: false,
  },
  mutations: {
    loading(state, status) {
      state.loading = status;
    },
    SET_ADVERTS(state, adverts) {
      state.adverts = adverts;
    },

    SET_ADVERT(state, advert) {
      state.advert = advert;
    },

    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_POSITIONS(state, positions) {
      state.positions = positions;
    },
  },
  actions: {
    getAdverts({ commit }) {
      commit('loading', true);
      axios.get('http://localhost:3000/adverts')
        .then((response) => {
          commit('SET_ADVERTS', response.data);
          commit('loading', false);
        });
    },

    getAdvert({ commit }, id) {
      commit('loading', true);
      axios.get(`http://localhost:3000/adverts/${id}`)
        .then((response) => {
          console.log(response, id);
          commit('loading', false);
          commit('SET_ADVERT', response.data);
        });
    },

    getCategories({ commit }) {
      axios.get('http://localhost:3000/categories')
        .then((response) => {
          commit('SET_CATEGORIES', response.data);
        });
    },
    getPositions({ commit }) {
      axios.get('http://localhost:3000/positions')
        .then((response) => {
          commit('SET_POSITIONS', response.data);
        });
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
  modules: {
  },
});
