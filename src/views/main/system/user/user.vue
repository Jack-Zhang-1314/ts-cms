<template>
  <div class="user">
    <div class="search">
      <JKForm v-bind="formConfig"></JKForm>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JKForm from '@/base-ui/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: { JKForm },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
