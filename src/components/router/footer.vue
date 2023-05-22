<template>
  <div>
    <router-view></router-view>
    <hr>
    <h1>我是父路由</h1>
    <router-link replace to="/">Login</router-link>
    <router-link replace style="margin-left: 10px;" to="/register">Register</router-link>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

</script>

<style scoped>

</style>