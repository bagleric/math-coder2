<template>
  <div class="home">
    <router-link :to="{ name: 'PreActivity' }" class="card secondary-color">Pre Activity</router-link>
    <router-link :to="{ name: 'Activity' }" class="card secondary-color">Activity</router-link>
    <router-link :to="{ name: 'PostActivity' }" class="card secondary-color">Post Activity</router-link>
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

.home {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
