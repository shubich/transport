import api from '@/api';
import * as MUTATIONS from './mutation-types';

export default {
  getUserRides: ({ commit }) => {
    api.rides.getUserRides()
      .then((response) => {
        commit(MUTATIONS.SET_RIDES, response.data);
      });
  },
  addRide: (store, data) => {
    api.rides.addRide(data);
  },
};
