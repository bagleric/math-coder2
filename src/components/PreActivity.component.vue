<template>
  <div class="pre-activity">
    <h2>Pre-Activity</h2>
    <AppForm
      :inputs="theModule.preModule.inputs"
      :results="theModule.preModule.results"
      :multiple="true"
      @form-complete="formComplete"
    ></AppForm>
  </div>
</template>


<script>
import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";
import AppForm from "@/components/Form.component.vue";

export default {
  name: "PreActivity",
  components: { AppForm },
  props: {
    moduleId: { required: true, type: String },
  },
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
      this.$router.push({
        name: "Activities",
        params: {
          moduleId: this.moduleId,
          activityNum: 1,
        },
      });
    },
    formComplete(data) {
      console.log({ data });
      this.processForm();
    },
  },
};
</script>

<style scoped>
.pre-activity {
  height: 100%;
  padding: 2em;
}
</style>
