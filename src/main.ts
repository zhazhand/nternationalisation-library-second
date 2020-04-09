import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuexI18n from "vuex-i18n";
import translationEN from "./translations/en";
import translationRU from "./translations/ru";
import translationUA from "./translations/ua";

Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', translationEN);
Vue.i18n.add('ru', translationRU);
Vue.i18n.add('ua', translationUA);
Vue.i18n.set('en');// default locale is english

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
