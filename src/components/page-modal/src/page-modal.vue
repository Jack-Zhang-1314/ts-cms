<template>
  <el-dialog
    title="新建用户"
    v-model="dialogVisible"
    width="30%"
    center
    destroy-on-close
  >
    <JKForm v-bind="modalConfig" v-model="formData"></JKForm>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import JKForm from '@/base-ui/form'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    JKForm
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    //对modalConfig配置项初始化
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
          //console.log(formData.value)
          //console.log(newValue[`${item.field}`])
        }
      }
    )

    //点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        //console.log('编辑用户')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        })
      } else {
        //新建
        //console.log('新建用户')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
