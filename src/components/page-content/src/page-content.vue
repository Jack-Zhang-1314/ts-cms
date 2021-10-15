<template>
  <div class="page-content">
    <JKTable :dataList="dataList" v-bind="contentTableConfig">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
        <el-button icon="el-icon-refresh"></el-button>
      </template>
      <!-- 列表中的插槽 -->
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="primary"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="danger"
            >删除</el-button
          >
        </div>
      </template>
    </JKTable>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useStore } from '@/store'
import JKTable from '@/base-ui/table'
import { ITableConfig } from '../type'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object as PropType<ITableConfig>,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    JKTable
  },
  setup(props) {
    const store = useStore()
    //发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
      //console.log({ ...queryInfo })
    }
    getPageData()
    //从vuex中获取数据
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    return { dataList, getPageData }
  }
})
</script>

<style scoped lang="less">
.handle-btns {
  display: flex;
}
</style>
