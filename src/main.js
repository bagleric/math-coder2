import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

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
  render: h => h(App)
}).$mount("#app");
