<template>
  <div class="city_body" ref="headere">
    <!--热门城市-->
      <div class="content_city" >
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <!-- <van-cell is-link @click="showPopup"> -->
             <van-search placeholder="请输入搜索关键词" v-model="value" />
          <!-- </van-cell> -->
          <!-- //弹出层 -->
           <!-- <van-popup v-model="show"  position="top" :style="{ height: '50%' }">
           <div class="hot_title">热门城市</div>
             <van-search placeholder="请输入搜索关键词" v-model="value" />
              <div  class="city_title_letter">

              </div>
           </van-popup> -->
         
          <div class="hot_city_list">
            <div class="hot_city_name"   @click="clickHandeerr(item)" v-for="item in hotCity" :key="item.id">{{item.nm}}</div>
            
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" >
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <div class="city_title_letter" ref="letter">{{item.index}}</div>
            <div class="city_list_name">
              <div 
                class="city_list_name_item" 
                v-for="val in item.list" 
                :key="val.id"
                @click="clickHandeerr(val)"
                >{{val.nm}}</div>
            </div>
          </div>
        </div>
      </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <div 
        class="index_item" 
        v-for="(item,index) in cityList" :key="index"
        @click="clickHandler(index)"
        >{{item.index}}</div>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState, mapMutations} from "vuex"
import {getCity} from "../../api/city"
import {movieSearch} from "../../api/index"

import {throttle} from "../../utils"

export default {
  name:"City",
  data(){
    return{
      value:"",
       show: false,
       list:[],
    }
  },
 created(){
    this.handleGetCity()
    
    //   this.searchFn = throttle( async (newVal)=>{
    //     console.log(this.cityId)
    //    let data =await movieSearch(this.cityId,newVal);
    //     console.log(data)
    //     if(data.data.movies){
    //       this.list = data.data.movies.list
    //     }
    //     console.log(this.list)
    // })
    
  },
  computed:{
    ...mapState({
      cityList:state=>state.city.cityList,
      hotCity:state=>state.city.hotCity,
      cityId:state=>state.city.id
    }),
  },

  methods:{
    //获取actions里的异步事件
    ...mapActions({
      handleGetCity:"city/handleGetCity"
    }),
    ...mapMutations({
      hanleModifyCityleInfo:"city/hanleModifyCityleInfo"
    }),
       
    clickHandler(index){
      let letter= this.$refs.letter

         this.$refs.headere.scrollTop = letter[index].offsetTop
         
    },
    clickHandeerr(info){
      this.$router.push("/home")
      console.log(info)
      this.hanleModifyCityleInfo(info)
    },
     showPopup() {
      this.show = true;
    },
 

  }
  

}
</script>

<style>
.aa{
    padding: 0 !important
}
.city_body {
  background: #ebebeb;
  height: 100%;
  overflow:auto;
  position: absolute;
  width: 100%
}
.hot_title{
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.18rem;
}
/*热门城市*/

.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.18rem;
  background: #fff
}
/* .hot_city{
  overflow: auto
} */
.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  /* padding-right: 0.6rem; */
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.1rem;
    margin-left: 0.1rem;
    background: #fff;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.15rem;
    border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.16rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: .6rem;
}
.city_list_index > div {
  padding: 0.05rem 0.05rem;
  font-size: 0.15rem;
}
.aa{
  overflow: auto;
  overflow-x: hidden;
}
</style>