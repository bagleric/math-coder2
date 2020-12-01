<template>
  <div class="activity-view">
    <!-- <h2>{{ c_activity.name }}</h2> -->
    <header class="blocks-header">Blocks</header>
    <header class="prompt"></header>
    <AppBlockly class="app-blockly" ref="activityBlockly">
      <block
        v-for="theBlock in c_activity.blocks"
        :key="theBlock.type"
        :type="theBlock.type"
      ></block>
    </AppBlockly>
    <div class="view" id="code">
      <button v-on:click="showCode()">Show JavaScript</button>
      <button v-on:click="submitCode()">Done</button>
      <pre v-html="code"></pre>
    </div>
  </div>
</template>

<script>
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";
import AppBlockly from "@/components/Blockly.component.vue";
import BlocklyJS from "blockly/javascript";
import "@/blocks/block1.js";
export default {
  name: "AppActivity",
  components: {
    AppBlockly,
  },
  props: {
    // activityId: { type: String, required: true },
    moduleId: { type: String, required: true },
    activityNum: { type: Number, required: true },
  },
  data: () => ({
    code: "",
  }),
  computed: {
    c_activity() {
      let theModuleId = this.moduleId;
      let theModule = store.find((item) => {
        return item.id === theModuleId;
      });
      if (
        this.activityNum >= 0 &&
        theModule.activities.length > this.activityNum
      ) {
        return theModule.activities[this.activityNum];
      }
      throw `${this.activityNum} ${theModule.activities.length} Error, activity num is not valid`;
    },
  },
  methods: {
    // getActivity() {
    //   // console.log(store);
    //   // id = this.activityId;
    //   let theModuleId = this.moduleId;
    //   let theModule = store.find(item => {
    //     return item.id === theModuleId;
    //   });
    //   theModule.activities[this.moduleId].activities.find(item => {
    //     return id === item.id;
    //   });
    // },
    showCode() {
      this.code = BlocklyJS.workspaceToCode(
        this.$refs["activityBlockly"].workspace
      );
    },
    submitCode() {
      // TODO submit code
      this.$emit("activity-complete", this.code);

      this.$router.push({ name: "PostActivity" });
    },
  },
};
</script>

<style scoped>
.activity-view {
  height: 100%;
  display: grid;
  grid-template:
    " blocks-header" "prompt    " "prompt" 4em
    " AppBlockly   " "AppBlockly" "view  " 1fr
    / auto auto auto;
}

.blocks-header {
  grid-area: blocks-header;
}
.prompt {
  grid-area: prompt;
}
.app-blockly {
  grid-area: app-blockly;
}
.view {
  grid-area: view;
}
</style>
