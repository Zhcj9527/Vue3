import { defineStore } from 'pinia'
import { Names } from '../store-namespace'

type User = {
  name: string,
  age: number
}

let result: User = {
  name: 'chjian',
  age: 456
}

const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'zhian',
        age: 789
      })
    }, 2000)
  })
}
// TEST
export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      user: <User>{}, // 类型断言
      name: 'hhhh'
    }
  },
  // 类似computed 可以帮助我们去修饰值
  getters: {
    newName(): string {
      return `$-${this.name}-${this.getUserAge}`
    },
    getUserAge(): number {
      return this.user.age
    }
  },
  // 可以操作异步 和 同步提交state
  actions: {
    // 同步写法
    setUser() {
      this.user = result
    },
    // 异步的写法
    async asyncSetUser() {
      let res = await Login()
      // console.log(res);
      this.user = res
      this.setName(res.name)
    },
    setName(name: string) {
      this.name = name
    }
  }
})

// BASE
export const useBaseStore = defineStore(Names.BASE, {
  state: () => {
    return {
      baseCurrent: 1
    }
  },
  getters: {

  },
  actions: {

  }
})