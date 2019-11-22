<template>
    <div>
        <div class="seach">
            <form action="/">  <van-search  @input="input" ref="aa" v-model="value"  placeholder="请输入搜索关键词" /></form>
            <span @click="clickFan()" class="qux">取消</span> 
        </div>
        <div class="search-hot">
            <div class="title"> 热门搜索  </div>
            <ul>
                <li  @click="clickHandler(index)" v-for="(item,index) in li" :key="item">{{item}}</li>
            </ul>
        </div>
        <div class="cont" v-show="age" >
              <div v-for="item in val" :key="item.id" class="common-itema">
               <p>
                  
                   <span class="left">{{item.name}}</span>
                    <span class="right"><span>最高回收价</span><span>{{item.avgPrice}}</span> </span>
               </p>
           </div>
        </div>
         
    </div>
</template>

<script>
import {movieHandseta} from "../../api/index"
export default {
    data(){
        return{
            value:"",
             list:[],
             li:["苹果","小米","荣耀","oppo","vivo","苹果6","苹果7"],
             age:false
        }
    },
      async created(){
      let list = await movieHandseta()
      this.list = list.data
          this.clickHandler()

    //   console.log(this.list)
  },
  methods:{
      input(){
          let aa = this.value;
          if(aa){
              this.age = true
          }else{
              this.age = false
          }
          console.log(aa)
      },
      clickHandler(i){
          this.value = this.li[i]
          if(this.value){
              this.age = true
          }else{
              this.age = false
          }

      },
      clickFan(){
          this.$router.go(-1)
      }
  },

   computed:{
            val(){
                // console.log(this.value)
                let arr = []
                for(var i=0;i<this.list.length;i++){
                    // console.log(this.dabox[i].nm)
                    if(this.list[i].name.indexOf(this.value) != -1){
                        arr.push(this.list[i])
                    }
                }
                return arr

            }
        }
}   
</script>

<style scoped>
    .seach{
        z-index: 10;
    background-color: #fff;
    padding: 0 0.15rem;
    overflow: hidden;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    height: 0.44rem;

    position: relative;
    position: fixed;
    }
    .common-itema {
    height: .52rem;
    position: relative;
    /* padding: .17rem 0 .17rem .13rem; */
    border-bottom: 1px solid #eee;
}
.cont{
    padding-top: .5rem
}
.common-itema p {
    line-height: .5rem;
    font-size: .14rem;
    color: #111;
    display: flex;
    align-items: center;
}
.common-itema p span:first-of-type {
    margin-right: .1rem;
}
.right{
    position: absolute;
    right: .2rem;
    color: red;
    display: flex
}
.left{
    margin-left: .1rem
}
.search-hot {
    margin: .6rem 0.15rem;
}
.van-search{
    width: 90%
}
.title {
    height: 0.19rem;
    font-size: 15px;
    line-height: 0.19rem;
    margin: 0.2rem 0.12rem 0.12rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    color: #999;
}
 .search-hot>ul>li {
    max-width: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 0.08rem;
    border-radius: 0.02rem;
    float: left;
    margin-right: 0.12rem;
    margin-bottom: 0.12rem;
    height: 0.3rem;
    font-size: 13px;
    line-height: 0.3rem;
    background-color: #f8f8f8;
}
.qux{
    position: absolute;
    top: 0;right: .05rem;font-size: .14rem;
    text-align: center;width: .5rem;height: .5rem;line-height: .5rem
}
</style>