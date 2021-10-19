import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

import localCache from '@/utils/cache'
import router from '@/router'
import {
  accountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { mapMenusToRoutes, mapMenusToPermissions } from '../../utils/map-menus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //登录
      const loginResult = await accountLogin(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 发送初始化的请求(完整的role/department)
      //dispatch('getInitialDataAction', null, { root: true })

      //请求用户数据
      const userInfo = await requestUserInfoById(id)
      const userInfoData = userInfo.data
      //console.log(userInfoData)
      commit('changeUserInfo', userInfoData)
      localCache.setCache('userInfoData', userInfoData)

      //请求用户菜单
      const userMenus = await requestUserMenusByRoleId(userInfoData.role.id)
      const userMenusData = userMenus.data
      //console.log(userMenusData)
      commit('changeUserMenus', userMenusData)
      localCache.setCache('userMenusData', userMenusData)

      //路由跳转
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfoData = localCache.getCache('userInfoData')
      if (userInfoData) {
        commit('changeUserInfo', userInfoData)
      }
      const userMenusData = localCache.getCache('userMenusData')
      if (userMenusData) {
        commit('changeUserMenus', userMenusData)
      }
    }
    /* phoneLoginAction({ commit }, payload: any) {
      console.log('执行', 'phone')
    } */
  },
  mutations: {
    changeToken(state, token: string) {
      /* console.log(token) */
      state.token = token
    },
    changeUserInfo(state, userInfoData: any) {
      state.userInfo = userInfoData
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus

      //将userMenus映射到routes=>router.main.children
      const routes = mapMenusToRoutes(userMenus)
      //console.log(routes)

      //routes=>router.main.children(映射关系)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户按钮的权限
      const permissions: string[] = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  }
}

export default loginModule
