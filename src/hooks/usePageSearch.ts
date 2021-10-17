import PageContent from '@/components/page-content'
import { ref } from '@vue/runtime-dom'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryBtnClick = (queryInfo: any) => {
    //console.log(queryInfo)
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryBtnClick]
}
