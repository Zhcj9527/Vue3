import { defineStore } from 'pinia'
import { Names } from '../store-namespace'

export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      current: 100
    }
  },
  // 类似computed 可以帮助我们去修饰值
  getters: {

  },
  // 可以操作异步 和 同步提交state
  actions: {
    setCurrent(num: number) {
      this.current = num
    }
  }
})
