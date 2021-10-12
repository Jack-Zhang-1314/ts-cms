<template>
  <div class="search">
    <JKForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="info" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </JKForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JKForm from '@/base-ui/form'

export default defineComponent({
  components: { JKForm },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sports: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
