import api from '@/api';
import * as MUTATIONS from './mutation-types';

export default {
  signup: ({ commit }, data) => {
    commit(MUTATIONS.AUTH_REQUEST);
    api.auth.signup(data)
      .then((response) => {
        localStorage.setItem('user_token', response.headers.get('Authorization'));
        commit(MUTATIONS.AUTH_SUCCESS, response);
      })
      .catch(() => {
        commit(MUTATIONS.AUTH_ERROR);
        localStorage.removeItem('user_token');
      });
  },
  signin: ({ commit }, credentials) => {
    commit(MUTATIONS.AUTH_REQUEST);
    api.auth.signin(credentials)
      .then((response) => {
        localStorage.setItem('user_token', response.headers.get('Authorization'));
        commit(MUTATIONS.AUTH_SUCCESS, response);
      })
      .catch(() => {
        commit(MUTATIONS.AUTH_ERROR);
        localStorage.removeItem('user_token');
      });
  },
  signout: ({ dispatch, commit }) => {
    dispatch('reset', null, { root: true });
    commit(MUTATIONS.AUTH_LOGOUT);
    localStorage.removeItem('user_token');
  },
};
