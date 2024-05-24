// 8-12：Transform 矩阵变换的伪3D效果

// 偏移：
// `transform: [{translateX: 200}, {translateY: 150}]`.

// 缩放：
// `transform: [{scale: 1.5}, {scaleX: 1.2}, {scaleY: 1.2}]`.

// 旋转：
// `transform: [{rotateX: '45deg'}, {rotateY: '45deg'}, {rotateZ: `45deg`}, {rotate: '45deg'}]`. rotate == rotateZ.

// 矩阵变换是不可逆的，先执行 A 再执行 B，与先执行 B 再执行 A 效果是不一样的。
