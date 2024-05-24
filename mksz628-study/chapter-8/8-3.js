// 8-3：Dimension 和 useWindowDimension 获取屏幕信息

// 获取屏幕宽高两种方式：
// 1.
// import Dimensions from 'react-native'
// const { width, height } = Dimensions.get('window')
// 2.
// import useWindowDimensions from 'react-native'
// const { width, height } = useWindowDimensions()

// 获取缩放和文字缩放。
// 这里缩放是指像素密度。相当于 `scale`。`fontScale` 是系统设置的字体缩放大小。
// const { width, height, scale, fontScale } = Dimensions.get('window')
// const { width, height, scale, fontScale } = useWindowDimensions()

// `Dimension.get` 传 `screen` 和 `window` 的区别：
// screen：默认包含高状态栏高度，除非把状态栏设置为沉浸式的。
// window：默认不包含状态栏高度，除非把状态栏设置为沉浸式的。

// `Dimensions.addEventListener('change', (window, screen) => {})`，监听屏幕信息的变化。
// 注意：有监听就一定要有取消监听！在 useEffect 中 `return () => {remove....}`。
