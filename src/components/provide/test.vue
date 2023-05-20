<template>
  <div>
    <button @click="change">change flag</button>
    {{ flag }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive,inject, Ref } from 'vue'
// 还可以写默认值的
const flag = inject<Ref<number>>('flag', ref(5))

const change = () => {
  // flag!.value = 2 // 非空断言
  flag.value = 2
  console.log('test',flag);
}

console.log('test',flag);




</script>

<style scoped>

</style>