<template>
  <v-row>
    <v-col cols="5" align="center">
      <v-img class="inline-flex" height="500" width="400" alt="自画像" src="../assets/myImage.jpg"></v-img>
    </v-col>

    <v-col cols="5">
      <v-row>
        <v-col v-for="(item, i) in getTexts" :key="i" cols="9">
          <v-card dark color="#607D8B">
            <v-card-title class="headline" v-text="item.text"></v-card-title>
            <v-card-subtitle class="title" v-text="item.subText"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: function() {
    return {
      dataSets: this.$store.getters.getDataSets,
      index: this.$store.getters.getIndex
    };
  },
  mounted: function() {
    this.$store.watch(
      () => {
        return this.$store.state.index;
      },
      () => {
        this.index = this.$store.getters.getIndex;
      }
    );
  },
  computed: {
    getTexts: function() {
      return this.dataSets[this.index].texts;
    }
  }
};
</script>

<style>
.inline-flex {
  display: inline-flex;
}
</style>
