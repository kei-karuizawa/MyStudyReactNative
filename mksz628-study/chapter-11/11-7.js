// 11-7：类型文件和命名空间

// 1. 类型文件。

// 可以在目录下定义 `@types/index.d.t`s 文件，可以在文件里定义在这个模块下使用的类型。
// 这是局部类型文件。可以在文件中不用导入即可使用类型。

// 如果在根目录下创建 `typings.d.ts` 文件，则这个代表全局的类型文件。
// 可以在文件中不用导入即可使用类型。

// 2. 命名空间

// declare namespace Info {
//  type Dog = {
//    name: string,
//    age: number
//  }
// }
// const dog: Info.Dog = { name: 'xx', age: 12 } as Info.Dog
