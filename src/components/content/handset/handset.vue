<template>
    <div class="handset">
        <!-- //头部 -->
        <div class="page-header append-fixed"><h2 class="title">爱回收 0元换新机</h2></div>
        <!-- //内容？? -->
        <div class="conten">
             <div class="render-sos-component">
                 <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="item in swipe" :key="item.id"><img :src="item.imageUrl" alt=""></van-swipe-item>
                </van-swipe>
            </div>
            <div class="single-image">
                <div><img src="https://sr.aihuishou.com/sos/image/6369342773031882901633133764.jpg?x-oss-process=image/quality,q_80&size=750x75" alt=""></div>
            </div>
            <!-- //热销 -->
            <!--item.url 详情页面-->
            <div @click="clickHandXiangqing(item.productId)" v-for="item in rexiao" :key="item.id" class="page-new-product left">
               <!-- <a :href="item.url"> -->
                <div class="img-part">
                    <img :src="item.imgUrl"  alt="">
                    <div class="tip">
                        <span class="text">{{item.subsidyText}}</span>
                        <span class="pricaa"><i>￥</i>{{item.subsidies}}</span>
                        <span class="sku">{{item.skuParams}}</span>
                    </div>
                </div>
                <div class="text-part one-price">
                    <p class="text">
                        <span class="title">{{item.name}}</span>
                        <span class="sale">{{item.promotionText}}</span>
                    </p>
                    <p class="price">
                        <span class="old">官方指导价<i>￥</i><i class="num">{{item.price}}</i></span>
                    </p>
                    <div class="btns"><div class="buy-now">{{item.buttonText}}</div></div>
                </div>
                <div class="last"></div>
                <!-- </a> -->
            </div>
            <!-- //小米专区 -->
            <div class="page-new-product two-product">
                <div class="single-image">
                  <div><img src="https://sr.aihuishou.com/sos/image/636934281505770480536443817.jpg?x-oss-process=image/quality,q_80&size=750x75" alt=""></div>
                 </div>
                <!-- <div class="topa"></div> -->
                <div v-for="item in xiaomi" :key="item.id" class="product">
                    <div class="top-part">
                        <img :src="item.imgUrl" alt="">
                        <div class="tip">
                            <span class="text">{{item.subsidyText}}</span>
                            <span class="pricaa"><i>￥</i>{{item.subsidies}}</span>
                        </div>
                    </div>
                    <div class="bottom-part">
                        <p class="text">
                            <span class="title">{{item.name}}</span>
                            <span class="sale">{{item.promotionText}}</span>
                        </p>
                        <p class="pric">
                            <span class="new">换新到手价￥<i class="num">{{item.price}}</i></span>
                            <del class="old">官方指导价：￥<i class="num">{{item.officialPrice}}</i></del>
                        </p>
                        <div class="btns"><div class="buy-now">立即换新</div></div>
                    </div>
                    <div class="topa"></div>
                </div>
            </div>
              <!-- //华为专区 -->
              <div class="page-new-product two-product">
                <div class="single-image">
                  <div><img src="https://sr.aihuishou.com/sos/image/6369342885818128201869403918.jpg?x-oss-process=image/quality,q_80&size=750x75" alt=""></div>
                 </div>
                <!-- <div class="topa"></div> -->
                   <div v-for="item in huawei" :key="item.id" class="product">
                    <div class="top-part">
                        <img :src="item.imgUrl" alt="">
                        <div class="tip">
                            <span class="text">{{item.subsidyText}}</span>
                            <span class="pricaa"><i>￥</i>{{item.subsidies}}</span>
                        </div>
                    </div>
                    <div class="bottom-part">
                        <p class="text">
                            <span class="title">{{item.name}}</span>
                            <span class="sale">{{item.promotionText}}</span>
                        </p>
                        <p class="pric">
                            <span class="new">换新到手价￥<i class="num">{{item.price}}</i></span>
                            <del class="old">官方指导价：￥<i class="num">{{item.officialPrice}}</i></del>
                        </p>
                        <div class="btns"><div class="buy-now">立即换新</div></div>
                    </div>
                    <div class="topa"></div>
                </div>
                
            </div>
            <!-- 、、、、、、 苹果、、、、、、、、 -->
              <div class="page-new-product two-product">
                <div class="single-image">
                     <div><img src="https://sr.aihuishou.com/sos/image/6369342862273520501010854439.jpg?x-oss-process=image/quality,q_80&size=750x75" alt=""></div>
                 </div>
                <!-- <div class="topa"></div> -->
                  <div v-for="item in aipao" :key="item.id" class="product">
                    <div class="top-part">
                        <img :src="item.imgUrl" alt="">
                        <div class="tip">
                            <span class="text">{{item.subsidyText}}</span>
                            <span class="pricaa"><i>￥</i>{{item.subsidies}}</span>
                        </div>
                    </div>
                    <div class="bottom-part">
                        <p class="text">
                            <span class="title">{{item.name}}</span>
                            <span class="sale">{{item.promotionText}}</span>
                        </p>
                        <p class="pric">
                            <span class="new">换新到手价￥<i class="num">{{item.price}}</i></span>
                            <del class="old">官方指导价：￥<i class="num">{{item.officialPrice}}</i></del>
                        </p>
                        <div class="btns"><div class="buy-now">立即换新</div></div>
                    </div>
                    <div class="topa"></div>
                </div>
            </div>
            <div class="page-new-product two-product  aaa">
                 <div class="single-image">
                  <div><img src="https://sr.aihuishou.com/sos/image/6368308736179278501250759584.png?x-oss-process=image/quality,q_80&size=750x656" alt=""></div>
                </div>
                <div class="single-image">
                    <div><img src="https://sr.aihuishou.com/sos/image/636783346407056120344016565.png?x-oss-process=image/quality,q_80&size=750x210" alt=""></div>
                </div>
            </div>
            

        </div>
    </div>
</template>

<script>
import {movieDetails} from "../../../api/index"
export default {
    data(){
        return{
            swipe:[],
            rexiao:[],rexiao1:[],rexiao2:[],rexiao3:[],rexiao4:[],
            xiaomi:[], xiaomi1:[],
            huawei:[],huawei1:[],
            aipao:[],aipao1:[]
        }
    },
    async created(){
        let data = await movieDetails()
        this.swipe = data.data[0].items
        this.rexiao = data.data[3].items[0].items
        this.rexiao1 = data.data[4].items[0].items
        this.rexiao2 = data.data[5].items[0].items
        this.rexiao3 = data.data[6].items[0].items
        this.rexiao4 = data.data[7].items[0].items
       this.rexiao = this.rexiao.concat(this.rexiao1).concat(this.rexiao2).concat(this.rexiao3).concat(this.rexiao4)
        this.xiaomi = data.data[15].items[0].items
        this.xiaomi1 = data.data[16].items[0].items
        this.xiaomi = this.xiaomi.concat(this.xiaomi1)
        this.huawei = data.data[18].items[0].items
        this.huawei1 = data.data[19].items[0].items
        this.huawei = this.huawei.concat(this.huawei1)
         this.aipao = data.data[25].items[0].items
        // console.log(this.rexiao)
    },
    methods:{
        clickHandXiangqing(id){
            this.$router.push({name:"xiangqing",query:{id}})
        }
    }
}
</script>

<style scoped>
.handset{
    width: 100%;flex: 1
    /* overflow: hidden; */
}
.ofnew .page-header {
    box-shadow: none;
}
.page-header.append-fixed {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    max-width: 750px;
    margin: 0 auto;
    z-index: 100;
}
.page-header {
    position: relative;
    height: .44rem;
    line-height: .44rem;
    width: 100%;
    min-width: 320px;
    max-width: 750px;
    background: #fff;
    box-shadow: 0 0 .1rem 0 rgba(0,0,0,.05);
    text-align: center;
    font-size: 0;
}
.page-header .title {
    font-size: .18rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 1.8rem;
    display: inline-block;
    font-weight: 400;
}
.conten{
    padding: .5rem 0
}
.render-sos-component{
    display: flex;
    font-size: 0;
}
.render-sos-component>div{
    flex: 1 1;
    margin: 0 .14rem .1rem;

}
.render-sos-component>div img{
    display: block;
    width: 100%;
}

.single-image{
    display: flex;font-size: 0
}
.single-image>div{
    flex: 1 1
}
.single-image>div img{
    width: 100%;display: block
}
.left {
    width: 100%;
    min-height: 1.5rem;
    margin-top: .1rem;
    margin-bottom: .1rem;
    box-sizing: border-box;
    position: relative;
}
.two-product{
    padding-bottom: .5rem
}
.page-new-product {
    width: 100%;
    min-height: 1.5rem;
    /* margin-top: .1rem; */
    margin-bottom: .1rem;
    box-sizing: border-box;
    position: relative;
}
.page-new-product.left .img-part {
    left: .2rem;
    width: 1.2rem;
    text-align: center;
    position: absolute;
    top: .15rem;
}
.page-new-product .img-part img {
    width: 100%;
    height: 1.2rem;
    vertical-align: middle;
}
.page-new-product .img-part .tip {
    font-size: .1rem;
    color: #fff;
    text-align: center;
    width: .5rem;
    height: .46rem;
    padding: .09rem 0;
    box-sizing: border-box;
    background: linear-gradient(90deg,#ff4949,#ff6830);
    border-radius: 0 .16rem;
    position: absolute;
    left: -.04rem;
    top: -.02rem;
}
.page-new-product .img-part .sku {
    font-size: .1rem;
    color: #fff;
    padding: .03rem .02rem;
    background: linear-gradient(90deg,#fc5859,#ffab6a);
    position: absolute;
    left: 0;
    bottom: -.75rem;;
}
.page-new-product .img-part .tip .text {
    display: block;
}
 .price {
        margin-top: 10px;
        display: block;
    font-size: .14rem;
}
.pricaa{
       margin-top: .05rem;
        display: block;
    font-size: .14rem;
}
.page-new-product .img-part .tip .price i {
    font-size: .12rem;
    
    font-weight: 400;
}
.page-new-product.left .text-part {
    right: .26rem;
    text-align: left;
    position: absolute;
}
.page-new-product .text-part.one-price {
    top: .22rem;
}
.page-new-product .text-part .text span.title {
    font-size: .16rem;
    font-weight: 700;
}
.page-new-product .text-part .text span.sale {
    font-size: .14rem;
    margin-top: .04rem;
}
.page-new-product .text-part .text span {
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 2.05rem;
    display: block;
}
.page-new-product .text-part .price {
    margin-top: .06rem;
}
.page-new-product .text-part.one-price .price .old {
    color: #777;
    font-size: .12rem;
    display: block;
    margin-top: .02rem;
}
.page-new-product .text-part .btns {
    margin-top: .1rem;
    position: relative;
}
.page-new-product .text-part .btns .buy-now {
    font-size: .12rem;
    color: #000;
    width: 1rem;
    height: .3rem;
    background-color: #ffcd09;
    border-radius: .15rem;
    margin-top: .3rem
}
.last{
        bottom: -.1rem;
            content: "";
    width: 100%;
    height: .1rem;
    background-color: #f5f5f5;
    position: absolute;
    left: 0;
}
 /* <!-- //小米专区 --> */
 .single-image{
     display: flex;font-size: 0;
 }
 .single-image>div{
     flex: 1 1
 }
  .single-image>div>img{
     width: 100%;display: block
 }
 .topa{
         content: "";
    width: 100%;
    height: .1rem;
    background-color: #f5f5f5;
    position: absolute;
    left: 0;
    top: -.1rem;
 }
 .page-new-product.two-product .product:first-child {
    left: 0;
}
.page-new-product[data-v-04298d21]{
    /* display: flex */
    float: left;
}
 .product{
    width: 1.82rem;
    height: 2.9rem;
    background-color: #fff;
    float: left;
    box-sizing: border-box;
    padding: .2rem 0 .15rem;
    /* position: absolute; */
    top: 0;
        display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 }
 .page-new-product.two-product .product .top-part {
    text-align: center;
    margin: auto;
    position: relative;
}
.page-new-product.two-product .product .top-part img {
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
}
.page-new-product.two-product .product .top-part .tip {
    font-size: .1rem;
    color: #fff;
    text-align: center;
    width: .5rem;
    height: .46rem;
    padding: .09rem 0;
    box-sizing: border-box;
    background: linear-gradient(90deg,#ff4949,#ff6830);
    border-radius: 0 .16rem;
    position: absolute;
    left: .14rem;
    top: -.02rem;
}
.page-new-product.two-product .product .top-part .tip .text {
    display: block;
}
.page-new-product.two-product .product .top-part .tip .price {
    font-size: .14rem;
    font-weight: 700;
}
.page-new-product.two-product .product .top-part .tip .price i {
    font-size: .12rem;
    font-weight: 400;
}
.page-new-product.two-product .product .bottom-part {
    margin-top: .2rem;
    padding-left: .14rem;
}
.page-new-product.two-product .product .bottom-part .text span.title {
    font-size: .14rem;
    font-weight: 700;
}
.page-new-product.two-product .product .bottom-part .text span.sale {
    font-size: .12rem;
    margin-top: .03rem;
}
.page-new-product.two-product .product .bottom-part .text span {
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.54rem;
    display: block;
}
.page-new-product.two-product .product .bottom-part .price {
    margin-top: .04rem;
}
.new {
    color: #ff2400;  font-size: .12rem;
    display: block;
}

.num {
    font-weight: 700;
    font-size: .16rem;
    font-style: normal;
}
 .old {
    color: #999;
    font-size: .1rem;
    display: block;
    margin-top: .02rem;
}
.btns {
    position: relative;
    left: .14rem;
    bottom: .14rem;
}
.buy-now {
    font-size: .12rem;
    color: #000;
    width: 1rem;
    height: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffcd09;
    border-radius: .15rem;
}
.btns[data-v-04298d21]{
    
    margin-top: .1rem;
    position: initial
}
.lastaa{
    width: 100%;
    min-height: 1.5rem;
    /* margin-top: .1rem; */
    margin-bottom: .1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
}
</style>