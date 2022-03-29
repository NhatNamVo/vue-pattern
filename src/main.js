import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//style bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';
import Vue from 'vue';
import store from './stores/index';

Vue.config.productionTip = false

//bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
