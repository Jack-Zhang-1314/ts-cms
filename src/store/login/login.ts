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
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
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
    }
  }
}

export default loginModule
