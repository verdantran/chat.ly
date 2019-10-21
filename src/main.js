import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import VueCookies from 'vue-cookies';

const uuidv1 = require('uuid/v1');

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketio('localhost:3000'), //options object is Optional
}));

Vue.use(VueCookies);

if (!VueCookies.get("id")) {
  VueCookies.set('id', uuidv1());
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')