// 7-4：Image构建精美ui

// 图片源的两种类型：
// 1. source。支持本地图片源和网络图片源。
// 本地：<Image source={'../../avatar.jpg'}>
// 网络：<Image source={{uri: 'https://baidu.com/image/xxx.jpg'}}>

// 图片缩放模式：`resizeMode`。图片源宽高和 Image 宽高不是等比的情况下用。
// `contain`：对图片等比例拉伸，保证图片不变形。拉伸到刚好有一边撑满了图片框。
// 'center'：如果图片框比图片大，图片就放在图片框正中间；如果图片框比图片小，那么图片会缩小到图片框的大小。
// `cover`：图片完全覆盖图片框，但图片不会变形。
// `stretch`：图片拉伸变形到覆盖图片框。
// `repeat`：重复，图片若小于图片框的话，图片重复到把图片框覆盖满。

// `blurRadius`：镜像模糊（毛玻璃）。数字越大越模糊。

// 占位图片 `defaultSource`。<Image source={{uri: 'https://baidu.com/image/xxx.jpg'}} defaultSource={`../../xxx.jpg`}>
// 在 debug 环境下，如果网络图片加载不出来可能会直接显示空白而不会显示占位图。

// fadeDuration：图片加载完成后多久会慢慢显示出来，有个过渡的动画效果。

// 图片加载成功和加载失败的回调：`onLoad` 和 `onError`。`onLoad` 回调有个 `event` 参数，代表回调的事件信息。
// 图片加载开始与加载结束的回调：`onLoadStart` 和 `onLoadEnd`。若图片加载失败没有 `onLoadEnd` 回调。

// 着色：`tintColor`。可以对一个矢量图直接进行涂色。

// api：<Image ref={imageRef} />
// Image.getSize(imageUri)，有成功和失败的回调。这个 api 获取图片尺寸。
// Image.prefetch(imageUri)。返回 Promise。这个 api 预加载图片。
