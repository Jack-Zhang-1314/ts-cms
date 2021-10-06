import Service from './request/axios'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const service = new Service({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        //console.log(token)
        config.headers!.Authorization = `Bearer ${token}`
      }
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
