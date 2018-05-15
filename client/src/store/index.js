import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import stops from './modules/stops';
import routes from './modules/routes';
import vehicles from './modules/vehicles';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    stops,
    routes,
    vehicles,
  },
  actions: {
    reset({ commit }) {
      commit('auth/RESET');
      commit('stops/RESET');
      commit('routes/RESET');
      commit('vehicles/RESET');
    },
  },
  strict: debug,
});
