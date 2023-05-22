<template>
  <div>
    origin pinia:{{ Test.current }}
    <hr>
    pinia {{ current }}
    <br><br>
    change: <button @click="change">change</button>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import { useTestStore } from './store';
import { storeToRefs } from 'pinia'

const Test = useTestStore()
console.log(Test);
// 更改state的值
//1  Test.current++
//2  Test.$patch({current: 888}) 
//3  Test.$patch((state) => {state.current = 999}) 函数式写法---->推荐
//4  Test.$state = {current: 852}  这种方式要求全部state更改一下
//5  Test.setCurrent(456) 通过actions，可以直接使用

// pinia解构 是不具有响应式的  用storeToRefs包裹一下
const {current} = storeToRefs(Test)
console.log(current);





const change = () => {
  Test.setCurrent(456)
}

</script>

<style scoped>

</style>