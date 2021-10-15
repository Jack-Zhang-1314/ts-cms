<template>
  <div class="role">
    <PageSearch :formConfig="formConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search/index'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    PageSearch
  },
  setup() {
    return { contentTableConfig, formConfig }
  }
})
</script>

<style scoped></style>
