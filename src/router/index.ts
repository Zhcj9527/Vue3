import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

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
  console.log(to);
  
  if (whiteList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})


export default router