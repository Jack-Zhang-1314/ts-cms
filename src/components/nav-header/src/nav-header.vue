<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFoid ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick()"
    ></i>
    <div class="content">
      <nav-breadcrumb :breadCrumbs="breadcrumb"></nav-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/runtime-core'
import UserInfo from './user-info.vue'
import navBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    UserInfo,
    navBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFoid = ref(false)
    const handleFoldClick = () => {
      isFoid.value = !isFoid.value
      emit('foldChange', isFoid.value)
    }

    //面包屑的数据
    const breadcrumb = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus

      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { isFoid, handleFoldClick, breadcrumb }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
