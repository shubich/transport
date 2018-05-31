import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_RIDES]: (state, rides) => {
    state.rides = rides;
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
