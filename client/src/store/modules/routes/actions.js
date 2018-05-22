import api from '@/api';
import * as MUTATIONS from './mutation-types';
import * as ALERT_MUTATIONS from '../alerts/mutation-types';

export default {
  getRoutes: ({ commit }) => {
    api.routes.getRoutes()
      .then((response) => {
        commit(MUTATIONS.SET_ROUTES, response.data);
      });
  },
  getRoute: ({ commit }, id) => {
    api.routes.getRoute(id)
      .then((response) => {
        commit(MUTATIONS.SET_ROUTE, response.data);
      });
  },
  addRoute: ({ commit }, data) => {
    api.routes.addRoute(data)
      .then((response) => {
        commit(`alerts/${ALERT_MUTATIONS.SET_ALERT}`,
          { type: 'success', message: response.data }, { root: true });
      })
      .catch((err) => {
        commit(`alerts/${ALERT_MUTATIONS.SET_ALERT}`,
          { type: 'danger', message: err.response.data }, { root: true });
      });
  },
  editRoute: (store, data) => {
    api.routes.editRoute(data);
  },
  deleteRoute: ({ dispatch }, id) => {
    api.routes.deleteRoute(id)
      .then(() => {
        dispatch('getRoutes');
      });
  },
};
