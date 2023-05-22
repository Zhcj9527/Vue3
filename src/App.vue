<template>
  <div>
    <p>actions-user： {{ Test.user }}</p>
    <hr>
    <p>actions-name： {{ Test.name }}</p>
    <hr>
    <p>getters: {{ Test.newName }}</p>
    <br><br>
    change: <button @click="change">change</button>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import { useTestStore } from './store';

const Test = useTestStore()


const change = () => {
  // Test.setUser() // 同步
  Test.asyncSetUser() // 异步
}

</script>

<style scoped>

</style>