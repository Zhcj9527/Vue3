<template>
  <div>
    <div class="zhcj m-1">
      zhcj
    </div>
    <!-- to==>path -->
    <!-- <router-link replace to="/">Login</router-link>
    <router-link replace style="margin-left: 10px;" to="/register">Register</router-link> -->
    <!-- to==>name -->
    <!-- <router-link :to="{name: 'Login'}">Login</router-link>
    <router-link style="margin-left: 10px;" :to="{name:'Register'}">Register</router-link> -->
    <!-- 编程式导航 -->
    <!-- <button @click="toPage('/')">Login</button>
    <button @click="toPage('/register')" style="margin-left: 10px;">Register</button> -->
    <!-- <button @click="toPage('Login')">Login</button>
    <button @click="toPage('Register')" style="margin-left: 10px;">Register</button> -->
    <!-- <button style="margin-left: 10px;" @click="next">Next</button>
    <button style="margin-left: 10px;" @click="prev">prev</button> -->

    <!-- 路由过渡动效 需要用到动态组件 -->
    <router-view #default="{route, Component}">
      <transition :enter-active-class="`animate__animated  ${route.meta.transition}`">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang='ts'>
import 'animate.css';

</script>

<style>

/* * {
  padding: 0;
  margin: 0;
}
html,body,#app {
  height: 100%;
  overflow: hidden;
} */
</style>