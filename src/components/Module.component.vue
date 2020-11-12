<template>
  <div class="module">
    <h1>{{ theModule.name }}</h1>
    <span>{{ theModule.id }}</span>
    <h2>{{ theModule.description }}</h2>
    <span v-for="standard in theModule.standards" v-bind:key="standard.id">
      <div>Name: {{ standard.name }}</div>
      <div>ID: {{ standard.id }}</div>
      <div>Description: {{ standard.description }}</div>
    </span>
    <!-- TODO: add premodule quiz -->
    <v-btn
      :to="{
        name: 'PreActivity',
        params: { moduleId }
      }"
      >Start</v-btn
    >
    <!-- <span v-for="activity in theModule.activities" v-bind:key="activity.id">
      <v-card
        :to="{
          name: 'Activities',
          params: { moduleId }
        }"
      >
        <v-card-title>{{ activity.name }} </v-card-title>
      </v-card>
    </span> -->
    <!-- TODO: add post module quiz -->
  </div>
</template>

<script>
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";
export default {
  name: "AppModule",
  components: {},
  props: {
    moduleId: { required: true, type: String }
  },
  data: () => ({
    //TODO actually get this from the store/database with the moduleId
    theModule: store[0]
  })
};
</script>

<style scoped>
.activity-view {
  height: 100%;
  display: grid;
  grid-template:
    "canvas" 2fr
    "code" 1fr
    / auto;
}
</style>
