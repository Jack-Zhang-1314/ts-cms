<template>
  <div class="content">
    <div class="header">
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      @selectionCchange="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              <!-- 没有slotName属性会直接编译插槽内的内容 -->
              <!-- 有slotName属性会拿到插槽的内容替换 -->
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { IpropData } from '@/components/page-content/type'
import { defineComponent, PropType } from 'vue'
import { tableValue } from '../types/index'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    dataList: {
      type: Array as PropType<tableValue[]>,
      required: true
    },
    propList: {
      type: Array as PropType<IpropData[]>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionCchange'],
  setup(props, { emit }) {
    //使用props传参断言
    //const propList = prop.propList as Array<IpropData>

    const handleSelectionChange = (value: tableValue) => {
      emit('selectionCchange', value)
    }
    return { handleSelectionChange }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid gray;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 28px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
