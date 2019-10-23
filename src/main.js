import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAC2piIw-FH4UoOxu-e2pJp5C7Sw7sCJ_o",
  authDomain: "vue-calendar-eda51.firebaseapp.com",
  databaseURL: "https://vue-calendar-eda51.firebaseio.com",
  projectId: "vue-calendar-eda51",
  storageBucket: "vue-calendar-eda51.appspot.com",
  messagingSenderId: "617025534854",
  appId: "1:617025534854:web:be95b013cb02a81fbeca07"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
