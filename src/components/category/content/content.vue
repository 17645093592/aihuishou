<template>
    <div>
           <div v-for="item in list" :key="item.id" class="common-item">
               <p>
                   <span>{{item.id}}</span>
                   <span>{{item.name}}</span>
               </p>
           </div>
    </div>
</template>

<script>
import {movieHandseta} from "../../../api/index"

export default {
    data(){
        return{
            list:[]
        }
    },
      async created(){
     
    //   this.clickHandlera(id)
    //   let {id} = this.$router.query
    //   console.log(id)
      let list = await movieHandseta()
      this.list = list.data
        // console.log(list)
  },
  mounted(){
     
  }
}
</script>

<style scoped>
.common-item {
    height: .52rem;
    /* padding: .17rem 0 .17rem .13rem; */
    border-bottom: 1px solid #eee;
}
.common-item p {
    line-height: .5rem;
    font-size: .14rem;
    color: #111;
    display: flex;
    align-items: center;
}
.common-item p span:first-of-type {
    margin-right: .1rem;
}

</style>