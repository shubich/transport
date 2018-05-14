import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_ROUTES]: (state, routes) => {
    state.routes = routes;
  },
  [MUTATIONS.SET_ROUTE]: (state, route) => {
    state.route = route;
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
