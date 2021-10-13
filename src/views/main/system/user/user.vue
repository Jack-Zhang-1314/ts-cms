<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig"></page-search>
      <JKTable
        :userList="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import JKTable from '@/base-ui/table'
import { useStore } from '@/store'
import { IpropData } from './type'

export default defineComponent({
  name: 'user',
  components: { PageSearch, JKTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 9
      }
    })

    //拿到所有vuex中ajax请求的数据
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList: Array<IpropData> = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建事件',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新事件',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        prop: 'hao',
        label: '操作',
        minWidth: '150',
        slotName: 'handler'
      }
    ]
    const showIndexColumn = true
    const showSelectColumn = true
    return {
      formConfig,
      userList,
      propList,
      userCount,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped lang="less">
.handle-btns {
  display: flex;
}
</style>
