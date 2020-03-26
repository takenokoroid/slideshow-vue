<template>
  <StartSlide :text="parentsText"></StartSlide>
</template>

<script>
import StartSlide from "../components/Heading";
export default {
  components: {
    StartSlide
  },
  data: () => {
    return {
      parentsText: "自己紹介"
    };
  }
};
</script>

<style></style>
