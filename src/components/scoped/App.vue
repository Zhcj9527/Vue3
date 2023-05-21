<template>
  <div>
    <el-input placeholder="test" class="ipt"></el-input>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

</script>

<style scoped lang="less">
.ipt{
  width: 300px;
  margin: 100px 100px;
  :deep(.el-input__wrapper) {
    background-color: red;
  }
}
</style>