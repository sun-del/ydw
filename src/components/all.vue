<template>
	<div>
		<ul class="nav">
			<li class="nav_list" v-for="(item,index) in arr" :key='index'>
				<router-link :to="item.path" active-class="active">
					<span :class='"logo"+index'></span>
					<p>{{item.name}}</p>
				</router-link>
			</li>

		</ul>
		 <router-view/>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				arr:[
					{
						path:'/index',
						name:'首页'
					},
					{
						path:'/classify',
						name:'分类'
					},
					{
						path:'/shopp',
						name:'购物车'
					},
					{
						path:'/me',
						name:'我'
					},
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	/* @import url("../assets/css/all.css"); */
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
.nav{
	display flex
	position fixed
	justify-content space-around
	width 7.5rem
	height 1.02rem
	bottom 0
	background-color #FFFF00
	line-height 1.02rem
	.nav_list{
		justify-content space-around
		height: 1.02rem
		text-align center
		line-height 1.02re
		a{
			display inline-block;
			text-decoration none
			line-height .4rem
			font-size .22rem
			color #696969
			span{
				display inline-block
				width .43rem
				height .42rem
			}
			.logo0{
				background url("../assets/images/tab_home_nor.png") no-repeat center
				background-size contain
			}
			.logo1{
				background url("../assets/images/tab_menu_nor.png") no-repeat center
				background-size contain
			}
			.logo2{
				background url("../assets/images/tab_shopping_nor.png") no-repeat center
				background-size contain
			}
			.logo3{
				background url("../assets/images/tab_me_nor.png") no-repeat center
				background-size contain
			}
		}
		.active{
			p{
				color #FFA500
			}
			.logo0{
				background url("../assets/images/tab_home_hig.png") no-repeat center
				background-size contain
			}
			.logo1{
				background url("../assets/images/tab_menu_hig.png") no-repeat center
				background-size contain
			}
			.logo2{
				background url("../assets/images/tab_shopping_hig.png") no-repeat center
				background-size contain
			}
			.logo3{
				background url("../assets/images/tab_me_hig.png") no-repeat center
				background-size contain
			}
		}
	}
}

</style>
