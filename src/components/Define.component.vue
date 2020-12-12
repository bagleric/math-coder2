<template>
  <span class="word-definition">
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-hover>
          <span class="word" v-bind="attrs" v-on="on">
            <slot></slot>
          </span>
        </v-hover>
      </template>
      <v-card>
        <v-card-title class="headline"> TODO: add word </v-card-title>
        <v-card-text>{{ definition }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
export default {
  name: "Define",
  props: {
    word: { required: true, type: String },
  },
  data() {
    return { dialog: false };
  },
  computed: {
    definition() {
      return "TODO: fill out the definitions.";
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
    });
  },
};
</script>

<style scoped>
.word {
  font: inherit;
  color: inherit;
  font-style: italic;
}
.word:hover {
  text-decoration: underline;
}
</style>
