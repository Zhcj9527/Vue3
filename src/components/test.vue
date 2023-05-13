<template>
  <div>
    子集--{{ name }}
    <button @click="send">给父组件传值</button>
  </div>
</template>

<script setup lang='ts'>
/* 父传子 */

// 在代码中使用是需要接收props的

// 接受父组件传过来的值,还可以接收默认值--js
/* const props = defineProps({
  name: {
    type: String,
    default: '默认值'
  }
}) */

// 接受父组件传过来的值，是不能接收默认值的-ts
/* const props = defineProps<{
  name:string;
  arr:number[]
}>()
 */
// 能接收默认值的-ts特有的
const props = withDefaults(defineProps<{
  name: string;
  arr: number[]
}>(), {
  arr: () => [666] // 引用类型需要用到函数，基础类型直接写就好啦
})

console.log(props.name, props.arr);

/* 子传父 */

// const emit = defineEmits(['on-click'])
const emit = defineEmits<{
  (event: 'on-click', name: string): void
}>()

const send = () => {
  emit('on-click', 'hhhhhh')
}

defineExpose({
  name: 123
})


</script>

<style scoped></style>