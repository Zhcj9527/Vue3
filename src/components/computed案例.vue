<template>
  <div>
    <div>
      <input v-model="keyword" type="text" placeholder="search">
    </div>
    <div style="margin-top: 20px;">
      <table border width="400px" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>num</th>
            <th>total</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in searchData" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button @click="item.num > 1 ? item.num-- : null">-</button>
              {{ item.num }}
              <button @click="item.num++">+</button>
            </td>
            <td>{{ item.price * item.num }}</td>
            <td> <button @click="deleteItem(index)">delete</button> </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" align="right">
              总价： {{ totalPrice }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'

//***** ref computedRef在script标签中使用时要加入.value,才可以去使用的

// let total = ref<number>(0)
let keyword = ref<string>('');

interface Data {
  name: string;
  price: number;
  num: number
}

let data = reactive<Data[]>([
  {
    name: 'zhcj',
    price: 50,
    num: 1
  },
  {
    name: 'zhcj-01',
    price: 10,
    num: 2
  },
  {
    name: 'zhcj=02',
    price: 500,
    num: 10
  }
])

let totalPrice = computed(() => searchData.value.reduce((pre: number, cur: Data) => {
  return pre + cur.num * cur.price
}, 0))
// total = totalPrice

/* const totalPrice = () => {
  total.value = data.reduce((pre:number, cur:Data) => {
    return pre + cur.price * cur.num
  },0)
}
// 相当于是method，函数调用
totalPrice() */

const deleteItem = (index: number) => {
  data.splice(index, 1)
}

let searchData = computed(() => {
  return data.filter((item: Data) => {
    return item.name.includes(keyword.value)
  })
})

</script>

<style scoped></style>