import { createApp, App } from 'vue'
import { login } from './service/index'
import { registerApp } from './global/index'
import rootApp from './App.vue'
import router from './router'
import store from './store'

const app: App<Element> = createApp(rootApp)

app.use(registerApp).use(store).use(router).mount('#app')

login.then((res) => {
  console.log(res)
})
