import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

/* import {createVNode, render} from 'vue'
import loadingBarVue from "../components/loadingBar.vue";

const vNode = createVNode(loadingBarVue)
render(vNode, document.body)
console.log(vNode);

vNode.component?.exposed?.startLoading() */

// router--meta--需要用到TS拓展
declare module 'vue-router' {
  // 憨批，这是route你是路由器router的
  interface RouteMeta {
    title: string,
    transition:string
  }
}

const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    component: () => import('../components/router/Login.vue'),
    meta:{
      title: 'Login',
      transition:'animate__fadeIn'
    }
  },
  {
    path:'/home',
    component: () => import('../components/router/Home.vue'),
    meta:{
      title: 'Home',
      transition:'animate__fadeInUp'
    }
  }
]


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    console.log(savedPosition);
    if(savedPosition) {
      return savedPosition // 暂存此时滚动条的位置
    } else {
      return {
        top:0 // 这里可以手写指定的位置，比如说top：500
      }
    }
    // 可以返回的是指定的位置
    /* return {
      top:500
    } */
    // 返回的可以是异步
    /* return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          top: 400
        })
      }, 2000);
    }) */
    
  },
  routes,
})


const whiteList = ['/']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title 
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