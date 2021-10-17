import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../../type'
import { getPageListData } from '@/service/main/system/system'
import { deletePageData } from '@/service/main/system/system'
import { createPageData } from '../../../service/main/system/system'

//Module传入的泛型,第一个是当前state的类型,第二个是跟state类型
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //console.log(payload)

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
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      //获取pageName和id
      //pageName-->/users
      //id-->/users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      //删除数据
      await deletePageData(pageUrl)
      //重新请求最新的数据
      dispatch(`getPageListAction`, {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      //创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      //请求最新的数据
      dispatch(`getPageListAction`, {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      //创建数据的请求
      const { pageName, editData, id } = payload
      console.log(editData)
      const pageUrl = `/${pageName}/${id}`
      await createPageData(pageUrl, editData)

      //请求最新的数据
      dispatch(`getPageListAction`, {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
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
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: any) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: any) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}

export default systemModule
