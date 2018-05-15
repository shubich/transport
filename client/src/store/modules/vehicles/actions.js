import api from '@/api';
import * as MUTATIONS from './mutation-types';

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
  addVehicle: ({ dispatch }, data) => {
    api.vehicles.addVehicle(data)
      .then(() => {
        dispatch('getVehicles');
      });
  },
  editVehicle: ({ dispatch }, data) => {
    api.vehicles.editVehicle(data)
      .then(() => {
        dispatch('getVehicles');
      });
  },
  deleteVehicle: ({ dispatch }, id) => {
    api.vehicles.deleteVehicle(id)
      .then(() => {
        dispatch('getVehicles');
      });
  },
};
