<template>
  <div class="blocklyArea" ref="blocklyArea">
    <xml ref="blocklyToolbox" style="display: none">
      <slot></slot>
    </xml>
    <div class="blocklyDiv" ref="blocklyDiv"></div>
  </div>
</template>

<script>
import Blockly from "blockly";
export default {
  name: "AppBlockly",
  props: ["options"],
  data() {
    return {
      workspace: null,
    };
  },
  mounted() {
    var options = this.$props.options || {
      // toolbox: this.$refs["blocklyToolbox"],
      // collapse: false,
      // comments: true,
      // maxBlocks: 5,
      trashcan: true,
      // horizontalLayout: false,
      // toolboxPosition: "start",
      // css: false,
      // rtl: false,
      // scrollbars: false,
      sounds: true,
      oneBasedIndex: true,
    };

    if (!options.toolbox) {
      options.toolbox = this.$refs["blocklyToolbox"];
    }
    var blocklyArea = this.$refs["blocklyArea"];
    var blocklyDiv = this.$refs["blocklyDiv"];

    this.workspace = Blockly.inject(blocklyDiv, options);

    var wksp = this.workspace;
    var onresize = function () {
      // Compute the absolute coordinates and dimensions of blocklyArea.
      let element = blocklyArea;
      var x = 0;
      var y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      // Position blocklyDiv over blocklyArea.
      blocklyDiv.style.left = x + "px";
      blocklyDiv.style.top = y + "px";
      blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
      blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
      Blockly.svgResize(wksp);
    };
    window.addEventListener("resize", onresize, false);
    onresize();
    Blockly.svgResize(this.workspace);
  },
};
</script>

<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
}
.blocklyArea {
  height: 100%;
  width: 100%;
}
</style>
