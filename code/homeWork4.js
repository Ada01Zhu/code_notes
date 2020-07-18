//1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
/**
 * webpack是一个模块打包器（module bundler）
 * 可以把项目当中零散的模块代码打包到一起，对代码中有环境兼容的代码 可以通过模块在加载器（loader）对其进行编译转换
 * 代码拆分（code splitting） 解决把所有的代码打包到一起产生文件过大的问题，按项目运行顺序的需求打包拆分，从而实现增量加载
 * 资源文件 （asset module）
 *
 * 主要的环节有:
 *   1.配置Webpack的入口文件 打包到文件目录
 *   2.根据入口文件引用 打包相对的代码。如js css 图片
 *   3.把打包的加过输出到指定的目录中
 * */

//2 Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
/**
 * Loader 专注实现资源模块加载，对模块文件进行编译、转换
 *  在 module.rules 数组中进行配置匹匹配指定文件，用于告诉 Webpack 在遇到指定文件时使用对应 Loader 去加载和转换
 *  开发思路： Source -> Loader1 -> Loader2 -> Loader3 -> Result(JavaScript Code) 开发的 Loader 将资源加载进来后，
 *  中间对资源进行编译，最后要求返回的结果一定是可执行的 JavaScript 代码，返回的结果会被并入 bundle.js，
 *  如果结果不是 JS 代码，可能会导致 bundle.js 无法运行
 *
 *  Plugin 解决其他自动化工作，例如：清除 dist 目录、拷贝静态文件至输出目录、压缩输出代码
 *  在 plugins 数组中进行配置 其工作原理是通过 Webpack 的钩子机制实现的，要求必须是一个函数或者是一个包含 apply 方法的对象
 */


//3.使用 Webpack 实现 Vue 项目打包任务
/**
 *  项目git地址：https://github.com/Ada01Zhu/vue-app-base.git
 */

/**
 * 实现思路：
 *     准备webpack 的安装环境
 *          npm  install  webpack -g
 *          npm install webpack-cli -g
 *    1.安装配置好css-loader 和配套使用的 style-loader
 *    2.开始打包 npm run webpack --config webpack.common.js
 *    3.根据需要安装配置less-loader
 *    4.根据需要安装配置vue-loader
 *    5.导入VueLoaderPlugin
 *    6.安装配置 处理图片的loader url-loader
 *
 */
