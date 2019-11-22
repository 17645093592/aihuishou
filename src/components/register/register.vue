<template>
    <div class="register">
        <div class="login-header">
            <span @click="clickBack()" class="back"></span>
            登录
        </div>
        <div class="content">
            <div class="banner"><img src="https://sr.aihuishou.com/c2b/zy-fe/cra_prod/neom/static/media/login_banner.8bac3c37.png" alt=""></div>
        </div>
        <div class="tab">
            <span class="active" @click="clickHandler1()">账号密码登录</span>
            <span class="active" @click="clickHandler2()">账号密码注册</span>
        </div>
        <!-- ///////////登录////////// -->
        <div class="age" v-if="age2">
            <div class="input-contanier">
                    <div class="single-input">
                        <label for="">用户名</label>
                        <div class="input-box"><input maxlength="11" v-model="username" placeholder="请输入用户名" type="text"></div>
                    </div>
                    <!-- <div class="smscode">获取验证码</div> -->
                </div>
                <div class="input-contanier" style="border: none;">
                    <div class="single-input">
                        <label for="">密码</label>
                        <div class="input-box"><input maxlength="6" v-model="password" placeholder="请输入密码" type="text"></div>
                    </div>
                </div>
            <div class="add-tip">
                <input type="radio" @click="clickHandler" v-model="checked" >
                <a>我已详细阅读并同意</a>
                <a href="#">用户协议</a>
                <a href="#">隐私政策</a>
            </div>
            <div class="btn">
                <span @click="clickRegister()" class="submit" ref="regis">登录</span>
                <div class="tips">未注册过的手机号将自动创建爱回收账户</div>
            </div>
        </div>

     <!-- ///////////注册///////////////// -->
      
          <div class="age" v-if="age1">
            <div class="input-contanier">
                    <div class="single-input">
                        <label for="">用户名</label>
                        <div class="input-box"><input v-model="username" @input="inputHanlder()" placeholder="请输入用户名" type="text"></div>
                    </div>
                </div>
                <div class="input-contanier" style="border: none;">
                    <div class="single-input">
                        <label for="">密码</label>
                        <div class="input-box"><input maxlength="6" v-model="password" placeholder="请输入密码" type="text"></div>
                    </div>
                </div>
                 <div class="add-tip">
                <input type="radio" @click="clickHandler" v-model="checked" >
                <a>我已详细阅读并同意</a>
                <a href="#">用户协议</a>
                <a href="#">隐私政策</a>
            </div>
            <div class="btn">
                <span class="submit" ref="regis" @click="clickLogin()">注册</span>
                <div class="tips">未注册过的手机号将自动创建爱回收账户</div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "../../utils/http"
export default {
    data(){
        return{
            checked:true,
            age1:false,
            age2:true,
            flag:true,
            age:false,
            username:"",
            password:""
        }
    },
    created(){
      
    },
    methods:{
        clickHandler(){
            this.checked = !this.checked
            if(this.checked){
              this.$refs.regis.style.background="#f9faff"
            }else{
              this.$refs.regis.style.background="red"
            }
        },
        //手机号
        clickHandler1(){
            this.age1 = false,
            this.age2 = true
        },
        //账号密码
        clickHandler2(){
            this.age1 = true,
            this.age2 = false
        },
        inputHanlder(){
          
        },
        //注册
        clickLogin(){
            if(!this.checked){
                let username = this.username
                            let password = this.password
                            this.$axios("api/rejister",{
                            params:{
                                username,
                                password
                            }
                        }).then(res=>{
                            if(res.data.message){
                                alert(res.data.error.message)
                            }else{
                                alert(res.data.error.message)
                            }
                            // console.log(res)
                        }).then(err=>{
                            // console.log(err)
                        })
                            // console.log(username,password)
            }
         

        },
        //登录
        clickRegister(){
            if(!this.checked){
                    let username = this.username
                let password = this.password
                this.$axios("api/login",{
                params:{
                    username,
                    password
                }
            }).then(res=>{

                if(res.data.message){
                alert(res.data.error.message)
                    // console.log(res.data.error.message)
                }else{
                    //成功的时候
                    alert(res.data.error.message)
                    if(res.data.success === 1){
                        let nm = res.data.data
                        let flag = this.flag
                        let age = this.age
                        this.$router.push({name:"me",params:{nm,flag,age}})
                        // this.$observer.$emit("handler",)
                    }

                }
            }).then(err=>{
                // console.log(err)
            })
            }
            
        },
        clickBack(){
            this.$router.push("/me")
        }
    }
}
</script>

<style scoped>
.login-header {
    font-size: .18rem;
    color: #333;
    /* position: fixed; */
    left: 0;
    top: 0;
    right: 0;
    height: .44rem;
    line-height: .44rem;
    max-width: 750px;
    margin: 0 auto;
    z-index: 100;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 .1rem 0 rgba(0,0,0,.05);
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
 .content {
    background-color: #fff;
}
 .content .banner {
    padding-bottom: .1rem;
}
 .content .banner img {
    width: 100%;
}
 .tab {
    width: 2.6rem;
    height: .28rem;
    border: .01rem solid #f9e72c;
    border-radius: .28rem;
    margin: 0 auto .1rem;
    overflow: hidden;
    border: none
}
.active {
    background: #f9e72c;
}
.tab span {
    font-size: .14rem;
    width: 50%;
    float: left;
    line-height: .28rem;
    text-align: center;
    border-radius: .28rem;
}
.input-contanier {
    margin: 0 .14rem;
    border-bottom: .01rem solid #eee;
    position: relative;
}
.input-contanier .single-input {
    height: .48rem;
    background: #fff;
    line-height: .32rem;
    padding: .08rem 0;
}
.input-contanier .single-input label {
    font-size: .14rem;
    color: #333;
    width: .73rem;
    margin-right: -.73rem;
    float: left;
}
 .input-box {
    padding: 0 .2rem 0 .73rem;
    float: left;
    position: relative;
    line-height: .32rem;
}
.input-box input {
    font-size: .14rem;
    border: none;
    padding: .05rem 0 .06rem;
    display: block;
    width: 100%;
    height: .32rem;
    outline: none;
}
 .smscode {
    position: absolute;
    right: 0;
    font-size: .12rem;
    text-align: center;
    width: .72rem;
    height: .32rem;
    line-height: .3rem;
    border-radius: .02rem;
    background: #e6e6e6;
    border: .01rem solid #e6e6e6;
    color: #999;
    top: .15rem;
}
 .input-contanier {
    margin: 0 .14rem;
    border-bottom: .01rem solid #eee;
    position: relative;
}
.add-tip{
    font-size: .12rem;
    color: #797979;
    background-color: #f9faff;
    padding: .15rem 0 .15rem .4rem;
    position: relative;
}
.add-tip>i {
    position: absolute;
    left: .14rem;
    top: .15rem;
    width: .18rem;
    height: .18rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAADOzs7R0dHNzc3Nzc3Pz8/Nzc3Ozs7V1dXMzMzMzMzMzMzMzMzMzMzMzMzNzc3MzMzNzc3Nzc3Ozs7Ozs7MzMxAQsb2AAAAFXRSTlMAZQX4pjceFQnXz/Lr5tvKxJh2WEQXwo6bAAAA2ElEQVQ4y42UiwrDIAxFk/i273b3/391o2xDtlbugSKUgzGaRFqi+jo6N1avUS6xY0XDeti/8yjA4DUksxTUD0B5/Ch5A2bNzQ+dgS23TlrgdvsJvzssqXEKpiB/hAnla+UF9TKbWLF8Im6YbjKOE7Z3XnBBbggOZ45WsMstO4q9lgOz3Us243gtK1Q6KFaRiCH3pDwgisJLFw89vx7nLhWhLwVUGZH6UsIoDtaXDI6SqHDUwakroC6TehbmgalSoYqOKV+mEaiWYpqTaXNmYHCjhx9i1Dh8AohjD/UDqLUdAAAAAElFTkSuQmCC) no-repeat 50%/cover;
}
.add-tip a {
    color: #1380ff;
    text-decoration: none;
}
.btn {
    background-color: #f9faff;
}
.submit {
    font-size: .14rem;
    color: #999;
    display: block;
    margin: 0 .14rem;
    height: .38rem;
    line-height: .36rem;
    border-radius: .04rem;
    background: #e6e6e6;
    border: .01rem solid #e6e6e6;
    text-align: center;
}
.tips {
    font-size: .12rem;
    color: #666;
    padding: .1rem .14rem;
    background-color: #f9faff;
    text-align: center;
}
</style>