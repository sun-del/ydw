<template>
  <div class="hello">
     <div class="commodity" v-for="(item,index) in arr" :key="index">
        <img :src="item" alt="">
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        id:'',
        arr:''
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.$http({
      url: 'http://yd.msword.top/getDetails?pid='+ this.id
    }).then((res)=>{
      console.log(res.data.data.buyerReviews)
      this.arr = res.data.data.shopDes
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import "../assets/css/commodity.css";*/
</style>
