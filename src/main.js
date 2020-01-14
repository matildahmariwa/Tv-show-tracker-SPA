import Vue from 'vue'
import App from './App.vue'
import { rtdbPlugin } from 'vuefire'
import router from "./routes/route.js";

import store from "./store";
import vuetify from './plugins/vuetify';


Vue.use(rtdbPlugin);
Vue.config.productionTip = false;




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
