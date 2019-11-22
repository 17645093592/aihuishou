import http from "../utils/http.js";

export const movieNowApi1 = () =>http({
    method:"get",
    url:"/dubai-gateway/common/channel-info/20?cityId=31&inquiryKey=&productId=&lantitude=&longitude=",
    data:{
        // cityId:id
    }
})
export const movieNowApi2 = () =>http({
    method:"get",
    url:"/dubai-gateway/common/channel-info/21?cityId=31&inquiryKey=&productId=&lantitude=&longitude=",
    data:{
        // cityId:id
    }
})
export const movieNowApi3 = () =>http({
    method:"get",
    url:"/dubai-gateway/common/channel-info/22?cityId=31&inquiryKey=&productId=&lantitude=&longitude=",
    data:{
        // cityId:id
    }
})
///详情
export const movieDetails = (id=1) =>http({
    method:"get",
    url:"/portal-api/ofnew/home?cityId=31&longitude=&latitude=&inquiryKey=&productId=",
    data:{
        cityId:id
    }
})
//服务站
export const serviceStation = (id=1) =>http({
    method:"get",
    url:"/portal-api/city/31/shop",
    data:{
        cityId:id
    }
})
//城市列表
// export const movieCity = (id=1) =>http({
  
// })
//搜索
export const movieSearch = (id,value)=>http({
    url:"/api/searchList",
    data:{
        cityId:id,
        kw:value,
    }
})
//卖手机
export const movieHandset = (id)=>http({
    url:"/portal-api/product/category-brands/1",
    data:{
        cityId:id,
    }
})
//相对应的
export const movieHandseta = (id=1)=>http({
    method:"post",
    url:"/portal-api/product/search",
    data:{
        cityId:id,
    }
})
//详情页面   不能用
// https://dubai.aihuishou.com/dubai-gateway/v2/products/
export const xiangqing = (id=1)=>http({
    method:"get",
    url:"/dubai-gateway/v2/products/32461?cityId=31",
    data:{
        cityId:id,
    }
})
