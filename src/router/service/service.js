export default{
    path:"/service",
    name:"service",
    meta:{
        flag:false,
        age:true
     },
    component:()=>import("../../components/content/service/service.vue")
}