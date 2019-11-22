module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true
            },
            "/ajax":{
                target:"http://m.maoyan.com",
                changeOrigin:true,
                pathRewrite:{"^/api" : ""},
                secur:false
            },
            "/portal-api":{
                target:"https://m.aihuishou.com",
                changeOrigin:true,
                pathRewrite:{"^/api" : ""},
                secur:false
            },
            "/dubai-gateway":{
                target:"https://dubai.aihuishou.com",
                changeOrigin:true,
                pathRewrite:{"^/api" : ""},
                secur:false
            },
            "/api":{
                target:"http://localhost:3000/",
                changeOrigin:true,
                pathRewrite:{"^/api" : ""},
                secur:false
            },
        },
    
    },
   
}