<template>
    <div class="header" v-if="$route.meta.flag">
        <div class="app-promo-banner">
            <img src="../../../public/img/1574075236(1).jpg" alt="">
        </div>
        <div class="app-promo-banner2">
            <div @click="clickHandler()" class="location"><div class="loacationa">{{$store.state.city.nm}} <van-icon name="arrow-down" /></div> </div>
            <div class="input"><van-search  @click="clickHand()" placeholder="搜索您要卖的品牌、机器型号" /></div>
            <div><van-icon class="biao" name="cart-o" size="25px" /></div>
        </div>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        clickHandler(){
            this.$router.push("/city")
        },
        clickHand(){
            this.$router.push("/seach")
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;height: 1rem; position: fixed;top: 0;left: 0;z-index: 2
    }
    .app-promo-banner{
            position: relative;
            height: .58rem;
    }
  
    .app-promo-banner>img{
        width: 100%;height: 100%;display: block
    }
    .app-promo-banner2{
        display: flex;flex: 1;height: .44rem;position: relative;background: #fff
    }
    .input{flex: 1}
    .app-promo-banner2>div{
        height: 100% !important;

    }

    .location{
        color: #333;
        height: 100%;
        font-size: .14rem;
        display: inline-block;
        padding: 0 .15rem;
    }
    .loacationa{
        line-height: .44rem
    }
   
   .app-promo-banner2>a:nth-child(3){
       height: .4rem;position: relative;

   }
   .biao{
      color: black;position: absolute;right: .3rem;
    top: .1rem
   }
   .van-search{
       padding:  0;margin-top: .07rem;
   }
   .van-search__content{
       background: #fff
   }
   .van-icon{
       color: black
   }
</style>