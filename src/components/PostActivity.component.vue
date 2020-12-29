<template>
  <div class="post-activity">
    <div class="instruction-container" v-if="showInstructions">
      <h1 class="title">Post-test instructions</h1>
      <div class="instructions">
        <v-icon x-large color="primary">mdi-account</v-icon>
        <span>
          You should do this test by yourself
        </span>
        <v-icon x-large color="primary">mdi-file-edit-outline</v-icon>
        <span>You can use scratch paper to find your answers</span>
        <v-icon x-large color="primary">mdi-account-question-outline</v-icon>
        <span>
          If you don't know the answer, that's okay. You can go to the next
          question.
        </span>
        <v-icon x-large color="primary">mdi-clock-outline</v-icon>
        <span> You can have as much time as you need.</span>
      </div>
      <v-btn outlined color="primary" @click="completeInstructions()"
        >Start</v-btn
      >
    </div>
    <AppForm
      v-else
      :inputs="theModule.postModule.inputs"
      :results="theModule.postModule.results"
      :stepper="true"
      :shuffle="true"
      @form-complete="formComplete"
    ></AppForm>
  </div>
</template>

<script>
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";
import AppForm from "@/components/Form.component.vue";

export default {
  name: "AppPostActivity",
  components: { AppForm },
  props: {
    moduleId: { required: true, type: String },
  },
  data: () => ({
    showInstructions: true,
  }),
  computed: {
    theModule() {
      let moduleId = this.moduleId;
      let mod = store.find((item) => {
        return moduleId === item.id;
      });
      return mod;
    },
  },
  methods: {
    processForm() {
      //TODO: submit this information to the database.
      this.$router.push({ name: "Home" });
    },
    formComplete(data) {
      console.log({ data });
      this.processForm();
    },
    completeInstructions() {
      this.showInstructions = false;
    },
  },
};
</script>

<style scoped>
.post-activity {
  height: 100%;
  padding: 2em;
  max-width: 40em;
  margin: 0 auto;
}
.instructions {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  margin: 1em;
  align-items: center;
}
.instruction-container {
  display: grid;
  justify-items: center;
}
</style>
