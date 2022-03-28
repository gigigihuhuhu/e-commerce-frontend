// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';

if (window.webpackHotUpdate) { // if it is in dev mode
  axios.defaults.baseURL = 'http://localhost:8080';
}
else{
  axios.defaults.baseURL = 'http://ec2-3-227-117-109.compute-1.amazonaws.com';
}

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
