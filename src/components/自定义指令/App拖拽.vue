<template>
  <div v-drag class="box">
    <div class="header"></div>
    <div>内容</div>
  </div>
</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue'

const vDrag:Directive<HTMLElement, void> = (el:HTMLElement, binding:DirectiveBinding) => {
  // console.log(el.firstElementChild, binding);
  // offsetTop/offsetLeft 指的是当前元素到其上级层顶部/左侧的距离
  let moveEl: HTMLDivElement = el.firstElementChild as HTMLDivElement

  const mouseDown = (e: MouseEvent) => {
    // console.log(e);
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'           
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveEl.addEventListener('mousedown', mouseDown) 
}


</script>

<style scoped lang="less">
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  .header {
    height: 20px;
    background-color: black;
    cursor: move;
  }
}
</style>