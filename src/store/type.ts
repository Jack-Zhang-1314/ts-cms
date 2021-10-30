import { ILoginState } from './login/type'
import { ISystemData } from '../service/main/system/type'
import { IDashboardState } from './main/analysis/type'
export interface IRootState {
  account: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemData
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
