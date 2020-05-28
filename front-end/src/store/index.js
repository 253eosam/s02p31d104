import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: {
      themeColor: "grey lighten-4",
      drawer: false,
    },
    user: {
      jwt: null, // 세션 유지 기능
      auth: false, // 인증 변수로 사용할 예정
      info: {
        img: null,
        id: null,
        name: null,
        email: null,
        phoneNumber: null,
        birthday: null,
        type: null, // 개인 : Poerson account , 부서 : Department account
      },
    },
  },
  // computed로 등록
  getters: {
    getUserInfo(state) {
      return state.user.info;
    },
    getThemeColor(state) {
      return state.ui.themeColor;
    },
    getDrawer(state) {
      return state.ui.drawer;
    },
    userAuth(state) {
      return state.user.auth;
    },
  },
  // method로 등록 (동기)
  mutations: {
    switchDrawer(state, payload = !state.ui.drawer) {
      return (state.ui.drawer = payload);
    },
    login(state, payload) {
      state.user.info = payload;
      return (state.user.auth = true);
    },
    logout(state, payload = false) {
      state.user.info = null;
      return (state.user.auth = payload);
    },
  },
  actions: {},
  modules: {},
});
