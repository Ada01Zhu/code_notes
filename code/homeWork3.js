// 1、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。
/**
 * 工程化是一个提升开发效率、质量规划的工作流架构
 *
 *  前端工程化解决的问题
 *      1. 可以不需要依赖后端项目单独运行
 *      2. 可以不需要等后端接口，自己mock数据开发
 *      3. 模块化/组件化减少重复的工作
 *      4. 代码风格的统一
 */


//2、你认为脚手架除了为我们创建项目结构，还有什么更深的意义？
/**
 * 提供相同的组织结构 开发范式 模块依赖 工具配置 基础代码
 * 解决在创建项目时繁杂、重复的工作，并统一管理，更有利于维护
 *
 */


// 1、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具
/**
 * node -v
 npm -v
 npm install -g yarn
 yarn -v
 npm install -g yo
 npm install -g generator-node
 // 使用yo node 创建一个脚手架工具 按照提示输入对应的项目名称（要以generator-开头） 描述等 最后选择mit
 yo node //此时会创建好package.json 文件

 yo init  //会创建好module文件夹下面的文件

 创建generators\app\index.js
 index中需要导出一个继承自 Yeoman genrator 的类型
 const Generator = require('yeoman-generator')

 module.exports = class extends Generator {
    writing(){

        //yeoman 自动生成生成文件时会调用此方法
        this.fs.write(
            this.destinationPath('temp.text'),
            Math.random().toString()
        )
    }
}

 链接到全局yarn link

 接着使用yo [项目名] 生成项目

 项目git 地址 https://github.com/Ada01Zhu/generator-sample.git
 */

// 2、尝试使用 Gulp 完成 项目 的自动化构建
/**
 * 项目git 地址 https://github.com/Ada01Zhu/gulp-sample.git
 */

// 3、使用 Grunt 完成 项目 的自动化构建
/**
 * 还没有写 视频也还没有录 后面补上
 */
