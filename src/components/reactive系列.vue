<template>
  <div>
    <form>
      <input type="text" v-model="form.name"> <br>  
      <input type="text" v-model="form.age"> <br>
      <button @click.prevent="submit">Submit</button>
    </form>

    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>

</template>

<script setup lang='ts'>
import { reactive } from 'vue'
// ref支持所有的类型  reactive 引用类型 Array Object Map Set
// ref 取值赋值都是需要.value的  而reactive是不需要的
// reactive 是不能直接赋值，否则会覆盖掉 破坏proxy 

const form = reactive({
  name: 'zhcj',
  age: 25
})

const list = reactive<number[]>([1, 2,2,3,2])

const submit = () => {
  console.log(form)
}

</script>

<style scoped>

</style>