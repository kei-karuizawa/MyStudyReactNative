// 8-7：PixelRatio 像素比例工具

// `console.log(PixelRatio.get())` 获取 `scale`。

// 字体缩放比例：`PixelRatio.getFntScale()` 获取安卓字体比例，仅安卓。

// 获取布局大小：`console.log(PixelRatio.getPixelSizeForLayoutSize(200))`。暑促输入的参数像素 * `scale`。

// 获取就近值：`PixelRatio.roundToNearestPixel(32.1)`。获取屏幕像素的就近值，避免奇怪的像素值布局时出现异常。
