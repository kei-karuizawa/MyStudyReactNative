// 7-6：TextInput唯一且强大的输入组件

// 字体样式：和 Text 一致。

// 默认聚焦：`autoFocus`，默认是 `false`，组件加载时就默认聚焦输入框。
// api 聚焦：`focus()`，手动聚焦。

// 点击提交时，输入框失去焦点：`blurOnSubmit`。可以控制提交时键盘是否消失。
// api：`blur()`。

// 隐藏光标：`caretHidden`。

// 默认输入：`defaultValue`。

// 可编辑性：`editable`。

// 键盘类型：`keyboardType`。注意有些属性并不是 Android 和 iOS 都支持的。
// 确定键配置：`returnKeyType`。注意有些属性并不是 Android 和 iOS 都支持的。

// 最大长度 `maxLength`。

// 多行输入 `multiline`：输入框中的文字超过屏幕会换行。默认多行输入时文字居中的，这时候 `textAlignVertical: 'top'` 就可以。
// `numberOfLines`：可以输入几行。这是屏幕上显示几行，实际上所有多行的数据都在，需要 UI 向上拉拖动才显示全部内容。

// 焦点回调：`onFocus` 和 `onBlur`。

// 内容回调：`onChange` 和 `onChangeText`。`onChangeText` 回调的参数就是 text 文本。而 `onChange` 回调的就是事件 event。

// 选中相关：
// `selection={{start: 1, end: 3}}`，默认选中内容，从下标 1 开始选，一直到下标 3 结束。左闭右开。
// `selectionColor`：选中区域的背景色。
// `selectionTextOnFocus`：第一次聚焦时会默认把所有文本选中，你可以用这个特性进行文本替换或复制等。注意：`autoFocus` 自动聚焦行为不会触发该方法。

// 对齐方式：`textAlign` 和 `textAlignVertical`。

// 安全模式输入 `secureTextEntry`：输入时，前面输入的内容被 * 号隐藏。这个属性不能和 `multiline` 一起使用。
