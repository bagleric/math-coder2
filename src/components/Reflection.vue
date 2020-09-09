<template>
  <!-- usage
<AppReflection :title="" :message=""></AppReflection>
  -->
  <div class="reflection">
    <div class="reflection-title">{{this.title}}</div>
    <div>{{this.message}}</div>
  </div>
</template>

<script>
export default {
  name: "AppReflection",
  props: {
    title: String,
    message: String
  }
};
</script>

<style scoped>
.reflection-title {
  font-weight: bold;
}

.reflection {
  padding: 1em;
}
</style>
