<template>
  <div>
    <button @click="change">change flag</button>
    {{ props.modelValue }} ---{{ props.title }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive,inject, Ref } from 'vue'

// const flag = inject<Ref<number>>('flag')

type Props = {
  modelValue: number,
  title: string
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue', 'update:title'])

const change = () => {
  emit('update:modelValue', 5)
  emit('update:title', 'zhcajoj')
}





</script>

<style scoped>

</style>