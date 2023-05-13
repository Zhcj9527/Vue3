<template>
  <div>
    <input type="text" v-model="message">
    <hr>
    <input type="text" v-model="message2">
  </div>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue'

let message = ref<string>('飞机');
let message2 = ref<string>('飞机被子');

watchEffect(() => {
  // 正常监听
  console.log("message", message.value);
}, {
  flush: "post"
})


// watchEffect 返回值是一个函数，执行返回值函数会清除监听器
/* watchEffect((oninvalidate) => {
  // oninvalidate 在监听前做的callback 
  console.log("message", message.value);
  oninvalidate(() => {
    console.log('before');
  })
})
 */

</script>

<style scoped>

</style>