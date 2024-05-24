// 7-3：Text 使用占比最高的组件，使用简单，深入复杂

// `fontSize` 属性，在安卓上只有 `bold` 和 `normal`，其他的数字阶级在安卓上体现不出来。
// 在安卓上，`fonSize: 600` 之后字体才会开始加粗，之前都是 `normal` 的样式。
// 而在 web 和 iOS 上，粗体的数字阶级会体现出来。

// fontFamily 代表字体，它其实对应的是字体文件（.ttf 文件）。
// fontFamily 可以直接赋值 .ttf 的字体文件（直接写字体文件名，不用写 ttf 后缀）。

// Text 的属性 `numberOfLines` 表示太长时显示几行，对应的 `ellipsizeMode` 代表省略模式（头尾中等）。

// Text 的属性 `selectable` 表示文字是否可选，默认是 `false`。
// 对应的 `selectionColor` 表示选中后的背景色。

// Text 也有 `onPress` 和 `onLongPress`。可以用来显示一个可点击的链接，然后埋点点击事件。

// Text 有 `allowFontScaling` 的属性，是否允许字体跟随系统设置进行缩放。

// Text 标签是可以嵌套的。但是嵌套的内部 Text 没办法加 `margin` 和 `padding` 等样式，加了不生效。而且内部的 Text 默认字体和字体大小和外围的 Text 一样。

// `textAlign` 是水平方向的对齐，`textAlignVertical` 是垂直方向的居中。
// 文本对齐一般用在 Text 设置了宽高的时候，文字默认是在文本框的左上角，这时候可以用文字对齐属性。

// `textDecorationStyle` 和 `textDecorationLine` 搭配使用：
// `textDecorationStyle` 代表虚线或者实线，`textDecorationLine` 代表下划线、删除线等其他样式。

// 文字阴影：`textShadowColor` 和 `textShadowOffset` 和 `textShadowRadius` 三个一起使用。
// `textShadowColor`：阴影颜色，一般别太深。
// `textShadowRadius`：阴影角度，角度可以大一点，越大阴影越明显。
// `textShadowOffset`：阴影偏移（x, y 两个方向的偏移）。
