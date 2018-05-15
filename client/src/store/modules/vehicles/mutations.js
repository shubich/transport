import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_VEHICLES]: (state, vehicles) => {
    state.vehicles = vehicles;
  },
  [MUTATIONS.SET_VEHICLE]: (state, vehicle) => {
    state.vehicle = vehicle;
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
