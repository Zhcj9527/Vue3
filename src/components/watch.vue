<template>
  <div>
    case1: <input type="text" v-model="message">
    <hr>
    case2: <input type="text" v-model="message2">
    <hr>
    case3 : <input type="text" v-model="message3.foo.bar.name">
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive, watch } from 'vue'

let message = ref<string>('zhcj');
let message2 = ref<string>('ZHCJ');
let message3 = reactive({
  foo: {
    bar: {
      name: 'zhcj'
    }
  }
})

// ref  监听一个
/* watch(message, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}) */

// ref  监听多个---写在数组中
/* watch([message, message2], (newValue, oldValue) => {
  console.log(newValue, oldValue);
  
}) */

// reactive 监听一整个对象
/* watch(message3, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  
},{
  // deep: true, // 深度监听
  // immediate: true, // 立即执行一次
  // flush: "pre" // "pre"组件更新前调用  “sync” 同步执行   “post” 组件更新之后执行
}) */

// reactive 监听某一个属性, 要变成函数
watch(() => message3.foo.bar.name, (newValue, oldValue) => {
  console.log(newValue, oldValue, message3);
})

</script>

<style scoped>

</style>