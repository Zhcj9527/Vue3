<template>
  <div>
    Ref {{ Man }}
  </div>
  <div>
    shallowRef {{ Man2 }}
  </div>
  <br>
  <button @click="change">修改</button>
</template>

<script setup lang='ts'>
import { isRef, ref, shallowRef, triggerRef } from 'vue'
// import type { Ref } from 'vue'
// ref是深层次 shallowRef是浅层次的相应
// ref shallowRef两者是不可以混用的，同时用会导致ref影响到shallowRef的，造成视图更新
// ref 响应式的数据在模板中是不要带value的，在script标签中使用是要带value的

type M = {
  name: string
}
const Man = ref<M>({name: 'zhcj'})
const Man2 = shallowRef({name: 'zhcj'})

/* type M = {
  name: string
}
const Man: Ref<M> = ref({name: 'zhcj'}) */

const change = () => {
  // Man.value.name = 'ZHCJ'
  Man2.value.name = "hhhhhh"
  triggerRef(Man2) // 强制触发了shallowRef的响应更新（没有和ref同时使用的时候）
  console.log(Man, isRef(Man));
}


</script>

<style scoped></style>