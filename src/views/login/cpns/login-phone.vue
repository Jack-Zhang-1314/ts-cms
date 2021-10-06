<template>
  <el-form>
    <el-form-item label="手机号" prop="num">
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
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone
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
