import { ILoginState } from './login/type'
import { ISystemData } from '../service/main/system/type'
export interface IRootState {
  account: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemData
}

export type IStoreType = IRootState & IRootWithModule
