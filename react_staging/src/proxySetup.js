const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  app.user(
    proxy('/api1', { // 遇见 /api1 前缀的转发到 代理配置
      target: "http://localhost:5000", // 请求转发给谁
      changeorigin: true, // 控制服务器收到的请求头中的 Host 字段的值 ， Host 标识这请求是从哪里发送的
      /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
      pathRewrite: {"^/api1": ""} // 重写请求路径（必须），如果不写，则请求地址会添加上前缀
    }),
    proxy('/api2', {
      target: "http://localhost:5000",
      changeorigin: true,
      pathRewrite: {"^/api2": ""}
    })
  )
}