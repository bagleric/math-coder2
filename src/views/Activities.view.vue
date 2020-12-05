<template>
  <div class="view-activities">
    <AppActivities
      :moduleId="moduleId"
      :activityNum="activityNum"
    ></AppActivities>
  </div>
</template>

<script>
import AppActivities from "@/components/Activities.component.vue";

export default {
  name: "ViewActivities",
  components: { AppActivities },
  props: {
    moduleId: { required: true, type: String },
    activityNum: { required: false, type: Number, default: 0 },
  },
};
</script>

<style scoped>
.view-activities {
  height: 100%;
}

.activities {
  height: 100%;
}
</style>
