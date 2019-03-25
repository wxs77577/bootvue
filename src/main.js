import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


import 'bootstrap/dist/css/bootstrap.min.css'

import components from './components/'
for (let name in components) {
  Vue.component(`V${name}`, components[name].default)
}

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://192.168.50.99:5555/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
