import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_ROUTES]: (state, routes) => {
    state.routes = routes;
  },
  [MUTATIONS.SET_ROUTE]: (state, route) => {
    state.route = route;
  },
  [MUTATIONS.SET_ROUTES_BY_STOPS](state, routes) {
    state.routesByStops = routes;
  },
  [MUTATIONS.SET_WAY]: (state, way) => {
    state.way = way;
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
