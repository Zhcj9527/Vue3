<template>
  <div class="login">
    <el-card class="box-card">
      <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline">
        <el-form-item prop="user" label="Account:">
          <el-input v-model="formInline.user" placeholder="请输入账号..." />
        </el-form-item>
        <el-form-item prop="password" label="Password:">
          <el-input type="password" v-model="formInline.password" placeholder="请输入密码..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { FormItemRule, FormInstance,ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type Form = {
  user: string,
  password: string
}

type Rules = {
  [k in keyof Form]?: Array<FormItemRule>
}

const formInline = reactive<Form>({
  user: '',
  password: '',
})

const form = ref<FormInstance>()
const rules = reactive<Rules>({
  user: [
    {
      required: true, // 必须的
      message: '一定要写哦',  // 没写会提示的信息
      type: 'string',
    }
  ],
  password: [
    {
      required: true, // 必须的
      message: '一定要写哦',  // 没写会提示的信息
      type: 'string',
    }
  ]
})

const onSubmit = () => {
  // console.log('submit!')
  // router.push('/home')
  form.value?.validate((valid) => {
    if(valid) {
      router.push('/home')
      localStorage.setItem('token', '1')
    } else {
      ElMessage.error('Oops, this is a error message.')
    }
  })
}
</script>

<style scoped lang="less">
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>