<template>
  <v-flex class="fixed-center">
    <v-btn
      class="mr-5"
      color="success"
      text
      icon
      height="80"
      width="80"
      @click="backPage"
    >
      <v-icon size="80">mdi-arrow-left-thick</v-icon>
    </v-btn>
    <v-btn
      class="ml-5"
      color="success"
      text
      icon
      height="80"
      width="80"
      @click="nextPage"
    >
      <v-icon size="80">mdi-arrow-right-thick</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  data: function() {
    return {
      pages: this.$store.getters.getPages
    };
  },
  methods: {
    /**
     * pages:vuexのpages[]をgetしたやつ
     * index:vuexのindexをgetしたやつ
     *
     * storeにあるindexをインクリメント
     * indexをget
     * pages[index]で場所を指定して注入
     * もっとスマートに書き直すかも...
     */
    nextPage: function() {
      this.$store.commit("increment");
      let index = this.$store.getters.getIndex;
      if (index < this.pages.length) {
        console.log(index);
        this.$router.push(this.pages[index]);
      } else {
        this.$store.commit("decrement");
      }
    },
    backPage: function() {
      this.$store.commit("decrement");
      let index = this.$store.getters.getIndex;
      if (index > -1) {
        console.log(index);
        this.$router.push(this.pages[index]);
      } else {
        this.$store.commit("increment");
      }
    },
    keyAction(e) {
      if (e.keyCode == 37) {
        this.backPage();
      } else if (e.keyCode == 39) {
        this.nextPage();
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keyAction);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyAction);
  }
};
</script>

<style>
.fixed-center {
  position: fixed;
  bottom: 80px;
  width: 100%;
  text-align: center;
}
</style>
