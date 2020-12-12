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

import Define from "@/components/Define.component.vue";

import VueSanitize from "vue-sanitize";

Vue.use(VueSanitize);

Vue.component("Define", Define);

new Vue({
  router,
  vuetify,
  formulate,
  render: h => h(App)
}).$mount("#app");
