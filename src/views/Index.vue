<template>
  <IndexHeader :text="parentsText"></IndexHeader>
</template>

<script>
import IndexHeader from "../components/IndexHeader";

const index = [0];

export default {
  components: {
    IndexHeader
  },
  data: () => {
    return {
      parentsText: "init-text"
    };
  },
  created: function() {
    this.importText();
  },
  methods: {
    importText: function() {
      if (this.$store.getters.getIndex == index[0]) {
        let data = this.$store.getters.getDataSets;
        this.parentsText = data[0].textdata;
      }
    }
  }
};
</script>

<style></style>
