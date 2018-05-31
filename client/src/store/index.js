import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import stops from './modules/stops';
import routes from './modules/routes';
import vehicles from './modules/vehicles';
import rides from './modules/rides';
import users from './modules/users';
import alerts from './modules/alerts';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    stops,
    routes,
    vehicles,
    users,
    rides,
    alerts,
  },
  actions: {
    reset({ commit }) {
      commit('auth/RESET');
      commit('stops/RESET');
      commit('routes/RESET');
      commit('vehicles/RESET');
      commit('users/RESET');
      commit('rides/RESET');
      commit('alerts/RESET');
    },
  },
  strict: debug,
});
