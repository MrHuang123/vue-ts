<template>
  <section class="p-login p-f-c h-per-100 w-per-100 m-no p-no f-c">
    <section class="login-wrapper">
      <div class="f-s-c m-b-35 ">
        <img class="w-30" src="../../assets/logo.png" />
        <p class="c-fff f-s-18 m-b-0 m-l-20">
          多语智能教学同传平台后台管理系统
        </p>
      </div>
      <!-- <div class="login-content">
        <div class="input-box">
          <a-input
            class="h-40"
            ref="userNameInput"
            v-model="userName"
            placeholder="Basic usage"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </div>
      </div> -->
      <div class="login-content">
        <a-form
          @submit="handleSubmit"
          onkeydown="if(event.keyCode==13){return false;}"
          :form="form"
          class="login-form"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                }
              ]"
              placeholder="Username"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ]
                }
              ]"
              type="password"
              placeholder="Password"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-icon type="lock" style="color: rgba(0,0,0,.25)" />
            <a-select default-value="1" style="width: 120px">
              <a-select-option value="1">
                中文
              </a-select-option>
               <a-select-option value="2">
                英语
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item >
            <div class="w-per-100 f-c">
               <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                登录
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form, Button, Input, Icon, Select } from 'ant-design-vue'
Vue.use(Form)
  .use(Button)
  .use(Input)
  .use(Icon)
  .use(Select)
@Component
export default class Login extends Vue {
  //用户名
  private userName = ''
  //密码
  private password = ''
  beforeCreate() {
    // this.form = this.$form.createForm(this)
  }
}
</script>
<style lang="stylus">
.p-login {
  background: url('../../assets/bg1.png') #ccc no-repeat center center;
  background-size: 100% 100%;

  .ant-input {
    height: 40px;
  }

  .login-wrapper {
    width: 540px;
    padding: 20px 20px 0px;
    background: rgba(255, 255, 255, 0.35);
    color: $black;
    border-radius: 5px;
    box-shadow: 0 11px 20px 0 rgba(0, 0, 0, 0.3);
    .login-content {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

    }
  }
}
</style>
