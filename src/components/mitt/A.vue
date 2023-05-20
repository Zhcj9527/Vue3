<template>
  <div>
    <h1>A</h1>
    <button @click="btnHandler">emit</button>
  </div>
</template>

<script setup lang='ts'>
import mitter from '../../utils/eventBus'
import { ref,reactive, getCurrentInstance } from 'vue'
//getCurrentInstance是获取当前实例

// const instance = getCurrentInstance() as any

// const emit = () => {
//   instance?.proxy?.$Bus.on()
// }

let str = ref<string>('zhcj')
const btnHandler = () => {
  mitter.emit('mitter', str.value)
}

</script>

<style scoped>

</style>