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
import IdealImage from "../components/IdealImageContent";

export default {
  components: {
    StandardHeader,
    StandardContent,
    WorksContent,
    IdealImage
  },
  data: function() {
    return {
      parentsText: "init-text",
      index: this.$store.getters.getIndex,
      data: this.$store.getters.getDataSets,
      components: [
        "dummydummydummy",
        "StandardContent",
        "WorksContent",
        "IdealImage",
        "IdealImage"
      ]
    };
  },
  created: function() {
    this.importText();
  },
  mounted: function() {
    this.$store.watch(
      () => {
        return this.$store.state.index;
      },
      () => {
        this.index = this.$store.getters.getIndex;
        this.parentsText = this.data[this.index].textdata;
      }
    );
  },
  computed: {
    currentComponent: function() {
      return this.components[this.index];
    }
  },
  methods: {
    importText: function() {
      //ここのifいらない気が
      if (Number.isInteger(this.index)) {
        this.parentsText = this.data[this.index].textdata;
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
