<template>
  <div class="home">
    <v-card :to="{ name: 'PreActivity' }">
      <v-card-title>Pre Activity</v-card-title>
    </v-card>
    <v-card :to="{ name: 'Activity' }">
      <v-card-title>Activity</v-card-title>
    </v-card>
    <v-card :to="{ name: 'PostActivity' }">
      <v-card-title>Post Activity</v-card-title>
    </v-card>
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

.v-card {
  display: grid;
  padding: 1em;
  margin: 1em;
  place-content: center;
  text-decoration: none;
}

.home {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
