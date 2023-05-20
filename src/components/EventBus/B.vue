<template>
  <div>
    {{ flag }}
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

type Props = {
  flag: boolean
}
const props = defineProps<Props>()

console.log("APP->B", props.flag);

</script>

<style scoped>

</style>