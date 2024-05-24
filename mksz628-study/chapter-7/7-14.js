// 7-14：SectionList 多类型分组列表

// SectionList 数据源中的 `data` 键不可更改，而章的键比如 `title` 这是可以改的。

// 同样支持 ScrollView 属性：内容容器、滚动条、滚动监听、键盘模式等。

// 表尾：`ListFooterComponent`。
// 分组头部：`renderSectionHeader`。
// 分隔线：`ItemSeparatorComponent`。
// 分组吸顶：`stickySectionHeaderEnable`。

// 滚动 api：`scrollToLocation()`。传的是一个对象：`{ sectionIndex: xxx, itemIndex: xxx, viewPosition: xxx, animated: true }`。
// 注意，`itemIndex` 会把 section 当成第一个。
