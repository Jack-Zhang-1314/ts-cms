import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './type'
const store = createStore<IRootState>({
  state() {
    return { account: 'zhangsan', age: 12 }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
