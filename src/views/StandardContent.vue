<template>
  <PresenHeader :text="parentsText"></PresenHeader>
</template>

<script>
import PresenHeader from "../components/StandardHeader";
export default {
  components: {
    PresenHeader
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
      //書き直す
      if (this.$store.getters.getIndex == 1) {
        let data = this.$store.getters.getDataSets;
        this.parentsText = data[0].textdata;
      }
    }
  }
};
</script>

<style></style>
