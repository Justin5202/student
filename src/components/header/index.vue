<template>
  <div class="header">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '首页'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #f7c94b;
    color: #fff;
    font-size: 18px;
    text-align: center;
    z-index: 999;
  }
</style>
