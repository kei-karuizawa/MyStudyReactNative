// 7-3：FlatList 高性能列表组件

// 具备 ScrollView 的容器属性。
// 1. `containerStyle`.
// 2. `showVerticalIndicator`.
// 3. `onScroll`.
// 4. `keyboardDismissMode`.
// 5. `keyboardShouldPersistTaps`.
// 6. `horizontal`.

// `ListHeaderComponent` 和 `ListFooterComponent`。
// `ListEmptyComponent`。

// `itemSeparatorComponent`：每行之间的分隔线。

// 初始渲染元素的数量：`initialNumToRender`。

// `inverted`：列表正向渲染还是反向渲染。

// `numColumns`：一行可以有几个？

// 可见元素回调：`onViewableItemsChanged`，判断当前列表哪些元素是可见的（显示在屏幕上的）。
// onViewableItemsChanged={(info) => {
//  const { viewableItems } = info
//  console.log(viewableItems)
// }}

// api：
// `scrollToIndex({index: 5, viewPosition: 0 })`。`viewPosition` 代表这个元素滚动到屏幕的哪？0 是最顶部，1 是最底部。比如取 0.5，滚动到第六个元素，那么第六个屏幕显示在屏幕正中间。
// `scrollToItem({item: 5, viewPosition: 0, animated: true })`。这个性能比较差，不推荐。这里 item 就是指第几个元素，而不是 index 的元素序号。
// `scrollToOffset`.
// `scrollToEnd`.
