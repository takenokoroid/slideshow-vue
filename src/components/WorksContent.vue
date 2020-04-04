<template>
  <v-row>
    <v-col v-for="(item, i) in items" :key="i" cols="6">
      <v-card :color="item.color" dark :href="item.link" target="_blank">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="item.title"></v-card-title>
            <v-card-subtitle class="text-br title" v-text="item.subtitle"></v-card-subtitle>
          </div>
          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="item.src"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#607D8B",
        src: require("../assets/ioroiFridge.png"),
        title: "IoroiFridge",
        subtitle:
          "使用技術：Vue.js+Firebase\n研究室の冷蔵庫を管理する\nはじめて作ったWEBアプリ",
        link: "https://takenokoroid.github.io/ioroifridge/"
      },
      {
        color: "#607D8B",
        src: require("../assets/HoCTools.png"),
        title: "Heart of Crown点数計算ツール",
        subtitle:
          "使用技術：Vue.js\nとあるゲームの点数計算ツール\n現在大規模改修中",
        link: "https://takenokoroid.github.io/controlhoc/"
      },
      {
        color: "#607D8B",
        src: require("../assets/portfolio.png"),
        title: "ポートフォリオ",
        subtitle:
          "使用技術：Vue.js+Vuetify\n自分のポートフォリオ\nCSSフレームワークの使用により綺麗に仕上がった",
        link: "https://takenokoroid.github.io/portfolio/#/"
      }
    ]
  })
};
</script>

<style>
.text-br {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
