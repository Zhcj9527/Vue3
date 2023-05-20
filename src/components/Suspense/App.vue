<template>
  <div>
      <suspense>
          <template #default>
            <div>
              <test></test>
            </div>
          </template>
          <template #fallback>
            <div>
              LOADING............
            </div>
          </template>
      </suspense>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive,defineAsyncComponent } from 'vue'
const test = defineAsyncComponent(() => import('./components/test.vue'))
</script>

<style scoped>

</style>