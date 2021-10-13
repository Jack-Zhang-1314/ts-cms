import { App } from 'vue'
import { utcFormatString } from '@/utils/data-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return utcFormatString(value)
    }
  }
}
