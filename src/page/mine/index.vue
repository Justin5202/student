<template>
  <div class="mine panel">
    <div class="personal">
      <div class="container info">
        <div class="info">
          <div class="personal-avatar">
            <img :src="src" alt="">
          </div>
          <div class="personal-info">
            <h3>张小花</h3>
            <span>七年级二班</span>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list-cell-item">
        <div class="cell-container">
          <span>认证账户</span>
          <i class="icon-arrow"></i>
        </div>
      </div>
      <div class="list-cell-item">
        <div class="cell-container">
          <span>账户余额</span>
          <span class="cell-right">
            <span class="money">1089.00元</span>
            <i class="icon-arrow"></i>
          </span>
        </div>
      </div>
      <div class="list-cell-item">
        <div class="cell-container">
          <span>押金</span>
          <span class="cell-right">
            <span class="money">30.00元</span>
            <i class="icon-arrow"></i>
          </span>
        </div>
      </div>
      <div class="list-cell-item">
        <div class="cell-container">
          <span>挂失</span>
          <i class="icon-arrow"></i>
        </div>
      </div>
      <div class="list-cell-item">
        <div class="cell-container">
          <span>解绑</span>
          <i class="icon-arrow"></i>
        </div>
      </div>
      <div class="list-cell-item margin-top">
        <div class="cell-container">
          <span>个人信息</span>
          <i class="icon-arrow"></i>
        </div>
      </div>
      <div class="list-cell-item">
        <div class="cell-container">
          <span>设置</span>
          <i class="icon-arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      src: require('../../assets/我的，个人信息.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.personal {
  width: 100%;
  background-color: #fff;
  color: #404040;
  .container {
    padding-top: 18px;
    padding-bottom: 30px;
  }
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
}
.list {
  margin-top: 14px;
}
.list-cell-item {
  font-size: 14px;
  color: #666;
  background-color: #fff;
  .cell-container {
    padding: 14px 0;
    margin: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
  }
  .cell-right {
    display: flex;
    align-items: center;
  }
  .money {
    margin-right: 14px;
    font-size: 12px;
    color: #999;
  }
}
.margin-top {
  margin-top: 14px;
}
</style>
