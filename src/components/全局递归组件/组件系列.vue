<template>
  <div class="card">
    <header>
      <div>标题</div>   
      <div>副标题</div>
    </header>

    <section>
      内容
    </section>

  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

</script>

<style scoped lang="less">
@border:#ccc;
.card{
  border: 1px solid @border;
  width: 400px;
  header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid @border;
  }

  section {
    padding: 5px;
    min-width: 300px;
  }
}
</style>