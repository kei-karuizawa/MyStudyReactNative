// 6-3：package.json全局大管家文件

// private：禁止发布该应用，该应用是一个私有应用。这个字段是一个保留字，不能被其他文件 import 读取，import 时就会提示报错。
// scripts：脚本指令，可以用 npm run 执行的，可以在这里自定义脚本。
// dependencies：项目实际运行起来需要的包。
// devDependencies：开发阶段才会用到的包，实际打包不会包含，用 `npm install -save-dev <package>` 安装。
