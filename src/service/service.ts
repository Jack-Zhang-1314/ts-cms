import Service from './request/axios'
import { BASE_URL, TIME_OUT } from './request/config'
const service = new Service({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('qingqiuchengg')
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (config) => {
      return config
    }
  }
})

export default service
