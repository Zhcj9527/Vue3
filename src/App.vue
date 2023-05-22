<template>
  <div>
    <p>actions-user: {{ Test.user }}</p>
    <hr>
    <p>actions-name: {{ Test.name }}</p>
    <hr>
    <p>getters: {{ Test.newName }}</p>
    <br><br>
    change: <button @click="change">change</button>
    <hr>
    <p>
      <button @click="reset">reset</button>
    </p>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useTestStore } from './store';

const Test = useTestStore()

 // 类似watchEffect，侦听state的值
/* Test.$subscribe((args, state) => {
  console.log('========>',args);
  console.log('========>',state);
}) */
// 

const change = () => {
  // Test.setUser() // 同步
  Test.asyncSetUser() // 异步
}

const reset = () => {
  Test.$reset()  // 重置state的值
}

</script>

<style scoped></style>