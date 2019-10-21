<template>
  <!--注册-->
  <div class="hello">
    <div class="top"></div>
    <div class="login_top">
      <p class="log">注册</p>
      <p class="reg" @click="log">登录</p>
      <img src="../assets/images/icon_back.png" alt="" class="left" @click="to()">
    </div>
    <div class="content">
      <div class="tel">
        手机号：<input type="text" v-model="tel">
      </div>
      <div class="tel">
        密&nbsp;码：<input type="password" v-model="pass">
      </div>
      <div class="tel">
        验证码：<input type="text" v-model="yanzheng">
        <button class="gain" @click="gain()">点击获取</button>
      </div>
      <button class="last" @click="next">下一步</button>
      <p class="bot"><input type="checkbox" v-model="flag"><span>我已阅读并同意使用条款和隐私政策</span></p>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';
export default {
  data () {
    return {
      flag:false,
      tel:'',
      pass:'',
      yanzheng:'',
    }
  },
  methods:{
      log(){
          this.$router.push('/login')
      },
    to(){
        this.$router.go(-1)
    },
    next(){
      let params={
          phone:this.tel,
          password:this.pass
      };
      let reg = /^1[3-9][0-9]{9}$/;
      var mes = /^[0-9,a-z,A-Z]{6,18}$/;
      if(!reg.test(this.tel)){
          alert('手机号不正确')
      }else if (!mes.test(this.pass)){
        alert('请输入6-18位密码')
      }else if(this.flag===false){
        alert('请勾选条款')
      }else if(reg.test(this.tel)){
        this.$http({
          url:'http://localhost:3000/captcha/verify?phone='+this.tel+'&captcha='+this.yanzheng
        }).then((res)=>{
          if(res.status === 200){
              this.$http({
                url:'http://yd.msword.top/register',
                method:'post',
                data:qs.stringify(params)
              }).then((res) =>{
                console.log(res);
                alert(res.data.msg);
                 this.$router.push('/login')
              })
          }
        }).catch(()=>{
          alert('验证码错误')
        })
      }

    },
    gain(){
      var reg = /^1[3-9][0-9]{9}$/;
//      var mes = /^[0-9,a-z,A-Z]{6,}$/;
      if(reg.test(this.tel)){
          this.$http({
            url:'http://localhost:3000/captcha/sent?phone='+this.tel
          }).then((res)=>{
//            console.log(res);
            alert('获取验证成功')
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/register.css";
</style>
