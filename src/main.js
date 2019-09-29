import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import './assets/lib/fontawesome/css/all.min.css';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
