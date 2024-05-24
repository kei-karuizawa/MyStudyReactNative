// 8-6：Linking 一个 api 节省 50 行代码

// 1. 打开链接：`Linking.openURL()`、`Linking.canOpenURL()`。这个链接可以是网页链接、发送邮箱、地图、图片等。
// 打开地图：`Linking.openURL('geo:37.2111, 12.222')`。
// 打电话：`Linking.openURL('tel:10086')`。
// 发短信：`Linking.openURL('smsto:10086')`。
// 邮件：`Linking.openURL('mailto:10086@qq.com')`。
// 跳转应用：`Linking.openURL('dagongjue://demo')`。

// 跳转设置：`Linking.openSettings()`。跳转到该应用的设置页面。

// `Linking.sendIntent('action', [{key: 'name', value: '张三'}])`。安卓才有。

// 获取初始化 URL：`Linking.getInitialURL()`：如果应用是从 url 跳过来的，可以通过这个获取原始 URL。
