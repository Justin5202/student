<template>
  <div class="bg">
    <v-header :text="text"></v-header>
    <v-avatar></v-avatar>
    <div class="container panel">
      <div class="input-cell">
        <input type="tel" v-model="formData.tel" placeholder="请输入手机号码">
      </div>
      <div class="code-cell">
        <input type="num" v-model="formData.code" placeholder="请输入验证码">
        <button class="btn code-btn">获取验证码</button>
      </div>
      <div class="input-cell">
        <input type="password" v-model="formData.psw" placeholder="请输入密码">
      </div>
      <div class="input-cell">
        <input type="password" v-model="formData.repsw" placeholder="请再次输入密码">
      </div>
      <div>
        <button class="btn input-cell register-btn">确认注册</button>
        <router-link tag="span" class="to-login" to="/login">登录已有账号>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header/index'
import vAvatar from '@/components/avatar/index'

export default {
  components: {
    vAvatar,
    vHeader
  },
  data() {
    return {
      formData: {
        tel: '',
        code: '',
        psw: '',
        repsw: ''
      },
      text: '注册'
    }
  }
}
</script>

<style lang="scss" scoped>
.code-cell {
  display: flex;
  margin-bottom: 20px;
  input {
    margin-right: 5px;
    padding: 12px 0;
    background-color: #f2f2f2;
    border-radius: 6px;
  }
  .code-btn {
    background-color: #ffdc7d;
    color: #fff;
    flex-shrink: 2;
  }
}
.btn {
  width: 100%;
  background-color: #f7c94b;
}
.to-login {
  display: block;
  font-size: 12px;
  text-align: right;
  color: #999;
}
</style>
