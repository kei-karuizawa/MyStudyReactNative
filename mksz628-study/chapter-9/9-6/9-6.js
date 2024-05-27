// 9-6：Animated.spring 弹性动画函数

// 弹性模型：三组配置（同时只能选择一组）：

// 1. `bounciness` && `speed`.
// 2. `tension` && `friction`.
// 3. `stiffness` && `damping` && `mass`.

// `bounciness`：弹性越大，弹簧越弹。默认是 8。
// `speed`：弹的速度，默认 12。

// `tension`：张力，控制速度，越大速度越快，默认 40。
// `friction`：摩擦，控制弹性与过冲，越小越弹，默认 7。

// `stiffness`：刚度，弹簧刚度系数，越大越弹，默认 100。
// `damping`：阻尼，弹簧运动因摩擦力而受到阻尼，越小越弹，默认 10。
// `mass`：质量，附着在弹簧末端的物体的质量，越大惯性越大，动画越难停下；越小惯性越小，动画很快停下，默认 1。

// 其他弹性参数：
// `velocity`：初始速度，附在弹簧上物体的初始速度，默认 0。
// `overshootClamping`：过冲，弹簧是否应夹紧而不应弹跳，默认是 `false`。
// `restDisplacementThreshold`：恢复位移阈值，从静止状态开始的位移阈值，低于该阈值，弹簧应被视为静止状态，默认为 0.001。
// `restSpeedThreshold`：弹簧静止速度，单位为像素/秒，默认为 0.001。
// `delay`：延迟，延迟后启动动画，默认 0。
