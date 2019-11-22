export default{
    path:"/me",
    name:"me",
    meta:{
        flag:false,
        age:true
     },
    component:()=>import("../../components/content/me/me.vue")
}