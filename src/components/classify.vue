<template>
  <div class="hello">
		<div class="classify_heard">
      <input type="text" placeholder="Montagne jeunesse">
		</div>
    <ul class="classify_nav">
      <li><router-link to="/classify/mom" active-class="active">母婴专区</router-link></li>
      <li><router-link to="/classify/mei" active-class="active">美妆护肤</router-link></li>
      <li><router-link to="/classify/home" active-class="active">家具生活</router-link></li>
      <li><router-link to="/classify/eat" active-class="active">食品营养</router-link></li>
      <li><router-link to="/classify/qiu" active-class="active">全球直邮</router-link></li>
    </ul>
    <router-view/>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
  @import "../assets/css/classify.css";
</style>
