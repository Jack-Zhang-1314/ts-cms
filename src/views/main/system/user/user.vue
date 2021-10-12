<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig"></page-search>
      <JKTable :userList="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          <el-button>{{ scope.createAt }}</el-button>
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
    //const userCount = computed(() => store.state.system.userCount)

    const propList = [
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
      }
    ]
    return { formConfig, userList, propList }
  }
})
</script>

<style scoped lang="less"></style>
