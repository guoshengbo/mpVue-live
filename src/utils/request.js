var Fly = require('flyio/dist/npm/wx') // npm引入方式
var fly = new Fly() // 创建fly实例

// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  config.headers['X-Tag'] = 'flyio'
  return config
})
// 配置请求基地址
fly.config.baseURL = 'https://wxapp.douyucdn.cn'

export default fly
