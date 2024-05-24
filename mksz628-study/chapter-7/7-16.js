// 7-16：Modal 自定义弹窗

// `Modal` 本身只是容器，不显示任何 UI。
// `Modal` 默认会把状态栏盖住，因为它的底部其实是一个 window，覆盖全屏。

// `Modal` 属性：
// 1. `visible`：是否可见。
// 2. 渲染内容：`children`。
// 3. `onRequestClose`：回调方法。安卓点击物理返回键时会触发这个方法。可以在这个回调方法里调用 `setVisible(false)` 关闭弹窗。
// iOS 则需要在其他地方触发 `setVisible(false)`。
// 4. 背景透明：`transparent`：弹窗的背景是否透明。显示是透明的，但是依旧无法交互。
// 5. 状态栏是否透明：`statusBarTranslucent`。
// 6. 动画方式：`animationType`。
// 7. `onShow` 和 `onDismiss` 回调。`onDismiss` 回调有可能不生效，这是 RN 的 bug。
