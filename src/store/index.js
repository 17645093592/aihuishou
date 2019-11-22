import Vue from "vue"
import Vuex from "vuex"
import city from "./city/index"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        city
    }
})

export default  store