// 第一种： 返回一个渲染函数
/* export default function() {
  return (<div>zhcj</div>)
} */

import { defineComponent } from "vue";

// 第二种： defineComponent    optionsAPi
/* export default defineComponent({
  data() {
    return {
      age: 23
    }
  },
  render() {
    return (<div>{this.age}</div>)
  }
}) */

// 第三种：setup 函数模式
export default defineComponent({
  setup() {
    
    return () => (<div>zhcj123</div>)
  }
})



