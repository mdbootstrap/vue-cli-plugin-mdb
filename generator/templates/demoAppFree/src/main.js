import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vue2TouchEvents from 'vue2-touch-events'
import LoadScript from 'vue-plugin-load-script'
 
Vue.use(Vue2TouchEvents)
Vue.use(LoadScript)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
