// router.js
// import Vue from 'vue'
import {createRouter, createWebHistory}  from 'vue-router'
import MyPage from '../components/my-page.vue'

// Vue.use(VueRouter)

const routes = [
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'my-page',
    component: MyPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
