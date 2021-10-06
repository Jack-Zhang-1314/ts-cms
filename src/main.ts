import { createApp, App } from 'vue'

import { registerApp } from './global/index'
import 'normalize.css'
import './assets/css/index.less'

import rootApp from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
const app: App<Element> = createApp(rootApp)
setupStore()

app.use(registerApp).use(store).use(router).mount('#app')
