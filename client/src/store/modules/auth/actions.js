import axios from 'axios';
import api from '@/api';
import * as MUTATIONS from './mutation-types';

export default {
  signup: ({ commit }, data) => {
    commit(MUTATIONS.AUTH_REQUEST);
    api.auth.signup(data)
      .then((response) => {
        const token = response.headers.authorization;

        localStorage.setItem('user-token', token);
        axios.defaults.headers.common.Authorization = token;

        commit(MUTATIONS.AUTH_SUCCESS, response);
      })
      .catch(() => {
        commit(MUTATIONS.AUTH_ERROR);
        localStorage.removeItem('user-token');
      });
  },
  signin: ({ commit }, credentials) => {
    commit(MUTATIONS.AUTH_REQUEST);
    api.auth.signin(credentials)
      .then((response) => {
        const token = response.headers.authorization;

        localStorage.setItem('user-token', token);
        axios.defaults.headers.common.Authorization = token;

        commit(MUTATIONS.AUTH_SUCCESS, response);
      })
      .catch(() => {
        commit(MUTATIONS.AUTH_ERROR);
        localStorage.removeItem('user-token');
      });
  },
  signout: ({ dispatch, commit }) => {
    dispatch('reset', null, { root: true });
    commit(MUTATIONS.AUTH_LOGOUT);
    localStorage.removeItem('user-token');
    delete axios.defaults.headers.common.Authorization;
  },
};
