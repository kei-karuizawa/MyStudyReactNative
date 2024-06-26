// 7-2：View：ui构建的基石，一切页面的起点

// flexDirection：横向和纵向布局。

// flexGrow：如果子视图无法撑满父视图，那么可以用这个属性将子视图按照比例撑满父视图，方向按照 `flexDirection` 的方向。

// flex 和 flexGrow 区别：
// flexGrow 设置的是，各个子视图自身的宽度先占着，然后父布局剩余的宽度按照比例分配给各自子视图。
// flex 是子视图整体宽度按照比例分配，子视图设置的原本的宽度无效。

// 百分比赋值不仅仅用于宽度和高度，甚至可以用于 `margin` 和 `padding` 等属性（但并不是所有属性都可以设置百分比，比如 `borderWidth` 就不行）。

// 设置了 `position: 'absolute'` 的子视图，其绝对定位并不是完全不受父视图影响：
// 绝对定位下（子视图设置 `position: 'absolute'`），如果子视图没有设置 `left` 等位置属性的话，那么其仍然受到父视图的属性影响。
// 比如父视图设置了 `alignItems: 'center'`，那么如果子视图没有设置 `left` 等属性，那么子视图还是会在交叉轴上居中，
// 如果子视图设置了 `left` 等属性，那么它才不受父视图影响。

// onLayout：布局信息的回调：
// <View onLayout>，layout 属性有一些布局信息。比如会显示该视图在原生上的坐标值。
// 这个属性可以用来取值一些不是固定宽高的视图属性。

// setNativeProps：性能瓶颈下的选择余地。
// 比如我们需要动态设置一个视图的背景色，那么可以设置一个背景色的 state（或者 ref 这个视图，然后改背景色），然后监听和改变它的变化。
// 但是改变 state 时会重绘视图，这不仅会有性能开销，而且要重绘整个视图后背景色才会生效，直接改变而没有重绘视图是不生效的。
// 所以我们可以将这个视图 ref 引用出来，然后 `viewRef.current.setNativeProps({style: {backgroundColor: 'blue'}})`，
// 这是直接调用原生的属性，不会重绘视图，性能开销小。
