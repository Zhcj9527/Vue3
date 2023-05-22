<template>
  <div>
    zhcj <br><br>
    <!-- to==>path -->
    <router-link replace to="/">Login</router-link>
    <router-link replace style="margin-left: 10px;" to="/register">Register</router-link>
    <!-- to==>name -->
    <!-- <router-link :to="{name: 'Login'}">Login</router-link>
    <router-link style="margin-left: 10px;" :to="{name:'Register'}">Register</router-link> -->
    <!-- 编程式导航 -->
    <!-- <button @click="toPage('/')">Login</button>
    <button @click="toPage('/register')" style="margin-left: 10px;">Register</button> -->
    <!-- <button @click="toPage('Login')">Login</button>
    <button @click="toPage('Register')" style="margin-left: 10px;">Register</button> -->
    <button style="margin-left: 10px;" @click="next">Next</button>
    <button style="margin-left: 10px;" @click="prev">prev</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 编程式导航需要 useRouter
import { useRouter } from 'vue-router'

const router = useRouter()

const toPage = (url: string) => {
  // 字符串跳转
  // router.push(url)
  // 对象---> 也是可以传参的
  router.push({
    // path: url
    name: url
  })
}

const next = () => {
  router.go(1)
}

const prev = () => {
  router.back()
}

</script>

<style scoped></style>