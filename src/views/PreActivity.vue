<template>
  <div class="pre-activity">
    <FormulateInput label="Change an input type" type="radio" :options="types" v-model="type" />
    <FormulateInput
      label="Favorite B10 football team?"
      :type="type"
      name="team"
      :options="{nebraska: 'Nebraska', ohiost: 'Ohio St.', michigan: 'Michigan'}"
      value="nebraska"
      error-behavior="live"
      validation="required|matches:nebraska"
      validation-name="Team name"
    />
    <FormulateForm v-model="values" :schema="schema" />
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
// import FormulateInput from

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
    selectedEmotion: {},
    type: "radio",
    types: {
      select: "Select list",
      radio: "Radio list",
      text: "Text field",
      textarea: "Text area",
      checkbox: "checkbox"
    },
    values: {},
    schema: [
      {
        id: "f341062b-1f12-4ef1-aeb0-64b1134bdebe",
        label: "How do you feel about repeated addition?",
        name: "feeling",
        options: {
          sad: "Not very good",
          neutral: "Okay",
          happy: "Great"
        },
        type: "radio"
      },
      {
        id: "0287366a-7b43-4540-a7d1-413b6798e53b",
        label: "How hard was it to tell the computer to do our math?",
        name: "computer",
        options: {
          sad: "Hard",
          neutral: "Okay",
          happy: "Easy"
        },
        type: "radio"
      },
      {
        id: "99470828-6876-40bf-ac81-d6d544a6d34f",
        label: "Did you learn anything new?",
        name: "learn",
        options: {
          yes: "Thumbs-up",
          no: "Thumbs-down"
        },
        type: "radio"
      },
      {
        type: "password",
        name: "password",
        label: "Enter a new password",
        validation: "required"
      },
      {
        type: "password",
        name: "password_confirm",
        label: "Confirm your password",
        validation: "^required|confirm:password",
        validationName: "Password confirmation"
      },
      {
        type: "submit",
        label: "Change password"
      }
    ]
  }),
  // components:{
  //   FormulateInput
  // }
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
