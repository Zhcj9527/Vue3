import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'Footer',
    component: () => import('../components/router/footer.vue'),
    children:[
      {
        path: '',
        name:'Login',
        component: () => import('../components/login.vue')
      },
      {
        path: 'register/:name?',
        name:'Register',
        component: () => import('../components/register.vue')
      }
    ]
  },
  
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router