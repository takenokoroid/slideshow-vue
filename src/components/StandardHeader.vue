<template>
  <v-row>
    <span class="display-4 under pl-5 pr-10 mb-10 mt-10" v-text="text"></span>
  </v-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "TextTextText"
    }
  }
};
</script>

<style>
.under {
  border-bottom: solid 5px #00c853;
}
</style>
