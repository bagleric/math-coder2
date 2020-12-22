<template>
  <div class="activity-view">
    <!-- <h2>{{ c_activity.name }}</h2> -->
    <!-- <header class="blocks-header">Blocks</header> -->
    <header class="prompt primary white--text">
      <AppRenderHtml :html="c_activity.prompt"></AppRenderHtml>
    </header>
    <AppBlockly class="app-blockly" ref="activityBlockly">
      <block
        v-for="theBlock in c_activity.blocks"
        :key="theBlock.type"
        :type="theBlock.type"
      ></block>
    </AppBlockly>
    <div class="view" id="code">
      <h2>View</h2>
      <button v-on:click="showCode()">Play</button>
      <button v-on:click="submitCode()">Done</button>
      <pre v-html="code"></pre>
    </div>
    <div class="reflection">
      <AppReflection
        v-if="activityComplete"
        @reflection-complete="submitCode"
        :reflections="c_activity.reflections"
      ></AppReflection>
    </div>
  </div>
</template>

<script>
import AppBlockly from "@/components/Blockly.component.vue";
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AppReflection from "@/components/Reflection.component.vue";
import BlocklyJS from "blockly/javascript";
import "@/blocks/block1.js";
export default {
  name: "AppActivity",
  components: {
    AppBlockly,
    AppRenderHtml,
    AppReflection,
  },
  props: {
    moduleId: { type: String, required: true },
    activity: {
      type: Object,
      //TODO add validation
      required: true,
    },
  },
  data: () => ({
    code: "",
    activityComplete: true,
  }),
  computed: {
    c_activity() {
      return this.activity;
    },
  },
  methods: {
    showCode() {
      this.code = BlocklyJS.workspaceToCode(
        this.$refs["activityBlockly"].workspace
      );
    },
    submitCode() {
      // TODO submit code
      console.log("TODO: submit code to database");
      this.$emit("activity-complete", this.code);
    },
  },
};
</script>

<style scoped>
.activity-view {
  height: 100%;
  display: grid;
  grid-template:
    "prompt     prompt    " auto
    "appBlockly view      " 1fr
    "appBlockly reflection" auto/ 2fr 2fr;
}

.blocks-header {
  grid-area: blocksHeader;
  border: solid 1px grey;
  display: grid;
  place-content: center;
  font-weight: bolder;
}
.prompt {
  grid-area: prompt;
  border: solid 1px grey;
  display: grid;
  align-content: center;
  padding: 1em;
  font-weight: bolder;
  /* font-size: larger; */
}
.app-blockly {
  border: solid 1px grey;
  grid-area: appBlockly;
}
.view {
  border: solid 1px grey;
  grid-area: view;
}
</style>
