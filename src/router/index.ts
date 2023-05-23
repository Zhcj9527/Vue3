import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import {createVNode, render} from 'vue'
import loadingBarVue from "../components/loadingBar.vue";

const vNode = createVNode(loadingBarVue)
render(vNode, document.body)
console.log(vNode);

// vNode.component?.exposed?.startLoading()



const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    component: () => import('../components/router/Login.vue')
  },
  {
    path:'/home',
    component: () => import('../components/router/Home.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

const whiteList = ['/']
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (whiteList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})
// 后置路由导航
router.afterEach((to, from) => {

})


export default router