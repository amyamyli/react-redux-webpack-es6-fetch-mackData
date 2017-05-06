### Target
> 使用React技术栈（react＋redux＋es6＋webpack＋fetch＋mackData）开发SPA.

### Tech Stack
* UI库：React & React-Dom
* UI组件：Antd
* 路由：React-Router-dom & History
* 框架：Redux
* JS：ES6 
* 样式：Less,css
* 与后台通信：Fetch/Ajax
* 假数据模拟：MockJS
* 打包构建：Babel Webpack
* 包管理：Npm

### Features react＋redux＋es6＋webpack＋fetch＋mackData
* 自主配置开发环境
* 支持ES6
* webpack 打包压缩资源
* redux 框架
* React-Router配置路由
* Less代替Css
* Fetch代替Ajax
* MockJs模拟数据
* 支持jQuery
* 支持浏览器自动刷新

### Usage
> 1、安装依赖：$ npm install  
> 2、启动服务：$ npm start  
> 3、生成文件：$ npm run build  

### Articles
* [React 的ES5、ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
* [React 组件之间如何交流](http://www.tuicool.com/articles/AzQzEbq)
* [react-router 中的history](https://zhuanlan.zhihu.com/p/20799258?refer=jscss)
* [react-router 按需加载](https://segmentfault.com/a/1190000007141049)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)
* [Webpack 实例和文章](https://github.com/JasonBai007/webpack-starter-kit)
* [React Reflux](https://segmentfault.com/a/1190000002793786)
* [React+reflux应用 IE8/9/10/11兼容实践](https://segmentfault.com/a/1190000005794242#articleHeader9)
* [Reflux系列01：异步操作经验小结](https://segmentfault.com/a/1190000004250062)
* [传统 Ajax 已死，Fetch 永生](http://www.jianshu.com/p/THLARe#)
* [Fetch API](https://github.github.io/fetch/)
* [使用Mock.js进行独立于后端的前端开发](https://segmentfault.com/a/1190000003087224)
＊ [reactSPA demo](https://github.com/JasonBai007/reactSPA) 
＊ [Redux 中文文档](http://cn.redux.js.org/index.html)

### Diary(填坑日志)
> 1、webpack配置相关问题查看webpack.config.js文件  
> 2、redux引入（reducer－store-Provider-container(容器组建，引入action，mapStateToProps，mapDispatchToProps connet component)－component渲染）  
> 3、路由配置使用react-router-dom 代替 react-router，HashRouter  代替 Router 否则报错
> 4、Link 实现url地址切换（导航实现） 
> 5、路由的history配置，如果配置成hashHistory,则url地址里会有难看的后缀  
> 6、编译静态文件的webpack配置中，插件项目需要设置成生产环境NODE_ENV:JSON.stringify("production") ，否则UglifyJsPlugin 压缩 控制台警告，dev环境可以不压缩，上线前打开压缩功能
> 7、fetch实现服务端数据加载
> 8、本地mack数据 
 
