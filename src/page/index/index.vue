<template>
  <div class="panel">
    <v-personal></v-personal>
    <section class="list task-list">
      <div class="container">
        <div class="list-box" @click="toTask">
          <div class="title">
            <span class="icon icon-add"></span>
            <span class="title-text">任务列表</span>
          </div>
          <p class="task-item">任务一：邀请好友转伙食费</p>
          <span class="icon-arrow"></span>
        </div>
      </div>
    </section>
    <section class="list record-list">
      <div class="container">
        <div class="title">
          <span class="icon icon-record"></span>
          <span class="title-text">消费记录</span>
        </div>
      </div>
      <div class="table">
        <table width="100%" cellspacing="0">
          <thead>
            <tr class="table-row-color">
              <th class="id">序号</th>
              <th>订单号</th>
              <th>金额</th>
              <th>消费时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr class="table-row-color">
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr>
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr class="table-row-color">
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr class="table-row-color">
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr class="table-row-color">
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr class="table-row-color">
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
            <tr class="table-row-color">
              <td>1</td>
              <td>订单号1234567890123</td>
              <td>10.00元</td>
              <td>2018-6-30 12:12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import vPersonal from '@/components/personal/index'

export default {
  components: {
    vPersonal
  },
  methods: {
    toTask() {
      this.$router.push('/task')
    }
  }
}
</script>

<style lang="scss" scoped>
.task-list {
  padding: 14px 0;
  background-color: #f2f2f2;
}
.list {
  .container {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #fff;
    position: relative;
  }
}
.record-list .container {
  padding-bottom: 14px;
}
.title {
  display: flex;
  .ttile-text {
    font-size: 16px;
    color: #333;
  }
}
.task-item {
  padding-top: 14px;
  font-size: 14px;
  color: #666;
  text-align: left;
}
.icon-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  margin-top: -10px;
}
.icon {
  display: block;
  width: 19px;
  height: 19px;
  margin-right: 14px;
}
.icon-add {
  background: url("../../assets/图标01.png") no-repeat;
  background-size: 100%;
}
.icon-record {
  background: url("../../assets/图标02.png") no-repeat;
  background-size: 100%;
}
.table {
  height: 100%;
  font-size: 14px;
}
.table-row-color {
  background-color: #f5f5f5;
}
table thead .id {
  padding: 0 7px;
}
table td,
table th {
  padding: 10px 0;
  text-align: center;
}
</style>
