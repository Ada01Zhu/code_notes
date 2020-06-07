
//  1. 请说出下列最终的执行结果，并解释为什么？
    var a  = [];

for (let i = 0; i < 10; i++ ){
    console.log(i)
    debugger
    a[i] = function () {
        console.log("===function====",i)
    }
}
a[9]();

/**
 *  1.
 *  答案  10
 *  理由： 用了var定义了 var a = []  var i =0 两个全局作用域的变量，
 *         根据js由上往下 一次执行的顺序，当for循环执行10次之后，
 *         数组a中创建了下标为0-9  十个方法  每个方法中  都会输出i
 *         当我们调用数组中的a[6]();方法时
 *         这个时候console.log去获取变量 i 循环结束后全局变量 i = 10,
 *         所以输出i 的值是10， 实际上 调用数组中的任何一个方法 都是10
 *
 */


// 2.请说出下列最终的执行结果，并解释为什么？
//     var tmp = 123;
//     if(true){
//         console.log(tmp)
//         let tmp ;
//     }

/**
 * 2.
 *  答案：error Cannot access 'tmp' before initialization
 *  tmp 应该在使用之前定义好变量
 *  在使用了变量之后才去定义变量会出现 TDZ(暂时性死区)
 */

// 结合ES6新语法，用最简单的方式找出数组中的最小值？
// var arr = [12,34,32,89,4];

/** 3. 答案
 * const minNumber = Math.min(...arr)
 console.log(minNumber);
 */

// 4.请详细说明var let const 三种申明变量的方式之间的具体差别

/**
 * 4. 答案
 * var 作用域 整个页面使用 没有太严格的先后顺序
 let  作用域 块级作用域  有严格的先后顺序，先定义变量 后使用 ，否则会出现TDZ(暂时性死区)
 const 和let 一样 但不一样的是 const是只读的，变量不可修改
 */


//5. 请说出下列代码最终输出的结果，并解释为什么？
//     var a= 10;
//     var obj = {
//         a: 20,
//         fn(){
//             setTimeout(() => {
//                 console.log(this.a)
//             })
//         }
//     }
//
//     obj.fn();

/**
 * 5.
 * 答案 20
 *  分析理由 调用obj.fn(); 此时上下文指的是当前的这个obj，
 *  那么当输出this.a时 obj中的a是20就输出20
 *
 */


// 6. 简述Symbol 类型的用途？
/**
 * 6. 答案
 * 可以生成全局唯一的值，默认实现了iterator
 * 可以用来做值的比较
 * 可以在对象中实现Symbol的迭代器方法 这样对象可以使用for of 循环
 */

// 7. 说说什么是浅拷贝，什么是深拷贝
/**
 * 浅拷贝 只会对基本类型的值进行复制
 * 深拷贝 会把基本类型的值和引用类型的值一起进行复制
 */

// 8. 谈谈你是如何理解js异步编程 EventLoop是做什么的，什么是宏任务，什么是微任务？
/**
 * EventLoop ：  只负责做一件事 就是监听消息队列和调用栈
 * macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
   micro-task(微任务)：Promise，process.nextTick
 *
 */

// 9.将下面异步代码使用Promise改进？
// setTimeout(function () {
//     var a = "hello";
//     setTimeout(function () {
//         var b = "lagou";
//         setTimeout(function () {
//             var c = "I ❥ U"
//             console.log(a + b + c)
//         },10)
//     },10)
// },10)

/**
 * 9. 答案
 *  Promise.resolve("hello").then(function (value) {
        return value + "lagou"
    }).then(function (value) {
        console.log(value + "I ❥ U")
    })
 */




// 10.请简述javaScript 和TypeScript之间的关系？
/** 10 答案
 *  TypeScript是在javaScript的基础上开发，而最终TypeScript会转成js的文件
 *  也就是说TypeScript起源于javaScript
 */

// 11.请谈谈你所认为的TypeScript优缺点？
/** 11 答案
 *  typeScript 目前没有普及，项目中使用的话 前期需要学习成本
 *             优点 可以对数据类型限制 在编译时就可以提示出来
 */

