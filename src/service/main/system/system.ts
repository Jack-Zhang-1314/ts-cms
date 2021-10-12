import service from '../../service'
import { IDataType } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return service.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
