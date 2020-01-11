import Vue from 'vue'
import App from './App.vue'
import router from "./routes/route.js";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyDQ2dXBMuIJ2EBYeVqucJpOF33C0tsFlLk",
  authDomain: "tv-show-tracker-9899e.firebaseapp.com",
  databaseURL: "https://tv-show-tracker-9899e.firebaseio.com",
  projectId: "tv-show-tracker-9899e",
  storageBucket: "tv-show-tracker-9899e.appspot.com",
  messagingSenderId: "433917891798",
  appId: "1:433917891798:web:bb35a74ae42e6db339a577"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
