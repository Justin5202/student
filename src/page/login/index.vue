<template>
  <div class="bg">
    <v-header :text="text"></v-header>
    <v-avatar></v-avatar>
    <div class="container panel">
      <div class="input-cell">
        <input type="tel" v-model="formData.tel" placeholder="请输入手机号码">
      </div>
      <div class="input-cell">
        <input type="password" v-model="formData.psw" placeholder="请输入密码">
      </div>
      <div>
        <button class="btn login-btn" @click="login">登录</button>
        <p class="tips-box">
          <span class="tips-item">忘记密码</span>
          <router-link tag="span" class="tips-item" to="/register">注册新账号</router-link>
        </p>
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
        psw: '',
      },
      text: '登录'
    }
  },
  methods: {
    login() {
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-btn {
  width: 100%;
  margin-bottom: 20px;
}
.tips-box {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}
</style>
