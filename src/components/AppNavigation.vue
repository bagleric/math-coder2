<template>
  <div class="app-navigation primary-color">
    <app-logo></app-logo>
    <!-- TODO: Uncomment as needed -->
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'Activity' }">Activity</router-link>
    </div>
    <!-- <router-link :to="{ name: 'PostActivity' }">PostActivity</router-link> -->
    <!-- <router-link :to="{ name: 'PreActivity' }">PreActivity</router-link> -->
    <!-- <router-link :to="{ name: 'TableOfContents' }">TableOfContents</router-link> -->
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
</style>
