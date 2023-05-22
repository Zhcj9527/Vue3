<template>
  <div>列表页面</div>
  <table border cellspacing="0" width="400"> 
    <thead>
      <tr>
        <th>品牌</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="toDetail(item)">Detail</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import {data} from '../assets/list.json'
// console.log(data);
import {useRouter} from 'vue-router'
const  router = useRouter()

type Datum = {
  name: string;
  price: number;
  id: number;
}

const toDetail = (item: Datum) => {
  router.push({
    // path: "/register",
    name: 'Register',
    // query:item,
    params: {
      name: item.name
    }
  })
}


</script>

<style scoped>
.login {
  background: gray;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: white;
}
</style>