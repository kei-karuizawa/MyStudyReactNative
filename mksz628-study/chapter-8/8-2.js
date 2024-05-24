// 8-2：alert 和 console 你不知道的调试小技巧

// `alert`：简单的弹窗提示。

// `Alert.alert()`：RN 的对话框工具。
// buttons = [
//    {'取消', onPress: () => console.log('取消')},
//    {'确定', onPress: () => console.log('确定')}
// ]
// `Alert.alert('标题', '提示信息', buttons)`。

// `console.log()`：普通的日志输出。

// console 日志输出分级：
// 1. `console.info('基础信息日志输出。')`
// 2. `console.debug('调试日志输出。')`
// 3. `console.warn('警告日志输出')`：开发的手机端也会有黄色条显示警告，点击也提示警告消息，debug 环境才有。
// 4. `console.error('错误日志输出')`：开发的手机端也会有红色条显示警告，点击也提示错误消息，debug 环境才有。

// %s，字符串占位符。
// %d，数字占位符。
// %o，对象占位符。会把对象以字符串形式输出。

// `console.log` 可以添加样式（在浏览器中才会生效，RN 中被阉割。在浏览器中字号中和小没区别）：
// `console.log('%c这行日志红色文字，字号大', 'color: red; font-size: x-large')`
// `console.log('%c这行日志蓝色文字，字号中', 'color: blue; font-size: x-medium')`
// `console.log('%c这行日志绿色文字，字号小', 'color: blue; font-size: x-small')`

// log 输入组件树。
// `console.log` 可以直接传组件，会打印出组件树。

// log 输出表格日志。
// `console.table()`：可以传入数组，会以表格形式输出数组（这个也是只在 web 生效，RN 中被阉割）。

// log 分组日志。

// 下面代码在终端上会显示 group 相关组信息（web 中效果更好）：
// `console.group;`
// `console.log('第一行日志')`
// `console.log('第二行日志')`
// `console.log('第三行日志')`
// `console.groupEnd();`

// group 最多支持多级分组，多级分组在输出上自动有缩进（web 中效果更好）。
