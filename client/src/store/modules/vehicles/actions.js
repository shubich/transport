import api from '@/api';
import * as MUTATIONS from './mutation-types';
import * as ALERT_MUTATIONS from '../alerts/mutation-types-global';

export default {
  getVehicles: ({ commit }) => {
    api.vehicles.getVehicles()
      .then((response) => {
        commit(MUTATIONS.SET_VEHICLES, response.data);
      });
  },
  getVehicle: ({ commit }, id) => {
    api.vehicles.getVehicle(id)
      .then((response) => {
        commit(MUTATIONS.SET_VEHICLE, response.data);
      });
  },
  addVehicle: ({ commit, dispatch }, data) => {
    api.vehicles.addVehicle(data)
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'ТС зарегистрировано!', { root: true });
        dispatch('getVehicles');
      })
      .catch(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          'Ошибка! Заполните все поля', { root: true });
      });
  },
  editVehicle: ({ commit, dispatch }, data) => {
    api.vehicles.editVehicle(data)
      .then(() => {
        dispatch('getVehicles');
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'ТС обновлено!', { root: true });
      });
  },
  deleteVehicle: ({ commit, dispatch }, id) => {
    api.vehicles.deleteVehicle(id)
      .then(() => {
        commit(ALERT_MUTATIONS.SET_ALERT_SUCCESS,
          'ТС удалено!', { root: true });
        dispatch('getVehicles');
      });
  },
};
