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
  props: {}
};
</script>

<style scoped>
</style>
