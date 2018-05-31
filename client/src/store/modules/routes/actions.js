import api from '@/api';
import * as MUTATIONS from './mutation-types';
import * as ALERT_MUTATIONS from '../alerts/mutation-types-global';

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
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'Маршрут добавлен!', { root: true });
      })
      .catch(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          'Ошибка! Заполните все поля', { root: true });
      });
  },
  editRoute: ({ commit }, data) => {
    api.routes.editRoute(data)
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'Маршрут обновлён!', { root: true });
      })
      .catch(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          'Ошибка! Заполните все поля', { root: true });
      });
  },
  deleteRoute: ({ commit, dispatch }, id) => {
    api.routes.deleteRoute(id)
      .then(() => {
        dispatch('getRoutes');
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'Маршрут удален!', { root: true });
      })
      .catch(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          'Ошибка! Попробуйте позже', { root: true });
      });
  },
  getRoutesByStops({ commit }, way) {
    api.routes.getRoutesByStops(way)
      .then((res) => {
        commit(MUTATIONS.SET_ROUTES_BY_STOPS, res.data.routes);
        commit(MUTATIONS.SET_WAY, res.data.way);
      });
  },
};
