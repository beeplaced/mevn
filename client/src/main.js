import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:3000/api'; // Update with your backend API URL

new Vue({
  render: h => h(App),
}).$mount('#app');