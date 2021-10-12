<template>
  <div class="breadCrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumbs" :key="item.name">
        <el-breadcrumb-item>
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { IBreadcrumb } from '../types/index'
export default defineComponent({
  props: {
    breadCrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>
