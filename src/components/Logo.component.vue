<template>
  <v-btn text disabled :to="{ name: 'Home' }" class="app-logo">
    <span class="math-text">MATH-</span>
    <span class="code-text">coder</span>
    <v-icon color="primary"> mdi-home-outline </v-icon>
  </v-btn>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "AppLogo",
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      anime({
        targets: ".app-logo span",
        rotate: "2turn",
        duration: 2000,
      });
    });
  },
};
</script>

<style scoped>
.app-logo .math-text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.25em;
  font-weight: bolder;
}

.app-logo .code-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: 1.5em;
}
</style>
