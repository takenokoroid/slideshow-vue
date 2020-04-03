<template>
  <v-row>
    <v-col cols="10" class="text-right display-4 font-weight-bold">{{ text }}</v-col>
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
.fill-width {
  width: 100%;
}
</style>
