import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../type'
import { getPageListData } from '@/service/main/system/system'

//Module传入的泛型,第一个是当前state的类型,第二个是跟state类型
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //console.log(payload.pageUrl)

      //获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      //对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      //console.log(pageResult)
      //将数据存储到state中
      const { list, totalCount } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: any) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: any) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  }
}

export default systemModule
