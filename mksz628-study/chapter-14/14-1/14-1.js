// 14-1：memo 与性能优化 函数式组件和 class 组件拦截多余渲染的方法

// 如 `chapter14/14-1/example1` 所示，当 setState 传入一个对象时，尽管对象可能没有变，但是 RN 还是会进行渲染，这是多余渲染。

// 注意函数式组件和类组件使用缓存的方法不同。