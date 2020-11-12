<template>
  <div class="activities">
    <span v-if="!activityNum || activityNum === 0">
      <h1>
        Welcome
      </h1>
      <v-btn @click="incrementIter()">Start Activity</v-btn>
    </span>
    <AppActivity
      v-else-if="activityNum <= activities.length"
      :moduleId="moduleId"
      :activityNum="activityNum - 1"
      @activity-complete="completeActivity"
    ></AppActivity>
    <span v-else>
      <span> Well done! You finished the module.</span>
      <v-btn :to="{ name: 'Home' }">Continue</v-btn>
    </span>
    <!-- <v-card :to="{ name: 'Activity', props: { moduleId: activity.id } }">
        <v-card-title>{{ activity.name }}</v-card-title>
      </v-card> -->
    <!-- <router-view :key="$route.path" /> -->
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
    activityNum: { required: false, type: Number, default: 0 }
  },
  data: () => ({
    iter: this.activityNum
    // theModule
  }),
  computed: {
    activities() {
      console.log("test");
      let moduleId = this.moduleId;
      let theModule = store.find(item => {
        return item.id == moduleId;
      });
      return theModule.activities;
    }
    // theIter() {
    //   if (this.activityNum) {
    //     // aID = this.activityId;
    //     iter = this.theModule.activities.[this.activityNum];
    //     //  findIndex(item => {
    //     //   return item.id === aID;
    //     // });
    //   }
    //   return iter;
    //   // if (this.activityId) return this.activityId;
    //   // return theModule.activities[0].id;
    // }
  },
  methods: {
    completeActivity(code) {
      console.log(code);
      this.incrementIter();
    },
    incrementIter() {
      this.activityNum++;
    },
    decrementIter() {
      if (this.activityNum > 1) this.activityNum--;
    }
  }
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
