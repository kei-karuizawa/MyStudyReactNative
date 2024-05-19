// 6-2：构建通用源码目录结构，好的工程从模块划分开始

// 通用源码目录结构。
// 以下讲的是一级目录。
// 1. 定义一个源码目录 src。
// 2. 创建一个个模块目录：src/modules。
// 3. 模块下有组件：src/components。
// 4. 要有资源文件：src/assets。
// 5. 一个工程会有些常量：src/constants。比如一些密钥等。
// 6. 环境配置相关：src/env。
// 7. hooks：src/hooks。
// 8. 数据相关：src/stores。全局数据，比如登录信息等。如果是某个模块下的数据则在 modules 下创建。
// 9. utils：src/utils。工具类。
// 10. apis：src/apis。网络请求。所有接口统一到一个文件夹下。
// 11. theme：一些商业应用可能会支持几套主题，比如白天和黑夜主题，会有一些主题配置，放在：src/theme。
