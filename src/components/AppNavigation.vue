<template>
  <div class="app-navigation">
    <app-logo></app-logo>
    <!-- TODO: Uncomment as needed -->
    <v-btn :to="{ name: 'Activity' }">Activity</v-btn>
  </div>
</template>

<script lang="ts">
import AppLogo from "@/components/AppLogo.vue";
// import { Component, Vue } from "vue-property-decorator";
// import {} from "@/components/AppLogo";
export default {
  name: "AppNavigation",
  components: {
    AppLogo
  }
};
</script>

<style scoped>
.app-navigation {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
  align-items: center;
  grid-auto-flow: column;
}
</style>
