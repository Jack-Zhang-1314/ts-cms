import { ref } from 'vue'

import PageModal from '@/components/page-modal'

type CallbackType = (item?: any) => void
/**
 * @description role组件,user组件中,用户拿到dialog中的参数
 * @author jack-z
 * @date 19/10/2021
 * @export
 * @param {CallbackType} [newCallback]
 * @param {CallbackType} [editCallback]
 * @returns {*}
 */
export function usePageModal(
  newCallback?: CallbackType,
  editCallback?: CallbackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCallback && newCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    //console.log('点击编辑按钮', item)
    editCallback && editCallback(item)
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
