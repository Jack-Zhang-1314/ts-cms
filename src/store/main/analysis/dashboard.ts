import { Module } from 'vuex'

import {
  getAddressGoodSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'

import { IDashboardState } from './type'
import { IRootState } from '../../type'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSole: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSole = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressCoodSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      //console.log(categoryGoodsCountResult)
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)

      const categoryGoodsSoleResult = await getCategoryGoodsSale()
      //console.log(categoryGoodsSoleResult)
      commit('changeCategoryGoodsSale', categoryGoodsSoleResult.data)

      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      //console.log(categoryGoodsFavorResult)
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)

      const addressGoodsSaleResult = await getAddressGoodSale()
      //console.log(addressGoodsSaleResult)
      commit('changeAddressCoodSale', addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
