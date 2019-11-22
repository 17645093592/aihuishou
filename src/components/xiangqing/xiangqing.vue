<template>
    <div class="xiangqing">
        <div class="top-fixed">
            <div class="page-header append-fixed"><h2 class="title">{{title}}</h2><span @click="clickHandler()" class="back"></span></div>
        </div>
        <div class="swati">
            <van-swipe @change="onChange">
                <van-swipe-item v-for="item in img" :key="item.id"><img :src="item.imageUrl" alt=""></van-swipe-item>

                <div class="custom-indicator" slot="indicator">
                    {{ current + 1 }}/10
                </div>
            </van-swipe>
        </div>
        <div class="info">
            <div class="title"><img src="data:image/png;base64,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" alt=""><h1>{{productName}}</h1></div>
            <div class="sub-title">{{subtitle}}</div>
        </div>
        <div class="meta">
            <div>
                <div class="new">
                    <div class="box">
                        <div class="titlea">新型机</div>
                        <div class="content">
                            <div class="item">
                                <div class="left"><span>128GB 星河银 8GB 4G全网通</span></div>
                                <div class="right"><span class="right-price"><span class="right-price-sign">￥</span><span class="right-price-num">4299</span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="old">
                <div class="box">
                    <div class="titlea">旧机抵扣</div>
                    <div class="content">
                        <div class="old-item">
                            <div class="main">
                                <div class="left"><div class="cover"><img class="image"  src="https://sr.aihuishou.com/image/5a28b493c60057c40a000021.png?x-oss-process=image/resize,m_fill,w_100,h_100/quality,Q_80" alt=""></div><span>苹果 iPhone 6 Plus</span></div>
                                <div class="right"><span class="right-price"><span class="right-price-tag">预告</span><span class="right-price-sign">-¥</span><span class="right-price-num">230</span></span> </div>
                            </div>
                            <!-- <div class="action"><img class="img-delete" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAABTUlEQVRIS+1WsUrEQBSctxAJAUl2g6CVKDZW1irWZ6VgZ+MPWNn7Cdpbe/VhKQhaiR9goZVYikGyCYmFLOZJrOIRksslhQfZdufNsPPezi5hgqWUGjHzQQ10qLU+qqOjOkC+L6W8ALBbhWXmqyiKTur4JhKsI2myT1LKnSYFbbBE9J0LchuShrWfueAQwDyAfQBvAG4bklTCmXlARAvMPAIQ/fbQdd1VIcQLgBut9aBLQSnlPYBty7IWgyB47wVbuzsblnqed0pEW1mWHcdx/Fo8tu/761mWnRPRXRiGZ+OWTHXCQpZuaK0fi6RKqU1mfgBQmqW9YOnF7y3th6ZxePdDM/tD43nenhBizRhzmSTJRzFLHcdZsm37kJmftdbXnYR3m0dxqvDuBasc+F+WMvNX/llt07OSWklEc+P/0hUhxFPHQn/ojDHLaZoGPxJmAKJxC/GVAAAAAElFTkSuQmCC" alt=""></div> -->
                        </div>
                        <div class="more">添加更多旧机</div>
                    </div>
                </div>
            </div>
            <div class="subsidy">
                <div class="box">
                    <div class="titlea">优惠福利</div>
                    <div class="content">
                        <div class="item subsidy-item">
                            <div class="left"><span class="title">以旧换新补贴</span></div>
                            <div class="right">
                                <span class="right-price"><span class="right-price-sign">-¥</span><span class="right-price-num">300</span><span class="action"></span></span>
                            </div>
                        </div>
                        <div class="item recycle-coupon-item">
                              <div class="left"><span class="title">登录领优惠，旧机多抵2%（限首单）</span></div>
                            <div class="right"><span class="action action-right-arrow"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data() {
    return {
      current: 0,
      img:[],
      title:[],
      subtitle:[],
      productName:[],

    
    }
  },
  created(){
      let {id} = this.$route.query
        this.xiangqing(id)
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    clickHandler(){
        this.$router.go(-1)
    },
    xiangqing(id){

     this.$axios("/api/xiangqing",{
         params:{
             product:id
         }
     })
      .then(res=>{
          if(res.data.data){
          console.log(res.data.data[0])
              this.img = res.data.data[0].headerMedias
              this.title = res.data.data[0].title
              this.subtitle = res.data.data[0].subtitle
              this.productName = res.data.data[0].productName
        }
       
      }).catch(err=>{
          console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.top-fixed {
    width: 100%;
    max-width: 750px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translate(-50%);
}
.van-swipe{
    height: 2.99rem;
}
.van-swipe-item>img{
   width: 100%;height: 2.99rem;
}
.page-header {
    position: relative;
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
.back {
    position: absolute;
    left: 0;
    top: 0;
    width: .5rem;
    height: .44rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMA+Tzd9Oq/ZlEtE6x+HwuU0N+X0TF2eHEAAACQSURBVCjPlZNbDoUgDAWv4gvfeLv/tZryY8LUVM7nNAGmpT87bbD52IjJDxGrMA9iFmJQ3oBPnfJuKvkqmhQLvC+ZD3PBtzPzC1Z9vnaklfK+pZXm3EwrWXbTStY6q/DZ6p/54Vg9CbBCwTnKuRzP9QTZEiQmNBFtRy4MCqP1Xfl96l1ThSvWAK7eqtH1dZ1vgBEQsMaM/J8AAAAASUVORK5CYII=) no-repeat 50%;
    background-size: .12rem;
}
.swati{
    padding-top: .47rem
}
.custom-indicator{
    font-size: .14rem;
        position: relative;
    left: 3.4rem;
}
.info {
    padding: 0 .14rem .1rem;
}
.title {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
}
.sub-title {
    color: #666;
    margin-top: .06rem;
    font-size: .14rem;
}
.title img {
    width: .28rem;
    margin-right: .05rem;
}
 .title h1 {
    font-size: .16rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
 .meta {
    padding: .08rem 0 0;
}
.new {
    padding: .05rem .14rem;
}
.box {
    background: #fafafa;
    border: 1px solid #eee;
    position: relative;
    border-radius: .05rem;
}
.titlea {
    margin: 0 .1rem;
    font-size: .14rem;
    padding: .08rem 0;
    border-bottom: 1px solid #eee;
}
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .12rem .1rem;
}
 .left {
    font-size: .13rem;
    color: #666;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right {
    flex-shrink: 0;
    padding-right: .24rem;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAA1ElEQVQ4T63TO05CQRTG8d81xAZKNsAGKFyBOyBQSFwAmrgCK1dgozvwQWVDBy1SEnpjT2y1svKRY+YmhPC4k3iSySRz5j/nMd8pMMMJ3lSwAj9Yoov5PiaABY7wiTM87oICqOMevRTtGpf43gQGEBb7VVoHGOMUH+tQCZTnEeUODbygg9dVaB0IXxsjtPCeIk1KaBMQviaecIyvVFPU9pf7NqvhBhfpwkN0cRdQPnSOWxxi+q9AVkpZRWe1tfLHZUkjW3yr8h5guE/e2QP0jH7VEf0FqaQ3pe0rT/8AAAAASUVORK5CYII=) no-repeat 100%;
    background-size: .06rem .1rem;
}
.right .right-price {
    color: #fc6232;
    display: flex;align-items: center
}
.right-price-sign {
    font-size: .12rem;
}
.right-price-num {
    font-size: .16rem;
}
.old {
    padding: .05rem .14rem;
}
.old .box {
    background: #fafafa;
    border: 1px solid #eee;
    position: relative;
    border-radius: .05rem;
}
 .more {
    font-size: .12rem;
    color: #666;
    height: .42rem;
    line-height: .42rem;
    text-align: center;
    border-top: 1px solid #eee;
}
.content .old-item:first-of-type {
    border-top: none;
}
.content .old-item .main {
    display: flex;
    flex: 1 1;
    justify-content: space-between;
    align-items: center;
    height: .58rem;
}
.content .old-item .left {
    font-size: .13rem;
    color: #666;
    display: flex;
    flex: 1 1;
    justify-content: left;
    align-items: center;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
 .cover {
    padding: .025rem;
    margin-right: .06rem;
    border: 1px solid #eee;
    background: #fff;
}
.image {
    display: block;
    width: .34rem;
    height: .34rem;
}
.content .old-item .right {
    flex-shrink: 0;
    padding-right: .24rem;
}

.content .old-item .right .right-price {
    color: #3eb052;
    display: flex;
    flex: 1 1;
    justify-content: left;
    align-items: center;
}
.content .old-item .right .right-price .right-price-tag {
    font-size: .12rem;
    color: #999;
}
.content .old-item .right .right-price .right-price-sign {
    font-size: .12rem;
}
.content .old-item .right .right-price .right-price-num {
    font-size: .16rem;
}
/* .old-item .action {
    position: absolute;
    right: .1rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: .1rem 0 .1rem .1rem;
}
 .img-delete {
    width: .14rem;
    height: .16rem;
} */
.subsidy {
    padding: .05rem .14rem;
}
.subsidy .box {
    background: #fafafa;
    border: 1px solid #eee;
    position: relative;
    border-radius: .05rem;
}
</style>