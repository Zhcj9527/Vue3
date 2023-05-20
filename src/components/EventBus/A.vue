<template>
  <div>
    <button @click="emitB">dispatch => B</button>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
// import Bus from '../EventBus/Bus'

const emit = defineEmits(['on-click'])
let flag = ref<boolean>(true)
const emitB = () => {
  flag.value = !flag.value
  emit('on-click', flag)
}

</script>

<style scoped>

</style>