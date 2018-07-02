<template>
  <div class="order-detail panel">
    <div class="container">
      <div class="order-info">
        <p>订单号：546546165164654654</p>
        <p class="time">时间：2018-6-30 12:54</p>
        <p>金额：10元</p>
      </div>
      <div class="order-info order-list">
        <div class="list-content">
          <div class="list-item">
            <div class="item-info">
              <img class="item-img" src="" alt="">
              <div class="info">
                <span>西红柿炒鸡蛋</span>
                <span class="num">×1</span>
              </div>
            </div>
            <div class="item-price">￥3.0</div>
          </div>
          <div class="list-item">
            <div class="item-info">
              <img class="item-img" src="" alt="">
              <div class="info">
                <span>烧鸭</span>
                <span class="num">×1</span>
              </div>
            </div>
            <div class="item-price">￥3.0</div>
          </div>
          <div class="list-item">
            <div class="item-info">
              <img class="item-img" src="" alt="">
              <div class="info">
                <span>青菜</span>
                <span class="num">×1</span>
              </div>
            </div>
            <div class="item-price">￥3.0</div>
          </div>
          <div class="list-item">
            <div class="item-info">
              <img class="item-img" src="" alt="">
              <div class="info">
                <span>米饭</span>
                <span class="num">×1</span>
              </div>
            </div>
            <div class="item-price">￥1.0</div>
          </div>
        </div>
      </div>
      <div class="total">
        <span>合计：<b class="money">￥10.00</b></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.order-detail {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.container {
  padding-top: 14px;
  padding-bottom: 14px;
}
.order-info {
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
  .time {
    margin: 10px 0;
  }
}
.order-list {
  margin-top: 14px;
  padding: 10px 0;
  border-bottom: 1px dashed #d9d9d9;
  .list-content {
    padding-top: 10px;
  }
}
.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fafafa;
  .item-img {
    display: block;
    width: 40px;
    height: 40px;
    background-color: #f7c94b;
  }
  .item-info {
    display: flex;
  }
  .info {
    margin-left: 5px;
    span {
      display: block;
    }
    .num {
      margin-top: 6px;
      font-size: 10px;
      color: #b2b2b2;
    }
  }
}
.total {
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px;
  background-color: #fff;
  span .money {
    color: #fa393a;
  }
}
</style>
