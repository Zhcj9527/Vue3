
<template>
  <div>
    <button>我是父组件</button>
    <Test></Test>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive, provide } from 'vue'

const flag = ref<number>(1)
console.log("APP", flag)

provide('flag', flag)

</script>

<style scoped>

</style>