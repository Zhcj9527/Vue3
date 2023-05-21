import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import testVue from './components/test.vue'

const app = createApp(App)
// console.log(app);
// 定义全局组件
app.component('Test', testVue) // 组件名，就是引入的组件标签名,,要在挂载之前就全局注册使用
// 定义全局属性和方法,,***此种方法需要声明declare一下***
app.config.globalProperties.$env = 'dev'

app.config.globalProperties.$filters = {
  format<T> (str:T) {
    return `zhcj-${str}`
  }
}

type Filter = {
  format<T>(str: T): string
}

declare module 'vue' {
  export interface ComponentCustomProperties {
      $filters: Filter,
      $env: string
  }
}



app.mount('#app')


