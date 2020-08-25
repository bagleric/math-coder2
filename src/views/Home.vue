<template>
  <div class="home">
    <div class="welcome-container">
      welcome to
      <span class="coder-text">math-coder</span>
    </div>
    <div class="start-activity-container">
      <router-link :to="{ name: 'Activity' }" class="button-link">Activity</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.coder-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: larger;
}
</style>
