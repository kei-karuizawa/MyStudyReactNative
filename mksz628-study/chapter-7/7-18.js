// 7-18：Switch 开关切换

// 1. `value`：开或者关。
// 2. `onValueChange`：状态改变回调，有个 `value` 的回调参数。这个点击就会回调，但是 Switch 的 UI 的改变需要手动设置 `value`。
// 3. `disable`：禁用。
// 4. `trackColor`：背景色。这个要在里面传对象，分别是开和关的颜色：`{ true: 'red', false: 'gray' }`。
// 5. 开关的圆圈的颜色：`thumbColor`。这个只设置一种颜色。无论开关都是同一种颜色。如果你实在要设置不同颜色的话，可以根据 `value` 的状态动态去改变颜色。
