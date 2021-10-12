import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../type'
import { getPageListData } from '@/service/main/system/system'

//Module传入的泛型,第一个是当前state的类型,第二个是跟state类型
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload.pageUrl)

      //对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: any) {
      state.userCount = userCount
    }
  }
}

export default systemModule
