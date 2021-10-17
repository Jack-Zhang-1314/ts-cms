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
import { defineComponent } from 'vue'
import { formConfig } from './config/search.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryBtnClick] =
      usePageSearch()
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
