import { createStore } from 'vuex';

export default createStore({
  state: {
    // user: {
    //   id: 10,
    //   username: 'abc',
    // },
    user: null,
    isAuth: false,
  },
  mutations: {
    setIsAuth(state, {
      isAuth,
    }: { isAuth: boolean }) {
      state.isAuth = isAuth;
    },
  },
  actions: {
    LOGIN({ commit }) {
      commit('setIsAuth', { isAuth: true });
    },
  },
  modules: {
  },
});
