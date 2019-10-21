<template>
  <div class="hello">
      <div class="top"></div>
      <!--轮播图-->
      <div class="carousel">
        <img src="../assets/images/qianjin.png" alt="" class="carousel_one left" @click="up">
        <img src="../assets/images/shop.png" alt="" class="carousel_one center" @click="shop">
        <img src="../assets/images/dian.png" alt="" class="carousel_one right">

        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in arr.swiperImgArr">
                <img :src="item" alt="" class="lunbo">
              </div>
            </div>
            <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!--介绍-->
      <div class="introduce">
        <div class="introduce_top">
          <p class="introduce_txt">{{arr.name}}</p>
          <div class="introduce_collect">
            <img src="../assets/images/shoucang.png" alt="">
            <p>收藏</p>
          </div>
        </div>
        <!--价钱-->
        <div class="price">
          <span class="price_num">￥{{arr.reduct_price}}</span>
          <span class="price_nn">{{(arr.allowance*10).toFixed(1)}}折</span>
          <span class="price_nn">包邮</span>
        </div>
        <!--卖家承诺-->
        <div class="promise">
          <a href="#">￥{{arr.original_price}}</a>
          <span v-for="(item,index) in arr.describe" :key="index">{{item}}</span>
        </div>

      </div>
      <!--分割线-->
      <div class="gray"></div>
      <div class="nav">
        <a :class="{active:0===ind}" @click="par">商品详情</a>
        <a :class="{active:1===ind}" @click="buy">买家口碑</a>
      </div>
        <div class="commodity" v-for="(item,index) in arr.shopDes" :key="index" v-show="bool">
          <img :src="item" alt="">
        </div>
        <div style="margin-bottom: .98rem">
          <div class="buyer">
            <span @click="all" :class="{active:0===i}">全部评价</span>
            <span @click="good" :class="{active:1===i}">好评</span>
            <span @click="bad" :class="{active:2===i}">差评</span>
            <span @click="imgs" :class="{active:3===i}">晒单</span>
          </div>
          <div class="buyer_com" v-for="(item,index) in comList" :key="index"  v-show="tag">
            <div class="buyer_com_top">
              <span class="name">{{item.buyerName}}</span>
              <span class="time">{{item.createTime}}</span>
            </div>
            <div class="pic" v-for="(url,index) in item.postImg"><img :src="url" alt=""></div>
            <div  v-show="tag">
              <p class="buyer_com_txt">{{item.postDescribe}}</p>
              <div class="buyer_com_man">管理员：{{item.adminReviews}}</div>
            </div>
          </div>
          <div class="pic" v-for="(url,index) in comList.postImg"><img :src="url" alt=""></div>
        </div>
      <div class="foot">
        <span class="foot_sum">总价:  <span>￥{{arr.reduct_price*mm}}.00</span></span>
        <span class="foot_add" @click="join()">加入购物车</span>
        <span class="foot_buy" @click="buuy()">立即购买</span>
      </div>
      <div class="join" v-show="showTab">
        <!--图片-->
        <div class="join_top clearfix">
          <img :src="shopPic" alt="" class="pic">
          <div class="join_center">
            <p class="join_center_price">￥{{arr.reduct_price}}</p>
            <p>库存{{arr.total}}件</p>
            <p>请选择商品属性</p>
          </div>
          <img src="../assets/images/coles.png" alt="" class="close" @click="close">
        </div>
        <!--购买数量-->
        <div class="join_mag">
          <p class="join_mag_txt">购买数量</p>
          <div class="join_mag_right">
            <span class="se" @click="sub">-</span>
            <input type="text" class="num" id="num" value="1" disabled v-model="mm">
            <span class="se" @click="add">+</span>
          </div>
        </div>
        <!--大小-->
        <div class="size">
          <p>{{sizeList.name}}</p>
          <span v-for="(item,index) in sizeList.list" :key="index" @click="big(index)" :class="{orig:index === cutton}" >{{item}}</span>
        </div>
        <!--年龄-->
        <div class="size">
          <p>{{ageList.name}}</p>
          <span v-for="(item,index) in ageList.list" :key="index"  @click="age(index)" :class="{orig:index === num}">{{item}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
//  import '../assets/js/swiper.min';
  export default {
    data () {
      return {
          see:[],
        key:'',
        id:'',
        arr:'',
        bool:true,
        ind:0,
        comList:[],
        allList:[],
        replay:[],
        badList:[],
        goodList:[],
        imgsList:[],
        sizeList:[],
        ageList:[],
        shopPic:[],
        tag:true,
        i:0,
        showTab:false,
        cutton:0,
        num:0,
        mm:1
      }
    },
    mounted(){
      this.id = this.$route.query.id;
      this.$http({
        url: 'http://yd.msword.top/getDetails?pid='+ this.id
      }).then((res)=>{
//        console.log(res.data.data)
        this.arr = res.data.data;
        this.comList = res.data.data.buyerReviews.all;
        this.allList = res.data.data.buyerReviews.all;
        this.replay = res.data.data.buyerReviews.postForm[0];
        this.badList = res.data.data.buyerReviews.bad;
        this.goodList = res.data.data.buyerReviews.good;
        this.imgsList = res.data.data.buyerReviews.postForm[0];
        this.sizeList = res.data.data.buySelect[0];
        this.ageList = res.data.data.buySelect[1];
        this.shopPic = res.data.data.swiperImgArr[0];
        this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
          });
        });
      });


    },
    methods:{
        up(){
            this.$router.push('/index')
        },
        par(){
            this.ind = 0;
            this.bool = true;
        },
        buy(){
          this.ind = 1;
          this.bool = false;
        },
        all(){
            this.i = 0;
            this.tag = true;
            this.comList = this.allList;
        },
        good(){
          this.i = 1;
          this.tag = true;
          this.comList = this.goodList;
        },
        bad(){
          this.i = 2;
          this.tag = true;
          this.comList = this.badList;
        },
        imgs(){
          this.i = 3;
          this.tag = false;
          this.comList = this.imgsList;
        },
        buuy(){
            this.$router.push('/shopp')
        },
      join(){
        this.showTab = !this.showTab;
        if(!this.showTab){
          //给一个key，将pid赋值给key
//          this.key = this.arr.pid;
//          if(this.mm === 0){
//            return false
//          }
//          for(let i = 0; i<sessionStorage.length;i++){
//            let list = sessionStorage.key(i);
//            let value = JSON.parse(sessionStorage.getItem(list));
              if(sessionStorage.length === 0){
                  alert('请登录');
                  this.$router.push('/login')
              }else {
                let obj =
                  {
                    pid:this.arr.pid,
                    pic:this.shopPic,
                    name:this.arr.name,
                    num:this.mm,
                    size:this.sizeList.list[this.cutton],
                    age:this.ageList.list[this.num],
                    sum:this.arr.reduct_price*this.mm,
                    money:this.arr.reduct_price,
                    no:false
                  };
                if(sessionStorage.getItem('see') === null){
                  sessionStorage.setItem('see',JSON.stringify([obj]));
                  console.log(1);
                }else {
                  console.log(2);
                  var item = JSON.parse(sessionStorage.getItem('see'));
                  var flag = false;
                  item.some((val)=>{
                    if(val.pid === obj.pid){
                      console.log(3);
                      if(val.size === obj.size && val.age === obj.age){
                        flag = true;
                        if(flag){
                          val.num += obj.num;
                          val.price += obj.price;
                          sessionStorage.setItem('see',JSON.stringify(item));
                        }
                        return true
                      } else {
                        console.log(4);
                        flag=false;
                      }
                    }
                  });
                  if(flag===false){
                    item.push(obj);
                    sessionStorage.setItem('see',JSON.stringify(item));
                  }
                }
                this.$router.push({
                  path: '/shopp'
                })
              }
            //判断重复商品，尺寸和年龄是否发生变化
//            if(this.arr.pid==value['pid']&&value['size'] != this.sizeList.list[this.cutton] || this.arr.pid==value['pid']&&value['age'] != this.ageList.list[this.num]){
//              console.log(1);
//              this.key = this.arr.pid += '0'
//            }



          }


//        }
      },
      close(){
        this.showTab = false
      },
      sub(){
          this.mm--;
          if(this.mm<=1){
            this.mm = 1;
          }else{
            this.mm--;
          }

      },
      add(){
        this.mm++;
      },
      big(i){
        this.cutton = i;
      },
      age(i){
          this.num = i;
      },
      shop(){
          this.$router.push('/shopp')
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "../assets/css/swiper.min.css";*/
@import "../assets/css/details.css";
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

</style>
