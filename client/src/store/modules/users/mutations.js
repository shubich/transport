import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_USERS]: (state, users) => {
    state.users = users;
  },
  [MUTATIONS.SET_ME]: (state, me) => {
    state.me = me;
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
