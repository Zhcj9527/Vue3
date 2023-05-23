<template>
  <div class="wraps">
    <div ref="bar" class="barr"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)

const stratLoading = () => {
  let dom = bar.value as HTMLElement
  console.log(dom);
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1
      dom.style.width = speed.value + '%'
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1
      // 清除请求动画帧
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement

  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + '%'
    })
  },500)
}

onMounted(() => {
  stratLoading()
  endLoading()
})

defineExpose({
  stratLoading,
  endLoading,
  speed
})

</script>

<style scoped lang="less">
.wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10px;

  .barr {
    height: inherit;
    width: 0;
    background-color: red;
  }
}
</style>