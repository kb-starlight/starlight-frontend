import { createStore } from "vuex";
const store = createStore({
  state: {
    // eslint-disable-next-line prettier/prettier
        userInfo: new Array(),    
    isLogin: false,
    popup: true,
  },
  mutations: {
    addInfo(state, obj) {
      console.log(state);
      console.log("=========");
      console.log(obj);
      state.userInfo.push(obj);
    },
    resetInfo(state) {
      state.userInfo.splice(0, 1);
    },
    onOff(state) {
      state.isLogin = !state.isLogin;
    },
    popuponOff(state){
      state.popup = !state.popup;
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
    getPopup(state){
      return state.popup;
    }
  },
});
export default store;
