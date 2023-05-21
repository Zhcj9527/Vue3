<template>
  <div>
    {{ $env }}
  </div>
  <div>
    {{ $filters.format('123') }}
  </div>
</template>

<script setup lang='ts'>
// import { ref,reactive } from 'vue'
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()
console.log(instance?.proxy?.$env);
console.log(instance?.proxy?.$filters.format('jkjk'));



</script>

<style scoped>

</style>