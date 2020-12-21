<template>
  <!-- usage
<AppReflection :title="" :message=""></AppReflection>
  -->
  <div>
    <span class="reflection">{{ c_reflection }}</span>
    <div>
      <v-btn v-if="iter != 0" @click="decrementIter()">Previous</v-btn>
      <v-btn v-if="iter < this.reflections.length" @click="incrementIter()"
        >Next</v-btn
      >
      <v-btn v-else @click="incrementIter()">Done</v-btn>
    </div>
  </div>
</template>

<script>
const sample = require("lodash/sample");
const isArray = require("lodash/isArray");
export default {
  name: "AppReflection",
  props: {
    reflections: {
      default: function() {
        var selected = sample(["Well done!", "Good job!", "You did it!"]);
        return [selected];
      },
      validator: function(reflections) {
        return isArray(reflections);
      },
    },
    message: String,
  },
  computed: {
    c_reflection() {
      return this.reflections[this.iter];
    },
  },
  data: () => ({
    iter: 0,
  }),
  methods: {
    incrementIter() {
      if (this.iter > this.reflections.length) {
        console.log("emitting");
        this.$emit("reflection-complete");
        return;
      }
      this.iter++;
      // = (this.iter + 1) % this.reflections.length;
    },
    decrementIter() {
      if (this.iter > 0) this.iter--;
    },
  },
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
