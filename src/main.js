import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import formulate from "./plugins/formulate";
import './assets/main.scss';

Vue.config.productionTip = false;

//Add un-imported components to ignore list to prevent warnings.
Vue.config.ignoredElements = [
  "field",
  "block",
  "category",
  "xml",
  "mutation",
  "value",
  "sep"
];

new Vue({
  router,
  vuetify,
  formulate,
  render: h => h(App)
}).$mount("#app");
