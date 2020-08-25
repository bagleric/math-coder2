<template>
  <div class="app-navigation primary-color">
    <app-logo></app-logo>
    <!-- TODO: Uncomment as needed -->
    <div>
      <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'Activity' }" class="nav-link">Activity</router-link>
    </div>
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
  padding: 1em;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
}

.nav-link {
  padding: 1em;
  text-decoration-line: none;
}

.nav-link:hover {
  background: inherit;
  opacity: 0.8;
  text-decoration-line: underline;
}
</style>
