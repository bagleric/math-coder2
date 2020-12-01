<template>
  <div class="view-modules">
    <AppModules></AppModules>
  </div>
</template>

<script>
import AppModules from "@/components/Modules.component.vue";

export default {
  name: "ViewModules",
  components: { AppModules },
  props: {},
};
</script>

<style scoped>
.view-modules {
  display: grid;
  margin: 3em auto auto;
  justify-content: center;
}
</style>
