import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',

  data: {
    premium: true,
  },

  router,
  render: (h) => h(App),
}).$mount('#app');
