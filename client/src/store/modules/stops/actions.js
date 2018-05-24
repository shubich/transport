import api from '@/api';
import * as MUTATIONS from './mutation-types';
import * as ALERT_MUTATIONS from '../alerts/mutation-types-global';

export default {
  getStops: ({ commit }) => {
    api.stops.getStops()
      .then((response) => {
        commit(MUTATIONS.SET_STOPS, response.data);
      });
  },
  addStop: ({ commit, dispatch }, data) => {
    api.stops.addStop(data)
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'Остановка добавлена!', { root: true });
        dispatch('getStops');
      })
      .catch(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          'Ошибка! Заполните все поля', { root: true });
      });
  },
  editStop: ({ commit, dispatch }, data) => {
    api.stops.editStop(data)
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'Остановка обновлена!', { root: true });
        dispatch('getStops');
      });
  },
  deleteStop: ({ commit, dispatch }, name) => {
    api.stops.deleteStop(name)
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'Остановка удалена!', { root: true });
        dispatch('getStops');
      });
  },
};
