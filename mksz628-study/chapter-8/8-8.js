// 8-8：BackHandler 安卓返回键适配

// 添加监听事件与移除监听事件：
// BackHandler.addEventListener('hardwareBackPress', backForAndroid)
// BackHandler.removeEventListener('hardwareBackPress', backForAndroid)
// `const backForAndroid = () => {return true}` 是否拦截返回键事件？`true` 的话返回事件被拦截，点击返回键则无效。

// `BackHandler.exitApp()`，点击返回键直接退出 app。
