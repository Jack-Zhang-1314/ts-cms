import 'element-plus/lib/theme-chalk/index.css'
import { App } from '@vue/runtime-core'
import {
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElCheckbox,
  ElLink
]

export default function (app: App<Element>): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
