<template>
	<!-- 首页 -->
	<div class="box" style="padding-bottom: 1.02rem;">
		<div class="banner">
			<!-- <div class="bac_one"></div> -->
			<div class="bac_two">
				<input type="text" placeholder="Montagne jeunesse">
			
			</div>
			<img src="../assets/images/banner.jpg" alt="">
		</div>
			<hot></hot>
		 	<infant></infant>
			<beauty></beauty>
			<home></home>
			<food></food>
			<airplane></airplane>
	</div>
</template>

<script>
	    
	
	import hot from './hot.vue'
	import infant from './infant.vue'
	import beauty from './beauty.vue'
	import home from './home.vue'
	import food from './food.vue'
	import airplane from './airplane.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			hot,
			infant,
			beauty,
			home,
			food,
			airplane
		}
	}
</script>

<style scoped>
	@import url("../assets/css/index.css");
</style>
