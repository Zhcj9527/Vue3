<template>
  <div>
    zhcj <br><br>
    <router-link to="/">Login</router-link>
    <router-link style="margin-left: 10px;" to="/register">Register</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

</script>

<style scoped>

</style>