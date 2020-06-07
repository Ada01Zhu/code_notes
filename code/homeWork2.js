// 简答题
// 1.描述引用计数的工作原理和优缺点
/**
 * 在内部维护了一个引用计数器，引用关系改变时修改引用数字，引用数字为0时立即回收
   优点：在运行过程中发现垃圾时立即回收，减少程序卡顿时间
   缺点：无法回收循环引用的对象； 资源消耗较大
 */


// 2.描述标记整理算法的工作流程
/**
 * 标记整理分两个阶段进行，首先运行的时候标记在活动的对象，在运行结束之后内存空间进行整理，把没有标记的对象进行删除。
 */

// 3.描述v8中新生代存储区垃圾回收的流程
/**
 * V8内存一分为二，小空间用于存储新生代对象（32M|16M）用于回收存活时间比较短的对象；
 * 回收过程采用复制算法+标记整理；新生代内存区分为二个等大小空间；使用空间为From，
 * 空间时间为To;活动对象的存储于From空间；标记整理后将活动对象拷贝To;From与To交换空间完成释放
 */

// 4.描述增量标记算法在何时使用及工作原理
/**
 * 在V8清除老生代对象时为提高清除效率优化时使用；
 * 清除时，程序执行然后遍历对象进行标记，之后交替执行程序和增量标操作，标记完成后，进行清除操作，完成垃圾回收；
 */

//代码题 1
// 基于以下代码完成下面的四个练习
const fp = require('lodash/fp');
 //数据
// horsepower 马力， dollar_value 价格，in_stock 库存
const cars  = [
    {name: "Ferrari FF",horsepower: 660 ,dollar_value: 700000, in_stock: true},
    {name: "Audi R8",horsepower: 525 ,dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77",horsepower: 750 ,dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra",horsepower: 700 ,dollar_value: 1300000, in_stock: false}
]

//练习1
// 使用函数组合fp.flowRight() 重新实现下面这个函数
// let isLastInstock = function (cars) {
//     // 获取最后一条数据
//     let last_car = fp.last(cars);
//     return fp.prop("in_stock", last_car)
// }

/**
 * 练习1 答案
 * let isLastInstock  = fp.flowRight(fp.prop("in_stock"), fp.last);
   console.log(isLastInstock(cars))
 */


//练习2
//使用fp.flowRight()  fp.prop() 和 fp.first()获取第一个car的name
/**
 * 练习2 答案
 * let getFirstName =  fp.flowRight(fp.prop('name'), fp.first)
   console.log(getFirstName(cars))
 */

// 练习3
//使用帮助函数_average 重构averageDollarValue,使用函数组合的方式实现
// let _average = function(xs) { return fp.reduce(fp.add, 0, xs) / xs.length } // <- 无须改动

// let averageDollarValue = function (cars) {
//     let dollar_values = fp.map(function (car) {
//         return car.dollar_value
//     }, cars)
//     return _average(dollar_values)
// }

/**
 * 练习3 答案
 * let _average = function(xs) { return fp.reduce(fp.add, 0, xs) / xs.length } // <- 无须改动
 * let averageDollarValue  = fp.flowRight(_average, fp.map(car => car.dollar_value))
   console.log(averageDollarValue(cars))
 */

//练习4
//使用folwRight写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转为这种形式：
// 例如： sanitizeNames(["Hello World"]) => ["hello_world"]
/**
 * 练习4 答案
 *  let _underscore = fp.replace(/\W+/g, '_') // <-- 无须改动，并在 sanitizeNames 中使用它

     let names = ["Hello World","aa AAA"]
     let sanitizeNames = fp.flowRight(fp.map(name => fp.toLower(name)), fp.map(name => _underscore(name) ))
     console.log(sanitizeNames(names))
 */


//support.js
// 代码题2
// 练习1
//使用 fp.add(x, y) 和 fp.map(f, x) 创建一个能让 functor 里的值增加的函数 ex1
const { Maybe, Container } = require('./support')

/**
 * 练习1 答案
  let maybe = Maybe.of([5, 6, 1])
  let ex1 = fp.map(number => fp.add(number,1) )
  console.log(ex1(maybe.map() ._value))
 */


//练习2
// 实现一个函数 ex2，能够使用 fp.first 获取列表的第一个元素
/**
 * 练习2 答案
    let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
    let ex2 = xs.map(fp.first)._value
    console.log(ex2)
*/

//练习3：实现一个函数 ex3，使用 safeProp 和 fp.first 找到 user 的名字的首字母
/**
 * let safeProp = fp.curry(function (x, o) { return Maybe.of(o[x]) })
 let user = { id: 2, name: "Albert" }
 let ex3 = safeProp('name',user)._value.replace(/(.)(?=[^$])/g, "$1,").split(",")
 console.log(fp.first(ex3) )

 */

// 练习4：使用 Maybe 重写 ex4，不要有 if 语句
/*let ex4 = function (n) {
    if (n) { return parseInt(n) }
}*/
/** 练习4答案
let ex4 = n => Maybe.of(n)
    .map(parseInt)
    ._value

console.log(ex4(null))*/









