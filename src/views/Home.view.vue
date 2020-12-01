<template>
  <div class="home">
    <v-card :to="{ name: 'Modules' }">
      <v-card-title>Modules</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ViewHome",
  components: {},
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
  margin: 3em auto auto;
  justify-content: center;
}
</style>
