import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const initialState = () => ({
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false,
});

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
