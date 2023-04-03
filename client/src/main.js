import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import Vuetify from "@/plugins/vuetify.config.js";
import router from "@/router/router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  Vuetify,
  router
}).$mount('#app')
