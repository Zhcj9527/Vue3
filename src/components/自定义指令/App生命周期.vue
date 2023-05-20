<template>
  <div>
    <button @click="flag = !flag">change flag</button>
    <div>{{ flag }}</div>
    <A v-move="{ background: 'red' }"></A>
  </div>
</template>

<script setup lang='ts'>
import { ref, Directive, DirectiveBinding } from 'vue';
import A from '../src/components/自定义指令/A.vue'
let flag = ref<boolean>(false)

type Dir = {
  background: string
}

const vMove: Directive = {
  created() {
    console.log('created');
  },
  beforeMount(...args:Array<any>) {
    console.log('beforeMount', args);
  },
  mounted(el: HTMLElement, dir:DirectiveBinding<Dir>) {
    console.log('mounted');
    el.style.background = dir.value.background
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
}

</script>

<style scoped></style>