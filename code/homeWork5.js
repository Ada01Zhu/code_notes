//1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。
//let vm = new Vue({
//  el: '#el'
//  data: {
//   o: 'object',
//   dog: {}
//  },
//  method: {
//   clickHandler () {
//    // 该 name 属性是否是响应式的
//    this.dog.name = 'Trump'
//   }
//  }
// })
/**
 * 不是，响应式数据添加必须是添加一个新的引用，才可以。
 *    1. vue2.0中data中的属性，在vue实例创建的时候，会被Object.defineProperty()劫持
 *    2. 只有对象上已经有的属性才可以被 getter/setter 劫持到
 *    3. 如果是给数据新增子属性， 那么就得赋值一个全新的对象，
 *    这样才可以使得数据的子属性也被数据劫持到并被且在getter 中添加依赖的订阅
 * */

//2 请简述 Diff 算法的执行过程
/**
 * patch 的函数，比较新旧节点更新虚拟dom
 * 1.首先比较最上层的新旧节点，节点不相同的话，直接移除旧节点更新新节点，
 * 2.最上层的新旧节点，相同的话，调用pathVnode，如果新旧节点有值 调用updateChildren比较新旧子节点
 * diff算法是updateChildren的核心，也是虚拟dom的核心，
 *   oldStartVnode 和newStartVnode 比较
 *       先调用sameVnode判断他们是否相同key和sel 相同的话 pathVnode更新dom
 *       移动索引到下一个位置进行比较，不相同的话 就oldEndVnode 和newEndVnode 比较
 *   oldEndVnode 和newEndVnode 比较
 *       先调用sameVnode判断他们是否相同key和sel 相同的话 pathVnode更新dom
 *        移动索引到上一个位置进行比较，不相同的话 就oldStartVnode 和newEndVnode 比较
 *   oldStartVnode 和newEndVnode 比较
 *        先调用sameVnode判断他们是否相同key和sel 相同的话 pathVnode更新dom
 *        移动索引oldStartVnode++  newEndVnode-- 进行比较，不相同的话 就oldEndVnode 和newStartVnode 比较
 *   oldEndVnode 和newStartVnode 比较
 *        先调用sameVnode判断他们是否相同key和sel 相同的话 pathVnode更新dom
 *        移动索引 oldEndVnode-- onewStartVnode++ 进行比较
 *
 *
 *    当这些操作全部执行完成时，
 *      oldVnode中有多余的node的话，删除
 *      newVnode中有多余的node的话，增加到oldVnode的后面
 *
 *
 *
 */


//二 编程题
//2.1 模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，
// 把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。
/**
 *  项目地址：https://github.com/Ada01Zhu/vue/tree/master/3-1/vue-proxy-observer
 */

//2.2 在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。
/**
 *  项目地址：https://github.com/Ada01Zhu/vue/tree/master/3-1/vue
 */

//2.3 参考 Snabbdom 提供的电影列表的示例，利用Snabbdom 实现类似的效果，如图：
/**
 *  项目地址：https://github.com/Ada01Zhu/vue/tree/master/3-1/snabbdom-movie
 */
