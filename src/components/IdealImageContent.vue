<template>
  <v-row>
    <v-col v-for="(item, i) in getTexts" :key="i" cols="12">
      <dl>
        <dt class="display-1 mb-3" v-text="item.text"></dt>
        <dd class="text-br ml-10 headline" v-text="item.subText"></dd>
      </dl>
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
.text-br {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>