<template>
  <div class="hello">
   <div class="buyer">
      <span class="active">全部评价</span>
      <span>好评</span>
      <span>差评</span>
      <span>晒单</span>
   </div>
    <div class="buyer_com">
      <div class="buyer_com_top">
        <!--<span class="name">{{item.buyerName}}</span>-->
        <span class="time">2015-1-1 1-1-1</span>
      </div>
      <img src="../assets/images/pingjia.png" alt="">
      <p class="buyer_com_txt">已经开始喝第二阶段的奶粉了，会继续支持德贝</p>
      <div class="buyer_com_man">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我
        们会继续给 您带来最极致的服务</div>
      <p></p>
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
      console.log(this.id);
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
  @import "../assets/css/buyer.css";
</style>
