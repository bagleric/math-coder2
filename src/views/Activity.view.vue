<template>
  <div class="view-activity">
    <AppActivity :activityNum="activityNum" :moduleId="moduleId"></AppActivity>
  </div>
</template>

<script>
import AppActivity from "@/components/Activity.component.vue";
// import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";

export default {
  name: "ViewActivity",
  components: { AppActivity },
  props: {
    moduleId: { type: String, required: true },
    activityNum: { type: Number, required: false }
  },
  computed: {
    // theActivityId() {
    //     let theModuleId = this.moduleId;
    //     let theModule = store.find(item => {
    //       return theModuleId === item.id;
    //     });
    //     if (theModule.activities.length < this.activityNum) {
    //     }
    //     return theModule.activity[this.activityNum].id;
    //   }
    //   return this.activityId;
    // }
  }
};
</script>

<style scoped>
</style>
