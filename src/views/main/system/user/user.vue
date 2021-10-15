<template>
  <div class="user">
    <div class="search">
      <page-search
        :formConfig="formConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryBtnClick"
      ></page-search>
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { formConfig } from './config/search.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryBtnClick = (queryInfo: any) => {
      console.log('query')
      pageContentRef.value?.getPageData(queryInfo)
    }
    return {
      formConfig,
      contentTableConfig,
      handleQueryBtnClick,
      handleResetClick,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less"></style>
