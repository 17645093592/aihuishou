<template>
  <div class="auto">
    <div class="sos-navigators-container">
      <v-touch tag="div"  @tap="clickHandler1(index)"   v-for="(item,index) in box1" :key="item.id">
        <img :src="item.imageUrl" alt />
        <span >{{item.title}}</span>
      </v-touch>
    </div>
    <div  class="sos-navigators-container">
      <div @click="clickHandler2(index)" v-for="(item,index) in box2" :key="item.id">
        <img :src="item.imageUrl" alt />
        <span  >{{item.title}}</span>
      </div>
    </div>
    <div @click="clickHandleraa()"  class="sos-images-container">
      <div>
        <img  
          src="https://sr.aihuishou.com/sos/image/6369345169684795901379405081.png?x-oss-process=image/quality,q_80&size=750x168"
          alt
        />
      </div>
    </div>
    <div class="sos-images-container">
      <div>
        <img
          src="https://sr.aihuishou.com/sos/image/636777053433809460465574684.png?x-oss-process=image/quality,q_80&size=722x61"
          alt
        />
      </div>
    </div>
    <div class="sos-images-container">
      <div>
        <img src="https://sr.aihuishou.com/sos/image/6368628706100914101019139812.jpg" alt />
      </div>
    </div>
    <div class="sos-images-container">
      <div>
        <img src="https://sr.aihuishou.com/sos/image/636862574647126880480595561.jpg" alt />
      </div>
    </div>
    <div class="sos-images-container">
      <div>
        <img src="https://sr.aihuishou.com/sos/image/636840252120098030376527937.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { movieNowApi1 } from "../../../../api/index";
export default {
  data() {
    return {
      box1: [],
      box2: [],
    };
  },
  async created() {
    let data = await movieNowApi1();
    this.box1 = data.data[0].items;
    this.box2 = data.data[1].items;
  },
  methods:{
    clickHandler(){
      // console.log("aaa")
      // this.$router.push("/city")
      this.$router.push("/category")
    },
    clickHandler1(i){
      // console.log(i)
      this.$router.push({name:"conten",params:{i}})

    },
     clickHandler2(i){
      // console.log(i+5)
      let index = i+5
      // this.$observer.$emit("handlera",index)
      this.$router.push({name:"conten",params:{index}})
    },
    clickHandleraa(){
      this.$router.push("category")
    }
  }
};
</script>

<style scoped>
.sos-navigators-container {
  margin-bottom: 0.1rem;
  padding: 0 0.14rem;
  display: flex;
}
.sos-navigators-container > div {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sos-navigators-container > div img {
  width: 100%;
  display: block;
}
.sos-navigators-container > div span {
  color: #666;
  font-size: 0.14rem;
  line-height: 0.18rem;
}
/* //////////////////// */
.sos-images-container {
  display: flex;
  font-size: 0;
}
.sos-images-container > div {
  flex: 1 1;
}
.sos-images-container > div img {
  display: block;
  width: 100%;
}
</style>