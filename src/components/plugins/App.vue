<template>
  <div>
    <Loading></Loading>
    {{ $loading.isShow }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive,getCurrentInstance } from 'vue'
import Loading from './components/plugins/index.vue'

const instance = getCurrentInstance()
instance?.proxy?.$loading.show()



</script>

<style scoped>

</style>