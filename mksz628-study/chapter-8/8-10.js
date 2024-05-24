// 8-10：Vibration 简单好用的震动交互

// 原生需要声明权限（安卓这个只有动态权限而没有静态权限）。

// 发起震动：`Vibration.vibrate()`。Android 和 iOS 默认都是 400ms 长的震动。
// 发起震动：`Vibration.vibrate(1000)`。1000 ms 的震动。只有 Android 有效；iOS 是固定 400 ms，是指单次震动 400 ms，可以一直震，停一下震 400 ms、停一下震 400 ms。
// 安卓时间模式：`Vibration.vibrate([100, 500, 200, 500], true)`：先停 200 ms、再震 500 ms、停 200 ms、再震 500 ms。后一个参数表示是否循环。
// iOS 事件模式：`Vibration.vibrate([100, 500, 200, 500], true)`：停 100 ms、震 400 ms、停 500 ms、震 400 ms。指定的是震动的间隔时间。
// `Vibration.cancel()`：停止震动。
