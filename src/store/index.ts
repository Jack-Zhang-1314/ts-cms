import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './type'
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
export default store
