import api from '@/api';
import * as MUTATIONS from './mutation-types';

export default {
  getUsers: ({ commit }) => {
    api.users.getUsers()
      .then((response) => {
        commit(MUTATIONS.SET_USERS, response.data);
      });
  },
};
