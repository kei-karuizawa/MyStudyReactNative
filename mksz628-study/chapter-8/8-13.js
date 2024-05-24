// 8-13：Keyboard 键盘操作有神器

// 注册键盘监听：`const showSubscription = Keyboard.addListener(`keyboardDidShow`, keyboardDidShow)`
// const keyboardDidShow = () => {console.log('键盘出现！')}
// 注销键盘事件：`showSubscription.remove()`.
// 在安卓平台有些键盘事件可能监听不到，但有两个肯定会接收到：`keyboardDidShow` 和 `keyboardDidHide`。

// api：
// 键盘消失：`Keyboard.dismiss()`
