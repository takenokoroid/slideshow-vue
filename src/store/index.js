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
      "/main/userDueTo",
      "/main/engineerDueTo",
      "/main/end"
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
        link: require("../assets/myImage.jpg"),
        texts: [
          {
            text: "趣味",
            subText: "釣り ボードゲーム プログラミング"
          },
          {
            text: "好きな言語",
            subText: "Go Vue.js"
          },
          {
            text: "興味あるサービス",
            subText: "Firebase Docker"
          }
        ]
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
              "WEB開発は一人では難しい。チームでの成長が大切\n行き詰ったとき助け合い、サービスを良くしていく"
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
              "フィードバックに対して迅速な対応ができるように\n長く愛されるサービスのためにも保守性の向上"
          }
        ]
      },
      {
        pageNumber: 5,
        textdata: "なぜ学び、伝播させていくのか",
        texts: [
          {
            text: "WEB業界全体の成長速度を追従・牽引するため",
            subText:
              "より良いUXを提供するために優れたコーディング力は必須\nサービスに対して適切な言語を用いる"
          },
          {
            text: "周りを巻き込んで成長していく",
            subText:
              "大規模サービスは一人では動かせない\nみんながやりがいを感じられる環境を"
          }
        ]
      },
      {
        pageNumber: 6,
        textdata: "結論",
        texts: [
          {
            text:
              "お客様のデータ・生の声をフィードバックし、成長しながらサービスをより良く開発していく",
            subText:
              "トレンドに敏感に対応し、多くの人に長く喜ばれるサービスを作っていきたい"
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
