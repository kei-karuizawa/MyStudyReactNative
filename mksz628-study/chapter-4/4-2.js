// 4-2：了解什么是ES5、ES6，掌握ES6常用的一些方法。

// ES5 和 ES6 都只是 JS 的一个标准而已，ES5 代表第五版标准，ES6 代表第六版标准。

// ES6 版本可以申明变量，即增加了 `let` 和 `const`，ES5 只有 `var`，
// `var` 有一个变量提升（作用域提升）的问题
// 比如以下代码没有任何问题，`n1` 有值，只是为 `undefined` 而已：
console.log(n1)
var n1 = '1'

// ES6 还有对象简写特性：
// 比如申明一个对象：
const name = 'wangyi'
const user = { name: name }
console.log('user:', user)
// 像上面这样对象里面变量名和属性名一样的情况下可以简写成 `const user = {name}`：
const user1 = { name }
console.log('user1:', user1)

// ES6 还支持对象合并，即 `Object.assign`：
const u1 = { name1: 'wangyi' }
const u2 = { age2: '18' }
const u3 = Object.assign(u1, u2)
console.log('u3:', u3)

// 解构赋值也是 ES6 的特性。
const u4 = { name4: 'wangyi', age4: '18' }
const { name4, age4 } = u4
console.log('name4:' + name4 + ', age4:' + age4)

// 对象解构另一种用法，`...` 即展开运算符，也是 ES6 特性。
const u5 = { name5: 'wangyi' }
const u6 = { age6: '18' }
const u7 = { ...u5, ...u6 }
console.log('u7', u7)

// 展开运算符也可以展开数组：
const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [...arr1, ...arr2]
console.log('arr3:', arr3)

// ES6 支持模版字符串：
const u8 = { name8: 'wangyi', age8: '18' }
console.log(`name8=${u8.name8}, age8=${u8.name8}`)

// ES6 支持 Promise。
const check = (flag) => {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("success")
    } else {
      reject("error")
    }
  })
}
// 用 `then` 函数接收 `Promise` 正常的结果。
check(true).then(result => {
  console.log('then:', result)
})
// 用 `catch` 函数接收 `Promise` 异常的结果。
check(false).catch(result => {
  console.log('catch:', result)
})

// import 和 export 也是 ES6 提供的。
