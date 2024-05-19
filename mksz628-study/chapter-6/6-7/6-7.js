// 6-7：JSX语法：高效开发源自于此

// 1. 拆分渲染。
// 拆分组件的三种方法：
// （1）：如 `MKSZ628Course67Example1File1` 所示，将组件拆分成几个函数。
// （2）：如 `MKSZ628Course67Example1File2` 所示，将组件通过属性值传入。
// （3）：如 `MKSZ628Course67Example1File3` 所示，将组件作为子视图传入，`children` 是 `props` 自带的属性。

// 2. 内联样式与样式表以及样式组合。
// 样式表 `StyleSheet`。
// `<View style={[styles.s1, styles.s2]}></View>` 这种样式表传入数组叫样式组合，它会将数组中的样式进行组合。利用这种形式可以灵活的对某个特定的元素做特定的样式。

// 3. 标准写法与简略写法。
// 箭头函数中如果只有 `return` 方法，其余都没有，那么 `return` 可以省略，直接返回组件。
// 再简洁，甚至可以连箭头函数的函数体 `{}` 括号都可以省略，如：`AppRegistry.registerComponent(appName, () => App)` 的 `() => App`。

// 4. 条件渲染。
// （1）三元运算符条件判断。`logicIsTrue ? <View1></View1> : <View2></View2>`。条件为真渲染 View1，否则渲染 View2。
// （2）三元运算符条件判断。`logicIsTrue && <View1></View1>`。条件为真才渲染。

// 5. 列表渲染：
// const array = ['1', '2', '3']
// <ScrollView>{array.map((item) => { <Text>{item}</Text> })}</ScrollView>

// 6. 数组渲染：
// const viewList = []
// const getListView = () => {
//   for (let i = 0; i < 5; ++i) {
//     viewList.push(<View></View>)
//   }
//   return viewList;
// }
