<template>
  <div class="view-activity">
    <AppActivity
      :moduleId="moduleId"
      :activity="c_activity"
      @activity-complete="completeActivity"
    ></AppActivity>
  </div>
</template>

<script>
import AppActivity from "@/components/Activity.component.vue";
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";

export default {
  name: "ViewActivity",
  components: { AppActivity },
  props: {
    moduleId: { type: String, required: true },
    activityNum: { type: Number, required: false },
  },
  data: () => ({
    activity: {},
    module: {},
  }),
  computed: {
    c_module() {
      let theModuleId = this.moduleId;
      return store.find((item) => {
        return item.id === theModuleId;
      });
    },
    c_activity() {
      console.log(this.c_module);
      if (
        this.activityNum >= 0 &&
        this.c_module.activities.length > this.activityNum
      ) {
        return this.c_module.activities[this.activityNum];
      }
      // return {};
      throw `Error, activity number [ ${this.activityNum} ] is not valid. Number of activities [ ${this.c_module.activities.length} ]`;
    },
  },
  beforeCreate() {
    console.log(this.$route.params);
    let theModuleId = this.$route.params.moduleId;
    this.module = store.find((item) => {
      return item.id === theModuleId;
    });
    console.log(this.module);
    if (this.module.activities.length <= this.$route.params.activityNum) {
      this.$route.push({
        name: "PostActivity",
        moduleId: this.$route.moduleId,
      });
    }
  },
  methods: {
    completeActivity(code) {
      console.log({ code });
      if (this.activityNum + 1 < this.c_module.activities.length) {
        this.$router.push({
          name: "Activity",
          params: {
            moduleId: this.moduleId,
            activityNum: this.activityNum + 1,
          },
        });
      } else {
        this.$router.push({
          name: "PostActivity",
          params: {
            moduleId: this.moduleId,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.view-activity {
  height: 100%;
}
</style>
