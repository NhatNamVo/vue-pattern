import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//template
import './templates/templates.scss';

//style bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';
import Vue from 'vue';
import Vuelidate from 'vuelidate'
import store from './stores/index';

Vue.config.productionTip = false

//bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Vuelidate)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
