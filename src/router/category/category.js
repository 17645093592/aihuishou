export default{
    path:"/category",
    name:"category",
    meta:{
        flag:false,
        age:false
     },
    component:()=>import("../../components/category/category.vue"),
    children:[
        {
            path:"/category",
            redirect:"/category/conten"
        },
        {
            path:"conten",
            name:"conten",
           
            component:()=>import("../../components/category/content/content.vue")
        }
    ]
}