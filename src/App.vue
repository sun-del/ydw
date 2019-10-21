<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
 var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth > 750) deviceWidth = 750;
	document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';	
export default {

}
</script>

<style>
*{ margin:0; padding: 0; list-style: none;}
</style>
