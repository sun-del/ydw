<template>
  <!--登录-->
  <div class="hello">
    <div class="top"></div>
    <div class="login_top">
      <p class="log">登录</p>
      <p class="reg" @click="reg">注册</p>
      <img src="../assets/images/icon_back.png" alt="" class="left" @click="tui">
    </div>
    <div class="content">
      <div class="tel">
        手机号：<input type="text" v-model="tel">
      </div>
      <div class="tel">
        密码：<input type="password" v-model="pass">
      </div>
      <p>忘记密码</p>
      <button @click="log">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel:'',
      pass:'',
    }
  },
  methods:{
      tui(){
          this.$router.go(-1)
      },
    reg(){
          this.$router.push('/register')
    },
    log(){
            this.$http({
              url:'http://yd.msword.top/login',
              method:'get',
              params:{
                phone:this.tel,
                password:this.pass
              }
            }).then((res) =>{
              alert(res.data.msg);
//              console.log(res.data);
              if(res.data.status===1){
                this.$router.push('/me');
                sessionStorage.setItem('key',JSON.stringify({
                  name:'123',
                  img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570708624979&di=e32fad4c9853c9501d6579bfe429b854&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F00%2F1533054739-IkGULfjPzm.jpg'
                }))
              }
            })

//      this.$router.push('/index')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/login.css";
</style>
