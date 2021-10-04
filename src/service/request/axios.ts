import axios, { AxiosInstance } from 'axios'
import { RequestInterceptors, RequestConfig } from './interceptors'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true
class Service {
  service: AxiosInstance
  interceptors?: RequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean
  constructor(config: RequestConfig) {
    //创建axios实例
    this.service = axios.create(config)
    //保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    //实例才有的拦截器
    this.service.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.service.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有的实例都有的拦截器
    this.service.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: DEFAULT_LOADING,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )
    this.service.interceptors.response.use(
      (res) => {
        //移除loading
        this.loading?.close()

        const { data } = res
        if (data === '-10001') {
          console.log('失败')
        } else {
          return data
        }
      },
      (error) => {
        //移除loading
        this.loading?.close()

        if (error.response.status === 404) {
          console.log('404')
        }
        return error
      }
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      //请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //关闭加载动画
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.service
        .request<any, T>(config)
        .then((res) => {
          //响应拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //得将showloading设置为true
          this.showLoading = DEFAULT_LOADING
          //数据向下传递
          reslove(res)
        })
        .catch((err) => {
          //将showloading设为true
          this.showLoading = DEFAULT_LOADING
          //错误向下传递
          reject(err)
        })
    })
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Service
