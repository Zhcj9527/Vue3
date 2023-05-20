<template>
  <div>
    {{ name }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

const obj = reactive({name: 'zhcj'})

const {name} = await Promise.resolve(obj)


</script>

<style scoped>

</style>