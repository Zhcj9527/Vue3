<template>
  <div>
    <img id="img" width="300" height="400" src="./assets/images/1.jpeg" alt="">
  </div>
</template>

<script setup lang='ts'>
// import { ref,reactive } from 'vue'
import useBase64 from './components/hooks'

// console.log(useBase64({el: '#img'}));
useBase64({el: '#img'}).then((res) => {console.log(res.baseUrl)})


</script>

<style scoped>

</style>