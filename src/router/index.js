import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 定义组件
const Container = r => require(["@/page/index"], r);
const Index = r => require(["@/page/index/index"], r);

const Order = r => require(["@/page/order/index"], r);
const Task = r => require(["@/page/task/index"], r);
const Mine = r => require(["@/page/mine/index"], r);
const Login = r => require(["@/page/login/index"], r);
const Register = r => require(["@/page/register/index"], r);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/index",
      component: Container,
      children: [
        {
          path: "",
          name: "index",
          component: Index,
          meta: {
            name: '首页'
          }
        },
        {
          path: "/order",
          name: "order",
          component: Order,
          meta: {
            name: '订单'
          }
        },
        {
          path: "/task",
          name: "task",
          component: Task,
          meta: {
            name: '任务'
          }
        },
        {
          path: "/mine",
          name: "mine",
          component: Mine,
          meta: {
            name: '我的'
          }
        }
      ]
    }
  ]
});
