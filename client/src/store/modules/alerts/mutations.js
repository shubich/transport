import * as MUTATIONS from './mutation-types';
import { initialState } from './';

export default {
  [MUTATIONS.SET_ALERT]: (state, alert) => {
    state.alert = alert;
  },

  [MUTATIONS.SET_ALERT_SUCCESS]: (state, message) => {
    state.alert = { message, type: 'success' };
  },

  [MUTATIONS.SET_ALERT_DANGER]: (state, message) => {
    state.alert = { message, type: 'danger' };
  },

  [MUTATIONS.RESET](state) {
    const defaultState = initialState();
    Object.keys(defaultState).forEach((key) => {
      state[key] = defaultState[key];
    });
  },
};
