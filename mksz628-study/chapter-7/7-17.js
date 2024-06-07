// 7-17：StatusBar 适配状态栏

// 1. `barStyle`：状态栏的文字是深色模式还是明亮模式。这是针对状态栏的文字内容和不是状态栏背景色。
// 2. `backgroundColor`：背景色。
// 3. `animated`：状态栏模式发生变化时是否用动画的方式去切换？
// 4. 透明悬浮：`translucent` 在安卓中可以让状态栏悬浮。让页面的布局穿透到状态栏之下，意味着状态栏也参与布局了。可以做沉浸式状态栏。iOS 状态栏默认就是悬浮的。
// 5. `hidden`：隐藏状态栏。默认有个动画。

// api：
// `setBarStyle`、`setBackGroundColor`、`setTranslucent`、`setHidden`。

// 注意：
// 非沉浸式的状态栏在使用 `KeyboardAvoidingView` + `Modal` 时会有问题，会导致收起键盘时 `Modal` 上下跳动，出现视图异常。
// 解决方案 1：设置 `KeyboardAvoidingView` 的 `keyboardVerticalOffset={1}`，显示指定一个小的数字来避免，数字不可以是 0 或者负数，但这种情况键盘收起后，`modal` 会向上偏移一段距离。无法解决。
// 解决方案 2：设置状态栏为沉浸式，同时设置 `KeyboardAvoidingView` 的 `keyboardVerticalOffset={0}` 即可完美解决。
