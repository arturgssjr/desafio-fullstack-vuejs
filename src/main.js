import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "./assets/scss/app.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import config from "./config";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = config.api.url;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
