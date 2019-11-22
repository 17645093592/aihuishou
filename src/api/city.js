import http from "../utils/http"

export const getCity = (id=1)=>http({
    method:"get",
    url:"/portal-api/city/all",
    data:{
        cityId:id
    }
})

//详情页面

export const detailmovie = ()=>http({
    url:"/api/detailmovie",
    // data:{
    //     movieId:movieId
    // }
})
export const movieDetail = (movieId)=>http({
    url:"/api/detailmovie",
    data:{
        movieId:movieId
    }
})