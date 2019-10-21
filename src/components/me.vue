<template>
  <div class="me">
    <div class="me_top"></div>
    <div class="top">
      <img src="../assets/images/set.png" alt="" class="top_left">
      <p>个人中心</p>
      <img src="../assets/images/news.png" alt="" class="top_right">
      <div class="bor"><img :src="img" alt="" class="top_bottom"></div>
    </div>
      <p class="reg" @click="log()">{{name}}</p>
    <div class="col">我的收藏</div>
    <!--分割线-->
    <div class="soil"></div>
    <!--我的订单-->
    <div class="order">
      <p class="left">我的订单</p>
      <p class="right">查看全部订单</p>
    </div>
    <!--代付款-->
    <div class="order_list">
      <ul>
        <li>
          <span class="one"></span>
          <p>代付款</p>
        </li>
        <li>
          <span class="two"></span>
          <p>代发货</p>
        </li>
        <li>
          <span class="three"></span>
          <p>待收货</p>
        </li>
        <li>
          <span class="four"></span>
          <p>待评价</p>
        </li>
        <li>
          <span class="five"></span>
          <p>退款/售后</p>
        </li>
      </ul>
    </div>
    <!--分割线-->
    <div class="soil"></div>
    <!--收货地址-->
    <div class="site">
      收货地址
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return{
            name:'点击登录',
            img:''
          }
      },
    methods: {
      log(){
        this.$router.push('/login')
      }
    },
    mounted(){
      this.name = JSON.parse(sessionStorage.getItem('key')).name;
      this.img = JSON.parse(sessionStorage.getItem('key')).img;
    }
  }
</script>

<style scoped>
  @import "../assets/css/me.css";
</style>
