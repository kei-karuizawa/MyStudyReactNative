// 14-3：useMemo 缓存 ui 以及 useCallback 缓存回调函数

// 接着上节课的例子，`calculateTotal` 值不变的情况下，其实其对应的整个子节点都不会变，这时我们可以缓存 UI。也是用 `useMemo`。

// 缓存回调函数。
