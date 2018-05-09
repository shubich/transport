import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import stops from './modules/stops';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    stops,
  },
  actions: {
    reset({ commit }) {
      commit('auth/RESET');
    },
  },
  strict: debug,
});
