<template>
    <div>
          <van-tabs v-model="active" color="yellow">
            <van-tab  title="推荐">   <First/> </van-tab>
            <van-tab  title="卖手机">  <Neirong1/>  </van-tab>
            <van-tab  title="卖笔记本">  <Neirong2/> </van-tab>
            <van-tab  title="卖平板">  <Neirong3/> </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Neirong1 from "./substance/neirong1.vue"
import Neirong2 from "./substance/neirong2.vue"
import Neirong3 from "./substance/neirong3.vue"
import First from "./first/index.vue"
export default {
    components:{
        Neirong1,
        Neirong2,
        Neirong3,
        First,
    },
      data(){
        return{
            active: 0
        }
    }
}
</script>

<style scoped>

.sos-navigators-container{
    margin-bottom: .1rem;
    padding: 0 .14rem;
    display: flex;
}
.sos-navigators-container>div {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sos-navigators-container>div img {
    width: 100%;
    display: block;
}
.sos-navigators-container>div span {
    color: #666;
    font-size: .14rem;
    line-height: .18rem;
}
/* //////////////////// */
.sos-images-container {
    display: flex;
    font-size: 0;
}
.sos-images-container>div {
    flex: 1 1;
}
.sos-images-container>div img {
    display: block;
    width: 100%;
}
/* //////////////////////// */

</style>