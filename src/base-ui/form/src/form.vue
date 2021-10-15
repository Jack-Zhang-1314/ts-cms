<template>
  <div class="jk-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="lableWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <!-- 不使用v-model绑定,watch监视数据改变,直接使用modelValue绑定和监听 -->
                  <!--  :model-value="modelValue[`${item.field}`]"
                      @update:modelValue="handleValueChange($event,item.field)"
                -->
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from '@vue/runtime-core'
import { ref } from 'vue'
import { IFormItem } from '../types/index'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    lableWidth: {
      type: String,
      default: () => '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 30px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //使用computed计算属性,如果formData发生变化,监听fromData函数会立即调用.产生递归
    //这里使用浅拷贝
    const formData = ref({ ...props.modelValue })

    watch(formData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })

    //不采用v-model绑定:handleValueChange
    /*const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    } */
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.jk-form {
  padding-top: 22px;
}
</style>
