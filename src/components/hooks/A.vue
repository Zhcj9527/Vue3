<template>
  <div class="A">
    A组件
  </div>
</template>

<script setup lang='ts'>
// import { ref,reactive } from 'vue'

// vue自带的hooks，还有useSlot
import { useAttrs } from 'vue';

let attrs = useAttrs()
console.log(attrs);


</script>

<style scoped>

</style>