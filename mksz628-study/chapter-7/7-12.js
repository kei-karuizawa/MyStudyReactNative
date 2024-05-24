// 7-12：ScrollView 基础滚动组件

// 可以通过固定元素、数组渲染（push 节点数组）、列表渲染方式添加子节点（map）。

// ScrollView 里面的样式应该加在 `contentContainerStyle` 属性里。

// `keyboardDismissMode`：页面滚动时键盘是否消失。`keyboardDismissMode={'interactive'}` 是 iOS 里的属性，一般不用。

// `keyboardShouldPersistTap`：点击列表其他部分键盘是否消失。
// `never` 当键盘出现时，点击一个按钮只是收起键盘，不做按钮点击事件。
// 而 `handled` 点击按钮会触发按钮点击事件，不会收起键盘；点击空白区域才会收起键盘。比较智能。

// 滚动开始与结束回调：`onMomentumScrollBegin` 和 `onMomentumScrollEnd`。
// `onMomentumScrollBegin` 是滑动松手时才回调的，如果滑动后按住手不松开是不会回调的。

// 滚动距离监听：`onScroll`，有个参数 `event`。滑动距离要监听 `event` 里的 `nativeEvent.contentOffset` 原生参数。
// iOS 要指定 `scrollEventThrottle`，指定每隔几毫秒回调 `contentOffset` 属性。否则 `onScroll` 只会在滑动结束回调一次。

// `overScrollMode`：视图滚动到最低时，是否还能滚动一小段距离？

// `pagingEnable`：分页滚动。可以做横向的轮播图片。

// `scrollEnabled`：滚动开关。

// `contentOffset`：初始滚动，传入初始滚动距离的 x、y 对象。

// `showVerticalScrollIndicator` 和 `showHorizontalIndicator`：是否显示滚动条。

// `stickyHeaderIndices`：你希望吸顶的元素的下标数组。

// api：`scrollTo` 和 `scrollToEnd`。
