<template>
	<div>
		<div>

			<!-- 轮播图 -->
			<div class="carousel">
				<div class="hot">
					<img src="../assets/images/meizhuang.png" alt="">
					<span>{{list.name}}</span>
				</div>
				<ul>
					<li class="price" v-for="(item,index) in list.list" :key='index' @click="to(item.id)">
						<img :src="item.thumbnail" alt="">
						<div class="price"><span class="one">￥{{item.reduct_price}}</span><a href="#" class="two">￥{{item.stock}}</a></div>
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	import '../assets/js/swiper.min.js'
	export default{
		data(){
			return{
				list:''
			}
		},
		mounted(){
			this.$http({
				url:'http://yd.msword.top/getIndexData'
			}).then((res)=>{
				// console.log(res.data.data[0])
				this.list = res.data.data[2]
			})
		},
    methods:{
      to(i){
        this.$router.push({
          path:"/details",
          query:{
            id:i
          }
        })
      }

    }
	}
</script>

<style>
	@import url("../assets/css/hot.css");
	/* @import url("../assets/css/swiper.min.css"); */
</style>

