<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFoid ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick()"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFoid = ref(false)
    const handleFoldClick = () => {
      isFoid.value = !isFoid.value
      emit('foldChange', isFoid.value)
    }
    return { isFoid, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
  }
}
</style>
