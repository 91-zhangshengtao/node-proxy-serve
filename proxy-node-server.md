## node模拟serve服务 模拟proxy
1. express生成器
```
- 全局安装
     npm install express-generator - g
- 生成项目
    express 项目名
```
2. 安装http-proxy-middleware插件`http-proxy-middleware@0.20.0`
- app.js文件
```js
var express = require('express');
var path = require('path');

const proxy = require('http-proxy-middleware') // proxy  插件
const { port = 8000, proxy: proxyConfig = {} } = require('./serverConfig') // proxy 反向代理配置

var app = express();
// 静态资源
app.use(express.static(path.join(__dirname, 'public')));

// router
// app.use('/test', proxyRouter);

// proxy 反向代理
Object.keys(proxyConfig).map(key=>{
  app.use(key, proxy(proxyConfig[key]) )
})
app.listen(()=>{
  console.log(`server is running on port ${process.env.PORT ? process.env.PORT:'3000'}`)
})

module.exports = app;
```
- 配置serverConfig.js文件
```js
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
```
4. 默认监听3000端口
**/bin/www.js**