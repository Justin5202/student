<template>
  <div class="personal">
    <div class="container info">
      <div class="info">
        <div class="personal-avatar">
          <img :src="src" alt="">
        </div>
        <div class="personal-info">
          <h3>张小花</h3>
          <span>七年级二班</span>
          <span class="qr">学生二维码>></span>
        </div>
      </div>
      <div class="personal-balance">
        <span>余额
          <b>1089.00</b>元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require('../../assets/首页头像.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.personal {
  width: 100%;
  background-color: #f7c94b;
  color: #fff;
}
.container {
  padding-top: 32px;
  padding-bottom: 40px;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.personal-avatar {
  img {
    display: block;
    width: 100px;
    height: 100px;
  }
}
.personal-info {
  margin-left: 17px;
  text-align: left;
  h3 {
    font-size: 16px;
  }
  span {
    display: block;
    font-size: 10px;
    margin-top: 5px;
  }
  .qr {
    font-size: 9px;
  }
}
.personal-balance {
  font-size: 10px;
  b {
    font-size: 20px;
    color: #f93b3a;
  }
}
</style>
