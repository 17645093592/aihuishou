<template>
    <div class="category">
        <div class="category-header"  >
            <v-touch tag="div"  @tap="handleTo()">
                 <van-icon  name="arrow-left" />
            </v-touch >
           <van-search @click="cliakSeach()" placeholder="请输入搜索关键词" v-model="value" />
        </div>
        <div class="page-category">
            <van-tabs v-model="active">

                <van-tab title="卖苹果">
                    <van-sidebar v-model="activeKey">
                            <!-- van-sidebar-item -->
                            <van-sidebar-item @click="clickHandlera()" v-for="(item,index) in shouji" :key="index" :title="item.name" />
                        <div class="aa">
                             <router-view></router-view>
                        </div>
                    </van-sidebar>
                </van-tab>
                <van-tab title="卖笔记本">
                     <van-sidebar v-model="activeKey">
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                    </van-sidebar>
                </van-tab>
                <van-tab title="卖平板">
                     <van-sidebar v-model="activeKey">
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                    </van-sidebar>
                </van-tab>
                <van-tab title="摄影摄像">
                     <van-sidebar v-model="activeKey">
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                    </van-sidebar>
                </van-tab>
                <van-tab title="智能数码">
                     <van-sidebar v-model="activeKey">
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                        <van-sidebar-item title="标签名称" />
                    </van-sidebar>
                </van-tab>

            </van-tabs>
        </div>
        
    </div>
</template>

<script>
import {movieHandset} from "../../api/index"
export default {
     data() {
    return {
      active: 0,
       activeKey: 0,
       activeKeya:0,
      value:"",
      shouji:[],
    };
  },
  async created(){
      let data = await movieHandset()
      this.shouji = data.data
      let {i,index} = this.$route.params
    //   console.log(i,index)
      this.activeKey = i
      this.activeKey = index
    //   this.clickHandlera(id)
    //   let {id} = this.$route.query;
    
    //   console.log( this.shouji)
  },
    //         this.$observer.$on("handler",(val)=>{
    //          console.log(val)

    //      this.activeKeya = val
    //         console.log(this.activeKeya)
           
    // })
  mounted(){
  
    //  this.$observer.$on("handlera",(val)=>{
    //      console.log(val)
    //      this.activeKey = val
    // })
  },
  methods:{
      clickHandlera(id){
        //   console.log(id)
        //   this.$router.push({name:'conten',query:{id}})
      },
      handleTo(){
          this.$router.go(-1)
      },
      cliakSeach(){
           this.$router.push({name:"seach"})
      }
  }
}
</script>

<style scoped>
.aa{
       position: absolute;
    top: 162px;
    height: 100%;
    font-size: .14rem;
    left: 90px;
}
    .category-header{
       position: fixed;
       width: 100%;
       background: #fff;
        top: 0;left: 0;
        height: .44rem;
        z-index: 2;
        font-size: .16rem;
        display: flex;align-items: center;
         padding: .05rem;
        border-bottom: .02rem solid #ccc
    }
    .van-search{
        flex: 1;
    }
    .van-search__content{
        border-radius: .2rem
    }
    .van-icon{
        font-size: .25rem
    }
    .van-tabs--line{position: relative;
    top: -1rem;}
    .page-category{
        padding-top:.5rem 
    }
</style>