<template>
  <div>
    <StandardHeader :text="parentsText"></StandardHeader>
    <StandardContent></StandardContent>
  </div>
</template>

<script>
import StandardHeader from "../components/StandardHeader";
import StandardContent from "../components/StandardContent";
export default {
  components: {
    StandardHeader,
    StandardContent
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
