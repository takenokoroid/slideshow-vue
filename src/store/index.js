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
        textdata: "入社してやりたいこと",
        texts: [
          {
            text: "言語の置き換え業務",
            subText:
              "サービスをさらに知る良い機会になる\nレガシー言語の知識が身につく"
          },
          {
            text: "開発・保守・運用",
            subText:
              "サービスを通してユーザーに寄り添った技術を学ぶ\nランニングしていく難しさの体験"
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
