/**
 * Created by Amy on 17/4/20.
 * 要完成的功能
 * 1.编译 jsx、es6、scss 等资源 (loader 配置)
 * 2.自动引入静态资源到相应 html 页面  （HtmlWebpackPlugin plugin配置）
 * 3.实时编译和刷新浏览器 （入口webpack/hot/only-dev-server + loader配置 + HotModuleReplacementPlugin + 热更新服务器启动）
 * 4.按指定模块化规范自动包装模块 （loadder中eslint配置 + .eslintrc）
 * 5.自动给 css 添加浏览器内核前缀  (loader + config.postcss)
 * 6.按需打包合并 js、css (loader配置ExtractTextPlugin.extract + ExtractTextPlugin)
 * 7.压缩 js、css、html （UglifyJsPlugin + HtmlWebpackPlugin）
 * 8.图片路径处理、压缩、CssSprite （loader 配置）
 * 9.对文件使用 hash 命名，做强缓存 (output 输出文件名做hash处理 filename: 'js/[name].[hash].js',)
 * 10.语法检查 （loader eslint 配置）
 * 11.全局替换指定字符串
 * 12.本地接口模拟服务 （直接使用 epxress 创建一个本地服务）
 * 13.发布到远端机

 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); //清理文件夹
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// css autoprefix  自动给 css 添加浏览器内核前缀
var precss = require('precss');
var autoprefixer = require('autoprefixer');

  const glob = require('glob');
// 注入所有src下以 -index.jsx结尾的文件
  const files = glob.sync('./src/*.js');
  const newEntries = files.reduce(function (memo, file) {
    // const name = path.basename(file, '.jsx');
    const name = file.replace('./src/', '').replace('.js', '');
    memo[name] = file;
    return memo;
  }, {});
  const entry = Object.assign({}, {
    index: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server',
            './src/js/index.js'
        ],
        lib:[ // 打包合并公共部分（公共资源与单文件分开打包）
          'react', 'react-dom'
        ]
  }, newEntries);

module.exports = {
    //页面入口文件配置
    entry:entry,
    // entry: {
    //     index: [
    //         'webpack-dev-server/client?http://localhost:8000',
    //         'webpack/hot/only-dev-server',
    //         './src/js/index.js'
    //     ],
    //     lib:[ // 打包合并公共部分（公共资源与单文件分开打包）
    //       'react', 'react-dom'
    //     ],
    //     index:'./src/js/index.js',
    //     compnent:['./src/js/compnent/pageb.js','./src/js/lib/common.js'],
    //     module1:'./src/module1/module1.js',
    //     module2:'./src/module2/module2.js',
    // },
    
    //入口文件输出配置
    output: {
        publicPath: "http://127.0.0.1:8000/dist/",
        path: __dirname + '/dist/',
        filename: 'js/[name].js',
        chunkFilename: "[id].js"
    },
    module: {
         // preLoaders:[{
         //    test: /\.(jsx|js)$/,
         //    loader: 'eslint-loader',
         //    exclude: /node_modules/
         //  }],
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"}) // css-loader 用于将 css 当做模块一样来 import  style-loader 用于自动将 css 添加到页面
            },

            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!less-loader"})
            },

            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },

            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },

            {
                test: /\.js|jsx$/, 
                loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0']
            },

            {
                test: /\.json$/,
                loader: 'json'
            }, 

            {
                test: /\.html$/,
                loader: 'html?interpolate'
            },

            {
                test: /\.js|jsx$/,
                loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname, 'js')
            },

            {
                test: /\.(jsx|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },

            {
              test: /\.(?:jpg|gif|png|svg)$/,
              loaders: [
                'url?limit=8000&name=img/[hash].[ext]',
                'image-webpack'
              ]
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.jsx','.json', '.css', '.less']
    },
    //插件项
    plugins: [
        //清空输出目录
        new CleanPlugin(['dist'], {
            "root": path.resolve(__dirname, './'),
            verbose: true,
            dry: false
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8000' }), // 打开浏览器
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'lib', filename: 'js/common/lib.js' }), // 打包公共资源
        new ExtractTextPlugin("css/[name].css"), // 打包css文件
        new HtmlWebpackPlugin({ // 生成html，将js及css等静态资源自动引入html，压缩html文件
            filename: 'index.html',
            //chunks: ['src', 'moudle1'],
            minify: {
              collapseWhitespace: true,
              collapseInlineTagWhitespace: true,
              removeRedundantAttributes: true,
              removeEmptyAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              removeComments: true
            }}),
        // new webpack.optimize.UglifyJsPlugin({ // 压缩js，css资源
        //     compress: {
        //         // sourceMap: true,
        //         warnings: false
        //     }
        // })

        // 配置环境变量到Production，防止控制台警告（与UglifyJsPlugin冲突，开发环境建议不压压缩功能缩，上线前打开 ）
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        })
        
    ],

    
    //eslint 检查
     // eslint: {
     //     configFile: './.eslintrc'
     // }
};