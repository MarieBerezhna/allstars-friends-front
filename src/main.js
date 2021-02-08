import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
