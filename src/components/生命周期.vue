
<template>
  <div>
    <div ref="div">{{ str }}</div>
    <button @click="change">change</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onUpdated, onBeforeUpdate, onUnmounted, onBeforeUnmount } from 'vue'
// 没有onBeforeCreate onCreated
console.log('setup');

let str = ref<string>('zhcj');
// 获取dom元素=> 先打ref，给个name，在将name响应式ref<T>赋值
let div = ref<HTMLDivElement>();

const change = () => {
  str.value = '被改啦'
}

// 创建
onBeforeMount(() => {
  console.log('创建之前', div.value);

}),
onMounted(() => {
  console.log('创建完了', div.value);

}),
// 更新
onBeforeUpdate(() => {
  console.log('更新之前', div.value?.innerHTML);

}),
onUpdated(() => {
  console.log('更新完啦', div.value?.innerHTML);

}),
// 销毁
onBeforeUnmount(() => {
  console.log('卸载之前');

}),
onUnmounted(() => {
  console.log('卸载完啦');

})
</script>

<style scoped></style>