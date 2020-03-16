import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { rtdbPlugin } from "vuefire";

// font-awesome inlcuded in index.html
// https://fontawesome.com/v4.7.0/icons/

Vue.config.productionTip = false;

Vue.use(rtdbPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
