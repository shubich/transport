import api from '@/api';
import * as MUTATIONS from './mutation-types';

export default {
  getRoutes: ({ commit }) => {
    api.routes.getRoutes()
      .then((response) => {
        commit(MUTATIONS.SET_ROUTES, response.data);
      });
  },
  addRoute: (store, data) => {
    api.routes.addRoute(data);
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
