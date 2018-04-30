import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [MUTATIONS.AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.headers.get('Authorization');
    state.hasLoadedOnce = true;
  },
  [MUTATIONS.AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [MUTATIONS.AUTH_LOGOUT]: (state) => {
    state.token = '';
  },
  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
