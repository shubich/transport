import api from '@/api';
import * as MUTATIONS from './mutation-types';

export default {
  getStops: ({ commit }) => {
    api.stops.getStops()
      .then((response) => {
        commit(MUTATIONS.SET_STOPS, response.data);
      });
  },
  addStop: ({ dispatch }, data) => {
    api.stops.addStop(data)
      .then(() => {
        dispatch('getStops');
      });
  },
  editStop: ({ dispatch }, data) => {
    api.stops.editStop(data)
      .then(() => {
        dispatch('getStops');
      });
  },
  deleteStop: ({ dispatch }, name) => {
    api.stops.deleteStop(name)
      .then(() => {
        dispatch('getStops');
      });
  },
};
