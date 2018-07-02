<template>
  <div class="tabbar-box">
    <div class="tabbar">
      <router-link to="/index">
        <span class="icon icon-index" :class="{'icon-active-index': name === 'index'}"></span>
        <span>首页</span>
      </router-link>
      <router-link to="/order">
        <span class="icon icon-order" :class="{'icon-active-order': name === 'order'}"></span>
        <span>订单</span>
      </router-link>
      <router-link to="/task">
        <span class="icon icon-task" :class="{'icon-active-task': name === 'task'}"></span>
        <span>任务</span>
      </router-link>
      <router-link to="/mine">
        <span class="icon icon-mine" :class="{'icon-active-mine': name === 'mine'}"></span>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar-box {
  position: absolute;
  z-index: 500;
  bottom: 0;
  width: 100%;
  background-color: #f7c94b;
  .tabbar {
    display: flex;
    justify-content: space-between;
    padding: 6px 28px;
  }
  a {
    font-size: 10px;
    color: #fff;
    text-decoration: none;
  }
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin-bottom: 3px;
  }
  .icon-index {
    background: url('../../assets/01-首页.png') no-repeat;
    background-size: 100%;
  }
  .icon-order {
    background: url('../../assets/02-订单.png') no-repeat;
    background-size: 100%;
  }
  .icon-task {
    background: url('../../assets/03-任务未选.png') no-repeat;
    background-size: 100%;
  }
  .icon-mine {
    background: url('../../assets/04-我的.png') no-repeat;
    background-size: 100%;
  }
  .icon-active-index {
    background: url('../../assets/01-首页-选中.png') no-repeat;
    background-size: 100%;
  }
  .icon-active-order {
    background: url('../../assets/02-订单-选中.png') no-repeat;
    background-size: 100%;
  }
  .icon-active-task {
    background: url('../../assets/03-任务-选中.png') no-repeat;
    background-size: 100%;
  }
  .icon-active-mine {
    background: url('../../assets/04-我的-已选.png') no-repeat;
    background-size: 100%;
  }
}
</style>
