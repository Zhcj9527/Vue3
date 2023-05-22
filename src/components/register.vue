<template>
  <div class="register">
    Register
  </div>
  <hr>
  <div>
    {{ item?.name }}--{{ route.params.price }}--{{ route.params.id }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import {data} from '../assets/list.json'
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(route);

const item = data.find(v => v.name === route.params.name)
console.log(item);


</script>

<style scoped>
.register {
  background: red;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: white;
}
</style>