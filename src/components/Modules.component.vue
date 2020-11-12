<template>
  <div class="modules">
    <span v-for="item in modules" v-bind:key="item.id">
      <v-card :to="{ name: 'Module', params: { moduleId: item.id } }">
        <v-card-title>{{ item.name }}</v-card-title>
      </v-card>
    </span>
  </div>
</template>

<script>
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";
export default {
  name: "AppModules",
  components: {},
  props: {},
  data: () => ({
    modules: store
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
