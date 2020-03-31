import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: ["/", "/main/myprofile", "/main/works"],
    index: 0,
    datasets: [
      {
        id: 0,
        textdata: "自己紹介"
      },
      {
        id: 1,
        textdata: "自己紹介",
        link: require("../assets/myImage.jpg")
      },
      {
        id: 2,
        textdata: "開発してきたもの",
        link: require("../assets/myImage.jpg")
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
