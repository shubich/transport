import axios from 'axios';
import api from '@/api';
import * as MUTATIONS from './mutation-types';
import * as ALERT_MUTATIONS from '../alerts/mutation-types-global';

export default {
  signup: ({ commit }, data) => {
    if (!data.cardNumber
        || !data.loginName
        || !data.password
        || !data.password
        || !data.confirmPassword
    ) {
      commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
        'Ошибка! Заполните все поля', { root: true });
      return;
    }
    if (data.password !== data.confirmPassword) {
      commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
        'Ошибка! Пароли не совпадают', { root: true });
      return;
    }
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
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          `Ошибка! Пользователь "${data.loginName}" уже существует`, { root: true });
      });
  },
  signin: ({ commit }, credentials) => {
    if (!credentials.loginName || !credentials.password) {
      commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
        'Ошибка! Заполните все поля', { root: true });
      return;
    }
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
        commit(ALERT_MUTATIONS.SET_ALERT_DANGER,
          'Ошибка! Вы ввели неверные данные', { root: true });
      });
  },
  signout: ({ dispatch, commit }) => {
    dispatch('reset', null, { root: true });
    commit(MUTATIONS.AUTH_LOGOUT);
    localStorage.removeItem('user-token');
    delete axios.defaults.headers.common.Authorization;
  },
};
