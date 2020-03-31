<template>
  <IndexHeader :text="parentsText"></IndexHeader>
</template>

<script>
import IndexHeader from "../components/IndexHeader";

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
      let index = this.$store.getters.getIndex;
      if (Number.isInteger(index)) {
        let data = this.$store.getters.getDataSets;
        this.parentsText = data[index].textdata;
      }
    }
  }
};
</script>

<style></style>
