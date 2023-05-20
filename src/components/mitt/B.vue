<template>
  <div>
    <h1>B</h1>
    <div>{{ val }}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive, Ref } from 'vue'
import mitter from '../../utils/eventBus';

let val = ref<string>('')
mitter.on('mitter', (d: string)=> {
  console.log(d);
  val.value = d
})
</script>

<style scoped>

</style>