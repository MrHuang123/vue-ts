<template>
  <div class="p-login p-f-c h-per-100 w-per-100 m-no p-no f-c login-box">
    <!-- <div>
      <div class="f-s-c herder_box p-l20">
        <img class="w-30" src="../assets/logo.png" />
        <p class="c-fff f-s-24 m-b-0 m-r-20">多语智能教学同传平台</p>
        <p  class="c-fff f-s-24 m-b-0 m-r-20">后台管理系统</p>
      </div>
    </div> -->
    登录
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Login extends Vue {
  //用户名
  private userName = ''
  //密码
  private password = ''
}
</script>
<style lang="stylus">
.p-login
  background: url('../assets/bg1.png') #ccc no-repeat center center;
  background-size: 100% 100%;
  .herder_box
    height: 60px
    padding: 0 20px
    box-shadow: 0 0 20px 2px rgba(100,100,100,.3)
    background: rgba(255,255,255,.35)
</style>
