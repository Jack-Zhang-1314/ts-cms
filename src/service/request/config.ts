// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://httpbin.org/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://httpbin.org/'
} else {
  BASE_URL = 'https://httpbin.org/'
}

export { BASE_URL, TIME_OUT }
