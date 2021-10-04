import 'element-plus/lib/theme-chalk/index.css'
import { App } from '@vue/runtime-core'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

export default function (app: App<Element>): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
