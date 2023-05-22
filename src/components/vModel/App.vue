<template>
  <div>
    App--{{ flag }}
    <test v-model="flag" v-model:title="title"></test>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive,provide } from 'vue'
import test from './components/test.vue';

const flag = ref<number>(4)
const title = ref<string>('zhcj')
// provide('flag', flag)
</script>

<style scoped>

</style>