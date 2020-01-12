import Vue from 'vue'
import App from './App.vue'
import { rtdbPlugin } from 'vuefire'
import router from "./routes/route.js";

import store from "./store";


Vue.use(rtdbPlugin);
Vue.config.productionTip = false;




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
