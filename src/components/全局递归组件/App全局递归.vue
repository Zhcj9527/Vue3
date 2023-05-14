<template>
  <!-- <button @[event]="handler">别说话，点我！！</button><br> -->
  <input type="text" v-model="b"> <br> {{ b }}
  <div>父集</div>
  <hr>
  <!-- <button @click="flag = !flag">test销毁</button> -->
  <Test></Test>
  <Tree :data="data"></Tree>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
// import test from './components/test.vue';
import Tree from './components/全局递归组件/Tree.vue';

// const event: string = 'click'
// const a: number[] = [1, 2, 2, 3, 4];
const b = ref("123");

// const handler = () => {
//   console.log(a);
// }
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

const data = reactive<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false,
      }
    ]
  },
  {
    name: '2',
    checked: false,
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: true,
        children: [
          {
            name: '3-1-1',
            checked: false,
          }
        ]
      }
    ]
  }
])
</script>

<style scoped></style>
