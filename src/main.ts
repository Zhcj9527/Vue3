import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import testVue from './components/test.vue'
import Loading from './components/plugins'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入router
import router from './router'
// 引入pinia
import { createPinia, PiniaPluginContext } from 'pinia'

const piniaPlugin = (context: PiniaPluginContext) => {
  console.log(context);
  
}
const store = createPinia()
// store使用pinia插件
store.use(piniaPlugin)


const app = createApp(App)
// console.log(app);
// vue注册使用插件
app.use(Loading)
app.use(ElementPlus)
app.use(store)
app.use(router)
// 定义全局组件
app.component('Test', testVue) // 组件名，就是引入的组件标签名,,要在挂载之前就全局注册使用
// 定义全局属性和方法,,***此种方法需要声明declare一下***
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
  format<T>(str: T) {
    return `zhcj-${str}`
  }
}

type Filter = {
  format<T>(str: T): string
}

type Lod = {
  show(): void,
  hide: () => void,
  isShow: boolean
}
// 用于挂载到全局了，但是会报红，则是需要声明declare
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string,
    $loading: Lod
  }
}




app.mount('#app')


