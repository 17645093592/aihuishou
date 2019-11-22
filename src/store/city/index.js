import {getCity} from "../../api/city"
const state = {
    hotCity:[],
    cityList:[],
    id: sessionStorage.getItem("id") || 1,
    nm: sessionStorage.getItem("nm") ||"北京"
}

const mutations = {
    hanleModifyCityleInfo(state,info){
        state.nm = info.nm;
        state.id = info.id
        
        sessionStorage.setItem("nm",info.nm)
        sessionStorage.setItem("id",info.id)
        
    },
    handleMutationGetCity(state,params){
        let city = params.data
        //热门城市
        let hotCity=[] , cityList = []
        for(var i =0;i<city.length;i++){
            if(city[i].isHot == true){
                 hotCity.push({id:city[i].id,nm:city[i].name})
            }
        }
        //城市列表
        for(var i=0;i<city.length;i++){
            let first = city[i].character

            if(isIndex(first)){
                cityList.push({index:first,list:[{id:city[i].id,nm:city[i].name}]})
            }else{
                for (var j=0;j<cityList.length;j++){
                    if(first == cityList[j].index) {
                         cityList[j].list.push({id:city[i].id,nm:city[i].name})
                        break
                    }
                }
            }

        }

        //判断手机母是否在cityList中存在

        function isIndex(first){
            var bstop = true;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == first){
                    bstop = false;
                    return
                }
            }
            //如果存在为false  不存在未true
            return bstop
        }

        //城市排序
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1
            }
        })
        state.hotCity = hotCity
        state.cityList = cityList

    }
}
//进行异步处理
const actions = {
    async handleGetCity({commit}){
        let data = await getCity();
        commit("handleMutationGetCity",data)
        // console.log(data)
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}