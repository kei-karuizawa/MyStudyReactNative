// 8-5：StyleSheet 构建灵活样式表

// 样式合并：`StyleSheet.compose(s1, s2)` 返回两个样式的合并，
// compose 渲染效率更高。如果是数组的样式合并写法，系统认为是一个新的组件，于是会重绘。

// 样式平铺：`StyleSheet.flatten([s1, s2])`，把两个样式所有的东西抽出来，如果有重复的用后面覆盖前面的额。

// 绝对填充：`console.log(StyleSheet.absoluteFill)` 打印一个绝对布局的铺满全屏覆盖屏幕的样式：{bottom: 0, left: 0, top: 0, right: 0, position: absolute}

// 头发丝宽度：`console.log(StyleSheet.hairlineWidth)`，打印最小像素尺寸，一个像素尺寸。
