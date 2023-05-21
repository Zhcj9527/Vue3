<template>
  <div>
    <img v-lazy="item" width="360" height="450" v-for="(item, index) in arr" :key="index" alt="看不到了吧....">
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, Directive, DirectiveBinding } from 'vue'

// glob 是懒加载模式  globEager 静态加载  ============== 批量拿到图片做操作
// 代表imageList中的属性{default: string}类型 
// let imageList: Record<string, { default: string }> = import.meta.globEager('./assets/images/*.*')
let imageList: Record<string, { default: string }> = import.meta.glob('./assets/images/*.*', { eager: true })
let arr = Object.values(imageList).map(v => v.default)
console.log(arr);

let vLazy: Directive<HTMLImageElement, string> = async (el: HTMLImageElement, binding: DirectiveBinding) => {
  const def = await import('./assets/vue.svg') // import输出的是一个promise，得到‘module’，要点default
  // console.log(def.default);
  el.src = def.default

  const observe = new IntersectionObserver((entry) => {
    console.log(entry);
    if (entry[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = binding.value
      }, 2000);
      observe.unobserve(el) // 撤销监听元素
    }
  })
  observe.observe(el) // 监听元素

}


</script>

<style scoped></style>