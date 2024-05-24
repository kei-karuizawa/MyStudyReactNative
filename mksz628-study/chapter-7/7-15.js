// 7-15：RefreshControl 下拉刷新

// 列表组件有个 `refreshControl` 属性，传的是 `RefreshControl` 组件。
// `RefreshControl` 组件有以下属性：
// 1. `refreshing`：是否在刷新？这个需要手动控制其状态。
// 2. `onRefresh`：处于下拉刷新状态时的回调。完成回调时需要手动把 `refreshing` 置为 `false` 来结束刷新。

// 列表组件有个 `onEndReached` 属性，传的是回调函数。列表尾部出来的时候会触发这个回调方法。
// `onEndReachedThreshold`：列表什么时候算触底？传值 `0~1`。表示距离底部还有整个屏幕高度的多少比例时算底。数值越大越提前触发。通常可以是 `0.3`。
