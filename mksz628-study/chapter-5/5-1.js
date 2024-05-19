// 5-1：如何连接安卓设备以及开发中常用的adb命令

// 常用 adb 命令：
// `adb devices`：查看连接的设备。
// `adb connect <ip:5555>`：通过局域网连接设备，端口号 5555 是固定的。
// `adb disconnect <ip:5555>`：断开局域网设备。
// `adb kill-server`：停止 adb 服务。
// `adb start-server`：开启 adb 服务。
// `adb reverse tcp:8081 tcp:8081`：端口映射。真机启动 rn 时需要从电脑上安装 bundle 包，这时可能会出现连接不上，可能是端口映射不对的问题。
// `adb shell`：进入沙盒。进入后 `exit` 退出。
// `adb push <local-path> <android-path>`：从本地传文件到安卓设备。
// `adb pull <android-path> <local-path>`：从安卓设备传文件到本地。
