// 这里我们使用 http 模块来创建一个 http 服务器
//import http from 'http'
//import React from 'react'
const http = require('http');
const React = require('react');

// 这里创建应用程序主服务器。 它会伺服所有的 URI 到同一个页面上,
// 所以这里并没有具体的路由逻辑，除了一个拒绝 favicon 请求的代码。
var server = http.createServer(function(req, res) {

  // 别管这个，它仅仅用来取消浏览器对 favicon 的自动请求,
  // 如果不这样做的话，该服务器会返回一个 HTML 页面。
  if (req.url.match('favicon.ico')) {
    return res.end()
  }

  // 当然还有，这里是我们应用程序返回给浏览器的 HTML。
  // 没什么特别的，除了将应用程序的 JS 包地址指定到
  // webpack dev server (located at http://localhost:5051)
  res.write(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id="app-wrapper"></div>
        <script type="text/javascript" src="http://localhost:5051/static/bundle.js"></script>
      </body>
    </html>`
  )

  res.end()
})

module.export = server