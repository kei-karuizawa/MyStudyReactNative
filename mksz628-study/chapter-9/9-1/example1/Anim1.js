import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Animated
} from 'react-native';

export default () => {

  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button title='按钮' onPress={() => {
        // useNativeDriver：是否启动原生驱动？是否发送到原生去渲染动画，性能会差。
        // 如果选择发送到原生，那么其他与之相关的动画也必须是 `useNativeDriver: true`。
        Animated.timing(marginLeft, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }} />

      {/* 动画的根节点不能是 View，而是 Animated.View。 */}
      <Animated.View
        style={[
          styles.view,
          {marginLeft: marginLeft}
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: '#3050ff',
    marginTop: 20,
  },
});
