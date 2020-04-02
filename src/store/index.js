import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [
      "/",
      "/main/myprofile",
      "/main/works",
      "/main/IdealImage",
      "/main/wantToDo"
    ],
    index: 0,
    datasets: [
      {
        pageNumber: 0,
        textdata: "自己PR"
      },
      {
        pageNumber: 1,
        textdata: "自己紹介",
        link: require("../assets/myImage.jpg")
      },
      {
        pageNumber: 2,
        textdata: "開発してきたもの"
      },
      {
        pageNumber: 3,
        textdata: "理想のエンジニア像",
        texts: [
          {
            text: "・携わったWEBサービスで多くの人に良い体験を届けたい",
            subText:
              "WEB開発経験からフィードバックの大事さを知った\nユーザーのニーズに答えるサービスを"
          },
          {
            text: "・周りを巻き込み積極的に成長するWEBエンジニア",
            subText:
              "流れのはやいWEB業界では成長することは必須\nWEB開発は一人では難しい。チームでの成長が大切"
          }
        ]
      },
      {
        pageNumber: 4,
        textdata: "良い体験を提供するには",
        texts: [
          {
            text: "ユーザーのニーズにマッチしたサービスの構築",
            subText:
              "UXの高いUI\nユーザーの声を分析し、クリティカルな課題解決をしていく"
          },
          {
            text: "可読性の高いコーディング",
            subText:
              "フィードバックに対して迅速な対応ができるように\n長く愛されるサービスになるために、保守性を高く維持する"
          }
        ]
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
