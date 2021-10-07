<template>
  <el-form :rules="rules" :model="phone" ref="formRef">
    <el-form-item label="手机号" prop="num" ref="formRef">
      <el-input v-model="phone.num"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="getCode">
        <el-input v-model="phone.code"></el-input>
        <el-button type="primary" class="geetBtn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            console.log('本地缓存账号密码')
          }
          console.log('dispach提交到vuex去')
        }
      })
    }
    return {
      phone,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style lang="less" scoped>
.getCode {
  display: flex;
}
.geetBtn {
  margin-left: 0.5rem;
}
</style>
