<template>
	<div>

      <div class="shopp_heard">
        <img src="../assets/images/nav_icon_back@2x.png" alt="" @click="get">
        <span>购物车</span>
      </div>
    <div class="empty" v-if="this.arr.length === 0">
      <img src="../assets/images/shopping_wu.png" alt="">
      <p>购物车还是空的 快去逛逛吧~</p>
    </div>
    <div class="hove"  v-else="">
      <div class="shopp_content"   v-for="(item,index) in arr" :key="index">
        <div class="shopp_content-top"  @click="to(item.pid)">
          <img src="../assets/images/store.png" alt="">
          <span>杭州保税区仓</span>
        </div>
        <div class="shopp_content-bottom  clearfix">
          <!--<img src="../assets/images/radio_nor.png" alt="" class="dui">-->
          <div v-show="flags" class="name">
            <input type="checkbox" :class="{show:item.no}"  v-model='item.no' @click="sel(index)">
          </div>
          <img :src="item.pic" alt="" class="shopp_content-bottom_img" @click="to(item.pid)">
          <div class="shopp_content-bottom_txt">
            <p @click="to(item.pid)">{{item.name}}</p>
            <div class="shopp_content-bottom_txt_num">
              <span class="dec" @click="sub(index)">-</span>
              <input type="text" class="num" id="num" disabled v-model="item.num">
              <span class="add" @click="add(index)">+</span>
            </div>
          </div>
          <div class="shopp_content-bottom_price">
            ￥{{item.num*item.money}}
          </div>
          <div class="shopp_content-bottom_del" v-show="flag" @click="del(index)">
            删除
          </div>
        </div>
      </div>
      <div class="shopp_foot">
        <ul>
          <li class="all">
            <input type="checkbox" v-model="bool" :class="{showOne:bool}" @click="All()">
            <p>全选</p>
          </li>
          <li class="com" @click="com">
            <input type="checkbox" v-model="no" :class="{showTwo:no}">
            <p>编辑</p>
          </li>
        </ul>
        <div class="shopp_foot_all">
          <p class="money">合计:￥{{total}}.00</p>
          <p>(不含运费)</p>
        </div>
        <div class="shopp_foot_cur">
          去结算
        </div>
      </div>
    </div>
    <!--空空如也-->

	</div>
</template>

<script>
	export default {
	    data(){
	        return{
            tag:true,
            bool:false,
            yes:false,
            no:false,
            flag:false,
            flags:true,
            arr:[],
            mm:1
          }
      },
      methods:{
	        //每个商品是否需选中
	        sel(i){
              this.arr[i].no = !this.arr[i].no;
            console.log(this.arr);
              var str = this.arr.map((v)=>{
                  return v.no
              });
//            console.log(str);
              var bul = str.every((item) =>{
                  return item == true;
              });
              if(bul){
                  this.bool = true
              }else{
                  this.bool = false
              }
          },
          All(){
	          if(this.bool == false){
	              this.arr.map((v)=>{
	                  v.no = true
                })
            }
            if(this.bool == true){
              this.arr.map((v)=>{
                v.no = false
              })
            }
          },
          get(){
              this.$router.go(-1)
          },
        com(){
              this.flag = !this.flag;
              this.flags= !this.flags
        },
        del(i){
          this.arr.splice(i,1);
        },
        sub(i){
          this.arr[i].num--;
          if(this.arr[i].num<=1){
            this.arr[i].num=1
          }
        },
        add(i){
          this.arr[i].num++
        },
        to(id){
          this.$router.push({
            path:'/details',
            query:{
                id,
            }
          })
        }
      },
    mounted(){
        this.arr = JSON.parse(sessionStorage.getItem('see'));
    },
    computed:{
        total(){
            var sun = 0
            this.arr.map((v,i)=>{
                if(v.no == true)
                    sun += v.money*v.num

            });
          return sun
        }
    }
	}
</script>

<style scoped>
  @import "../assets/css/shopp.css";
</style>
