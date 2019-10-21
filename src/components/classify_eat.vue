<template>
  <div class="hello">
    <ul class="classify_child">
      <li class="classify_child_list" v-for="(item,index) in arr" :key="index">
        <img :src="item.thumbnail" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr:''
    }
  },
  mounted(){
    this.$http({
      url:'http://yd.msword.top/getClassify'
    }).then((res)=>{
//        console.log(res.data.data);
      this.arr = res.data.data[3].list
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/classify_child.css";
</style>
