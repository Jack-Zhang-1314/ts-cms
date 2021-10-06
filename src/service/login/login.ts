import { IAccount, IDataType, ILoginResult } from './type'
import service from '../service'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLogin(account: IAccount) {
  return service.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return service.get<IDataType>({
    url: loginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return service.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}
