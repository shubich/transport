import mutations from './mutations';

export const initialState = () => ({
  alert: {},
});

export default {
  namespaced: true,
  state: initialState,
  mutations,
};
