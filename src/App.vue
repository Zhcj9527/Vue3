<template>
  <div>
    <button @click="flag = !flag">change flag</button>
    <div>{{flag}}</div>
  </div>
</template>

<script setup lang='ts'>
let flag = ref<boolean>(false)

</script>

<style scoped>

</style>