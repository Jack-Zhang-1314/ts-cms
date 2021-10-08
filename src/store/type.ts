import { ILoginState } from './login/type'
export interface IRootState {
  account: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
