export interface ISystemData {
  userCount: number
  userList: any[]
}
export interface ISystemResult {
  list: any
  totalCount: number
}
export interface IDataType<T = any> {
  code: 0
  data: T
}
