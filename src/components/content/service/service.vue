<template>
  <div class="service">
      <!-- //头部 -->
      <div class="page-header append-fixed"> <h2 class="title">服务站</h2> </div>
    
    <div class="contone">
        <van-cell is-link @click="showPopup" class="region-all-btn"></van-cell>
        <!-- <span class="region-all-btn"></span> -->
        <!-- //弹出层 -->
        <van-popup @click="clickShow()" v-model="show"  position="top" :style="{ height: '40%' }">
     
            <div class="page-header append-fixed"> <h2 class="title">服务站</h2> </div>
            <div class="region-list"> <div >全部商品<van-icon  name="arrow-down" /></div>    </div>
            <div class="region-modal" >
                <div @click="clickIndex(index)" v-for="(item,index) in lis" :key="index" class="region-item" :id="xiabiao == index?'active':''" > {{item}}</div>
            </div>
        </van-popup>
            <van-tabs   class="logo" v-model="active">
                <van-tab title="附近(71)"> 
                    <div  v-for="(item,index) in list" :key="index" class="g-nbs-item">
                        <a href="#" class="si-content">
                            <div class="si-title"><div class="si-title-block"> <h3 class="si-title-text">{{item.name}}</h3> </div></div>
                            <div class="si-desc">{{item.address}}</div>
                            <div class="si-service-tags">
                                <div class="tag-item">旧机回收</div>
                                <div class="tag-item">以旧换新</div>
                            </div>
                        </a>
                        <div class="si-actions">
                            <a href="#" class="si-action-contact"><span>联系服务站</span></a>
                            <a href="#" class="si-action-map"><span>查看地图</span></a>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="东城(4)">
                    <div  v-for="(item,index) in xicheng[0]" :key="index" class="g-nbs-item">
                        <a href="#" class="si-content">
                            <div class="si-title"><div class="si-title-block"> <h3 class="si-title-text">{{item.name}}</h3> </div></div>
                            <div class="si-desc">{{item.address}}</div>
                            <div class="si-service-tags">
                                <div class="tag-item">旧机回收</div>
                                <div class="tag-item">以旧换新</div>
                            </div>
                        </a>
                        <div class="si-actions">
                            <a href="#" class="si-action-contact"><span>联系服务站</span></a>
                            <a href="#" class="si-action-map"><span>查看地图</span></a>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="西城(6)">
                     <div  v-for="(item,index) in xicheng[1]" :key="index" class="g-nbs-item">
                        <a href="#" class="si-content">
                            <div class="si-title"><div class="si-title-block"> <h3 class="si-title-text">{{item.name}}</h3> </div></div>
                            <div class="si-desc">{{item.address}}</div>
                            <div class="si-service-tags">
                                <div class="tag-item">旧机回收</div>
                                <div class="tag-item">以旧换新</div>
                            </div>
                        </a>
                        <div class="si-actions">
                            <a href="#" class="si-action-contact"><span>联系服务站</span></a>
                            <a href="#" class="si-action-map"><span>查看地图</span></a>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="朝阳(18)">
                      <div  v-for="(item,index) in xicheng[2]" :key="index" class="g-nbs-item">
                        <a href="#" class="si-content">
                            <div class="si-title"><div class="si-title-block"> <h3 class="si-title-text">{{item.name}}</h3> </div></div>
                            <div class="si-desc">{{item.address}}</div>
                            <div class="si-service-tags">
                                <div class="tag-item">旧机回收</div>
                                <div class="tag-item">以旧换新</div>
                            </div>
                        </a>
                        <div class="si-actions">
                            <a href="#" class="si-action-contact"><span>联系服务站</span></a>
                            <a href="#" class="si-action-map"><span>查看地图</span></a>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="丰台(9)">
                      <div  v-for="(item,index) in xicheng[3]" :key="index" class="g-nbs-item">
                        <a href="#" class="si-content">
                            <div class="si-title"><div class="si-title-block"> <h3 class="si-title-text">{{item.name}}</h3> </div></div>
                            <div class="si-desc">{{item.address}}</div>
                            <div class="si-service-tags">
                                <div class="tag-item">旧机回收</div>
                                <div class="tag-item">以旧换新</div>
                            </div>
                        </a>
                        <div class="si-actions">
                            <a href="#" class="si-action-contact"><span>联系服务站</span></a>
                            <a href="#" class="si-action-map"><span>查看地图</span></a>
                        </div>
                    </div>
                </van-tab>
        </van-tabs>
    </div>
    

  </div>
</template>

<script>
import {serviceStation} from "../../../api/index"
export default {
  data() {
    return {
      active: 0,
      list : [],
      xicheng:[[],[],[],[],[]],
      val1:"东城",val2:"西城",val3:"朝阳",val4:"丰台",
      lis:["附近","东城","西城","朝阳","丰台"],
      xiabiao:0,
      show: false
    };
  },
  async created(){
         let data = await serviceStation()
         this.list = data.data
         this.list.forEach(val1 => {
           if(val1.address.indexOf(this.val1)==3){this.xicheng[0].push( val1)  } 
           return this.xicheng[0]
         });
         this.list.forEach(val2 => {
           if(val2.address.indexOf(this.val2)==3){this.xicheng[1].push( val2)  } 
           return this.xicheng[1]
         });
           this.list.forEach(val3 => {
           if(val3.address.indexOf(this.val3)==3){this.xicheng[2].push( val3)  } 
           return this.xicheng[2]
         });
           this.list.forEach(val4 => {
           if(val4.address.indexOf(this.val4)==3){this.xicheng[3].push( val4)  } 
           return this.xicheng[3]
         });
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    clickShow(){
        this.show = false
    },
    clickIndex(i){
        this.active = i
        this.xiabiao = i
    }
  }

};
</script>

<style scoped>
.common-shop-list .page-header {
    box-shadow: none;
    border-bottom: 1px solid #e9e9e9;
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

.region-all-btn{
    position: absolute;
    z-index: 11;
    right: 0;
    display: block;
    height: .4rem;
    width: .44rem;
    box-shadow: -.04rem 0 .04rem 0 #f3f3f3;
    /* background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAAGFBMVEV5eXl3d3d3d3d3d3d3d3d4eHh5eXl2dnaaz6x6AAAACHRSTlMB/rxvrmRd/GASsM0AAAA7SURBVAjXY3A0YAACZhEGFmEQw9CBgQEkBBRgYGASZWAIVAAJKwawCoFoBiaxRLAAA4N6EYRmYAIJAACZlgP9Kl+ulAAAAABJRU5ErkJggg==) no-repeat 50% #fff; */
    /* background-size: .12rem auto; */
}
.contone{
    padding-top: .44rem;position: relative;

}
/* //////////////// */
.g-nbs-item {
    border-top: .08rem solid #f9faff;
}
.g-nbs-item .si-content {
    display: block;
    padding: .14rem .16rem;
}
.g-nbs-item .si-content .si-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .12rem;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAMAAACOLiwjAAAAUVBMVEUAAAB3d3d4eHh5eXl3d3d2dnZ3d3d3d3d3d3d2dnZ3d3d3d3d3d3d3d3d3d3d4eHh4eHh2dnZ2dnZ3d3d3d3d3d3d2dnZ4eHh5eXlgYGB3d3desmzgAAAAGnRSTlMA28AxFg359vPv5M3Dtq2ilYp/dGdbUkgmCByXds4AAABRSURBVBjTbY/HDYBADAS5RM6Z6b9Qfl6hw7+R7Q1FHwsNbRB0VIdBGmHRboUhGZ017jYKjuYyih42Pc4wPUZ7ic9BZxLIpWWqOAqqCr/lPrVfszgFTVGZpgQAAAAASUVORK5CYII=) no-repeat 100%;
    background-size: .06rem .1rem;
}
.g-nbs-item .si-content .si-title .si-title-block {
    display: flex;
    justify-content: left;
    align-items: center;
}
.g-nbs-item .si-content .si-title .si-title-block .si-title-text {
    font-size: .14rem;
    color: #333;
}
.g-nbs-item .si-content .si-desc {
    font-size: .12rem;
    color: #666;
    margin-top: .04rem;
    padding-right: .6rem;
}
.g-nbs-item .si-content .si-service-tags {
    margin-top: .04rem;
}
.g-nbs-item .si-content .si-service-tags .tag-item:first-of-type {
    margin-left: 0;
}
.g-nbs-item .si-content .si-service-tags .tag-item {
    font-size: .1rem;
    display: table-cell;
    color: #fff;
    height: .16rem;
    line-height: .16rem;
    padding: 0 .06rem;
    border-radius: .08rem;
    background: linear-gradient(270deg,#ff6830,#ff4949);
    margin-left: .05rem;
}
.g-nbs-item .si-actions {
    font-size: .13rem;
    padding: 0 .16rem;
    display: -webkit-box;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ebebeb;
}
.g-nbs-item .si-actions .si-action-contact, .g-nbs-item .si-actions .si-action-map {
    color: #666;
    flex: 1 1;
    text-align: center;
    height: .4rem;
    line-height: .4rem;
}
.g-nbs-item .si-actions .si-action-contact>span, .g-nbs-item .si-actions .si-action-map>span {
    padding-left: .18rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAD2ElEQVRIS7WWX2gcVRTGv3NnsrakgW4VXCiIBZtIafsYkYCYYq0FrVgxiIiwwZ07EIrkRUH8M1qKSDARNJmZ3SGBiKCItX8ECxpSse8VlSYiCCrsruBDiGJsdmaOnGV22V2zSbNZz8PCsHPO75473/3OJbTEzMxM2jCMA6VS6VvHceLW/3f6TI0FgiAYiqLoEoB9ABbDMDw1Njb2104hjfl1YAL7AkAfgH8A7AJwLQzDk92EVoFBEAxGUfSVwJh5Poqis6ZpLgC4q9tQmp+f711bW/sRwH6BlcvlrHy7QqFwII7jq92Gkud5NhG5AK739/cPDg8Ph7U9/z+glM/nzzPzEwDOaK3fbxVIt6Hk+/7XAB4gIsuyrMJGimyEMvPntm0/1qlyBfghgGcALGitH2pXyHXdE0qpKwCidDp928jISNQJVIDnALwsycz8pm3br7cW8jzvIBEtirAAnNdaP9kJTHJENM8S0QcNBRyt9Ru15xaYQB/VWv/dMdD3fTlrv8hWMTMTkcnMbw0MDLy2vLx8RCl1Oelsx7Bqh/Lj+/73AA4zs4gmK1AiWmfmVNJJV2CNwBcBvA3gAjPPENE7AI4A+BPAXCqVeimbzYrd7TiqHRYKhTvjOP5Z/FMpdTiXyy1NTk7uXl1dvbmdiTE1NbV3fHx8ZbNV1c07n8+/y8wvENEly7Ie304rvu/fAUCmzP0AroRh+FQ7w68Dp6enMz09PUvMvJeZT9m2LWLZMgRGRAvMfLTh5bZTpmke+r4/BkDsrQTgqNb6j82ILbAbzPw8EX20meE3AR3HUZlM5ksiOibOk06nT7RzlCAI9sVxvJh0dkMpdSyXy/2+lfc2AaUb2VrDMK4TUUZOjNba3qhLz/M+JqIRAHXYrUyZ/wAlaXZ29r5KpSIDuBfAhNZajk09JiYmevv6+laIiAHco7X+tXVR7TrdECjJQRA8ktxveojIKxaLZxzHqc7K5BiVAayUSqXb2x2dFuiCZVnH2wKlcD6fP8nMn0inRHTVNM3nRkdHf0vc6SfpDsA5rfUr7cTled4hIvoOgGEYxsFNgVLEdd1BpZRAxXNXxZFM03yvUqkMAbgsNgigyfBr8Lm5uV3r6+sXATwsfp1Kpe7dEijJclc1TXOamZ9O/Feujp8x824Ap4lIATirtZbRJt9VxLfHNM1PBcbMZcMwRMVLtwSsrdh13SHDMF5l5uMABNIUzPyNUuoCgD3MnAVwdyNMXt4WsFH24kbM/KBMmWS7a5OlcRE/MPNp27ble1ejI+BGAnFdd79SSi5jhwDcJKJrxWLxYk3ZtZx/ATHa/wehhoiWAAAAAElFTkSuQmCC) no-repeat 0;
    background-size: .14rem .14rem;
}
.g-nbs-item .si-actions .si-action-contact, .g-nbs-item .si-actions .si-action-map {
    color: #666;
    flex: 1 1;
    text-align: center;
    height: .4rem;
    line-height: .4rem;
}
.g-nbs-item .si-actions .si-action-map>span {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAECElEQVRIS62WW2hcZRDH/7PnJK6xrRZ8MGutiqJBUB8UUVoQrYK1YE2VCt4gm+w3Z0nEPqhUpXCE1jtEo0n2O7sxD1ahAS9VtFXEC1Io2CdB0YJorXYfVIK22rjZc0amnA3Z071kg/N45vL7vpk58w1hCVIsFtdEUbQZwCYAVwE4N3b7HcDXAD5IpVJ7c7ncL+3CUSuDqampTBiGvogMAHDbBKsS0bTjOP7g4OCxZrZNgUEQ3CEiuwGsBFAhondFZC8RHZqfnz8VsKurKyMi1xLRZhG5E0A3gONEdL8x5r1G0IbAIAgeEpGXAKQAvA3gMWb+odUNrbWXAHgewBYAERFtM8a8kvQ5DRjf7B0AQkTbjTEvtqvLYn0QBI+IyLMAiIj6kzetA2rNqtXqd5pGInq0U1gNHENf0PS6rtu3uKZ1wCAIAhHJaRqZ+a5Obpa0tda+pekloqIxxtT0C8C49X/U/AO4ol3N2h0mrum32gepVOri2i+zALTWDgN4lYhmjDH3NAoYBMFlIvIMgFti/SdE9Lgx5nAT+z0ishXACDOPq81i4D4AtwG4j5nfTAaIYQcBrE7oZono+kZQa+29AN4AsI+Zb08CdUqcT0SXN3E+VZMmqWxY8/iQ3wP4lZnXJIFzAM6oVqsrh4eHTzRogj8BrGoC/IuZz07qxsfHV7iuexzAv8ycTgL/BtDT3d195sDAgMLrxFrbMXB6ejpdqVROAviHmc9KAn8GcIHjOBcNDQ0dadbmnaS0VCpdGIbhTwCOMvPaJPBDABuJaIsxRidNnSyzaXS+aqz9zLwxCXwCwC4ArzHz4P/xW1hriwCGRGSH53k764ClUunSMAwPi4hO+7XMrDVbtoyNja1Kp9NaGm2mvlrn1422QqHwMRHdCuApZvaXTQNgrX0SwE4i+tQYs6EWKwm8gYgOiMgcEV253PEWN8s3RNRDRDfmcrkvGwL1YxAEUyKSBfBVuVxe7/t+pZOb+r7vZjKZz0VkHYDdzPzAYv/T3sPR0dFzenp6DgHQB/V1Zn6wE2DtxSGiI5VK5ZqRkZE/WgJVWSgUriaiL+KCjzHzw0uBWmuf0+0AwAkRucnzPD14nTTdaUql0rowDPcDWKG/CgCPmecbgTWNvb29YwDyInKSiDYx82eNbFtubcVi8eYoit7XkQdAb3w3M+tquCATExOrHceZiZ+sORHp9zxPD9pQWgLVY3Jy8joi0m3tPADHoijK5vP5j+LUb9DVUEcigN+iKOrP5/MHWqW/LVCd411nD4D1ulwB0AkSAmB90YnooOu6W7PZ7NF2tV4SUIPMzMw4s7Oz2wHs0GcsDqy/zNPlcnmX7/vVdjDVLxlYC2at7QPwsoio7zbP83RvWbL8B1qNzixRKm9qAAAAAElFTkSuQmCC) no-repeat 0;
    background-size: .14rem .14rem;
}
.van-tabs{
    position: absolute;
    top: -65px;
}
.region-block {
    /* position: fixed;
    left: 50%; */
    width: 100%;
    max-width: 750px;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
        top: .44rem;
}
.region-list {
    position: relative;
    top: .6rem;
    padding-bottom: .1rem;
    z-index: 10;
    font-size: .16rem;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #e9e9e9;
    white-space: nowrap;
    overflow-x: auto;
    padding-right: .5rem;
}
.van-icon{
    position: absolute;
    right: .1rem;
}
.region-modal {
    color: #333;
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    padding: .14rem 0 0 .14rem;
    background: #fff;
}
#active {
    color: #111;
    background: rgba(249,231,44,.2);
    border-color: #f9e72c;
}
.region-item {
    /* display: inline-block; */
    float: left;
    width: .8rem;
    height: .32rem;
    line-height: .3rem;
    border: .01rem solid #ccc;
    border-radius: .02rem;
    margin: 0 .09rem .09rem 0;
    text-align: center;
    font-size: .14rem
}
</style>