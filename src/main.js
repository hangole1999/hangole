
import 'es6-promise/auto';
import 'babel-polyfill';

import Vue from 'vue';

import './plugins/firebase';
import './plugins/vueProgressbar';

import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/config';
import './plugins/function';
import './plugins/axios';
import './plugins/vueFullpage';
import './plugins/vueResponsiveVideoBackgroundPlayer';

import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
