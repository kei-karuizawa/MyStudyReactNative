// 8-9：PermissionsAndroid 轻松解决权限问题

// 从安卓 6.0 开始从静态权限改成了动态权限：即在用的时候才动态申请权限。

// 检查权限：`PermissionsAndroid.check('android.permission.xxx')`。返回是一个 Promise。
// 这个权限字符串也可以从 `PermissionsAndroid.PERMISSIONS()` 获取。

// 申请权限：`PermissionsAndroid.request('android.permission.xxx')`，结果也是一个 Promise。
// 申请权限时要在安卓的 `AndroidManifest` 注册静态权限。静态权限也要写，然后动态申请。

// 申请多个权限：`PermissionsAndroid.requestMultiple([])`。
