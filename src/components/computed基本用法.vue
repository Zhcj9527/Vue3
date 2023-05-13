<template>
  <div>
    <div>
      firstName: <input type="text" v-model="firstName">
    </div>
    <div>
      lastName: <input type="text" v-model="lastName">
    </div>
    <br>
    fullName: {{ name }}
    <div>
      <button @click="changeName">changeName</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'

let firstName = ref("zhang");
let lastName = ref("san");
// 1.选项式写法 支持一个对象传入get set函数自定义操作

/* let name = computed<string>({
  get() {
    return firstName.value + '-' + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] =  newValue.split('-');
  }
})

const changeName = () => {
  name.value = '小-满';
} */

// 2.函数式写法 只能支持一个getter函数 不允许修改值的

let name = computed(() => firstName.value + '-' + lastName.value)

const changeName = () => {
  name.value = '小-满';
}


</script>

<style scoped></style>