
import { App, VNode, createVNode, render } from 'vue'
import Loading from './index.vue'
export default {
  install(app: App) {
    // console.log(app);
    // createVNode vue的底层方法  可以使我们组件创建一个虚拟DOM 也是VNode
    const vNode: VNode = createVNode(Loading)
    // render 把我们的Vnode 生成真实DOM 并且挂载到指定节点
    render(vNode, document.body)
    // Vue 提供的全局配置 可以自定义
    app.config.globalProperties.$loading = {
      show: vNode.component?.exposed?.show,
      hide: vNode.component?.exposed?.hide,
      isShow: vNode.component?.exposed?.isShow
    }

    // app.config.globalProperties.$loading.show()

  }
}