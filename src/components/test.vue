<template>
  <div>
    <button @click="change">change flag</button>
    {{ flag }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive,inject, Ref } from 'vue'

const flag = inject<Ref<number>>('flag')

const change = () => {
  flag!.value = 2
  console.log('test',flag);
}

console.log('test',flag);




</script>

<style scoped>

</style>