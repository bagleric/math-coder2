<template>
  <div class="activities">
    <span v-if="!c_iter || c_iter < 0">
      <h1>Welcome</h1>
      <v-btn color="primary" outlined @click="incrementIter()"
        >Start Activity</v-btn
      >
    </span>
    <AppActivity
      v-else-if="c_iter < activities.length"
      :moduleId="moduleId"
      :activityNum="c_iter"
      @activity-complete="completeActivity"
    ></AppActivity>
    <span v-else>
      <span> Well done! You finished the module.</span>
      <v-btn
        color="primary"
        outlined
        :to="{ name: 'PostActivity', params: { moduleId: this.moduleId } }"
      >
        Continue
      </v-btn>
    </span>
  </div>
</template>

<script>
import AppActivity from "@/components/Activity.component.vue";
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";
export default {
  name: "AppActivities",
  components: { AppActivity },
  props: {
    moduleId: { required: true, type: String },
    activityNum: { required: false, type: Number, default: -1 },
  },
  data: () => ({
    iter: 0,
  }),
  computed: {
    c_iter() {
      return this.iter;
    },
    activities() {
      let moduleId = this.moduleId;
      let theModule = store.find((item) => {
        return item.id == moduleId;
      });
      return theModule.activities;
    },
  },
  created() {
    this.iter = this.activityNum;
  },
  methods: {
    completeActivity(code) {
      console.log({ code });
      this.incrementIter();
    },
    incrementIter() {
      this.iter++;
    },
    decrementIter() {
      if (this.iter > 0) this.iter--;
    },
  },
};
</script>

<style scoped>
.activities {
  height: 100%;
}
</style>
