import Vue from 'vue'
import App from './App.vue'
import "../rem"
import "../public/index.css"
import Vant from 'vant';
import VueTouch from 'vue-touch';
import 'vant/lib/index.css';
import observer from "../observer"
import axios from "axios"
import router from './router'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$axios = axios
Vue.prototype.$observer = observer
Vue.use(VueTouch, { name: 'v-touch' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
