import Vue from 'vue'
import App from './App.vue'
import Alert from './components/Alert/alert'
import router from './router'
import store from './store'
import txt from './test.txt';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.prototype.$Alert = Alert

console.log(txt);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')