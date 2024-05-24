// 8-4：Platform 获取平台属性

// `console.log(Platform.OS)`：Android 还是 iOS 还是其他平台？
// `console.log(Platform.Version)`：手机系统版本。
// `console.log(Platform.constants)`：一些手机信息（品牌、host 等）。

// `console.log(Platform.isPad)`：为 iOS 定制，判断是手机还是平板。
// `console.log(Platform.isTV)`：当前设备是不是一个电视，Android 和 Apple 都可以用。

// `console.log(Platform.select())`，传入对象：
// `{android: {marginTop: 20}, ios: {marginTop: 10}, default: {marginTop: 10}}`
// 根据平台返回对应的对象。
