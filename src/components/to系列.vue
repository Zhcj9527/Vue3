<template>
  <div>
    {{ man }}
  </div>
  <br>
  <div>
    {{ name }}---{{ age }}  {{ like }}
  </div>
  <br>
  <button @click="change">修改</button>
</template>

<script setup lang='ts'>
import { toRef, reactive, toRefs, toRaw } from 'vue';

// toRef 只能修改响应式对象的值， 非响应式视图毫无变化 ----->用于解构，并且还是响应式的
// 直接解构是么有响应式的，想到解构一定要想到toRef toRefs
// toRaw是针对reactive的，对ref对象不奏效

const man = reactive({name: 'Zhcj', age: 23, like: 'jk'})
// const e = ref({name:123})

const like = toRef(man, 'like') // 用于解构‘单个’属性，并且还是响应式的
const {name, age} = toRefs(man) // 用于解构‘多个’属性，并且还是响应式的

const change = () => {
  // man.like = '洛丽塔'
  like.value = 'hhhhh'
  console.log(like);
  console.log(toRaw(man));
}




</script>

<style scoped>

</style>