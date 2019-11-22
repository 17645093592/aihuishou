<template>
    <div class="footer" v-if="$route.meta.age">
        <ul>
            <router-link tag="li" :to="item.pag"  v-for="(item,index) in lis" :key="index">
                <div><van-icon :name="item.biao" /></div>
                <div> {{item.nm}}</div>
            </router-link>
            
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lis:[
                {nm:"首页",biao:"home-o",pag:"/home"},
                {nm:"换新机",biao:"orders-o",pag:"/handset"},
                {nm:"服务站",biao:"calender-o",pag:"/service"},
                {nm:"我的",biao:"contact",pag:"/me"},
            ],
           
        }
    },
    methods:{
       
    }
}
</script>

<style scoped>
.footer{
    background-color: #fff;
   position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .5rem;
}
.footer>ul{
    height: 100%;display: flex;align-items: center;justify-content: space-around;font-size: .14rem
}
.footer>ul>li{
    flex: 1 1;
    height: .5rem;
    width: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.router-link-exact-active{
    color: red
}

</style>