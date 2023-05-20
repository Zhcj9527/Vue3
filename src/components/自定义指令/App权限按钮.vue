<template>
  <div class="btns">
    <button v-has-show="'shop:create'">创建</button>
    <button v-has-show="'shop:edit'">编辑</button>
    <button v-has-show="'shop:delete'">删除</button>
  </div>
</template>

<script setup lang='ts'>
import { Directive } from 'vue'
// permission

localStorage.setItem('userId', 'xiaoman-zs')

// mock后台返回的数据
const permission = [
  'xiaoman-zs:shop:edit',
  'xiaoman-zs:shop:create',
  // 'xiaoman-zs:shop:delete'
]

const userId = localStorage.getItem('userId')!
// el是当前DOM元素，binding可以获取指令的值_.value
// Directive<HTMLElement,string>, 指定泛型HTMLElement => el, string => binding.value
const vHasShow: Directive<HTMLElement,string> = (el, binding) => {
  if(!permission.includes(userId + ':' + binding.value)) {
    el.style.display = 'none'
  }
}

</script>

<style scoped lang="less">
.btns{
  button {
    margin: 10px;
  }
}
</style>