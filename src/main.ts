import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import testVue from './components/test.vue'

const app = createApp(App)
console.log(app);


app.component('Test', testVue) // 组件名，就是引入的组件标签名,,要在挂载之前就全局注册使用


app.mount('#app')


