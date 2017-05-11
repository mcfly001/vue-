import Vue from 'vue';
import App from './App.vue';

import plugin from './plugin';
Vue.use(plugin);


var app = new Vue({
  el: "#app",
  render(creatComponent){
    return creatComponent(App)
  }
})