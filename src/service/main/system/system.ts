import service from '../../service'
import { IDataType } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return service.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//url:/users/id
export function deletePageData(url: string) {
  return service.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return service.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return service.patch<IDataType>({
    url,
    data: editData
  })
}
