import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <SafeAreaView style={theStyle.mainContainer}>
      {/* 如果把下面任一子视图的 `flex` 去掉，那么这个子视图相当于 0 比例，则在屏幕上消失。 */}
      <View style={theStyle.container}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
      </View>
    </SafeAreaView>
  );
};

// 如下这种子视图设置了 `flex: 1` 而其父视图没有设置，则相当于子视图占据父视图的 0 比例，此时子视图（`container`）显示不出任何东西，即 `container` 在屏幕上看不见。
// 但是如果像下面这样 `container` 设置了内间距 `padding: 20`，那么原本不会显示的 `container` 会显示一部分（不是 20，无法明确是多少），
// 尝试把 `container` 中的 `padding: 20` 变为 `0` 试试效果。
// 所以 `flex: 1` 这个没有必要乱写，不需要就不写。
// 思考：为什么在设置 `padding: 20` 的情况下，`container` 显示那黑色一部分的原理是什么？
const styles1 = StyleSheet.create({
  mainContainer: {
    padding: 0,
    backgroundColor: "darkorchid"
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
});

// 与 `style1` 对应，只有父视图和子视图都设置了对应的 `flex`，视图才会正常展示效果，所以一般情况下 `flex` 可以不写。
const styles2 = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: "darkorchid"
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
});

const theStyle = styles2

export default Flex;
