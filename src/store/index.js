import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: ["/", "/about", "/start/title", "/main"],
    index: 0,
    datasets: [
      {
        id: 1,
        textdata: "自己紹介"
      }
    ]
  },
  mutations: {
    increment: state => {
      state.index++;
    },
    decrement: state => {
      state.index--;
    },
    changeIndex: (state, n) => {
      state.index = n;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getPages(state) {
      return state.pages;
    },
    getIndex(state) {
      return state.index;
    },
    getDataSets(state) {
      return state.datasets;
    }
  }
});
