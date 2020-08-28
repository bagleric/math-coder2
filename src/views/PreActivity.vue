<template>
  <div class="pre-activity">
    <v-form ref="form" class="pre-activity-form">
      <span class="form-question">How do you feel about repeated addtion?</span>
      <v-radio-group v-model="selectedEmotion" row class="form-answer">
        <v-radio
          v-for="emotion in emotions"
          :key="emotion.value"
          :value="emotion.value"
          :off-icon="emotion.on"
          :on-icon="emotion.off"
        ></v-radio>
      </v-radio-group>
      <div class="form-navigation">
        <v-btn text color="success" @click="processForm">Skip</v-btn>
        <v-btn color="success" @click="processForm">Next</v-btn>
      </div>
    </v-form>
  </div>
</template>


<script>
export default {
  name: "PreActivity",
  data: () => ({
    emotions: [
      {
        key: "feeling",
        value: "sad",
        off: "mdi-emoticon-sad",
        on: "mdi-emoticon-sad-outline"
      },
      {
        key: "feeling",
        value: "neutral",
        off: "mdi-emoticon-neutral",
        on: "mdi-emoticon-neutral-outline"
      },
      {
        key: "feeling",
        value: "happy",
        off: "mdi-emoticon-happy",
        on: "mdi-emoticon-happy-outline"
      }
    ],
    selectedEmotion: {}
  }),

  methods: {
    processForm() {
      //TODO: submit this information to the database.
      console.log({ selected: this.selectedEmotion });
      this.$router.push({ name: "Activity" });
    }
  }
};
</script>

<style scoped>
.pre-activity {
  height: 100%;
  padding: 2em;
}

.pre-activity-form {
  display: grid;
  height: 20em;
  place-items: center;
  max-width: 20em;
  margin: auto;
}

.form-question {
  place-self: start;
}

.form-answer {
  place-self: center;
}

.form-navigation {
  place-self: end;
}
</style>

