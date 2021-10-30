export interface IAccount {
  account: string
  password: string
}
export interface ILoginResult {
  id: number
  name: string
  token: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}

export interface IDataUserInfoById {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: any
  department: any
}
