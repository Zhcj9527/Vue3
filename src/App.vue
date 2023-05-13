<template>
  <!-- <button @[event]="handler">别说话，点我！！</button><br>
  <input type="text" v-model="b"> <br> {{ b }} -->
  <div>父集</div>
  <hr>
  <!-- <button @click="flag = !flag">test销毁</button> -->
  <test ref="wtf" :arr="[1,2,3]" :name="name" @on-click="getHaha"></test>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import test from './components/test.vue';

let name = 'zhcj';
let wtf = ref<InstanceType<typeof test>>();

  console.log(wtf.value?.name);
  

const getHaha = (name: string) => {
  console.log("子组件传过来的值", name);
}

// const event: string = 'click'
// const a: number[] = [1, 2, 2, 3, 4];
// const b = ref("123");

// const handler = () => {
//   console.log(a);
// }
</script>

<style scoped></style>
