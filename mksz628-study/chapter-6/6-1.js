// 6-1：工程目录结构，了解关键文件作用

// index.js:
// 1. 默认的入口文件，一般放在工程的根目录，即工程的入口文件。
// 以下代码是整个 RN 根节点的初始化，是 RN 初始注入的组件。
// registerComponent 是一个系统函数，作用就是初始化一个根节点。
// AppRegistry.registerComponent(appName, () => App);

// package.js 和 package-lock.js:
// 1. package.js 是大管家文件，可以定义一些全局变量，各种脚本与依赖。-lock 是锁定版本的文件，-lock 一般不去看也不去编辑。-lock 文件删掉后可以通过 `npm install` 再弄回来。

// babel.config.js:
// 1. babel 是一个翻译器。
// presets: 一个预设，管理很多插件并绑到一起打个包，这个包就叫做一个预设，引用这个预设就是引用这所有的插件。

// app.json:
// 定义工程配置化的一些常量，不是写代码时的常量。

// node_modules:
// 各种通过 `npm install` 安装的库以及系统库。
