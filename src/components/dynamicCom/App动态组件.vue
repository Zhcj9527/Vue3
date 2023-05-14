<template>
  <div style="display: flex;">
    <div @click="changeDiv(item, index)" :class="[active == index ? 'active' : '']" class="tabs" v-for="(item, index) in data" :key="index">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component>
</template>

<script setup lang="ts">
import { ref, reactive, shallowRef,markRaw } from 'vue';
import A from './components/dynamicCom/A.vue';
import B from './components/dynamicCom/B.vue';
import C from './components/dynamicCom/C.vue';

const comId = shallowRef(A)
const active = ref(0)

const changeDiv = (item, index) => {
  comId.value = item.com
  active.value = index
}

const data = reactive([
  {
    name: 'A组件',
    com: markRaw(A)
  },
  {
    name: 'B组件',
    com: markRaw(B)
  },
  {
    name: 'C组件',
    com: markRaw(C)
  }
])


</script>

<style scoped>
.active {
  background: skyblue;
}

.tabs {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
