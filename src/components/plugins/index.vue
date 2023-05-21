<template>
  <div v-if="isShow" class="loading">
    Loading......
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

const isShow = ref<boolean>(false)

const show = () => isShow.value = true
const hide = () => isShow.value = false

// 对外暴露当前组件的属性和方法
defineExpose({
  isShow,
  show,
  hide
})


</script>

<style scoped>
.loading{
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  font-size: 30px;
  color: white;
  background: black;
  opacity: 0.8;

}
</style>