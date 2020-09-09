<template>
  <v-btn text :to="{ name: 'Home' }" class="app-logo">
    <span class="math-text">MATH-</span>
    <span class="code-text">coder</span>
  </v-btn>
</template>

<script lang="ts">
export default {
  name: "AppLogo"
};
</script>

<style scoped>
.app-logo .math-text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
}

.app-logo .code-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
}
</style>
