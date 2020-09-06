module.exports = {
  /**
   * port-服务启动的端口
   */
  port: 3000,

  /**
   * 代理的配置-可以设置多个代理
   * @param key - 代理的匹配路径
   * target-代理的目标地址
   * changeOrigin-是否改变来源
   * ws-是否支持socket
   * pathRewrite-路径重写
   */
  proxy: {
    // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    '/api_dev': {
      target: 'http://rap2api.taobao.org/app/mock/23080/resources/search',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
          '/api_dev': ''
      }
    },
    '/api_sit': {
        target: 'http://rap2api.taobao.org/app/mock/23080/resources/search',
        changeOrigin: true,
        pathRewrite: {
            '/api_sit': ''
        }
    },
    '/api_prod': {
      target: 'http://rap2api.taobao.org/app/mock/23080/resources/search',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
          '/api_prod': ''
      }
    }
  }
}
