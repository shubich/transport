import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_RIDES]: (state, routes) => {
    state.routes = routes;
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
