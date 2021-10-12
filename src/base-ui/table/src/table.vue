<template>
  <div class="content">
    <el-table :data="userList" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem">
          <template #default="scope">
            <!-- 父组件动态的拿到子组件的值 -->
            <!-- :row="scope.row"也是一样的,代码不同 -->
            <slot
              :name="propItem.slotName"
              :[propItem.prop]="scope.row[propItem.prop]"
            >
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    userList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup(prop) {
    const propList = prop.propList as any
    // eslint-disable-next-line vue/no-dupe-keys
    return { propList }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid gray;
}
</style>
