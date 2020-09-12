<template>
  <!-- usage
<AppForm :inputs="" :results=""></AppForm>
  -->
  <div class="app-form">
    <FormulateForm
      v-if="!multiple"
      @submit="submitHandler"
      @input="formUpdated"
      :schema="inputs"
      v-model="formValues"
    />
    <div v-else>
      <FormulateForm v-model="formValues">
        <FormulateInput
          v-for="item in inputs"
          :key="item.name"
          v-bind="item"
          v-show="inputs[theIter-1].name == item.name"
        />
      </FormulateForm>
      <v-btn v-show="theIter > 1" @click="decrementIter">Previous</v-btn>
      <v-btn v-if="theIter < inputs.length" @click="incrementIter">Next</v-btn>
      <v-btn v-else @click="submitForm">Submit</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm",
  props: {
    inputs: Array, //array of form inputs
    results: Object, // object with the results
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      formValues: {},
      iter: 1
    };
  },
  computed: {
    theIter() {
      console.log(this.iter);
      return this.iter;
    }
  },

  methods: {
    formUpdated(newValues) {
      this.$emit("form-updated", newValues);
    },
    incrementIter() {
      this.iter++;
      console.log(this.iter);
    },
    decrementIter() {
      if (this.iter > 1) this.iter--;
      console.log(this.iter);
    },
    submitHandler(data) {
      console.log("Submitting Data", { data });
      this.$emit("form-complete", data);
    },
    submitForm() {
      console.log("submitting form", this.formValues);
      this.$emit("form-complete", this.formValues);
    }
  }
};
</script>

<style scoped>
.app-form {
}
</style>
