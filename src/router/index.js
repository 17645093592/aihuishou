import Vue from "vue"
import Router from "vue-router"
import Home from "./home/home"
import Handset from "./handset/handset"
import Service from "./service/service"
import Login from "./login/login"
import Register from "./register/register"
import Me from "./me/me"
import City from "./city/index"
import Category from "./category/category"
import Xiangqing from "./xiangqing/xiangqing"

Vue.use(Router)

const router = new Router({
    mode:"hash",
    routes:[
        {
             path:"/",
             meta:{
                flag:true
             },
            redirect:"/home"
        },
        Home,
        Handset,
        Service,
        Me,
        Login,
        Register,
        City,
        Category,
        Xiangqing
    ]
})

export default router