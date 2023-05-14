<template>
  <div @click.stop="clip(item)" v-for="(item, index) in data" :key="index" class="tree">
    <input v-model="item.checked" type="checkbox"> <span>{{ item.name }}</span>
    <Tree v-if="item.children?.length" :data="item.children"></Tree>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

defineProps<{
  data?:Tree[]
}>()

const clip = (item: Tree) => {
  console.log(item)
}

</script>

<style scoped>
/* .tree {
  margin-left: 10px;
} */
</style>