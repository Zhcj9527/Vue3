<template>
  <div>
    <A @on-click="getFlag"></A>
    <B :flag="flag"></B>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive, } from 'vue'
import A from './components/EventBus/A.vue'
import B from './components/EventBus/B.vue'

let flag = ref(false)

const getFlag = (params: boolean) => {
  flag.value = params
  console.log('A-> APP',params);
}


</script>

<style scoped>

</style>