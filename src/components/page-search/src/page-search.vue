<template>
  <div class="search">
    <JKForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button
            type="info"
            icon="el-icon-refresh"
            @click="handlerResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handlerQueryClick"
            >搜索</el-button
          >
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    //双向绑定的属性应该是有配置文件的field决定
    //1.formData应该由field动态决定
    const formItems = props.formConfig.formItems ?? []

    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    //2.当用户点击重置
    const handlerResetClick = () => {
      //浅拷贝,修改每个key对应的值
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }

      //使用浅拷贝,指向了另一个对象(不采用双向绑定的做法)
      //formData.value = formOriginData
      emit('resetBtnClick')
    }

    //用户点击搜索
    const handlerQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handlerResetClick,
      handlerQueryClick
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
