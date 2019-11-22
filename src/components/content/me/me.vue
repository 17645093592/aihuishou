<template>
    <div class="my"> 
        <div class="page-account-center">
            <!-- //////1////// -->

            <div class="header-title">
                <span class="title"><span>我的<i></i></span></span>
                <a href="#" class="cart"><span class="iconfont icon-CartIcon"><van-icon name="cart-o" /></span></a>
            </div>
            <!-- //////2////// -->
             <div class="user-container">
                    <div class="user-content">
                        <div class="avatar"><img src="data:image/png;base64,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" alt=""></div>
                    </div>
          
                    <a href="#" class="login-content had-red-pocket">
                        <p class="login-now" v-show="age" @click="clickHandler()">点击登录</p>
                        <p class="login-nowa" v-show="flag"><span>{{nm}}</span>你好<span class="spansan">点击退出</span></p>
                        <div class="new-user-coupon-tips" ></div>
                    </a>
            <keep-alive>
                    <a href="#" class="set">{{nm}}<van-icon name="arrow-down" /></a>
            </keep-alive>
            
              </div>
            <!-- //////3////// -->
            <div class="package">
                <a href="#" class="wallet box">
                    <span class="left"><span class="title">钱包</span><span class="tip">登录查看后</span></span>
                    <span class="right"></span>
                </a>
                <div class="coupon box">
                      <span class="left"><span class="title">券包</span><span class="tip">登录查看后</span></span>
                    <span class="right"></span>
                </div>
            </div>
            <!-- //////4////// -->
            <div class="order">
                <h3>我的订单</h3>
                <ul>
                    <li>
                        <a href="#" class="order-link">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAAAyMjIyMjIzMzMzMzMzMzMzMzMyMjI0NDQyMjIyMjI0NDQzMzM2NjYzMzNAAop2AAAADnRSTlMAf0Vz7+LZmTv4WyKwExgAiwQAAAB3SURBVDjLYyATKAsiASOEeNs7FJABE+eYhyrxsgEqwfbOHdmokncJUAm9JxuQLeT2ewRl2T1HdUrdYyhD7iGI5AKaInwBzkcw1oHsPUBIgrBRcDAqMSpBbQnVIBwScU9JlUAYRSjjYGY1QpkTMzsTKAAwiwzyAAAp1p6ljWaH1QAAAABJRU5ErkJggg==" alt="">
                        </a>
                        <span class="spans">旧机回收</span>
                    </li>
                    <li>
                        <a href="#" class="order-link">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAAAyMjIyMjIzMzMzMzMzMzMzMzMyMjI0NDQyMjIyMjI0NDQzMzM2NjYzMzNAAop2AAAADnRSTlMAf0Vz7+LZmTv4WyKwExgAiwQAAAB3SURBVDjLYyATKAsiASOEeNs7FJABE+eYhyrxsgEqwfbOHdmokncJUAm9JxuQLeT2ewRl2T1HdUrdYyhD7iGI5AKaInwBzkcw1oHsPUBIgrBRcDAqMSpBbQnVIBwScU9JlUAYRSjjYGY1QpkTMzsTKAAwiwzyAAAp1p6ljWaH1QAAAABJRU5ErkJggg==" alt="">
                        </a>
                        <span class="spans">旧机回收</span>
                    </li>
                    <li>
                        <a href="#" class="order-link">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAAAyMjIyMjIzMzMzMzMzMzMzMzMyMjI0NDQyMjIyMjI0NDQzMzM2NjYzMzNAAop2AAAADnRSTlMAf0Vz7+LZmTv4WyKwExgAiwQAAAB3SURBVDjLYyATKAsiASOEeNs7FJABE+eYhyrxsgEqwfbOHdmokncJUAm9JxuQLeT2ewRl2T1HdUrdYyhD7iGI5AKaInwBzkcw1oHsPUBIgrBRcDAqMSpBbQnVIBwScU9JlUAYRSjjYGY1QpkTMzsTKAAwiwzyAAAp1p6ljWaH1QAAAABJRU5ErkJggg==" alt="">
                        </a>
                        <span class="spans">旧机回收</span>
                    </li>
                </ul>
            </div>
            <!-- //////5////// -->
            <div class="render-sos-container">
                <div class="sos-images-container">
                    <div><img src="https://sr.aihuishou.com/sos/image/6370276313776257502111354159.png?x-oss-process=image/quality,q_80&size=1125x168" alt=""></div>
                </div>
                <div class="sos-images-container">
                    <div><img src="https://sr.aihuishou.com/sos/image/6370276313776257502111354159.png?x-oss-process=image/quality,q_80&size=1125x168" alt=""></div>
                </div>
                <div class="sos-images-container">
                    <div><img src="https://sr.aihuishou.com/sos/image/6370276313776257502111354159.png?x-oss-process=image/quality,q_80&size=1125x168" alt=""></div>
                </div>
                <div class="sos-images-container">
                    <div><img src="https://sr.aihuishou.com/sos/image/6370276313776257502111354159.png?x-oss-process=image/quality,q_80&size=1125x168" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nm:"cao",
            flag:false,
            age:true
        }
    },
    created(){
        let {nm,flag,age} = this.$route.params
        // console.log(nm)
        sessionStorage.setItem('nma',this.nm)
      this.nm = nm || sessionStorage.getItem("nma")

        // if(this.nm){
        //      this.flag = flag
        //      this.age = age
        //        console.log(this.flag)
        // }
   

     
        
        // if(this.nm == ""){
        //     this.flag = false
        // }else{
        //     this.flag = true
        // }
    },
    methods:{
        clickHandler(){
            this.$router.push("/register")
        }
    },
    mounted(){

        //  this.$observer.$on("handler",(val)=>{
        //     console.log(this.flag,this.age)
        //     this.flag = val;
        //     // this.flag = true
        //     console.log(val)
        // })
    }
}
</script>

<style scoped>
.my{
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    font-size: .14rem;
    background: #fff;
    height: 100%;
}
.page-account-center {
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    font-size: .14rem;
    background: #fff;
    padding-top: .12rem;
    padding-bottom: .6rem;
}
/* ///1 */
.page-account-center .header-title {
    padding: 0 .14rem;position: relative;
}
.page-account-center .header-title .title {
    font-size: .26rem;
    color: #111;
    line-height: .41rem;
    font-weight: 700;
    position: relative;
}
.page-account-center .header-title .title span {
    position: relative;
    z-index: 2;
}
.page-account-center .header-title .title i {
    content: "";
    width: .5rem;
    height: .06rem;
    background: linear-gradient(270deg,#fffa8f,#ffd33f);
    border-radius: .03rem;
    position: absolute;
    left: .28rem;
    margin-left: -.25rem;
    bottom: 0;
    z-index: 1;
}
.page-account-center .header-title .cart {
    float: right;
    position: relative;
    height: .41rem;
    width: .4rem;
    line-height: .41rem;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
}
.spansan{
    font-size: .14rem;
    margin-left: .1rem;
    color: red
}
.page-account-center .header-title .cart .iconfont {
    font-size: .16rem;
    color: #000;
}
.van-icon{top: .02rem}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
/* ///2 */
.user-container {
    margin-top: .09rem;
    padding-left: .17rem;
    position: relative;
    display: flex
}
.avatar {
    width: .48rem;
    height: .48rem;
    position: relative;
}
.page-account-center .user-container .avatar img {
    width: 100%;
    height: 100%;
}
.had-red-pocket {
    justify-content: flex-start;
}
.login-content {
    margin-left: .13rem;
    flex: 1 1;
}
.login-now{
    font-size: .2rem;
    color: #333;
    line-height: .21rem;
}
.login-nowa{
    display: flex;
    font-size: .2rem;
    color: #333;
    line-height: .21rem;
}
.new-user-coupon-tips {
    margin-top: .05rem;
    height: .16rem;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: url("https://sr.aihuishou.com/appgateway/images/register_new_user_coupon.png");

}
.page-account-center .user-container .set {
    font-size: .18rem;
    color: #333;
    line-height: .48rem;
    position: absolute;
    right: .18rem;
    top: 0;
}
/* ///3 */

.page-account-center .package {
    display: flex;
    margin-top: .15rem;
    padding: 0 .16rem;
}
.page-account-center .package .box {
    flex: 1 1;
    height: .6rem;
    background-color: #fff;
    box-shadow: 0 .08rem .2rem 0 rgba(207,213,215,.3);
    border-radius: .04rem;
    padding-left: .11rem;
    position: relative;
}
.page-account-center .package .box .left .title {
    line-height: .17rem;
    display: block;
    margin-top: .09rem;
}
.page-account-center .package .box .left span {
    color: #333;
    font-size: .12rem;
}
.page-account-center .package .box .left .tip {
    color: #999;
}
.page-account-center .package .box .left span {
    color: #333;
    font-size: .12rem;
}
.page-account-center .package .wallet .right {
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAMAAABpN6nPAAABVlBMVEUAAADf2f+Wqf/x8f+0rf/f2v/a0//c0//Zy//j3/+Yqf+VqP/Pwf/Sxf+XqP+UqP/i3v/Wzf/Qwv+Wqf/c0//Pw//Fu//Fu//azf/b1P/Xzv+5r/+yrf+xrf/TyP/j4P/g2//Nvv/c1P/Yz//a1v/Qw//Iwv/c1f+0rf/h3P/Owf/Wy/+1rv/h3P/Vyv/TyP/j3f+0sP+Wqf+aqf+urP+srP////+wrP+dqf+Yqf+zrf+qq/+UqP+fqv/m6f+nq/+hqv+yrP+lq//u8P/4+f+jqv/8/P/p7P/r7v/Y2v/29//y8//09f/Pwf+6sv/TyP/Xzf/Z0P/Vyv+8tP+9tv/w8v/Sxv/Rxf/Qw//b1P+NmfuJlPrd1v+Ch/fh3P/a0v/MwP/Mz/2HkPji5f/T1/+8xf+5sf/Fyf2Qn/ySlfiFi/jAxP6ZofqHkPmEi/i1t/+ztf+Dhfa8q8ebAAAAMnRSTlMA/mIEvmZBHRP+9/fl0MvLtKqnoouDTjQp9/Tz8vLw3tnY1dDJyLmxmJGMhHFuYVxKRP4gbN4AAAGsSURBVEjHpdDnUsJAFIbhA2LvvffeFUFUEJFAUIooGkFAAelVvf8/7oFRStbArk/KN5nJO5kJ/EfXTn/f+sj44WQXtGyqz+PxBAJ+/7N3oX9496CjE5pqW/b8RM9er9fn893PrA6PtSu2E9FKhA1BGuKBiEyvbGLbBnLj5aj6oWr0QoTDKtXS0Pb+0VRdOxLFRh5FIthgpHojursXh9or4eSWZjaVukvdNXqsevoVXcP/u3d9wWYD4PiC2QRorplpYN7AbA4MHEBn0OGpY1nQMeON9Bz4IqNRrzeSG8NiRPMZS9z+jR7l42Yl1OjDrAyuKBIOZdQofqOsHFmteK+uWSiLZb+yaYECrBQOgZBirygtCZKAapYeuVChVMrlclmXHNjtdmvjdeNGoWLxnRDcMhjJCE5UCKGg2ykDFrulfNauZEOxIMrb5MBC4bKJNiKdyWSSZEURn2uWGklihdPhFGngkiJ+qowaJZkjlGgSnZF3zvCo26RDVIw48EUnHPijc3KxLJxz4It6tMx6YIA9GgC11qRFptZXDTBqIotHqzsKhHqw19Sy3kE1wDcDFRrT01lcWwAAAABJRU5ErkJggg==) no-repeat 50%;
    background-size: 100%;
    width: .36rem;
    height: .36rem;
    top: .13rem;
}
.page-account-center .package .box .right {
    width: .44rem;
    height: .44rem;
    display: block;
    position: absolute;
    top: .09rem;
    right: .11rem;
}
.page-account-center .package .coupon {
    margin-left: .13rem;
}
.page-account-center .package .box {
    flex: 1 1;
    height: .6rem;
    background-color: #fff;
    box-shadow: 0 .08rem .2rem 0 rgba(207,213,215,.3);
    border-radius: .04rem;
    padding-left: .11rem;
    position: relative;
}
.page-account-center .package .coupon .right {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAMAAACWlYwtAAABMlBMVEUAAAD/x8f/zs7/x8f/wsT/cJ3/xcX/lJb/xMT/lpf/bJf/zMz/x8f/y8v/bJf/k5b/zs7/wsL/zMz/bJf/zc3/z8//wcH/zs7/wsL/bZf/apf/zs7/wcH/lJf/a5f/xsb/a5f/ysr/1dX/wcH/cZn/zs7/i6f/0ND/bpf/qqr/j5b/b5b/jJb/cZb/ipb/d5b/hpb/kpb/c5b/eZb/aZb/g5b/a5b/gZb/iJb/e5b/bZb/8fP/fpb/dZb/8vT/kZb/lJb/lZb/gJb/y8v/8PH/zc3/fZb/wcH/8/b/pbb/wsL/7O//6+3/x8n/5+v/4uT/2uP/1uD/mKT/w8P/s8D/qLX/lKD/5Oj/3OH/2dz/1dn/0tn/ubr/obL/m57/scH/j57/rLj/mrP/nKn/jKb/p7UjrPVEAAAAKnRSTlMALAVrNw7ny6piYjogF/f38/Lp2Kp6et3dy8u7uqKim1FMD/zhnHdtUQYB3iDqAAACWklEQVRIx62QiVbaQBRAwyaKCCq2Lq1rd1vToDa0DAStiUnJIqTsi+D2/7/gJGEyw0QJRO858La8m5zHEByEkswLWFqTpIvVtUgo6P66BLmABJR8svcRq7szri/Ez0fojmHufDLp+AK5v33m0nMEvTNfton3ZzHX9ifo11l/8DfEs6Shp+s9uO9P3BWkS6XSYQkyW0y7gsOAvJ7gR0CeFbTb0wmSSMBSiCI7FSvRqQS61mk42bCj6eRE3gg7gt8U7TZRmKIoXjWsrHEFU5MYyfI+FnCc3fNG1lprmhxnNi0Vi+dQ8NYRcBOxX2zc3Rn2p5ATWY48LTDNsXLYAgBoGgBia8iNC0ZX/EWhaeM12wE2HXa8L684RwzTAgBwzvUf6vUbA0CMm3q93ucIwXvGZjFHIYo47wKKLp6hG76hBbUazlVaoOEZOsG7vxOoUQa1hmfoBMsFf1pAaHma6ARS4RJSuCygWBvgOtf/Z9EUhKad9HP4OXQC6Q8FADjvChRdPFscncAjEAScq7RAxbNvoxNIJxSqivOBOL4vDvAMncAjuL8/oakoQgXllOCLJP30p6IoFU8T3fCFgn1JKlJUq0VPS1G8TUcQXpeKxxD4h6KioNqNt4Zxi2o3Mg7R5WMKKJgKZkTyiKJaPZoKBuEdzSj4HpDXE6TygUi5gk0+n+d5Hv7smPkai37+iOrn46YrSPAkmZjVi2V4PxKMy84pwZ7T2zv1YYchSGyl3EHMacUmbue3EswshCLzc/8tyuWybLGLJjNK4L6t2FhC3QASWf4wD/eDkwwdENUjno7n8WSnE/sAAAAASUVORK5CYII=) no-repeat 50%;
    background-size: 100%;
}
.page-account-center .package .box .right {
    width: .44rem;
    height: .44rem;
    display: block;
    position: absolute;
    top: .09rem;
    right: .11rem;
}
/* ///4 */
.page-account-center .order {
    margin-top: .2rem;
    padding: 0 .2rem;
}
.page-account-center .order h3 {
    font-size: .16rem;
    color: #333;
    line-height: .22rem;
}
.page-account-center .order ul {
    margin-top: .18rem;
    display: flex;
}
.page-account-center .order ul li {
    flex: 1 1;
    /* border-right: 1px solid #ccc */
}
.page-account-center .order ul li:nth-child(3){
    border-right:none
}
.page-account-center .order ul li .order-link {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-bottom: .1rem;
    position: relative;
    display: flex;justify-content: center
}
.page-account-center .order ul li .order-link img {
    width: .24rem;
    height: .24rem;
    vertical-align: middle;
}
 .spans {
    color: #333;
    font-size: .13rem;
    line-height: .18rem;
    margin-top: .06rem;
    margin-bottom: .06rem;
    display: block;
    font-weight: 400;
    display: flex;justify-content: center
}
/* ///////////555////////// */
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
</style>