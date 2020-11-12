<template>
  <div class="view-module">
    <AppModule :moduleId="moduleId"></AppModule>
    <!-- <router-view :key="$route.path" /> -->
  </div>
</template>

<script>
import AppModule from "@/components/Module.component.vue";
export default {
  name: "ViewModule",
  components: {
    AppModule,
  },
  props: {
    moduleId: { required: true, type: String },
  },
};
</script>

<style scoped>
.view-module {
  display: grid;
  margin: 3em auto auto;
  justify-content: center;
}
</style>
