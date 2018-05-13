import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const initialState = () => ({
  routes: [],
});

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
