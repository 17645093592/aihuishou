export default{
    path:"/home",
    name:"home",
    meta:{
        flag:true,
        age:true
     },
    component:()=>import("../../components/content/home/home.vue")
}
