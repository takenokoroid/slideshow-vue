<template>
  <StandardHeader :text="parentsText"></StandardHeader>
</template>

<script>
import StandardHeader from "../components/StandardHeader";
export default {
  components: {
    StandardHeader
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
