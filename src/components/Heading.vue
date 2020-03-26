<template>
  <v-row>
    <v-flex md10 class="text-right  display-4">
      {{ text }}
    </v-flex>
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
