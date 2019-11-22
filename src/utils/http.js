import axios from "axios"
// console.log(loading.close())
const http = axios.create({
    timeout:10000,
    withCredentials:true
})

//拦截器
http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "post"){
        // config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    // alert(1)
    return config;
},err=>{
    return Promise.reject(err);
})

http.interceptors.response.use(res=>{
    if(res.status == 200){
        return res.data
    }
})
export default http
