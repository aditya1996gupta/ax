import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
//
// Vue.config.productionTip = false
//
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
