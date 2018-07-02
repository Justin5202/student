<template>
  <section class="task-list panel">
    <div class="container">
      <div class="task-item">
        <div class="item-container">
          <p class="item-text">任务一：邀请注册赚伙食费</p>
          <button class="btn status-btn">进行中</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .task-list {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
  }
  .container {
    padding-top: 14px;
  }
  .task-item {
    background-color: #f7c94b;
    border-radius: 4px;
    .item-container {
      display: flex;
      padding: 20px 14px;
      margin-left: 5px;
      font-size: 14px;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .status-btn {
      padding: 6px 12px;
    }
  }
</style>
