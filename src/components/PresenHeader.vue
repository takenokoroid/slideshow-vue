<template>
  <v-row>
    <span class="display-3 under pl-5 pr-10">
      {{ text }}
    </span>
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
  border-bottom: solid 3px #87cefa;
}
</style>
