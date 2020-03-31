<template>
  <div class="fill-width">
    <StandardHeader :text="parentsText"></StandardHeader>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import StandardHeader from "../components/StandardHeader";
import StandardContent from "../components/StandardContent";
import WorksContent from "../components/WorksContent";

export default {
  components: {
    StandardHeader,
    StandardContent,
    WorksContent
  },
  data: function() {
    return {
      parentsText: "init-text",
      index: this.$store.getters.getIndex,
      components: ["dummydummydummy", "StandardContent", "WorksContent"]
    };
  },
  computed: {
    currentComponent: function() {
      return this.components[this.index];
    }
  },
  created: function() {
    this.importText();
  },
  methods: {
    importText: function() {
      //書き直す
      let index = this.$store.getters.getIndex;
      if (Number.isInteger(index)) {
        let data = this.$store.getters.getDataSets;
        this.parentsText = data[index].textdata;
      }
    }
  }
};
</script>

<style>
.fill-width {
  width: 100%;
}
</style>
