<template>
  <section class="p-login p-f-c h-per-100 w-per-100 m-no p-no f-c login-box">
    <section class="w-540">
      <div class="titleBox f-s-c p-l20">
        <img class="w-160" src="../../assets/logo.png" />
        <p class="c-fff f-s-18 m-b-0 m-r-20">多语智能教学同传平台</p>
        <p class="c-fff f-s-18 m-b-0 m-r-20">后台管理系统</p>
      </div>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form p-35"
        @submit="handleSubmit"
        onkeydown="if(event.keyCode==13){return false;}"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: '请输入用户名' }] }
            ]"
            placeholder="账号"
            class="h-40 l-h-40"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入密码' }] }
            ]"
            type="password"
            placeholder="密码"
            class="h-40 l-h-40"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item> </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button m-t-30"
            >立即登录</a-button
          >
        </a-form-item>
      </a-form>
    </section>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form, Button, Input, Icon } from 'ant-design-vue'
Vue.use(Form)
  .use(Button)
  .use(Input)
  .use(Icon)
@Component
export default class Login extends Vue {
  //用户名
  private userName = ''
  //密码
  private password = ''
}
</script>
<style lang="stylus">
.p-login {
  background: url('../../assets/bg1.png') #ccc no-repeat center center;
  background-size: 100% 100%;

  .titleBox {
    height: 60px;
    padding: 0 20px;
    box-shadow: 0 0 20px 2px rgba(100, 100, 100, 0.3);
    background: rgba(255, 255, 255, 0.35);
  }
}
</style>
